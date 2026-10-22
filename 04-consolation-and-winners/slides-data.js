(function () {
  var data = [
  {
    "id": 0,
    "type": "title",
    "event": "PROGRAM HEALTH SUMMIT 2026",
    "title": "AWARDING CEREMONY",
    "category": "CONSOLATION & WINNERS",
    "citation": "Saluting the Outstanding Performance of LGUs, Municipalities, Cities, and Barangays in the Health Summit 2026 Indicators",
    "subEvent": "Province of Davao del Norte"
  },
  {
    "id": 1,
    "type": "section",
    "title": "AWARDING OF CONSOLATION BARANGAYS AND MUNICIPALITIES",
    "categories": [
      "BARANGAY CATEGORY",
      "MUNICIPALITY CATEGORY"
    ],
    "categoryTag": "AWARDING CEREMONY"
  },
  {
    "id": 2,
    "type": "awardee",
    "title": "BARANGAY LUNGA-OG",
    "number": 2,
    "category": "PERFORMING BARANGAY",
    "subtitle": "MUNICIPALITY OF STO. TOMAS",
    "categoryTag": "TOP PERFORMER"
  },
  {
    "id": 3,
    "type": "awardee",
    "title": "BARANGAY SALVACION",
    "number": 3,
    "category": "PERFORMING BARANGAY",
    "subtitle": "MUNICIPALITY OF STO. TOMAS",
    "categoryTag": "TOP PERFORMER"
  },
  {
    "id": 4,
    "type": "awardee",
    "title": "BARANGAY STA. FE",
    "number": 4,
    "category": "PERFORMING BARANGAY",
    "subtitle": "MUNICIPALITY OF NEW CORELLA",
    "categoryTag": "TOP PERFORMER"
  },
  {
    "id": 5,
    "type": "awardee",
    "title": "BARANGAY PATROCENIO",
    "number": 5,
    "category": "PERFORMING BARANGAY",
    "subtitle": "MUNICIPALITY OF NEW CORELLA",
    "categoryTag": "TOP PERFORMER"
  },
  {
    "id": 6,
    "type": "awardee",
    "title": "BARANGAY STA. CRUZ",
    "number": 6,
    "category": "PERFORMING BARANGAY",
    "subtitle": "MUNICIPALITY OF NEW CORELLA",
    "categoryTag": "TOP PERFORMER"
  },
  {
    "id": 7,
    "type": "awardee",
    "title": "BARANGAY ESPERANZA",
    "number": 7,
    "category": "PERFORMING BARANGAY",
    "subtitle": "MUNICIPALITY OF STO. TOMAS",
    "categoryTag": "TOP PERFORMER"
  },
  {
    "id": 8,
    "type": "awardee",
    "title": "BARANGAY KIOTOY",
    "number": 8,
    "category": "PERFORMING BARANGAY",
    "subtitle": "CITY OF PANABO",
    "categoryTag": "TOP PERFORMER"
  },
  {
    "id": 9,
    "type": "awardee",
    "title": "MUNICIPALITY OF SAWATA",
    "number": 9,
    "category": "PERFORMING MUNICIPALITY",
    "subtitle": "51.07% of the Health Summit 2026 Indicators | High Donation Rate of 1.17% with a total of 321 Blood Donations | Harmonized Health Awardee 2025",
    "categoryTag": "TOP PERFORMER"
  },
  {
    "id": 10,
    "type": "awardee",
    "title": "MUNICIPALITY OF ASUNCION",
    "number": 10,
    "category": "PERFORMING MUNICIPALITY",
    "subtitle": "58.42% of the Health Summit 2026 Indicators | Highest Donation Rate of 1.92% with a total of 1,212 Blood Donations",
    "categoryTag": "TOP PERFORMER"
  },
  {
    "id": 11,
    "type": "awardee",
    "title": "MUNICIPALITY OF TALAINGOD",
    "number": 11,
    "category": "PERFORMING MUNICIPALITY",
    "subtitle": "59.24% of the Health Summit 2026 Indicators | Donation Rate of 0.67% with a total of 193 Blood Donations | Harmonized Health Awardee 2025",
    "categoryTag": "TOP PERFORMER"
  },
  {
    "id": 12,
    "type": "awardee",
    "title": "MUNICIPALITY OF CARMEN",
    "number": 12,
    "category": "PERFORMING MUNICIPALITY",
    "subtitle": "64.07% of the Health Summit 2026 Indicators | TOP PERFORMING MUNICIPALITY IN THE OPERATIONS OF BARANGAY HEALTH WORKER (BHW) PROGRAM | TOP PERFORMING MUNICIPALITY IN FAMILY PLANNING PROGRAM | High Donation Rate of 1.30% with a total of 1,110 Blood Donations | Harmonized Health Awardee 2025",
    "categoryTag": "TOP PERFORMER"
  },
  {
    "id": 13,
    "type": "awardee",
    "title": "MUNICIPALITY OF KAPALONG",
    "number": 13,
    "category": "PERFORMING MUNICIPALITY",
    "subtitle": "68.78% of the Health Summit 2026 Indicators | TOP PERFORMING MUNICIPALITY IN NUTRITION PROGRAM | TOP PERFORMING MUNICIPALITY IN TB PREVENTION AND CONTROL PROGRAM | SPECIAL AWARD IN EPIDEMIOLOGY AND SURVEILLANCE SYSTEM PROGRAM | 3rd Highest Donation Rate of 1.55% with a total of 1,251 Blood Donation | Harmonized Health Awardee 2025",
    "categoryTag": "TOP PERFORMER"
  },
  {
    "id": 14,
    "type": "section",
    "title": "AWARDING OF TOP PERFORMING BARANGAYS, CITIES AND MUNICIPALITIES",
    "categories": [
      "TOP 3 PERFORMING BARANGAY",
      "TOP 3 PERFORMING CITIES",
      "TOP 3 PERFORMING MUNICIPALITIES"
    ],
    "categoryTag": "AWARDING CEREMONY"
  },
  {
    "id": 15,
    "type": "awardee",
    "title": "BARANGAY SAN MIGUEL MUNICIPALITY OF STO. TOMAS",
    "number": 15,
    "category": "3RD TOP PERFORMING BARANGAY",
    "subtitle": "3RD TOP PERFORMING BARANGAY",
    "categoryTag": "TOP PERFORMER"
  },
  {
    "id": 16,
    "type": "awardee",
    "title": "BARANGAY SAN JOSE MUNICIPALITY OF NEW CORELLA",
    "number": 16,
    "category": "2ND TOP PERFORMING BARANGAY",
    "subtitle": "2ND TOP PERFORMING BARANGAY",
    "categoryTag": "TOP PERFORMER"
  },
  {
    "id": 17,
    "type": "awardee",
    "title": "BARANGAY MONTE DUJALI",
    "number": 17,
    "category": "TOP PERFORMING BARANGAY",
    "subtitle": "MUNICIPALITY OF SAWATA",
    "categoryTag": "TOP PERFORMER"
  },
  {
    "id": 18,
    "type": "awardee",
    "title": "ISLAND GARDEN CITY OF SAMAL",
    "number": 18,
    "category": "3RD TOP PERFORMING CITY",
    "subtitle": "74.22% of the Health Summit 2026 Indicators",
    "categoryTag": "TOP PERFORMER"
  },
  {
    "id": 19,
    "type": "awardee",
    "title": "ISLAND GARDEN CITY OF SAMAL",
    "number": 19,
    "category": "3RD TOP PERFORMING CITY",
    "subtitle": "TOP PERFORMING CITY IN MALE REPRODUCTIVE HEALTH CARE PROGRAM | TOP PERFORMING CITY IN NUTRITION PROGRAM | TOP PERFORMING CITY IN TOBACCO PREVENTION AND CONTROL PROGRAM | TOP PERFORMING CITY IN MENTAL HEALTH PROGRAM | TOP PERFORMING CITY IN HEALTH EDUCATION AND PROMOTION PROGRAM | SPECIAL AWARD IN ENVIRONMENTAL, OCCUPATIONAL HEALTH AND SANITATION PROGRAM | 3rd Highest Donation Rate of 1.36% with a total of 1,632 Blood Donations | Harmonized Health Awardee 2025",
    "categoryTag": "TOP PERFORMER"
  },
  {
    "id": 20,
    "type": "awardee",
    "title": "CITY OF PANABO",
    "number": 20,
    "category": "2ND TOP PERFORMING CITY",
    "subtitle": "88.03% of the Health Summit 2026 Indicators",
    "categoryTag": "TOP PERFORMER"
  },
  {
    "id": 21,
    "type": "awardee",
    "title": "CITY OF PANABO",
    "number": 21,
    "category": "2ND TOP PERFORMING CITY",
    "subtitle": "TOP PERFORMING CITY IN DAVAO DEL NORTE HEALTH INFORMATION AND MANAGEMENT SYSTEM (DHIMS) | TOP PERFORMING CITY IN FAMILY PLANNING PROGRAM | TOP PERFORMING CITY IN RABIES PREVENTION AND CONTROL PROGRAM | TOP PERFORMING CITY IN NON COMMUNICABLE DISEASE (NCD) PREVENTION AND CONTROL PROGRAM | TOP PERFORMING CITY IN DISASTER RISK REDUCTION AND MANAGEMENT IN HEALTH (DRRM H) PROGRAM | TOP PERFORMING CITY IN ADOLESCENT HEALTH AND YOUTH DEVELOPMENT (AHYDP) PROGRAM | TOP PERFORMING CITY IN POPULATION MANAGEMENT SERVICES PROGRAM | SPECIAL AWARD IN WOMEN'S HEALTH CARE PROGRAM | 2nd Highest Donation Rate of 1.92% with a total of 4,060 Blood Donations | Harmonized Health Awardee 2025",
    "categoryTag": "TOP PERFORMER"
  },
  {
    "id": 22,
    "type": "awardee",
    "title": "CITY OF TAGUM",
    "number": 22,
    "category": "TOP PERFORMING CITY",
    "subtitle": "90.93% of the Health Summit 2026 Indicators",
    "categoryTag": "TOP PERFORMER"
  },
  {
    "id": 23,
    "type": "awardee",
    "title": "CITY OF TAGUM",
    "number": 23,
    "category": "TOP PERFORMING CITY",
    "subtitle": "TOP PERFORMING CITY IN LOCAL HEALTH BOARD AND INTER LOCAL HEALTH ZONE PROGRAM | TOP PERFORMING CITY IN THE OPERATIONS OF BARANGAY HEALTH WORKER (BHW) PROGRAM | TOP PERFORMING CITY IN THE DAVAO DEL NORTE ELECTRONIC HEALTH REFERRAL SYSTEM (DEHEARS) PROGRAM | TOP PERFORMING CITY IN THE EXCLUSIVE BREASTFEEDING PROGRAM | TOP PERFORMING CITY IN THE INTEGRATED MANAGEMENT OF CHILDHOOD ILLNESS (IMCI) PROGRAM | TOP PERFORMING CITY IN STI/HIV PREVENTION AND CONTROL PROGRAM | TOP PERFORMING CITY IN EPIDEMIOLOGY AND SURVEILLANCE SYSTEM PROGRAM | SPECIAL AWARD IN NATIONAL IMMUNIZATION PROGRAM | SPECIAL AWARD IN DENTAL HEALTH CARE PROGRAM | SPECIAL AWARD IN TB PREVENTION AND CONTROL PROGRAM | Highest Donation Rate of 2.96% with a total of 8,877 Blood Donations | Harmonized Health Awardee 2025",
    "categoryTag": "TOP PERFORMER"
  },
  {
    "id": 24,
    "type": "awardee",
    "title": "DR. ARNEL R. FLORENDO",
    "number": 24,
    "category": "TOP PERFORMING CITY HEALTH OFFICER",
    "subtitle": "City Health Officer of Tagum",
    "categoryTag": "TOP PERFORMER"
  },
  {
    "id": 25,
    "type": "awardee",
    "title": "MUNICIPALITY OF STO. TOMAS",
    "number": 25,
    "category": "3RD TOP PERFORMING MUNICIPALITY",
    "subtitle": "76.49% of the Health Summit 2026 Indicators | TOP PERFORMING MUNICIPALITY IN STI/HIV PREVENTION AND CONTROL PROGRAM | TOP PERFORMING MUNICIPALITY IN ADOLESCENT HEALTH AND YOUTH DEVELOPMENT (AHYDP) PROGRAM | TOP PERFORMING MUNICIPALITY IN ENVIRONMENTAL, OCCUPATIONAL HEALTH AND SANITATION PROGRAM | Donation Rate of 0.96% with a total of 1,257 Blood Donations | Harmonized Health Awardee 2025",
    "categoryTag": "TOP PERFORMER"
  },
  {
    "id": 26,
    "type": "awardee",
    "title": "MUNICIPALITY OF B.E. DUJALI",
    "number": 26,
    "category": "2ND TOP PERFORMING MUNICIPALITY",
    "subtitle": "80.48% of the Health Summit 2026 Indicators | TOP PERFORMING MUNICIPALITY IN MALE REPRODUCTIVE HEALTH CARE PROGRAM | TOP PERFORMING MUNICIPALITY IN POPULATION MANAGEMENT SERVICES PROGRAM | High Donation Rate of 1.04% with a total of 373 Blood Donations | Harmonized Health Awardee 2025",
    "categoryTag": "TOP PERFORMER"
  },
  {
    "id": 27,
    "type": "awardee",
    "title": "MUNICIPALITY OF NEW CORELLA",
    "number": 27,
    "category": "TOP PERFORMING MUNICIPALITY",
    "subtitle": "82.40% of the Health Summit 2026 Indicators",
    "categoryTag": "TOP PERFORMER"
  },
  {
    "id": 28,
    "type": "awardee",
    "title": "MUNICIPALITY OF NEW CORELLA",
    "number": 28,
    "category": "TOP PERFORMING MUNICIPALITY",
    "subtitle": "TOP PERFORMING MUNICIPALITY IN LOCAL HEALTH BOARD AND INTER LOCAL HEALTH ZONE PROGRAM | TOP PERFORMING MUNICIPALITY IN DAVAO DEL NORTE HEALTH INFORMATION AND MANAGEMENT SYSTEM (DHIMS) | TOP PERFORMING MUNICIPALITY IN THE EXCLUSIVE BREASTFEEDING PROGRAM | TOP PERFORMING MUNICIPALITY IN RABIES PREVENTION AND CONTROL PROGRAM | TOP PERFORMING MUNICIPALITY IN TOBACCO PREVENTION AND CONTROL PROGRAM | TOP PERFORMING MUNICIPALITY IN HEALTH EDUCATION AND PROMOTION PROGRAM | TOP PERFORMING MUNICIPALITY IN DISASTER RISK REDUCTION AND MANAGEMENT IN HEALTH (DRRM H) PROGRAM | SPECIAL AWARD IN INTEGRATED MANAGEMENT OF CHILDHOOD ILLNESS (IMCI) PROGRAM | SPECIAL AWARD IN WOMEN'S HEALTH CARE PROGRAM | SPECIAL AWARD IN NATIONAL IMMUNIZATION PROGRAM | 2nd Highest Donation Rate of 1.62% with a total of 980 Blood Donations | Harmonized Health Awardee 2025",
    "categoryTag": "TOP PERFORMER"
  },
  {
    "id": 29,
    "type": "awardee",
    "title": "DR. NANCY O. CACAYORIN",
    "number": 29,
    "category": "TOP PERFORMING MUNICIPAL HEALTH OFFICER",
    "subtitle": "Municipal Health Officer of Carmen",
    "categoryTag": "TOP PERFORMER"
  },
  {
    "id": 30,
    "type": "awardee",
    "title": "HEALTH SUMMIT 2026",
    "number": 30,
    "category": "TOP PERFORMER",
    "subtitle": "RESULTS",
    "categoryTag": "TOP PERFORMER"
  },
  {
    "id": 31,
    "type": "closing",
    "title": "CONGRATULATIONS TO ALL AWARDEES",
    "citation": "Thank you for your tireless dedication, exemplary service, and enduring partnership in advancing public health for the Province of Davao del Norte.",
    "subtitle": "CONSOLATION & WINNERS"
  }
];

  window.SLIDES_DATA = data;
  window.DECKS_CATALOG = window.DECKS_CATALOG || {};
  window.DECKS_CATALOG['04-consolation'] = data;
  window.DECKS_CATALOG['04-consolation-and-winners'] = data;
})();
