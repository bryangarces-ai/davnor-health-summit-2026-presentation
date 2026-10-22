(function () {
  var data = [
  {
    "id": 0,
    "type": "title",
    "event": "PROGRAM HEALTH SUMMIT 2026",
    "title": "RECOGNITION OF SPECIAL AWARDS",
    "category": "GROUP AWARDEES",
    "citation": "Honoring our Outstanding Health Partners, Hospitals, Civic Organizations, and Provincial Offices",
    "subEvent": "Province of Davao del Norte"
  },
  {
    "id": 1,
    "type": "awardee",
    "title": "DEPARTMENT OF HEALTH DAVAO CENTER FOR HEALTH DEVELOPMENT",
    "number": 1,
    "category": "Regional Health Leadership",
    "subtitle": "Davao Center for Health Development"
  },
  {
    "id": 2,
    "type": "awardee",
    "title": "HEALTH SYSTEMS RESILIENCE PROJECT",
    "number": 2,
    "category": "Health Systems Program",
    "subtitle": "Davao Center for Health Development"
  },
  {
    "id": 3,
    "type": "awardee",
    "title": "DOH CHD XI",
    "number": 3,
    "category": "Emergency Management Unit",
    "subtitle": "Health Emergency Management Staff"
  },
  {
    "id": 4,
    "type": "awardee",
    "title": "PROVINCIAL DEPARTMENT OF HEALTH OFFICE",
    "number": 4,
    "category": "Provincial Health Office",
    "subtitle": "Davao del Norte"
  },
  {
    "id": 5,
    "type": "awardee",
    "title": "NATIONAL NUTRITION COUNCIL XI",
    "number": 5,
    "category": "Nutrition Program Partner",
    "subtitle": "Retsebeth M. Laquihon, RND, MPD, MDM — Regional Nutrition Program Coordinator"
  },
  {
    "id": 6,
    "type": "awardee",
    "title": "COMMISSION ON POPULATION AND DEVELOPMENT REGION XI",
    "number": 6,
    "category": "Population Development Partner",
    "subtitle": "Jeff Y. Fuentes, MHSS — Regional Director"
  },
  {
    "id": 7,
    "type": "awardee",
    "title": "DAVAO DEL NORTE HOSPITAL KAPALONG ZONE",
    "number": 7,
    "category": "Provincial Hospital Zone",
    "subtitle": "",
    "categoryTag": ""
  },
  {
    "id": 8,
    "type": "awardee",
    "title": "DAVAO DEL NORTE HOSPITAL CARMEN ZONE",
    "number": 8,
    "category": "Provincial Hospital Zone",
    "subtitle": "",
    "categoryTag": ""
  },
  {
    "id": 9,
    "type": "awardee",
    "title": "DAVAO DEL NORTE HOSPITAL IGACOS ZONE",
    "number": 9,
    "category": "Provincial Hospital Zone",
    "subtitle": "",
    "categoryTag": ""
  },
  {
    "id": 10,
    "type": "awardee",
    "title": "DAVAO REGIONAL MEDICAL CENTER (DRMC)",
    "number": 10,
    "category": "Regional Medical Center",
    "subtitle": "",
    "categoryTag": ""
  },
  {
    "id": 11,
    "type": "awardee",
    "title": "DAVAO REGIONAL MEDICAL CENTER (DRMC)",
    "number": 11,
    "category": "Specialized Medical Unit",
    "subtitle": "Health Emergency and Disaster Management Unit",
    "categoryTag": ""
  },
  {
    "id": 12,
    "type": "awardee",
    "title": "DAVAO REGIONAL MEDICAL CENTER",
    "number": 12,
    "category": "Clinical Medical Department",
    "subtitle": "Surgery Department"
  },
  {
    "id": 13,
    "type": "awardee",
    "title": "DAVAO REGIONAL MEDICAL CENTER",
    "number": 13,
    "category": "Clinical Medical Department",
    "subtitle": "Internal Medicine Department"
  },
  {
    "id": 14,
    "type": "awardee",
    "title": "DAVAO REGIONAL MEDICAL CENTER",
    "number": 14,
    "category": "Clinical Medical Department",
    "subtitle": "OB-GYNE Department"
  },
  {
    "id": 15,
    "type": "awardee",
    "title": "PHILIPPINE DRUG ENFORCEMENT AGENCY XI",
    "number": 15,
    "category": "Law Enforcement & Public Health Partner",
    "subtitle": "Davao del Norte Provincial Office"
  },
  {
    "id": 16,
    "type": "awardee",
    "title": "BUREAU OF FIRE PROTECTION",
    "number": 16,
    "category": "Emergency & Safety Partner",
    "subtitle": "Office of the Provincial Fire Marshal Davao del Norte"
  },
  {
    "id": 17,
    "type": "awardee",
    "title": "REGIONAL MEDICAL AND DENTAL UNIT 11",
    "number": 17,
    "category": "Police Medical & Dental Unit",
    "subtitle": "Davao del Norte Provincial Medical and Dental Team (PNP)"
  },
  {
    "id": 18,
    "type": "awardee",
    "title": "PHILIPPINE RED CROSS",
    "number": 18,
    "category": "Humanitarian & Blood Services Partner",
    "subtitle": "Davao del Norte Chapter"
  },
  {
    "id": 19,
    "type": "awardee",
    "title": "DKT FOUNDATION, INC.",
    "number": 19,
    "category": "Civil Society Partner",
    "subtitle": "",
    "categoryTag": ""
  },
  {
    "id": 20,
    "type": "awardee",
    "title": "NORTH DAVAO DENTAL CHAPTER",
    "number": 20,
    "category": "Professional Healthcare Association",
    "subtitle": "",
    "categoryTag": ""
  },
  {
    "id": 21,
    "type": "awardee",
    "title": "THE ADVOCATES ON HIV AND AIDS SOCIETY",
    "number": 21,
    "category": "Community Health Partner",
    "subtitle": "",
    "categoryTag": ""
  },
  {
    "id": 22,
    "type": "awardee",
    "title": "DANGEROUS DRUGS BOARD",
    "number": 22,
    "category": "Government Partner Agency",
    "subtitle": "",
    "categoryTag": ""
  },
  {
    "id": 23,
    "type": "awardee",
    "title": "PHILIPPINE TUBERCULOSIS SOCIETY, INC.",
    "number": 23,
    "category": "Healthcare Advocacy Partner",
    "subtitle": "",
    "categoryTag": ""
  },
  {
    "id": 24,
    "type": "awardee",
    "title": "FAMILY PLANNING ORGANIZATION OF THE PHILIPPINES",
    "number": 24,
    "category": "Family Planning Partner",
    "subtitle": "",
    "categoryTag": ""
  },
  {
    "id": 25,
    "type": "awardee",
    "title": "ROTARY CLUB OF TAGUM NORTH",
    "number": 25,
    "category": "Civic Organization Partner",
    "subtitle": "",
    "categoryTag": ""
  },
  {
    "id": 26,
    "type": "awardee",
    "title": "PHILHEALTH LOCAL HEALTH INSURANCE OFFICE",
    "number": 26,
    "category": "Social Health Insurance Partner",
    "subtitle": "Tagum City"
  },
  {
    "id": 27,
    "type": "awardee",
    "title": "DEPARTMENT OF EDUCATION",
    "number": 27,
    "category": "Education Division Partner",
    "subtitle": "Division of Davao del Norte"
  },
  {
    "id": 28,
    "type": "awardee",
    "title": "DEPARTMENT OF EDUCATION",
    "number": 28,
    "category": "Education Division Partner",
    "subtitle": "Division of Tagum City"
  },
  {
    "id": 29,
    "type": "awardee",
    "title": "DEPARTMENT OF EDUCATION",
    "number": 29,
    "category": "Education Division Partner",
    "subtitle": "Division of Panabo City"
  },
  {
    "id": 30,
    "type": "awardee",
    "title": "DEPARTMENT OF EDUCATION",
    "number": 30,
    "category": "Education Division Partner",
    "subtitle": "Division of Island Garden City of Samal"
  },
  {
    "id": 31,
    "type": "awardee",
    "title": "DEPARTMENT OF INTERIOR AND LOCAL GOVERNMENT",
    "number": 31,
    "category": "Local Governance Partner",
    "subtitle": "Davao del Norte"
  },
  {
    "id": 32,
    "type": "awardee",
    "title": "PHILIPPINE PEDIATRIC SOCIETY",
    "number": 32,
    "category": "Medical Specialty Society",
    "subtitle": "Davao Southern Mindanao Chapter"
  },
  {
    "id": 33,
    "type": "awardee",
    "title": "PROVINCIAL ECONOMIC ENTERPRISE & DEVELOPMENT OFFICE",
    "number": 33,
    "category": "Provincial Government Office",
    "subtitle": "Provincial Government of Davao del Norte"
  },
  {
    "id": 34,
    "type": "awardee",
    "title": "PROVINCIAL LEGAL OFFICE",
    "number": 34,
    "category": "Provincial Government Office",
    "subtitle": "Provincial Government of Davao del Norte"
  },
  {
    "id": 35,
    "type": "awardee",
    "title": "PROVINCIAL INFORMATION, COMMUNICATION, AND KNOWLEDGE MANAGEMENT OFFICE",
    "number": 35,
    "category": "Provincial Government Office",
    "subtitle": "Provincial Government of Davao del Norte"
  },
  {
    "id": 36,
    "type": "awardee",
    "title": "PROVINCIAL HUMAN RESOURCE & MANAGEMENT OFFICE",
    "number": 36,
    "category": "Provincial Government Office",
    "subtitle": "Provincial Government of Davao del Norte"
  },
  {
    "id": 37,
    "type": "awardee",
    "title": "PROVINCIAL BUDGET OFFICE",
    "number": 37,
    "category": "Provincial Government Office",
    "subtitle": "Provincial Government of Davao del Norte"
  },
  {
    "id": 38,
    "type": "awardee",
    "title": "PROVINCIAL TREASURER'S OFFICE",
    "number": 38,
    "category": "Provincial Government Office",
    "subtitle": "Provincial Government of Davao del Norte"
  },
  {
    "id": 39,
    "type": "awardee",
    "title": "PROVINCIAL ASSESSOR'S OFFICE",
    "number": 39,
    "category": "Provincial Government Office",
    "subtitle": "Provincial Government of Davao del Norte"
  },
  {
    "id": 40,
    "type": "awardee",
    "title": "PROVINCIAL PLANNING AND DEVELOPMENT OFFICE",
    "number": 40,
    "category": "Provincial Government Office",
    "subtitle": "Provincial Government of Davao del Norte"
  },
  {
    "id": 41,
    "type": "awardee",
    "title": "PROVINCIAL ENGINEERING OFFICE",
    "number": 41,
    "category": "Provincial Government Office",
    "subtitle": "Provincial Government of Davao del Norte"
  },
  {
    "id": 42,
    "type": "awardee",
    "title": "PROVINCIAL ACCOUNTING OFFICE",
    "number": 42,
    "category": "Provincial Government Office",
    "subtitle": "Provincial Government of Davao del Norte"
  },
  {
    "id": 43,
    "type": "awardee",
    "title": "PROVINCIAL SOCIAL WELFARE AND DEVELOPMENT OFFICE",
    "number": 43,
    "category": "Provincial Government Office",
    "subtitle": "Provincial Government of Davao del Norte"
  },
  {
    "id": 44,
    "type": "awardee",
    "title": "PROVINCIAL ENVIRONMENT & NATURAL RESOURCES OFFICE",
    "number": 44,
    "category": "Provincial Government Office",
    "subtitle": "Provincial Government of Davao del Norte"
  },
  {
    "id": 45,
    "type": "awardee",
    "title": "PROVINCIAL VETERINARIAN'S OFFICE",
    "number": 45,
    "category": "Provincial Government Office",
    "subtitle": "Provincial Government of Davao del Norte"
  },
  {
    "id": 46,
    "type": "awardee",
    "title": "OFFICE OF THE SECRETARY TO THE SANGGUNIAN",
    "number": 46,
    "category": "Provincial Government Office",
    "subtitle": "Provincial Government of Davao del Norte"
  },
  {
    "id": 47,
    "type": "awardee",
    "title": "PROVINCIAL SPORTS AND YOUTH DEVELOPMENT OFFICE",
    "number": 47,
    "category": "Provincial Government Office",
    "subtitle": "Provincial Government of Davao del Norte"
  },
  {
    "id": 48,
    "type": "awardee",
    "title": "PROVINCIAL DISASTER RISK REDUCTION AND MANAGEMENT OFFICE",
    "number": 48,
    "category": "Provincial Government Office",
    "subtitle": "Provincial Government of Davao del Norte"
  },
  {
    "id": 49,
    "type": "awardee",
    "title": "PROVINCIAL AGRICULTURIST'S OFFICE",
    "number": 49,
    "category": "Provincial Government Office",
    "subtitle": "Provincial Government of Davao del Norte"
  },
  {
    "id": 50,
    "type": "awardee",
    "title": "PROVINCIAL GENERAL SERVICES OFFICE",
    "number": 50,
    "category": "Provincial Government Office",
    "subtitle": "Provincial Government of Davao del Norte"
  },
  {
    "id": 51,
    "type": "closing",
    "title": "CONGRATULATIONS TO ALL AWARDEES",
    "category": "",
    "citation": "Thank you for your tireless dedication, exemplary service, and enduring partnership in advancing public health for the Province of Davao del Norte.",
    "subtitle": "HEALTH SUMMIT 2026",
    "categoryTag": ""
  }
];

  window.SLIDES_DATA = data;
  window.DECKS_CATALOG = window.DECKS_CATALOG || {};
  window.DECKS_CATALOG['01-group'] = data;
  window.DECKS_CATALOG['01-group-awardees'] = data;
})();
