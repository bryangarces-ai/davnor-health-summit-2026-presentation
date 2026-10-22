(function () {
  var data = [
  {
    "id": 0,
    "type": "title",
    "event": "PROGRAM HEALTH SUMMIT 2026",
    "title": "RECOGNITION OF SPECIAL AWARDS",
    "category": "TOP PERFORMING PROGRAM MANAGERS",
    "citation": "Commending Excellence, Exceptional Service Delivery, and Impactful Public Health Leadership across Davao del Norte",
    "subEvent": "Province of Davao del Norte"
  },
  {
    "id": 1,
    "type": "awardee",
    "title": "BARANGAY HEALTH STATION TIBAL-OG",
    "number": 1,
    "category": "PROGRAM MANAGER",
    "subtitle": "HIGHEST DEMAND GENERATION FOR BILATERAL TUBAL LIGATION",
    "categoryTag": "PROGRAM MANAGER"
  },
  {
    "id": 2,
    "type": "awardee",
    "title": "DIVINA MALILA",
    "number": 2,
    "category": "PROGRAM MANAGER",
    "subtitle": "City Health Office of Tagum",
    "citations": [
      "SPECIAL AWARD IN NATIONAL IMMUNIZATION PROGRAM"
    ],
    "categoryTag": "PROGRAM MANAGER"
  },
  {
    "id": 3,
    "type": "awardee",
    "title": "ROY ALBANO, DMD",
    "number": 3,
    "category": "PROGRAM MANAGER",
    "subtitle": "City Health Office of Tagum",
    "citations": [
      "SPECIAL AWARD IN DENTAL HEALTH CARE PROGRAM"
    ],
    "categoryTag": "PROGRAM MANAGER"
  },
  {
    "id": 4,
    "type": "awardee",
    "title": "JOHANN CALVIN P. CHIENG, RN",
    "number": 4,
    "category": "PROGRAM MANAGER",
    "subtitle": "City Health Office of Tagum",
    "citations": [
      "SPECIAL AWARD IN TB PREVENTION AND CONTROL PROGRAM"
    ],
    "categoryTag": "PROGRAM MANAGER"
  },
  {
    "id": 5,
    "type": "awardee",
    "title": "AMOREY M. AGCOPRA, RM",
    "number": 5,
    "category": "PROGRAM MANAGER",
    "subtitle": "City Health Office of Panabo",
    "citations": [
      "SPECIAL AWARD IN NATIONAL IMMUNIZATION PROGRAM"
    ],
    "categoryTag": "PROGRAM MANAGER"
  },
  {
    "id": 6,
    "type": "awardee",
    "title": "ISLAND GARDEN CITY OF SAMAL SANITATION TEAM",
    "number": 6,
    "category": "PROGRAM MANAGER",
    "subtitle": "City Health Office of IGACOS",
    "categoryTag": "PROGRAM MANAGER"
  },
  {
    "id": 7,
    "type": "awardee",
    "title": "MARY GRACE P. EMBALSADO, RN",
    "number": 7,
    "category": "PROGRAM MANAGER",
    "subtitle": "Municipal Health Office of New Corella",
    "citations": [
      "TOP PERFORMING PROGRAM MANAGER IN EXCLUSIVE BREASTFEEDING PROGRAM",
      "SPECIAL AWARD IN INTEGRATED MANAGEMENT OF CHILDHOOD ILLNESS (IMCI) PROGRAM",
      "SPECIAL AWARD IN NATIONAL IMMUNIZATION PROGRAM"
    ],
    "categoryTag": "PROGRAM MANAGER"
  },
  {
    "id": 8,
    "type": "awardee",
    "title": "VILMA D. SAREN, RM",
    "number": 8,
    "category": "PROGRAM MANAGER",
    "subtitle": "Municipal Health Office of New Corella",
    "citations": [
      "SPECIAL AWARD IN WOMEN'S HEALTH CARE PROGRAM"
    ],
    "categoryTag": "PROGRAM MANAGER"
  },
  {
    "id": 9,
    "type": "awardee",
    "title": "IRWIN JOSEPH B. BATIBUT, RN, LPT",
    "number": 9,
    "category": "PROGRAM MANAGER",
    "subtitle": "Municipal Health Office of Kapalong",
    "citations": [
      "TOP PERFORMING PROGRAM MANAGER IN TB PREVENTION AND CONTROL PROGRAM",
      "SPECIAL AWARD IN EPIDEMIOLOGY AND SURVEILLANCE SYSTEM PROGRAM"
    ],
    "categoryTag": "PROGRAM MANAGER"
  },
  {
    "id": 10,
    "type": "awardee",
    "title": "DR. ARNEL R. FLORENDO",
    "number": 10,
    "category": "PROGRAM MANAGER",
    "subtitle": "City Health Office of Tagum",
    "categoryTag": "PROGRAM MANAGER"
  },
  {
    "id": 11,
    "type": "awardee",
    "title": "MARIA CLEOFE T. FLORES, RN, MAN",
    "number": 11,
    "category": "PROGRAM MANAGER",
    "subtitle": "City Health Office of Tagum",
    "citations": [
      "TOP PERFORMING PROGRAM MANAGER IN THE OPERATION OF BARANGAY HEALTH WORKERS (BHW) PROGRAM",
      "TOP PERFORMING PROGRAM MANAGER IN DAVAO DEL NORTE ELECTRONIC HEALTH REFERRAL SYSTEM (DEHEARS) PROGRAM"
    ],
    "categoryTag": "PROGRAM MANAGER"
  },
  {
    "id": 12,
    "type": "awardee",
    "title": "RAMA B. ASUBE",
    "number": 12,
    "category": "PROGRAM MANAGER",
    "subtitle": "City Health Office of Tagum",
    "citations": [
      "TOP PERFORMING BARANGAY HEALTH WORKER FEDERATION PRESIDENT"
    ],
    "categoryTag": "PROGRAM MANAGER"
  },
  {
    "id": 13,
    "type": "awardee",
    "title": "MARY MARGOT G. LAGURA",
    "number": 13,
    "category": "PROGRAM MANAGER",
    "subtitle": "City Health Office of Panabo",
    "citations": [
      "TOP PERFORMING PROGRAM MANAGER IN DAVAO DEL NORTE HEALTH INFORMATION AND MANAGEMENT SYSTEM (DHIMS)"
    ],
    "categoryTag": "PROGRAM MANAGER"
  },
  {
    "id": 14,
    "type": "awardee",
    "title": "ETHEL FELIPE MORENTE, RN",
    "number": 14,
    "category": "PROGRAM MANAGER",
    "subtitle": "City Health Office of Tagum",
    "categoryTag": "PROGRAM MANAGER"
  },
  {
    "id": 15,
    "type": "awardee",
    "title": "ANA LIZA C. SAEZ, RN",
    "number": 15,
    "category": "PROGRAM MANAGER",
    "subtitle": "City Health Office of Island Garden City of Samal",
    "citations": [
      "TOP PERFORMING PROGRAM MANAGER IN MALE REPRODUCTIVE HEALTH CARE PROGRAM"
    ],
    "categoryTag": "PROGRAM MANAGER"
  },
  {
    "id": 16,
    "type": "awardee",
    "title": "MARY ANN L. TUMAMPIL",
    "number": 16,
    "category": "PROGRAM MANAGER",
    "subtitle": "City Health Office of Panabo",
    "citations": [
      "TOP PERFORMING PROGRAM MANAGER IN FAMILY PLANNING PROGRAM"
    ],
    "categoryTag": "PROGRAM MANAGER"
  },
  {
    "id": 17,
    "type": "awardee",
    "title": "LORELIE R. ORIOL, RN",
    "number": 17,
    "category": "PROGRAM MANAGER",
    "subtitle": "City Health Office of Panabo",
    "categoryTag": "PROGRAM MANAGER"
  },
  {
    "id": 18,
    "type": "awardee",
    "title": "GUILLERMO E. OLDEN",
    "number": 18,
    "category": "PROGRAM MANAGER",
    "subtitle": "City Health Office of Island Garden City of Samal",
    "categoryTag": "PROGRAM MANAGER"
  },
  {
    "id": 19,
    "type": "awardee",
    "title": "LESLIE ANN P. MESOLIS, RND",
    "number": 19,
    "category": "PROGRAM MANAGER",
    "subtitle": "City Health Office of Tagum",
    "categoryTag": "PROGRAM MANAGER"
  },
  {
    "id": 20,
    "type": "awardee",
    "title": "MARIANNE C. SENO, RN",
    "number": 20,
    "category": "PROGRAM MANAGER",
    "subtitle": "City Health Office of Tagum",
    "categoryTag": "PROGRAM MANAGER"
  },
  {
    "id": 21,
    "type": "awardee",
    "title": "ANNE MICHELLE S. LAMBAN, RN",
    "number": 21,
    "category": "PROGRAM MANAGER",
    "subtitle": "City Health Office of Panabo",
    "categoryTag": "PROGRAM MANAGER"
  },
  {
    "id": 22,
    "type": "awardee",
    "title": "ANA MARIE E.  MAKABENTA, RN",
    "number": 22,
    "category": "PROGRAM MANAGER",
    "subtitle": "City Health Office of Island Garden City of Samal",
    "categoryTag": "PROGRAM MANAGER"
  },
  {
    "id": 23,
    "type": "awardee",
    "title": "SOFIA D. BENDIJO, RND",
    "number": 23,
    "category": "PROGRAM MANAGER",
    "subtitle": "City Health Office of Panabo",
    "categoryTag": "PROGRAM MANAGER"
  },
  {
    "id": 24,
    "type": "awardee",
    "title": "LOUELA ANN O. CABALLERO, RN",
    "number": 24,
    "category": "PROGRAM MANAGER",
    "subtitle": "City Health Office of Island Garden City of Samal",
    "categoryTag": "PROGRAM MANAGER"
  },
  {
    "id": 25,
    "type": "awardee",
    "title": "CHERI S. LENDIO, RN",
    "number": 25,
    "category": "PROGRAM MANAGER",
    "subtitle": "City Health Office of Panabo",
    "citations": [
      "TOP PERFORMING HEALTH PROMOTION OFFICER FOR HEALTHY SETTINGS"
    ],
    "categoryTag": "PROGRAM MANAGER"
  },
  {
    "id": 26,
    "type": "awardee",
    "title": "JUVELLEIN P. RAVARA, RN",
    "number": 26,
    "category": "PROGRAM MANAGER",
    "subtitle": "City Health Office of Tagum",
    "citations": [
      "TOP PERFORMING PROGRAM MANAGER IN EPIDEMIOLOGY AND SURVEILLANCE SYSTEM PROGRAM"
    ],
    "categoryTag": "PROGRAM MANAGER"
  },
  {
    "id": 27,
    "type": "awardee",
    "title": "EDEN M. LUSTRE, RN",
    "number": 27,
    "category": "PROGRAM MANAGER",
    "subtitle": "City Health Office of Panabo",
    "categoryTag": "PROGRAM MANAGER"
  },
  {
    "id": 28,
    "type": "awardee",
    "title": "CARLYN T. QUIETA, RSW, MSSW",
    "number": 28,
    "category": "PROGRAM MANAGER",
    "subtitle": "City Health Office of Panabo",
    "categoryTag": "PROGRAM MANAGER"
  },
  {
    "id": 29,
    "type": "awardee",
    "title": "DR. NANCY O. CACAYORIN",
    "number": 29,
    "category": "PROGRAM MANAGER",
    "subtitle": "Municipal Health Office of New Corella",
    "categoryTag": "PROGRAM MANAGER"
  },
  {
    "id": 30,
    "type": "awardee",
    "title": "MARY JEAN G. VALDEZ, RM",
    "number": 30,
    "category": "PROGRAM MANAGER",
    "subtitle": "Municipal Health Office of Carmen",
    "citations": [
      "TOP PERFORMING PROGRAM MANAGER IN THE OPERATION OF BARANGAY HEALTH WORKERS (BHW) PROGRAM"
    ],
    "categoryTag": "PROGRAM MANAGER"
  },
  {
    "id": 31,
    "type": "awardee",
    "title": "BENETTE P. MAYONO",
    "number": 31,
    "category": "PROGRAM MANAGER",
    "subtitle": "Municipal Health Office of Carmen",
    "categoryTag": "PROGRAM MANAGER"
  },
  {
    "id": 32,
    "type": "awardee",
    "title": "MARICRES B. POSTANES, RN",
    "number": 32,
    "category": "PROGRAM MANAGER",
    "subtitle": "Municipal Health Office of New Corella",
    "citations": [
      "TOP PERFORMING PROGRAM MANAGER IN DAVAO DEL NORTE HEALTH INFORMATION AND MANAGEMENT SYSTEM (DHIMS)",
      "TOP PERFORMING PROGRAM MANAGER IN RABIES PREVENTION AND CONTROL PROGRAM"
    ],
    "categoryTag": "PROGRAM MANAGER"
  },
  {
    "id": 33,
    "type": "awardee",
    "title": "JESTER B. MAKOL",
    "number": 33,
    "category": "PROGRAM MANAGER",
    "subtitle": "Municipal Health Office of B. E. Dujali",
    "citations": [
      "TOP PERFORMING PROGRAM MANAGER IN MALE REPRODUCTIVE HEALTH CARE PROGRAM"
    ],
    "categoryTag": "PROGRAM MANAGER"
  },
  {
    "id": 34,
    "type": "awardee",
    "title": "JACLYN ROSE ZAPHIRE S. SABLAS, RM",
    "number": 34,
    "category": "PROGRAM MANAGER",
    "subtitle": "Municipal Health Office of Carmen",
    "citations": [
      "TOP PERFORMING PROGRAM MANAGER IN FAMILY PLANNING PROGRAM"
    ],
    "categoryTag": "PROGRAM MANAGER"
  },
  {
    "id": 35,
    "type": "awardee",
    "title": "SIGRID PORTIA MACASA, MD",
    "number": 35,
    "category": "PROGRAM MANAGER",
    "subtitle": "Municipal Health Office of Kapalong",
    "citations": [
      "TOP PERFORMING PROGRAM MANAGER IN NUTRITION PROGRAM"
    ],
    "categoryTag": "PROGRAM MANAGER"
  },
  {
    "id": 36,
    "type": "awardee",
    "title": "ESMERALDA C. ALFORQUE, RM",
    "number": 36,
    "category": "PROGRAM MANAGER",
    "subtitle": "Municipal Health Office of Sto. Tomas",
    "citations": [
      "TOP PERFORMING PROGRAM MANAGER IN ENVIRONMENTAL, OCCUPATIONAL HEALTH AND SANITATION PROGRAM"
    ],
    "categoryTag": "PROGRAM MANAGER"
  },
  {
    "id": 37,
    "type": "awardee",
    "title": "GEMMA M. DURAN, RM",
    "number": 37,
    "category": "PROGRAM MANAGER",
    "subtitle": "Municipal Health Office of Sto. Tomas",
    "citations": [
      "TOP PERFORMING PROGRAM MANAGER IN STI/HIV PREVENTION AND CONTROL PROGRAM"
    ],
    "categoryTag": "PROGRAM MANAGER"
  },
  {
    "id": 38,
    "type": "awardee",
    "title": "LIZA C. MANUBAG, RN",
    "number": 38,
    "category": "PROGRAM MANAGER",
    "subtitle": "Municipal Health Office of New Corella",
    "citations": [
      "TOP PERFORMING PROGRAM MANAGER IN TOBACCO PREVENTION AND CONTROL PROGRAM",
      "TOP PERFORMING PROGRAM MANAGER IN DISASTER RISK REDUCTION AND MANAGEMENT IN HEALTH (DRRM H) PROGRAM"
    ],
    "categoryTag": "PROGRAM MANAGER"
  },
  {
    "id": 39,
    "type": "awardee",
    "title": "SHAIRA FAITH G. LIGANSO, RM",
    "number": 39,
    "category": "PROGRAM MANAGER",
    "subtitle": "Municipal Health Office of Kapalong",
    "citations": [
      "TOP PERFORMING HEALTH PROMOTION OFFICER FOR HEALTHY SETTINGS"
    ],
    "categoryTag": "PROGRAM MANAGER"
  },
  {
    "id": 40,
    "type": "awardee",
    "title": "FLORENCE M. GUMERA",
    "number": 40,
    "category": "PROGRAM MANAGER",
    "subtitle": "Municipal Health Office of Sto. Tomas",
    "categoryTag": "PROGRAM MANAGER"
  },
  {
    "id": 41,
    "type": "awardee",
    "title": "JOVELYN A. DUMALUAN, RN, MAN",
    "number": 41,
    "category": "PROGRAM MANAGER",
    "subtitle": "Municipal Health Office of B. E. Dujali",
    "citations": [
      "TOP PERFORMING PROGRAM MANAGER IN POPULATION AND MANAGEMENT SERVICES PROGRAM"
    ],
    "categoryTag": "PROGRAM MANAGER"
  },
  {
    "id": 42,
    "type": "closing",
    "title": "CONGRATULATIONS TO ALL AWARDEES",
    "citation": "Thank you for your tireless dedication, exemplary service, and enduring partnership in advancing public health for the Province of Davao del Norte.",
    "subtitle": "TOP PERFORMING PROGRAM MANAGERS"
  }
];

  window.SLIDES_DATA = data;
  window.DECKS_CATALOG = window.DECKS_CATALOG || {};
  window.DECKS_CATALOG['03-top-program'] = data;
  window.DECKS_CATALOG['03-top-program-managers'] = data;
})();
