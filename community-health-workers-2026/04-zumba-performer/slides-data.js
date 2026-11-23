(function () {
  // Source: Community Health Workers Congress 2026
  var data = [
  {
    "id": 0,
    "type": "title",
    "event": "COMMUNITY HEALTH WORKERS 2026",
    "subEvent": "Province of Davao del Norte \u00b7 Provincial Health Office",
    "title": "ZUMBA DANCE COMPETITION",
    "category": "OFFICIAL CONTINGENTS & PERFORMERS",
    "citation": "\u201cDigitalisasyon ng Kalusugan: Kaagapay sa Kalinaw ug Kalamboan\u201d\nNovember 24 & 25, 2026 \u00b7 Carmen Gymnasium, Carmen, Davao del Norte"
  },
  {
    "id": 1,
    "type": "awardee",
    "title": "RUBY ROSAL, RMT",
    "category": "PRESENTATION OF CRITERIA",
    "subtitle": "Medical Technologist II \u00b7 Zumba Contest Criteria",
    "department": "Provincial Health Office \u00b7 Province of Davao del Norte",
    "categoryTag": "ZUMBA CRITERIA"
  },
  {
    "id": 2,
    "type": "awardee",
    "title": "MUNICIPALITY OF ASUNCION",
    "category": "ZUMBA DANCE COMPETITION",
    "subtitle": "Community Health Workers Dance Contingent",
    "department": "Province of Davao del Norte",
    "categoryTag": "ZUMBA PERFORMER",
    "image": "../../shared/assets/lgu-logos/asuncion.png",
    "isLogo": true
  },
  {
    "id": 3,
    "type": "awardee",
    "title": "MUNICIPALITY OF BRAULIO E. DUJALI",
    "category": "ZUMBA DANCE COMPETITION",
    "subtitle": "Community Health Workers Dance Contingent",
    "department": "Province of Davao del Norte",
    "categoryTag": "ZUMBA PERFORMER",
    "image": "../../shared/assets/lgu-logos/dujali.png",
    "isLogo": true
  },
  {
    "id": 4,
    "type": "awardee",
    "title": "MUNICIPALITY OF CARMEN",
    "category": "ZUMBA DANCE COMPETITION",
    "subtitle": "Community Health Workers Dance Contingent",
    "department": "Province of Davao del Norte",
    "categoryTag": "ZUMBA PERFORMER",
    "image": "../../shared/assets/lgu-logos/carmen.png",
    "isLogo": true
  },
  {
    "id": 5,
    "type": "awardee",
    "title": "MUNICIPALITY OF KAPALONG",
    "category": "ZUMBA DANCE COMPETITION",
    "subtitle": "Community Health Workers Dance Contingent",
    "department": "Province of Davao del Norte",
    "categoryTag": "ZUMBA PERFORMER",
    "image": "../../shared/assets/lgu-logos/kapalong.png",
    "isLogo": true
  },
  {
    "id": 6,
    "type": "awardee",
    "title": "MUNICIPALITY OF NEW CORELLA",
    "category": "ZUMBA DANCE COMPETITION",
    "subtitle": "Community Health Workers Dance Contingent",
    "department": "Province of Davao del Norte",
    "categoryTag": "ZUMBA PERFORMER",
    "image": "../../shared/assets/lgu-logos/new-corella.png",
    "isLogo": true
  },
  {
    "id": 7,
    "type": "awardee",
    "title": "CITY OF PANABO",
    "category": "ZUMBA DANCE COMPETITION",
    "subtitle": "Community Health Workers Dance Contingent",
    "department": "Province of Davao del Norte",
    "categoryTag": "ZUMBA PERFORMER",
    "image": "../../shared/assets/lgu-logos/panabo.png",
    "isLogo": true
  },
  {
    "id": 8,
    "type": "awardee",
    "title": "ISLAND GARDEN CITY OF SAMAL",
    "category": "ZUMBA DANCE COMPETITION",
    "subtitle": "Community Health Workers Dance Contingent",
    "department": "Province of Davao del Norte",
    "categoryTag": "ZUMBA PERFORMER",
    "image": "../../shared/assets/lgu-logos/igacos.png",
    "isLogo": true
  },
  {
    "id": 9,
    "type": "awardee",
    "title": "MUNICIPALITY OF SAN ISIDRO (SAWATA)",
    "category": "ZUMBA DANCE COMPETITION",
    "subtitle": "Community Health Workers Dance Contingent",
    "department": "Province of Davao del Norte",
    "categoryTag": "ZUMBA PERFORMER",
    "image": "../../shared/assets/lgu-logos/sawata.png",
    "isLogo": true
  },
  {
    "id": 10,
    "type": "awardee",
    "title": "MUNICIPALITY OF SANTO TOMAS",
    "category": "ZUMBA DANCE COMPETITION",
    "subtitle": "Community Health Workers Dance Contingent",
    "department": "Province of Davao del Norte",
    "categoryTag": "ZUMBA PERFORMER",
    "image": "../../shared/assets/lgu-logos/sto-tomas.png",
    "isLogo": true
  },
  {
    "id": 11,
    "type": "awardee",
    "title": "CITY OF TAGUM",
    "category": "ZUMBA DANCE COMPETITION",
    "subtitle": "Community Health Workers Dance Contingent",
    "department": "Province of Davao del Norte",
    "categoryTag": "ZUMBA PERFORMER",
    "image": "../../shared/assets/lgu-logos/tagum.png",
    "isLogo": true
  },
  {
    "id": 12,
    "type": "awardee",
    "title": "MUNICIPALITY OF TALAINGOD",
    "category": "ZUMBA DANCE COMPETITION",
    "subtitle": "Community Health Workers Dance Contingent",
    "department": "Province of Davao del Norte",
    "categoryTag": "ZUMBA PERFORMER",
    "image": "../../shared/assets/lgu-logos/talaingod.png",
    "isLogo": true
  },
  {
    "id": 13,
    "type": "awardee",
    "title": "AWARDING OF WINNERS: ZUMBA CONTEST",
    "category": "COMPETITION AWARDS",
    "subtitle": "Celebration of Energy, Wellness and Teamwork",
    "department": "Community Health Workers Congress 2026",
    "categoryTag": "ZUMBA CHAMPIONS"
  },
  {
    "id": 14,
    "type": "awardee",
    "title": "AWARDING OF TOP PERFORMING DHIMS",
    "category": "CEREMONY PROPER",
    "subtitle": "Purok Category \u00b7 Barangay Category \u00b7 LGU Category",
    "department": "Davao del Norte Health Information Management System (DHIMS)",
    "categoryTag": "AWARDING CEREMONY",
    "citations": [
      "Purok Category (<500 & \u2265500 Population)",
      "Barangay Category (Household Profiling & Timeliness)",
      "LGU Category Performance Recognition"
    ]
  },
  {
    "id": 15,
    "type": "closing",
    "title": "DAGHANG SALAMAT TO ALL OUR ZUMBA PERFORMERS!",
    "subtitle": "COMMUNITY HEALTH WORKERS CONGRESS 2026",
    "citation": "\u201cDigitalisasyon ng Kalusugan: Kaagapay sa Kalinaw ug Kalamboan\u201d\nProvince of Davao del Norte \u00b7 Provincial Health Office"
  }
];

  window.SLIDES_DATA = data;
  window.DECKS_CATALOG = window.DECKS_CATALOG || {};
  window.DECKS_CATALOG['chw-04-zumba-performer'] = data;
})();
