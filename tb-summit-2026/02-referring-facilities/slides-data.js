(function () {
  // Source: TB SUMMIT LIST OF AWARDS.xlsx (DAVNOR TB Summit 2026)
  var data = [
  {
    "id": 0,
    "type": "title",
    "event": "DAVNOR TB SUMMIT 2026",
    "subEvent": "Province of Davao del Norte \u00b7 Provincial Health Office",
    "title": "SPECIAL AWARDS \u2014 REFERRING FACILITIES",
    "category": "DAVNOR TB SUMMIT 2026",
    "citation": "Recognizing referring hospitals, medical clinics, and custodial facilities actively notifying TB cases in Davao del Norte"
  },
  {
    "id": 1,
    "type": "awardee",
    "title": "MEDICAL MISSION GROUP HOSPITAL & HEALTH SERVICES COOPERATIVE",
    "number": 1,
    "category": "REFERRING FACILITY",
    "subtitle": "Tagum City",
    "citations": [
      "RONA B. ADOL-ANG, RN \u2014 TB Nurse Coordinator"
    ],
    "categoryTag": "REFERRING FACILITY"
  },
  {
    "id": 2,
    "type": "awardee",
    "title": "AQUINO MEDICAL SPECIALISTS HOSPITAL, INC.",
    "number": 2,
    "category": "REFERRING FACILITY",
    "subtitle": "Tagum City",
    "citations": [
      "JOESERIL T. FRUCTOSO, RN \u2014 TB Nurse Coordinator"
    ],
    "categoryTag": "REFERRING FACILITY"
  },
  {
    "id": 3,
    "type": "awardee",
    "title": "UNITED DOCTORS HOSPITAL OF TAGUM, INC.",
    "number": 3,
    "category": "REFERRING FACILITY",
    "subtitle": "Tagum City",
    "citations": [
      "KHAYE RHE P. NAVACILLA, RN \u2014 TB Nurse Coordinator"
    ],
    "categoryTag": "REFERRING FACILITY"
  },
  {
    "id": 4,
    "type": "awardee",
    "title": "TAGUM GLOBAL MEDICAL CENTER, INC.",
    "number": 4,
    "category": "REFERRING FACILITY",
    "subtitle": "Tagum City",
    "citations": [
      "NICOLLE A. CUESTAS, RN \u2014 TB Nurse Coordinator"
    ],
    "categoryTag": "REFERRING FACILITY"
  },
  {
    "id": 5,
    "type": "awardee",
    "title": "CHRIST THE KING SPECIALISTS HOSPITAL",
    "number": 5,
    "category": "REFERRING FACILITY",
    "subtitle": "Tagum City",
    "citations": [
      "MARI-TESSA O. SURIGAO, RN \u2014 TB Nurse Coordinator"
    ],
    "categoryTag": "REFERRING FACILITY"
  },
  {
    "id": 6,
    "type": "awardee",
    "title": "CAINGLET MEDICAL HOSPITAL, INC.",
    "number": 6,
    "category": "REFERRING FACILITY",
    "subtitle": "Panabo City",
    "citations": [
      "CYRIAN MAE JAVIER-NAVIGAR, RN \u2014 TB Nurse Coordinator"
    ],
    "categoryTag": "REFERRING FACILITY"
  },
  {
    "id": 7,
    "type": "awardee",
    "title": "GOOD SHEPHERD HOSPITAL OF PANABO CITY, INC.",
    "number": 7,
    "category": "REFERRING FACILITY",
    "subtitle": "Panabo City",
    "citations": [
      "AMABELLA C. MALIA, RN \u2014 TB Nurse Coordinator"
    ],
    "categoryTag": "REFERRING FACILITY"
  },
  {
    "id": 8,
    "type": "awardee",
    "title": "TADECO HOSPITAL",
    "number": 8,
    "category": "REFERRING FACILITY",
    "subtitle": "Panabo City",
    "citations": [
      "JOANNE D. NOVELA, RN \u2014 TB Nurse Coordinator"
    ],
    "categoryTag": "REFERRING FACILITY"
  },
  {
    "id": 9,
    "type": "awardee",
    "title": "CARMEN MEDICAL CLINIC AND HOSPITAL",
    "number": 9,
    "category": "REFERRING FACILITY",
    "subtitle": "Carmen, Davao del Norte",
    "citations": [
      "CHELAMAE CLAIRE P. JACOT, RN \u2014 TB Nurse Coordinator"
    ],
    "categoryTag": "REFERRING FACILITY"
  },
  {
    "id": 10,
    "type": "awardee",
    "title": "DAVAO DEL NORTE HOSPITAL \u2014 CARMEN ZONE",
    "number": 10,
    "category": "REFERRING FACILITY",
    "subtitle": "Carmen, Davao del Norte",
    "citations": [
      "RUCHILLE S. ARROCENA, MD, FPSMSI, MAHA \u2014 OIC - Chief of Hospital",
      "KARREN MAE R. BARCENA, RN \u2014 TB Nurse Coordinator",
      "JENNIFER R. BRECIO, RMT \u2014 RTDL Medical Technologist",
      "Radiology Department"
    ],
    "categoryTag": "REFERRING FACILITY"
  },
  {
    "id": 11,
    "type": "awardee",
    "title": "BUNGABONG-SANICO MEDICAL CLINIC & MATERNITY HOSPITAL",
    "number": 11,
    "category": "REFERRING FACILITY",
    "subtitle": "Davao del Norte",
    "citations": [
      "SHILLA MEE M. MALABAGO, RN \u2014 TB Nurse Coordinator"
    ],
    "categoryTag": "REFERRING FACILITY"
  },
  {
    "id": 12,
    "type": "awardee",
    "title": "ESTELA MEDICAL CLINIC AND HOSPITAL",
    "number": 12,
    "category": "REFERRING FACILITY",
    "subtitle": "Davao del Norte",
    "citations": [
      "NIMFA G. NACIS, RN \u2014 TB Nurse Coordinator"
    ],
    "categoryTag": "REFERRING FACILITY"
  },
  {
    "id": 13,
    "type": "awardee",
    "title": "EMILIO B. RIVERA PRIMARY CARE CENTERS, INC.",
    "number": 13,
    "category": "REFERRING FACILITY",
    "subtitle": "Davao del Norte",
    "citations": [
      "JUDITH L. DEOCAMPO, RN \u2014 TB Nurse Coordinator"
    ],
    "categoryTag": "REFERRING FACILITY"
  },
  {
    "id": 14,
    "type": "awardee",
    "title": "MATUTES MEDICAL CLINIC AND HOSPITAL",
    "number": 14,
    "category": "REFERRING FACILITY",
    "subtitle": "Davao del Norte",
    "citations": [
      "JESSE MARI T. CARLON, RN \u2014 TB Nurse Coordinator"
    ],
    "categoryTag": "REFERRING FACILITY"
  },
  {
    "id": 15,
    "type": "awardee",
    "title": "METROPOLITAN POLYMEDIC COMMUNITY HOSPITAL, INC.",
    "number": 15,
    "category": "REFERRING FACILITY",
    "subtitle": "Davao del Norte",
    "citations": [
      "RICHE A. DADULA, RN \u2014 TB Nurse Coordinator"
    ],
    "categoryTag": "REFERRING FACILITY"
  },
  {
    "id": 16,
    "type": "awardee",
    "title": "JA ALEGRE MEDICAL CLINIC AND HOSPITAL",
    "number": 16,
    "category": "REFERRING FACILITY",
    "subtitle": "Davao del Norte",
    "citations": [
      "DARYL V. TEVES, RN \u2014 TB Nurse Coordinator"
    ],
    "categoryTag": "REFERRING FACILITY"
  },
  {
    "id": 17,
    "type": "awardee",
    "title": "DAVAO DEL NORTE HOSPITAL \u2014 KAPALONG ZONE",
    "number": 17,
    "category": "REFERRING FACILITY",
    "subtitle": "Kapalong, Davao del Norte",
    "citations": [
      "JESSIE T. BELGA, MD, FPSMSI, MSPH-HA \u2014 Chief of Hospital II",
      "ZHEENA MAE C. NALUPA, RN, MAN \u2014 TB Nurse Coordinator",
      "LEONA S. OLILA, RMT \u2014 RTDL Medical Technologist",
      "Radiology Department"
    ],
    "categoryTag": "REFERRING FACILITY"
  },
  {
    "id": 18,
    "type": "awardee",
    "title": "DRMC WARD EXTENSION (INFIRMARY)",
    "number": 18,
    "category": "REFERRING FACILITY",
    "subtitle": "Davao Regional Medical Center",
    "citations": [
      "MYLENE V. TORCULAS, RN \u2014 TB Nurse Coordinator"
    ],
    "categoryTag": "REFERRING FACILITY"
  },
  {
    "id": 19,
    "type": "awardee",
    "title": "TAGUM CITY DISTRICT JAIL \u2014 MALE DORMITORY",
    "number": 19,
    "category": "REFERRING FACILITY",
    "subtitle": "Bureau of Jail Management and Penology",
    "citations": [
      "SJO4 JONATHAN D. ALMONARES, RN \u2014 TB Nurse Coordinator"
    ],
    "categoryTag": "REFERRING FACILITY"
  },
  {
    "id": 20,
    "type": "awardee",
    "title": "TAGUM CITY DISTRICT JAIL \u2014 FEMALE DORMITORY",
    "number": 20,
    "category": "REFERRING FACILITY",
    "subtitle": "Bureau of Jail Management and Penology",
    "citations": [
      "JO2 JENNY ANN C. MELENDREZ, RN \u2014 TB Nurse Coordinator"
    ],
    "categoryTag": "REFERRING FACILITY"
  },
  {
    "id": 21,
    "type": "awardee",
    "title": "PANABO CITY DISTRICT JAIL",
    "number": 21,
    "category": "REFERRING FACILITY",
    "subtitle": "Bureau of Jail Management and Penology",
    "citations": [
      "SJO4 HENRY S. AGUISANDO, RN \u2014 TB Nurse Coordinator"
    ],
    "categoryTag": "REFERRING FACILITY"
  },
  {
    "id": 22,
    "type": "awardee",
    "title": "SAMAL CITY JAIL",
    "number": 22,
    "category": "REFERRING FACILITY",
    "subtitle": "Bureau of Jail Management and Penology",
    "citations": [
      "JO2 KARLAND DALE C. BALON, RN \u2014 TB Nurse Coordinator"
    ],
    "categoryTag": "REFERRING FACILITY"
  },
  {
    "id": 23,
    "type": "awardee",
    "title": "DAVAO DEL NORTE PROVINCIAL REHABILITATION CENTER",
    "number": 23,
    "category": "REFERRING FACILITY",
    "subtitle": "Province of Davao del Norte",
    "citations": [
      "PS TRISTAN C. AGAG, RN \u2014 TB Nurse Coordinator"
    ],
    "categoryTag": "REFERRING FACILITY"
  },
  {
    "id": 24,
    "type": "closing",
    "title": "CONGRATULATIONS TO ALL REFERRING FACILITIES",
    "citation": "Saluting your proactive patient notification and surveillance that brings TB care within reach of every community.",
    "subtitle": "DAVNOR TB SUMMIT 2026"
  }
];

  window.SLIDES_DATA = data;
  window.DECKS_CATALOG = window.DECKS_CATALOG || {};
  window.DECKS_CATALOG['tb-02-referring-facilities'] = data;
})();
