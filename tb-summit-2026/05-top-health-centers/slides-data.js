(function () {
  // Source: TB SUMMIT LIST OF AWARDS.xlsx (DAVNOR TB Summit 2026)
  var data = [
  {
    "id": 0,
    "type": "title",
    "event": "DAVNOR TB SUMMIT 2026",
    "subEvent": "Province of Davao del Norte · Provincial Health Office",
    "title": "TOP PERFORMING HEALTH CENTERS",
    "category": "DAVNOR TB SUMMIT 2026",
    "citation": "Recognizing benchmark achievements in TB case notification, treatment coverage, pediatric care, and cure rates"
  },
  {
    "id": 1,
    "type": "awardee",
    "title": "PHILIPPINE TUBERCULOSIS SOCIETY, INC. — TAGUM CITY BRANCH",
    "number": 1,
    "category": "HIGHEST NUMBER OF ENROLLED TB CASES — ALL FORMS",
    "subtitle": "567 Cases Enrolled in 2025",
    "citations": [
      "567 Cases in 2025 · Benchmark High Volume Care"
    ],
    "categoryTag": "ALL FORMS ENROLLMENT"
  },
  {
    "id": 2,
    "type": "awardee",
    "title": "MUNICIPAL HEALTH OFFICE OF KAPALONG",
    "number": 2,
    "category": "HIGHEST TB CASE NOTIFICATION RATE",
    "subtitle": "580 per 100,000 Population in 2025",
    "citations": [
      "580 per 100,000 population in 2025 · Intensive Case Finding"
    ],
    "categoryTag": "CASE NOTIFICATION"
  },
  {
    "id": 3,
    "type": "awardee",
    "title": "MUNICIPAL HEALTH OFFICE OF KAPALONG",
    "number": 3,
    "category": "HIGHEST TB TREATMENT COVERAGE RATE (90.2%)",
    "subtitle": "90.28% Treatment Coverage in 2025",
    "citations": [
      "90.28% in 2025 · Exceeding National 90% Target Benchmark"
    ],
    "categoryTag": "TREATMENT COVERAGE"
  },
  {
    "id": 4,
    "type": "awardee",
    "title": "CITY HEALTH OFFICE OF TAGUM",
    "number": 4,
    "category": "HIGHEST NUMBER OF ENROLLED & TREATED TB IN CHILDREN",
    "subtitle": "45 Pediatric Cases Managed in 2025",
    "citations": [
      "45 Cases in 2025 · Protecting Children from Tuberculosis"
    ],
    "categoryTag": "CHILDREN TB"
  },
  {
    "id": 5,
    "type": "awardee",
    "title": "CITY HEALTH OFFICE OF PANABO",
    "number": 5,
    "category": "HIGHEST NUMBER OF CURED DS-TB CASES",
    "subtitle": "242 Cured DS-TB Cases in 2025 (Cohort 2024)",
    "citations": [
      "242 Cured Cases in 2025 (Cohort 2024) · Excellence in Clinical Follow-Through"
    ],
    "categoryTag": "CURED DS-TB"
  },
  {
    "id": 6,
    "type": "awardee",
    "title": "PHILIPPINE TUBERCULOSIS SOCIETY, INC. — TAGUM CITY BRANCH",
    "number": 6,
    "category": "HIGHEST NUMBER OF SUCCESSFULLY TREATED DS-TB CASES",
    "subtitle": "518 Successfully Treated Cases in 2025 (Cohort 2024)",
    "citations": [
      "518 Cases in 2025 (Cohort 2024) · Exemplary Treatment Completion"
    ],
    "categoryTag": "SUCCESSFUL TREATMENT"
  },
  {
    "id": 7,
    "type": "awardee",
    "title": "MUNICIPAL HEALTH OFFICE OF SAWATA",
    "number": 7,
    "category": "HIGHEST DS-TB CURE RATE",
    "subtitle": "97% in 2025 (Cohort 2024)",
    "citations": [
      "97% in 2025 (Cohort 2024) · High Cure Rate Performance"
    ],
    "categoryTag": "97% CURE RATE"
  },
  {
    "id": 8,
    "type": "awardee",
    "title": "MUNICIPAL HEALTH OFFICE OF SAWATA",
    "number": 8,
    "category": "HIGHEST DS-TB TREATMENT SUCCESS RATE",
    "subtitle": "100% DS-TB Treatment Success Rate in 2025 (Cohort 2024)",
    "citations": [
      "100% in 2025 (Cohort 2024) · Flawless Patient Retention & Success"
    ],
    "categoryTag": "100% TREATMENT SUCCESS"
  },
  {
    "id": 9,
    "type": "awardee",
    "title": "MUNICIPAL HEALTH OFFICE OF CARMEN",
    "number": 9,
    "category": "HIGHEST NUMBER OF CLOSE CONTACTS PROVIDED WITH TPT",
    "subtitle": "255 Close Contacts Provided with TB Preventive Treatment",
    "citations": [
      "255 Patients in 2025 · Breaking the Chain of Transmission"
    ],
    "categoryTag": "TPT PREVENTIVE CARE"
  },
  {
    "id": 10,
    "type": "awardee",
    "title": "MUNICIPAL HEALTH OFFICE OF KAPALONG",
    "number": 10,
    "category": "100% PICT COVERAGE RATE WITH HIGHEST NUMBER TESTED FOR HIV",
    "subtitle": "435 Cases in 2025",
    "citations": [
      "435 Cases in 2025 · 100% Provider-Initiated Counseling & Testing"
    ],
    "categoryTag": "PICT HIV COVERAGE"
  },
  {
    "id": 11,
    "type": "awardee",
    "title": "PHILIPPINE TUBERCULOSIS SOCIETY, INC. — TAGUM CITY BRANCH",
    "number": 11,
    "category": "HIGHEST NUMBER OF ELIGIBLE TB PATIENTS TESTED FOR DIABETES",
    "subtitle": "555 Patients Tested in 2025",
    "citations": [
      "555 Cases in 2025 · Comprehensive Comorbidity Screening"
    ],
    "categoryTag": "DIABETES TESTING"
  },
  {
    "id": 12,
    "type": "awardee",
    "title": "CITY HEALTH OFFICE OF PANABO",
    "number": 12,
    "category": "HIGHEST NUMBER OF SPUTUM-SMEARED TESTED",
    "subtitle": "864 Sputum Smear Tests in 2025",
    "citations": [
      "864 Cases in 2025 · High-Impact Laboratory Case Finding"
    ],
    "categoryTag": "SPUTUM MICROSCOPY"
  },
  {
    "id": 13,
    "type": "awardee",
    "title": "CITY HEALTH OFFICE OF TAGUM",
    "number": 13,
    "category": "TOP PERFORMING RAPID TB DIAGNOSTIC LABORATORY (RTDL) IN DAVAO DEL NORTE",
    "subtitle": "3,369 Presumptive TB Patients Tested in 2025",
    "citations": [
      "3,369 Presumptive Patients Tested in 2025 · High-Volume Diagnostic Hub"
    ],
    "categoryTag": "TOP PERFORMING RTDL"
  },
  {
    "id": 14,
    "type": "awardee",
    "title": "DAVAO REGIONAL MEDICAL CENTER",
    "number": 14,
    "category": "OUTSTANDING RAPID TB DIAGNOSTIC LABORATORY (RTDL) SERVICE AWARD",
    "subtitle": "Tertiary Referral & Advanced Diagnostic Center",
    "citations": [
      "Exemplary Diagnostic Excellence · Referral & Molecular Hub of Davao del Norte"
    ],
    "categoryTag": "OUTSTANDING RTDL SERVICE"
  },
  {
    "id": 15,
    "type": "closing",
    "title": "CONGRATULATIONS TO ALL TOP PERFORMING HEALTH CENTERS",
    "citation": "Celebrating benchmark clinical standards, visionary leadership, and relentless commitment to saving lives.",
    "subtitle": "DAVNOR TB SUMMIT 2026"
  }
];

  window.SLIDES_DATA = data;
  window.DECKS_CATALOG = window.DECKS_CATALOG || {};
  window.DECKS_CATALOG['tb-05-top-health-centers'] = data;
})();
