(function () {
  var data = [
  {
    "id": 0,
    "type": "title",
    "event": "PROGRAM HEALTH SUMMIT 2026",
    "title": "RECOGNITION OF SPECIAL AWARDS",
    "category": "INDIVIDUAL AWARDEES",
    "citation": "Honoring our Outstanding Health Leaders, Program Champions, Medical Specialists, and Dedicated Healthcare Workers",
    "subEvent": "Province of Davao del Norte"
  },
  {
    "id": 1,
    "type": "awardee",
    "title": "RODEL M. FLORES, MD, FPCS, FPSGS, MPA, MBA-HA",
    "number": 1,
    "category": "INDIVIDUAL AWARDEE",
    "subtitle": "DIGITAL HEALTH CHAMPION AWARD",
    "categoryTag": "INDIVIDUAL AWARDEE"
  },
  {
    "id": 2,
    "type": "awardee",
    "title": "KRISTIN C. TAN",
    "number": 2,
    "category": "INDIVIDUAL AWARDEE",
    "subtitle": "For her valuable contribution to the Province- wide Health Systems activities",
    "categoryTag": "INDIVIDUAL AWARDEE"
  },
  {
    "id": 3,
    "type": "awardee",
    "title": "JUSTIN M. VILLACORTA, MD",
    "number": 3,
    "category": "INDIVIDUAL AWARDEE",
    "subtitle": "OUTSTANDING PARTNER IN HEALTH",
    "categoryTag": "INDIVIDUAL AWARDEE"
  },
  {
    "id": 4,
    "type": "awardee",
    "title": "GENESES JEREMIAS L. APARE",
    "number": 4,
    "category": "INDIVIDUAL AWARDEE",
    "subtitle": "In recognition of his active role in halting the HIV epidemic",
    "categoryTag": "INDIVIDUAL AWARDEE"
  },
  {
    "id": 5,
    "type": "awardee",
    "title": "KEN RYAN DIZON, MN, MBA-HP, RN",
    "number": 5,
    "category": "INDIVIDUAL AWARDEE",
    "subtitle": "THE GUARDIAN OF PUBLIC HEALTH AWARD",
    "categoryTag": "INDIVIDUAL AWARDEE"
  },
  {
    "id": 6,
    "type": "awardee",
    "title": "FOOD AND DRUG ADMINISTRATION DAVAO TESTING AND QUALITY ASSURANCE LABORATORY",
    "number": 6,
    "category": "INDIVIDUAL AWARDEE",
    "citation": "For the unwavering support to the Provincial Epidemiology and Health Statistics Unit of Davao del Norte",
    "subtitle": "For the unwavering support to the Provincial Epidemiology and Health Statistic Unit of Davao Del Norte",
    "categoryTag": "INDIVIDUAL AWARDEE"
  },
  {
    "id": 7,
    "type": "awardee",
    "title": "SF01 REX E MAITEM, RN, EMT",
    "number": 7,
    "category": "INDIVIDUAL AWARDEE",
    "subtitle": "In grateful recognition of your exemplary service, unwavering commitment, and invaluable contribution to the Disaster Risk Reduction and Management in Health (DRRM-H) Program",
    "categoryTag": "INDIVIDUAL AWARDEE"
  },
  {
    "id": 8,
    "type": "awardee",
    "title": "MARY ANNE L. BERNAS",
    "number": 8,
    "category": "INDIVIDUAL AWARDEE",
    "subtitle": "PATHOLOGIST",
    "categoryTag": "INDIVIDUAL AWARDEE"
  },
  {
    "id": 9,
    "type": "awardee",
    "title": "ESPER ANN J. CASTAÑEDA",
    "number": 9,
    "category": "INDIVIDUAL AWARDEE",
    "subtitle": "PSYCHIATRIST",
    "categoryTag": "INDIVIDUAL AWARDEE"
  },
  {
    "id": 10,
    "type": "awardee",
    "title": "GLENN A. PONO",
    "number": 10,
    "category": "INDIVIDUAL AWARDEE",
    "subtitle": "PULMONOLOGIST",
    "categoryTag": "INDIVIDUAL AWARDEE"
  },
  {
    "id": 11,
    "type": "awardee",
    "title": "JANICE G. ESPARAGOZA",
    "number": 11,
    "category": "INDIVIDUAL AWARDEE",
    "subtitle": "RADIOLOGIST",
    "categoryTag": "INDIVIDUAL AWARDEE"
  },
  {
    "id": 12,
    "type": "awardee",
    "title": "DR. RACHELE JAN L. ENOJADA, DPBP, FPPA",
    "number": 12,
    "category": "INDIVIDUAL AWARDEE",
    "subtitle": "Consultant Psychiatrist of the Luntiang Paraiso Regional Rehabilitation Center",
    "categoryTag": "INDIVIDUAL AWARDEE"
  },
  {
    "id": 13,
    "type": "awardee",
    "title": "VINCENT KLENT P. JUMALON, RPSY",
    "number": 13,
    "category": "INDIVIDUAL AWARDEE",
    "subtitle": "Consultant Psychologist of the Luntiang Paraiso Regional Rehabilitation Center",
    "categoryTag": "INDIVIDUAL AWARDEE"
  },
  {
    "id": 14,
    "type": "awardee",
    "title": "REYMAR LANTICSE",
    "number": 14,
    "category": "INDIVIDUAL AWARDEE",
    "subtitle": "SPECIAL RECOGNITION FOR YOUTH LEADERSHIP AND SERVICE",
    "categoryTag": "INDIVIDUAL AWARDEE"
  },
  {
    "id": 15,
    "type": "awardee",
    "title": "JONALYN G. BETONIO",
    "number": 15,
    "category": "INDIVIDUAL AWARDEE",
    "subtitle": "SPECIAL RECOGNITION FOR YOUTH LEADERSHIP AND SERVICE",
    "categoryTag": "INDIVIDUAL AWARDEE"
  },
  {
    "id": 16,
    "type": "awardee",
    "title": "CHRISTIAN H. ANDACAO",
    "number": 16,
    "category": "INDIVIDUAL AWARDEE",
    "subtitle": "SPECIAL RECOGNITION FOR YOUTH LEADERSHIP AND SERVICE",
    "categoryTag": "INDIVIDUAL AWARDEE"
  },
  {
    "id": 17,
    "type": "awardee",
    "title": "SHENE CEDRICK S. ELIZADA",
    "number": 17,
    "category": "INDIVIDUAL AWARDEE",
    "subtitle": "SPECIAL RECOGNITION FOR YOUTH LEADERSHIP AND SERVICE",
    "categoryTag": "INDIVIDUAL AWARDEE"
  },
  {
    "id": 18,
    "type": "awardee",
    "title": "HERACATTE BALINANG",
    "number": 18,
    "category": "INDIVIDUAL AWARDEE",
    "subtitle": "SPECIAL RECOGNITION FOR YOUTH LEADERSHIP AND SERVICE",
    "categoryTag": "INDIVIDUAL AWARDEE"
  },
  {
    "id": 19,
    "type": "awardee",
    "title": "CHRISTIAN C. MAHINAY",
    "number": 19,
    "category": "INDIVIDUAL AWARDEE",
    "subtitle": "SPECIAL RECOGNITION FOR YOUTH LEADERSHIP AND SERVICE",
    "categoryTag": "INDIVIDUAL AWARDEE"
  },
  {
    "id": 20,
    "type": "awardee",
    "title": "MARIECREZ ANGEL B. DELGADO",
    "number": 20,
    "category": "INDIVIDUAL AWARDEE",
    "subtitle": "SPECIAL RECOGNITION FOR YOUTH LEADERSHIP AND SERVICE",
    "categoryTag": "INDIVIDUAL AWARDEE"
  },
  {
    "id": 21,
    "type": "awardee",
    "title": "ENGR. LORENA M. ORILLA , MPA",
    "number": 21,
    "category": "INDIVIDUAL AWARDEE",
    "subtitle": "",
    "categoryTag": "INDIVIDUAL AWARDEE"
  },
  {
    "id": 22,
    "type": "awardee",
    "title": "DR. NANCY O. CACAYORIN",
    "number": 22,
    "category": "INDIVIDUAL AWARDEE",
    "subtitle": "",
    "categoryTag": "INDIVIDUAL AWARDEE"
  },
  {
    "id": 23,
    "type": "awardee",
    "title": "DR. MA. CRISTINA B. JIMENA",
    "number": 23,
    "category": "INDIVIDUAL AWARDEE",
    "subtitle": "",
    "categoryTag": "INDIVIDUAL AWARDEE"
  },
  {
    "id": 24,
    "type": "awardee",
    "title": "MARITES B. SOBRECAREY, RSW",
    "number": 24,
    "category": "INDIVIDUAL AWARDEE",
    "subtitle": "",
    "categoryTag": "INDIVIDUAL AWARDEE"
  },
  {
    "id": 25,
    "type": "closing",
    "title": "CONGRATULATIONS TO ALL AWARDEES",
    "citation": "Thank you for your tireless dedication, exemplary service, and enduring partnership in advancing public health for the Province of Davao del Norte.",
    "subtitle": "INDIVIDUAL AWARDEES"
  }
];

  window.SLIDES_DATA = data;
  window.DECKS_CATALOG = window.DECKS_CATALOG || {};
  window.DECKS_CATALOG['02-individual'] = data;
  window.DECKS_CATALOG['02-individual-awardees'] = data;
})();
