import os
import json

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

DECKS_CONFIG = [
    # ----------------------------------------------------
    # DECK 0: PROGRAM FLOW
    # ----------------------------------------------------
    {
        "folder": "00-program-flow",
        "key": "nutrition-00-program-flow",
        "title": "Program & Opening Ceremonies",
        "category": "PROGRAM FLOW",
        "subTitle": "2026 Provincial Nutrition Congress and Awarding Ceremony Program Flow",
        "slides": [
            {
                "id": 0,
                "type": "title",
                "event": "2026 PROVINCIAL NUTRITION CONGRESS",
                "subEvent": "Province of Davao del Norte · Provincial Health Office",
                "title": "AND AWARDING CEREMONY",
                "category": "PROGRAM FLOW",
                "citation": "“Himsog nga Katawhan, Himsog nga Kinaiyahan: Panaghiusa Alang sa Malungtarong Nutrisyon”\nNovember 20, 2026 · DavNor Gymnasium, DNSTC, Mankilam, Tagum City"
            },
            {
                "id": 1,
                "type": "awardee",
                "title": "PRAYER",
                "category": "ORDER OF CEREMONY",
                "subtitle": "SOTERIA CHORALE",
                "categoryTag": "PART I · 8:00 AM"
            },
            {
                "id": 2,
                "type": "awardee",
                "title": "PHILIPPINE NATIONAL ANTHEM",
                "category": "ORDER OF CEREMONY",
                "subtitle": "SOTERIA CHORALE",
                "categoryTag": "PART I · 8:00 AM"
            },
            {
                "id": 3,
                "type": "awardee",
                "title": "SUNSHINE ANGELIE S. BANTILAN, RND",
                "category": "INTRODUCTION OF THE PARTICIPANTS",
                "subtitle": "Acting Provincial Nutrition Program Coordinator",
                "department": "Provincial Health Office · Province of Davao del Norte",
                "categoryTag": "PART I · 8:00 AM",
                "image": "../../shared/assets/speakers/sunshine angelie bantilan.png"
            },
            {
                "id": 4,
                "type": "awardee",
                "title": "ALFREDO A. LACERONA, MD",
                "category": "WELCOME ADDRESS",
                "subtitle": "Provincial Health Officer II / PNAO",
                "department": "Provincial Health Office · Province of Davao del Norte",
                "categoryTag": "PART I · 8:00 AM",
                "image": "../../shared/assets/speakers/ALFREDO A. LACERONA.png"
            },
            {
                "id": 5,
                "type": "awardee",
                "title": "INTERMISSION NUMBER",
                "category": "PERFORMANCE",
                "subtitle": "GANDINGAN CULTURAL AND KULINTANG ENSEMBLE",
                "categoryTag": "INTERMISSION NUMBER"
            },
            {
                "id": 6,
                "type": "awardee",
                "title": "HON. EDWIN I. JUBAHIB, MMPA",
                "category": "KEYNOTE ADDRESS",
                "subtitle": "Provincial Governor · Province of Davao del Norte",
                "department": "Province of Davao del Norte",
                "categoryTag": "KEYNOTE SPEAKER",
                "image": "../../shared/assets/speakers/edwin jubahib.png"
            },
            {
                "id": 7,
                "type": "awardee",
                "title": "RETSEBETH M. LAQUIHON, RND, MPD, MDM",
                "category": "KEYNOTE PRESENTATION",
                "subtitle": "Strengthening Local Nutrition Governance: Key Updates, Strategic Directions and Implementation Priorities",
                "department": "Regional Nutrition Program Coordinator · National Nutrition Council XI",
                "categoryTag": "STRATEGIC DIRECTIONS",
                "image": "../../shared/assets/speakers/RETSEBETH M LAQUIHON.jpg"
            },
            {
                "id": 8,
                "type": "awardee",
                "title": "INTERMISSION DANCE NUMBER",
                "category": "PERFORMANCE",
                "subtitle": "ST. MARY'S COLLEGE",
                "categoryTag": "INTERMISSION NUMBER"
            },
            {
                "id": 9,
                "type": "awardee",
                "title": "MAYFLOR PERALTA-ESPIRITU, RND",
                "category": "TECHNICAL SESSION",
                "subtitle": "Empowering Communities Through Sustainable Nutrition Interventions",
                "department": "DOH-XI Nutrition Program Manager · Nutritionist Dietitian IV",
                "categoryTag": "KEYNOTE PRESENTATION",
                "image": "../../shared/assets/speakers/MAYFLOR PERALTA.png"
            },
            {
                "id": 10,
                "type": "awardee",
                "title": "INTERMISSION DANCE NUMBER",
                "category": "PERFORMANCE",
                "subtitle": "ST. MARY'S COLLEGE",
                "categoryTag": "INTERMISSION NUMBER"
            },
            {
                "id": 11,
                "type": "awardee",
                "title": "LGU BEST PRACTICES",
                "category": "AUDIO-VISUAL PRESENTATION",
                "subtitle": "Inspiring Stories & Milestones of Davao del Norte LGUs",
                "categoryTag": "AVP SHOWCASE"
            },
            {
                "id": 12,
                "type": "awardee",
                "title": "INTERMISSION NUMBER",
                "category": "PERFORMANCE",
                "subtitle": "QUARTESSENCE",
                "categoryTag": "PART II · 1:00 PM"
            },
            {
                "id": 13,
                "type": "awardee",
                "title": "HON. CLARICE JUBAHIB",
                "category": "PANGGA KO SI SAM: SPECIAL FEATURE",
                "subtitle": "DavNor's Innovative Initiative in the Management of Severe Acute Malnutrition",
                "department": "Provincial Vice Governor · Province of Davao del Norte",
                "categoryTag": "INITIATIVE SPOTLIGHT",
                "image": "../../shared/assets/speakers/HON. CLARICE JUBAHIB.jpg"
            },
            {
                "id": 14,
                "type": "awardee",
                "title": "PANGGA KO SI SAM AVP",
                "category": "AUDIO-VISUAL PRESENTATION",
                "subtitle": "Documenting Life-Saving Nutrition Care for DavNor Children",
                "categoryTag": "AVP FEATURE"
            },
            {
                "id": 15,
                "type": "awardee",
                "title": "RAFFLES AND DOOR PRIZES",
                "category": "SPECIAL FELLOWSHIP",
                "subtitle": "Exciting Prizes for our Dedicated Nutrition Workers",
                "categoryTag": "LUCKY DRAW"
            },
            {
                "id": 16,
                "type": "closing",
                "event": "2026 PROVINCIAL NUTRITION CONGRESS",
                "title": "PADAYON SA MALUNGTARONG NUTRISYON!",
                "subTitle": "Province of Davao del Norte · Provincial Health Office",
                "citation": "Daghang Salamat sa Tanan! Together, Building a Healthier and Resilient Davao del Norte."
            }
        ]
    },

    # ----------------------------------------------------
    # DECK 1: PANGGA KO SI SAM PARTNERS
    # ----------------------------------------------------
    {
        "folder": "01-pangga-ko-si-sam",
        "key": "nutrition-01-pangga-ko-si-sam",
        "title": "Pangga Ko Si Sam Partners",
        "category": "PANGGA KO SI SAM",
        "subTitle": "Awarding of Plaques of Appreciation to Pangga Ko Si Sam Partners",
        "slides": [
            {
                "id": 0,
                "type": "title",
                "event": "2026 PROVINCIAL NUTRITION CONGRESS",
                "subEvent": "Province of Davao del Norte · Provincial Health Office",
                "title": "AWARDING OF PLAQUES OF APPRECIATION TO PANGGA KO SI SAM PARTNERS",
                "category": "PANGGA KO SI SAM",
                "citation": "Honoring our steadfast partners in the Management of Severe Acute Malnutrition across Davao del Norte"
            },
            {
                "id": 1,
                "type": "awardee",
                "title": "VICE GOVERNOR'S OFFICE",
                "number": 1,
                "category": "PLAQUE OF APPRECIATION",
                "subtitle": "Province of Davao del Norte",
                "categoryTag": "PANGGA KO SI SAM PARTNER"
            },
            {
                "id": 2,
                "type": "awardee",
                "title": "DAVAO DEL NORTE HOSPITAL KAPALONG ZONE",
                "number": 2,
                "category": "PLAQUE OF APPRECIATION",
                "subtitle": "Provincial Hospital Network · Davao del Norte",
                "categoryTag": "PANGGA KO SI SAM PARTNER"
            },
            {
                "id": 3,
                "type": "awardee",
                "title": "DAVAO DEL NORTE HOSPITAL CARMEN ZONE",
                "number": 3,
                "category": "PLAQUE OF APPRECIATION",
                "subtitle": "Provincial Hospital Network · Davao del Norte",
                "categoryTag": "PANGGA KO SI SAM PARTNER"
            },
            {
                "id": 4,
                "type": "awardee",
                "title": "DAVAO DEL NORTE HOSPITAL IGCS ZONE",
                "number": 4,
                "category": "PLAQUE OF APPRECIATION",
                "subtitle": "Provincial Hospital Network · Davao del Norte",
                "categoryTag": "PANGGA KO SI SAM PARTNER"
            },
            {
                "id": 5,
                "type": "awardee",
                "title": "DAVAO REGIONAL MEDICAL CENTER",
                "number": 5,
                "category": "PLAQUE OF APPRECIATION",
                "subtitle": "Tagum City · Department of Health Retained Hospital",
                "categoryTag": "PANGGA KO SI SAM PARTNER"
            },
            {
                "id": 6,
                "type": "awardee",
                "title": "MARSMAN DRYSDALE FOUNDATION INC.",
                "number": 6,
                "category": "PLAQUE OF APPRECIATION",
                "subtitle": "Non-Government Organization Partner",
                "categoryTag": "PANGGA KO SI SAM PARTNER"
            },
            {
                "id": 7,
                "type": "awardee",
                "title": "J BITES CATERING SERVICES",
                "number": 7,
                "category": "PLAQUE OF APPRECIATION",
                "subtitle": "Private Sector Partner",
                "categoryTag": "PANGGA KO SI SAM PARTNER"
            },
            {
                "id": 8,
                "type": "awardee",
                "title": "BEAN & BARREL & VERAX PHARMACY",
                "number": 8,
                "category": "PLAQUE OF APPRECIATION",
                "subtitle": "Private Sector Partners",
                "categoryTag": "PANGGA KO SI SAM PARTNERS"
            },
            {
                "id": 9,
                "type": "awardee",
                "title": "KAAGAPAY",
                "number": 9,
                "category": "PLAQUE OF APPRECIATION",
                "subtitle": "Civil Society Partner · Davao del Norte",
                "categoryTag": "PANGGA KO SI SAM PARTNER"
            },
            {
                "id": 10,
                "type": "awardee",
                "title": "PRINCESS M. ALCAZAR",
                "number": 10,
                "category": "PLAQUE OF APPRECIATION",
                "subtitle": "Nutrition Partner & Champion",
                "categoryTag": "PANGGA KO SI SAM PARTNER"
            },
            {
                "id": 11,
                "type": "awardee",
                "title": "DONNA-LI FUENTES",
                "number": 11,
                "category": "PLAQUE OF APPRECIATION",
                "subtitle": "Nutrition Partner & Champion",
                "categoryTag": "PANGGA KO SI SAM PARTNER"
            },
            {
                "id": 12,
                "type": "awardee",
                "title": "CENIZA SANVICENTE",
                "number": 12,
                "category": "PLAQUE OF APPRECIATION",
                "subtitle": "Nutrition Partner & Champion",
                "categoryTag": "PANGGA KO SI SAM PARTNER"
            },
            {
                "id": 13,
                "type": "awardee",
                "title": "RAFFLES AND DOOR PRIZES",
                "category": "SPECIAL FELLOWSHIP",
                "subtitle": "Exciting Prizes for our Dedicated Nutrition Workers",
                "categoryTag": "LUCKY DRAW · BATCH 1"
            },
            {
                "id": 14,
                "type": "closing",
                "event": "2026 PROVINCIAL NUTRITION CONGRESS",
                "title": "CONGRATULATIONS TO OUR PARTNERS!",
                "subTitle": "Pangga Ko Si Sam Initiative",
                "citation": "Thank you for your invaluable commitment to ending severe acute malnutrition in our children."
            }
        ]
    },

    # ----------------------------------------------------
    # DECK 2: OUTSTANDING LGU
    # ----------------------------------------------------
    {
        "folder": "02-outstanding-lgu",
        "key": "nutrition-02-outstanding-lgu",
        "title": "Outstanding LGU in Nutrition Monitoring",
        "category": "OUTSTANDING LGU",
        "subTitle": "Provincial Outstanding Local Government Unit in Nutrition Monitoring",
        "slides": [
            {
                "id": 0,
                "type": "title",
                "event": "2026 PROVINCIAL NUTRITION CONGRESS",
                "subEvent": "Province of Davao del Norte · Provincial Health Office",
                "title": "PROVINCIAL OUTSTANDING LGU IN NUTRITION MONITORING",
                "category": "OUTSTANDING LGU",
                "citation": "Recognizing exemplary governance, monitoring systems, and dedication to sustained community nutrition"
            },
            {
                "id": 1,
                "type": "awardee",
                "title": "MUNICIPALITY OF BRAULIO E. DUJALI",
                "category": "CERTIFICATE OF RECOGNITION",
                "subtitle": "Provincial Outstanding LGU in Nutrition Monitoring",
                "department": "Official Contender · Province of Davao del Norte",
                "categoryTag": "OFFICIAL CONTENDER",
                "image": "../../shared/assets/lgu-logos/dujali.png"
            },
            {
                "id": 2,
                "type": "awardee",
                "title": "MUNICIPALITY OF CARMEN",
                "category": "CERTIFICATE OF RECOGNITION",
                "subtitle": "Provincial Outstanding LGU in Nutrition Monitoring",
                "department": "Official Contender · Province of Davao del Norte",
                "categoryTag": "OFFICIAL CONTENDER",
                "image": "../../shared/assets/lgu-logos/carmen.png"
            },
            {
                "id": 3,
                "type": "awardee",
                "title": "MUNICIPALITY OF KAPALONG",
                "category": "CERTIFICATE OF RECOGNITION",
                "subtitle": "Provincial Outstanding LGU in Nutrition Monitoring",
                "department": "Official Contender · Province of Davao del Norte",
                "categoryTag": "OFFICIAL CONTENDER",
                "image": "../../shared/assets/lgu-logos/kapalong.png"
            },
            {
                "id": 4,
                "type": "awardee",
                "title": "MUNICIPALITY OF NEW CORELLA",
                "category": "CERTIFICATE OF RECOGNITION",
                "subtitle": "Provincial Outstanding LGU in Nutrition Monitoring",
                "department": "Official Contender · Province of Davao del Norte",
                "categoryTag": "OFFICIAL CONTENDER",
                "image": "../../shared/assets/lgu-logos/new-corella.png"
            },
            {
                "id": 5,
                "type": "awardee",
                "title": "MUNICIPALITY OF SAWATA",
                "category": "CERTIFICATE OF RECOGNITION",
                "subtitle": "Provincial Outstanding LGU in Nutrition Monitoring",
                "department": "Official Contender · Province of Davao del Norte",
                "categoryTag": "OFFICIAL CONTENDER",
                "image": "../../shared/assets/lgu-logos/sawata.png"
            },
            {
                "id": 6,
                "type": "awardee",
                "title": "MUNICIPALITY OF SANTO TOMAS",
                "category": "CERTIFICATE OF RECOGNITION",
                "subtitle": "Provincial Outstanding LGU in Nutrition Monitoring",
                "department": "Official Contender · Province of Davao del Norte",
                "categoryTag": "OFFICIAL CONTENDER",
                "image": "../../shared/assets/lgu-logos/sto-tomas.png"
            },
            {
                "id": 7,
                "type": "awardee",
                "title": "MUNICIPALITY OF TALAINGOD",
                "category": "CERTIFICATE OF RECOGNITION",
                "subtitle": "Provincial Outstanding LGU in Nutrition Monitoring",
                "department": "Official Contender · Province of Davao del Norte",
                "categoryTag": "OFFICIAL CONTENDER",
                "image": "../../shared/assets/lgu-logos/talaingod.png"
            },
            {
                "id": 8,
                "type": "awardee",
                "title": "ISLAND GARDEN CITY OF SAMAL (IGACOS)",
                "category": "CERTIFICATE OF RECOGNITION",
                "subtitle": "Provincial Outstanding LGU in Nutrition Monitoring",
                "department": "Official Contender · Province of Davao del Norte",
                "categoryTag": "OFFICIAL CONTENDER",
                "image": "../../shared/assets/lgu-logos/igacos.png"
            },
            {
                "id": 9,
                "type": "awardee",
                "title": "CITY OF PANABO",
                "category": "CERTIFICATE OF RECOGNITION",
                "subtitle": "Provincial Outstanding LGU in Nutrition Monitoring",
                "department": "Official Contender · Province of Davao del Norte",
                "categoryTag": "OFFICIAL CONTENDER",
                "image": "../../shared/assets/lgu-logos/panabo.png"
            },
            {
                "id": 10,
                "type": "awardee",
                "title": "CITY OF TAGUM",
                "category": "CERTIFICATE OF RECOGNITION",
                "subtitle": "Provincial Outstanding LGU in Nutrition Monitoring",
                "department": "Official Contender · Province of Davao del Norte",
                "categoryTag": "OFFICIAL CONTENDER",
                "image": "../../shared/assets/lgu-logos/tagum.png"
            },
            {
                "id": 11,
                "type": "awardee",
                "title": "MUNICIPALITY OF ASUNCION",
                "number": 1,
                "category": "PROVINCIAL OUTSTANDING LGU (WINNER)",
                "subtitle": "Provincial Outstanding LGU in Nutrition Monitoring · CY 2026",
                "categoryTag": "PLAQUE OF EXCELLENCE",
                "department": "Province of Davao del Norte",
                "image": "../../shared/assets/lgu-logos/asuncion.png"
            },
            {
                "id": 12,
                "type": "closing",
                "event": "2026 PROVINCIAL NUTRITION CONGRESS",
                "title": "CONGRATULATIONS MUNICIPALITY OF ASUNCION!",
                "subTitle": "Provincial Outstanding LGU in Nutrition Monitoring",
                "citation": "A tribute to outstanding leadership, proactive nutrition committees, and healthier communities!"
            }
        ]
    },

    # ----------------------------------------------------
    # DECK 3: OUTSTANDING LNFP
    # ----------------------------------------------------
    {
        "folder": "03-outstanding-lnfp",
        "key": "nutrition-03-outstanding-lnfp",
        "title": "Outstanding Local Nutrition Focal Points",
        "category": "OUTSTANDING LNFP",
        "subTitle": "Contenders & Outstanding CNAO, MNAO, CNPC, MNPC, and BNS Awardees",
        "slides": [
            {
                "id": 0,
                "type": "title",
                "event": "2026 PROVINCIAL NUTRITION CONGRESS",
                "subEvent": "Province of Davao del Norte · Provincial Health Office",
                "title": "PROVINCIAL OUTSTANDING LOCAL NUTRITION FOCAL POINTS",
                "category": "LNFP AWARDS",
                "citation": "Honoring our frontline Nutrition Action Officers, Program Coordinators, and Barangay Nutrition Scholars"
            },
            # 1. ACTION OFFICERS: CONTENDERS
            {
                "id": 1,
                "type": "awardee",
                "title": "JO-ANNE RELAMPAGOS-CAPUYAN",
                "category": "CERTIFICATE OF RECOGNITION",
                "subtitle": "CONTENDER: CITY NUTRITION ACTION OFFICER",
                "department": "City of Panabo",
                "categoryTag": "CNAO CONTENDER"
            },
            {
                "id": 2,
                "type": "awardee",
                "title": "SIGRID PORTIA MACASA, MD",
                "category": "CERTIFICATE OF RECOGNITION",
                "subtitle": "CONTENDER: MUNICIPAL NUTRITION ACTION OFFICER",
                "department": "Municipality of Kapalong",
                "categoryTag": "MNAO CONTENDER"
            },
            {
                "id": 3,
                "type": "awardee",
                "title": "CHERRY T. DEMA-ALA, MD",
                "category": "CERTIFICATE OF RECOGNITION",
                "subtitle": "CONTENDER: MUNICIPAL NUTRITION ACTION OFFICER",
                "department": "Municipality of Braulio E. Dujali",
                "categoryTag": "MNAO CONTENDER"
            },
            {
                "id": 4,
                "type": "awardee",
                "title": "ROBECCA B. SIMBAJON",
                "category": "CERTIFICATE OF RECOGNITION",
                "subtitle": "CONTENDER: MUNICIPAL NUTRITION ACTION OFFICER",
                "department": "Municipality of New Corella",
                "categoryTag": "MNAO CONTENDER"
            },
            {
                "id": 5,
                "type": "awardee",
                "title": "JAYLEN M. GAJE",
                "category": "CERTIFICATE OF RECOGNITION",
                "subtitle": "CONTENDER: MUNICIPAL NUTRITION ACTION OFFICER",
                "department": "Municipality of Sawata",
                "categoryTag": "MNAO CONTENDER"
            },
            {
                "id": 6,
                "type": "awardee",
                "title": "ARTUR L. PINABUDLANG",
                "category": "CERTIFICATE OF RECOGNITION",
                "subtitle": "CONTENDER: MUNICIPAL NUTRITION ACTION OFFICER",
                "department": "Municipality of Talaingod",
                "categoryTag": "MNAO CONTENDER"
            },
            # ACTION OFFICERS: WINNERS
            {
                "id": 7,
                "type": "awardee",
                "title": "GUILLERMO E. OLDEN",
                "category": "PROVINCIAL OUTSTANDING CITY NUTRITION ACTION OFFICER",
                "subtitle": "Island Garden City of Samal (IGACOS)",
                "categoryTag": "PLAQUE WINNER"
            },
            {
                "id": 8,
                "type": "awardee",
                "title": "JOEL M. ANDOY, LPT, MMPA",
                "category": "PROVINCIAL OUTSTANDING MUNICIPAL NUTRITION ACTION OFFICER",
                "subtitle": "Municipality of Asuncion",
                "categoryTag": "PLAQUE WINNER"
            },
            # 2. COORDINATORS: CONTENDERS
            {
                "id": 9,
                "type": "awardee",
                "title": "LIZA M. LAVEGA",
                "category": "CERTIFICATE OF RECOGNITION",
                "subtitle": "CONTENDER: MUNICIPAL NUTRITION PROGRAM COORDINATOR",
                "department": "Municipality of Asuncion",
                "categoryTag": "MNPC CONTENDER"
            },
            {
                "id": 10,
                "type": "awardee",
                "title": "MERCIDITA P. RODULFA",
                "category": "CERTIFICATE OF RECOGNITION",
                "subtitle": "CONTENDER: MUNICIPAL NUTRITION PROGRAM COORDINATOR",
                "department": "Municipality of Braulio E. Dujali",
                "categoryTag": "MNPC CONTENDER"
            },
            {
                "id": 11,
                "type": "awardee",
                "title": "CANDY MEA T. DELA CRUZ",
                "category": "CERTIFICATE OF RECOGNITION",
                "subtitle": "CONTENDER: MUNICIPAL NUTRITION PROGRAM COORDINATOR",
                "department": "Municipality of New Corella",
                "categoryTag": "MNPC CONTENDER"
            },
            {
                "id": 12,
                "type": "awardee",
                "title": "ANALYN SERONDO",
                "category": "CERTIFICATE OF RECOGNITION",
                "subtitle": "CONTENDER: MUNICIPAL NUTRITION PROGRAM COORDINATOR",
                "department": "Municipality of Sawata",
                "categoryTag": "MNPC CONTENDER"
            },
            # COORDINATORS: WINNERS
            {
                "id": 13,
                "type": "awardee",
                "title": "LOVELLA Y. FONTANILLA, RND",
                "category": "PROVINCIAL OUTSTANDING CITY NUTRITION PROGRAM COORDINATOR",
                "subtitle": "City of Panabo",
                "categoryTag": "PLAQUE WINNER"
            },
            {
                "id": 14,
                "type": "awardee",
                "title": "CHARISSE O. CABUSAS, RN, LPT",
                "category": "PROVINCIAL OUTSTANDING MUNICIPAL NUTRITION PROGRAM COORDINATOR",
                "subtitle": "Municipality of Kapalong",
                "categoryTag": "PLAQUE WINNER"
            },
            # 3. BARANGAY NUTRITION SCHOLARS: CONTENDERS
            {
                "id": 15,
                "type": "awardee",
                "title": "MARY JANE M. NOVABOS",
                "category": "CERTIFICATE OF RECOGNITION",
                "subtitle": "CONTENDER: BARANGAY NUTRITION SCHOLAR",
                "department": "Barangay San Miguel, Island Garden City of Samal",
                "categoryTag": "BNS CONTENDER (CITY)"
            },
            {
                "id": 16,
                "type": "awardee",
                "title": "HAZEL MAE C. FLORESCA",
                "category": "CERTIFICATE OF RECOGNITION",
                "subtitle": "CONTENDER: BARANGAY NUTRITION SCHOLAR",
                "department": "Barangay San Miguel, Tagum City",
                "categoryTag": "BNS CONTENDER (CITY)"
            },
            {
                "id": 17,
                "type": "awardee",
                "title": "ROSITA V. ADE",
                "category": "CERTIFICATE OF RECOGNITION",
                "subtitle": "CONTENDER: BARANGAY NUTRITION SCHOLAR",
                "department": "Barangay Cambanugoy, Municipality of Asuncion",
                "categoryTag": "BNS CONTENDER (MUNICIPAL)"
            },
            {
                "id": 18,
                "type": "awardee",
                "title": "MARISSA R. PAMUNAG",
                "category": "CERTIFICATE OF RECOGNITION",
                "subtitle": "CONTENDER: BARANGAY NUTRITION SCHOLAR",
                "department": "Barangay New Casay, Municipality of Braulio E. Dujali",
                "categoryTag": "BNS CONTENDER (MUNICIPAL)"
            },
            {
                "id": 19,
                "type": "awardee",
                "title": "DARLINE R. OLALO",
                "category": "CERTIFICATE OF RECOGNITION",
                "subtitle": "CONTENDER: BARANGAY NUTRITION SCHOLAR",
                "department": "Barangay Kipalili, Municipality of Sawata",
                "categoryTag": "BNS CONTENDER (MUNICIPAL)"
            },
            # BARANGAY NUTRITION SCHOLARS: WINNERS
            {
                "id": 20,
                "type": "awardee",
                "title": "LINETH M. CAMANA",
                "category": "PROVINCIAL OUTSTANDING BNS (CITY LEVEL)",
                "subtitle": "Barangay New Visayas, City of Panabo",
                "categoryTag": "PLAQUE WINNER"
            },
            {
                "id": 21,
                "type": "awardee",
                "title": "ANNA LEE J. REVITA",
                "category": "PROVINCIAL OUTSTANDING BNS (MUNICIPAL LEVEL)",
                "subtitle": "Barangay Sto. Niño, Municipality of New Corella",
                "categoryTag": "PLAQUE WINNER"
            },
            # RAFFLES & DOOR PRIZES (BATCH 2)
            {
                "id": 22,
                "type": "awardee",
                "title": "RAFFLES AND DOOR PRIZES",
                "category": "SPECIAL FELLOWSHIP",
                "subtitle": "Exciting Prizes for our Dedicated Nutrition Workers",
                "categoryTag": "LUCKY DRAW · BATCH 2"
            },
            {
                "id": 23,
                "type": "closing",
                "event": "2026 PROVINCIAL NUTRITION CONGRESS",
                "title": "SALUTE TO OUR LOCAL NUTRITION FOCAL POINTS!",
                "subTitle": "Davao del Norte Champions of Health & Nutrition",
                "citation": "Your unwavering diligence in every barangay and community transforms lives every single day."
            }
        ]
    },

    # ----------------------------------------------------
    # DECK 4: SPECIAL AWARDS (TINGUHA AWARDEES)
    # ----------------------------------------------------
    {
        "folder": "04-special-awards",
        "key": "nutrition-04-special-awards",
        "title": "Special Awards — Tinguha Awardees",
        "category": "TINGUHA AWARDEES",
        "subTitle": "Milestone Accomplishments in Nutrition Prevalence & OPT Coverage (CY 2025 & CY 2026)",
        "slides": [
            {
                "id": 0,
                "type": "title",
                "event": "2026 PROVINCIAL NUTRITION CONGRESS",
                "subEvent": "Province of Davao del Norte · Provincial Health Office",
                "title": "SPECIAL AWARDS — TINGUHA AWARDEES",
                "category": "TINGUHA AWARDEES",
                "citation": "Honoring LGUs achieving the lowest malnutrition prevalence and highest Operation Timbang Plus coverage"
            },
            # CY 2025 Milestones
            {
                "id": 1,
                "type": "awardee",
                "title": "MUNICIPALITY OF NEW CORELLA",
                "category": "SPECIAL AWARD · CY 2025",
                "subtitle": "Lowest Prevalence of Wasting in CY 2025",
                "department": "Prevalence Rate: 0.21%",
                "categoryTag": "TINGUHA AWARDEE"
            },
            {
                "id": 2,
                "type": "awardee",
                "title": "MUNICIPALITY OF CARMEN",
                "category": "SPECIAL AWARD · CY 2025",
                "subtitle": "Lowest Prevalence of Stunting in CY 2025",
                "department": "Prevalence Rate: 1.44%",
                "categoryTag": "TINGUHA AWARDEE"
            },
            {
                "id": 3,
                "type": "awardee",
                "title": "MUNICIPALITY OF CARMEN",
                "category": "SPECIAL AWARD · CY 2025",
                "subtitle": "Lowest Prevalence of Underweight in CY 2025",
                "department": "Prevalence Rate: 0.87%",
                "categoryTag": "TINGUHA AWARDEE"
            },
            {
                "id": 4,
                "type": "awardee",
                "title": "MUNICIPALITY OF BRAULIO E. DUJALI",
                "category": "SPECIAL AWARD · CY 2025",
                "subtitle": "Lowest Prevalence of Overweight and Obesity in CY 2025",
                "department": "Prevalence Rate: 0.31%",
                "categoryTag": "TINGUHA AWARDEE"
            },
            {
                "id": 5,
                "type": "awardee",
                "title": "CITY OF TAGUM",
                "category": "SPECIAL AWARD · CY 2025",
                "subtitle": "Highest Operation Timbang Plus (OPT) Coverage in CY 2025",
                "department": "OPT Coverage: 89.3%",
                "categoryTag": "TINGUHA AWARDEE"
            },
            # CY 2026 Milestones
            {
                "id": 6,
                "type": "awardee",
                "title": "MUNICIPALITY OF ASUNCION",
                "category": "SPECIAL AWARD · CY 2026",
                "subtitle": "Lowest Prevalence of Wasting in CY 2026",
                "department": "Prevalence Rate: 0.16%",
                "categoryTag": "TINGUHA AWARDEE"
            },
            {
                "id": 7,
                "type": "awardee",
                "title": "MUNICIPALITY OF KAPALONG",
                "category": "SPECIAL AWARD · CY 2026",
                "subtitle": "Lowest Prevalence of Stunting in CY 2026",
                "department": "Prevalence Rate: 1.06%",
                "categoryTag": "TINGUHA AWARDEE"
            },
            {
                "id": 8,
                "type": "awardee",
                "title": "MUNICIPALITY OF ASUNCION",
                "category": "SPECIAL AWARD · CY 2026",
                "subtitle": "Lowest Prevalence of Underweight in CY 2026",
                "department": "Prevalence Rate: 0.73%",
                "categoryTag": "TINGUHA AWARDEE"
            },
            {
                "id": 9,
                "type": "awardee",
                "title": "MUNICIPALITY OF KAPALONG",
                "category": "SPECIAL AWARD · CY 2026",
                "subtitle": "Lowest Prevalence of Overweight and Obesity in CY 2026",
                "department": "Prevalence Rate: 0.49%",
                "categoryTag": "TINGUHA AWARDEE"
            },
            {
                "id": 10,
                "type": "awardee",
                "title": "MUNICIPALITY OF ASUNCION",
                "category": "SPECIAL AWARD · CY 2026",
                "subtitle": "Highest Operation Timbang Plus (OPT) Coverage in CY 2026",
                "department": "OPT Coverage: 87.6%",
                "categoryTag": "TINGUHA AWARDEE"
            },
            # Legacy of Leadership in Nutrition Award (3 Plaques)
            {
                "id": 11,
                "type": "awardee",
                "title": "ANESIA F. BABOR",
                "category": "LEGACY OF LEADERSHIP IN NUTRITION AWARD",
                "subtitle": "Former Municipal Nutrition Program Coordinator · Municipality of Carmen",
                "department": "Leadership Honoree",
                "categoryTag": "LEGACY OF LEADERSHIP"
            },
            {
                "id": 12,
                "type": "awardee",
                "title": "NELIA M. RODILLAS, RND",
                "category": "LEGACY OF LEADERSHIP IN NUTRITION AWARD",
                "subtitle": "Former City Nutrition Program Coordinator · Island Garden City of Samal (IGACOS)",
                "department": "Leadership Honoree",
                "categoryTag": "LEGACY OF LEADERSHIP"
            },
            {
                "id": 13,
                "type": "awardee",
                "title": "DR. MA. SUSAN B. GANTUANGCO",
                "category": "LEGACY OF LEADERSHIP IN NUTRITION AWARD",
                "subtitle": "Former City Nutrition Program Coordinator · City of Tagum",
                "department": "Leadership Honoree",
                "categoryTag": "LEGACY OF LEADERSHIP"
            },
            # Pillar of Nutrition Education Awards (3 Plaques)
            {
                "id": 14,
                "type": "awardee",
                "title": "MAYFLOR PERALTA-ESPIRITU, RND",
                "category": "PILLAR OF NUTRITION EDUCATION AWARD",
                "subtitle": "Nutrition Program Manager · Department of Health - Davao Region (DOH-CHD XI)",
                "department": "Nutrition Education Pillar",
                "categoryTag": "PILLAR OF EDUCATION"
            },
            {
                "id": 15,
                "type": "awardee",
                "title": "DR. CATHERINE A. LOZARITO",
                "category": "PILLAR OF NUTRITION EDUCATION AWARD",
                "subtitle": "Junior Consultant · Medical Nutrition Department · Davao Regional Medical Center",
                "department": "Nutrition Education Pillar",
                "categoryTag": "PILLAR OF EDUCATION"
            },
            {
                "id": 16,
                "type": "awardee",
                "title": "DR. STEPHANIE ALVA P. RISONAR",
                "category": "PILLAR OF NUTRITION EDUCATION AWARD",
                "subtitle": "Rural Health Physician · Samal District",
                "department": "Nutrition Education Pillar",
                "categoryTag": "PILLAR OF EDUCATION"
            },
            {
                "id": 17,
                "type": "awardee",
                "title": "RAFFLES AND DOOR PRIZES",
                "category": "SPECIAL FELLOWSHIP",
                "subtitle": "Exciting Prizes for our Dedicated Nutrition Workers",
                "categoryTag": "LUCKY DRAW · BATCH 3"
            },
            {
                "id": 18,
                "type": "closing",
                "event": "2026 PROVINCIAL NUTRITION CONGRESS",
                "title": "CONGRATULATIONS TINGUHA AWARDEES & SPECIAL HONOREES!",
                "subTitle": "Excellence in Malnutrition Reduction, Leadership & Education",
                "citation": "Setting the benchmark for nutritional health and well-being throughout Davao del Norte."
            }
        ]
    },

    # ----------------------------------------------------
    # DECK 5: REGIONAL PARTNERS & PNC OFFICES
    # ----------------------------------------------------
    {
        "folder": "05-regional-and-pnc",
        "key": "nutrition-05-regional-and-pnc",
        "title": "Regional Partners & PNC Department Offices",
        "category": "APPRECIATION AWARDS",
        "subTitle": "Appreciation Awards for Regional Institutions & Provincial Nutrition Committee Offices",
        "slides": [
            {
                "id": 0,
                "type": "title",
                "event": "2026 PROVINCIAL NUTRITION CONGRESS",
                "subEvent": "Province of Davao del Norte · Provincial Health Office",
                "title": "REGIONAL PARTNERS & PROVINCIAL NUTRITION COMMITTEE OFFICES",
                "category": "APPRECIATION AWARDS",
                "citation": "Expressing profound gratitude for multi-sectoral leadership, technical guidance, and institutional synergy"
            },
            # Regional Partners (3 Plaques)
            {
                "id": 1,
                "type": "awardee",
                "title": "NATIONAL NUTRITION COUNCIL",
                "number": 1,
                "category": "REGIONAL APPRECIATION AWARD",
                "subtitle": "National Nutrition Council - Region XI",
                "categoryTag": "REGIONAL PARTNER"
            },
            {
                "id": 2,
                "type": "awardee",
                "title": "DEPARTMENT OF HEALTH - DAVAO REGION",
                "number": 2,
                "category": "REGIONAL APPRECIATION AWARD",
                "subtitle": "DOH Center for Health Development XI",
                "categoryTag": "REGIONAL PARTNER"
            },
            {
                "id": 3,
                "type": "awardee",
                "title": "HEALTH SYSTEM RESILIENCE PROJECT",
                "number": 3,
                "category": "REGIONAL APPRECIATION AWARD",
                "subtitle": "Technical & Development Partner",
                "categoryTag": "REGIONAL PARTNER"
            },
            # PNC Department Offices (15 Certificates)
            {
                "id": 4,
                "type": "awardee",
                "title": "PROVINCIAL HEALTH OFFICE",
                "number": 1,
                "category": "CERTIFICATE OF APPRECIATION",
                "subtitle": "Provincial Nutrition Committee Member Office",
                "categoryTag": "PNC MEMBER"
            },
            {
                "id": 5,
                "type": "awardee",
                "title": "PROVINCIAL DISASTER RISK REDUCTION AND MANAGEMENT OFFICE",
                "number": 2,
                "category": "CERTIFICATE OF APPRECIATION",
                "subtitle": "PDRRMO · Provincial Nutrition Committee Member Office",
                "categoryTag": "PNC MEMBER"
            },
            {
                "id": 6,
                "type": "awardee",
                "title": "PROVINCIAL ENVIRONMENT AND NATURAL RESOURCES OFFICE",
                "number": 3,
                "category": "CERTIFICATE OF APPRECIATION",
                "subtitle": "PENRO · Provincial Nutrition Committee Member Office",
                "categoryTag": "PNC MEMBER"
            },
            {
                "id": 7,
                "type": "awardee",
                "title": "PROVINCIAL AGRICULTURE OFFICE",
                "number": 4,
                "category": "CERTIFICATE OF APPRECIATION",
                "subtitle": "PAGRO · Provincial Nutrition Committee Member Office",
                "categoryTag": "PNC MEMBER"
            },
            {
                "id": 8,
                "type": "awardee",
                "title": "PROVINCIAL VETERINARY OFFICE",
                "number": 5,
                "category": "CERTIFICATE OF APPRECIATION",
                "subtitle": "PVET · Provincial Nutrition Committee Member Office",
                "categoryTag": "PNC MEMBER"
            },
            {
                "id": 9,
                "type": "awardee",
                "title": "PROVINCIAL ENGINEER'S OFFICE",
                "number": 6,
                "category": "CERTIFICATE OF APPRECIATION",
                "subtitle": "PEO · Provincial Nutrition Committee Member Office",
                "categoryTag": "PNC MEMBER"
            },
            {
                "id": 10,
                "type": "awardee",
                "title": "PROVINCIAL PUBLIC EMPLOYMENT SERVICE OFFICE",
                "number": 7,
                "category": "CERTIFICATE OF APPRECIATION",
                "subtitle": "PESO · Provincial Nutrition Committee Member Office",
                "categoryTag": "PNC MEMBER"
            },
            {
                "id": 11,
                "type": "awardee",
                "title": "PROVINCIAL SOCIAL WELFARE AND DEVELOPMENT OFFICE",
                "number": 8,
                "category": "CERTIFICATE OF APPRECIATION",
                "subtitle": "PSWDO · Provincial Nutrition Committee Member Office",
                "categoryTag": "PNC MEMBER"
            },
            {
                "id": 12,
                "type": "awardee",
                "title": "PROVINCIAL HUMAN RESOURCE MANAGEMENT OFFICE",
                "number": 9,
                "category": "CERTIFICATE OF APPRECIATION",
                "subtitle": "PHRMO · Provincial Nutrition Committee Member Office",
                "categoryTag": "PNC MEMBER"
            },
            {
                "id": 13,
                "type": "awardee",
                "title": "PROVINCIAL BUDGET OFFICE",
                "number": 10,
                "category": "CERTIFICATE OF APPRECIATION",
                "subtitle": "PBO · Provincial Nutrition Committee Member Office",
                "categoryTag": "PNC MEMBER"
            },
            {
                "id": 14,
                "type": "awardee",
                "title": "SANGGUNIANG PANLALAWIGAN COMMITTEE ON HEALTH",
                "number": 11,
                "category": "CERTIFICATE OF APPRECIATION",
                "subtitle": "Legislative Partner · Davao del Norte",
                "categoryTag": "PNC MEMBER"
            },
            {
                "id": 15,
                "type": "awardee",
                "title": "PROVINCIAL PLANNING AND DEVELOPMENT OFFICE",
                "number": 12,
                "category": "CERTIFICATE OF APPRECIATION",
                "subtitle": "PPDO · Provincial Nutrition Committee Member Office",
                "categoryTag": "PNC MEMBER"
            },
            {
                "id": 16,
                "type": "awardee",
                "title": "PROVINCIAL INFORMATION, COMMUNICATION AND KNOWLEDGE MANAGEMENT OFFICE",
                "number": 13,
                "category": "CERTIFICATE OF APPRECIATION",
                "subtitle": "PIKMO · Provincial Nutrition Committee Member Office",
                "categoryTag": "PNC MEMBER"
            },
            {
                "id": 17,
                "type": "awardee",
                "title": "PROVINCIAL DEPARTMENT OF HEALTH OFFICE",
                "number": 14,
                "category": "CERTIFICATE OF APPRECIATION",
                "subtitle": "PDOHO · Provincial Nutrition Committee Member Office",
                "categoryTag": "PNC MEMBER"
            },
            {
                "id": 18,
                "type": "awardee",
                "title": "DEPARTMENT OF EDUCATION - DIVISION OF DAVAO DEL NORTE",
                "number": 15,
                "category": "CERTIFICATE OF APPRECIATION",
                "subtitle": "DepEd Davao del Norte · Provincial Nutrition Committee Member Office",
                "categoryTag": "PNC MEMBER"
            },
            {
                "id": 19,
                "type": "closing",
                "event": "2026 PROVINCIAL NUTRITION CONGRESS",
                "title": "SALUTE TO OUR INSTITUTIONAL PARTNERS!",
                "subTitle": "Provincial Nutrition Committee",
                "citation": "Multi-sectoral unity and commitment drive sustainable nutrition for all DavNor families."
            }
        ]
    },

    # ----------------------------------------------------
    # DECK 6: RECOGNITION OF PNET
    # ----------------------------------------------------
    {
        "folder": "06-pnet-recognition",
        "key": "nutrition-06-pnet-recognition",
        "title": "Recognition of PNET Evaluators & TWG",
        "category": "PNET & TWG RECOGNITION",
        "subTitle": "Recognition of the Provincial Nutrition Evaluation Team and Technical Working Group",
        "slides": [
            {
                "id": 0,
                "type": "title",
                "event": "2026 PROVINCIAL NUTRITION CONGRESS",
                "subEvent": "Province of Davao del Norte · Provincial Health Office",
                "title": "RECOGNITION OF PROVINCIAL NUTRITION EVALUATION TEAM & TECHNICAL WORKING GROUP",
                "category": "PNET & TWG RECOGNITION",
                "citation": "Honoring the rigorous assessment, field evaluations, and dedicated monitoring of nutrition programs"
            },
            {
                "id": 1,
                "type": "awardee",
                "title": "PROVINCIAL HEALTH OFFICE",
                "number": 1,
                "category": "CERTIFICATE OF RECOGNITION",
                "citations": [
                    "SUNSHINE ANGELIE S. BANTILAN, RND",
                    "NEIDEL FEAH A. FERIDO, RM, BSM",
                    "SNOVY MISA"
                ],
                "categoryTag": "PNET EVALUATOR"
            },
            {
                "id": 2,
                "type": "awardee",
                "title": "CORAZON S. PERO",
                "number": 2,
                "category": "CERTIFICATE OF RECOGNITION",
                "subtitle": "Provincial Disaster Risk Reduction and Management Office (PDRRMO)",
                "categoryTag": "PNET EVALUATOR"
            },
            {
                "id": 3,
                "type": "awardee",
                "title": "MARY JOY O. FONTANILLA, LPT",
                "number": 3,
                "category": "CERTIFICATE OF RECOGNITION",
                "subtitle": "Provincial Environment and Natural Resources Office (PENRO)",
                "categoryTag": "PNET EVALUATOR"
            },
            {
                "id": 4,
                "type": "awardee",
                "title": "PROVINCIAL AGRICULTURE OFFICE",
                "number": 4,
                "category": "CERTIFICATE OF RECOGNITION",
                "citations": [
                    "ENGR. RENILDA T. BANGOY, RPABE, MSAG",
                    "MARITES NACITO, RA"
                ],
                "categoryTag": "PNET EVALUATOR"
            },
            {
                "id": 5,
                "type": "awardee",
                "title": "DECI MARIE C. ONGCOY, RA",
                "number": 5,
                "category": "CERTIFICATE OF RECOGNITION",
                "subtitle": "Provincial Veterinary Office (PVET)",
                "categoryTag": "PNET EVALUATOR"
            },
            {
                "id": 6,
                "type": "awardee",
                "title": "ENGR. EMILY D. ESCAMIS",
                "number": 6,
                "category": "CERTIFICATE OF RECOGNITION",
                "subtitle": "Provincial Engineer's Office (PEO)",
                "categoryTag": "PNET EVALUATOR"
            },
            {
                "id": 7,
                "type": "awardee",
                "title": "MARITES S. RACACHO, MPA",
                "number": 7,
                "category": "CERTIFICATE OF RECOGNITION",
                "subtitle": "Provincial Public Employment Service Office (PESO)",
                "categoryTag": "PNET EVALUATOR"
            },
            {
                "id": 8,
                "type": "awardee",
                "title": "PROVINCIAL SOCIAL WELFARE AND DEVELOPMENT OFFICE",
                "number": 8,
                "category": "CERTIFICATE OF RECOGNITION",
                "citations": [
                    "FEVELYN M. MARFE, RSW, MPA, MSSW",
                    "NOVELYN Y. CADABONA, RSW"
                ],
                "categoryTag": "PNET & TWG"
            },
            {
                "id": 9,
                "type": "awardee",
                "title": "MS. JHON LYN MOSQUEDA",
                "number": 9,
                "category": "CERTIFICATE OF RECOGNITION",
                "subtitle": "Provincial Human Resource Management Office (PHRMO)",
                "categoryTag": "PNET & TWG"
            },
            {
                "id": 10,
                "type": "awardee",
                "title": "ALLAN L. AMANTE JR.",
                "number": 10,
                "category": "CERTIFICATE OF RECOGNITION",
                "subtitle": "Provincial Planning and Development Office (PPDO)",
                "categoryTag": "PNET EVALUATOR"
            },
            {
                "id": 11,
                "type": "awardee",
                "title": "REDEEMER C. ANUNCIADO",
                "number": 11,
                "category": "CERTIFICATE OF RECOGNITION",
                "subtitle": "Provincial Information, Communication and Knowledge Management Office (PIKMO)",
                "categoryTag": "PNET EVALUATOR"
            },
            {
                "id": 12,
                "type": "awardee",
                "title": "PROVINCIAL DEPARTMENT OF HEALTH OFFICE",
                "number": 12,
                "category": "CERTIFICATE OF RECOGNITION",
                "citations": [
                    "GABRIELLE ANGELO M. PLAZA, RND",
                    "KIMBERLEY B. ALATON, RND",
                    "CLAUDINE E. SAMSON, RND"
                ],
                "categoryTag": "PNET EVALUATOR"
            },
            {
                "id": 13,
                "type": "awardee",
                "title": "JOCELYN C. CARDINAL, RN",
                "number": 13,
                "category": "CERTIFICATE OF RECOGNITION",
                "subtitle": "Department of Education - Division of Davao del Norte",
                "categoryTag": "PNET EVALUATOR"
            },
            {
                "id": 14,
                "type": "closing",
                "event": "2026 PROVINCIAL NUTRITION CONGRESS",
                "title": "SALUTE TO OUR PNET EVALUATORS!",
                "subTitle": "Provincial Nutrition Evaluation Team",
                "citation": "Your thorough assessments and objective evaluations ensure quality nutrition programs across Davao del Norte."
            }
        ]
    },

    # ----------------------------------------------------
    # DECK 7: BNS LOYALTY AWARDS
    # ----------------------------------------------------
    {
        "folder": "07-bns-loyalty-awards",
        "key": "nutrition-07-bns-loyalty-awards",
        "title": "BNS Loyalty Awards (10+ Years)",
        "category": "BNS LOYALTY AWARDS",
        "subTitle": "Dungog sa Malungtarong Serbisyo Award — Honoring 94 BNS with 10 to 35+ Years of Dedicated Service",
        "slides": [
            {
                "id": 0,
                "type": "title",
                "event": "2026 PROVINCIAL NUTRITION CONGRESS",
                "subEvent": "Province of Davao del Norte · Provincial Health Office",
                "title": "BARANGAY NUTRITION SCHOLAR LOYALTY AWARDS",
                "category": "DUNGOG SA MALUNGTARONG SERBISYO",
                "citation": "Honoring our heroic Barangay Nutrition Scholars with 10, 20, 30, and 35+ years of faithful service"
            },
            # ASUNCION (7 Awardees)
            {
                "id": 1,
                "type": "awardee",
                "title": "MUNICIPALITY OF ASUNCION",
                "category": "DUNGOG SA MALUNGTARONG SERBISYO AWARD",
                "subtitle": "Loyalty Awardees (10 Years & Above)",
                "citations": [
                    "MARIA ROIZA R. MANGLICMOT — Brgy. Camoning (30 YEARS)",
                    "LAARNI D. ARANGO — Brgy. New Santiago (28 YEARS)",
                    "ESTER T. BULACOY — Brgy. Magatos (24 YEARS)",
                    "ROSITA V. ADE — Brgy. Cambanogoy (19 YEARS)",
                    "SALVY A. ALAGOS — Brgy. New Bantayan (19 YEARS)",
                    "ISABELITA S. PABILONA — Brgy. Doña Andrea (18 YEARS)",
                    "MARILOU P. PANSACALA — Brgy. Buclad (11 YEARS)"
                ],
                "categoryTag": "ASUNCION · 7 AWARDEES"
            },
            # BRAULIO E. DUJALI (3 Awardees)
            {
                "id": 2,
                "type": "awardee",
                "title": "MUNICIPALITY OF BRAULIO E. DUJALI",
                "category": "DUNGOG SA MALUNGTARONG SERBISYO AWARD",
                "subtitle": "Loyalty Awardees (10 Years & Above)",
                "citations": [
                    "MA. PAZ J. JACINTO — Brgy. Tanglaw (30 YEARS)",
                    "OFELIA D. DUMALI — Brgy. Dujali (24 YEARS)",
                    "ARLINE R. GUMBAN — Brgy. Magupising (13 YEARS)"
                ],
                "categoryTag": "BE DUJALI · 3 AWARDEES"
            },
            # CARMEN (4 Awardees)
            {
                "id": 3,
                "type": "awardee",
                "title": "MUNICIPALITY OF CARMEN",
                "category": "DUNGOG SA MALUNGTARONG SERBISYO AWARD",
                "subtitle": "Loyalty Awardees (10 Years & Above)",
                "citations": [
                    "EMELIA D. TANTIADO — Brgy. Mabuhay (33 YEARS)",
                    "IMELDA M. MORCID — Brgy. Guadalupe (29 YEARS)",
                    "MERCEDITA F. MOLE — Brgy. Magsaysay (18 YEARS)",
                    "MADELENE S. GULANE — Brgy. Alejal (18 YEARS)"
                ],
                "categoryTag": "CARMEN · 4 AWARDEES"
            },
            # KAPALONG (8 Awardees)
            {
                "id": 4,
                "type": "awardee",
                "title": "MUNICIPALITY OF KAPALONG",
                "category": "DUNGOG SA MALUNGTARONG SERBISYO AWARD",
                "subtitle": "Loyalty Awardees (10 Years & Above)",
                "citations": [
                    "LINDA B. CALAYCA — Brgy. Gupitan (30 YEARS)",
                    "THELMA S. MONES — Brgy. Sua-on (29 YEARS)",
                    "LYNNETTECHE P. GUTIB — Brgy. Gabuyan (18 YEARS)",
                    "ELIZABETH U. LUCOB — Brgy. Gupitan (17 YEARS)",
                    "ROSARIO B. LASAFIN — Brgy. Sampao (15 YEARS)",
                    "LILIA T. ORONGAN — Brgy. Mabantao (14 YEARS)",
                    "JOSEVY C. MARCELINO — Brgy. Maniki (12 YEARS)",
                    "JEARLYN E. CORPUZ — Brgy. Luna (11 YEARS)"
                ],
                "categoryTag": "KAPALONG · 8 AWARDEES"
            },
            # NEW CORELLA (7 Awardees)
            {
                "id": 5,
                "type": "awardee",
                "title": "MUNICIPALITY OF NEW CORELLA",
                "category": "DUNGOG SA MALUNGTARONG SERBISYO AWARD",
                "subtitle": "Loyalty Awardees (10 Years & Above)",
                "citations": [
                    "ALICIA C. JAYECTIN — Brgy. Del Pilar (30 YEARS)",
                    "MILA S. RAMOS — Brgy. Mesaoy (30 YEARS)",
                    "LORETA T. CAGOCO — Brgy. New Bohol (27 YEARS)",
                    "MARLYN C. CUERING — Brgy. New Sambog (27 YEARS)",
                    "JOSEPHINE B. ALMEDORA — Brgy. Sta. Cruz (18 YEARS)",
                    "LITA I. TOMASINO — Brgy. Del Monte (17 YEARS)",
                    "ZENAIDA I. OLBES — Brgy. San Roque (12 YEARS)"
                ],
                "categoryTag": "NEW CORELLA · 7 AWARDEES"
            },
            # SAWATA (2 Awardees)
            {
                "id": 6,
                "type": "awardee",
                "title": "MUNICIPALITY OF SAWATA",
                "category": "DUNGOG SA MALUNGTARONG SERBISYO AWARD",
                "subtitle": "Loyalty Awardees (10 Years & Above)",
                "citations": [
                    "ELIZABETH C. PORALAN — Brgy. Sto. Niño (26 YEARS)",
                    "JENELITA V. PIAD — Brgy. Libuton (13 YEARS)"
                ],
                "categoryTag": "SAWATA · 2 AWARDEES"
            },
            # SANTO TOMAS (11 Awardees)
            {
                "id": 7,
                "type": "awardee",
                "title": "MUNICIPALITY OF SANTO TOMAS (PART 1)",
                "category": "DUNGOG SA MALUNGTARONG SERBISYO AWARD",
                "subtitle": "Loyalty Awardees (20 to 35+ Years in Service)",
                "citations": [
                    "VIRGINIA A. DURAN — Brgy. La Libertad (35 YEARS)",
                    "FLORES P. PALMA — Brgy. Casig-ang (35 YEARS)",
                    "CARMELITA L. WALAWALA — Brgy. New Katipunan (31 YEARS)",
                    "RUBY I. OTLANG — Brgy. Kimamon (30 YEARS)",
                    "JOYLYN G. ALEMAN — Brgy. San Vicente (25 YEARS)",
                    "FERLYN D. VICTORIANO — Brgy. New Visayas (24 YEARS)",
                    "ROXANA E. ARAÑEZ — Brgy. Tulalian (22 YEARS)"
                ],
                "categoryTag": "STO. TOMAS · 20+ YEARS"
            },
            {
                "id": 8,
                "type": "awardee",
                "title": "MUNICIPALITY OF SANTO TOMAS (PART 2)",
                "category": "DUNGOG SA MALUNGTARONG SERBISYO AWARD",
                "subtitle": "Loyalty Awardees (11 to 15 Years in Service)",
                "citations": [
                    "LEONARDA L. SATURINAS — Brgy. Magwawa (15 YEARS)",
                    "ELIZABETH C. FAILAGMAO — Brgy. Salvacion (13 YEARS)",
                    "WILMA D. OPSIMA — Brgy. Balagunan (12 YEARS)",
                    "DESIRRE M. AGUILAR — Brgy. Lunga-og (11 YEARS)"
                ],
                "categoryTag": "STO. TOMAS · 10+ YEARS"
            },
            # TALAINGOD (2 Awardees)
            {
                "id": 9,
                "type": "awardee",
                "title": "MUNICIPALITY OF TALAINGOD",
                "category": "DUNGOG SA MALUNGTARONG SERBISYO AWARD",
                "subtitle": "Loyalty Awardees (10 Years & Above)",
                "citations": [
                    "ARISTONA A. CUBELO — Brgy. Sto. Niño (14 YEARS)",
                    "MARY JANE P. FRAGATA — Brgy. Sto. Niño (13 YEARS)"
                ],
                "categoryTag": "TALAINGOD · 2 AWARDEES"
            },
            # IGACOS - BABAK (5 Awardees)
            {
                "id": 10,
                "type": "awardee",
                "title": "IGACOS — BABAK DISTRICT",
                "category": "DUNGOG SA MALUNGTARONG SERBISYO AWARD",
                "subtitle": "Island Garden City of Samal",
                "citations": [
                    "MAGDALENA S. BORRES — Brgy. San Antonio (32 YEARS)",
                    "ERLINDA A. CABILIC — Brgy. Tagpopongan (19 YEARS)",
                    "MARLYN F. ALVARICO — Brgy. Toril (16 YEARS)",
                    "FELIPA R. GARCIANO — Brgy. Caliclic (12 YEARS)",
                    "LOUEDAY B. PALAD — Brgy. Villarica (12 YEARS)"
                ],
                "categoryTag": "IGACOS BABAK · 5 AWARDEES"
            },
            # IGACOS - KAPUTIAN (4 Awardees)
            {
                "id": 11,
                "type": "awardee",
                "title": "IGACOS — KAPUTIAN DISTRICT",
                "category": "DUNGOG SA MALUNGTARONG SERBISYO AWARD",
                "subtitle": "Island Garden City of Samal",
                "citations": [
                    "SALOME B. ABAJERO — Brgy. Poblacion (22 YEARS)",
                    "FLORDILIE A. IBOT — Brgy. Adecor (18 YEARS)",
                    "JOVY N. DIESTRO — Brgy. San Remegio (11 YEARS)",
                    "LETTECIA S. BACANG — Brgy. Libertad (10 YEARS)"
                ],
                "categoryTag": "IGACOS KAPUTIAN · 4 AWARDEES"
            },
            # IGACOS - SAMAL (5 Awardees)
            {
                "id": 12,
                "type": "awardee",
                "title": "IGACOS — SAMAL DISTRICT",
                "category": "DUNGOG SA MALUNGTARONG SERBISYO AWARD",
                "subtitle": "Island Garden City of Samal",
                "citations": [
                    "MARY JANE M. NOVABOS — Brgy. San Miguel (31 YEARS)",
                    "EMMA R. CORONEL — Brgy. Catagman (17 YEARS)",
                    "LUCINA B. OBRA — Brgy. Tagbay (16 YEARS)",
                    "ZARA B. TELOS — Brgy. Aumbay (15 YEARS)",
                    "MARGIE L. BONTILAO — Brgy. Tagdaliao (10 YEARS)"
                ],
                "categoryTag": "IGACOS SAMAL · 5 AWARDEES"
            },
            # PANABO CITY (16 Awardees in 2 Slides)
            {
                "id": 13,
                "type": "awardee",
                "title": "CITY OF PANABO (PART 1)",
                "category": "DUNGOG SA MALUNGTARONG SERBISYO AWARD",
                "subtitle": "Loyalty Awardees (15 to 24 Years in Service)",
                "citations": [
                    "MA. ENONE G. DELA CUEVA — Brgy. A.O. Floirendo (24 YEARS)",
                    "CANDIDA V. BONIO — Brgy. Mabunao (24 YEARS)",
                    "VIRGINIA A. LUMANOG — Brgy. San Pedro (23 YEARS)",
                    "LANIE B. LAMOSTE — Brgy. San Vicente (21 YEARS)",
                    "ANGELITA P. DOROJA — Brgy. Kauswagan (21 YEARS)",
                    "PERLIE D. RUAZA — Brgy. Cagangohan (18 YEARS)",
                    "LOIDA C. GABAC — Brgy. A.O. Floirendo (15 YEARS)",
                    "JIAMELINE M. SULEIK — Brgy. Datu Abdul Dadia (15 YEARS)"
                ],
                "categoryTag": "PANABO · 15+ YEARS"
            },
            {
                "id": 14,
                "type": "awardee",
                "title": "CITY OF PANABO (PART 2)",
                "category": "DUNGOG SA MALUNGTARONG SERBISYO AWARD",
                "subtitle": "Loyalty Awardees (11 to 14 Years in Service)",
                "citations": [
                    "JOCELYN O. NIONES — Brgy. Katipunan (14 YEARS)",
                    "RUBY G. LAMEDA — Brgy. Quezon (14 YEARS)",
                    "JULIET L. DULALAS — Brgy. J.P. Laurel (13 YEARS)",
                    "ERNA A. VALENZUELA — Brgy. Kasilak (13 YEARS)",
                    "CHERYL G. GARNICA — Brgy. Upper Licanan (12 YEARS)",
                    "CLARISSA S. BAHENA — Brgy. San Francisco (11 YEARS)",
                    "LEWILYN S. SANANI — Brgy. Buenavista (11 YEARS)",
                    "LEAH R. PUSODAN — Brgy. Sta. Cruz (11 YEARS)"
                ],
                "categoryTag": "PANABO · 10+ YEARS"
            },
            # TAGUM CITY (18 Awardees in 2 Slides)
            {
                "id": 15,
                "type": "awardee",
                "title": "CITY OF TAGUM (PART 1)",
                "category": "DUNGOG SA MALUNGTARONG SERBISYO AWARD",
                "subtitle": "Loyalty Awardees (17 to 35 Years in Service)",
                "citations": [
                    "MARIBELLE P. DIONSAY — Brgy. Mankilam (35 YEARS)",
                    "EVANGELINE D. FELISILDA — Brgy. Magugpo Poblacion (29 YEARS)",
                    "MERCIDITAS M. OVAL — Brgy. Apokon (24 YEARS)",
                    "SHERWIN C. ABELLANIZA — Brgy. Magugpo East (22 YEARS)",
                    "HELEN G. SUICO — Brgy. San Miguel (21 YEARS)",
                    "PAMELA N. CATMON — Brgy. Apokon (19 YEARS)",
                    "BEVERLY D. MAILA — Brgy. Madaum (18 YEARS)",
                    "ALMA M. PAMPLONA — Brgy. Visayan Village (17 YEARS)",
                    "LUDESA S. TORMON — Brgy. Pagsabangan (16 YEARS)"
                ],
                "categoryTag": "TAGUM · 16+ YEARS"
            },
            {
                "id": 16,
                "type": "awardee",
                "title": "CITY OF TAGUM (PART 2)",
                "category": "DUNGOG SA MALUNGTARONG SERBISYO AWARD",
                "subtitle": "Loyalty Awardees (12 to 15 Years in Service)",
                "citations": [
                    "NERIZA M. INDOY — Brgy. Magugpo North (15 YEARS)",
                    "LAARNI R. MANULAT — Brgy. La Filipina (14 YEARS)",
                    "LIZA J. SUNIDO — Brgy. Magdum (14 YEARS)",
                    "RUBILYN S. FAJARDO — Brgy. Magugpo South (13 YEARS)",
                    "SHERLYN N. OBEÑITA — Brgy. Pandapan (13 YEARS)",
                    "ROWENA B. LULO — Brgy. Magugpo West (12 YEARS)",
                    "RHEALYN P. MEHOY — Brgy. Visayan Village (12 YEARS)",
                    "CAROL B. NICDAO — Brgy. Magugpo South (12 YEARS)",
                    "MARYLYN D. QUISADO — Brgy. Madaum (12 YEARS)"
                ],
                "categoryTag": "TAGUM · 12+ YEARS"
            },
            {
                "id": 17,
                "type": "awardee",
                "title": "RAFFLES AND DOOR PRIZES",
                "category": "SPECIAL FELLOWSHIP",
                "subtitle": "Grand Raffle Draw · Exciting Prizes for our Dedicated Nutrition Workers",
                "categoryTag": "LUCKY DRAW · BATCH 4"
            },
            {
                "id": 18,
                "type": "awardee",
                "title": "JOSEPHINE THERESE P. PARREÑAS, RN, MD",
                "category": "CLOSING REMARKS",
                "subtitle": "Provincial Health Officer I",
                "department": "Provincial Health Office · Province of Davao del Norte",
                "categoryTag": "CLOSING PROGRAM"
            },
            {
                "id": 19,
                "type": "awardee",
                "title": "LESLEY CADUA, RN",
                "category": "CLOSING PRAYER",
                "subtitle": "Nurse III",
                "department": "Provincial Health Office · Province of Davao del Norte",
                "categoryTag": "CLOSING PROGRAM"
            },
            {
                "id": 20,
                "type": "awardee",
                "title": "MR. CHRISTOPHER DAN T. CARIAGA, RN",
                "category": "MASTERS OF CEREMONY",
                "subtitle": "Master of Ceremony",
                "department": "2026 Provincial Nutrition Congress & Awarding Ceremony",
                "categoryTag": "CEREMONY HOST"
            },
            {
                "id": 21,
                "type": "closing",
                "event": "2026 PROVINCIAL NUTRITION CONGRESS",
                "title": "DAGHANG SALAMAT SA TANAN!",
                "subTitle": "Himsog nga Katawhan, Himsog nga Kinaiyahan: Panaghiusa Alang sa Malungtarong Nutrisyon",
                "citation": "A heartfelt salute to 94 Barangay Nutrition Scholars and all Nutrition Champions whose selfless service nourishes Davao del Norte!"
            }
        ]
    }
]

