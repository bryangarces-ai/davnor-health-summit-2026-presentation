(function () {
  // Source: NUTRITION CONGRESS AWARDS.xlsx & Program Flow (2026 Provincial Nutrition Congress)
  var data = [
  {
    "id": 0,
    "type": "title",
    "event": "2026 PROVINCIAL NUTRITION CONGRESS",
    "subEvent": "Province of Davao del Norte \u00b7 Provincial Health Office",
    "title": "PROVINCIAL OUTSTANDING LOCAL NUTRITION FOCAL POINTS",
    "category": "LNFP AWARDS",
    "citation": "Honoring our frontline Nutrition Action Officers, Program Coordinators, and Barangay Nutrition Scholars"
  },
  {
    "id": 1,
    "type": "awardee",
    "title": "JO-ANNE RELAMPAGOS-CAPUYAN",
    "category": "CERTIFICATE OF RECOGNITION",
    "subtitle": "CONTENDER: CITY NUTRITION ACTION OFFICER",
    "department": "City of Panabo",
    "categoryTag": "CNAO CONTENDER"
  },
  {
    "id": 2,
    "type": "awardee",
    "title": "SIGRID PORTIA MACASA, MD",
    "category": "CERTIFICATE OF RECOGNITION",
    "subtitle": "CONTENDER: MUNICIPAL NUTRITION ACTION OFFICER",
    "department": "Municipality of Kapalong",
    "categoryTag": "MNAO CONTENDER"
  },
  {
    "id": 3,
    "type": "awardee",
    "title": "CHERRY T. DEMA-ALA, MD",
    "category": "CERTIFICATE OF RECOGNITION",
    "subtitle": "CONTENDER: MUNICIPAL NUTRITION ACTION OFFICER",
    "department": "Municipality of Braulio E. Dujali",
    "categoryTag": "MNAO CONTENDER"
  },
  {
    "id": 4,
    "type": "awardee",
    "title": "ROBECCA B. SIMBAJON",
    "category": "CERTIFICATE OF RECOGNITION",
    "subtitle": "CONTENDER: MUNICIPAL NUTRITION ACTION OFFICER",
    "department": "Municipality of New Corella",
    "categoryTag": "MNAO CONTENDER"
  },
  {
    "id": 5,
    "type": "awardee",
    "title": "CHERRY T. DEMA-ALA, MD",
    "category": "CERTIFICATE OF RECOGNITION",
    "subtitle": "CONTENDER: MUNICIPAL NUTRITION ACTION OFFICER",
    "department": "Municipality of Braulio E. Dujali",
    "categoryTag": "MNAO CONTENDER"
  },
  {
    "id": 6,
    "type": "awardee",
    "title": "JAYLEN M. GAJE",
    "category": "CERTIFICATE OF RECOGNITION",
    "subtitle": "CONTENDER: MUNICIPAL NUTRITION ACTION OFFICER",
    "department": "Municipality of Sawata",
    "categoryTag": "MNAO CONTENDER"
  },
  {
    "id": 7,
    "type": "awardee",
    "title": "ARTUR L. PINABUDLANG",
    "category": "CERTIFICATE OF RECOGNITION",
    "subtitle": "CONTENDER: MUNICIPAL NUTRITION ACTION OFFICER",
    "department": "Municipality of Talaingod",
    "categoryTag": "MNAO CONTENDER"
  },
  {
    "id": 8,
    "type": "awardee",
    "title": "GUILLERMO E. OLDEN",
    "category": "PROVINCIAL OUTSTANDING CITY NUTRITION ACTION OFFICER",
    "subtitle": "Island Garden City of Samal (IGACOS)",
    "categoryTag": "PLAQUE WINNER",
    "image": "../../shared/assets/speakers/Guillermo Olden.jfif"
  },
  {
    "id": 9,
    "type": "awardee",
    "title": "JOEL M. ANDOY, LPT, MMPA",
    "category": "PROVINCIAL OUTSTANDING MUNICIPAL NUTRITION ACTION OFFICER",
    "subtitle": "Municipality of Asuncion",
    "categoryTag": "PLAQUE WINNER"
  },
  {
    "id": 10,
    "type": "awardee",
    "title": "LIZA M. LAVEGA",
    "category": "CERTIFICATE OF RECOGNITION",
    "subtitle": "CONTENDER: MUNICIPAL NUTRITION PROGRAM COORDINATOR",
    "department": "Municipality of Asuncion",
    "categoryTag": "MNPC CONTENDER"
  },
  {
    "id": 11,
    "type": "awardee",
    "title": "MERCIDITA P. RODULFA",
    "category": "CERTIFICATE OF RECOGNITION",
    "subtitle": "CONTENDER: MUNICIPAL NUTRITION PROGRAM COORDINATOR",
    "department": "Municipality of Braulio E. Dujali",
    "categoryTag": "MNPC CONTENDER"
  },
  {
    "id": 12,
    "type": "awardee",
    "title": "CANDY MEA T. DELA CRUZ",
    "category": "CERTIFICATE OF RECOGNITION",
    "subtitle": "CONTENDER: MUNICIPAL NUTRITION PROGRAM COORDINATOR",
    "department": "Municipality of New Corella",
    "categoryTag": "MNPC CONTENDER"
  },
  {
    "id": 13,
    "type": "awardee",
    "title": "ANALYN SERONDO",
    "category": "CERTIFICATE OF RECOGNITION",
    "subtitle": "CONTENDER: MUNICIPAL NUTRITION PROGRAM COORDINATOR",
    "department": "Municipality of Sawata",
    "categoryTag": "MNPC CONTENDER"
  },
  {
    "id": 14,
    "type": "awardee",
    "title": "LOVELLA Y. FONTANILLA, RND",
    "category": "PROVINCIAL OUTSTANDING CITY NUTRITION PROGRAM COORDINATOR",
    "subtitle": "City of Panabo",
    "categoryTag": "PLAQUE WINNER"
  },
  {
    "id": 15,
    "type": "awardee",
    "title": "CHARISSE O. CABUSAS, RN, LPT",
    "category": "PROVINCIAL OUTSTANDING MUNICIPAL NUTRITION PROGRAM COORDINATOR",
    "subtitle": "Municipality of Kapalong",
    "categoryTag": "PLAQUE WINNER"
  },
  {
    "id": 16,
    "type": "awardee",
    "title": "MARY JANE M. NOVABOS",
    "category": "CERTIFICATE OF RECOGNITION",
    "subtitle": "CONTENDER: BARANGAY NUTRITION SCHOLAR",
    "department": "Barangay San Miguel, Island Garden City of Samal",
    "categoryTag": "BNS CONTENDER (CITY)"
  },
  {
    "id": 17,
    "type": "awardee",
    "title": "HAZEL MAE C. FLORESCA",
    "category": "CERTIFICATE OF RECOGNITION",
    "subtitle": "CONTENDER: BARANGAY NUTRITION SCHOLAR",
    "department": "Barangay San Miguel, Tagum City",
    "categoryTag": "BNS CONTENDER (CITY)"
  },
  {
    "id": 18,
    "type": "awardee",
    "title": "ROSITA V. ADE",
    "category": "CERTIFICATE OF RECOGNITION",
    "subtitle": "CONTENDER: BARANGAY NUTRITION SCHOLAR",
    "department": "Barangay Cambanugoy, Municipality of Asuncion",
    "categoryTag": "BNS CONTENDER (MUNICIPAL)"
  },
  {
    "id": 19,
    "type": "awardee",
    "title": "MARISSA R. PAMUNAG",
    "category": "CERTIFICATE OF RECOGNITION",
    "subtitle": "CONTENDER: BARANGAY NUTRITION SCHOLAR",
    "department": "Barangay New Casay, Municipality of Braulio E. Dujali",
    "categoryTag": "BNS CONTENDER (MUNICIPAL)"
  },
  {
    "id": 20,
    "type": "awardee",
    "title": "DARLINE R. OLALO",
    "category": "CERTIFICATE OF RECOGNITION",
    "subtitle": "CONTENDER: BARANGAY NUTRITION SCHOLAR",
    "department": "Barangay Kipalili, Municipality of Sawata",
    "categoryTag": "BNS CONTENDER (MUNICIPAL)"
  },
  {
    "id": 21,
    "type": "awardee",
    "title": "LINETH M. CAMANA",
    "category": "PROVINCIAL OUTSTANDING BNS (CITY LEVEL)",
    "subtitle": "Barangay New Visayas, City of Panabo",
    "categoryTag": "PLAQUE WINNER"
  },
  {
    "id": 22,
    "type": "awardee",
    "title": "ANNA LEE J. REVITA",
    "category": "PROVINCIAL OUTSTANDING BNS (MUNICIPAL LEVEL)",
    "subtitle": "Barangay Sto. Ni\u00f1o, Municipality of New Corella",
    "categoryTag": "PLAQUE WINNER"
  },
  {
    "id": 23,
    "type": "closing",
    "event": "2026 PROVINCIAL NUTRITION CONGRESS",
    "title": "CONGRATULATIONS TO OUR LOCAL NUTRITION FOCAL POINTS!",
    "subTitle": "Davao del Norte Champions of Health & Nutrition",
    "citation": "Your unwavering diligence in every barangay and community transforms lives every single day."
  },
  {
    "id": 24,
    "type": "awardee",
    "title": "RAFFLES AND DOOR PRIZES",
    "category": "SPECIAL FELLOWSHIP",
    "subtitle": "Exciting Prizes for our Dedicated Nutrition Workers",
    "categoryTag": "LUCKY DRAW \u00b7 BATCH 2"
  }
];

  window.SLIDES_DATA = data;
  window.DECKS_CATALOG = window.DECKS_CATALOG || {};
  window.DECKS_CATALOG['nutrition-03-outstanding-lnfp'] = data;
})();
