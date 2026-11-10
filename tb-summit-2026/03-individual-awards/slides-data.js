(function () {
  // Source: TB SUMMIT LIST OF AWARDS.xlsx (DAVNOR TB Summit 2026)
  var data = [
  {
    "id": 0,
    "type": "title",
    "event": "DAVNOR TB SUMMIT 2026",
    "subEvent": "Province of Davao del Norte \u00b7 Provincial Health Office",
    "title": "RECOGNITION OF INDIVIDUAL AWARDS",
    "category": "DAVNOR TB SUMMIT 2026",
    "citation": "Honoring community volunteers, specimen transport riders, engagement officers, and laboratory technicians in Davao del Norte"
  },
  {
    "id": 1,
    "type": "awardee",
    "title": "MIGUELITA C. AQUINO",
    "number": 1,
    "category": "TB COMMUNITY VOLUNTEER",
    "subtitle": "Dedicated Community Frontliner",
    "categoryTag": "COMMUNITY VOLUNTEER"
  },
  {
    "id": 2,
    "type": "awardee",
    "title": "EVELYN J. RAZONABLE",
    "number": 2,
    "category": "TB COMMUNITY VOLUNTEER",
    "subtitle": "Dedicated Community Frontliner",
    "categoryTag": "COMMUNITY VOLUNTEER"
  },
  {
    "id": 3,
    "type": "awardee",
    "title": "MA. LUNA G. AMBITO",
    "number": 3,
    "category": "TB COMMUNITY VOLUNTEER",
    "subtitle": "Dedicated Community Frontliner",
    "categoryTag": "COMMUNITY VOLUNTEER"
  },
  {
    "id": 4,
    "type": "awardee",
    "title": "EVELYN M. ECHALAS",
    "number": 4,
    "category": "TB COMMUNITY VOLUNTEER",
    "subtitle": "Dedicated Community Frontliner",
    "categoryTag": "COMMUNITY VOLUNTEER"
  },
  {
    "id": 5,
    "type": "awardee",
    "title": "TITING D. PAYNAG",
    "number": 5,
    "category": "TB COMMUNITY VOLUNTEER",
    "subtitle": "Dedicated Community Frontliner",
    "categoryTag": "COMMUNITY VOLUNTEER"
  },
  {
    "id": 6,
    "type": "awardee",
    "title": "REYNALDO M. CELIS",
    "number": 6,
    "category": "SPECIMEN TRANSPORT RIDER (STRIDER)",
    "subtitle": "Rapid Diagnostic Specimen Courier",
    "categoryTag": "STRIDER"
  },
  {
    "id": 7,
    "type": "awardee",
    "title": "EDWIN S. SALANG",
    "number": 7,
    "category": "SPECIMEN TRANSPORT RIDER (STRIDER)",
    "subtitle": "Rapid Diagnostic Specimen Courier",
    "categoryTag": "STRIDER"
  },
  {
    "id": 8,
    "type": "awardee",
    "title": "GLADYS P. BANTILAN",
    "number": 8,
    "category": "SPECIMEN TRANSPORT RIDER (STRIDER)",
    "subtitle": "Rapid Diagnostic Specimen Courier",
    "categoryTag": "STRIDER"
  },
  {
    "id": 9,
    "type": "awardee",
    "title": "JEANIZE YARI B. TURQUEZA",
    "number": 9,
    "category": "PRIVATE SECTOR ENGAGEMENT OFFICER (PSENOS)",
    "subtitle": "Healthcare Linkage & Engagement",
    "categoryTag": "PSENOS"
  },
  {
    "id": 10,
    "type": "awardee",
    "title": "ALTHEA A. GONZALES, RMT",
    "number": 10,
    "category": "PRIVATE SECTOR ENGAGEMENT OFFICER (PSENOS)",
    "subtitle": "Healthcare Linkage & Engagement",
    "categoryTag": "PSENOS"
  },
  {
    "id": 11,
    "type": "awardee",
    "title": "KRISTINE MARIE E. PANSOY",
    "number": 11,
    "category": "INTEGRATED TB INFORMATION SYSTEM",
    "subtitle": "Integrated TB Information System (ITIS) Project Associate",
    "categoryTag": "ITIS ASSOCIATE"
  },
  {
    "id": 12,
    "type": "awardee",
    "title": "ELLEN G. GERMAN, RN",
    "number": 12,
    "category": "DRMC \u2014 PMDT CLINICAL TEAM",
    "subtitle": "Davao Regional Medical Center",
    "categoryTag": "DRMC PMDT"
  },
  {
    "id": 13,
    "type": "awardee",
    "title": "MANASIS M. DIAMANTE, RN",
    "number": 13,
    "category": "DRMC \u2014 PMDT CLINICAL TEAM",
    "subtitle": "Davao Regional Medical Center",
    "categoryTag": "DRMC PMDT"
  },
  {
    "id": 14,
    "type": "awardee",
    "title": "JENRY KEN VINCENT I. MIBATO, RMT, MSMT, MLS(ASCPi)cm",
    "number": 14,
    "category": "GENEXPERT TECHNICIAN",
    "subtitle": "Molecular TB Diagnostic Specialist",
    "categoryTag": "GENEXPERT TECH"
  },
  {
    "id": 15,
    "type": "awardee",
    "title": "CRISTINA TIARA A. FERNANDEZ, RMT",
    "number": 15,
    "category": "GENEXPERT TECHNICIAN",
    "subtitle": "Molecular TB Diagnostic Specialist",
    "categoryTag": "GENEXPERT TECH"
  },
  {
    "id": 16,
    "type": "awardee",
    "title": "LEONA S. OLILA, RMT",
    "number": 16,
    "category": "GENEXPERT TECHNICIAN",
    "subtitle": "Molecular TB Diagnostic Specialist",
    "categoryTag": "GENEXPERT TECH"
  },
  {
    "id": 17,
    "type": "awardee",
    "title": "NADINE GEMMA S. EUSTAQUIO, RMT",
    "number": 17,
    "category": "GENEXPERT TECHNICIAN",
    "subtitle": "Molecular TB Diagnostic Specialist",
    "categoryTag": "GENEXPERT TECH"
  },
  {
    "id": 18,
    "type": "awardee",
    "title": "ALLEN GLENN B. SORIANO, RMT",
    "number": 18,
    "category": "GENEXPERT TECHNICIAN",
    "subtitle": "Molecular TB Diagnostic Specialist",
    "categoryTag": "GENEXPERT TECH"
  },
  {
    "id": 19,
    "type": "awardee",
    "title": "CHRISTINE DENNISE P. OLAYAN, RMT",
    "number": 19,
    "category": "GENEXPERT TECHNICIAN",
    "subtitle": "Molecular TB Diagnostic Specialist",
    "categoryTag": "GENEXPERT TECH"
  },
  {
    "id": 20,
    "type": "awardee",
    "title": "SHARON ROSE B. LACORDA, RMT",
    "number": 20,
    "category": "GENEXPERT TECHNICIAN",
    "subtitle": "Molecular TB Diagnostic Specialist",
    "categoryTag": "GENEXPERT TECH"
  },
  {
    "id": 21,
    "type": "awardee",
    "title": "ANNALOU O. OLANDRIA, RMT",
    "number": 21,
    "category": "GENEXPERT TECHNICIAN",
    "subtitle": "Molecular TB Diagnostic Specialist",
    "categoryTag": "GENEXPERT TECH"
  },
  {
    "id": 22,
    "type": "awardee",
    "title": "JENNIFER R. BRECIO, RMT",
    "number": 22,
    "category": "GENEXPERT TECHNICIAN",
    "subtitle": "Molecular TB Diagnostic Specialist",
    "categoryTag": "GENEXPERT TECH"
  },
  {
    "id": 23,
    "type": "closing",
    "title": "CONGRATULATIONS TO ALL INDIVIDUAL HEROES",
    "citation": "Honoring the tireless riders, volunteers, officers, and laboratory technicians working on the frontlines every single day.",
    "subtitle": "DAVNOR TB SUMMIT 2026"
  }
];

  window.SLIDES_DATA = data;
  window.DECKS_CATALOG = window.DECKS_CATALOG || {};
  window.DECKS_CATALOG['tb-03-individual-awards'] = data;
})();
