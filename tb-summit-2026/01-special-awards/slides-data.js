(function () {
  // Source: TB SUMMIT LIST OF AWARDS.xlsx (DAVNOR TB Summit 2026)
  var data = [
  {
    "id": 0,
    "type": "title",
    "event": "DAVNOR TB SUMMIT 2026",
    "subEvent": "Province of Davao del Norte \u00b7 Provincial Health Office",
    "title": "RECOGNITION OF SPECIAL AWARDS",
    "category": "DAVNOR TB SUMMIT 2026",
    "citation": "Honoring our partners, consultants, and champions in the fight to end Tuberculosis in Davao del Norte"
  },
  {
    "id": 1,
    "type": "awardee",
    "title": "DEPARTMENT OF HEALTH - DAVAO CENTER FOR HEALTH DEVELOPMENT",
    "number": 1,
    "category": "SPECIAL AWARD",
    "subtitle": "RO XI",
    "categoryTag": "SPECIAL AWARD"
  },
  {
    "id": 2,
    "type": "awardee",
    "title": "HANSEL V. AMOGUIS, MD, MPM",
    "number": 2,
    "category": "SPECIAL AWARD",
    "subtitle": "Head - Infectious Cluster \u00b7 DOH-DCHD XI",
    "categoryTag": "SPECIAL AWARD"
  },
  {
    "id": 3,
    "type": "awardee",
    "title": "EVELYN UY-GELITO, RN, MPH",
    "number": 3,
    "category": "SPECIAL AWARD",
    "subtitle": "NTP Program Manager \u00b7 DOH-DCHD XI",
    "categoryTag": "SPECIAL AWARD"
  },
  {
    "id": 4,
    "type": "awardee",
    "title": "JORDAN F. KINTANAR, RMT",
    "number": 4,
    "category": "SPECIAL AWARD",
    "subtitle": "NTP Med Tech Coordinator \u00b7 DOH-DCHD XI",
    "categoryTag": "SPECIAL AWARD"
  },
  {
    "id": 5,
    "type": "awardee",
    "title": "PHILIPPINE BUSINESS FOR SOCIAL PROGRESS (PBSP) ACCESS PROJECT",
    "number": 5,
    "category": "SPECIAL AWARD",
    "subtitle": "Project Team",
    "citations": [
      "VIVIAN S. ANTONIO \u2014 Program Officer",
      "PRINCESS SALCEDO-CORIAS, RN \u2014 TB Technical Officer",
      "ELAINE GRACE N. ALIMES, RN \u2014 Regional Project Officer",
      "JOBELLE L. FRANCO, RN \u2014 Program Officer",
      "ELLEN G. GERMAN, RN \u2014 PMDT Nurse DRMC",
      "KEZIA P. CABRERA, RMT \u2014 GenXpert Technician DRMC"
    ],
    "categoryTag": "SPECIAL AWARD"
  },
  {
    "id": 6,
    "type": "awardee",
    "title": "HON. LOU C. SUAYBAGUIO, REE, RN",
    "number": 6,
    "category": "SPECIAL AWARD",
    "subtitle": "Board Member District I \u00b7 Chairperson - Committee on Health",
    "categoryTag": "SPECIAL AWARD"
  },
  {
    "id": 7,
    "type": "awardee",
    "title": "GLENN A. PONO, MD FPCP, FPCCP",
    "number": 7,
    "category": "SPECIAL AWARD",
    "subtitle": "Internal Medicine / Pulmonologist \u00b7 Davao del Norte TB Consultant",
    "categoryTag": "SPECIAL AWARD"
  },
  {
    "id": 8,
    "type": "awardee",
    "title": "JANICE G. ESPARAGOZA, MD, FPCR, FUSP",
    "number": 8,
    "category": "SPECIAL AWARD",
    "subtitle": "Radiologist \u00b7 Davao del Norte TB Consultant",
    "categoryTag": "SPECIAL AWARD"
  },
  {
    "id": 9,
    "type": "awardee",
    "title": "MARIA VICTORIA L. LEGASPI, MD & JEORGIE ARVIN S. LEGASPI, MD",
    "number": 9,
    "category": "SPECIAL AWARD",
    "subtitle": "Specialist Consultants",
    "citations": [
      "MARIA VICTORIA L. LEGASPI, MD, FPCP, FPCCP, FCCP \u2014 Internal Medicine/Pulmonologist",
      "JEORGIE ARVIN S. LEGASPI, MD, DPCOM, FPSMS, MAHA \u2014 Internal Medicine/Occupational Medicine"
    ],
    "categoryTag": "SPECIAL AWARD"
  },
  {
    "id": 10,
    "type": "awardee",
    "title": "JOEBELLE MAY GALANG-DELA CRUZ, MD, MPM, FPAFP",
    "number": 10,
    "category": "SPECIAL AWARD",
    "subtitle": "Vice Chairperson \u00b7 Davao del Norte TB Medical Advisory Committee \u00b7 DRMC",
    "categoryTag": "SPECIAL AWARD"
  },
  {
    "id": 11,
    "type": "awardee",
    "title": "VIKKI DARL R. RODRIGUEZ, MD, FPCP, DPSMID",
    "number": 11,
    "category": "SPECIAL AWARD",
    "subtitle": "Member \u00b7 Davao del Norte TB Medical Advisory Committee \u00b7 DRMC",
    "categoryTag": "SPECIAL AWARD"
  },
  {
    "id": 12,
    "type": "awardee",
    "title": "LOUELYN H. EXALA, MD, DBCOM",
    "number": 12,
    "category": "SPECIAL AWARD",
    "subtitle": "Member \u00b7 Davao del Norte TB Medical Advisory Committee \u00b7 RHU Kapalong",
    "categoryTag": "SPECIAL AWARD"
  },
  {
    "id": 13,
    "type": "awardee",
    "title": "SHARIFF AMILOARI S. MANIBPEL, MD, FPCP",
    "number": 13,
    "category": "HIGHEST REFERRALS FOR TB MANDATORY NOTIFICATION",
    "subtitle": "Internal Medicine / Pulmonologist \u00b7 Tagum City",
    "categoryTag": "SPECIAL AWARD"
  },
  {
    "id": 14,
    "type": "awardee",
    "title": "ERLYN D. LOPEZ, MD FPCR, FPCCP",
    "number": 14,
    "category": "HIGHEST REFERRALS FOR TB MANDATORY NOTIFICATION",
    "subtitle": "Pulmonologist \u00b7 Panabo City",
    "categoryTag": "SPECIAL AWARD"
  },
  {
    "id": 15,
    "type": "awardee",
    "title": "PROVINCIAL DEPARTMENT OF HEALTH OFFICE",
    "number": 15,
    "category": "SPECIAL AWARD",
    "subtitle": "Davao del Norte",
    "citations": [
      "VERGEL JAY T. BAUTISTA, MD, MPM \u2014 Development Management Officer V / Provincial Health Team Leader",
      "LORENA M. ORILLA, ChE, MPA \u2014 Development Management Officer IV",
      "JENNIFER D. HINGGO, MPA \u2014 Development Management Officer IV",
      "IAN PATRICK M. VIDAL, RMT \u2014 Development Management Officer IV",
      "DARLENE DOROTHY C. ARAMASA, RMT \u2014 Development Management Officer III"
    ],
    "categoryTag": "SPECIAL AWARD"
  },
  {
    "id": 16,
    "type": "awardee",
    "title": "PROVINCIAL ECONOMIC ENTERPRISE DEVELOPMENT OFFICE",
    "number": 16,
    "category": "SPECIAL AWARD",
    "subtitle": "DOMINIC R. BASALO, MD, MPM \u00b7 P. G. Dept. Head",
    "categoryTag": "SPECIAL AWARD"
  },
  {
    "id": 17,
    "type": "awardee",
    "title": "PROVINCIAL SOCIAL WELFARE DEVELOPMENT OFFICE",
    "number": 17,
    "category": "SPECIAL AWARD",
    "subtitle": "ROSALINDA O. RAPISTA, RSW, MPA \u00b7 P. G. Dept. Head",
    "categoryTag": "SPECIAL AWARD"
  },
  {
    "id": 18,
    "type": "closing",
    "title": "CONGRATULATIONS TO ALL AWARDEES",
    "citation": "Thank you for your partnership and unwavering commitment to ending Tuberculosis in the Province of Davao del Norte.",
    "subtitle": "DAVNOR TB SUMMIT 2026"
  }
];

  window.SLIDES_DATA = data;
  window.DECKS_CATALOG = window.DECKS_CATALOG || {};
  window.DECKS_CATALOG['tb-01-special-awards'] = data;
})();
