import os
import json

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

DECKS_CONFIG = [
    # ----------------------------------------------------
    # DECK 0: PROGRAM FLOW
    # ----------------------------------------------------
    {
        "folder": "00-program-flow",
        "key": "chw-00-program-flow",
        "title": "Program Flow & Ceremonies",
        "category": "PROGRAM FLOW",
        "subTitle": "Community Health Workers Congress 2026 Official Program Flow",
        "slides": [
            {
                "id": 0,
                "type": "title",
                "event": "COMMUNITY HEALTH WORKERS 2026",
                "subEvent": "Province of Davao del Norte · Provincial Health Office",
                "title": "COMMUNITY HEALTH WORKERS CONGRESS 2026",
                "category": "PROGRAM FLOW",
                "citation": "“Digitalisasyon ng Kalusugan: Kaagapay sa Kalinaw ug Kalamboan”\nNovember 24 & 25, 2026 · Carmen Gymnasium, Carmen, Davao del Norte"
            },
            {
                "id": 1,
                "type": "awardee",
                "title": "OPENING PRELIMINARIES",
                "category": "ORDER OF CEREMONY",
                "subtitle": "Official Commencement of Congress",
                "categoryTag": "PART I · 9:00 AM",
                "citations": [
                    "Ecumenical Invocation & Prayer",
                    "Philippine National Anthem (AVP)",
                    "Davao del Norte Hymn & March",
                    "Recognition of Delegates"
                ]
            },
            {
                "id": 2,
                "type": "awardee",
                "title": "CHRISTY CAROLE B. SANICO, RGC",
                "category": "INVOCATION & PRAYER",
                "subtitle": "Population Program Officer II",
                "department": "Provincial Health Office · Province of Davao del Norte",
                "categoryTag": "OPENING PRAYER"
            },
            {
                "id": 3,
                "type": "awardee",
                "title": "PHILIPPINE NATIONAL ANTHEM",
                "category": "ORDER OF CEREMONY",
                "subtitle": "Audio Visual Presentation",
                "department": "Province of Davao del Norte",
                "categoryTag": "NATIONAL ANTHEM"
            },
            {
                "id": 4,
                "type": "awardee",
                "title": "DR. ALFREDO A. LACERONA",
                "category": "OPENING REMARKS",
                "subtitle": "Provincial Health Officer II",
                "department": "Provincial Health Office · Province of Davao del Norte",
                "categoryTag": "OPENING REMARKS",
                "image": "../../shared/assets/speakers/ALFREDO A. LACERONA.png"
            },
            {
                "id": 5,
                "type": "awardee",
                "title": "DR. VERGEL JAY T. BAUTISTA",
                "category": "MESSAGE",
                "subtitle": "Provincial Health Team Leader",
                "department": "Department of Health - Davao del Norte Field Office",
                "categoryTag": "SPECIAL MESSAGE"
            },
            {
                "id": 6,
                "type": "awardee",
                "title": "MS. JINKY C. ESPINO",
                "category": "BHW PROGRAM UPDATES",
                "subtitle": "Regional BHW Program Manager",
                "department": "Department of Health - Davao Center for Health Development (DOH-DCHD XI)",
                "categoryTag": "BHW UPDATES"
            },
            {
                "id": 7,
                "type": "awardee",
                "title": "HON. CLARICE T. JUBAHIB",
                "category": "GUEST SPEAKER",
                "subtitle": "Vice Governor · Province of Davao del Norte",
                "department": "Province of Davao del Norte",
                "categoryTag": "GUEST OF HONOR",
                "image": "../../shared/assets/speakers/HON. CLARICE JUBAHIB.jpg"
            },
            {
                "id": 8,
                "type": "awardee",
                "title": "OATH TAKING OF OFFICERS",
                "category": "CEREMONIAL SWEARING-IN",
                "subtitle": "Barangay Health Workers (BHW) · Barangay Nutrition Scholars (BNS) · Barangay Sanitary Inspectors (BSI)",
                "department": "Province of Davao del Norte",
                "categoryTag": "OATH OF OFFICE"
            },
            {
                "id": 9,
                "type": "awardee",
                "title": "HON. EDWIN I. JUBAHIB, MMPA",
                "category": "GOVERNOR'S MESSAGE",
                "subtitle": "Provincial Governor · Province of Davao del Norte",
                "department": "Province of Davao del Norte",
                "categoryTag": "KEYNOTE MESSAGE",
                "image": "../../shared/assets/speakers/edwin jubahib.png"
            },
            {
                "id": 10,
                "type": "awardee",
                "title": "RECOGNITION OF LOYALTY AWARDS",
                "category": "LOYALTY & SERVICE AWARDS",
                "subtitle": "Honoring Years of Dedicated Service in Community Health & Nutrition",
                "department": "Provincial Health Office · Province of Davao del Norte",
                "categoryTag": "LOYALTY AWARDS"
            },
            {
                "id": 11,
                "type": "awardee",
                "title": "MR. FLOR B. LUCAS III",
                "category": "PRESENTATION OF CRITERIA",
                "subtitle": "Population Program Officer IV · Top Performing in DHIMS",
                "department": "Provincial Health Office · Province of Davao del Norte",
                "categoryTag": "DHIMS CRITERIA"
            },
            {
                "id": 12,
                "type": "awardee",
                "title": "AWARDING OF TOP PERFORMING DHIMS",
                "category": "CEREMONY PROPER",
                "subtitle": "Purok Category · Barangay Category · LGU Category",
                "department": "Davao del Norte Health Information Management System (DHIMS)",
                "categoryTag": "AWARDING CEREMONY",
                "citations": [
                    "Purok Category (<500 & ≥500 Population)",
                    "Barangay Category (Household Profiling & Timeliness)",
                    "LGU Category Performance Recognition"
                ]
            },
            {
                "id": 13,
                "type": "awardee",
                "title": "RUBY ROSAL, RMT",
                "category": "PRESENTATION OF CRITERIA",
                "subtitle": "Medical Technologist II · Zumba Contest Criteria",
                "department": "Provincial Health Office · Province of Davao del Norte",
                "categoryTag": "ZUMBA CRITERIA"
            },
            {
                "id": 14,
                "type": "awardee",
                "title": "AWARDING OF WINNERS: ZUMBA CONTEST",
                "category": "COMPETITION AWARDS",
                "subtitle": "Celebration of Energy, Wellness and Teamwork",
                "department": "Community Health Workers Congress 2026",
                "categoryTag": "ZUMBA CHAMPIONS"
            },
            {
                "id": 15,
                "type": "awardee",
                "title": "DR. JOSEPHINE THERESE P. PARREÑAS",
                "category": "INSPIRATIONAL MESSAGE",
                "subtitle": "Provincial Health Officer I",
                "department": "Provincial Health Office · Province of Davao del Norte",
                "categoryTag": "INSPIRATIONAL MESSAGE",
                "image": "../../shared/assets/speakers/JOSEPHINE THERESE P. PARRENAS.png"
            },
            {
                "id": 16,
                "type": "awardee",
                "title": "DORIS S. SOBREMISANA, RN, MAN",
                "category": "CLOSING REMARKS",
                "subtitle": "Supervising Health Program Officer / OIC-SAO",
                "department": "Provincial Health Office · Province of Davao del Norte",
                "categoryTag": "CLOSING REMARKS"
            },
            {
                "id": 17,
                "type": "closing",
                "title": "DAGHANG SALAMAT UG MABUHAY ANG ATING MGA COMMUNITY HEALTH WORKERS!",
                "subtitle": "COMMUNITY HEALTH WORKERS CONGRESS 2026",
                "citation": "“Digitalisasyon ng Kalusugan: Kaagapay sa Kalinaw ug Kalamboan”\nProvince of Davao del Norte · Provincial Health Office"
            }
        ]
    },

    # ----------------------------------------------------
    # DECK 1: TOP PERFORMING PUROK (NOV 24)
    # ----------------------------------------------------
    {
        "folder": "01-top-performing-purok-nov24",
        "key": "chw-01-top-performing-purok-nov24",
        "title": "Top Performing Purok (Nov 24)",
        "category": "PUROK AWARDEES",
        "subTitle": "DHIMS Household Profiling Awards · November 24, 2026",
        "slides": [
            {
                "id": 0,
                "type": "title",
                "event": "COMMUNITY HEALTH WORKERS 2026",
                "subEvent": "Province of Davao del Norte · Provincial Health Office",
                "title": "TOP PERFORMING PUROK",
                "category": "NOVEMBER 24, 2026",
                "citation": "In recognition of outstanding achievement in Household Profiling under the Davao del Norte Health Information Management System (DHIMS), January to October 2026.\nCarmen Gymnasium, Davao del Norte"
            },
            {
                "id": 1,
                "type": "awardee",
                "title": "LEONORA T. CANAYA",
                "category": "TOP PERFORMING PUROK",
                "subtitle": "PUROK 14 · Barangay Mesaoy, Municipality of New Corella",
                "department": "Davao del Norte Health Information Management System",
                "categoryTag": "BELOW 500 POPULATION",
                "image": "../../shared/assets/lgu-logos/new-corella.png",
                "isLogo": True,
                "citations": [
                    "102.36% Accomplishment Rate",
                    "Household Profiling (Jan – Oct 2026)"
                ],
                "citation": "In recognition of its outstanding achievement in Household Profiling under the Davao del Norte Health Information Management System, attaining 102.36% Accomplishment Rate from January to October 2026."
            },
            {
                "id": 2,
                "type": "awardee",
                "title": "ANGELES C. MANAIT",
                "category": "TOP PERFORMING PUROK",
                "subtitle": "PUROK 10C-1A · Barangay Maniki, Municipality of Kapalong",
                "department": "Davao del Norte Health Information Management System",
                "categoryTag": "500 AND ABOVE POPULATION",
                "image": "../../shared/assets/lgu-logos/kapalong.png",
                "isLogo": True,
                "citations": [
                    "101.38% Accomplishment Rate",
                    "Household Profiling (Jan – Oct 2026)"
                ],
                "citation": "In recognition of its outstanding achievement in Household Profiling under the Davao del Norte Health Information Management System, attaining 101.38% Accomplishment Rate from January to October 2026."
            },
            {
                "id": 3,
                "type": "awardee",
                "title": "MARY GRACE M. CONCHA",
                "category": "TOP PERFORMING PUROK",
                "subtitle": "PUROK MAXIMINA · Barangay Magugpo East, City of Tagum",
                "department": "Davao del Norte Health Information Management System",
                "categoryTag": "500 AND ABOVE POPULATION",
                "image": "../../shared/assets/lgu-logos/tagum.png",
                "isLogo": True,
                "citations": [
                    "104.29% Accomplishment Rate",
                    "Household Profiling (Jan – Oct 2026)"
                ],
                "citation": "In recognition of its outstanding achievement in Household Profiling under the Davao del Norte Health Information Management System, attaining 104.29% Accomplishment Rate from January to October 2026."
            },
            {
                "id": 4,
                "type": "awardee",
                "title": "ROCELYN O. LAGROSAS",
                "category": "TOP PERFORMING PUROK",
                "subtitle": "PUROK 10C-1B · Barangay Maniki, Municipality of Kapalong",
                "department": "Davao del Norte Health Information Management System",
                "categoryTag": "500 AND ABOVE POPULATION",
                "image": "../../shared/assets/lgu-logos/kapalong.png",
                "isLogo": True,
                "citations": [
                    "100.64% Accomplishment Rate",
                    "Household Profiling (Jan – Oct 2026)"
                ],
                "citation": "In recognition of its outstanding achievement in Household Profiling under the Davao del Norte Health Information Management System, attaining 100.64% Accomplishment Rate from January to October 2026."
            },
            {
                "id": 5,
                "type": "closing",
                "title": "CONGRATULATIONS TO ALL TOP PERFORMING PUROKS!",
                "subtitle": "COMMUNITY HEALTH VOLUNTEERS CONGRESS 2026",
                "citation": "Your dedication and commitment to excellence in health information management have significantly contributed to providing accurate and reliable health data for a healthier Davao del Norte."
            }
        ]
    },

    # ----------------------------------------------------
    # DECK 2: TOP PERFORMING BARANGAY (NOV 24)
    # ----------------------------------------------------
    {
        "folder": "02-top-performing-barangay-nov24",
        "key": "chw-02-top-performing-barangay-nov24",
        "title": "Top Performing Barangay (Nov 24)",
        "category": "BARANGAY AWARDEES",
        "subTitle": "DHIMS Household Profiling Awards · November 24, 2026",
        "slides": [
            {
                "id": 0,
                "type": "title",
                "event": "COMMUNITY HEALTH WORKERS 2026",
                "subEvent": "Province of Davao del Norte · Provincial Health Office",
                "title": "TOP PERFORMING BARANGAY",
                "category": "NOVEMBER 24, 2026",
                "citation": "In recognition of outstanding achievement in Household Profiling under the Davao del Norte Health Information Management System (DHIMS), January to October 2026.\nCarmen Gymnasium, Davao del Norte"
            },
            {
                "id": 1,
                "type": "awardee",
                "title": "BARANGAY LUNA",
                "category": "TOP PERFORMING BARANGAY",
                "subtitle": "Municipality of Kapalong",
                "department": "Davao del Norte Health Information Management System",
                "categoryTag": "TOP PERFORMING BARANGAY",
                "image": "../../shared/assets/lgu-logos/kapalong.png",
                "isLogo": True,
                "citations": [
                    "112.36% Accomplishment Rate",
                    "17.9 Days Timeliness",
                    "Household Profiling (Jan – Oct 2026)"
                ],
                "citation": "In recognition of its outstanding achievement in Household Profiling under the Davao del Norte Health Information Management System, attaining 112.36% Accomplishment Rate and 17.9 Days Timeliness from January to October 2026."
            },
            {
                "id": 2,
                "type": "awardee",
                "title": "BARANGAY CARCOR",
                "category": "TOP PERFORMING BARANGAY",
                "subtitle": "Municipality of New Corella",
                "department": "Davao del Norte Health Information Management System",
                "categoryTag": "TOP PERFORMING BARANGAY",
                "image": "../../shared/assets/lgu-logos/new-corella.png",
                "isLogo": True,
                "citations": [
                    "100% Accomplishment Rate",
                    "20.5 Days Timeliness",
                    "Household Profiling (Jan – Oct 2026)"
                ],
                "citation": "In recognition of its outstanding achievement in Household Profiling under the Davao del Norte Health Information Management System, attaining 100% Accomplishment Rate and 20.5 Days Timeliness from January to October 2026."
            },
            {
                "id": 3,
                "type": "awardee",
                "title": "BARANGAY SAN JOSE",
                "category": "TOP PERFORMING BARANGAY",
                "subtitle": "Municipality of New Corella",
                "department": "Davao del Norte Health Information Management System",
                "categoryTag": "TOP PERFORMING BARANGAY",
                "image": "../../shared/assets/lgu-logos/new-corella.png",
                "isLogo": True,
                "citations": [
                    "100.02% Accomplishment Rate",
                    "37.8 Days Timeliness",
                    "Household Profiling (Jan – Oct 2026)"
                ],
                "citation": "In recognition of its outstanding achievement in Household Profiling under the Davao del Norte Health Information Management System, attaining 100.02% Accomplishment Rate and 37.8 Days Timeliness from January to October 2026."
            },
            {
                "id": 4,
                "type": "awardee",
                "title": "BARANGAY SAN AGUSTIN",
                "category": "PERFORMING BARANGAY",
                "subtitle": "City of Tagum",
                "department": "Davao del Norte Health Information Management System",
                "categoryTag": "PERFORMING BARANGAY",
                "image": "../../shared/assets/lgu-logos/tagum.png",
                "isLogo": True,
                "citations": [
                    "109.98% Accomplishment Rate",
                    "15.3 Days Timeliness",
                    "Household Profiling (Jan – Oct 2026)"
                ],
                "citation": "In recognition of its outstanding achievement in Household Profiling under the Davao del Norte Health Information Management System, attaining 109.98% Accomplishment Rate and 15.3 Days Timeliness from January to October 2026."
            },
            {
                "id": 5,
                "type": "awardee",
                "title": "BARANGAY EL SALVADOR",
                "category": "PERFORMING BARANGAY",
                "subtitle": "Municipality of New Corella",
                "department": "Davao del Norte Health Information Management System",
                "categoryTag": "PERFORMING BARANGAY",
                "image": "../../shared/assets/lgu-logos/new-corella.png",
                "isLogo": True,
                "citations": [
                    "100% Accomplishment Rate",
                    "20.3 Days Timeliness",
                    "Household Profiling (Jan – Oct 2026)"
                ],
                "citation": "In recognition of its outstanding achievement in Household Profiling under the Davao del Norte Health Information Management System, attaining 100% Accomplishment Rate and 20.3 Days Timeliness from January to October 2026."
            },
            {
                "id": 6,
                "type": "closing",
                "title": "CONGRATULATIONS TO ALL TOP PERFORMING BARANGAYS!",
                "subtitle": "COMMUNITY HEALTH VOLUNTEERS CONGRESS 2026",
                "citation": "Your dedication and commitment to excellence in health information management have significantly contributed to providing accurate and reliable health data for a healthier Davao del Norte."
            }
        ]
    },

    # ----------------------------------------------------
    # DECK 3: TOP PERFORMING LGU (NOV 24)
    # ----------------------------------------------------
    {
        "folder": "03-top-performing-lgu-nov24",
        "key": "chw-03-top-performing-lgu-nov24",
        "title": "Top Performing LGU (Nov 24)",
        "category": "LGU AWARDEES",
        "subTitle": "DHIMS Household Profiling Awards · November 24, 2026",
        "slides": [
            {
                "id": 0,
                "type": "title",
                "event": "COMMUNITY HEALTH WORKERS 2026",
                "subEvent": "Province of Davao del Norte · Provincial Health Office",
                "title": "TOP PERFORMING LGU",
                "category": "NOVEMBER 24, 2026",
                "citation": "In recognition of outstanding achievement in Household Profiling under the Davao del Norte Health Information Management System (DHIMS), January to October 2026.\nCarmen Gymnasium, Davao del Norte"
            },
            {
                "id": 1,
                "type": "awardee",
                "title": "MUNICIPALITY OF NEW CORELLA",
                "category": "PERFORMING LGU",
                "subtitle": "Province of Davao del Norte",
                "department": "Davao del Norte Health Information Management System",
                "categoryTag": "PERFORMING LGU",
                "image": "../../shared/assets/lgu-logos/new-corella.png",
                "isLogo": True,
                "citations": [
                    "91.48% Accomplishment Rate",
                    "46.25% On-time Rate",
                    "Household Profiling (Jan – Oct 2026)"
                ],
                "citation": "In recognition of its outstanding achievement in Household Profiling under the Davao del Norte Health Information Management System, attaining 91.48% Accomplishment Rate and 46.25% On-time Rate from January to October 2026."
            },
            {
                "id": 2,
                "type": "awardee",
                "title": "CITY OF TAGUM",
                "category": "SPECIAL AWARD",
                "subtitle": "Province of Davao del Norte",
                "department": "Davao del Norte Health Information Management System",
                "categoryTag": "SPECIAL AWARD",
                "image": "../../shared/assets/lgu-logos/tagum.png",
                "isLogo": True,
                "citations": [
                    "83.80% Accomplishment Rate",
                    "10.87% On-time Rate",
                    "Household Profiling (Jan – Oct 2026)"
                ],
                "citation": "In recognition of its outstanding achievement in Household Profiling under the Davao del Norte Health Information Management System, attaining 83.80% Accomplishment Rate and 10.87% On-time Rate from January to October 2026."
            },
            {
                "id": 3,
                "type": "closing",
                "title": "CONGRATULATIONS TO OUR CHAMPION LGUs!",
                "subtitle": "COMMUNITY HEALTH VOLUNTEERS CONGRESS 2026",
                "citation": "Your dedication and commitment to excellence in health information management have significantly contributed to providing accurate and reliable health data for a healthier Davao del Norte."
            }
        ]
    },

    # ----------------------------------------------------
    # DECK 4: ZUMBA PERFORMER
    # ----------------------------------------------------
    {
        "folder": "04-zumba-performer",
        "key": "chw-04-zumba-performer",
        "title": "Zumba Performer",
        "category": "ZUMBA DANCE COMPETITION",
        "subTitle": "Community Health Workers Congress 2026 Zumba Dance Contest Contingents",
        "slides": [
            {
                "id": 0,
                "type": "title",
                "event": "COMMUNITY HEALTH WORKERS 2026",
                "subEvent": "Province of Davao del Norte · Provincial Health Office",
                "title": "ZUMBA DANCE COMPETITION",
                "category": "OFFICIAL CONTINGENTS & PERFORMERS",
                "citation": "“Digitalisasyon ng Kalusugan: Kaagapay sa Kalinaw ug Kalamboan”\nNovember 24 & 25, 2026 · Carmen Gymnasium, Carmen, Davao del Norte"
            },
            {
                "id": 1,
                "type": "awardee",
                "title": "MUNICIPALITY OF ASUNCION",
                "category": "ZUMBA DANCE COMPETITION",
                "subtitle": "Community Health Workers Dance Contingent",
                "department": "Province of Davao del Norte",
                "categoryTag": "ZUMBA PERFORMER",
                "image": "../../shared/assets/lgu-logos/asuncion.png",
                "isLogo": True
            },
            {
                "id": 2,
                "type": "awardee",
                "title": "MUNICIPALITY OF BRAULIO E. DUJALI",
                "category": "ZUMBA DANCE COMPETITION",
                "subtitle": "Community Health Workers Dance Contingent",
                "department": "Province of Davao del Norte",
                "categoryTag": "ZUMBA PERFORMER",
                "image": "../../shared/assets/lgu-logos/dujali.png",
                "isLogo": True
            },
            {
                "id": 3,
                "type": "awardee",
                "title": "MUNICIPALITY OF CARMEN",
                "category": "ZUMBA DANCE COMPETITION",
                "subtitle": "Community Health Workers Dance Contingent",
                "department": "Province of Davao del Norte",
                "categoryTag": "ZUMBA PERFORMER",
                "image": "../../shared/assets/lgu-logos/carmen.png",
                "isLogo": True
            },
            {
                "id": 4,
                "type": "awardee",
                "title": "MUNICIPALITY OF KAPALONG",
                "category": "ZUMBA DANCE COMPETITION",
                "subtitle": "Community Health Workers Dance Contingent",
                "department": "Province of Davao del Norte",
                "categoryTag": "ZUMBA PERFORMER",
                "image": "../../shared/assets/lgu-logos/kapalong.png",
                "isLogo": True
            },
            {
                "id": 5,
                "type": "awardee",
                "title": "MUNICIPALITY OF NEW CORELLA",
                "category": "ZUMBA DANCE COMPETITION",
                "subtitle": "Community Health Workers Dance Contingent",
                "department": "Province of Davao del Norte",
                "categoryTag": "ZUMBA PERFORMER",
                "image": "../../shared/assets/lgu-logos/new-corella.png",
                "isLogo": True
            },
            {
                "id": 6,
                "type": "awardee",
                "title": "CITY OF PANABO",
                "category": "ZUMBA DANCE COMPETITION",
                "subtitle": "Community Health Workers Dance Contingent",
                "department": "Province of Davao del Norte",
                "categoryTag": "ZUMBA PERFORMER",
                "image": "../../shared/assets/lgu-logos/panabo.png",
                "isLogo": True
            },
            {
                "id": 7,
                "type": "awardee",
                "title": "ISLAND GARDEN CITY OF SAMAL",
                "category": "ZUMBA DANCE COMPETITION",
                "subtitle": "Community Health Workers Dance Contingent",
                "department": "Province of Davao del Norte",
                "categoryTag": "ZUMBA PERFORMER",
                "image": "../../shared/assets/lgu-logos/igacos.png",
                "isLogo": True
            },
            {
                "id": 8,
                "type": "awardee",
                "title": "MUNICIPALITY OF SAN ISIDRO (SAWATA)",
                "category": "ZUMBA DANCE COMPETITION",
                "subtitle": "Community Health Workers Dance Contingent",
                "department": "Province of Davao del Norte",
                "categoryTag": "ZUMBA PERFORMER",
                "image": "../../shared/assets/lgu-logos/sawata.png",
                "isLogo": True
            },
            {
                "id": 9,
                "type": "awardee",
                "title": "MUNICIPALITY OF SANTO TOMAS",
                "category": "ZUMBA DANCE COMPETITION",
                "subtitle": "Community Health Workers Dance Contingent",
                "department": "Province of Davao del Norte",
                "categoryTag": "ZUMBA PERFORMER",
                "image": "../../shared/assets/lgu-logos/sto-tomas.png",
                "isLogo": True
            },
            {
                "id": 10,
                "type": "awardee",
                "title": "CITY OF TAGUM",
                "category": "ZUMBA DANCE COMPETITION",
                "subtitle": "Community Health Workers Dance Contingent",
                "department": "Province of Davao del Norte",
                "categoryTag": "ZUMBA PERFORMER",
                "image": "../../shared/assets/lgu-logos/tagum.png",
                "isLogo": True
            },
            {
                "id": 11,
                "type": "awardee",
                "title": "MUNICIPALITY OF TALAINGOD",
                "category": "ZUMBA DANCE COMPETITION",
                "subtitle": "Community Health Workers Dance Contingent",
                "department": "Province of Davao del Norte",
                "categoryTag": "ZUMBA PERFORMER",
                "image": "../../shared/assets/lgu-logos/talaingod.png",
                "isLogo": True
            },
            {
                "id": 12,
                "type": "closing",
                "title": "DAGHANG SALAMAT TO ALL OUR ZUMBA PERFORMERS!",
                "subtitle": "COMMUNITY HEALTH WORKERS CONGRESS 2026",
                "citation": "“Digitalisasyon ng Kalusugan: Kaagapay sa Kalinaw ug Kalamboan”\nProvince of Davao del Norte · Provincial Health Office"
            }
        ]
    },

    # ----------------------------------------------------
    # DECK 5: TOP PERFORMING PUROK (NOV 25)
    # ----------------------------------------------------
    {
        "folder": "05-top-performing-purok-nov25",
        "key": "chw-05-top-performing-purok-nov25",
        "title": "Top Performing Purok (Nov 25)",
        "category": "PUROK AWARDEES",
        "subTitle": "DHIMS Household Profiling Awards · November 25, 2026",
        "slides": [
            {
                "id": 0,
                "type": "title",
                "event": "COMMUNITY HEALTH WORKERS 2026",
                "subEvent": "Province of Davao del Norte · Provincial Health Office",
                "title": "TOP PERFORMING PUROK",
                "category": "NOVEMBER 25, 2026",
                "citation": "In recognition of outstanding achievement in Household Profiling under the Davao del Norte Health Information Management System (DHIMS), January to October 2026.\nCarmen Gymnasium, Davao del Norte"
            },
            {
                "id": 1,
                "type": "awardee",
                "title": "REMINDA S. GOMEZ",
                "category": "TOP PERFORMING PUROK",
                "subtitle": "PUROK BEAR BRAND · Barangay New Pandan, City of Panabo",
                "department": "Davao del Norte Health Information Management System",
                "categoryTag": "BELOW 500 POPULATION",
                "image": "../../shared/assets/lgu-logos/panabo.png",
                "isLogo": True,
                "citations": [
                    "100% Accomplishment Rate",
                    "Household Profiling (Jan – Oct 2026)"
                ],
                "citation": "In recognition of its outstanding achievement in Household Profiling under the Davao del Norte Health Information Management System, attaining 100% Accomplishment Rate from January to October 2026."
            },
            {
                "id": 2,
                "type": "awardee",
                "title": "LENE D. TRIÑO",
                "category": "TOP PERFORMING PUROK",
                "subtitle": "PUROK 1B-1 · Barangay La Libertad, Municipality of Sto. Tomas",
                "department": "Davao del Norte Health Information Management System",
                "categoryTag": "BELOW 500 POPULATION",
                "image": "../../shared/assets/lgu-logos/sto-tomas.png",
                "isLogo": True,
                "citations": [
                    "100.90% Accomplishment Rate",
                    "Household Profiling (Jan – Oct 2026)"
                ],
                "citation": "In recognition of its outstanding achievement in Household Profiling under the Davao del Norte Health Information Management System, attaining 100.90% Accomplishment Rate from January to October 2026."
            },
            {
                "id": 3,
                "type": "awardee",
                "title": "FE E. BANAWAN",
                "category": "TOP PERFORMING PUROK",
                "subtitle": "PUROK SEREGUELLAS · Barangay Cagangohan, City of Panabo",
                "department": "Davao del Norte Health Information Management System",
                "categoryTag": "BELOW 500 POPULATION",
                "image": "../../shared/assets/lgu-logos/panabo.png",
                "isLogo": True,
                "citations": [
                    "100% Accomplishment Rate",
                    "Household Profiling (Jan – Oct 2026)"
                ],
                "citation": "In recognition of its outstanding achievement in Household Profiling under the Davao del Norte Health Information Management System, attaining 100% Accomplishment Rate from January to October 2026."
            },
            {
                "id": 4,
                "type": "awardee",
                "title": "NEDY L. CORDOVEZ",
                "category": "TOP PERFORMING PUROK",
                "subtitle": "PUROK 2 · Barangay San Nicolas, City of Panabo",
                "department": "Davao del Norte Health Information Management System",
                "categoryTag": "BELOW 500 POPULATION",
                "image": "../../shared/assets/lgu-logos/panabo.png",
                "isLogo": True,
                "citations": [
                    "102.92% Accomplishment Rate",
                    "Household Profiling (Jan – Oct 2026)"
                ],
                "citation": "In recognition of its outstanding achievement in Household Profiling under the Davao del Norte Health Information Management System, attaining 102.92% Accomplishment Rate from January to October 2026."
            },
            {
                "id": 5,
                "type": "awardee",
                "title": "ISIDRA A. LLANOS",
                "category": "TOP PERFORMING PUROK",
                "subtitle": "PUROK CARNATION · Barangay New Pandan, City of Panabo",
                "department": "Davao del Norte Health Information Management System",
                "categoryTag": "500 AND ABOVE POPULATION",
                "image": "../../shared/assets/lgu-logos/panabo.png",
                "isLogo": True,
                "citations": [
                    "100% Accomplishment Rate",
                    "Household Profiling (Jan – Oct 2026)"
                ],
                "citation": "In recognition of its outstanding achievement in Household Profiling under the Davao del Norte Health Information Management System, attaining 100% Accomplishment Rate from January to October 2026."
            },
            {
                "id": 6,
                "type": "awardee",
                "title": "EXCY M. YAP",
                "category": "TOP PERFORMING PUROK",
                "subtitle": "PUROK ALACTA · Barangay New Pandan, City of Panabo",
                "department": "Davao del Norte Health Information Management System",
                "categoryTag": "500 AND ABOVE POPULATION",
                "image": "../../shared/assets/lgu-logos/panabo.png",
                "isLogo": True,
                "citations": [
                    "100% Accomplishment Rate",
                    "Household Profiling (Jan – Oct 2026)"
                ],
                "citation": "In recognition of its outstanding achievement in Household Profiling under the Davao del Norte Health Information Management System, attaining 100% Accomplishment Rate from January to October 2026."
            },
            {
                "id": 7,
                "type": "awardee",
                "title": "HANIELANE R. PAGCAS",
                "category": "TOP PERFORMING PUROK",
                "subtitle": "PUROK UBAS · Barangay Cagangohan, City of Panabo",
                "department": "Davao del Norte Health Information Management System",
                "categoryTag": "500 AND ABOVE POPULATION",
                "image": "../../shared/assets/lgu-logos/panabo.png",
                "isLogo": True,
                "citations": [
                    "100% Accomplishment Rate",
                    "Household Profiling (Jan – Oct 2026)"
                ],
                "citation": "In recognition of its outstanding achievement in Household Profiling under the Davao del Norte Health Information Management System, attaining 100% Accomplishment Rate from January to October 2026."
            },
            {
                "id": 8,
                "type": "awardee",
                "title": "ARLENE G. LIMPIO",
                "category": "TOP PERFORMING PUROK",
                "subtitle": "PUROK 6 · Barangay New Katipunan, Municipality of Sto. Tomas",
                "department": "Davao del Norte Health Information Management System",
                "categoryTag": "500 AND ABOVE POPULATION",
                "image": "../../shared/assets/lgu-logos/sto-tomas.png",
                "isLogo": True,
                "citations": [
                    "107.82% Accomplishment Rate",
                    "Household Profiling (Jan – Oct 2026)"
                ],
                "citation": "In recognition of its outstanding achievement in Household Profiling under the Davao del Norte Health Information Management System, attaining 107.82% Accomplishment Rate from January to October 2026."
            },
            {
                "id": 9,
                "type": "awardee",
                "title": "EVELYN V. GALAN",
                "category": "TOP PERFORMING PUROK",
                "subtitle": "PUROK 1-1 · Barangay Kinamayan, Municipality of Sto. Tomas",
                "department": "Davao del Norte Health Information Management System",
                "categoryTag": "500 AND ABOVE POPULATION",
                "image": "../../shared/assets/lgu-logos/sto-tomas.png",
                "isLogo": True,
                "citations": [
                    "102.87% Accomplishment Rate",
                    "Household Profiling (Jan – Oct 2026)"
                ],
                "citation": "In recognition of its outstanding achievement in Household Profiling under the Davao del Norte Health Information Management System, attaining 102.87% Accomplishment Rate from January to October 2026."
            },
            {
                "id": 10,
                "type": "awardee",
                "title": "AVELINA K. SALVADOR",
                "category": "TOP PERFORMING PUROK",
                "subtitle": "PUROK 6A · Barangay Tibal-og, Municipality of Sto. Tomas",
                "department": "Davao del Norte Health Information Management System",
                "categoryTag": "500 AND ABOVE POPULATION",
                "image": "../../shared/assets/lgu-logos/sto-tomas.png",
                "isLogo": True,
                "citations": [
                    "101.51% Accomplishment Rate",
                    "Household Profiling (Jan – Oct 2026)"
                ],
                "citation": "In recognition of its outstanding achievement in Household Profiling under the Davao del Norte Health Information Management System, attaining 101.51% Accomplishment Rate from January to October 2026."
            },
            {
                "id": 11,
                "type": "awardee",
                "title": "MILA O. OMANDAC",
                "category": "TOP PERFORMING PUROK",
                "subtitle": "PUROK 5 · Barangay Southern Davao, City of Panabo",
                "department": "Davao del Norte Health Information Management System",
                "categoryTag": "500 AND ABOVE POPULATION",
                "image": "../../shared/assets/lgu-logos/panabo.png",
                "isLogo": True,
                "citations": [
                    "101.04% Accomplishment Rate",
                    "Household Profiling (Jan – Oct 2026)"
                ],
                "citation": "In recognition of its outstanding achievement in Household Profiling under the Davao del Norte Health Information Management System, attaining 101.04% Accomplishment Rate from January to October 2026."
            },
            {
                "id": 12,
                "type": "closing",
                "title": "CONGRATULATIONS TO ALL TOP PERFORMING PUROKS!",
                "subtitle": "COMMUNITY HEALTH VOLUNTEERS CONGRESS 2026",
                "citation": "Your dedication and commitment to excellence in health information management have significantly contributed to providing accurate and reliable health data for a healthier Davao del Norte."
            }
        ]
    },

    # ----------------------------------------------------
    # DECK 6: TOP PERFORMING BARANGAY (NOV 25)
    # ----------------------------------------------------
    {
        "folder": "06-top-performing-barangay-nov25",
        "key": "chw-06-top-performing-barangay-nov25",
        "title": "Top Performing Barangay (Nov 25)",
        "category": "BARANGAY AWARDEES",
        "subTitle": "DHIMS Household Profiling Awards · November 25, 2026",
        "slides": [
            {
                "id": 0,
                "type": "title",
                "event": "COMMUNITY HEALTH WORKERS 2026",
                "subEvent": "Province of Davao del Norte · Provincial Health Office",
                "title": "TOP PERFORMING BARANGAY",
                "category": "NOVEMBER 25, 2026",
                "citation": "In recognition of outstanding achievement in Household Profiling under the Davao del Norte Health Information Management System (DHIMS), January to October 2026.\nCarmen Gymnasium, Davao del Norte"
            },
            {
                "id": 1,
                "type": "awardee",
                "title": "BARANGAY COGON",
                "category": "TOP PERFORMING BARANGAY",
                "subtitle": "Talicud, Kaputian District · Island Garden City of Samal",
                "department": "Davao del Norte Health Information Management System",
                "categoryTag": "TOP PERFORMING BARANGAY",
                "image": "../../shared/assets/lgu-logos/igacos.png",
                "isLogo": True,
                "citations": [
                    "104.72% Accomplishment Rate",
                    "34.7 Days Timeliness",
                    "Household Profiling (Jan – Oct 2026)"
                ],
                "citation": "In recognition of its outstanding achievement in Household Profiling under the Davao del Norte Health Information Management System, attaining 104.72% Accomplishment Rate and 34.7 Days Timeliness from January to October 2026."
            },
            {
                "id": 2,
                "type": "awardee",
                "title": "BARANGAY KIOTOY",
                "category": "TOP PERFORMING BARANGAY",
                "subtitle": "City of Panabo",
                "department": "Davao del Norte Health Information Management System",
                "categoryTag": "TOP PERFORMING BARANGAY",
                "image": "../../shared/assets/lgu-logos/panabo.png",
                "isLogo": True,
                "citations": [
                    "100% Accomplishment Rate",
                    "42.2 Days Timeliness",
                    "Household Profiling (Jan – Oct 2026)"
                ],
                "citation": "In recognition of its outstanding achievement in Household Profiling under the Davao del Norte Health Information Management System, attaining 100% Accomplishment Rate and 42.2 Days Timeliness from January to October 2026."
            },
            {
                "id": 3,
                "type": "awardee",
                "title": "BARANGAY UPPER LICANAN",
                "category": "TOP PERFORMING BARANGAY",
                "subtitle": "City of Panabo",
                "department": "Davao del Norte Health Information Management System",
                "categoryTag": "TOP PERFORMING BARANGAY",
                "image": "../../shared/assets/lgu-logos/panabo.png",
                "isLogo": True,
                "citations": [
                    "100.04% Accomplishment Rate",
                    "31 Days Timeliness",
                    "Household Profiling (Jan – Oct 2026)"
                ],
                "citation": "In recognition of its outstanding achievement in Household Profiling under the Davao del Norte Health Information Management System, attaining 100.04% Accomplishment Rate and 31 Days Timeliness from January to October 2026."
            },
            {
                "id": 4,
                "type": "awardee",
                "title": "BARANGAY SAN ISIDRO",
                "category": "TOP PERFORMING BARANGAY",
                "subtitle": "Kaputian District · Island Garden City of Samal",
                "department": "Davao del Norte Health Information Management System",
                "categoryTag": "TOP PERFORMING BARANGAY",
                "image": "../../shared/assets/lgu-logos/igacos.png",
                "isLogo": True,
                "citations": [
                    "108.92% Accomplishment Rate",
                    "28.5 Days Timeliness",
                    "Household Profiling (Jan – Oct 2026)"
                ],
                "citation": "In recognition of its outstanding achievement in Household Profiling under the Davao del Norte Health Information Management System, attaining 108.92% Accomplishment Rate and 28.5 Days Timeliness from January to October 2026."
            },
            {
                "id": 5,
                "type": "awardee",
                "title": "BARANGAY AUNDANAO",
                "category": "TOP PERFORMING BARANGAY",
                "subtitle": "Samal District · Island Garden City of Samal",
                "department": "Davao del Norte Health Information Management System",
                "categoryTag": "TOP PERFORMING BARANGAY",
                "image": "../../shared/assets/lgu-logos/igacos.png",
                "isLogo": True,
                "citations": [
                    "101.99% Accomplishment Rate",
                    "13.4 Days Timeliness",
                    "Household Profiling (Jan – Oct 2026)"
                ],
                "citation": "In recognition of its outstanding achievement in Household Profiling under the Davao del Norte Health Information Management System, attaining 101.99% Accomplishment Rate and 13.4 Days Timeliness from January to October 2026."
            },
            {
                "id": 6,
                "type": "awardee",
                "title": "BARANGAY SION",
                "category": "TOP PERFORMING BARANGAY",
                "subtitle": "Kaputian District · Island Garden City of Samal",
                "department": "Davao del Norte Health Information Management System",
                "categoryTag": "TOP PERFORMING BARANGAY",
                "image": "../../shared/assets/lgu-logos/igacos.png",
                "isLogo": True,
                "citations": [
                    "125.48% Accomplishment Rate",
                    "21.2 Days Timeliness",
                    "Household Profiling (Jan – Oct 2026)"
                ],
                "citation": "In recognition of its outstanding achievement in Household Profiling under the Davao del Norte Health Information Management System, attaining 125.48% Accomplishment Rate and 21.2 Days Timeliness from January to October 2026."
            },
            {
                "id": 7,
                "type": "awardee",
                "title": "BARANGAY NEW PANDAN",
                "category": "PERFORMING BARANGAY",
                "subtitle": "City of Panabo",
                "department": "Davao del Norte Health Information Management System",
                "categoryTag": "PERFORMING BARANGAY",
                "image": "../../shared/assets/lgu-logos/panabo.png",
                "isLogo": True,
                "citations": [
                    "100% Accomplishment Rate",
                    "24.6 Days Timeliness",
                    "Household Profiling (Jan – Oct 2026)"
                ],
                "citation": "In recognition of its outstanding achievement in Household Profiling under the Davao del Norte Health Information Management System, attaining 100% Accomplishment Rate and 24.6 Days Timeliness from January to October 2026."
            },
            {
                "id": 8,
                "type": "awardee",
                "title": "BARANGAY POBLACION",
                "category": "PERFORMING BARANGAY",
                "subtitle": "Kaputian District · Island Garden City of Samal",
                "department": "Davao del Norte Health Information Management System",
                "categoryTag": "PERFORMING BARANGAY",
                "image": "../../shared/assets/lgu-logos/igacos.png",
                "isLogo": True,
                "citations": [
                    "108.80% Accomplishment Rate",
                    "25.4 Days Timeliness",
                    "Household Profiling (Jan – Oct 2026)"
                ],
                "citation": "In recognition of its outstanding achievement in Household Profiling under the Davao del Norte Health Information Management System, attaining 108.80% Accomplishment Rate and 25.4 Days Timeliness from January to October 2026."
            },
            {
                "id": 9,
                "type": "awardee",
                "title": "BARANGAY LUNGA-OG",
                "category": "PERFORMING BARANGAY",
                "subtitle": "Municipality of Sto. Tomas",
                "department": "Davao del Norte Health Information Management System",
                "categoryTag": "PERFORMING BARANGAY",
                "image": "../../shared/assets/lgu-logos/sto-tomas.png",
                "isLogo": True,
                "citations": [
                    "106.38% Accomplishment Rate",
                    "10.6 Days Timeliness",
                    "Household Profiling (Jan – Oct 2026)"
                ],
                "citation": "In recognition of its outstanding achievement in Household Profiling under the Davao del Norte Health Information Management System, attaining 106.38% Accomplishment Rate and 10.6 Days Timeliness from January to October 2026."
            },
            {
                "id": 10,
                "type": "awardee",
                "title": "BARANGAY LIBERTAD",
                "category": "PERFORMING BARANGAY",
                "subtitle": "Kaputian District · Island Garden City of Samal",
                "department": "Davao del Norte Health Information Management System",
                "categoryTag": "PERFORMING BARANGAY",
                "image": "../../shared/assets/lgu-logos/igacos.png",
                "isLogo": True,
                "citations": [
                    "111.24% Accomplishment Rate",
                    "21.5 Days Timeliness",
                    "Household Profiling (Jan – Oct 2026)"
                ],
                "citation": "In recognition of its outstanding achievement in Household Profiling under the Davao del Norte Health Information Management System, attaining 111.24% Accomplishment Rate and 21.5 Days Timeliness from January to October 2026."
            },
            {
                "id": 11,
                "type": "awardee",
                "title": "BARANGAY ESPERANZA",
                "category": "PERFORMING BARANGAY",
                "subtitle": "Municipality of Sto. Tomas",
                "department": "Davao del Norte Health Information Management System",
                "categoryTag": "PERFORMING BARANGAY",
                "image": "../../shared/assets/lgu-logos/sto-tomas.png",
                "isLogo": True,
                "citations": [
                    "112.15% Accomplishment Rate",
                    "14.5 Days Timeliness",
                    "Household Profiling (Jan – Oct 2026)"
                ],
                "citation": "In recognition of its outstanding achievement in Household Profiling under the Davao del Norte Health Information Management System, attaining 112.15% Accomplishment Rate and 14.5 Days Timeliness from January to October 2026."
            },
            {
                "id": 12,
                "type": "awardee",
                "title": "BARANGAY SAN REMEGIO",
                "category": "PERFORMING BARANGAY",
                "subtitle": "Kaputian District · Island Garden City of Samal",
                "department": "Davao del Norte Health Information Management System",
                "categoryTag": "PERFORMING BARANGAY",
                "image": "../../shared/assets/lgu-logos/igacos.png",
                "isLogo": True,
                "citations": [
                    "112.41% Accomplishment Rate",
                    "20.7 Days Timeliness",
                    "Household Profiling (Jan – Oct 2026)"
                ],
                "citation": "In recognition of its outstanding achievement in Household Profiling under the Davao del Norte Health Information Management System, attaining 112.41% Accomplishment Rate and 20.7 Days Timeliness from January to October 2026."
            },
            {
                "id": 13,
                "type": "awardee",
                "title": "BARANGAY AUMBAY",
                "category": "PERFORMING BARANGAY",
                "subtitle": "Samal District · Island Garden City of Samal",
                "department": "Davao del Norte Health Information Management System",
                "categoryTag": "PERFORMING BARANGAY",
                "image": "../../shared/assets/lgu-logos/igacos.png",
                "isLogo": True,
                "citations": [
                    "104.62% Accomplishment Rate",
                    "15.8 Days Timeliness",
                    "Household Profiling (Jan – Oct 2026)"
                ],
                "citation": "In recognition of its outstanding achievement in Household Profiling under the Davao del Norte Health Information Management System, attaining 104.62% Accomplishment Rate and 15.8 Days Timeliness from January to October 2026."
            },
            {
                "id": 14,
                "type": "awardee",
                "title": "BARANGAY STA. CRUZ",
                "category": "PERFORMING BARANGAY",
                "subtitle": "City of Panabo",
                "department": "Davao del Norte Health Information Management System",
                "categoryTag": "PERFORMING BARANGAY",
                "image": "../../shared/assets/lgu-logos/panabo.png",
                "isLogo": True,
                "citations": [
                    "100.02% Accomplishment Rate",
                    "24.4 Days Timeliness",
                    "Household Profiling (Jan – Oct 2026)"
                ],
                "citation": "In recognition of its outstanding achievement in Household Profiling under the Davao del Norte Health Information Management System, attaining 100.02% Accomplishment Rate and 24.4 Days Timeliness from January to October 2026."
            },
            {
                "id": 15,
                "type": "awardee",
                "title": "BARANGAY LINOSUTAN",
                "category": "PERFORMING BARANGAY",
                "subtitle": "Kaputian District · Island Garden City of Samal",
                "department": "Davao del Norte Health Information Management System",
                "categoryTag": "PERFORMING BARANGAY",
                "image": "../../shared/assets/lgu-logos/igacos.png",
                "isLogo": True,
                "citations": [
                    "113.88% Accomplishment Rate",
                    "19 Days Timeliness",
                    "Household Profiling (Jan – Oct 2026)"
                ],
                "citation": "In recognition of its outstanding achievement in Household Profiling under the Davao del Norte Health Information Management System, attaining 113.88% Accomplishment Rate and 19 Days Timeliness from January to October 2026."
            },
            {
                "id": 16,
                "type": "closing",
                "title": "CONGRATULATIONS TO ALL TOP PERFORMING BARANGAYS!",
                "subtitle": "COMMUNITY HEALTH VOLUNTEERS CONGRESS 2026",
                "citation": "Your dedication and commitment to excellence in health information management have significantly contributed to providing accurate and reliable health data for a healthier Davao del Norte."
            }
        ]
    },

    # ----------------------------------------------------
    # DECK 7: TOP PERFORMING LGU (NOV 25)
    # ----------------------------------------------------
    {
        "folder": "07-top-performing-lgu-nov25",
        "key": "chw-07-top-performing-lgu-nov25",
        "title": "Top Performing LGU (Nov 25)",
        "category": "LGU AWARDEES",
        "subTitle": "DHIMS Household Profiling Awards · November 25, 2026",
        "slides": [
            {
                "id": 0,
                "type": "title",
                "event": "COMMUNITY HEALTH WORKERS 2026",
                "subEvent": "Province of Davao del Norte · Provincial Health Office",
                "title": "TOP PERFORMING LGU",
                "category": "NOVEMBER 25, 2026",
                "citation": "In recognition of outstanding achievement in Household Profiling under the Davao del Norte Health Information Management System (DHIMS), January to October 2026.\nCarmen Gymnasium, Davao del Norte"
            },
            {
                "id": 1,
                "type": "awardee",
                "title": "MUNICIPALITY OF SANTO TOMAS",
                "category": "TOP PERFORMING LGU",
                "subtitle": "Province of Davao del Norte",
                "department": "Davao del Norte Health Information Management System",
                "categoryTag": "TOP PERFORMING LGU",
                "image": "../../shared/assets/lgu-logos/sto-tomas.png",
                "isLogo": True,
                "citations": [
                    "99.85% Accomplishment Rate",
                    "34.21% On-time Rate",
                    "Household Profiling (Jan – Oct 2026)"
                ],
                "citation": "In recognition of its outstanding achievement in Household Profiling under the Davao del Norte Health Information Management System, attaining 99.85% Accomplishment Rate and 34.21% On-time Rate from January to October 2026."
            },
            {
                "id": 2,
                "type": "awardee",
                "title": "MUNICIPALITY OF BRAULIO E. DUJALI",
                "category": "TOP PERFORMING LGU",
                "subtitle": "Province of Davao del Norte",
                "department": "Davao del Norte Health Information Management System",
                "categoryTag": "TOP PERFORMING LGU",
                "image": "../../shared/assets/lgu-logos/dujali.png",
                "isLogo": True,
                "citations": [
                    "98.60% Accomplishment Rate",
                    "25% On-time Rate",
                    "Household Profiling (Jan – Oct 2026)"
                ],
                "citation": "In recognition of its outstanding achievement in Household Profiling under the Davao del Norte Health Information Management System, attaining 98.60% Accomplishment Rate and 25% On-time Rate from January to October 2026."
            },
            {
                "id": 3,
                "type": "awardee",
                "title": "ISLAND GARDEN CITY OF SAMAL",
                "category": "PERFORMING LGU",
                "subtitle": "Province of Davao del Norte",
                "department": "Davao del Norte Health Information Management System",
                "categoryTag": "PERFORMING LGU",
                "image": "../../shared/assets/lgu-logos/igacos.png",
                "isLogo": True,
                "citations": [
                    "91.90% Accomplishment Rate",
                    "29.35% On-time Rate",
                    "Household Profiling (Jan – Oct 2026)"
                ],
                "citation": "In recognition of its outstanding achievement in Household Profiling under the Davao del Norte Health Information Management System, attaining 91.90% Accomplishment Rate and 29.35% On-time Rate from January to October 2026."
            },
            {
                "id": 4,
                "type": "awardee",
                "title": "CITY OF PANABO",
                "category": "SPECIAL AWARD",
                "subtitle": "Province of Davao del Norte",
                "department": "Davao del Norte Health Information Management System",
                "categoryTag": "SPECIAL AWARD",
                "image": "../../shared/assets/lgu-logos/panabo.png",
                "isLogo": True,
                "citations": [
                    "89.87% Accomplishment Rate",
                    "31.25% On-time Rate",
                    "Household Profiling (Jan – Oct 2026)"
                ],
                "citation": "In recognition of its outstanding achievement in Household Profiling under the Davao del Norte Health Information Management System, attaining 89.87% Accomplishment Rate and 31.25% On-time Rate from January to October 2026."
            },
            {
                "id": 5,
                "type": "closing",
                "title": "CONGRATULATIONS TO OUR CHAMPION LGUs!",
                "subtitle": "COMMUNITY HEALTH VOLUNTEERS CONGRESS 2026",
                "citation": "Your dedication and commitment to excellence in health information management have significantly contributed to providing accurate and reliable health data for a healthier Davao del Norte."
            }
        ]
    }
]

