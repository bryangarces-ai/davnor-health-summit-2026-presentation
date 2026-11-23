(function () {
  // Source: Community Health Workers Congress 2026
  var data = [
  {
    "id": 0,
    "type": "title",
    "event": "COMMUNITY HEALTH WORKERS 2026",
    "subEvent": "Province of Davao del Norte \u00b7 Provincial Health Office",
    "title": "TOP PERFORMING BARANGAY",
    "category": "NOVEMBER 25, 2026",
    "citation": "In recognition of outstanding achievement in Household Profiling under the Davao del Norte Health Information Management System (DHIMS), January to October 2026.\nCarmen Gymnasium, Davao del Norte"
  },
  {
    "id": 1,
    "type": "awardee",
    "title": "BARANGAY COGON",
    "category": "TOP PERFORMING BARANGAY",
    "subtitle": "Talicud, Kaputian District \u00b7 Island Garden City of Samal",
    "department": "Davao del Norte Health Information Management System",
    "categoryTag": "TOP PERFORMING BARANGAY",
    "image": "../../shared/assets/lgu-logos/igacos.png",
    "isLogo": true,
    "citations": [
      "104.72% Accomplishment Rate",
      "34.7 Days Timeliness",
      "Household Profiling (Jan \u2013 Oct 2026)"
    ],
    "citation": "In recognition of its outstanding achievement in Household Profiling under the Davao del Norte Health Information Management System, attaining 104.72% Accomplishment Rate and 34.7 Days Timeliness from January to October 2026."
  },
  {
    "id": 2,
    "type": "awardee",
    "title": "BARANGAY KIOTOY",
    "category": "TOP PERFORMING BARANGAY",
    "subtitle": "City of Panabo",
    "department": "Davao del Norte Health Information Management System",
    "categoryTag": "TOP PERFORMING BARANGAY",
    "image": "../../shared/assets/lgu-logos/panabo.png",
    "isLogo": true,
    "citations": [
      "100% Accomplishment Rate",
      "42.2 Days Timeliness",
      "Household Profiling (Jan \u2013 Oct 2026)"
    ],
    "citation": "In recognition of its outstanding achievement in Household Profiling under the Davao del Norte Health Information Management System, attaining 100% Accomplishment Rate and 42.2 Days Timeliness from January to October 2026."
  },
  {
    "id": 3,
    "type": "awardee",
    "title": "BARANGAY UPPER LICANAN",
    "category": "TOP PERFORMING BARANGAY",
    "subtitle": "City of Panabo",
    "department": "Davao del Norte Health Information Management System",
    "categoryTag": "TOP PERFORMING BARANGAY",
    "image": "../../shared/assets/lgu-logos/panabo.png",
    "isLogo": true,
    "citations": [
      "100.04% Accomplishment Rate",
      "31 Days Timeliness",
      "Household Profiling (Jan \u2013 Oct 2026)"
    ],
    "citation": "In recognition of its outstanding achievement in Household Profiling under the Davao del Norte Health Information Management System, attaining 100.04% Accomplishment Rate and 31 Days Timeliness from January to October 2026."
  },
  {
    "id": 4,
    "type": "awardee",
    "title": "BARANGAY SAN ISIDRO",
    "category": "TOP PERFORMING BARANGAY",
    "subtitle": "Kaputian District \u00b7 Island Garden City of Samal",
    "department": "Davao del Norte Health Information Management System",
    "categoryTag": "TOP PERFORMING BARANGAY",
    "image": "../../shared/assets/lgu-logos/igacos.png",
    "isLogo": true,
    "citations": [
      "108.92% Accomplishment Rate",
      "28.5 Days Timeliness",
      "Household Profiling (Jan \u2013 Oct 2026)"
    ],
    "citation": "In recognition of its outstanding achievement in Household Profiling under the Davao del Norte Health Information Management System, attaining 108.92% Accomplishment Rate and 28.5 Days Timeliness from January to October 2026."
  },
  {
    "id": 5,
    "type": "awardee",
    "title": "BARANGAY AUNDANAO",
    "category": "TOP PERFORMING BARANGAY",
    "subtitle": "Samal District \u00b7 Island Garden City of Samal",
    "department": "Davao del Norte Health Information Management System",
    "categoryTag": "TOP PERFORMING BARANGAY",
    "image": "../../shared/assets/lgu-logos/igacos.png",
    "isLogo": true,
    "citations": [
      "101.99% Accomplishment Rate",
      "13.4 Days Timeliness",
      "Household Profiling (Jan \u2013 Oct 2026)"
    ],
    "citation": "In recognition of its outstanding achievement in Household Profiling under the Davao del Norte Health Information Management System, attaining 101.99% Accomplishment Rate and 13.4 Days Timeliness from January to October 2026."
  },
  {
    "id": 6,
    "type": "awardee",
    "title": "BARANGAY SION",
    "category": "TOP PERFORMING BARANGAY",
    "subtitle": "Kaputian District \u00b7 Island Garden City of Samal",
    "department": "Davao del Norte Health Information Management System",
    "categoryTag": "TOP PERFORMING BARANGAY",
    "image": "../../shared/assets/lgu-logos/igacos.png",
    "isLogo": true,
    "citations": [
      "125.48% Accomplishment Rate",
      "21.2 Days Timeliness",
      "Household Profiling (Jan \u2013 Oct 2026)"
    ],
    "citation": "In recognition of its outstanding achievement in Household Profiling under the Davao del Norte Health Information Management System, attaining 125.48% Accomplishment Rate and 21.2 Days Timeliness from January to October 2026."
  },
  {
    "id": 7,
    "type": "awardee",
    "title": "BARANGAY NEW PANDAN",
    "category": "PERFORMING BARANGAY",
    "subtitle": "City of Panabo",
    "department": "Davao del Norte Health Information Management System",
    "categoryTag": "PERFORMING BARANGAY",
    "image": "../../shared/assets/lgu-logos/panabo.png",
    "isLogo": true,
    "citations": [
      "100% Accomplishment Rate",
      "24.6 Days Timeliness",
      "Household Profiling (Jan \u2013 Oct 2026)"
    ],
    "citation": "In recognition of its outstanding achievement in Household Profiling under the Davao del Norte Health Information Management System, attaining 100% Accomplishment Rate and 24.6 Days Timeliness from January to October 2026."
  },
  {
    "id": 8,
    "type": "awardee",
    "title": "BARANGAY POBLACION",
    "category": "PERFORMING BARANGAY",
    "subtitle": "Kaputian District \u00b7 Island Garden City of Samal",
    "department": "Davao del Norte Health Information Management System",
    "categoryTag": "PERFORMING BARANGAY",
    "image": "../../shared/assets/lgu-logos/igacos.png",
    "isLogo": true,
    "citations": [
      "108.80% Accomplishment Rate",
      "25.4 Days Timeliness",
      "Household Profiling (Jan \u2013 Oct 2026)"
    ],
    "citation": "In recognition of its outstanding achievement in Household Profiling under the Davao del Norte Health Information Management System, attaining 108.80% Accomplishment Rate and 25.4 Days Timeliness from January to October 2026."
  },
  {
    "id": 9,
    "type": "awardee",
    "title": "BARANGAY LUNGA-OG",
    "category": "PERFORMING BARANGAY",
    "subtitle": "Municipality of Sto. Tomas",
    "department": "Davao del Norte Health Information Management System",
    "categoryTag": "PERFORMING BARANGAY",
    "image": "../../shared/assets/lgu-logos/sto-tomas.png",
    "isLogo": true,
    "citations": [
      "106.38% Accomplishment Rate",
      "10.6 Days Timeliness",
      "Household Profiling (Jan \u2013 Oct 2026)"
    ],
    "citation": "In recognition of its outstanding achievement in Household Profiling under the Davao del Norte Health Information Management System, attaining 106.38% Accomplishment Rate and 10.6 Days Timeliness from January to October 2026."
  },
  {
    "id": 10,
    "type": "awardee",
    "title": "BARANGAY LIBERTAD",
    "category": "PERFORMING BARANGAY",
    "subtitle": "Kaputian District \u00b7 Island Garden City of Samal",
    "department": "Davao del Norte Health Information Management System",
    "categoryTag": "PERFORMING BARANGAY",
    "image": "../../shared/assets/lgu-logos/igacos.png",
    "isLogo": true,
    "citations": [
      "111.24% Accomplishment Rate",
      "21.5 Days Timeliness",
      "Household Profiling (Jan \u2013 Oct 2026)"
    ],
    "citation": "In recognition of its outstanding achievement in Household Profiling under the Davao del Norte Health Information Management System, attaining 111.24% Accomplishment Rate and 21.5 Days Timeliness from January to October 2026."
  },
  {
    "id": 11,
    "type": "awardee",
    "title": "BARANGAY ESPERANZA",
    "category": "PERFORMING BARANGAY",
    "subtitle": "Municipality of Sto. Tomas",
    "department": "Davao del Norte Health Information Management System",
    "categoryTag": "PERFORMING BARANGAY",
    "image": "../../shared/assets/lgu-logos/sto-tomas.png",
    "isLogo": true,
    "citations": [
      "112.15% Accomplishment Rate",
      "14.5 Days Timeliness",
      "Household Profiling (Jan \u2013 Oct 2026)"
    ],
    "citation": "In recognition of its outstanding achievement in Household Profiling under the Davao del Norte Health Information Management System, attaining 112.15% Accomplishment Rate and 14.5 Days Timeliness from January to October 2026."
  },
  {
    "id": 12,
    "type": "awardee",
    "title": "BARANGAY SAN REMEGIO",
    "category": "PERFORMING BARANGAY",
    "subtitle": "Kaputian District \u00b7 Island Garden City of Samal",
    "department": "Davao del Norte Health Information Management System",
    "categoryTag": "PERFORMING BARANGAY",
    "image": "../../shared/assets/lgu-logos/igacos.png",
    "isLogo": true,
    "citations": [
      "112.41% Accomplishment Rate",
      "20.7 Days Timeliness",
      "Household Profiling (Jan \u2013 Oct 2026)"
    ],
    "citation": "In recognition of its outstanding achievement in Household Profiling under the Davao del Norte Health Information Management System, attaining 112.41% Accomplishment Rate and 20.7 Days Timeliness from January to October 2026."
  },
  {
    "id": 13,
    "type": "awardee",
    "title": "BARANGAY AUMBAY",
    "category": "PERFORMING BARANGAY",
    "subtitle": "Samal District \u00b7 Island Garden City of Samal",
    "department": "Davao del Norte Health Information Management System",
    "categoryTag": "PERFORMING BARANGAY",
    "image": "../../shared/assets/lgu-logos/igacos.png",
    "isLogo": true,
    "citations": [
      "104.62% Accomplishment Rate",
      "15.8 Days Timeliness",
      "Household Profiling (Jan \u2013 Oct 2026)"
    ],
    "citation": "In recognition of its outstanding achievement in Household Profiling under the Davao del Norte Health Information Management System, attaining 104.62% Accomplishment Rate and 15.8 Days Timeliness from January to October 2026."
  },
  {
    "id": 14,
    "type": "awardee",
    "title": "BARANGAY STA. CRUZ",
    "category": "PERFORMING BARANGAY",
    "subtitle": "City of Panabo",
    "department": "Davao del Norte Health Information Management System",
    "categoryTag": "PERFORMING BARANGAY",
    "image": "../../shared/assets/lgu-logos/panabo.png",
    "isLogo": true,
    "citations": [
      "100.02% Accomplishment Rate",
      "24.4 Days Timeliness",
      "Household Profiling (Jan \u2013 Oct 2026)"
    ],
    "citation": "In recognition of its outstanding achievement in Household Profiling under the Davao del Norte Health Information Management System, attaining 100.02% Accomplishment Rate and 24.4 Days Timeliness from January to October 2026."
  },
  {
    "id": 15,
    "type": "awardee",
    "title": "BARANGAY LINOSUTAN",
    "category": "PERFORMING BARANGAY",
    "subtitle": "Kaputian District \u00b7 Island Garden City of Samal",
    "department": "Davao del Norte Health Information Management System",
    "categoryTag": "PERFORMING BARANGAY",
    "image": "../../shared/assets/lgu-logos/igacos.png",
    "isLogo": true,
    "citations": [
      "113.88% Accomplishment Rate",
      "19 Days Timeliness",
      "Household Profiling (Jan \u2013 Oct 2026)"
    ],
    "citation": "In recognition of its outstanding achievement in Household Profiling under the Davao del Norte Health Information Management System, attaining 113.88% Accomplishment Rate and 19 Days Timeliness from January to October 2026."
  },
  {
    "id": 16,
    "type": "closing",
    "title": "CONGRATULATIONS TO ALL TOP PERFORMING BARANGAYS!",
    "subtitle": "COMMUNITY HEALTH VOLUNTEERS CONGRESS 2026",
    "citation": "Your dedication and commitment to excellence in health information management have significantly contributed to providing accurate and reliable health data for a healthier Davao del Norte."
  }
];

  window.SLIDES_DATA = data;
  window.DECKS_CATALOG = window.DECKS_CATALOG || {};
  window.DECKS_CATALOG['chw-06-top-performing-barangay-nov25'] = data;
})();
