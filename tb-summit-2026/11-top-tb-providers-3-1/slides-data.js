(function () {
  // Source: DAVNOR END TB SUMMIT 2026 (Technical Cue Guide & Awards Catalog)
  var data = [
  {
    "id": 0,
    "type": "title",
    "event": "DAVNOR TB SUMMIT 2026",
    "subEvent": "Province of Davao del Norte · Provincial Health Office",
    "title": "TOP 3–1 PERFORMING TB PROVIDING FACILITIES",
    "category": "GRAND PODIUM CEREMONY",
    "citation": "Grand celebration of the Bronze, Silver, and Champion Municipal and City Health Offices leading the elimination of TB in Davao del Norte"
  },
  {
    "id": 1,
    "type": "awardee",
    "title": "MUNICIPAL HEALTH OFFICE OF STO. TOMAS",
    "number": 1,
    "category": "3RD PLACE — TOP TB PROVIDING HEALTH CENTER FACILITY",
    "subtitle": "Municipality of Sto. Tomas · Overall Score: 63.00%",
    "image": "../assets/photos/provider_top3_sto_tomas.jpg",
    "categoryTag": "🥉 3RD PLACE · BRONZE"
  },
  {
    "id": 2,
    "type": "awardee",
    "title": "MHO STO. TOMAS — HEALTHCARE TEAM & VOLUNTEERS",
    "number": 2,
    "category": "HEALTHCARE TEAM RECOGNITION",
    "subtitle": "Municipality of Sto. Tomas · Bronze Podium Finalist",
    "citations": [
      "DR. JUNE P. LIM, RMT, MD, MPM — Tb Medical Coordinator",
      "RAYCHELE M. ABUDA, RN — Tb Nurse Coordinator",
      "ANNALOU O. OLANDRIA, RMT — Tb Med Tech Coordinator",
      "GEMMA M. DURAN — HEPO",
      "MARIBEL A. OBEAL — Tb Community Health Worker (CHW)",
      "JANETTE B. MEDINA · ROSIE S. SIBAY · HELEN P. VELARDE — Community Health Workers"
    ],
    "categoryTag": "3RD PLACE TEAM"
  },
  {
    "id": 3,
    "type": "awardee",
    "title": "CITY HEALTH OFFICE OF TAGUM",
    "number": 3,
    "category": "2ND PLACE — TOP TB PROVIDING HEALTH CENTER FACILITY",
    "subtitle": "City of Tagum · Overall Score: 66.28%",
    "image": "../assets/photos/provider_top2_tagum.jpg",
    "categoryTag": "🥈 2ND PLACE · SILVER"
  },
  {
    "id": 4,
    "type": "awardee",
    "title": "CHO TAGUM — HEALTHCARE LEADERSHIP & TECHNICAL TEAM",
    "number": 4,
    "category": "LEADERSHIP & TECHNICAL TEAM",
    "subtitle": "City of Tagum · Silver Podium Finalist",
    "citations": [
      "DR. MUHAMMAD HISHAM B. MACKNO, MD — Tb Medical Coordinator",
      "JOHAN CALVIN P. CHIENG, RN — Tb Nurse Coordinator",
      "CRISTINA A. FERNANDEZ, RMT — Tb Med Tech Coordinator",
      "JOSEPH JASON SOLIS — ITIS Encoder",
      "EVALY FAITH V. EUGENIO, RMT — Supervising Health Officer IV",
      "RAE KATHERINE APURA, RN — HEPO III",
      "LORENA S. PEÑAS — Laboratory Aide"
    ],
    "categoryTag": "2ND PLACE LEADERSHIP"
  },
  {
    "id": 5,
    "type": "awardee",
    "title": "CHO TAGUM — COMMUNITY HEALTH WORKERS & VOLUNTEERS",
    "number": 5,
    "category": "FRONTLINE WORKFORCE RECOGNITION",
    "subtitle": "City of Tagum · Frontline Community Health Workers",
    "citations": [
      "MIGUELITA C. AQUINO · EVELYN J. RAZONABLE · MA. LUNA G. AMBITO — CHW / Community Volunteers",
      "ALMERA R. ABELLANA · MARIANITA A. ABUCAY · MARITESS B. ANACAYA · JOAN L. ARAÑO — CHWs",
      "JOSELYN L. BAYA · RUBY L. BITANGCOL · CRISTINE JOY P. BUAYA · DATCHES B. BUNAYAN — CHWs",
      "AMELIA A. CATUBIG · HAYDELISA C. CONCON · LORIEBETH D. DAYAG · MARIA CEILO D. DEOCARES — CHWs",
      "CARMELITA C. FAMILAR · TERESITA S. FERNANDEZ · NICANORA M. FUNESTO · GRACE A. GAUM — CHWs",
      "MILAGROSA C. HINAY · FE L. MACIAS · MILDRED C. MAGDADARO · KARENA B. MAYOR — CHWs",
      "EDNA C. MOMONGAN · MARIA ELITA Q. ONONG · BABYLYN C. PANGONA · AZENITH M. PAYBANO — CHWs",
      "ROSALIA PUNO · JINA Q. RABE · SHEILA C. ROLLO · VIRGENIA G. SAREÑANA — CHWs",
      "GEMIMA A. VELA · MARYJEAN C. BUSTAMANTE · AILYN O. NATURAL — CHWs"
    ],
    "categoryTag": "2ND PLACE CHWS"
  },
  {
    "id": 6,
    "type": "awardee",
    "title": "MUNICIPAL HEALTH OFFICE OF KAPALONG",
    "number": 6,
    "category": "1ST PLACE — TOP TB PROVIDING HEALTH CENTER FACILITY",
    "subtitle": "Municipality of Kapalong · Overall Score: 80.19%",
    "image": "../assets/photos/provider_top1_kapalong.png",
    "categoryTag": "🥇 1ST PLACE · GRAND CHAMPION"
  },
  {
    "id": 7,
    "type": "awardee",
    "title": "MHO KAPALONG — CHAMPION HEALTHCARE & FRONTLINE TEAM",
    "number": 7,
    "category": "CHAMPION HEALTHCARE TEAM",
    "subtitle": "Municipality of Kapalong · Grand Champion Team",
    "citations": [
      "DR. LOUELYN H. EXALA, MD, DBCOM — TB Medical Coordinator",
      "IRWIN JOSEPH B. BATIBUT, RN — Tb Nurse Coordinator",
      "RENATO C. NAVARRO JR., RMT — Tb Med Tech Coordinator",
      "AL BARRAY T. PERALTA — ITIS Encoder",
      "RIZALYN C. RAMIREZ — Tb Admin Support",
      "SHAIRA FAITH G. LIGANSO, RM, BSM — HEPO",
      "TITING D. PAYNAG — Community Volunteer",
      "DELIA S. OBENIETA · MARIEL M. OYDA · MARY S. LALUMA — CHWs",
      "LIEZEL C. MASALOON · BABIE M. DAGANSINA · JOLLY ANN M. MANGUAN — CHWs"
    ],
    "categoryTag": "1ST PLACE TEAM"
  },
  {
    "id": 8,
    "type": "closing",
    "title": "CONGRATULATIONS TO OUR PODIUM CHAMPIONS!",
    "subtitle": "DAVNOR TB SUMMIT 2026",
    "citation": "In salute to Sto. Tomas, Tagum City, and Kapalong for their extraordinary leadership, dedication, and clinical excellence in eliminating Tuberculosis."
  }
];

  window.SLIDES_DATA = data;
  window.DECKS_CATALOG = window.DECKS_CATALOG || {};
  window.DECKS_CATALOG['tb-11-top-tb-providers-3-1'] = data;
})();