def build_deck_08():
    excel_path = os.path.join(BASE_DIR, 'CONGRESS YEARS OF SERVICE BACKGROUND.xlsx')
    if not os.path.exists(excel_path):
        return None
    try:
        import openpyxl
    except ImportError:
        return None

    LGU_MAP = {
        'MUNICIPALITY LOGO NEW CORELLA': ('MUNICIPALITY OF NEW CORELLA', '../../shared/assets/lgu-logos/new-corella.png', 'New Corella'),
        'CITY LOGO TAGUM': ('CITY OF TAGUM', '../../shared/assets/lgu-logos/tagum.png', 'Tagum City'),
        'MUNICIPALITY LOGO SAWATA': ('MUNICIPALITY OF SAN ISIDRO (SAWATA)', '../../shared/assets/lgu-logos/sawata.png', 'San Isidro (Sawata)'),
        'MUNICIPALITY LOGO KAPALONG': ('MUNICIPALITY OF KAPALONG', '../../shared/assets/lgu-logos/kapalong.png', 'Kapalong'),
        'MUNICIPALITY LOGO ASUNCION': ('MUNICIPALITY OF ASUNCION', '../../shared/assets/lgu-logos/asuncion.png', 'Asuncion'),
        'MUNICIPALITY LOGO TALAINGOD': ('MUNICIPALITY OF TALAINGOD', '../../shared/assets/lgu-logos/talaingod.png', 'Talaingod'),
        'MUNICIPALITY LOGO CARMEN': ('MUNICIPALITY OF CARMEN', '../../shared/assets/lgu-logos/carmen.png', 'Carmen'),
        'MUNICIPALITY LOGO B. E. DUJALI': ('MUNICIPALITY OF BRAULIO E. DUJALI', '../../shared/assets/lgu-logos/dujali.png', 'Braulio E. Dujali'),
        'CITY OF PANABO': ('CITY OF PANABO', '../../shared/assets/lgu-logos/panabo.png', 'Panabo City'),
        'MUNICIPALITY LOGO STO. TOMAS': ('MUNICIPALITY OF SANTO TOMAS', '../../shared/assets/lgu-logos/sto-tomas.png', 'Santo Tomas'),
        'ISLAND GARDEN CITY OF SAMAL': ('ISLAND GARDEN CITY OF SAMAL', '../../shared/assets/lgu-logos/igacos.png', 'Island Garden City of Samal')
    }

    wb = openpyxl.load_workbook(excel_path, data_only=True)
    slides = []
    slide_id = 0

    # Slide 0: Master Title Slide
    slides.append({
        'id': slide_id,
        'type': 'title',
        'event': 'COMMUNITY HEALTH WORKERS 2026',
        'subEvent': 'Province of Davao del Norte · Provincial Health Office',
        'title': 'RECOGNITION OF LOYALTY AWARDS',
        'category': 'YEARS OF SERVICE',
        'citation': 'Honoring Community Health Workers for their Decades of Dedicated Service, Selfless Commitment, and Lasting Contributions to Public Health in Davao del Norte\nNovember 24 & 25, 2026 · Carmen Gymnasium, Carmen, Davao del Norte'
    })
    slide_id += 1

    # DAY 1: NOV 24
    if 'NOV 24' in wb.sheetnames:
        ws24 = wb['NOV 24']
        slides.append({
            'id': slide_id,
            'type': 'section',
            'title': 'DAY 1 · NOVEMBER 24, 2026',
            'categoryTag': 'LOYALTY & SERVICE AWARDS',
            'subtitle': 'New Corella · Tagum City · San Isidro (Sawata) · Kapalong · Asuncion · Talaingod'
        })
        slide_id += 1

        current_tier = None
        for r in range(1, ws24.max_row + 1):
            c1 = ws24.cell(r, 1).value
            c2 = ws24.cell(r, 2).value
            if c1 and c1.strip() != current_tier:
                current_tier = c1.strip()
                slides.append({
                    'id': slide_id,
                    'type': 'section',
                    'title': current_tier,
                    'categoryTag': 'LOYALTY AWARDS · NOVEMBER 24, 2026',
                    'subtitle': 'New Corella · Tagum City · Sawata · Kapalong · Asuncion · Talaingod'
                })
                slide_id += 1
            if c2 and c2.strip() in LGU_MAP:
                c2_clean = c2.strip()
                title, img, short = LGU_MAP[c2_clean]
                tier_num = current_tier.split()[0] if current_tier else ''
                slides.append({
                    'id': slide_id,
                    'type': 'awardee',
                    'title': title,
                    'category': current_tier,
                    'subtitle': 'Recognition of Loyalty Awards · November 24, 2026',
                    'department': 'Province of Davao del Norte',
                    'categoryTag': current_tier,
                    'image': img,
                    'isLogo': True,
                    'citations': [
                        f"{tier_num} Years of Dedicated Service",
                        'Dungog sa Malungtarong Serbisyo',
                        'Community Health Workers Congress 2026'
                    ],
                    'citation': f'In grateful recognition of {tier_num} years of loyal, dedicated, and invaluable service as Community Health Worker in the Province of Davao del Norte.'
                })
                slide_id += 1

    # DAY 2: NOV 25
    if 'NOV 25' in wb.sheetnames:
        ws25 = wb['NOV 25']
        slides.append({
            'id': slide_id,
            'type': 'section',
            'title': 'DAY 2 · NOVEMBER 25, 2026',
            'categoryTag': 'LOYALTY & SERVICE AWARDS',
            'subtitle': 'Carmen · Braulio E. Dujali · Panabo City · Santo Tomas · Island Garden City of Samal'
        })
        slide_id += 1

        current_tier = None
        for r in range(1, ws25.max_row + 1):
            c1 = ws25.cell(r, 1).value
            c2 = ws25.cell(r, 2).value
            if c1 and c1.strip() != current_tier:
                current_tier = c1.strip()
                slides.append({
                    'id': slide_id,
                    'type': 'section',
                    'title': current_tier,
                    'categoryTag': 'LOYALTY AWARDS · NOVEMBER 25, 2026',
                    'subtitle': 'Carmen · Braulio E. Dujali · Panabo City · Santo Tomas · Island Garden City of Samal'
                })
                slide_id += 1
            if c2 and c2.strip() in LGU_MAP:
                c2_clean = c2.strip()
                title, img, short = LGU_MAP[c2_clean]
                tier_num = current_tier.split()[0] if current_tier else ''
                slides.append({
                    'id': slide_id,
                    'type': 'awardee',
                    'title': title,
                    'category': current_tier,
                    'subtitle': 'Recognition of Loyalty Awards · November 25, 2026',
                    'department': 'Province of Davao del Norte',
                    'categoryTag': current_tier,
                    'image': img,
                    'isLogo': True,
                    'citations': [
                        f"{tier_num} Years of Dedicated Service",
                        'Dungog sa Malungtarong Serbisyo',
                        'Community Health Workers Congress 2026'
                    ],
                    'citation': f'In grateful recognition of {tier_num} years of loyal, dedicated, and invaluable service as Community Health Worker in the Province of Davao del Norte.'
                })
                slide_id += 1

    # Closing Slide
    slides.append({
        'id': slide_id,
        'type': 'closing',
        'title': 'CONGRATULATIONS & DAGHANG SALAMAT!',
        'subtitle': 'COMMUNITY HEALTH WORKERS CONGRESS 2026',
        'citation': 'Gipasidunggan ang inyong walay puas nga dedikasyon ug kasingkasing sa pag-alagad alang sa himsog nga Probinsya sa Davao del Norte.'
    })

    return {
        'folder': '08-years-of-service-awards',
        'key': 'chw-08-years-of-service-awards',
        'title': 'Recognition of Loyalty Awards (Years of Service)',
        'category': 'LOYALTY AWARDS',
        'subTitle': 'Years of Service Background Presentation · November 24 & 25, 2026',
        'slides': slides
    }

