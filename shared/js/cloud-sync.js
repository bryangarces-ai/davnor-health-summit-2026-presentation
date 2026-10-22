/**
 * CloudSync — Supabase Real-Time Cloud Persistence
 * Province of Davao del Norte · Program Health Summit 2026
 *
 * Provides transparent, offline-first multi-computer synchronization
 * between Admin and Stage Presentation screens.
 */
(function () {
  'use strict';

  var SUPABASE_URL = 'https://ldyvxmvipeppfkqzuwxf.supabase.co';
  var SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxkeXZ4bXZpcGVwcGZrcXp1d3hmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTI2NzE1MjcsImV4cCI6MjEwODI0NzUyN30.rtMNsQug2-k3FkuI3AtO89nWW_q4wYeAWB_wvMBSlaI';

  var KNOWN_DECKS = [
    '00-program',
    '01-group',
    '02-individual',
    '03-top-program',
    '04-consolation'
  ];

  function normalizeDeckKey(k) {
    if (!k) return '';
    var str = String(k).toLowerCase();
    if (str.indexOf('00-program') !== -1) return '00-program';
    if (str.indexOf('01-group') !== -1) return '01-group';
    if (str.indexOf('02-individual') !== -1) return '02-individual';
    if (str.indexOf('03-top-program') !== -1) return '03-top-program';
    if (str.indexOf('04-consolation') !== -1) return '04-consolation';
    return str;
  }

  function getHeaders(extraHeaders) {
    var headers = {
      'apikey': SUPABASE_ANON_KEY,
      'Authorization': 'Bearer ' + SUPABASE_ANON_KEY
    };
    if (extraHeaders) {
      Object.keys(extraHeaders).forEach(function (k) {
        headers[k] = extraHeaders[k];
      });
    }
    return headers;
  }

  function fetchDeck(deckKey, callback) {
    if (!window.fetch) {
      if (callback) callback(null, null, null);
      return;
    }

    var norm = normalizeDeckKey(deckKey);
    var endpoint = SUPABASE_URL + '/rest/v1/custom_decks?deck_key=eq.' + encodeURIComponent(norm) + '&select=*';
    fetch(endpoint, {
      method: 'GET',
      headers: getHeaders()
    })
      .then(function (res) {
        if (!res.ok) throw new Error('HTTP ' + res.status);
        return res.json();
      })
      .then(function (data) {
        if (Array.isArray(data) && data.length > 0 && Array.isArray(data[0].slides)) {
          var slides = data[0].slides;
          try {
            localStorage.setItem('davnor_deck_' + norm, JSON.stringify(slides));
          } catch (e) {}
          if (callback) callback(null, slides, data[0].updated_at);
        } else {
          if (callback) callback(null, null, null);
        }
      })
      .catch(function (err) {
        console.warn('[CloudSync] fetchDeck notice:', err.message);
        if (callback) callback(err, null, null);
      });
  }

  function saveDeck(deckKey, slides, callback) {
    if (!window.fetch) {
      if (callback) callback(null, false);
      return;
    }

    var norm = normalizeDeckKey(deckKey);
    var endpoint = SUPABASE_URL + '/rest/v1/custom_decks';
    var payload = [{
      deck_key: norm,
      slides: slides,
      updated_at: new Date().toISOString()
    }];

    fetch(endpoint, {
      method: 'POST',
      headers: getHeaders({
        'Content-Type': 'application/json',
        'Prefer': 'resolution=merge-duplicates,return=minimal'
      }),
      body: JSON.stringify(payload)
    })
      .then(function (res) {
        if (!res.ok) throw new Error('HTTP ' + res.status);
        console.log('[CloudSync] Saved deck ' + norm + ' to Supabase successfully.');
        if (callback) callback(null, true);
      })
      .catch(function (err) {
        console.warn('[CloudSync] saveDeck warning:', err.message);
        if (callback) callback(err, false);
      });
  }

  function deleteDeck(deckKey, callback) {
    if (!window.fetch) {
      if (callback) callback(null, false);
      return;
    }

    var norm = normalizeDeckKey(deckKey);
    var endpoint = SUPABASE_URL + '/rest/v1/custom_decks?deck_key=eq.' + encodeURIComponent(norm);
    fetch(endpoint, {
      method: 'DELETE',
      headers: getHeaders()
    })
      .then(function (res) {
        if (!res.ok) throw new Error('HTTP ' + res.status);
        console.log('[CloudSync] Deleted deck ' + norm + ' from Supabase.');
        if (callback) callback(null, true);
      })
      .catch(function (err) {
        console.warn('[CloudSync] deleteDeck warning:', err.message);
        if (callback) callback(err, false);
      });
  }

  function fetchAllDecks(callback) {
    if (!window.fetch) {
      if (callback) callback(null, []);
      return;
    }

    var endpoint = SUPABASE_URL + '/rest/v1/custom_decks?select=*';
    fetch(endpoint, {
      method: 'GET',
      headers: getHeaders()
    })
      .then(function (res) {
        if (!res.ok) throw new Error('HTTP ' + res.status);
        return res.json();
      })
      .then(function (rows) {
        if (Array.isArray(rows)) {
          var updatedKeys = [];
          rows.forEach(function (r) {
            if (r.deck_key && Array.isArray(r.slides)) {
              var norm = normalizeDeckKey(r.deck_key);
              try {
                localStorage.setItem('davnor_deck_' + norm, JSON.stringify(r.slides));
                updatedKeys.push(norm);
              } catch (e) {}
            }
          });
          console.log('[CloudSync] Fetched ' + updatedKeys.length + ' decks from Supabase.');
          if (callback) callback(null, updatedKeys);
        } else {
          if (callback) callback(null, []);
        }
      })
      .catch(function (err) {
        console.warn('[CloudSync] fetchAllDecks warning:', err.message);
        if (callback) callback(err, []);
      });
  }

  function syncLocalToCloud(callback) {
    if (!window.fetch) {
      if (callback) callback(null, 0);
      return;
    }

    var pending = [];
    var seen = {};

    // 1. Scan standard known deck keys
    KNOWN_DECKS.forEach(function (k) {
      try {
        var raw = localStorage.getItem('davnor_deck_' + k);
        if (raw) {
          var parsed = JSON.parse(raw);
          if (Array.isArray(parsed) && parsed.length > 0) {
            pending.push({
              deck_key: k,
              slides: parsed,
              updated_at: new Date().toISOString()
            });
            seen[k] = true;
          }
        }
      } catch (e) {}
    });

    // 2. Scan entire localStorage for any other davnor_deck_ keys (including long folder names)
    try {
      if (typeof localStorage !== 'undefined') {
        for (var i = 0; i < localStorage.length; i++) {
          var storageKey = localStorage.key(i);
          if (storageKey && storageKey.indexOf('davnor_deck_') === 0) {
            var rawKey = storageKey.replace('davnor_deck_', '');
            var norm = normalizeDeckKey(rawKey);
            if (!seen[norm]) {
              var raw = localStorage.getItem(storageKey);
              if (raw) {
                var parsed = JSON.parse(raw);
                if (Array.isArray(parsed) && parsed.length > 0) {
                  pending.push({
                    deck_key: norm,
                    slides: parsed,
                    updated_at: new Date().toISOString()
                  });
                  seen[norm] = true;
                }
              }
            }
          }
        }
      }
    } catch (e) {}

    if (pending.length === 0) {
      console.log('[CloudSync] No local customizations to upload.');
      if (callback) callback(null, 0);
      return;
    }

    var endpoint = SUPABASE_URL + '/rest/v1/custom_decks';
    fetch(endpoint, {
      method: 'POST',
      headers: getHeaders({
        'Content-Type': 'application/json',
        'Prefer': 'resolution=merge-duplicates,return=minimal'
      }),
      body: JSON.stringify(pending)
    })
      .then(function (res) {
        if (!res.ok) throw new Error('HTTP ' + res.status);
        console.log('[CloudSync] Pushed ' + pending.length + ' local custom decks to Supabase!');
        if (callback) callback(null, pending.length);
      })
      .catch(function (err) {
        console.warn('[CloudSync] syncLocalToCloud warning:', err.message);
        if (callback) callback(err, 0);
      });
  }

  window.CloudSync = {
    fetchDeck: fetchDeck,
    saveDeck: saveDeck,
    deleteDeck: deleteDeck,
    fetchAllDecks: fetchAllDecks,
    syncLocalToCloud: syncLocalToCloud,
    normalizeDeckKey: normalizeDeckKey,
    KNOWN_DECKS: KNOWN_DECKS
  };
})();