def make_index_html(cfg):
    total = len(cfg['slides'])
    html_content = f"""<!DOCTYPE html>
<html lang="en">
<head>
  <script>if(location.protocol!=="file:"&&!location.pathname.endsWith("/")&&!location.pathname.endsWith(".html")){{location.replace(location.pathname+"/"+location.search+location.hash);}}</script>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>2026 Provincial Nutrition Congress — {cfg['title']}</title>
  <link rel="stylesheet" href="../../shared/css/floral-theme.css">
  <link rel="stylesheet" href="../../shared/css/nutrition-theme.css">
</head>
<body>

  <div class="presentation-wrapper">
    <!-- Ambient Particles Canvas -->
    <canvas id="petalsCanvas" class="petals-canvas"></canvas>

    <!-- Slide Viewport -->
    <main id="slideViewport" class="slide-viewport" role="region" aria-label="Slide presentation viewport"></main>

    <!-- Floating Control Bar -->
    <nav id="controlBar" class="control-bar" aria-label="Presentation controls">
      <button class="control-btn" onclick="window.PresentationEngine.prev()" title="Previous Slide (← / ↑)" aria-label="Previous Slide">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"></polyline></svg>
      </button>

      <div id="slideCounter" class="slide-counter" aria-live="polite">01 / {total:02d}</div>

      <button class="control-btn" onclick="window.PresentationEngine.next()" title="Next Slide (→ / Space / Enter)" aria-label="Next Slide">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
      </button>

      <span style="width: 1px; height: 20px; background: rgba(250, 198, 17, 0.4); margin: 0 4px;"></span>

      <button class="control-btn" onclick="window.PresentationEngine.toggleDrawer()" title="Order of Ceremony Grid (G / Esc)" aria-label="All Programme Segments">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
          <rect x="3" y="3" width="7" height="7"></rect>
          <rect x="14" y="3" width="7" height="7"></rect>
          <rect x="14" y="14" width="7" height="7"></rect>
          <rect x="3" y="14" width="7" height="7"></rect>
        </svg>
      </button>

      <button id="soundToggleBtn" class="control-btn" onclick="window.PresentationEngine.toggleSound()" title="Toggle Chime (M)" aria-label="Toggle Sound">
      </button>

      <button class="control-btn" onclick="window.PresentationEngine.triggerConfetti()" title="Celebratory Confetti Burst (C)" aria-label="Celebrate">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path>
        </svg>
      </button>

      <button class="control-btn" onclick="window.PresentationEngine.toggleFullscreen()" title="Fullscreen (F)" aria-label="Toggle Fullscreen">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
          <polyline points="15 3 21 3 21 9"></polyline>
          <polyline points="9 21 3 21 3 15"></polyline>
          <line x1="21" y1="3" x2="14" y2="10"></line>
          <line x1="3" y1="21" x2="10" y2="14"></line>
        </svg>
      </button>

      <a href="presenter.html" target="_blank" onclick="window.PresentationEngine.openPresenterView(event)" class="control-btn" title="Open Presenter View (P)" aria-label="Presenter View" style="text-decoration: none;">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
          <rect x="2" y="3" width="20" height="14" rx="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
          <circle cx="7" cy="8" r="1"></circle>
          <line x1="11" y1="8" x2="17" y2="8"></line>
        </svg>
      </a>

      <a href="../index.html" class="control-btn" title="Return to Nutrition Congress Hub" style="text-decoration: none;" aria-label="Nutrition Congress Hub">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
      </a>
    </nav>

    <!-- Bottom Progress Indicator -->
    <div class="progress-bar-container">
      <div id="progressBar" class="progress-bar"></div>
    </div>
  </div>

  <!-- Slide Overview Grid Drawer Modal -->
  <aside id="drawerModal" class="drawer-modal" role="dialog" aria-modal="true" aria-label="Slide Directory">
    <div class="drawer-content">
      <div class="drawer-header">
        <div class="drawer-title">✦ 2026 Provincial Nutrition Congress — {cfg['title']}</div>
        <input type="text" id="drawerSearch" class="drawer-search-input" placeholder="Search awardee, municipality, category..." aria-label="Search programme">
        <button class="drawer-close-btn" onclick="window.PresentationEngine.toggleDrawer(false)" aria-label="Close drawer">&times;</button>
      </div>
      <div id="drawerGrid" class="drawer-grid"></div>
    </div>
  </aside>

  <!-- Presentation Scripts -->
  <script>
    window.DECK_KEY = '{cfg['key']}';
    window.OFFICIAL_LOGOS = ['../../shared/assets/logos/logo-3.png', '../../shared/assets/logos/DDN.png', '../../shared/assets/logos/PHO-Logo.png'];
    window.THEME_PETAL_STOPS = [
      [[0, '153, 80, 0', 0.8], [0.5, '250, 198, 17', 0.75], [1, '255, 234, 160', 0.7]],
      [[0, '138, 13, 13', 0.75], [0.5, '198, 89, 27', 0.7], [1, '255, 223, 133', 0.7]],
      [[0, '212, 144, 0', 0.75], [0.5, '255, 223, 133', 0.65], [1, '255, 255, 255', 0.6]]
    ];
    window.PARTICLE_STYLE = 'glitter';
    window.THEME_CONFETTI = ['#FAC611', '#FFDF85', '#D49000', '#C6591B', '#8A0D0D', '#FFF8E7'];
  </script>
  <script src="slides-data.js"></script>
  <script src="../../shared/js/cloud-sync.js"></script>
  <script src="../../shared/js/presentation.js"></script>
</body>
</html>
"""
    return html_content