_deck_08 = build_deck_08()
if _deck_08:
    DECKS_CONFIG.append(_deck_08)

def make_index_html(cfg):
    html_content = f"""<!DOCTYPE html>
<html lang="en">
<head>
  <script>if(location.protocol!=="file:"&&!location.pathname.endsWith("/")&&!location.pathname.endsWith(".html")){{location.replace(location.pathname+"/"+location.search+location.hash);}}</script>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Community Health Workers Congress 2026 — {cfg['title']}</title>
  <link rel="stylesheet" href="../../shared/css/floral-theme.css">
  <link rel="stylesheet" href="../../shared/css/chw-theme.css">
</head>
<body>

  <div class="presentation-wrapper">
    <!-- Ambient Interactive Background Canvas -->
    <canvas id="chwBackgroundCanvas" class="chw-bg-canvas"></canvas>

    <!-- Slide Viewport -->
    <main id="slideViewport" class="slide-viewport" role="region" aria-label="Slide presentation viewport"></main>

    <!-- Floating Control Bar -->
    <nav id="controlBar" class="control-bar" aria-label="Presentation controls">
      <button class="control-btn" onclick="window.PresentationEngine.prev()" title="Previous Slide (← / ↑)" aria-label="Previous Slide">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"></polyline></svg>
      </button>

      <div id="slideCounter" class="slide-counter" aria-live="polite">01 / {len(cfg['slides']):02d}</div>

      <button class="control-btn" onclick="window.PresentationEngine.next()" title="Next Slide (→ / Space / Enter)" aria-label="Next Slide">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
      </button>

      <span style="width: 1px; height: 20px; background: rgba(0, 229, 255, 0.4); margin: 0 4px;"></span>

      <button class="control-btn" onclick="window.PresentationEngine.toggleDrawer()" title="Slide Grid (G / Esc)" aria-label="All Slides">
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

      <a href="../index.html" class="control-btn" title="Return to CHW Congress Hub" style="text-decoration: none;" aria-label="CHW Congress Hub">
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
        <div class="drawer-title">✦ Community Health Workers Congress 2026 — {cfg['title']}</div>
        <input type="text" id="drawerSearch" class="drawer-search-input" placeholder="Search awardee, municipality, category..." aria-label="Search slides">
        <button class="drawer-close-btn" onclick="window.PresentationEngine.toggleDrawer(false)" aria-label="Close drawer">&times;</button>
      </div>
      <div id="drawerGrid" class="drawer-grid"></div>
    </div>
  </aside>

  <!-- Presentation Scripts -->
  <script>
    window.DECK_KEY = '{cfg['key']}';
    window.OFFICIAL_LOGOS = ['../../shared/assets/logos/logo-3.png', '../../shared/assets/logos/DDN.png', '../../shared/assets/logos/PHO-Logo.png'];
  </script>
  <script src="slides-data.js"></script>
  <script src="../../shared/js/cloud-sync.js"></script>
  <script src="../../shared/js/presentation.js"></script>
  <script src="../../shared/js/chw-interactive-bg.js"></script>
</body>
</html>
"""
    return html_content

