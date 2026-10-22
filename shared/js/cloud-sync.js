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
    '00-program-health-summit-2026',
    '01-group-awardees',
    '02-individual-awardees',
    '03-top-program-managers',
    '04-consolation-and-winners'
  ];

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
      if (callback) callback(null, null);
      return;
    }

    var endpoint = SUPABASE_URL + '/rest/v1/custom_decks?deck_key=eq.' + encodeURIComponent(deckKey) + '&select=*';
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
            localStorage.setItem('davnor_deck_' + deckKey, JSON.stringify(slides));
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

    var endpoint = SUPABASE_URL + '/rest/v1/custom_decks';
    var payload = [{
      deck_key: deckKey,
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

    var endpoint = SUPABASE_URL + '/rest/v1/custom_decks?deck_key=eq.' + encodeURIComponent(deckKey);
    fetch(endpoint, {
      method: 'DELETE',
      headers: getHeaders()
    })
      .then(function (res) {
        if (!res.ok) throw new Error('HTTP ' + res.status);
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
              try {
                localStorage.setItem('davnor_deck_' + r.deck_key, JSON.stringify(r.slides));
                updatedKeys.push(r.deck_key);
              } catch (e) {}
            }
          });
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
          }
        }
      } catch (e) {}
    });

    if (pending.length === 0) {
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
    KNOWN_DECKS: KNOWN_DECKS
  };
})();
