(function () {
  // Source: NUTRITION CONGRESS AWARDS.xlsx & Program Flow (2026 Provincial Nutrition Congress)
  var data = [
  {
    "id": 0,
    "type": "title",
    "event": "2026 PROVINCIAL NUTRITION CONGRESS",
    "subEvent": "Province of Davao del Norte \u00b7 Provincial Health Office",
    "title": "SPECIAL AWARDS \u2014 TINGUHA AWARDEES",
    "category": "TINGUHA AWARDEES",
    "citation": "Honoring LGUs achieving the lowest malnutrition prevalence and highest Operation Timbang Plus coverage"
  },
  {
    "id": 1,
    "type": "awardee",
    "title": "MUNICIPALITY OF NEW CORELLA",
    "category": "SPECIAL AWARD \u00b7 CY 2025",
    "subtitle": "Lowest Prevalence of Wasting in CY 2025",
    "department": "Prevalence Rate: 0.21%",
    "categoryTag": "TINGUHA AWARDEE"
  },
  {
    "id": 2,
    "type": "awardee",
    "title": "MUNICIPALITY OF CARMEN",
    "category": "SPECIAL AWARD \u00b7 CY 2025",
    "subtitle": "Lowest Prevalence of Stunting in CY 2025",
    "department": "Prevalence Rate: 1.44%",
    "categoryTag": "TINGUHA AWARDEE"
  },
  {
    "id": 3,
    "type": "awardee",
    "title": "MUNICIPALITY OF CARMEN",
    "category": "SPECIAL AWARD \u00b7 CY 2025",
    "subtitle": "Lowest Prevalence of Underweight in CY 2025",
    "department": "Prevalence Rate: 0.87%",
    "categoryTag": "TINGUHA AWARDEE"
  },
  {
    "id": 4,
    "type": "awardee",
    "title": "MUNICIPALITY OF BRAULIO E. DUJALI",
    "category": "SPECIAL AWARD \u00b7 CY 2025",
    "subtitle": "Lowest Prevalence of Overweight and Obesity in CY 2025",
    "department": "Prevalence Rate: 0.31%",
    "categoryTag": "TINGUHA AWARDEE"
  },
  {
    "id": 5,
    "type": "awardee",
    "title": "CITY OF TAGUM",
    "category": "SPECIAL AWARD \u00b7 CY 2025",
    "subtitle": "Highest Operation Timbang Plus (OPT) Coverage in CY 2025",
    "department": "OPT Coverage: 89.3%",
    "categoryTag": "TINGUHA AWARDEE"
  },
  {
    "id": 6,
    "type": "awardee",
    "title": "MUNICIPALITY OF ASUNCION",
    "category": "SPECIAL AWARD \u00b7 CY 2026",
    "subtitle": "Lowest Prevalence of Wasting in CY 2026",
    "department": "Prevalence Rate: 0.16%",
    "categoryTag": "TINGUHA AWARDEE"
  },
  {
    "id": 7,
    "type": "awardee",
    "title": "MUNICIPALITY OF KAPALONG",
    "category": "SPECIAL AWARD \u00b7 CY 2026",
    "subtitle": "Lowest Prevalence of Stunting in CY 2026",
    "department": "Prevalence Rate: 1.06%",
    "categoryTag": "TINGUHA AWARDEE"
  },
  {
    "id": 8,
    "type": "awardee",
    "title": "MUNICIPALITY OF ASUNCION",
    "category": "SPECIAL AWARD \u00b7 CY 2026",
    "subtitle": "Lowest Prevalence of Underweight in CY 2026",
    "department": "Prevalence Rate: 0.73%",
    "categoryTag": "TINGUHA AWARDEE"
  },
  {
    "id": 9,
    "type": "awardee",
    "title": "MUNICIPALITY OF KAPALONG",
    "category": "SPECIAL AWARD \u00b7 CY 2026",
    "subtitle": "Lowest Prevalence of Overweight and Obesity in CY 2026",
    "department": "Prevalence Rate: 0.49%",
    "categoryTag": "TINGUHA AWARDEE"
  },
  {
    "id": 10,
    "type": "awardee",
    "title": "MUNICIPALITY OF ASUNCION",
    "category": "SPECIAL AWARD \u00b7 CY 2026",
    "subtitle": "Highest Operation Timbang Plus (OPT) Coverage in CY 2026",
    "department": "OPT Coverage: 87.6%",
    "categoryTag": "TINGUHA AWARDEE"
  },
  {
    "id": 11,
    "type": "awardee",
    "title": "ANESIA F. BABOR",
    "category": "LEGACY OF LEADERSHIP IN NUTRITION AWARD",
    "subtitle": "Former Municipal Nutrition Program Coordinator \u00b7 Municipality of Carmen",
    "department": "Leadership Honoree",
    "categoryTag": "LEGACY OF LEADERSHIP"
  },
  {
    "id": 12,
    "type": "awardee",
    "title": "NELIA M. RODILLAS, RND",
    "category": "LEGACY OF LEADERSHIP IN NUTRITION AWARD",
    "subtitle": "Former City Nutrition Program Coordinator \u00b7 Island Garden City of Samal (IGACOS)",
    "department": "Leadership Honoree",
    "categoryTag": "LEGACY OF LEADERSHIP"
  },
  {
    "id": 13,
    "type": "awardee",
    "title": "DR. MA. SUSAN B. GANTUANGCO",
    "category": "LEGACY OF LEADERSHIP IN NUTRITION AWARD",
    "subtitle": "Former City Nutrition Program Coordinator \u00b7 City of Tagum",
    "department": "Leadership Honoree",
    "categoryTag": "LEGACY OF LEADERSHIP"
  },
  {
    "id": 14,
    "type": "awardee",
    "title": "MAYFLOR PERALTA-ESPIRITU, RND",
    "category": "PILLAR OF NUTRITION EDUCATION AWARD",
    "subtitle": "Nutrition Program Manager \u00b7 Department of Health - Davao Region (DOH-CHD XI)",
    "department": "Nutrition Education Pillar",
    "categoryTag": "PILLAR OF EDUCATION",
    "image": "../../shared/assets/speakers/MAYFLOR PERALTA.png"
  },
  {
    "id": 15,
    "type": "awardee",
    "title": "DR. CATHERINE A. LOZARITO",
    "category": "PILLAR OF NUTRITION EDUCATION AWARD",
    "subtitle": "Junior Consultant \u00b7 Medical Nutrition Department \u00b7 Davao Regional Medical Center",
    "department": "Nutrition Education Pillar",
    "categoryTag": "PILLAR OF EDUCATION"
  },
  {
    "id": 16,
    "type": "awardee",
    "title": "DR. STEPHANIE ALVA P. RISONAR",
    "category": "PILLAR OF NUTRITION EDUCATION AWARD",
    "subtitle": "Rural Health Physician \u00b7 Samal District",
    "department": "Nutrition Education Pillar",
    "categoryTag": "PILLAR OF EDUCATION"
  },
  {
    "id": 17,
    "type": "closing",
    "event": "2026 PROVINCIAL NUTRITION CONGRESS",
    "title": "CONGRATULATIONS TINGUHA AWARDEES & SPECIAL HONOREES!",
    "subTitle": "Excellence in Malnutrition Reduction, Leadership & Education",
    "citation": "Setting the benchmark for nutritional health and well-being throughout Davao del Norte."
  },
  {
    "id": 18,
    "type": "awardee",
    "title": "RAFFLES AND DOOR PRIZES",
    "category": "SPECIAL FELLOWSHIP",
    "subtitle": "Exciting Prizes for our Dedicated Nutrition Workers",
    "categoryTag": "LUCKY DRAW \u00b7 BATCH 3"
  }
];

  window.SLIDES_DATA = data;
  window.DECKS_CATALOG = window.DECKS_CATALOG || {};
  window.DECKS_CATALOG['nutrition-04-special-awards'] = data;
})();
