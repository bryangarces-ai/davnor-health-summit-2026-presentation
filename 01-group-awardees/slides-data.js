(function () {
  var data = [
  {
    "id": 0,
    "type": "title",
    "event": "PROGRAM HEALTH SUMMIT 2026",
    "subEvent": "Province of Davao del Norte",
    "title": "RECOGNITION OF SPECIAL AWARDS",
    "category": "GROUP AWARDEES",
    "citation": "Honoring our Outstanding Health Partners, Hospitals, Civic Organizations, and Provincial Offices"
  },
  {
    "id": 1,
    "number": 1,
    "type": "awardee",
    "title": "DEPARTMENT OF HEALTH DAVAO CENTER FOR HEALTH DEVELOPMENT",
    "subtitle": "Davao Center for Health Development",
    "category": "Regional Health Leadership"
  },
  {
    "id": 2,
    "number": 2,
    "type": "awardee",
    "title": "HEALTH SYSTEMS RESILIENCE PROJECT",
    "subtitle": "Davao Center for Health Development",
    "category": "Health Systems Program"
  },
  {
    "id": 3,
    "number": 3,
    "type": "awardee",
    "title": "DOH CHD XI",
    "subtitle": "Health Emergency Management Staff",
    "category": "Emergency Management Unit"
  },
  {
    "id": 4,
    "number": 4,
    "type": "awardee",
    "title": "PROVINCIAL DEPARTMENT OF HEALTH OFFICE",
    "subtitle": "Davao del Norte",
    "category": "Provincial Health Office"
  },
  {
    "id": 5,
    "number": 5,
    "type": "awardee",
    "title": "NATIONAL NUTRITION COUNCIL XI",
    "subtitle": "Retsebeth M. Laquihon, RND, MPD, MDM — Regional Nutrition Program Coordinator",
    "category": "Nutrition Program Partner"
  },
  {
    "id": 6,
    "number": 6,
    "type": "awardee",
    "title": "COMMISSION ON POPULATION AND DEVELOPMENT REGION XI",
    "subtitle": "Jeff Y. Fuentes, MHSS — Regional Director",
    "category": "Population Development Partner"
  },
  {
    "id": 7,
    "number": 7,
    "type": "awardee",
    "title": "DAVAO DEL NORTE HOSPITAL",
    "subtitle": "Kapalong Zone",
    "category": "Provincial Hospital Zone"
  },
  {
    "id": 8,
    "number": 8,
    "type": "awardee",
    "title": "DAVAO DEL NORTE HOSPITAL",
    "subtitle": "Carmen Zone",
    "category": "Provincial Hospital Zone"
  },
  {
    "id": 9,
    "number": 9,
    "type": "awardee",
    "title": "DAVAO DEL NORTE HOSPITAL",
    "subtitle": "Igacos Zone",
    "category": "Provincial Hospital Zone"
  },
  {
    "id": 10,
    "number": 10,
    "type": "awardee",
    "title": "DAVAO REGIONAL MEDICAL CENTER",
    "subtitle": "Tertiary Health Institution",
    "category": "Regional Medical Center"
  },
  {
    "id": 11,
    "number": 11,
    "type": "awardee",
    "title": "DAVAO REGIONAL MEDICAL CENTER",
    "subtitle": "Health Emergency and Disaster Management Unit",
    "category": "Specialized Medical Unit"
  },
  {
    "id": 12,
    "number": 12,
    "type": "awardee",
    "title": "DAVAO REGIONAL MEDICAL CENTER",
    "subtitle": "Surgery Department",
    "category": "Clinical Medical Department"
  },
  {
    "id": 13,
    "number": 13,
    "type": "awardee",
    "title": "DAVAO REGIONAL MEDICAL CENTER",
    "subtitle": "Internal Medicine Department",
    "category": "Clinical Medical Department"
  },
  {
    "id": 14,
    "number": 14,
    "type": "awardee",
    "title": "DAVAO REGIONAL MEDICAL CENTER",
    "subtitle": "OB-GYNE Department",
    "category": "Clinical Medical Department"
  },
  {
    "id": 15,
    "number": 15,
    "type": "awardee",
    "title": "PHILIPPINE DRUG ENFORCEMENT AGENCY XI",
    "subtitle": "Davao del Norte Provincial Office",
    "category": "Law Enforcement & Public Health Partner"
  },
  {
    "id": 16,
    "number": 16,
    "type": "awardee",
    "title": "BUREAU OF FIRE PROTECTION",
    "subtitle": "Office of the Provincial Fire Marshal Davao del Norte",
    "category": "Emergency & Safety Partner"
  },
  {
    "id": 17,
    "number": 17,
    "type": "awardee",
    "title": "REGIONAL MEDICAL AND DENTAL UNIT 11",
    "subtitle": "Davao del Norte Provincial Medical and Dental Team (PNP)",
    "category": "Police Medical & Dental Unit"
  },
  {
    "id": 18,
    "number": 18,
    "type": "awardee",
    "title": "PHILIPPINE RED CROSS",
    "subtitle": "Davao del Norte Chapter",
    "category": "Humanitarian & Blood Services Partner"
  },
  {
    "id": 19,
    "number": 19,
    "type": "awardee",
    "title": "DKT FOUNDATION, INC.",
    "subtitle": "Reproductive Health & Community Partner",
    "category": "Civil Society Partner"
  },
  {
    "id": 20,
    "number": 20,
    "type": "awardee",
    "title": "NORTH DAVAO DENTAL CHAPTER",
    "subtitle": "Professional Dental Healthcare Association",
    "category": "Professional Healthcare Association"
  },
  {
    "id": 21,
    "number": 21,
    "type": "awardee",
    "title": "THE ADVOCATES ON HIV AND AIDS SOCIETY",
    "subtitle": "Community Health Advocacy Organization",
    "category": "Community Health Partner"
  },
  {
    "id": 22,
    "number": 22,
    "type": "awardee",
    "title": "DANGEROUS DRUGS BOARD",
    "subtitle": "National Prevention & Policy Agency",
    "category": "Government Partner Agency"
  },
  {
    "id": 23,
    "number": 23,
    "type": "awardee",
    "title": "PHILIPPINE TUBERCULOSIS SOCIETY, INC.",
    "subtitle": "TB Prevention and Control Partner",
    "category": "Healthcare Advocacy Partner"
  },
  {
    "id": 24,
    "number": 24,
    "type": "awardee",
    "title": "FAMILY PLANNING ORGANIZATION OF THE PHILIPPINES",
    "subtitle": "Family Health & Reproductive Care",
    "category": "Family Planning Partner"
  },
  {
    "id": 25,
    "number": 25,
    "type": "awardee",
    "title": "ROTARY CLUB OF TAGUM NORTH",
    "subtitle": "Community Service & Healthcare Supporter",
    "category": "Civic Organization Partner"
  },
  {
    "id": 26,
    "number": 26,
    "type": "awardee",
    "title": "PHILHEALTH LOCAL HEALTH INSURANCE OFFICE",
    "subtitle": "Tagum City",
    "category": "Social Health Insurance Partner"
  },
  {
    "id": 27,
    "number": 27,
    "type": "awardee",
    "title": "DEPARTMENT OF EDUCATION",
    "subtitle": "Division of Davao del Norte",
    "category": "Education Division Partner"
  },
  {
    "id": 28,
    "number": 28,
    "type": "awardee",
    "title": "DEPARTMENT OF EDUCATION",
    "subtitle": "Division of Tagum City",
    "category": "Education Division Partner"
  },
  {
    "id": 29,
    "number": 29,
    "type": "awardee",
    "title": "DEPARTMENT OF EDUCATION",
    "subtitle": "Division of Panabo City",
    "category": "Education Division Partner"
  },
  {
    "id": 30,
    "number": 30,
    "type": "awardee",
    "title": "DEPARTMENT OF EDUCATION",
    "subtitle": "Division of Island Garden City of Samal",
    "category": "Education Division Partner"
  },
  {
    "id": 31,
    "number": 31,
    "type": "awardee",
    "title": "DEPARTMENT OF INTERIOR AND LOCAL GOVERNMENT",
    "subtitle": "Davao del Norte",
    "category": "Local Governance Partner"
  },
  {
    "id": 32,
    "number": 32,
    "type": "awardee",
    "title": "PHILIPPINE PEDIATRIC SOCIETY",
    "subtitle": "Davao Southern Mindanao Chapter",
    "category": "Medical Specialty Society"
  },
  {
    "id": 33,
    "number": 33,
    "type": "awardee",
    "title": "PROVINCIAL ECONOMIC ENTERPRISE & DEVELOPMENT OFFICE",
    "subtitle": "Provincial Government of Davao del Norte",
    "category": "Provincial Government Office"
  },
  {
    "id": 34,
    "number": 34,
    "type": "awardee",
    "title": "PROVINCIAL LEGAL OFFICE",
    "subtitle": "Provincial Government of Davao del Norte",
    "category": "Provincial Government Office"
  },
  {
    "id": 35,
    "number": 35,
    "type": "awardee",
    "title": "PROVINCIAL INFORMATION, COMMUNICATION, AND KNOWLEDGE MANAGEMENT OFFICE",
    "subtitle": "Provincial Government of Davao del Norte",
    "category": "Provincial Government Office"
  },
  {
    "id": 36,
    "number": 36,
    "type": "awardee",
    "title": "PROVINCIAL HUMAN RESOURCE & MANAGEMENT OFFICE",
    "subtitle": "Provincial Government of Davao del Norte",
    "category": "Provincial Government Office"
  },
  {
    "id": 37,
    "number": 37,
    "type": "awardee",
    "title": "PROVINCIAL BUDGET OFFICE",
    "subtitle": "Provincial Government of Davao del Norte",
    "category": "Provincial Government Office"
  },
  {
    "id": 38,
    "number": 38,
    "type": "awardee",
    "title": "PROVINCIAL TREASURER'S OFFICE",
    "subtitle": "Provincial Government of Davao del Norte",
    "category": "Provincial Government Office"
  },
  {
    "id": 39,
    "number": 39,
    "type": "awardee",
    "title": "PROVINCIAL ASSESSOR'S OFFICE",
    "subtitle": "Provincial Government of Davao del Norte",
    "category": "Provincial Government Office"
  },
  {
    "id": 40,
    "number": 40,
    "type": "awardee",
    "title": "PROVINCIAL PLANNING AND DEVELOPMENT OFFICE",
    "subtitle": "Provincial Government of Davao del Norte",
    "category": "Provincial Government Office"
  },
  {
    "id": 41,
    "number": 41,
    "type": "awardee",
    "title": "PROVINCIAL ENGINEERING OFFICE",
    "subtitle": "Provincial Government of Davao del Norte",
    "category": "Provincial Government Office"
  },
  {
    "id": 42,
    "number": 42,
    "type": "awardee",
    "title": "PROVINCIAL ACCOUNTING OFFICE",
    "subtitle": "Provincial Government of Davao del Norte",
    "category": "Provincial Government Office"
  },
  {
    "id": 43,
    "number": 43,
    "type": "awardee",
    "title": "PROVINCIAL SOCIAL WELFARE AND DEVELOPMENT OFFICE",
    "subtitle": "Provincial Government of Davao del Norte",
    "category": "Provincial Government Office"
  },
  {
    "id": 44,
    "number": 44,
    "type": "awardee",
    "title": "PROVINCIAL ENVIRONMENT & NATURAL RESOURCES OFFICE",
    "subtitle": "Provincial Government of Davao del Norte",
    "category": "Provincial Government Office"
  },
  {
    "id": 45,
    "number": 45,
    "type": "awardee",
    "title": "PROVINCIAL VETERINARIAN'S OFFICE",
    "subtitle": "Provincial Government of Davao del Norte",
    "category": "Provincial Government Office"
  },
  {
    "id": 46,
    "number": 46,
    "type": "awardee",
    "title": "OFFICE OF THE SECRETARY TO THE SANGGUNIAN",
    "subtitle": "Provincial Government of Davao del Norte",
    "category": "Provincial Government Office"
  },
  {
    "id": 47,
    "number": 47,
    "type": "awardee",
    "title": "PROVINCIAL SPORTS AND YOUTH DEVELOPMENT OFFICE",
    "subtitle": "Provincial Government of Davao del Norte",
    "category": "Provincial Government Office"
  },
  {
    "id": 48,
    "number": 48,
    "type": "awardee",
    "title": "PROVINCIAL DISASTER RISK REDUCTION AND MANAGEMENT OFFICE",
    "subtitle": "Provincial Government of Davao del Norte",
    "category": "Provincial Government Office"
  },
  {
    "id": 49,
    "number": 49,
    "type": "awardee",
    "title": "PROVINCIAL AGRICULTURIST'S OFFICE",
    "subtitle": "Provincial Government of Davao del Norte",
    "category": "Provincial Government Office"
  },
  {
    "id": 50,
    "number": 50,
    "type": "awardee",
    "title": "PROVINCIAL GENERAL SERVICES OFFICE",
    "subtitle": "Provincial Government of Davao del Norte",
    "category": "Provincial Government Office"
  },
  {
    "id": 51,
    "type": "closing",
    "title": "CONGRATULATIONS TO ALL AWARDEES",
    "subtitle": "PROGRAM HEALTH SUMMIT 2026",
    "citation": "Thank you for your tireless dedication, exemplary service, and enduring partnership in advancing public health for the Province of Davao del Norte."
  }
];
  window.SLIDES_DATA = data;
  window.DECKS_CATALOG = window.DECKS_CATALOG || {};
  window.DECKS_CATALOG['01-group'] = data;
})();