def make_presenter_html(cfg):
    total = len(cfg['slides'])
    html_content = f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Presenter View — Nutrition Congress 2026 {cfg['title']}</title>
  <link rel="stylesheet" href="../../shared/css/presenter-console.css">
  <link rel="stylesheet" href="../../shared/css/nutrition-theme.css">
</head>
<body>
  <div class="presenter-shell">
    <header class="presenter-topbar">
      <div class="topbar-left">
        <button class="topbar-btn topbar-btn-primary" onclick="window.PresenterConsoleApp.openProjectorWindow()" title="Launch or Focus Projector Screen on External Monitor">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
          Projector Screen ↗
        </button>
        <a href="index.html" class="topbar-btn" title="Exit to Standard Slide View">
          End Slide Show
        </a>
      </div>

      <div class="topbar-clocks">
        <div class="clock-item">
          <span class="clock-label">Elapsed</span>
          <span id="elapsedTimer" class="clock-value">00:00</span>
          <div class="timer-controls">
            <button id="timerToggleBtn" class="timer-btn" onclick="window.PresenterConsoleApp.toggleTimer()" title="Play / Pause Timer">⏸</button>
            <button class="timer-btn" onclick="window.PresenterConsoleApp.resetTimer()" title="Reset Timer">↺</button>
          </div>
        </div>
        <div class="clock-item">
          <span class="clock-label">Time</span>
          <span id="wallClock" class="clock-value">--:--:--</span>
        </div>
      </div>

      <div class="topbar-right">
        <a href="../index.html" class="topbar-btn" title="Return to Nutrition Congress Hub">
          ✦ Nutrition Congress Hub
        </a>
      </div>
    </header>

    <main class="presenter-main">
      <section class="presenter-live-pane">
        <div class="pane-header">
          <span class="pane-title">Current Slide</span>
          <span class="live-badge">Live on Projector</span>
        </div>
        <div class="presenter-live-preview">
          <iframe id="currentSlideFrame" class="slide-frame" src="index.html?mode=preview#0" title="Current Live Slide"></iframe>
        </div>
      </section>

      <section class="presenter-right-pane">
        <div class="presenter-search-box">
          <div class="search-input-wrapper">
            <svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input type="text" id="presenterSearch" class="presenter-search-input" placeholder="Search awardee, municipality, indicator... (Press /)" autocomplete="off" spellcheck="false" />
            <button id="searchClearBtn" class="search-clear-btn" title="Clear Search">✕</button>
          </div>

          <div id="searchResultsList" class="search-results-list" role="listbox"></div>
        </div>

        <div class="presenter-next-wrapper">
          <div class="pane-header">
            <span class="pane-title">Next Slide</span>
            <span id="nextSlideLabel" class="live-badge" style="background: rgba(250, 198, 17, 0.2); color: #FAC611; border: 1px solid rgba(250, 198, 17, 0.5);">Slide 2</span>
          </div>
          <div class="presenter-next-preview">
            <iframe id="nextSlideFrame" class="slide-frame" src="index.html?mode=preview#1" title="Next Slide Preview"></iframe>
          </div>
        </div>

        <div class="presenter-notes-panel">
          <div class="notes-title">Current Details & Citations</div>
          <div id="slideNotesContent">Loading slide details...</div>
        </div>
      </section>
    </main>

    <footer class="presenter-bottombar">
      <div class="nav-controls">
        <button id="prevSlideBtn" class="nav-btn" onclick="window.PresenterConsoleApp.prev()" title="Previous Slide (← / ↑)">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"></polyline></svg>
        </button>
        <span id="slideCounter" class="slide-counter">Slide 1 of --</span>
        <button id="nextSlideBtn" class="nav-btn" onclick="window.PresenterConsoleApp.next()" title="Next Slide (→ / Space / Enter)">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </button>
      </div>

      <div class="action-controls">
        <button class="action-btn" onclick="window.PresenterConsoleApp.triggerConfetti()" title="Trigger Celebration Confetti (C)">
          🎉 Confetti
        </button>
        <button class="action-btn" onclick="window.PresenterConsoleApp.triggerSound()" title="Play Award Chime (M)">
          🔔 Chime
        </button>
      </div>

      <div class="hotkeys-hint">
        <span><span class="hotkey-tag">← / →</span> Navigate</span>
        <span><span class="hotkey-tag">/</span> Search</span>
        <span><span class="hotkey-tag">C</span> Confetti</span>
        <span><span class="hotkey-tag">M</span> Chime</span>
      </div>
    </footer>
  </div>

  <script>
    window.DECK_KEY = '{cfg["key"]}';
  </script>
  <script src="slides-data.js"></script>
  <script src="../../shared/js/cloud-sync.js"></script>
  <script src="../../shared/js/presenter-console.js"></script>
