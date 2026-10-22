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
      "subtitle": "Official Validated Points & Weighted Scores across Health Programs",
      "category": "OFFICIAL EVALUATION SCORECARD",
      "categoryTag": "CITY CATEGORY",
      "programs": [
        { "name": "HEALTH GOVERNANCE", "weight": "30%", "tagum": { "pts": 120, "avg": "30.00%" }, "panabo": { "pts": 110, "avg": "27.50%" }, "igacos": { "pts": 80, "avg": "20.00%" } },
        { "name": "FAMILY HEALTH CARE", "weight": "20%", "tagum": { "pts": 230, "avg": "17.04%" }, "panabo": { "pts": 220, "avg": "16.30%" }, "igacos": { "pts": 180, "avg": "13.33%" } },
        { "name": "DISEASE PREVENTION AND CONTROL", "weight": "20%", "tagum": { "pts": 140, "avg": "15.56%" }, "panabo": { "pts": 170, "avg": "18.89%" }, "igacos": { "pts": 140, "avg": "15.56%" } },
        { "name": "ALLIED HEALTH SERVICES", "weight": "20%", "tagum": { "pts": 150, "avg": "20.00%" }, "panabo": { "pts": 140, "avg": "18.67%" }, "igacos": { "pts": 140, "avg": "18.67%" } },
        { "name": "ENVIRONMENTAL, OCCUPATIONAL HEALTH AND SANITATION", "weight": "10%", "tagum": { "pts": 50, "avg": "8.33%" }, "panabo": { "pts": 40, "avg": "6.67%" }, "igacos": { "pts": 40, "avg": "6.67%" } }
      ],
      "totals": {
        "tagum": { "pts": 690, "score": "90.93%", "rank": "1st Place", "badge": "🥇 Champion", "highlight": true },
        "panabo": { "pts": 680, "score": "88.03%", "rank": "2nd Place", "badge": "🥈 2nd Place", "highlight": false },
        "igacos": { "pts": 580, "score": "74.23%", "rank": "3rd Place", "badge": "🥉 3rd Place", "highlight": false }
      }
    },
    {
      "id": 2,
      "number": 2,
      "type": "scorecard",
      "title": "RESULTS FOR MUNICIPALITY CATEGORY",
      "subtitle": "Official Validated Points & Weighted Scores across All 8 Municipalities",
      "category": "OFFICIAL EVALUATION SCORECARD",
      "categoryTag": "MUNICIPALITY CATEGORY",
      "municipalityPrograms": [
        {
          "name": "HEALTH GOVERNANCE",
          "weight": "30%",
          "scores": {
            "newCorella": { "pts": 110, "avg": "27.50%" },
            "sawata": { "pts": 60, "avg": "15.00%" },
            "kapalong": { "pts": 80, "avg": "20.00%" },
            "asuncion": { "pts": 70, "avg": "17.50%" },
            "talaingod": { "pts": 70, "avg": "17.50%" },
            "beDujali": { "pts": 100, "avg": "25.00%" },
            "carmen": { "pts": 80, "avg": "20.00%" },
            "stoTomas": { "pts": 90, "avg": "22.50%" }
          }
        },
        {
          "name": "FAMILY HEALTH CARE",
          "weight": "20%",
          "scores": {
            "newCorella": { "pts": 210, "avg": "15.56%" },
            "sawata": { "pts": 160, "avg": "11.85%" },
            "kapalong": { "pts": 150, "avg": "11.11%" },
            "asuncion": { "pts": 170, "avg": "12.59%" },
            "talaingod": { "pts": 160, "avg": "11.85%" },
            "beDujali": { "pts": 200, "avg": "14.81%" },
            "carmen": { "pts": 160, "avg": "11.85%" },
            "stoTomas": { "pts": 180, "avg": "13.33%" }
          }
        },
        {
          "name": "DISEASE PREVENTION AND CONTROL",
          "weight": "20%",
          "scores": {
            "newCorella": { "pts": 150, "avg": "16.67%" },
            "sawata": { "pts": 80, "avg": "8.89%" },
            "kapalong": { "pts": 150, "avg": "16.67%" },
            "asuncion": { "pts": 90, "avg": "10.00%" },
            "talaingod": { "pts": 80, "avg": "8.89%" },
            "beDujali": { "pts": 150, "avg": "16.67%" },
            "carmen": { "pts": 110, "avg": "12.22%" },
            "stoTomas": { "pts": 120, "avg": "13.33%" }
          }
        },
        {
          "name": "ALLIED HEALTH SERVICES",
          "weight": "20%",
          "scores": {
            "newCorella": { "pts": 120, "avg": "16.00%" },
            "sawata": { "pts": 90, "avg": "12.00%" },
            "kapalong": { "pts": 120, "avg": "16.00%" },
            "asuncion": { "pts": 100, "avg": "13.33%" },
            "talaingod": { "pts": 120, "avg": "16.00%" },
            "beDujali": { "pts": 130, "avg": "17.33%" },
            "carmen": { "pts": 100, "avg": "13.33%" },
            "stoTomas": { "pts": 130, "avg": "17.33%" }
          }
        },
        {
          "name": "ENVIRONMENTAL, OCCUPATIONAL HEALTH & SANITATION",
          "weight": "10%",
          "scores": {
            "newCorella": { "pts": 40, "avg": "6.67%" },
            "sawata": { "pts": 20, "avg": "3.33%" },
            "kapalong": { "pts": 30, "avg": "5.00%" },
            "asuncion": { "pts": 30, "avg": "5.00%" },
            "talaingod": { "pts": 30, "avg": "5.00%" },
            "beDujali": { "pts": 40, "avg": "6.67%" },
            "carmen": { "pts": 40, "avg": "6.67%" },
            "stoTomas": { "pts": 60, "avg": "10.00%" }
          }
        }
      ],
      "municipalityTotals": [
        { "key": "newCorella", "name": "NEW CORELLA", "pts": 630, "score": "82.40%", "rank": "1st Place", "badge": "🥇 1st Place", "highlight": true, "rankClass": "rank-1" },
        { "key": "beDujali", "name": "B.E. DUJALI", "pts": 620, "score": "80.48%", "rank": "2nd Place", "badge": "🥈 2nd Place", "highlight": true, "rankClass": "rank-2" },
        { "key": "stoTomas", "name": "STO. TOMAS", "pts": 580, "score": "76.49%", "rank": "3rd Place", "badge": "🥉 3rd Place", "highlight": true, "rankClass": "rank-3" },
        { "key": "kapalong", "name": "KAPALONG", "pts": 530, "score": "68.78%", "rank": "4th Place", "badge": "4th Place", "highlight": false },
        { "key": "carmen", "name": "CARMEN", "pts": 490, "score": "64.07%", "rank": "5th Place", "badge": "5th Place", "highlight": false },
        { "key": "talaingod", "name": "TALAINGOD", "pts": 460, "score": "59.24%", "rank": "6th Place", "badge": "6th Place", "highlight": false },
        { "key": "asuncion", "name": "ASUNCION", "pts": 460, "score": "58.42%", "rank": "7th Place", "badge": "7th Place", "highlight": false },
        { "key": "sawata", "name": "SAWATA", "pts": 410, "score": "51.07%", "rank": "8th Place", "badge": "8th Place", "highlight": false }
      ]
    },
    {
      "id": 3,
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
