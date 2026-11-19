(function () {
  // Source: NUTRITION CONGRESS AWARDS.xlsx & Program Flow (2026 Provincial Nutrition Congress)
  var data = [
  {
    "id": 0,
    "type": "title",
    "event": "2026 PROVINCIAL NUTRITION CONGRESS",
    "subEvent": "Province of Davao del Norte \u00b7 Provincial Health Office",
    "title": "AWARDING OF PLAQUES OF APPRECIATION TO NUTRITION PARTNERS",
    "category": "PLAQUES OF APPRECIATION",
    "citation": "Expressing profound gratitude for multi-sectoral leadership, technical guidance, and institutional synergy"
  },
  {
    "id": 1,
    "type": "awardee",
    "title": "NATIONAL NUTRITION COUNCIL DAVAO REGION",
    "number": 1,
    "category": "PLAQUE OF APPRECIATION",
    "subtitle": "National Nutrition Council - Region XI",
    "categoryTag": "NUTRITION PARTNER"
  },
  {
    "id": 2,
    "type": "awardee",
    "title": "DEPARTMENT OF HEALTH DAVAO REGION",
    "number": 2,
    "category": "PLAQUE OF APPRECIATION",
    "subtitle": "DOH Center for Health Development XI",
    "categoryTag": "NUTRITION PARTNER"
  },
  {
    "id": 3,
    "type": "awardee",
    "title": "HEALTH SYSTEM RESILIENCE PROJECT DAVAO REGION",
    "number": 3,
    "category": "PLAQUE OF APPRECIATION",
    "subtitle": "Technical & Development Partner",
    "categoryTag": "NUTRITION PARTNER"
  },
  {
    "id": 4,
    "type": "section",
    "title": "CERTIFICATE OF APPRECIATION FOR PROVINCIAL NUTRITION COMMITTEE",
    "categories": [
      "PROVINCIAL NUTRITION COMMITTEE",
      "MEMBER OFFICES"
    ],
    "categoryTag": "PNC MEMBER OFFICES"
  },
  {
    "id": 5,
    "type": "awardee",
    "title": "PROVINCIAL DISASTER RISK REDUCTION MANAGEMENT OFFICE",
    "number": 1,
    "category": "CERTIFICATE OF APPRECIATION",
    "subtitle": "PDRRMO \u00b7 Provincial Nutrition Committee Member Office",
    "categoryTag": "PNC MEMBER"
  },
  {
    "id": 6,
    "type": "awardee",
    "title": "PROVINCIAL ENVIRONMENT AND NATURAL RESOURCES OFFICE",
    "number": 2,
    "category": "CERTIFICATE OF APPRECIATION",
    "subtitle": "PENRO \u00b7 Provincial Nutrition Committee Member Office",
    "categoryTag": "PNC MEMBER"
  },
  {
    "id": 7,
    "type": "awardee",
    "title": "PROVINCIAL AGRICULTURE OFFICE",
    "number": 3,
    "category": "CERTIFICATE OF APPRECIATION",
    "subtitle": "PAGRO \u00b7 Provincial Nutrition Committee Member Office",
    "categoryTag": "PNC MEMBER"
  },
  {
    "id": 8,
    "type": "awardee",
    "title": "PROVINCIAL VETERINARY OFFICE",
    "number": 4,
    "category": "CERTIFICATE OF APPRECIATION",
    "subtitle": "PVET · Provincial Nutrition Committee Member Office",
    "categoryTag": "PNC MEMBER"
  },
  {
    "id": 9,
    "type": "awardee",
    "title": "PROVINCIAL ENGINEERING OFFICE",
    "number": 5,
    "category": "CERTIFICATE OF APPRECIATION",
    "subtitle": "PEO · Provincial Nutrition Committee Member Office",
    "categoryTag": "PNC MEMBER"
  },
  {
    "id": 10,
    "type": "awardee",
    "title": "PROVINCIAL PUBLIC EMPLOYMENT SERVICE OFFICE",
    "number": 6,
    "category": "CERTIFICATE OF APPRECIATION",
    "subtitle": "PESO \u00b7 Provincial Nutrition Committee Member Office",
    "categoryTag": "PNC MEMBER"
  },
  {
    "id": 11,
    "type": "awardee",
    "title": "PROVINCIAL HEALTH OFFICE",
    "number": 7,
    "category": "CERTIFICATE OF APPRECIATION",
    "subtitle": "PHO \u00b7 Provincial Nutrition Committee Member Office",
    "categoryTag": "PNC MEMBER"
  },
  {
    "id": 12,
    "type": "awardee",
    "title": "PROVINCIAL HUMAN RESOURCES AND MANAGEMENT OFFICE",
    "number": 8,
    "category": "CERTIFICATE OF APPRECIATION",
    "subtitle": "PHRMO \u00b7 Provincial Nutrition Committee Member Office",
    "categoryTag": "PNC MEMBER"
  },
  {
    "id": 13,
    "type": "awardee",
    "title": "PROVINCIAL BUDGET OFFICE",
    "number": 9,
    "category": "CERTIFICATE OF APPRECIATION",
    "subtitle": "PBO \u00b7 Provincial Nutrition Committee Member Office",
    "categoryTag": "PNC MEMBER"
  },
  {
    "id": 14,
    "type": "awardee",
    "title": "PROVINCIAL SOCIAL WELFARE AND DEVELOPMENT OFFICE",
    "number": 10,
    "category": "CERTIFICATE OF APPRECIATION",
    "subtitle": "PSWDO · Provincial Nutrition Committee Member Office",
    "categoryTag": "PNC MEMBER"
  },
  {
    "id": 15,
    "type": "awardee",
    "title": "PROVINCIAL PLANNING AND DEVELOPMENT OFFICE",
    "number": 11,
    "category": "CERTIFICATE OF APPRECIATION",
    "subtitle": "PPDO · Provincial Nutrition Committee Member Office",
    "categoryTag": "PNC MEMBER"
  },
  {
    "id": 16,
    "type": "awardee",
    "title": "PROVINCIAL INFORMATION, COMMUNICATION AND KNOWLEDGE MANAGEMENT OFFICE",
    "number": 12,
    "category": "CERTIFICATE OF APPRECIATION",
    "subtitle": "PIKMO · Provincial Nutrition Committee Member Office",
    "categoryTag": "PNC MEMBER"
  },
  {
    "id": 17,
    "type": "awardee",
    "title": "PROVINCIAL DEPARTMENT OF HEALTH OFFICE",
    "number": 13,
    "category": "CERTIFICATE OF APPRECIATION",
    "subtitle": "PDOHO · Provincial Nutrition Committee Member Office",
    "categoryTag": "PNC MEMBER"
  },
  {
    "id": 18,
    "type": "awardee",
    "title": "DAVAO DEL NORTE- DEPARTMENT OF EDUCATION",
    "number": 14,
    "category": "CERTIFICATE OF APPRECIATION",
    "subtitle": "DepEd Davao del Norte \u00b7 Provincial Nutrition Committee Member Office",
    "categoryTag": "PNC MEMBER"
  },
  {
    "id": 19,
    "type": "awardee",
    "title": "SANGGUNIANG BAYAN COMMITTE ON HEALTH",
    "number": 15,
    "category": "CERTIFICATE OF APPRECIATION",
    "subtitle": "Sangguniang Bayan / Panlalawigan \u00b7 Legislative Partner \u00b7 Davao del Norte",
    "categoryTag": "PNC MEMBER"
  },
  {
    "id": 20,
    "type": "closing",
    "event": "2026 PROVINCIAL NUTRITION CONGRESS",
    "title": "CONGRATULATIONS & SALUTE TO OUR INSTITUTIONAL PARTNERS!",
    "subTitle": "Provincial Nutrition Committee",
    "citation": "Multi-sectoral unity and commitment drive sustainable nutrition for all DavNor families."
  }
];

  window.SLIDES_DATA = data;
  window.DECKS_CATALOG = window.DECKS_CATALOG || {};
  window.DECKS_CATALOG['nutrition-05-regional-and-pnc'] = data;
})();