</body>
</html>
"""
    return html_content

def make_slides_data_js(cfg):
    js_content = f"""(function () {{
  // Source: NUTRITION CONGRESS AWARDS.xlsx & Program Flow (2026 Provincial Nutrition Congress)
  var data = {json.dumps(cfg['slides'], indent=2)};

  window.SLIDES_DATA = data;
  window.DECKS_CATALOG = window.DECKS_CATALOG || {{}};
  window.DECKS_CATALOG['{cfg['key']}'] = data;
}})();
"""
    return js_content

if __name__ == '__main__':
    total_generated = 0
    total_slides = 0
    for cfg in DECKS_CONFIG:
        deck_dir = os.path.join(BASE_DIR, cfg['folder'])
        os.makedirs(deck_dir, exist_ok=True)

        # 1. slides-data.js
        with open(os.path.join(deck_dir, 'slides-data.js'), 'w', encoding='utf-8') as f:
            f.write(make_slides_data_js(cfg))

        # 2. index.html
        with open(os.path.join(deck_dir, 'index.html'), 'w', encoding='utf-8') as f:
            f.write(make_index_html(cfg))

        # 3. presenter.html
        with open(os.path.join(deck_dir, 'presenter.html'), 'w', encoding='utf-8') as f:
            f.write(make_presenter_html(cfg))

        slides_count = len(cfg['slides'])
        total_slides += slides_count
        total_generated += 1
        print(f"Generated deck '{cfg['folder']}': {slides_count} slides.")

    print(f"\nAll {total_generated} Nutrition Congress decks generated successfully! Total slides: {total_slides}")
