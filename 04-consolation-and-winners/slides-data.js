(function () {
  var data = [
  {
    "id": 0,
    "type": "title",
    "event": "PROGRAM HEALTH SUMMIT 2026",
    "subEvent": "Province of Davao del Norte",
    "title": "AWARDING CEREMONY",
    "category": "CONSOLATION & WINNERS",
    "citation": "Saluting the Outstanding Performance of LGUs, Municipalities, Cities, and Barangays in the Health Summit 2026 Indicators"
  },
  {
    "id": 1,
    "type": "section",
    "title": "AWARDING OF CONSOLATION BARANGAYS AND MUNICIPALITIES",
    "categoryTag": "AWARDING CEREMONY",
    "categories": [
      "BARANGAY CATEGORY",
      "MUNICIPALITY CATEGORY"
    ]
  },
  {
    "id": 2,
    "number": 2,
    "type": "awardee",
    "title": "BARANGAY LUNGA-OG MUNICIPALITY OF STO. TOMAS",
    "subtitle": "PERFORMING BARANGAY",
    "category": "PERFORMING BARANGAY",
    "categoryTag": "TOP PERFORMER"
  },
  {
    "id": 3,
    "number": 3,
    "type": "awardee",
    "title": "BARANGAY SALVACION MUNICIPALITY OF STO. TOMAS",
    "subtitle": "PERFORMING BARANGAY",
    "category": "PERFORMING BARANGAY",
    "categoryTag": "TOP PERFORMER"
  },
  {
    "id": 4,
    "number": 4,
    "type": "awardee",
    "title": "BARANGAY STA. FE MUNICIPALITY OF NEW CORELLA",
    "subtitle": "PERFORMING BARANGAY",
    "category": "PERFORMING BARANGAY",
    "categoryTag": "TOP PERFORMER"
  },
  {
    "id": 5,
    "number": 5,
    "type": "awardee",
    "title": "BARANGAY PATROCENIO MUNICIPALITY OF NEW CORELLA",
    "subtitle": "PERFORMING BARANGAY",
    "category": "PERFORMING BARANGAY",
    "categoryTag": "TOP PERFORMER"
  },
  {
    "id": 6,
    "number": 6,
    "type": "awardee",
    "title": "BARANGAY STA. CRUZ MUNICIPALITY OF NEW CORELLA",
    "subtitle": "PERFORMING BARANGAY",
    "category": "PERFORMING BARANGAY",
    "categoryTag": "TOP PERFORMER"
  },
  {
    "id": 7,
    "number": 7,
    "type": "awardee",
    "title": "BARANGAY ESPERANZA MUNICIPALITY OF STO. TOMAS",
    "subtitle": "PERFORMING BARANGAY",
    "category": "PERFORMING BARANGAY",
    "categoryTag": "TOP PERFORMER"
  },
  {
    "id": 8,
    "number": 8,
    "type": "awardee",
    "title": "BARANGAY KIOTOY",
    "subtitle": "CITY OF PANABO",
    "category": "PERFORMING BARANGAY",
    "categoryTag": "TOP PERFORMER"
  },
  {
    "id": 9,
    "number": 9,
    "type": "awardee",
    "title": "MUNICIPALITY OF SAWATA",
    "subtitle": "51.07% of the Health Summit 2026 Indicators | High Donation Rate of 1.17% with a total of 321 Blood Donations | Harmonized Health Awardee 2025",
    "category": "PERFORMING MUNICIPALITY",
    "categoryTag": "TOP PERFORMER"
  },
  {
    "id": 10,
    "number": 10,
    "type": "awardee",
    "title": "MUNICIPALITY OF ASUNCION",
    "subtitle": "58.42% of the Health Summit 2026 Indicators | Highest Donation Rate of 1.92% with a total of 1,212 Blood Donations",
    "category": "PERFORMING MUNICIPALITY",
    "categoryTag": "TOP PERFORMER"
  },
  {
    "id": 11,
    "number": 11,
    "type": "awardee",
    "title": "MUNICIPALITY OF TALAINGOD",
    "subtitle": "59.24% of the Health Summit 2026 Indicators | Donation Rate of 0.67% with a total of 193 Blood Donations | Harmonized Health Awardee 2025",
    "category": "PERFORMING MUNICIPALITY",
    "categoryTag": "TOP PERFORMER"
  },
  {
    "id": 12,
    "number": 12,
    "type": "awardee",
    "title": "MUNICIPALITY OF CARMEN",
    "subtitle": "64.07% of the Health Summit 2026 Indicators | TOP PERFORMING MUNICIPALITY IN THE OPERATIONS OF BARANGAY HEALTH WORKER (BHW) PROGRAM | TOP PERFORMING MUNICIPALITY IN FAMILY PLANNING PROGRAM | High Donation Rate of 1.30% with a total of 1,110 Blood Donations | Harmonized Health Awardee 2025",
    "category": "PERFORMING MUNICIPALITY",
    "categoryTag": "TOP PERFORMER"
  },
  {
    "id": 13,
    "number": 13,
    "type": "awardee",
    "title": "MUNICIPALITY OF KAPALONG",
    "subtitle": "68.78% of the Health Summit 2026 Indicators | TOP PERFORMING MUNICIPALITY IN NUTRITION PROGRAM | TOP PERFORMING MUNICIPALITY IN TB PREVENTION AND CONTROL PROGRAM | SPECIAL AWARD IN EPIDEMIOLOGY AND SURVEILLANCE SYSTEM PROGRAM | 3rd Highest Donation Rate of 1.55% with a total of 1,251 Blood Donation | Harmonized Health Awardee 2025",
    "category": "PERFORMING MUNICIPALITY",
    "categoryTag": "TOP PERFORMER"
  },
  {
    "id": 14,
    "type": "section",
    "title": "AWARDING OF TOP PERFORMING BARANGAYS, CITIES AND MUNICIPALITIES",
    "categoryTag": "AWARDING CEREMONY",
    "categories": [
      "TOP 3 PERFORMING BARANGAY",
      "TOP 3 PERFORMING CITIES",
      "TOP 3 PERFORMING MUNICIPALITIES"
    ]
  },
  {
    "id": 15,
    "number": 15,
    "type": "awardee",
    "title": "BARANGAY SAN MIGUEL MUNICIPALITY OF STO. TOMAS",
    "subtitle": "3RD TOP PERFORMING BARANGAY",
    "category": "3RD TOP PERFORMING BARANGAY",
    "categoryTag": "TOP PERFORMER"
  },
  {
    "id": 16,
    "number": 16,
    "type": "awardee",
    "title": "BARANGAY SAN JOSE MUNICIPALITY OF NEW CORELLA",
    "subtitle": "2ND TOP PERFORMING BARANGAY",
    "category": "2ND TOP PERFORMING BARANGAY",
    "categoryTag": "TOP PERFORMER"
  },
  {
    "id": 17,
    "number": 17,
    "type": "awardee",
    "title": "BARANGAY MONTE DUJALI",
    "subtitle": "MUNICIPALITY OF SAWATA",
    "category": "TOP PERFORMING BARANGAY",
    "categoryTag": "TOP PERFORMER"
  },
  {
    "id": 18,
    "number": 18,
    "type": "awardee",
    "title": "ISLAND GARDEN CITY OF SAMAL",
    "subtitle": "74.22% of the Health Summit 2026 Indicators",
    "category": "3RD TOP PERFORMING CITY",
    "categoryTag": "TOP PERFORMER"
  },
  {
    "id": 19,
    "number": 19,
    "type": "awardee",
    "title": "ISLAND GARDEN CITY OF SAMAL",
    "subtitle": "TOP PERFORMING CITY IN MALE REPRODUCTIVE HEALTH CARE PROGRAM | TOP PERFORMING CITY IN NUTRITION PROGRAM | TOP PERFORMING CITY IN TOBACCO PREVENTION AND CONTROL PROGRAM | TOP PERFORMING CITY IN MENTAL HEALTH PROGRAM | TOP PERFORMING CITY IN HEALTH EDUCATION AND PROMOTION PROGRAM | SPECIAL AWARD IN ENVIRONMENTAL, OCCUPATIONAL HEALTH AND SANITATION PROGRAM | 3rd Highest Donation Rate of 1.36% with a total of 1,632 Blood Donations | Harmonized Health Awardee 2025",
    "category": "3RD TOP PERFORMING CITY",
    "categoryTag": "TOP PERFORMER"
  },
  {
    "id": 20,
    "number": 20,
    "type": "awardee",
    "title": "CITY OF PANABO",
    "subtitle": "88.03% of the Health Summit 2026 Indicators",
    "category": "2ND TOP PERFORMING CITY",
    "categoryTag": "TOP PERFORMER"
  },
  {
    "id": 21,
    "number": 21,
    "type": "awardee",
    "title": "CITY OF PANABO",
    "subtitle": "TOP PERFORMING CITY IN DAVAO DEL NORTE HEALTH INFORMATION AND MANAGEMENT SYSTEM (DHIMS) | TOP PERFORMING CITY IN FAMILY PLANNING PROGRAM | TOP PERFORMING CITY IN RABIES PREVENTION AND CONTROL PROGRAM | TOP PERFORMING CITY IN NON COMMUNICABLE DISEASE (NCD) PREVENTION AND CONTROL PROGRAM | TOP PERFORMING CITY IN DISASTER RISK REDUCTION AND MANAGEMENT IN HEALTH (DRRM H) PROGRAM | TOP PERFORMING CITY IN ADOLESCENT HEALTH AND YOUTH DEVELOPMENT (AHYDP) PROGRAM | TOP PERFORMING CITY IN POPULATION MANAGEMENT SERVICES PROGRAM | SPECIAL AWARD IN WOMEN'S HEALTH CARE PROGRAM | 2nd Highest Donation Rate of 1.92% with a total of 4,060 Blood Donations | Harmonized Health Awardee 2025",
    "category": "2ND TOP PERFORMING CITY",
    "categoryTag": "TOP PERFORMER"
  },
  {
    "id": 22,
    "number": 22,
    "type": "awardee",
    "title": "CITY OF TAGUM",
    "subtitle": "90.93% of the Health Summit 2026 Indicators",
    "category": "TOP PERFORMING CITY",
    "categoryTag": "TOP PERFORMER"
  },
  {
    "id": 23,
    "number": 23,
    "type": "awardee",
    "title": "CITY OF TAGUM",
    "subtitle": "TOP PERFORMING CITY IN LOCAL HEALTH BOARD AND INTER LOCAL HEALTH ZONE PROGRAM | TOP PERFORMING CITY IN THE OPERATIONS OF BARANGAY HEALTH WORKER (BHW) PROGRAM | TOP PERFORMING CITY IN THE DAVAO DEL NORTE ELECTRONIC HEALTH REFERRAL SYSTEM (DEHEARS) PROGRAM | TOP PERFORMING CITY IN THE EXCLUSIVE BREASTFEEDING PROGRAM | TOP PERFORMING CITY IN THE INTEGRATED MANAGEMENT OF CHILDHOOD ILLNESS (IMCI) PROGRAM | TOP PERFORMING CITY IN STI/HIV PREVENTION AND CONTROL PROGRAM | TOP PERFORMING CITY IN EPIDEMIOLOGY AND SURVEILLANCE SYSTEM PROGRAM | SPECIAL AWARD IN NATIONAL IMMUNIZATION PROGRAM | SPECIAL AWARD IN DENTAL HEALTH CARE PROGRAM | SPECIAL AWARD IN TB PREVENTION AND CONTROL PROGRAM | Highest Donation Rate of 2.96% with a total of 8,877 Blood Donations | Harmonized Health Awardee 2025",
    "category": "TOP PERFORMING CITY",
    "categoryTag": "TOP PERFORMER"
  },
  {
    "id": 24,
    "number": 24,
    "type": "awardee",
    "title": "DR. ARNEL R. FLORENDO",
    "subtitle": "City Health Officer of Tagum",
    "category": "TOP PERFORMING CITY HEALTH OFFICER",
    "categoryTag": "TOP PERFORMER"
  },
  {
    "id": 25,
    "number": 25,
    "type": "awardee",
    "title": "MUNICIPALITY OF STO. TOMAS",
    "subtitle": "76.49% of the Health Summit 2026 Indicators | TOP PERFORMING MUNICIPALITY IN STI/HIV PREVENTION AND CONTROL PROGRAM | TOP PERFORMING MUNICIPALITY IN ADOLESCENT HEALTH AND YOUTH DEVELOPMENT (AHYDP) PROGRAM | TOP PERFORMING MUNICIPALITY IN ENVIRONMENTAL, OCCUPATIONAL HEALTH AND SANITATION PROGRAM | Donation Rate of 0.96% with a total of 1,257 Blood Donations | Harmonized Health Awardee 2025",
    "category": "3RD TOP PERFORMING MUNICIPALITY",
    "categoryTag": "TOP PERFORMER"
  },
  {
    "id": 26,
    "number": 26,
    "type": "awardee",
    "title": "MUNICIPALITY OF B.E. DUJALI",
    "subtitle": "80.48% of the Health Summit 2026 Indicators | TOP PERFORMING MUNICIPALITY IN MALE REPRODUCTIVE HEALTH CARE PROGRAM | TOP PERFORMING MUNICIPALITY IN POPULATION MANAGEMENT SERVICES PROGRAM | High Donation Rate of 1.04% with a total of 373 Blood Donations | Harmonized Health Awardee 2025",
    "category": "2ND TOP PERFORMING MUNICIPALITY",
    "categoryTag": "TOP PERFORMER"
  },
  {
    "id": 27,
    "number": 27,
    "type": "awardee",
    "title": "MUNICIPALITY OF NEW CORELLA",
    "subtitle": "82.40% of the Health Summit 2026 Indicators",
    "category": "TOP PERFORMING MUNICIPALITY",
    "categoryTag": "TOP PERFORMER"
  },
  {
    "id": 28,
    "number": 28,
    "type": "awardee",
    "title": "MUNICIPALITY OF NEW CORELLA",
    "subtitle": "TOP PERFORMING MUNICIPALITY IN LOCAL HEALTH BOARD AND INTER LOCAL HEALTH ZONE PROGRAM | TOP PERFORMING MUNICIPALITY IN DAVAO DEL NORTE HEALTH INFORMATION AND MANAGEMENT SYSTEM (DHIMS) | TOP PERFORMING MUNICIPALITY IN THE EXCLUSIVE BREASTFEEDING PROGRAM | TOP PERFORMING MUNICIPALITY IN RABIES PREVENTION AND CONTROL PROGRAM | TOP PERFORMING MUNICIPALITY IN TOBACCO PREVENTION AND CONTROL PROGRAM | TOP PERFORMING MUNICIPALITY IN HEALTH EDUCATION AND PROMOTION PROGRAM | TOP PERFORMING MUNICIPALITY IN DISASTER RISK REDUCTION AND MANAGEMENT IN HEALTH (DRRM H) PROGRAM | SPECIAL AWARD IN INTEGRATED MANAGEMENT OF CHILDHOOD ILLNESS (IMCI) PROGRAM | SPECIAL AWARD IN WOMEN'S HEALTH CARE PROGRAM | SPECIAL AWARD IN NATIONAL IMMUNIZATION PROGRAM | 2nd Highest Donation Rate of 1.62% with a total of 980 Blood Donations | Harmonized Health Awardee 2025",
    "category": "TOP PERFORMING MUNICIPALITY",
    "categoryTag": "TOP PERFORMER"
  },
  {
    "id": 29,
    "number": 29,
    "type": "awardee",
    "title": "DR. NANCY O. CACAYORIN",
    "subtitle": "Municipal Health Officer of Carmen",
    "category": "TOP PERFORMING MUNICIPAL HEALTH OFFICER",
    "categoryTag": "TOP PERFORMER"
  },
  {
    "id": 30,
    "number": 30,
    "type": "awardee",
    "title": "HEALTH SUMMIT 2026",
    "subtitle": "RESULTS",
    "category": "TOP PERFORMER",
    "categoryTag": "TOP PERFORMER"
  },
  {
    "id": 31,
    "type": "closing",
    "title": "CONGRATULATIONS TO ALL AWARDEES",
    "subtitle": "CONSOLATION & WINNERS",
    "citation": "Thank you for your tireless dedication, exemplary service, and enduring partnership in advancing public health for the Province of Davao del Norte."
  }
];
  window.SLIDES_DATA = data;
  window.DECKS_CATALOG = window.DECKS_CATALOG || {};
  window.DECKS_CATALOG['04-consolation'] = data;
})();
