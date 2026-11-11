(function () {
  // Source: NUTRITION CONGRESS AWARDS.xlsx & Program Flow (2026 Provincial Nutrition Congress)
  var data = [
  {
    "id": 0,
    "type": "title",
    "event": "2026 PROVINCIAL NUTRITION CONGRESS",
    "subEvent": "Province of Davao del Norte \u00b7 Provincial Health Office",
    "title": "BARANGAY NUTRITION SCHOLAR LOYALTY AWARDS",
    "category": "DUNGOG SA MALUNGTARONG SERBISYO",
    "citation": "Honoring our heroic Barangay Nutrition Scholars with 10, 20, 30, and 35+ years of faithful service"
  },
  {
    "id": 1,
    "type": "awardee",
    "title": "MUNICIPALITY OF ASUNCION",
    "category": "DUNGOG SA MALUNGTARONG SERBISYO AWARD",
    "subtitle": "Loyalty Awardees (10 Years & Above)",
    "citations": [
      "MARIA ROIZA R. MANGLICMOT \u2014 Brgy. Camoning (30 YEARS)",
      "LAARNI D. ARANGO \u2014 Brgy. New Santiago (28 YEARS)",
      "ESTER T. BULACOY \u2014 Brgy. Magatos (24 YEARS)",
      "ROSITA V. ADE \u2014 Brgy. Cambanogoy (19 YEARS)",
      "SALVY A. ALAGOS \u2014 Brgy. New Bantayan (19 YEARS)",
      "ISABELITA S. PABILONA \u2014 Brgy. Do\u00f1a Andrea (18 YEARS)",
      "MARILOU P. PANSACALA \u2014 Brgy. Buclad (11 YEARS)"
    ],
    "categoryTag": "ASUNCION \u00b7 7 AWARDEES"
  },
  {
    "id": 2,
    "type": "awardee",
    "title": "MUNICIPALITY OF BRAULIO E. DUJALI",
    "category": "DUNGOG SA MALUNGTARONG SERBISYO AWARD",
    "subtitle": "Loyalty Awardees (10 Years & Above)",
    "citations": [
      "MA. PAZ J. JACINTO \u2014 Brgy. Tanglaw (30 YEARS)",
      "OFELIA D. DUMALI \u2014 Brgy. Dujali (24 YEARS)",
      "ARLINE R. GUMBAN \u2014 Brgy. Magupising (13 YEARS)"
    ],
    "categoryTag": "BE DUJALI \u00b7 3 AWARDEES"
  },
  {
    "id": 3,
    "type": "awardee",
    "title": "MUNICIPALITY OF CARMEN",
    "category": "DUNGOG SA MALUNGTARONG SERBISYO AWARD",
    "subtitle": "Loyalty Awardees (10 Years & Above)",
    "citations": [
      "EMELIA D. TANTIADO \u2014 Brgy. Mabuhay (33 YEARS)",
      "IMELDA M. MORCID \u2014 Brgy. Guadalupe (29 YEARS)",
      "MERCEDITA F. MOLE \u2014 Brgy. Magsaysay (18 YEARS)",
      "MADELENE S. GULANE \u2014 Brgy. Alejal (18 YEARS)"
    ],
    "categoryTag": "CARMEN \u00b7 4 AWARDEES"
  },
  {
    "id": 4,
    "type": "awardee",
    "title": "MUNICIPALITY OF KAPALONG",
    "category": "DUNGOG SA MALUNGTARONG SERBISYO AWARD",
    "subtitle": "Loyalty Awardees (10 Years & Above)",
    "citations": [
      "LINDA B. CALAYCA \u2014 Brgy. Gupitan (30 YEARS)",
      "THELMA S. MONES \u2014 Brgy. Sua-on (29 YEARS)",
      "LYNNETTECHE P. GUTIB \u2014 Brgy. Gabuyan (18 YEARS)",
      "ELIZABETH U. LUCOB \u2014 Brgy. Gupitan (17 YEARS)",
      "ROSARIO B. LASAFIN \u2014 Brgy. Sampao (15 YEARS)",
      "LILIA T. ORONGAN \u2014 Brgy. Mabantao (14 YEARS)",
      "JOSEVY C. MARCELINO \u2014 Brgy. Maniki (12 YEARS)",
      "JEARLYN E. CORPUZ \u2014 Brgy. Luna (11 YEARS)"
    ],
    "categoryTag": "KAPALONG \u00b7 8 AWARDEES"
  },
  {
    "id": 5,
    "type": "awardee",
    "title": "MUNICIPALITY OF NEW CORELLA",
    "category": "DUNGOG SA MALUNGTARONG SERBISYO AWARD",
    "subtitle": "Loyalty Awardees (10 Years & Above)",
    "citations": [
      "ALICIA C. JAYECTIN \u2014 Brgy. Del Pilar (30 YEARS)",
      "MILA S. RAMOS \u2014 Brgy. Mesaoy (30 YEARS)",
      "LORETA T. CAGOCO \u2014 Brgy. New Bohol (27 YEARS)",
      "MARLYN C. CUERING \u2014 Brgy. New Sambog (27 YEARS)",
      "JOSEPHINE B. ALMEDORA \u2014 Brgy. Sta. Cruz (18 YEARS)",
      "LITA I. TOMASINO \u2014 Brgy. Del Monte (17 YEARS)",
      "ZENAIDA I. OLBES \u2014 Brgy. San Roque (12 YEARS)"
    ],
    "categoryTag": "NEW CORELLA \u00b7 7 AWARDEES"
  },
  {
    "id": 6,
    "type": "awardee",
    "title": "MUNICIPALITY OF SAWATA",
    "category": "DUNGOG SA MALUNGTARONG SERBISYO AWARD",
    "subtitle": "Loyalty Awardees (10 Years & Above)",
    "citations": [
      "ELIZABETH C. PORALAN \u2014 Brgy. Sto. Ni\u00f1o (26 YEARS)",
      "JENELITA V. PIAD \u2014 Brgy. Libuton (13 YEARS)"
    ],
    "categoryTag": "SAWATA \u00b7 2 AWARDEES"
  },
  {
    "id": 7,
    "type": "awardee",
    "title": "MUNICIPALITY OF SANTO TOMAS (PART 1)",
    "category": "DUNGOG SA MALUNGTARONG SERBISYO AWARD",
    "subtitle": "Loyalty Awardees (20 to 35+ Years in Service)",
    "citations": [
      "VIRGINIA A. DURAN \u2014 Brgy. La Libertad (35 YEARS)",
      "FLORES P. PALMA \u2014 Brgy. Casig-ang (35 YEARS)",
      "CARMELITA L. WALAWALA \u2014 Brgy. New Katipunan (31 YEARS)",
      "RUBY I. OTLANG \u2014 Brgy. Kimamon (30 YEARS)",
      "JOYLYN G. ALEMAN \u2014 Brgy. San Vicente (25 YEARS)",
      "FERLYN D. VICTORIANO \u2014 Brgy. New Visayas (24 YEARS)",
      "ROXANA E. ARA\u00d1EZ \u2014 Brgy. Tulalian (22 YEARS)"
    ],
    "categoryTag": "STO. TOMAS \u00b7 20+ YEARS"
  },
  {
    "id": 8,
    "type": "awardee",
    "title": "MUNICIPALITY OF SANTO TOMAS (PART 2)",
    "category": "DUNGOG SA MALUNGTARONG SERBISYO AWARD",
    "subtitle": "Loyalty Awardees (11 to 15 Years in Service)",
    "citations": [
      "LEONARDA L. SATURINAS \u2014 Brgy. Magwawa (15 YEARS)",
      "ELIZABETH C. FAILAGMAO \u2014 Brgy. Salvacion (13 YEARS)",
      "WILMA D. OPSIMA \u2014 Brgy. Balagunan (12 YEARS)",
      "DESIRRE M. AGUILAR \u2014 Brgy. Lunga-og (11 YEARS)"
    ],
    "categoryTag": "STO. TOMAS \u00b7 10+ YEARS"
  },
  {
    "id": 9,
    "type": "awardee",
    "title": "MUNICIPALITY OF TALAINGOD",
    "category": "DUNGOG SA MALUNGTARONG SERBISYO AWARD",
    "subtitle": "Loyalty Awardees (10 Years & Above)",
    "citations": [
      "ARISTONA A. CUBELO \u2014 Brgy. Sto. Ni\u00f1o (14 YEARS)",
      "MARY JANE P. FRAGATA \u2014 Brgy. Sto. Ni\u00f1o (13 YEARS)"
    ],
    "categoryTag": "TALAINGOD \u00b7 2 AWARDEES"
  },
  {
    "id": 10,
    "type": "awardee",
    "title": "IGACOS \u2014 BABAK DISTRICT",
    "category": "DUNGOG SA MALUNGTARONG SERBISYO AWARD",
    "subtitle": "Island Garden City of Samal",
    "citations": [
      "MAGDALENA S. BORRES \u2014 Brgy. San Antonio (32 YEARS)",
      "ERLINDA A. CABILIC \u2014 Brgy. Tagpopongan (19 YEARS)",
      "MARLYN F. ALVARICO \u2014 Brgy. Toril (16 YEARS)",
      "FELIPA R. GARCIANO \u2014 Brgy. Caliclic (12 YEARS)",
      "LOUEDAY B. PALAD \u2014 Brgy. Villarica (12 YEARS)"
    ],
    "categoryTag": "IGACOS BABAK \u00b7 5 AWARDEES"
  },
  {
    "id": 11,
    "type": "awardee",
    "title": "IGACOS \u2014 KAPUTIAN DISTRICT",
    "category": "DUNGOG SA MALUNGTARONG SERBISYO AWARD",
    "subtitle": "Island Garden City of Samal",
    "citations": [
      "SALOME B. ABAJERO \u2014 Brgy. Poblacion (22 YEARS)",
      "FLORDILIE A. IBOT \u2014 Brgy. Adecor (18 YEARS)",
      "JOVY N. DIESTRO \u2014 Brgy. San Remegio (11 YEARS)",
      "LETTECIA S. BACANG \u2014 Brgy. Libertad (10 YEARS)"
    ],
    "categoryTag": "IGACOS KAPUTIAN \u00b7 4 AWARDEES"
  },
  {
    "id": 12,
    "type": "awardee",
    "title": "IGACOS \u2014 SAMAL DISTRICT",
    "category": "DUNGOG SA MALUNGTARONG SERBISYO AWARD",
    "subtitle": "Island Garden City of Samal",
    "citations": [
      "MARY JANE M. NOVABOS \u2014 Brgy. San Miguel (31 YEARS)",
      "EMMA R. CORONEL \u2014 Brgy. Catagman (17 YEARS)",
      "LUCINA B. OBRA \u2014 Brgy. Tagbay (16 YEARS)",
      "ZARA B. TELOS \u2014 Brgy. Aumbay (15 YEARS)",
      "MARGIE L. BONTILAO \u2014 Brgy. Tagdaliao (10 YEARS)"
    ],
    "categoryTag": "IGACOS SAMAL \u00b7 5 AWARDEES"
  },
  {
    "id": 13,
    "type": "awardee",
    "title": "CITY OF PANABO (PART 1)",
    "category": "DUNGOG SA MALUNGTARONG SERBISYO AWARD",
    "subtitle": "Loyalty Awardees (15 to 24 Years in Service)",
    "citations": [
      "MA. ENONE G. DELA CUEVA \u2014 Brgy. A.O. Floirendo (24 YEARS)",
      "CANDIDA V. BONIO \u2014 Brgy. Mabunao (24 YEARS)",
      "VIRGINIA A. LUMANOG \u2014 Brgy. San Pedro (23 YEARS)",
      "LANIE B. LAMOSTE \u2014 Brgy. San Vicente (21 YEARS)",
      "ANGELITA P. DOROJA \u2014 Brgy. Kauswagan (21 YEARS)",
      "PERLIE D. RUAZA \u2014 Brgy. Cagangohan (18 YEARS)",
      "LOIDA C. GABAC \u2014 Brgy. A.O. Floirendo (15 YEARS)",
      "JIAMELINE M. SULEIK \u2014 Brgy. Datu Abdul Dadia (15 YEARS)"
    ],
    "categoryTag": "PANABO \u00b7 15+ YEARS"
  },
  {
    "id": 14,
    "type": "awardee",
    "title": "CITY OF PANABO (PART 2)",
    "category": "DUNGOG SA MALUNGTARONG SERBISYO AWARD",
    "subtitle": "Loyalty Awardees (11 to 14 Years in Service)",
    "citations": [
      "JOCELYN O. NIONES \u2014 Brgy. Katipunan (14 YEARS)",
      "RUBY G. LAMEDA \u2014 Brgy. Quezon (14 YEARS)",
      "JULIET L. DULALAS \u2014 Brgy. J.P. Laurel (13 YEARS)",
      "ERNA A. VALENZUELA \u2014 Brgy. Kasilak (13 YEARS)",
      "CHERYL G. GARNICA \u2014 Brgy. Upper Licanan (12 YEARS)",
      "CLARISSA S. BAHENA \u2014 Brgy. San Francisco (11 YEARS)",
      "LEWILYN S. SANANI \u2014 Brgy. Buenavista (11 YEARS)",
      "LEAH R. PUSODAN \u2014 Brgy. Sta. Cruz (11 YEARS)"
    ],
    "categoryTag": "PANABO \u00b7 10+ YEARS"
  },
  {
    "id": 15,
    "type": "awardee",
    "title": "CITY OF TAGUM (PART 1)",
    "category": "DUNGOG SA MALUNGTARONG SERBISYO AWARD",
    "subtitle": "Loyalty Awardees (17 to 35 Years in Service)",
    "citations": [
      "MARIBELLE P. DIONSAY \u2014 Brgy. Mankilam (35 YEARS)",
      "EVANGELINE D. FELISILDA \u2014 Brgy. Magugpo Poblacion (29 YEARS)",
      "MERCIDITAS M. OVAL \u2014 Brgy. Apokon (24 YEARS)",
      "SHERWIN C. ABELLANIZA \u2014 Brgy. Magugpo East (22 YEARS)",
      "HELEN G. SUICO \u2014 Brgy. San Miguel (21 YEARS)",
      "PAMELA N. CATMON \u2014 Brgy. Apokon (19 YEARS)",
      "BEVERLY D. MAILA \u2014 Brgy. Madaum (18 YEARS)",
      "ALMA M. PAMPLONA \u2014 Brgy. Visayan Village (17 YEARS)",
      "LUDESA S. TORMON \u2014 Brgy. Pagsabangan (16 YEARS)"
    ],
    "categoryTag": "TAGUM \u00b7 16+ YEARS"
  },
  {
    "id": 16,
    "type": "awardee",
    "title": "CITY OF TAGUM (PART 2)",
    "category": "DUNGOG SA MALUNGTARONG SERBISYO AWARD",
    "subtitle": "Loyalty Awardees (12 to 15 Years in Service)",
    "citations": [
      "NERIZA M. INDOY \u2014 Brgy. Magugpo North (15 YEARS)",
      "LAARNI R. MANULAT \u2014 Brgy. La Filipina (14 YEARS)",
      "LIZA J. SUNIDO \u2014 Brgy. Magdum (14 YEARS)",
      "RUBILYN S. FAJARDO \u2014 Brgy. Magugpo South (13 YEARS)",
      "SHERLYN N. OBE\u00d1ITA \u2014 Brgy. Pandapan (13 YEARS)",
      "ROWENA B. LULO \u2014 Brgy. Magugpo West (12 YEARS)",
      "RHEALYN P. MEHOY \u2014 Brgy. Visayan Village (12 YEARS)",
      "CAROL B. NICDAO \u2014 Brgy. Magugpo South (12 YEARS)",
      "MARYLYN D. QUISADO \u2014 Brgy. Madaum (12 YEARS)"
    ],
    "categoryTag": "TAGUM \u00b7 12+ YEARS"
  },
  {
    "id": 17,
    "type": "closing",
    "event": "2026 PROVINCIAL NUTRITION CONGRESS",
    "title": "SALUTE TO OUR LOYALTY AWARDEES!",
    "subTitle": "Dungog sa Malungtarong Serbisyo",
    "citation": "A heartfelt salute to 83 Barangay Nutrition Scholars whose decades of selfless service have nourished Davao del Norte."
  }
];

  window.SLIDES_DATA = data;
  window.DECKS_CATALOG = window.DECKS_CATALOG || {};
  window.DECKS_CATALOG['nutrition-07-bns-loyalty-awards'] = data;
})();
