(function () {
  'use strict';

  var DECKS = [
    { key: '00-program', name: '00 · MC Programme', path: '../00-program-health-summit-2026/', file: 'slides-data.js' },
    { key: '01-group', name: '01 · Group Awardees', path: '../01-group-awardees/', file: 'slides-data.js' },
    { key: '02-individual', name: '02 · Individual Awardees', path: '../02-individual-awardees/', file: 'slides-data.js' },
    { key: '03-top-program', name: '03 · Top Program Managers', path: '../03-top-program-managers/', file: 'slides-data.js' },
    { key: '04-consolation', name: '04 · Consolation & Winners', path: '../04-consolation-and-winners/', file: 'slides-data.js' }
  ];

  var currentDeckKey = '04-consolation';
  var editingSlide = null;
  var editingCitations = [];
  var currentSearchQuery = '';

  function getDeckSlides(key) {
    try {
      var saved = localStorage.getItem('davnor_deck_' + key);
      if (saved) {
        var parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch (e) {
      console.warn('Error reading deck from localStorage:', e);
    }
    return (window.DECKS_CATALOG && window.DECKS_CATALOG[key]) ? JSON.parse(JSON.stringify(window.DECKS_CATALOG[key])) : [];
  }

  function isDeckCustomized(key) {
    return !!localStorage.getItem('davnor_deck_' + key);
  }

  function saveDeckSlides(key, slides) {
    try {
      localStorage.setItem('davnor_deck_' + key, JSON.stringify(slides));
      broadcastSync(key);
      showToast('✓ Saved and synced live to presentation!');
    } catch (e) {
      alert('Failed to save to localStorage: ' + e.message);
    }
  }

  function resetDeck(key) {
    if (!confirm('Are you sure you want to reset this deck back to the default PowerPoint data? Any custom edits for this deck will be cleared.')) return;
    localStorage.removeItem('davnor_deck_' + key);
    broadcastSync(key);
    showToast('🔄 Deck reset to original PowerPoint default');
    renderTabs();
    renderSlidesGrid();
  }

  function broadcastSync(key) {
    if (window.BroadcastChannel) {
      try {
        var bc = new BroadcastChannel('davnor_deck_sync');
        bc.postMessage({ deckKey: key, action: 'update', timestamp: Date.now() });
      } catch (e) {}
    }
  }

  function showToast(msg) {
    var toast = document.getElementById('toastNotice');
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(function () {
      toast.classList.remove('show');
    }, 3200);
  }

  function renderTabs() {
    var container = document.getElementById('deckTabsContainer');
    if (!container) return;

    container.innerHTML = DECKS.map(function (d) {
      var slides = getDeckSlides(d.key);
      var isCustom = isDeckCustomized(d.key);
      var isActive = d.key === currentDeckKey ? ' active' : '';
      var customBadge = isCustom ? ' <span style="color:var(--admin-pink);">●</span>' : '';
      return '<div class="deck-tab' + isActive + '" onclick="window.AdminApp.selectDeck(\'' + d.key + '\')">' +
             '  <span>' + escapeHtml(d.name) + customBadge + '</span>' +
             '  <span class="tab-badge">' + slides.length + '</span>' +
             '</div>';
    }).join('');
  }

  function renderSlidesGrid() {
    var grid = document.getElementById('slidesGrid');
    var stats = document.getElementById('toolbarStats');
    if (!grid) return;

    var slides = getDeckSlides(currentDeckKey);
    var filter = currentSearchQuery.toLowerCase().trim();

    var filtered = slides.filter(function (s) {
      if (!filter) return true;
      var matchTitle = s.title && s.title.toLowerCase().indexOf(filter) !== -1;
      var matchSub = s.subtitle && s.subtitle.toLowerCase().indexOf(filter) !== -1;
      var matchCat = s.category && s.category.toLowerCase().indexOf(filter) !== -1;
      var matchCitations = s.citations && Array.isArray(s.citations) && s.citations.some(function (c) {
        return c.toLowerCase().indexOf(filter) !== -1;
      });
      return matchTitle || matchSub || matchCat || matchCitations;
    });

    if (stats) {
      stats.textContent = 'Showing ' + filtered.length + ' of ' + slides.length + ' slides' + (isDeckCustomized(currentDeckKey) ? ' (Customized)' : '');
    }

    if (filtered.length === 0) {
      grid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 60px; color: var(--admin-slate); font-weight: 600;">No slides match "' + escapeHtml(filter) + '"</div>';
      return;
    }

    var defaultSlides = (window.DECKS_CATALOG && window.DECKS_CATALOG[currentDeckKey]) || [];

    grid.innerHTML = filtered.map(function (s) {
      var orig = defaultSlides.find(function (x) { return x.id === s.id; });
      var isModified = orig && JSON.stringify(orig) !== JSON.stringify(s);

      var citationsList = [];
      if (Array.isArray(s.citations) && s.citations.length > 0) {
        citationsList = s.citations;
      } else if (typeof s.subtitle === 'string' && s.subtitle.indexOf(' | ') !== -1) {
        citationsList = s.subtitle.split(' | ');
      }

      var citationsBadge = citationsList.length > 1
        ? '<div class="slide-badges-count">✦ ' + citationsList.length + ' Award Citations</div>'
        : '';

      var deckConfig = DECKS.find(function (d) { return d.key === currentDeckKey; });
      var stageUrl = (deckConfig ? deckConfig.path : '#') + '#' + s.id;

      return [
        '<div class="slide-card' + (isModified ? ' is-customized' : '') + '">',
        '  <div>',
        '    <div class="slide-card-header">',
        '      <span class="slide-num-badge">#' + (s.id < 10 ? '0' + s.id : s.id) + '</span>',
        '      <div style="display:flex; gap:6px; align-items:center;">',
        isModified ? '        <span class="slide-custom-badge">Modified</span>' : '',
        '        <span class="slide-type-tag">' + escapeHtml(s.type || 'awardee') + '</span>',
        '      </div>',
        '    </div>',
        s.category ? '    <div class="slide-card-cat">' + escapeHtml(s.category) + '</div>' : '',
        '    <h3 class="slide-card-title">' + escapeHtml(s.title || 'Untitled Slide') + '</h3>',
        s.subtitle && citationsList.length <= 1 ? '    <p class="slide-card-sub">' + escapeHtml(s.subtitle) + '</p>' : '',
        citationsBadge,
        '  </div>',
        '  <div class="slide-card-footer">',
        '    <a href="' + stageUrl + '" target="_blank" class="btn btn-secondary btn-sm" title="View in live deck">🚀 Stage View</a>',
        '    <button class="btn btn-primary btn-sm" onclick="window.AdminApp.openEditor(' + s.id + ')">✏️ Edit Slide</button>',
        '  </div>',
        '</div>'
      ].join('');
    }).join('');
  }

  function openEditor(slideId) {
    var slides = getDeckSlides(currentDeckKey);
    var slide = slides.find(function (s) { return s.id === slideId; });
    if (!slide) return;

    editingSlide = JSON.parse(JSON.stringify(slide));

    // Extract citations
    if (Array.isArray(editingSlide.citations)) {
      editingCitations = editingSlide.citations.slice();
    } else if (typeof editingSlide.subtitle === 'string' && editingSlide.subtitle.indexOf(' | ') !== -1) {
      editingCitations = editingSlide.subtitle.split(' | ').map(function (c) { return c.trim(); }).filter(Boolean);
    } else {
      editingCitations = [];
    }

    document.getElementById('editSlideId').value = editingSlide.id;
    document.getElementById('editSlideType').value = editingSlide.type || 'awardee';
    document.getElementById('editSlideTitle').value = editingSlide.title || '';
    document.getElementById('editSlideCategory').value = editingSlide.category || '';
    document.getElementById('editSlideCategoryTag').value = editingSlide.categoryTag || '';

    // Subtitle input (hide if multi citations)
    var subInput = document.getElementById('editSlideSubtitle');
    if (subInput) {
      subInput.value = editingCitations.length > 0 ? (editingSlide.subtitle || '') : (editingSlide.subtitle || '');
    }

    renderCitationsList();
    updateLivePreview();

    document.getElementById('editModal').classList.add('open');
  }

  function renderCitationsList() {
    var container = document.getElementById('citationsListContainer');
    if (!container) return;

    if (editingCitations.length === 0) {
      container.innerHTML = '<div style="color:var(--admin-slate); font-size:0.85rem; padding: 8px 0;">No individual citation badges. Subtitle will render as normal text.</div>';
      return;
    }

    container.innerHTML = editingCitations.map(function (c, idx) {
      return [
        '<div class="citation-edit-row">',
        '  <span style="color:var(--admin-gold); font-size:0.85rem;">✦</span>',
        '  <input type="text" value="' + escapeHtml(c) + '" oninput="window.AdminApp.updateCitation(' + idx + ', this.value)" />',
        '  <button type="button" class="citation-delete-btn" onclick="window.AdminApp.deleteCitation(' + idx + ')" title="Remove citation">✕</button>',
        '</div>'
      ].join('');
    }).join('');
  }

  function addCitation() {
    var input = document.getElementById('newCitationInput');
    if (!input || !input.value.trim()) return;
    editingCitations.push(input.value.trim());
    input.value = '';
    renderCitationsList();
    updateLivePreview();
  }

  function updateCitation(index, val) {
    if (editingCitations[index] !== undefined) {
      editingCitations[index] = val;
      updateLivePreview();
    }
  }

  function deleteCitation(index) {
    editingCitations.splice(index, 1);
    renderCitationsList();
    updateLivePreview();
  }

  function updateLivePreview() {
    var preview = document.getElementById('slideLivePreview');
    if (!preview) return;

    var title = document.getElementById('editSlideTitle').value || 'Awardee Title';
    var category = document.getElementById('editSlideCategory').value;
    var subtitle = document.getElementById('editSlideSubtitle').value;

    var pillsHtml = '';
    if (editingCitations.length > 0) {
      var is2Col = editingCitations.length >= 4;
      pillsHtml = '<div style="display:grid; grid-template-columns:' + (is2Col ? '1fr 1fr' : '1fr') + '; gap:8px; margin-top:12px; max-width:800px; width:100%;">';
      pillsHtml += editingCitations.map(function (c) {
        return '<div style="background:rgba(255,255,255,0.88); border:1px solid rgba(216,27,96,0.3); border-left:3px solid #D81B60; padding:6px 12px; border-radius:6px; font-size:0.75rem; font-weight:700; color:#0F1E36; text-align:left;">✦ ' + escapeHtml(c) + '</div>';
      }).join('');
      pillsHtml += '</div>';
    } else if (subtitle) {
      pillsHtml = '<div style="color:#880E4F; font-size:1.1rem; font-weight:600; margin-top:8px;">' + escapeHtml(subtitle) + '</div>';
    }

    preview.innerHTML = [
      '<div style="background:linear-gradient(135deg, #FFF5F7 0%, #F0F9FF 100%); border:2px solid #E2E8F0; border-radius:12px; padding:24px; text-align:center; display:flex; flex-direction:column; align-items:center;">',
      '  <div style="font-size:0.75rem; font-weight:800; letter-spacing:2px; color:#1E88E5; text-transform:uppercase; margin-bottom:4px;">' + escapeHtml(category || 'CATEGORY') + '</div>',
      '  <h2 style="font-size:1.4rem; font-weight:900; color:#0F1E36; text-transform:uppercase; margin:6px 0;">' + escapeHtml(title) + '</h2>',
      '  <div style="width:120px; height:2px; background:#D4AF37; margin:8px auto;"></div>',
      pillsHtml,
      '</div>'
    ].join('');
  }

  function saveCurrentSlide() {
    if (!editingSlide) return;

    var slides = getDeckSlides(currentDeckKey);
    var slide = slides.find(function (s) { return s.id === editingSlide.id; });
    if (!slide) return;

    slide.type = document.getElementById('editSlideType').value;
    slide.title = document.getElementById('editSlideTitle').value;
    slide.category = document.getElementById('editSlideCategory').value;
    slide.categoryTag = document.getElementById('editSlideCategoryTag').value;

    if (editingCitations.length > 0) {
      slide.citations = editingCitations.slice();
      slide.subtitle = editingCitations.join(' | ');
    } else {
      slide.subtitle = document.getElementById('editSlideSubtitle').value;
      delete slide.citations;
    }

    saveDeckSlides(currentDeckKey, slides);
    closeEditor();
    renderTabs();
    renderSlidesGrid();
  }

  function closeEditor() {
    editingSlide = null;
    editingCitations = [];
    var modal = document.getElementById('editModal');
    if (modal) modal.classList.remove('open');
  }

  function downloadCurrentDeckJs() {
    var slides = getDeckSlides(currentDeckKey);
    var deck = DECKS.find(function (d) { return d.key === currentDeckKey; });
    var content = "(function () {\n" +
                  "  var data = " + JSON.stringify(slides, null, 2) + ";\n" +
                  "  window.SLIDES_DATA = data;\n" +
                  "  window.DECKS_CATALOG = window.DECKS_CATALOG || {};\n" +
                  "  window.DECKS_CATALOG['" + currentDeckKey + "'] = data;\n" +
                  "})();\n";

    var blob = new Blob([content], { type: 'application/javascript;charset=utf-8' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = 'slides-data.js';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast('⬇️ Downloaded updated slides-data.js for ' + (deck ? deck.name : currentDeckKey));
  }

  function exportAllBackup() {
    var allData = {};
    DECKS.forEach(function (d) {
      allData[d.key] = getDeckSlides(d.key);
    });

    var blob = new Blob([JSON.stringify(allData, null, 2)], { type: 'application/json;charset=utf-8' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = 'davnor-health-summit-all-decks-backup.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast('💾 Exported full backup for all 5 decks!');
  }

  function triggerImportBackup() {
    var input = document.getElementById('importBackupFileInput');
    if (input) input.click();
  }

  function handleImportFile(file) {
    if (!file) return;
    var reader = new FileReader();
    reader.onload = function (e) {
      try {
        var data = JSON.parse(e.target.result);
        if (typeof data === 'object') {
          var count = 0;
          Object.keys(data).forEach(function (key) {
            if (Array.isArray(data[key])) {
              localStorage.setItem('davnor_deck_' + key, JSON.stringify(data[key]));
              broadcastSync(key);
              count++;
            }
          });
          showToast('✓ Successfully imported customizations for ' + count + ' decks!');
          renderTabs();
          renderSlidesGrid();
        }
      } catch (err) {
        alert('Failed to parse backup JSON: ' + err.message);
      }
    };
    reader.readAsText(file);
  }

  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function selectDeck(key) {
    currentDeckKey = key;
    renderTabs();
    renderSlidesGrid();
  }

  function init() {
    renderTabs();
    renderSlidesGrid();

    var searchInput = document.getElementById('slideSearchInput');
    if (searchInput) {
      searchInput.addEventListener('input', function (e) {
        currentSearchQuery = e.target.value;
        renderSlidesGrid();
      });
    }

    var importInput = document.getElementById('importBackupFileInput');
    if (importInput) {
      importInput.addEventListener('change', function (e) {
        if (e.target.files && e.target.files[0]) {
          handleImportFile(e.target.files[0]);
        }
      });
    }

    // Modal close on backdrop click
    var modal = document.getElementById('editModal');
    if (modal) {
      modal.addEventListener('click', function (e) {
        if (e.target === modal) closeEditor();
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window.AdminApp = {
    selectDeck: selectDeck,
    openEditor: openEditor,
    closeEditor: closeEditor,
    addCitation: addCitation,
    updateCitation: updateCitation,
    deleteCitation: deleteCitation,
    updateLivePreview: updateLivePreview,
    saveCurrentSlide: saveCurrentSlide,
    resetDeck: function () { resetDeck(currentDeckKey); },
    downloadCurrentDeckJs: downloadCurrentDeckJs,
    exportAllBackup: exportAllBackup,
    triggerImportBackup: triggerImportBackup
  };
})();
