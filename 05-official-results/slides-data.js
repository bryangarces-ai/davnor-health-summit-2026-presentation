(function () {
  var data = [
    {
      "id": 0,
      "type": "title",
      "event": "PROGRAM HEALTH SUMMIT 2026",
      "subEvent": "Province of Davao del Norte",
      "title": "OFFICIAL EVALUATION RESULTS & SCORECARDS",
      "category": "CITY & MUNICIPALITY FINAL RANKINGS",
      "citation": "Official Performance Evaluation across Health Governance, Family Health, Disease Prevention, Allied Services, and Environmental Sanitation"
    },
    {
      "id": 1,
      "number": 1,
      "type": "scorecard",
      "title": "RESULTS FOR CITY CATEGORY",
      "subtitle": "Comprehensive Indicator Scoring across Component Health Programs",
      "category": "OFFICIAL EVALUATION SCORECARD",
      "categoryTag": "CITY CATEGORY",
      "image": "assets/city-category.png",
      "programs": [
        { "name": "HEALTH GOVERNANCE", "weight": "30%", "tagum": { "pts": 120, "avg": "30.00%" }, "panabo": { "pts": 110, "avg": "27.50%" }, "igacos": { "pts": 80, "avg": "20.00%" } },
        { "name": "FAMILY HEALTH CARE", "weight": "20%", "tagum": { "pts": 230, "avg": "17.04%" }, "panabo": { "pts": 220, "avg": "16.30%" }, "igacos": { "pts": 180, "avg": "13.33%" } },
        { "name": "DISEASE PREVENTION AND CONTROL", "weight": "20%", "tagum": { "pts": 140, "avg": "15.56%" }, "panabo": { "pts": 170, "avg": "18.89%" }, "igacos": { "pts": 140, "avg": "15.56%" } },
        { "name": "ALLIED HEALTH SERVICES", "weight": "20%", "tagum": { "pts": 150, "avg": "20.00%" }, "panabo": { "pts": 140, "avg": "18.67%" }, "igacos": { "pts": 140, "avg": "18.67%" } },
        { "name": "ENVIRONMENTAL, OCCUPATIONAL HEALTH AND SANITATION", "weight": "10%", "tagum": { "pts": 50, "avg": "8.33%" }, "panabo": { "pts": 40, "avg": "6.67%" }, "igacos": { "pts": 40, "avg": "6.67%" } }
      ],
      "totals": {
        "tagum": { "score": "90.93%", "rank": "1st Place", "badge": "🥇 Champion", "highlight": true },
        "panabo": { "score": "88.03%", "rank": "2nd Place", "badge": "🥈 2nd Place", "highlight": false },
        "igacos": { "score": "74.23%", "rank": "3rd Place", "badge": "🥉 3rd Place", "highlight": false }
      }
    },
    {
      "id": 2,
      "number": 2,
      "type": "scorecard",
      "title": "RESULTS FOR MUNICIPALITY CATEGORY",
      "subtitle": "Comprehensive Indicator Scoring across Component Health Programs",
      "category": "OFFICIAL EVALUATION SCORECARD",
      "categoryTag": "MUNICIPALITY CATEGORY",
      "image": "assets/municipality-category.png",
      "municipalityPrograms": [
        { "name": "HEALTH GOVERNANCE", "weight": "30%", "scores": { "newCorella": "27.50%", "sawata": "15.00%", "kapalong": "20.00%", "asuncion": "17.50%", "talaingod": "17.50%", "beDujali": "25.00%", "carmen": "20.00%", "stoTomas": "22.50%" } },
        { "name": "FAMILY HEALTH CARE", "weight": "20%", "scores": { "newCorella": "15.56%", "sawata": "11.85%", "kapalong": "11.11%", "asuncion": "12.59%", "talaingod": "11.85%", "beDujali": "14.81%", "carmen": "11.85%", "stoTomas": "13.33%" } },
        { "name": "DISEASE PREVENTION AND CONTROL", "weight": "20%", "scores": { "newCorella": "16.67%", "sawata": "8.89%", "kapalong": "16.67%", "asuncion": "10.00%", "talaingod": "8.89%", "beDujali": "16.67%", "carmen": "12.22%", "stoTomas": "13.33%" } },
        { "name": "ALLIED HEALTH SERVICES", "weight": "20%", "scores": { "newCorella": "16.00%", "sawata": "12.00%", "kapalong": "16.00%", "asuncion": "13.33%", "talaingod": "16.00%", "beDujali": "17.33%", "carmen": "13.33%", "stoTomas": "17.33%" } },
        { "name": "ENVIRONMENTAL, OCCUPATIONAL HEALTH & SANITATION", "weight": "10%", "scores": { "newCorella": "6.67%", "sawata": "3.33%", "kapalong": "5.00%", "asuncion": "5.00%", "talaingod": "5.00%", "beDujali": "6.67%", "carmen": "6.67%", "stoTomas": "10.00%" } }
      ],
      "municipalityTotals": [
        { "name": "NEW CORELLA", "score": "82.40%", "rank": "1st Place", "badge": "🥇 1st Place", "highlight": true },
        { "name": "B.E. DUJALI", "score": "80.48%", "rank": "2nd Place", "badge": "🥈 2nd Place", "highlight": true },
        { "name": "STO. TOMAS", "score": "76.49%", "rank": "3rd Place", "badge": "🥉 3rd Place", "highlight": true },
        { "name": "KAPALONG", "score": "68.78%", "rank": "4th Place", "badge": "4th Place", "highlight": false },
        { "name": "CARMEN", "score": "64.07%", "rank": "5th Place", "badge": "5th Place", "highlight": false },
        { "name": "TALAINGOD", "score": "59.24%", "rank": "6th Place", "badge": "6th Place", "highlight": false },
        { "name": "ASUNCION", "score": "58.42%", "rank": "7th Place", "badge": "7th Place", "highlight": false },
        { "name": "SAWATA", "score": "51.07%", "rank": "8th Place", "badge": "8th Place", "highlight": false }
      ]
    },
    {
      "id": 3,
      "number": 3,
      "type": "image",
      "title": "CITY CATEGORY OFFICIAL EVALUATION SHEET",
      "subtitle": "Official Validated Performance Breakdown Table",
      "category": "VALIDATED BOARD SHEET",
      "categoryTag": "OFFICIAL BOARD SHEET",
      "image": "assets/city-category.png"
    },
    {
      "id": 4,
      "number": 4,
      "type": "image",
      "title": "MUNICIPALITY CATEGORY OFFICIAL EVALUATION SHEET",
      "subtitle": "Official Validated Performance Breakdown Table",
      "category": "VALIDATED BOARD SHEET",
      "categoryTag": "OFFICIAL BOARD SHEET",
      "image": "assets/municipality-category.png"
    },
    {
      "id": 5,
      "type": "closing",
      "title": "CONGRATULATIONS TO ALL LOCAL HEALTH UNITS",
      "subtitle": "PROGRAM HEALTH SUMMIT 2026",
      "citation": "Saluting our Outstanding Municipalities and Cities for advancing primary healthcare, institutional governance, and quality health outcomes for all Dabaonons."
    }
  ];

  window.SLIDES_DATA = data;
  window.DECKS_CATALOG = window.DECKS_CATALOG || {};
  window.DECKS_CATALOG['05-results'] = data;
  window.DECKS_CATALOG['05-official-results'] = data;
})();
