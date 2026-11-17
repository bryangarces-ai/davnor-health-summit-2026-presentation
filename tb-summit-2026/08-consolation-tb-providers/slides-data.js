(function () {
  // Source: TB SUMMIT LIST OF AWARDS.xlsx (DAVNOR TB Summit 2026)
  var data = [
  {
    "id": 0,
    "type": "title",
    "event": "DAVNOR TB SUMMIT 2026",
    "subEvent": "Province of Davao del Norte · Provincial Health Office",
    "title": "CONSOLATION AWARDS — TB PROVIDING FACILITIES",
    "category": "DAVNOR TB SUMMIT 2026",
    "citation": "Commending dedicated TB providing facilities for unwavering commitment and patient care"
  },
  {
    "id": 1,
    "type": "awardee",
    "title": "MUNICIPAL HEALTH OFFICE OF NEW CORELLA",
    "number": 1,
    "category": "CONSOLATION AWARDEE — TB PROVIDING FACILITY",
    "subtitle": "Municipality of New Corella",
    "citations": [
      "DR. NANCY CACAYORIN — TB Medical Coordinator",
      "DR. JULIUS CLOYDE A. JALA — Assistant Municipal Health Officer",
      "MARITES M. BELLOSA, RM, BSM — TB Coordinator",
      "INGRID J. CUÑADO, RMT — TB Med Tech Coordinator",
      "LIZA C. MANUBAG, RN — HEPO",
      "JOY E. OMBILAYAN — TB Community Health Worker (CHW)",
      "JEANNIFER C. HANGAD — CHW",
      "RECEL S. BALILI — CHW"
    ],
    "categoryTag": "CONSOLATION AWARDEE"
  },
  {
    "id": 2,
    "type": "awardee",
    "title": "CITY HEALTH OFFICE OF PANABO",
    "number": 2,
    "category": "CONSOLATION AWARDEE — TB PROVIDING FACILITY",
    "subtitle": "City of Panabo",
    "citations": [
      "DR. ALGAE ROSE S. HECHANOVA — City Health Officer",
      "DR. RAYAN JAE A. DEOCAMPO — TB Medical Coordinator",
      "MARY DIVINE GRACE T. HOFILEÑA, RN — TB Nurse Coordinator",
      "NADINE GEMMA S. ESTAQUIO, RMT — TB Med Tech Coordinator",
      "CHERI S. LENDIO, RN — HEPO II",
      "LEONIDA D. BASOBAS — Lab Aide",
      "JENEFER N. ANTON — TB Community Health Worker (CHW)",
      "NERISSA B. GORRE — CHW",
      "SHAA B. MAMAD — CHW",
      "MARDEL S. LUMAAD — CHW"
    ],
    "categoryTag": "CONSOLATION AWARDEE"
  },
  {
    "id": 3,
    "type": "awardee",
    "title": "MUNICIPAL HEALTH OFFICE OF CARMEN",
    "number": 3,
    "category": "CONSOLATION AWARDEE — TB PROVIDING FACILITY",
    "subtitle": "Municipality of Carmen",
    "citations": [
      "DR. HANNAH KATRINA P. SEVILLA, DBPA, FPSA, FPSMSG — MHO",
      "DR. THOMPSON C. UY — TB Consultant",
      "JANE S. APUACA, RM, BSM — TB Coordinator",
      "CHERISH MADEL B. ELLECO, RMT — TB Med Tech Coordinator",
      "ROY P. SANTILLAN, RN — HEPO",
      "FEMER B. DABALOS — TB Community Health Worker (CHW)",
      "ANNALOU A. BASOT — CHW",
      "GEMMA L. BAJAO — CHW",
      "ELSIE S. VERGARA — CHW"
    ],
    "categoryTag": "CONSOLATION AWARDEE"
  },
  {
    "id": 4,
    "type": "awardee",
    "title": "MUNICIPAL HEALTH OFFICE OF BRAULIO E. DUJALI",
    "number": 4,
    "category": "CONSOLATION AWARDEE — TB PROVIDING FACILITY",
    "subtitle": "Municipality of Braulio E. Dujali",
    "citations": [
      "DR. CHHERY T. DEMAALA — TB Medical Coordinator",
      "JOVELYN A. DUMALUAN, RN — TB Nurse Coordinator",
      "BETTY L. CALAMAY, RM — TB Focal Person",
      "SHARON ROSE B. LACORDA, RMT — TB Med Tech Coordinator",
      "FRENALIE D. BESAGAS — Lab Aide",
      "CHERYL R. GENTALLAN — TB Community Health Worker (CHW)",
      "NENA C. PLAGA — CHW",
      "NOIME A. FLORES — CHW"
    ],
    "categoryTag": "CONSOLATION AWARDEE"
  },
  {
    "id": 5,
    "type": "awardee",
    "title": "MUNICIPAL HEALTH OFFICE OF ASUNCION",
    "number": 5,
    "category": "CONSOLATION AWARDEE — TB PROVIDING FACILITY",
    "subtitle": "Municipality of Asuncion",
    "citations": [
      "DR. JOHN C. BATACAN — Municipal Health Officer",
      "DR. JUSTIN LOUIE RYAN S. YUMANG — Medical Officer IV",
      "RUEBEN L. IMBANG, RN — TB Nurse Coordinator",
      "KRIZZIA MAE A. SABUDAN, RMT — TB Med Tech Coordinator",
      "JENNIE F. AVENIDO — TB Community Health Worker (CHW)",
      "DAISY L. ESCALA — CHW",
      "WENDY S. TAUNGAAN — CHW",
      "EVELYN M. ECHALAS — CHW / Community Volunteer"
    ],
    "categoryTag": "CONSOLATION AWARDEE"
  },
  {
    "id": 6,
    "type": "awardee",
    "title": "MUNICIPAL HEALTH OFFICE OF SAWATA",
    "number": 6,
    "category": "CONSOLATION AWARDEE — TB PROVIDING FACILITY",
    "subtitle": "Municipality of San Isidro (Sawata)",
    "citations": [
      "DR. MERCY ASUNCION U. MACASERO, MD — TB Medical Coordinator",
      "DR. KESSEL T. DOMINGUEZ, MD — DTTB",
      "JAY RYAN G. VALIAO, RN — TB Nurse Coordinator",
      "JOHN RUMEL N. JADRAQUE, RMT — TB Med Tech Coordinator",
      "JAY M. CARMELOTES — ITIS Encoder",
      "JOELITA B. TUYOR — TB Community Health Worker (CHW)",
      "ELSEVITA P. FERNANDEZ — CHW",
      "EVA GRACE J. MANILA — CHW"
    ],
    "categoryTag": "CONSOLATION AWARDEE"
  },
  {
    "id": 7,
    "type": "awardee",
    "title": "MUNICIPAL HEALTH OFFICE OF TALAINGOD",
    "number": 7,
    "category": "CONSOLATION AWARDEE — TB PROVIDING FACILITY",
    "subtitle": "Municipality of Talaingod",
    "citations": [
      "DR. RICAR P. APAS, MD — TB Medical Coordinator",
      "MARIA LIZA R. MONTERO, RN — TB Nurse Coordinator",
      "CHRISTINE DENNISE P. OLAYAN, RMT — TB Med Tech Coordinator",
      "JOSEPHINE S. BANTAO, RM — HEPO",
      "JESSA B. VILLANUEVA — TB Community Health Worker (CHW)",
      "MARILYN D. ASI-AN — CHW",
      "SONIA B. COLE — CHW"
    ],
    "categoryTag": "CONSOLATION AWARDEE"
  },
  {
    "id": 8,
    "type": "awardee",
    "title": "BABAK DISTRICT HEALTH OFFICE",
    "number": 8,
    "category": "CONSOLATION AWARDEE — TB PROVIDING FACILITY",
    "subtitle": "IGACOS · Babak District",
    "citations": [
      "DR. JOSE BERNARD D. YAP — TB Medical Coordinator (Babak Dist.)",
      "TEDORO C. MEJIAS JR., RN — PHN",
      "AIZA MATAS, RMT — Medical Technologist",
      "ZENITH JANE T. SAMBILAD — ITIS Encoder",
      "MARITESS F. SUSAS — TB Community Health Worker (CHW)",
      "MEREJINE B. SUAREZ — CHW",
      "RUDITH V. JOVEN — CHW"
    ],
    "categoryTag": "CONSOLATION AWARDEE"
  },
  {
    "id": 9,
    "type": "awardee",
    "title": "KAPUTIAN DISTRICT HEALTH OFFICE",
    "number": 9,
    "category": "CONSOLATION AWARDEE — TB PROVIDING FACILITY",
    "subtitle": "IGACOS · Kaputian District",
    "citations": [
      "DR. DENNIS CARLOS D. FLORES — City Health Officer",
      "ANA MARIE E. MACABENTA, RN — HEPO",
      "TELY GRACE P. LUCERO, RN, MAN — Admin Officer",
      "DR. FRITZ GERARD M. LLANOS — TB Medical Coordinator",
      "SWEET DAFFODIL N. ROBLE, RN, MAN — TB Nurse Coordinator",
      "ELIAZAR L. GUALDAJARA JR., RMT — Medical Technologist",
      "ALJON B. OLIVEROS — ITIS Encoder",
      "JELYN S. PAGALAN — CHW",
      "JENNY B. MONTEJO — CHW",
      "MARIBEL M. CORTEZ — CHW"
    ],
    "categoryTag": "CONSOLATION AWARDEE"
  },
  {
    "id": 10,
    "type": "awardee",
    "title": "SAMAL DISTRICT HEALTH OFFICE",
    "number": 10,
    "category": "CONSOLATION AWARDEE — TB PROVIDING FACILITY",
    "subtitle": "IGACOS · Samal District",
    "citations": [
      "DR. STEPHANIE ALVAR R. PARREÑO — TB Medical Coordinator",
      "WENFREDO L. LAVADOR, RN — PHN",
      "CLARICE FAYE C. CAMANZO, RMT — Medical Technologist",
      "DEN MARK V. ROMO — ITIS Encoder",
      "JO-ANN L. TANGINAN — CHW",
      "JACKYLOU C. SERRANO — CHW",
      "MARY GRACE L. VILLAHERMOSA — CHW"
    ],
    "categoryTag": "CONSOLATION AWARDEE"
  },
  {
    "id": 11,
    "type": "closing",
    "title": "SALUTE TO ALL CONSOLATION TB PROVIDING FACILITIES",
    "citation": "Thank you for your dedicated service to every patient on the path to recovery.",
    "subtitle": "DAVNOR TB SUMMIT 2026"
  }
];

  window.SLIDES_DATA = data;
  window.DECKS_CATALOG = window.DECKS_CATALOG || {};
  window.DECKS_CATALOG['tb-08-consolation-tb-providers'] = data;
})();