def make_presenter_html(cfg):
    html_content = f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Presenter Console — {cfg['title']} (CHW Congress 2026)</title>
  <link rel="stylesheet" href="../../shared/css/presenter-console.css">
  <link rel="stylesheet" href="../../shared/css/chw-theme.css">
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
          <span class="clock-label">Local</span>
          <span id="wallClock" class="clock-value">--:--:--</span>
        </div>
      </div>

      <div class="topbar-right">
        <a href="../index.html" class="topbar-btn" title="Return to CHW Congress Hub">
          🎄 CHW Hub
        </a>
      </div>
    </header>

    <main class="presenter-main">
      <section class="presenter-live-pane">
        <div class="pane-header">
          <span class="pane-title">{cfg['title']}</span>
          <span class="live-badge" id="liveStatusBadge">● Live on Stage</span>
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
            <input type="text" id="presenterSearch" class="presenter-search-input" placeholder="Search awardee, barangay, purok... (Press /)" autocomplete="off" spellcheck="false" />
            <button id="searchClearBtn" class="search-clear-btn" title="Clear Search">✕</button>
          </div>
          <div id="searchResultsList" class="search-results-list" role="listbox"></div>
        </div>

        <div class="presenter-next-wrapper">
          <div class="pane-header">
            <span class="pane-title">Next Slide</span>
            <span id="nextSlideLabel" class="live-badge" style="background: rgba(255, 215, 0, 0.18); color: #FFD700; border: 1px solid rgba(255, 215, 0, 0.5);">Slide 2</span>
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
        <span id="slideCounter" class="slide-counter">Slide 1 of {len(cfg['slides'])}</span>
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
  // Source: Community Health Workers Congress 2026
  var data = {json.dumps(cfg['slides'], indent=2)};

  window.SLIDES_DATA = data;
  window.DECKS_CATALOG = window.DECKS_CATALOG || {{}};
  window.DECKS_CATALOG['{cfg['key']}'] = data;
}})();
"""
    return js_content

def make_hub_html():
    hub_html = f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Community Health Workers Congress 2026 — Presentation Portal</title>
  <link rel="stylesheet" href="../shared/css/floral-theme.css">
  <link rel="stylesheet" href="../shared/css/chw-theme.css">
  <style>
    html {{
      height: auto !important;
      min-height: 100% !important;
      overflow-y: auto !important;
      overflow-x: hidden !important;
      scroll-behavior: smooth;
    }}
    body {{
      height: auto !important;
      min-height: 100vh !important;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: clamp(20px, 4vw, 44px) 16px 80px;
      background: 
        radial-gradient(ellipse 95% 65% at 50% -10%, rgba(255, 215, 0, 0.16) 0%, rgba(16, 185, 129, 0.12) 35%, rgba(225, 29, 72, 0.08) 65%, transparent 85%),
        radial-gradient(circle at 12% 85%, rgba(16, 185, 129, 0.14) 0%, transparent 50%),
        radial-gradient(circle at 88% 85%, rgba(225, 29, 72, 0.12) 0%, transparent 50%),
        linear-gradient(180deg, #07150E 0%, #040D08 55%, #020704 100%);
      position: relative;
      overflow-y: auto !important;
      overflow-x: hidden !important;
    }}
    /* Custom Festive Scrollbar */
    ::-webkit-scrollbar {{
      width: 12px;
    }}
    ::-webkit-scrollbar-track {{
      background: #030A06;
    }}
    ::-webkit-scrollbar-thumb {{
      background: linear-gradient(180deg, #FFD700 0%, #10B981 100%);
      border-radius: 10px;
      border: 3px solid #030A06;
    }}
    ::-webkit-scrollbar-thumb:hover {{
      background: #FFE082;
      box-shadow: 0 0 10px rgba(255, 215, 0, 0.6);
    }}
    .wrap {{
      width: 100%;
      max-width: 1280px;
      text-align: center;
      position: relative;
      z-index: 1;
    }}
    .top-nav {{
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 24px;
      width: 100%;
    }}
    .back-btn {{
      display: inline-flex;
      align-items: center;
      gap: 8px;
      color: #FFD700;
      text-decoration: none;
      font-weight: 700;
      font-size: 0.95rem;
      background: rgba(255, 215, 0, 0.12);
      border: 1px solid rgba(255, 215, 0, 0.45);
      padding: 8px 18px;
      border-radius: 999px;
      transition: all 0.25s ease;
    }}
    .back-btn:hover {{
      background: rgba(255, 215, 0, 0.25);
      transform: translateX(-3px);
      color: #FFFFFF;
      box-shadow: 0 0 15px rgba(255, 215, 0, 0.4);
    }}
    .portal-tag {{
      color: #FFFBEB;
      font-weight: 800;
      letter-spacing: 2px;
      font-size: 0.85rem;
      text-transform: uppercase;
      background: linear-gradient(135deg, #059669 0%, #10B981 100%);
      border: 1.5px solid rgba(255, 215, 0, 0.6);
      padding: 6px 18px;
      border-radius: 999px;
      box-shadow: 0 0 12px rgba(16, 185, 129, 0.4);
    }}
    .logos {{
      display: flex;
      justify-content: center;
      gap: 24px;
      margin-bottom: 1.2rem;
    }}
    .logos img {{
      width: 76px;
      height: 76px;
      object-fit: contain;
      filter: drop-shadow(0 4px 16px rgba(0,0,0,0.9));
    }}
    .hero-title {{
      font-family: var(--font-display, sans-serif);
      color: #FFFFFF;
      font-size: clamp(2rem, 4.5vw, 3.4rem);
      font-weight: 900;
      letter-spacing: 1.5px;
      margin-bottom: 0.4rem;
      text-shadow: 0 4px 25px rgba(0,0,0,0.9);
    }}
    .hero-title span {{
      background: linear-gradient(135deg, #FFE082 0%, #FFD700 45%, #FAC611 75%, #D49000 100%);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
      filter: drop-shadow(0 2px 12px rgba(255, 215, 0, 0.5));
    }}
    .theme-motto {{
      color: #FFD700;
      font-weight: 800;
      letter-spacing: 1.5px;
      font-size: clamp(1rem, 1.8vw, 1.35rem);
      margin-bottom: 0.6rem;
      text-shadow: 0 0 12px rgba(255, 215, 0, 0.4);
    }}
    .hero-sub {{
      color: #A7F3D0;
      font-weight: 700;
      letter-spacing: 2px;
      text-transform: uppercase;
      font-size: 0.9rem;
      margin-bottom: 2.8rem;
    }}
    .decks-grid {{
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
      gap: 24px;
      text-align: left;
    }}
    .deck-card {{
      background: linear-gradient(165deg, rgba(8, 24, 15, 0.92) 0%, rgba(4, 14, 9, 0.98) 100%);
      border: 2px solid rgba(255, 215, 0, 0.55);
      border-radius: 24px;
      padding: 30px 26px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      min-height: 295px;
      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8), 0 0 30px rgba(255, 215, 0, 0.16);
      transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
      position: relative;
      overflow: hidden;
    }}
    .deck-card::before {{
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: linear-gradient(90deg, #FFD700, #10B981, #E11D48);
      opacity: 0.95;
    }}
    .deck-card:hover {{
      transform: translateY(-8px);
      border-color: #FFD700;
      box-shadow: 0 26px 60px rgba(0, 0, 0, 0.85), 0 0 40px rgba(255, 215, 0, 0.38);
    }}
    .deck-card-watermark {{
      position: absolute;
      top: 10px;
      right: 20px;
      font-family: 'Cinzel', 'Cinzel Decorative', Georgia, serif;
      font-size: 5.2rem;
      font-weight: 900;
      color: rgba(255, 215, 0, 0.08);
      line-height: 1;
      pointer-events: none;
      user-select: none;
      transition: all 0.3s ease;
    }}
    .deck-card:hover .deck-card-watermark {{
      color: rgba(255, 215, 0, 0.22);
      transform: scale(1.08) rotate(-2deg);
    }}
    .deck-header-badges {{
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 14px;
      flex-wrap: wrap;
    }}
    .deck-num-badge {{
      font-size: 0.74rem;
      font-weight: 900;
      letter-spacing: 2px;
      padding: 5px 14px;
      border-radius: 999px;
      background: linear-gradient(135deg, #FFD700 0%, #FAC611 100%);
      color: #040D08;
      box-shadow: 0 0 14px rgba(255, 215, 0, 0.45);
      text-transform: uppercase;
    }}
    .deck-tag {{
      font-size: 0.72rem;
      font-weight: 800;
      letter-spacing: 1.8px;
      padding: 5px 14px;
      border-radius: 999px;
      background: rgba(16, 185, 129, 0.2);
      border: 1px solid rgba(255, 215, 0, 0.5);
      color: #FFD700;
      text-transform: uppercase;
    }}
    .deck-card h2 {{
      font-family: var(--font-serif, sans-serif);
      font-size: clamp(1.4rem, 2vw, 1.85rem);
      font-weight: 800;
      color: #FFFFFF;
      margin-bottom: 10px;
      line-height: 1.25;
    }}
    .deck-card p {{
      color: #CBD5E1;
      font-size: 0.92rem;
      line-height: 1.5;
      margin-bottom: 22px;
      flex-grow: 1;
    }}
    .deck-meta {{
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 18px;
      padding-top: 14px;
      border-top: 1px solid rgba(255, 255, 255, 0.08);
      font-size: 0.85rem;
      font-weight: 700;
      color: #34D399;
    }}
    .deck-actions {{
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
    }}
    .btn-launch {{
      text-align: center;
      padding: 12px 14px;
      border-radius: 12px;
      font-weight: 800;
      font-size: 0.88rem;
      text-decoration: none;
      letter-spacing: 0.5px;
      background: linear-gradient(135deg, #059669 0%, #10B981 100%);
      color: #FFFFFF;
      border: 1px solid rgba(255, 215, 0, 0.5);
      transition: all 0.25s ease;
    }}
    .btn-launch:hover {{
      background: linear-gradient(135deg, #10B981 0%, #34D399 100%);
      color: #040D08;
      box-shadow: 0 0 20px rgba(16, 185, 129, 0.6);
    }}
    .btn-console {{
      text-align: center;
      padding: 12px 14px;
      border-radius: 12px;
      font-weight: 800;
      font-size: 0.88rem;
      text-decoration: none;
      letter-spacing: 0.5px;
      background: rgba(225, 29, 72, 0.15);
      border: 1.5px solid rgba(225, 29, 72, 0.6);
      color: #FB7185;
      transition: all 0.25s ease;
    }}
    .btn-console:hover {{
      background: #E11D48;
      color: #FFFFFF;
      box-shadow: 0 0 20px rgba(225, 29, 72, 0.6);
    }}
  </style>
</head>
<body>
  <canvas id="chwBackgroundCanvas" class="chw-bg-canvas"></canvas>
  <div class="wrap">
    <div class="top-nav">
      <a href="../index.html" class="back-btn">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"></polyline></svg>
        Back to Ceremony Portal
      </a>
      <span class="portal-tag">Official Presentation Hub</span>
    </div>

    <div class="logos">
      <img src="../shared/assets/logos/logo-3.png" alt="Department of Health">
      <img src="../shared/assets/logos/DDN.png" alt="Province of Davao del Norte">
      <img src="../shared/assets/logos/PHO-Logo.png" alt="Provincial Health Office">
    </div>

    <h1 class="hero-title">COMMUNITY HEALTH WORKERS <span>2026</span></h1>
    <div class="theme-motto">“Digitalisasyon ng Kalusugan: Kaagapay sa Kalinaw ug Kalamboan”</div>
    <div class="hero-sub">November 24 & 25, 2026 · Carmen Gymnasium, Carmen, Davao del Norte</div>

    <div class="decks-grid">
"""
    for cfg in DECKS_CONFIG:
        deck_num = cfg['folder'].split('-')[0]
        hub_html += f"""      <div class="deck-card">
        <div class="deck-card-watermark">{deck_num}</div>
        <div>
          <div class="deck-header-badges">
            <span class="deck-num-badge">DECK {deck_num}</span>
            <span class="deck-tag">{cfg['category']}</span>
          </div>
          <h2>{cfg['title']}</h2>
          <p>{cfg['subTitle']}</p>
        </div>
        <div>
          <div class="deck-meta">
            <span>📊 {len(cfg['slides'])} Interactive Slides</span>
            <span>✦ Full HD LED Ready</span>
          </div>
          <div class="deck-actions">
            <a href="{cfg['folder']}/index.html" class="btn-launch">Open Presentation →</a>
            <a href="{cfg['folder']}/presenter.html" target="_blank" class="btn-console">Presenter View 🖥️</a>
          </div>
        </div>
      </div>
"""
    hub_html += """    </div>
  </div>
  <script src="../shared/js/chw-interactive-bg.js"></script>
</body>
</html>
"""
    return hub_html

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

    # 4. Hub index.html
    with open(os.path.join(BASE_DIR, 'index.html'), 'w', encoding='utf-8') as f:
        f.write(make_hub_html())

    print(f"\nAll {total_generated} Community Health Workers 2026 decks generated successfully! Total slides: {total_slides}")
