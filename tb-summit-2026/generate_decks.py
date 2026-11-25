import os
import json

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

DECKS_CONFIG = [
    # -------------------------------------------------------------------------
    # DECK 00: Program & Opening Ceremonies (Cue Guide Table 0 & Closing Flow)
    # -------------------------------------------------------------------------
    {
        "folder": "00-program-flow",
        "key": "tb-00-program-flow",
        "title": "Program & Opening Ceremonies",
        "category": "ORDER OF CEREMONY & PROGRAM FLOW",
        "subTitle": "Commencement, Grand Red-Carpet Parade of Davao del Norte TB Teams, Keynotes & Commitment Ceremony",
        "slides": [
            {
                "id": 0,
                "type": "title",
                "event": "DAVAO DEL NORTE END TB SUMMIT 2026",
                "subEvent": "Province of Davao del Norte · Provincial Health Office",
                "title": "ORDER OF CEREMONY & PROGRAM FLOW",
                "category": "COMMENCEMENT & CEREMONIES",
                "citation": "“Together, We Can. One Province. One Mission. One Commitment: END TB.”\nNovember 26, 2026 · DAKOTA Function Hall, Timog Avenue, Visayan Village, Tagum City"
            },
            {
                "id": 1,
                "type": "awardee",
                "title": "REGISTRATION & ARRIVAL OF DELEGATES",
                "number": 1,
                "category": "PRE-PROGRAM · 12:00 PM",
                "subtitle": "DAKOTA Function Hall · Timog Avenue, Visayan Village, Tagum City",
                "categoryTag": "REGISTRATION",
                "citations": [
                    "Official Registration & Attendance Confirmation",
                    "Distribution of Event Kits & ID Credentials",
                    "Photo Opportunity at Red Carpet Media Wall",
                    "Seating of LGU Delegations, Partner Facilities & VIPs"
                ],
                "citation": "Welcome to the Davao del Norte END TB Summit 2026! Please register and proceed to your assigned tables."
            },
            {
                "id": 2,
                "type": "awardee",
                "title": "PRE-PROGRAM PRESENTATION",
                "number": 2,
                "category": "AUDIO-VISUAL PRESENTATION",
                "subtitle": "Davao del Norte Tuberculosis Prevention & Control Program",
                "categoryTag": "AVP SHOWCASE",
                "video": "../assets/videos/led_wall_loop.mp4",
                "citation": "A showcase of TB Program accomplishments, frontline milestones, and community healthcare initiatives across the province."
            },
            {
                "id": 3,
                "type": "awardee",
                "title": "THE PROGRAM WILL BEGIN SHORTLY",
                "number": 3,
                "category": "CALL TO ORDER",
                "subtitle": "Please be seated and prepare for the commencement of ceremonies",
                "categoryTag": "CALL TO SETTLE",
                "citation": "All delegates, participants, and distinguished guests are cordially requested to take their designated seats."
            },
            {
                "id": 4,
                "type": "awardee",
                "title": "DAVAO DEL NORTE END TB SUMMIT 2026",
                "number": 4,
                "category": "OFFICIAL COMMENCEMENT",
                "subtitle": "“Together, We Can. One Province. One Mission. One Commitment: END TB.”",
                "categoryTag": "OPENING SPIEL",
                "citation": "Mabuhay at malugod na pagbati sa lahat ng ating mga katuwang sa pagtatapos ng Tuberkulosis sa Lalawigan ng Davao del Norte!"
            },
            {
                "id": 5,
                "type": "awardee",
                "title": "MS. RAYCHELLE M. ABUDA, RN, MAN",
                "number": 5,
                "category": "ECUMENICAL INVOCATION & PRAYER",
                "subtitle": "NTP Nurse Coordinator · Municipality of Sto. Tomas, Davao del Norte",
                "categoryTag": "INVOCATION",
                "citation": "Let us bow our heads, open our hearts, and invite the guidance, wisdom, and blessings of the Almighty upon this momentous summit."
            },
            {
                "id": 6,
                "type": "awardee",
                "title": "LUPANG HINIRANG",
                "number": 6,
                "category": "PHILIPPINE NATIONAL ANTHEM",
                "subtitle": "Audio-Visual Presentation · Everyone is requested to rise",
                "categoryTag": "NATIONAL ANTHEM",
                "citation": "Bayang Magiliw, Perlas ng Silanganan... Ang mamatay nang dahil sa iyo."
            },
            {
                "id": 7,
                "type": "awardee",
                "title": "PHOENIXES DANCE CREW",
                "number": 7,
                "category": "OPENING SALVO",
                "subtitle": "High-Energy Choreographed Performance",
                "categoryTag": "DANCE SALVO",
                "citation": "An energetic cultural performance opening our grand celebration of healthcare heroes in tuberculosis elimination."
            },
            {
                "id": 8,
                "type": "section",
                "title": "GRAND RED-CARPET PARADE OF DAVAO DEL NORTE TB TEAMS",
                "subtitle": "Celebrating our frontline leaders, medical coordinators, and healthcare teams across the 11 LGUs and province",
                "categoryTag": "RED-CARPET PARADE"
            },
            {
                "id": 9,
                "type": "awardee",
                "title": "DAVAO DEL NORTE PROVINCIAL TB TEAM",
                "number": 9,
                "category": "1ST ENTRANCE · PROVINCIAL LEADERSHIP",
                "subtitle": "Provincial Health Office · Department of Health Team",
                "categoryTag": "PROVINCIAL TEAM",
                "citations": [
                    "Dr. Alfredo A. Lacerona — Provincial Health Officer II",
                    "Dr. Josephine Therese P. Parreñas — Provincial NTP Medical Coordinator",
                    "Ms. Glomerlina A. Laag, RN — Provincial NTP Nurse Coordinator",
                    "Ms. Ruby D. Rosal, RMT — Provincial NTP Med Tech Coordinator",
                    "Dr. Vergel Jay T. Bautista, MD, MPM — Provincial Health Team Leader",
                    "Engr. Lorena M. Orilla, MPA · Jennifer D. Hinggo, MPA · Ian Patrick M. Vidal, RMT · Darlene Dorothy C. Aramasa, RMT — Development Management Officers"
                ]
            },
            {
                "id": 10,
                "type": "awardee",
                "title": "TB TEAM OF THE MUNICIPALITY OF ASUNCION",
                "number": 10,
                "category": "RED-CARPET ENTRANCE · LGU TEAM",
                "subtitle": "Dr. John Batacan (MHO) · Dr. Justin Louie Ryan Yumang (TB Medical Coordinator)",
                "categoryTag": "MUNICIPALITY OF ASUNCION",
                "image": "../../shared/assets/lgu-logos/asuncion.png",
                "video": "../assets/videos/asuncion.mp4",
                "isLogo": True
            },
            {
                "id": 11,
                "type": "awardee",
                "title": "TB TEAM OF THE MUNICIPALITY OF NEW CORELLA",
                "number": 11,
                "category": "RED-CARPET ENTRANCE · LGU TEAM",
                "subtitle": "Dr. Nancy O. Cacayorin (MHO) · Dr. Julius Cloyde Jala (TB Medical Coordinator)",
                "categoryTag": "MUNICIPALITY OF NEW CORELLA",
                "image": "../../shared/assets/lgu-logos/new-corella.png",
                "video": "../assets/videos/new_corella.m4v",
                "isLogo": True
            },
            {
                "id": 12,
                "type": "awardee",
                "title": "TB TEAM OF THE MUNICIPALITY OF TALAINGOD",
                "number": 12,
                "category": "RED-CARPET ENTRANCE · LGU TEAM",
                "subtitle": "Dr. Ricar Apas (Municipal Health Officer / TB Medical Coordinator)",
                "categoryTag": "MUNICIPALITY OF TALAINGOD",
                "image": "../../shared/assets/lgu-logos/talaingod.png",
                "video": "../assets/videos/talaingod.m4v",
                "isLogo": True
            },
            {
                "id": 13,
                "type": "awardee",
                "title": "TB TEAM OF THE MUNICIPALITY OF BRAULIO E. DUJALI",
                "number": 13,
                "category": "RED-CARPET ENTRANCE · LGU TEAM",
                "subtitle": "Dr. Cherry Demaala (MHO) · Partner Facility: Davao Penal Prison Infirmary (DAPECOL) Dr. Galileo Mascariña, Jr.",
                "categoryTag": "MUNICIPALITY OF B.E. DUJALI",
                "image": "../../shared/assets/lgu-logos/dujali.png",
                "video": "../assets/videos/b__e__dujali.m4v",
                "isLogo": True
            },
            {
                "id": 14,
                "type": "awardee",
                "title": "TB TEAM OF THE MUNICIPALITY OF CARMEN",
                "number": 14,
                "category": "RED-CARPET ENTRANCE · LGU TEAM",
                "subtitle": "Dr. Hannah Katrina Sevilla (MHO) · Dr. Thompson Uy (TB Consultant) · DDNH Carmen (Dr. Ruchille Arrocena) & Carmen Medical Clinic",
                "categoryTag": "MUNICIPALITY OF CARMEN",
                "image": "../../shared/assets/lgu-logos/carmen.png",
                "video": "../assets/videos/carmen.mp4",
                "isLogo": True
            },
            {
                "id": 15,
                "type": "awardee",
                "title": "TB TEAM OF THE MUNICIPALITY OF KAPALONG",
                "number": 15,
                "category": "RED-CARPET ENTRANCE · LGU TEAM",
                "subtitle": "Dr. Louelyn Exala (MHO) · DDNH Kapalong (Dr. Jessie Belga) & JA Alegre Medical Clinic",
                "categoryTag": "MUNICIPALITY OF KAPALONG",
                "image": "../../shared/assets/lgu-logos/kapalong.png",
                "video": "../assets/videos/kapalong.mp4",
                "isLogo": True
            },
            {
                "id": 16,
                "type": "awardee",
                "title": "TB TEAM OF THE MUNICIPALITY OF SAWATA",
                "number": 16,
                "category": "RED-CARPET ENTRANCE · LGU TEAM",
                "subtitle": "Dr. Mercy Asuncion Macasero (MHO) · Partner Facility: DRMC Ward Extension Infirmary",
                "categoryTag": "MUNICIPALITY OF SAWATA",
                "image": "../../shared/assets/lgu-logos/sawata.png",
                "video": "../assets/videos/sawata.m4v",
                "isLogo": True
            },
            {
                "id": 17,
                "type": "awardee",
                "title": "TB TEAM OF THE MUNICIPALITY OF STO. TOMAS",
                "number": 17,
                "category": "RED-CARPET ENTRANCE · LGU TEAM",
                "subtitle": "Dr. June P. Lim (MHO) · Bungabong-Sanico, Estela Medical & Pharmacy, Rivera Primary Care, Matutes, Metropolitan Polymedic",
                "categoryTag": "MUNICIPALITY OF STO. TOMAS",
                "image": "../../shared/assets/lgu-logos/sto-tomas.png",
                "video": "../assets/videos/sto__tomas.mp4",
                "isLogo": True
            },
            {
                "id": 18,
                "type": "awardee",
                "title": "TB TEAM OF THE ISLAND GARDEN CITY OF SAMAL",
                "number": 18,
                "category": "RED-CARPET ENTRANCE · LGU TEAM",
                "subtitle": "Dr. Dennis Carlos D. Flores (CHO) · Dr. Yap, Dr. Llanos, Dr. Parreño, Dr. Llovers · DDNH Samal (Dr. Valera) & Samal City Jail",
                "categoryTag": "ISLAND GARDEN CITY OF SAMAL",
                "image": "../../shared/assets/lgu-logos/igacos.png",
                "video": "../assets/videos/kaputian_video.mp4",
                "isLogo": True
            },
            {
                "id": 19,
                "type": "awardee",
                "title": "TB TEAM OF PANABO CITY",
                "number": 19,
                "category": "RED-CARPET ENTRANCE · LGU TEAM",
                "subtitle": "Dr. Algae Rose S. Hechanova (CHO) · Dr. Ryan Jae A. Deocampo · Panabo Polymedic, Rivera Medical, Cainglet, Good Shepherd, TADECO Hospital, Panabo City Jail",
                "categoryTag": "CITY OF PANABO",
                "image": "../../shared/assets/lgu-logos/panabo.png",
                "video": "../assets/videos/panabo_city.mp4",
                "isLogo": True
            },
            {
                "id": 20,
                "type": "awardee",
                "title": "TB TEAM OF TAGUM CITY",
                "number": 20,
                "category": "RED-CARPET ENTRANCE · LGU TEAM",
                "subtitle": "Dr. Arnel D. Florendo (CHO) · Dr. Muhammad Hisham Mackno · DRMC, Tagum Doctors, Tagum Medical City, Aquino, Christ the King, MMG, Tagum Global, United Doctors, PTSI, Tagum City Jail, DavNor Provincial Jail",
                "categoryTag": "CITY OF TAGUM",
                "image": "../../shared/assets/lgu-logos/tagum.png",
                "isLogo": True
            },
            {
                "id": 21,
                "type": "awardee",
                "title": "ACKNOWLEDGMENT OF DISTINGUISHED GUESTS & VIPS",
                "number": 21,
                "category": "RECOGNITION OF DIGNITARIES",
                "subtitle": "Provincial Officials, DOH Leaders, Municipal Mayors, Health Officers, Hospital Directors & Partners",
                "categoryTag": "ACKNOWLEDGMENT",
                "citation": "A heartfelt welcome to all our honored guests and partners joining us today in solidarity for a TB-free Davao del Norte."
            },
            {
                "id": 22,
                "type": "awardee",
                "title": "DR. ALFREDO A. LACERONA",
                "number": 22,
                "category": "WELCOME REMARKS",
                "subtitle": "Provincial Health Officer II · Province of Davao del Norte",
                "categoryTag": "WELCOME ADDRESS",
                "citation": "Delivering the official Welcome Address to all participants, healthcare workers, and partners of the Davao del Norte END TB Summit 2026."
            },
            {
                "id": 23,
                "type": "awardee",
                "title": "HON. EDWIN I. JUBAHIB & HON. CLARICE T. JUBAHIB",
                "number": 23,
                "category": "INSPIRATIONAL MESSAGE",
                "subtitle": "Provincial Governor & Provincial Vice-Governor · Province of Davao del Norte",
                "categoryTag": "PROVINCIAL LEADERSHIP",
                "image": "../../shared/assets/speakers/edwin jubahib.png",
                "citation": "Reaffirming the unwavering commitment, strategic leadership, and strong support of the Provincial Government of Davao del Norte in the elimination of Tuberculosis."
            },
            {
                "id": 24,
                "type": "awardee",
                "title": "DR. JOSEPHINE THERESE P. PARREÑAS",
                "number": 24,
                "category": "RATIONALE OF THE SUMMIT",
                "subtitle": "Provincial Health Officer I / Provincial NTP Medical Coordinator",
                "categoryTag": "RATIONALE",
                "image": "../../shared/assets/speakers/JOSEPHINE THERESE P. PARREÑAS.png",
                "citation": "Presenting the rationale, strategic direction, and significance of the Davao del Norte END TB Summit 2026."
            },
            {
                "id": 25,
                "type": "awardee",
                "title": "HON. LOU C. SUAYBAGUIO, REE, RN",
                "number": 25,
                "category": "MESSAGE OF SUPPORT",
                "subtitle": "Board Member District 1 · Chairperson – Committee on Health, Davao del Norte",
                "categoryTag": "MESSAGE OF SUPPORT",
                "citation": "Pledging the legislative support, resource allocation, and health advocacy of the Sangguniang Panlalawigan for provincial TB control programs."
            },
            {
                "id": 26,
                "type": "awardee",
                "title": "PHOENIXES DANCE CREW",
                "number": 26,
                "category": "INTERMISSION NUMBER",
                "subtitle": "Celebratory Performance · Davao del Norte END TB Summit 2026",
                "categoryTag": "INTERMISSION NUMBER",
                "citation": "A captivating musical and dance performance celebrating the resilience, passion, and spirit of our TB health heroes."
            },
            {
                "id": 27,
                "type": "awardee",
                "title": "DIR. ELLENIETA HMV N. GAMOLO, MD, MPH, CESO IV",
                "number": 27,
                "category": "KEYNOTE MESSAGE",
                "subtitle": "OIC-Regional Director · DOH Davao Center for Health Development (DCHD XI)",
                "categoryTag": "KEYNOTE SPEAKER",
                "citation": "“TB Investment for END TB Strategy Roadmap” — Driving regional commitment, resources, and innovation toward eliminating tuberculosis."
            },
            {
                "id": 28,
                "type": "awardee",
                "title": "COMMITMENT TOWARDS A TB-FREE DAVAO DEL NORTE",
                "number": 28,
                "category": "COMMITMENT CEREMONY",
                "subtitle": "Ms. Glomerlina A. Laag, RN · Provincial NTP Nurse Coordinator",
                "categoryTag": "CALL TO ACTION",
                "citation": "Leading the call to action, unity, and shared responsibility in the fight to END TB across our province."
            },
            {
                "id": 29,
                "type": "awardee",
                "title": "PLEDGE OF COMMITMENT",
                "number": 29,
                "category": "CEREMONIAL SIGNING & RECITATION",
                "subtitle": "Towards a TB-Free Davao del Norte and a TB-Free Philippines",
                "categoryTag": "ONE PROVINCE. ONE MISSION. ONE COMMITMENT: END TB.",
                "citations": [
                    "We stand together today with a shared hope, shared responsibility, and commitment to build a TB-Free Davao del Norte.",
                    "We recognize that behind every TB case is a person, a family, and a story. TB can be prevented, treated, and cured.",
                    "With compassion and determination, we pledge to prevent TB, find people who need care, and support patients throughout treatment.",
                    "We pledge to listen without judgment, care with dignity, speak with kindness, and create communities where people feel safe.",
                    "Ending TB is a shared commitment of health workers, government, communities, private sector, civil society, and every individual.",
                    "ONE PROVINCE. ONE MISSION. ONE COMMITMENT: END TB. TOGETHER, WE CAN. SO HELP US GOD."
                ]
            },
            {
                "id": 30,
                "type": "awardee",
                "title": "STYLE SPOTLIGHT AWARDS",
                "number": 30,
                "category": "SPECIAL RECOGNITION",
                "subtitle": "Shining, Shimmering Black, Gold, and Silver Gala Theme",
                "categoryTag": "STYLE SPOTLIGHT",
                "citations": [
                    "HEAD TURNER OF THE NIGHT (Lady & Gent)",
                    "RED CARPET ROYALTY OF THE NIGHT (Lady & Gent)",
                    "STAR OF THE NIGHT (Lady & Gent)"
                ]
            },
            {
                "id": 31,
                "type": "awardee",
                "title": "RUBY D. ROSAL, RMT",
                "number": 31,
                "category": "CLOSING REMARKS",
                "subtitle": "Medical Technologist II · Provincial NTP Med Tech Coordinator",
                "categoryTag": "CLOSING REMARKS",
                "citation": "Expressing heartfelt appreciation to all partners, healthcare workers, and stakeholders for a magnificent summit."
            },
            {
                "id": 32,
                "type": "awardee",
                "title": "OFFICIAL CLOSING PHOTO OPPORTUNITY",
                "number": 32,
                "category": "PHOTO OPPORTUNITY",
                "subtitle": "Davao del Norte END TB Summit 2026 · All Delegates and Partners",
                "categoryTag": "COMMEMORATIVE PHOTO",
                "citation": "Inviting all officials, guests, awardees, and health teams to the stage for the official commemorative photo."
            },
            {
                "id": 33,
                "type": "closing",
                "title": "TOGETHER, WE CAN END TB!",
                "subtitle": "ONE PROVINCE. ONE MISSION. ONE COMMITMENT: END TB.",
                "citation": "Thank you for your tireless dedication, compassionate service, and unwavering partnership in building a healthier, TB-free Davao del Norte."
            }
        ]
    },

    # -------------------------------------------------------------------------
    # DECK 01: Special Awards (Partners, Consultants, DMOs, Provincial Offices)
    # -------------------------------------------------------------------------
    {
        "folder": "01-special-awards",
        "key": "tb-01-special-awards",
        "title": "Special Awards",
        "category": "SPECIAL AWARDS",
        "subTitle": "Honoring our partners, consultants, and champions in the fight to end Tuberculosis in Davao del Norte",
        "slides": [
            {
                "id": 0,
                "type": "title",
                "event": "DAVNOR TB SUMMIT 2026",
                "subEvent": "Province of Davao del Norte · Provincial Health Office",
                "title": "RECOGNITION OF SPECIAL AWARDS",
                "category": "DAVNOR TB SUMMIT 2026",
                "citation": "Honoring our partners, consultants, and champions in the fight to end Tuberculosis in Davao del Norte"
            },
            {
                "id": 1,
                "type": "awardee",
                "title": "DEPARTMENT OF HEALTH - DAVAO CENTER FOR HEALTH DEVELOPMENT",
                "number": 1,
                "category": "SPECIAL AWARD",
                "subtitle": "RO XI",
                "categoryTag": "SPECIAL AWARD"
            },
            {
                "id": 2,
                "type": "awardee",
                "title": "HANSEL V. AMOGUIS, MD, MPM",
                "number": 2,
                "category": "SPECIAL AWARD",
                "subtitle": "Head - Infectious Cluster · DOH-DCHD XI",
                "categoryTag": "SPECIAL AWARD"
            },
            {
                "id": 3,
                "type": "awardee",
                "title": "EVELYN UY-GELITO, RN, MPH",
                "number": 3,
                "category": "SPECIAL AWARD",
                "subtitle": "NTP Program Manager · DOH-DCHD XI",
                "categoryTag": "SPECIAL AWARD"
            },
            {
                "id": 4,
                "type": "awardee",
                "title": "JORDAN V. KINTANAR, RMT",
                "number": 4,
                "category": "SPECIAL AWARD",
                "subtitle": "NTP Med Tech Coordinator · DOH-DCHD XI",
                "categoryTag": "SPECIAL AWARD"
            },
            {
                "id": 5,
                "type": "awardee",
                "title": "PHILIPPINE BUSINESS FOR SOCIAL PROGRESS (PBSP) ACCESS PROJECT",
                "number": 5,
                "category": "SPECIAL AWARD",
                "subtitle": "Project Team",
                "citations": [
                    "VIVIAN S. ANTONIO — Program Officer",
                    "PRINCESS SALCEDO-CORIAS, RN — TB Technical Officer",
                    "ELAINE GRACE N. ALIMES, RN — Regional Project Officer",
                    "JOBELLE L. FRANCO, RN — Program Officer",
                    "ELLEN G. GERMAN, RN — PMDT Nurse DRMC",
                    "KEZIA P. CABRERA, RMT — GenXpert Technician DRMC"
                ],
                "categoryTag": "SPECIAL AWARD"
            },
            {
                "id": 6,
                "type": "awardee",
                "title": "HON. LOU C. SUAYBAGUIO, REE, RN",
                "number": 6,
                "category": "SPECIAL AWARD",
                "subtitle": "Board Member District I · Chairperson - Committee on Health",
                "categoryTag": "SPECIAL AWARD"
            },
            {
                "id": 7,
                "type": "awardee",
                "title": "GLENN A. PONO, MD, FPCP, FPCCP",
                "number": 7,
                "category": "SPECIAL AWARD",
                "subtitle": "Internal Medicine / Pulmonologist · Davao del Norte TB Consultant",
                "categoryTag": "SPECIAL AWARD"
            },
            {
                "id": 8,
                "type": "awardee",
                "title": "JANICE G. ESPARAGOZA, MD, FPCR, FUSP",
                "number": 8,
                "category": "SPECIAL AWARD",
                "subtitle": "Radiologist · Davao del Norte TB Consultant",
                "categoryTag": "SPECIAL AWARD"
            },
            {
                "id": 9,
                "type": "awardee",
                "title": "MARIA VICTORIA L. LEGASPI, MD, FPCP, FPCCP, FCCP",
                "number": 9,
                "category": "SPECIAL AWARD",
                "subtitle": "Internal Medicine / Pulmonologist · Davao del Norte TB Consultant",
                "categoryTag": "SPECIAL AWARD"
            },
            {
                "id": 10,
                "type": "awardee",
                "title": "JEORGIE ARVIN S. LEGASPI, DPCOM, FPSMS, MAHA",
                "number": 10,
                "category": "SPECIAL AWARD",
                "subtitle": "Internal Medicine / Occupational Medicine · Davao del Norte TB Consultant",
                "categoryTag": "SPECIAL AWARD"
            },
            {
                "id": 11,
                "type": "awardee",
                "title": "JOEBELLE MAY GALANG-DELA CRUZ, MD, MPM, FPAFP",
                "number": 11,
                "category": "SPECIAL AWARD",
                "subtitle": "Vice Chairperson · Davao del Norte TB Medical Advisory Committee · DRMC",
                "categoryTag": "SPECIAL AWARD"
            },
            {
                "id": 12,
                "type": "awardee",
                "title": "VIKKI DARL R. RODRIGUEZ, MD, FPCP, DPSMID",
                "number": 12,
                "category": "SPECIAL AWARD",
                "subtitle": "Member · Davao del Norte TB Medical Advisory Committee · DRMC",
                "categoryTag": "SPECIAL AWARD"
            },
            {
                "id": 13,
                "type": "awardee",
                "title": "LOUELYN H. EXALA, MD, DBCOM",
                "number": 13,
                "category": "SPECIAL AWARD",
                "subtitle": "Member · Davao del Norte TB Medical Advisory Committee · RHU Kapalong",
                "categoryTag": "SPECIAL AWARD"
            },
            {
                "id": 14,
                "type": "awardee",
                "title": "DEVELOPMENT MANAGEMENT OFFICERS (DMOS)",
                "number": 14,
                "category": "SPECIAL AWARD",
                "subtitle": "DOH Provincial Health Team · Province of Davao del Norte",
                "citations": [
                    "VERGEL JAY T. BAUTISTA, MD, MPM — DMO V / Provincial Health Team Leader",
                    "ENGR. LORENA M. ORILLA, MPA — Development Management Officer",
                    "JENNIFER D. HINGGO, MPA — Development Management Officer",
                    "IAN PATRICK M. VIDAL, RMT — Development Management Officer",
                    "DARLENE DOROTHY C. ARAMASA, RMT — Development Management Officer"
                ],
                "categoryTag": "SPECIAL AWARD"
            },
            {
                "id": 15,
                "type": "awardee",
                "title": "PROVINCIAL SOCIAL WELFARE DEVELOPMENT OFFICE",
                "number": 15,
                "category": "SPECIAL AWARD",
                "subtitle": "ROSALINDA O. RAPISTA, RSW, MPA · P. G. Dept. Head",
                "categoryTag": "SPECIAL AWARD"
            },
            {
                "id": 16,
                "type": "awardee",
                "title": "PROVINCIAL ECONOMIC ENTERPRISE DEVELOPMENT OFFICE",
                "number": 16,
                "category": "SPECIAL AWARD",
                "subtitle": "DOMINIC R. BASALO, MD, MPM · P. G. Dept. Head",
                "categoryTag": "SPECIAL AWARD"
            },
            {
                "id": 17,
                "type": "awardee",
                "title": "SHARIFF AMILOARI S. MANIBPEL, MD, FPCP",
                "number": 17,
                "category": "HIGHEST REFERRALS FOR TB MANDATORY NOTIFICATION",
                "subtitle": "Internal Medicine / Pulmonologist · Tagum City",
                "categoryTag": "SPECIAL AWARD"
            },
            {
                "id": 18,
                "type": "awardee",
                "title": "ERLYN D. LOPEZ, MD, FPCR, FPCCP",
                "number": 18,
                "category": "HIGHEST REFERRALS FOR TB MANDATORY NOTIFICATION",
                "subtitle": "Pulmonologist · Panabo City",
                "categoryTag": "SPECIAL AWARD"
            },
            {
                "id": 19,
                "type": "closing",
                "title": "CONGRATULATIONS TO ALL SPECIAL AWARDEES",
                "subtitle": "DAVNOR TB SUMMIT 2026",
                "citation": "In grateful recognition of your invaluable dedication, technical assistance, and leadership in the elimination of Tuberculosis."
            }
        ]
    },

    # -------------------------------------------------------------------------
    # DECK 02: Referring Facilities (18 Hospitals + 5 Jails)
    # -------------------------------------------------------------------------
    {
        "folder": "02-referring-facilities",
        "key": "tb-02-referring-facilities",
        "title": "Special Awards — Referring Facilities",
        "category": "REFERRING FACILITIES",
        "subTitle": "Honoring referring hospitals, medical clinics, and detention facilities supporting the TB diagnostic network",
        "slides": [
            {
                "id": 0,
                "type": "title",
                "event": "DAVNOR TB SUMMIT 2026",
                "subEvent": "Province of Davao del Norte · Provincial Health Office",
                "title": "SPECIAL AWARDS — REFERRING FACILITIES",
                "category": "DAVNOR TB SUMMIT 2026",
                "citation": "Recognizing dedicated hospitals, private medical centers, and detention facilities in presumptive TB identification and referral"
            },
            {
                "id": 1,
                "type": "awardee",
                "title": "DAVAO DEL NORTE HOSPITAL — CARMEN ZONE",
                "number": 1,
                "category": "REFERRING HOSPITAL",
                "subtitle": "Dr. Ruchille Arrocena · OIC-Chief of Hospital II",
                "categoryTag": "REFERRING FACILITY"
            },
            {
                "id": 2,
                "type": "awardee",
                "title": "DAVAO DEL NORTE HOSPITAL — KAPALONG ZONE",
                "number": 2,
                "category": "REFERRING HOSPITAL",
                "subtitle": "Dr. Jessie Belga · Chief of Hospital II",
                "categoryTag": "REFERRING FACILITY"
            },
            {
                "id": 3,
                "type": "awardee",
                "title": "DRMC WARD EXTENSION (INFIRMARY)",
                "number": 3,
                "category": "REFERRING HOSPITAL",
                "subtitle": "Sawata, Davao del Norte",
                "categoryTag": "REFERRING FACILITY"
            },
            {
                "id": 4,
                "type": "awardee",
                "title": "JA ALEGRE MEDICAL CLINIC AND HOSPITAL",
                "number": 4,
                "category": "REFERRING HOSPITAL",
                "subtitle": "Kapalong, Davao del Norte",
                "categoryTag": "REFERRING FACILITY"
            },
            {
                "id": 5,
                "type": "awardee",
                "title": "CARMEN MEDICAL CLINIC AND HOSPITAL",
                "number": 5,
                "category": "REFERRING HOSPITAL",
                "subtitle": "Carmen, Davao del Norte",
                "categoryTag": "REFERRING FACILITY"
            },
            {
                "id": 6,
                "type": "awardee",
                "title": "BUNGABONG-SANICO MEDICAL CLINIC & MATERNITY HOSPITAL",
                "number": 6,
                "category": "REFERRING HOSPITAL",
                "subtitle": "Sto. Tomas, Davao del Norte",
                "categoryTag": "REFERRING FACILITY"
            },
            {
                "id": 7,
                "type": "awardee",
                "title": "ESTELA MEDICAL CLINIC & PHARMACY",
                "number": 7,
                "category": "REFERRING HOSPITAL",
                "subtitle": "Sto. Tomas, Davao del Norte",
                "categoryTag": "REFERRING FACILITY"
            },
            {
                "id": 8,
                "type": "awardee",
                "title": "EMILIO B. RIVERA PRIMARY CARE CENTER, INC.",
                "number": 8,
                "category": "REFERRING HOSPITAL",
                "subtitle": "Sto. Tomas, Davao del Norte",
                "categoryTag": "REFERRING FACILITY"
            },
            {
                "id": 9,
                "type": "awardee",
                "title": "MATUTES MEDICAL CLINIC AND HOSPITAL",
                "number": 9,
                "category": "REFERRING HOSPITAL",
                "subtitle": "Sto. Tomas, Davao del Norte",
                "categoryTag": "REFERRING FACILITY"
            },
            {
                "id": 10,
                "type": "awardee",
                "title": "METROPOLITAN POLYMEDICA COMMUNITY AND HOSPITAL, INC.",
                "number": 10,
                "category": "REFERRING HOSPITAL",
                "subtitle": "Sto. Tomas, Davao del Norte",
                "categoryTag": "REFERRING FACILITY"
            },
            {
                "id": 11,
                "type": "awardee",
                "title": "CAINGLET MEDICAL HOSPITAL, INC.",
                "number": 11,
                "category": "REFERRING HOSPITAL",
                "subtitle": "Panabo City",
                "categoryTag": "REFERRING FACILITY"
            },
            {
                "id": 12,
                "type": "awardee",
                "title": "GOOD SHEPHERD HOSPITAL OF PANABO CITY, INC.",
                "number": 12,
                "category": "REFERRING HOSPITAL",
                "subtitle": "Panabo City",
                "categoryTag": "REFERRING FACILITY"
            },
            {
                "id": 13,
                "type": "awardee",
                "title": "TADECO HOSPITAL",
                "number": 13,
                "category": "REFERRING HOSPITAL",
                "subtitle": "Panabo City",
                "categoryTag": "REFERRING FACILITY"
            },
            {
                "id": 14,
                "type": "awardee",
                "title": "AQUINO MEDICAL SPECIALISTS HOSPITAL, INC.",
                "number": 14,
                "category": "REFERRING HOSPITAL",
                "subtitle": "Tagum City",
                "categoryTag": "REFERRING FACILITY"
            },
            {
                "id": 15,
                "type": "awardee",
                "title": "CHRIST THE KING SPECIALISTS HOSPITAL",
                "number": 15,
                "category": "REFERRING HOSPITAL",
                "subtitle": "Tagum City",
                "categoryTag": "REFERRING FACILITY"
            },
            {
                "id": 16,
                "type": "awardee",
                "title": "MEDICAL MISSION GROUP HOSPITAL AND SERVICES COOPERATIVE OF TAGUM",
                "number": 16,
                "category": "REFERRING HOSPITAL",
                "subtitle": "Tagum City",
                "categoryTag": "REFERRING FACILITY"
            },
            {
                "id": 17,
                "type": "awardee",
                "title": "TAGUM GLOBAL MEDICAL CENTER, INC.",
                "number": 17,
                "category": "REFERRING HOSPITAL",
                "subtitle": "Tagum City",
                "categoryTag": "REFERRING FACILITY"
            },
            {
                "id": 18,
                "type": "awardee",
                "title": "UNITED DOCTORS HOSPITAL OF TAGUM, INC.",
                "number": 18,
                "category": "REFERRING HOSPITAL",
                "subtitle": "Tagum City",
                "categoryTag": "REFERRING FACILITY"
            },
            {
                "id": 19,
                "type": "awardee",
                "title": "DAVAO DEL NORTE PROVINCIAL REHABILITATION CENTER",
                "number": 19,
                "category": "DETENTION FACILITY",
                "subtitle": "PS Tristan C. Agag, RN · Provincial Rehabilitation Center",
                "categoryTag": "JAILS & CORRECTIONS"
            },
            {
                "id": 20,
                "type": "awardee",
                "title": "TAGUM CITY DISTRICT JAIL — MALE DORMITORY",
                "number": 20,
                "category": "DETENTION FACILITY",
                "subtitle": "SJO4 Jonathan D. Almonares, RN · Bureau of Jail Management and Penology",
                "image": "../assets/photos/jail_tagum.jpg",
                "categoryTag": "JAILS & CORRECTIONS"
            },
            {
                "id": 21,
                "type": "awardee",
                "title": "TAGUM CITY DISTRICT JAIL — FEMALE DORMITORY",
                "number": 21,
                "category": "DETENTION FACILITY",
                "subtitle": "JO2 Jenny Ann C. Melendrez, RN · Bureau of Jail Management and Penology",
                "image": "../assets/photos/jail_tagum.jpg",
                "categoryTag": "JAILS & CORRECTIONS"
            },
            {
                "id": 22,
                "type": "awardee",
                "title": "PANABO CITY DISTRICT JAIL",
                "number": 22,
                "category": "DETENTION FACILITY",
                "subtitle": "SJO4 Henry Aguisando, RN · Bureau of Jail Management and Penology",
                "image": "../assets/photos/jail_panabo.jpg",
                "categoryTag": "JAILS & CORRECTIONS"
            },
            {
                "id": 23,
                "type": "awardee",
                "title": "SAMAL CITY JAIL",
                "number": 23,
                "category": "DETENTION FACILITY",
                "subtitle": "JO2 Karland Dale C. Balon, RN · Bureau of Jail Management and Penology",
                "image": "../assets/photos/jail_samal.jpg",
                "categoryTag": "JAILS & CORRECTIONS"
            },
            {
                "id": 24,
                "type": "closing",
                "title": "SALUTE TO ALL REFERRING HOSPITALS & DETENTION FACILITIES",
                "subtitle": "DAVNOR TB SUMMIT 2026",
                "citation": "In grateful recognition of your vital role in screening, early detection, and timely referral of presumptive TB patients."
            }
        ]
    },

    # -------------------------------------------------------------------------
    # DECK 03: Individual Awards (TB Health Workforce)
    # -------------------------------------------------------------------------
    {
        "folder": "03-individual-awards",
        "key": "tb-03-individual-awards",
        "title": "Special Awards — TB Health Workforce",
        "category": "TB HEALTH WORKFORCE",
        "subTitle": "Honoring our frontline volunteers, specimen transport riders, coordinators, and diagnostic heroes",
        "slides": [
            {
                "id": 0,
                "type": "title",
                "event": "DAVNOR TB SUMMIT 2026",
                "subEvent": "Province of Davao del Norte · Provincial Health Office",
                "title": "SPECIAL AWARDS — TB HEALTH WORKFORCE",
                "category": "DAVNOR TB SUMMIT 2026",
                "citation": "Honoring the dedication, courage, and frontline service of our community volunteers, riders, and laboratory personnel"
            },
            {
                "id": 1,
                "type": "awardee",
                "title": "MIGUELITA C. AQUINO",
                "number": 1,
                "category": "TB COMMUNITY VOLUNTEER",
                "subtitle": "Tagum City",
                "categoryTag": "COMMUNITY VOLUNTEER"
            },
            {
                "id": 2,
                "type": "awardee",
                "title": "EVELYN J. RAZONABLE",
                "number": 2,
                "category": "TB COMMUNITY VOLUNTEER",
                "subtitle": "Tagum City",
                "categoryTag": "COMMUNITY VOLUNTEER"
            },
            {
                "id": 3,
                "type": "awardee",
                "title": "MA. LUNA G. AMBITO",
                "number": 3,
                "category": "TB COMMUNITY VOLUNTEER",
                "subtitle": "Tagum City",
                "categoryTag": "COMMUNITY VOLUNTEER"
            },
            {
                "id": 4,
                "type": "awardee",
                "title": "EVELYN M. ECHALAS",
                "number": 4,
                "category": "TB COMMUNITY VOLUNTEER",
                "subtitle": "Asuncion",
                "categoryTag": "COMMUNITY VOLUNTEER"
            },
            {
                "id": 5,
                "type": "awardee",
                "title": "TITING D. PAYNAG",
                "number": 5,
                "category": "TB COMMUNITY VOLUNTEER",
                "subtitle": "Kapalong",
                "categoryTag": "COMMUNITY VOLUNTEER"
            },
            {
                "id": 6,
                "type": "awardee",
                "title": "REYNALDO M. CELIS",
                "number": 6,
                "category": "SPECIMEN TRANSPORT RIDER",
                "subtitle": "Davao del Norte STRIDERS",
                "categoryTag": "STRIDERS"
            },
            {
                "id": 7,
                "type": "awardee",
                "title": "EDWIN S. SALANG",
                "number": 7,
                "category": "SPECIMEN TRANSPORT RIDER",
                "subtitle": "Davao del Norte STRIDERS",
                "categoryTag": "STRIDERS"
            },
            {
                "id": 8,
                "type": "awardee",
                "title": "GLADYS P. BANTILAN",
                "number": 8,
                "category": "SPECIMEN TRANSPORT RIDER",
                "subtitle": "Davao del Norte STRIDERS",
                "categoryTag": "STRIDERS"
            },
            {
                "id": 9,
                "type": "awardee",
                "title": "JEANIZE YARI B. TURQUEZA",
                "number": 9,
                "category": "PRIVATE SECTOR ENGAGEMENT OFFICER",
                "subtitle": "Davao del Norte PSENOS",
                "categoryTag": "PSENOS"
            },
            {
                "id": 10,
                "type": "awardee",
                "title": "ALTHEA A. GONZALES, RMT",
                "number": 10,
                "category": "PRIVATE SECTOR ENGAGEMENT OFFICER",
                "subtitle": "Davao del Norte PSENOS",
                "categoryTag": "PSENOS"
            },
            {
                "id": 11,
                "type": "awardee",
                "title": "KRISTINE MARIE E. PANSOY",
                "number": 11,
                "category": "ITIS PROJECT ASSOCIATE",
                "subtitle": "Information Technology & Digital Systems Coordinator",
                "categoryTag": "ITIS ASSOCIATE"
            },
            {
                "id": 12,
                "type": "awardee",
                "title": "MANASIS M. DIAMANTE, RN",
                "number": 12,
                "category": "DRMC DR-TB NURSE",
                "subtitle": "Davao Regional Medical Center",
                "categoryTag": "DR-TB NURSE"
            },
            {
                "id": 13,
                "type": "awardee",
                "title": "ELLEN G. GERMAN, RN",
                "number": 13,
                "category": "DRMC DR-TB NURSE",
                "subtitle": "Davao Regional Medical Center",
                "categoryTag": "DR-TB NURSE"
            },
            {
                "id": 14,
                "type": "awardee",
                "title": "JENRY KEN VINCENT I. MIBATO, RMT, MSMT, MLS(ASCPI)cm",
                "number": 14,
                "category": "GENEXPERT TECHNICIAN",
                "subtitle": "Tagum City RTDL",
                "categoryTag": "GENEXPERT TECH"
            },
            {
                "id": 15,
                "type": "awardee",
                "title": "CRISTINA TIARA A. FERNANDEZ, RMT",
                "number": 15,
                "category": "GENEXPERT TECHNICIAN",
                "subtitle": "Tagum City RTDL",
                "categoryTag": "GENEXPERT TECH"
            },
            {
                "id": 16,
                "type": "awardee",
                "title": "LEONA S. OLILA, RMT",
                "number": 16,
                "category": "GENEXPERT TECHNICIAN",
                "subtitle": "Tagum City RTDL",
                "categoryTag": "GENEXPERT TECH"
            },
            {
                "id": 17,
                "type": "awardee",
                "title": "NADINE GEMMA S. EUSTAQUIO, RMT",
                "number": 17,
                "category": "GENEXPERT TECHNICIAN",
                "subtitle": "Panabo City RTDL",
                "categoryTag": "GENEXPERT TECH"
            },
            {
                "id": 18,
                "type": "awardee",
                "title": "ALLEN GLENN B. SORIANO, RMT",
                "number": 18,
                "category": "GENEXPERT TECHNICIAN",
                "subtitle": "Panabo City RTDL",
                "categoryTag": "GENEXPERT TECH"
            },
            {
                "id": 19,
                "type": "awardee",
                "title": "CHRISTINE DENNISE P. OLAYAN, RMT",
                "number": 19,
                "category": "GENEXPERT TECHNICIAN",
                "subtitle": "Talaingod RTDL",
                "categoryTag": "GENEXPERT TECH"
            },
            {
                "id": 20,
                "type": "awardee",
                "title": "SHARON ROSE B. LACORDA, RMT",
                "number": 20,
                "category": "GENEXPERT TECHNICIAN",
                "subtitle": "Braulio E. Dujali RTDL",
                "categoryTag": "GENEXPERT TECH"
            },
            {
                "id": 21,
                "type": "awardee",
                "title": "ANNALOU O. OLANDRIA, RMT",
                "number": 21,
                "category": "GENEXPERT TECHNICIAN",
                "subtitle": "Sto. Tomas RTDL",
                "categoryTag": "GENEXPERT TECH"
            },
            {
                "id": 22,
                "type": "awardee",
                "title": "JENNIFER R. BRECIO, RMT",
                "number": 22,
                "category": "GENEXPERT TECHNICIAN",
                "subtitle": "Carmen RTDL",
                "categoryTag": "GENEXPERT TECH"
            },
            {
                "id": 23,
                "type": "closing",
                "title": "SALUTE TO THE DEDICATED DAVAO DEL NORTE TB WORKFORCE",
                "subtitle": "DAVNOR TB SUMMIT 2026",
                "citation": "In grateful recognition of your tireless dedication and essential service in specimen collection, rapid molecular testing, and frontline community care."
            }
        ]
    },

    # -------------------------------------------------------------------------
    # DECK 04: TB Providing Facilities (DOTS Providing Non-Health Centers)
    # -------------------------------------------------------------------------
    {
        "folder": "04-tb-providers",
        "key": "tb-04-tb-providers",
        "title": "Recognition Awards to TB Providing Facilities",
        "category": "DOTS PROVIDING NON-HEALTH CENTER FACILITIES",
        "subTitle": "Honoring DOTS & IDOTS facilities delivering comprehensive TB diagnostic and patient-centered treatment",
        "slides": [
            {
                "id": 0,
                "type": "title",
                "event": "DAVNOR TB SUMMIT 2026",
                "subEvent": "Province of Davao del Norte · Provincial Health Office",
                "title": "RECOGNITION AWARDS TO TB PROVIDING FACILITIES",
                "category": "DAVNOR TB SUMMIT 2026",
                "citation": "Commending institutional DOTS & IDOTS partners for unwavering commitment in providing high-standard TB diagnosis and treatment"
            },
            {
                "id": 1,
                "type": "awardee",
                "title": "DAVAO REGIONAL MEDICAL CENTER",
                "number": 1,
                "category": "DOTS PROVIDING FACILITY",
                "subtitle": "Tagum City",
                "categoryTag": "TB PROVIDING FACILITY"
            },
            {
                "id": 2,
                "type": "awardee",
                "title": "DAVAO REGIONAL MEDICAL CENTER — IDOTS",
                "number": 2,
                "category": "DOTS PROVIDING FACILITY",
                "subtitle": "Tagum City",
                "categoryTag": "TB PROVIDING FACILITY"
            },
            {
                "id": 3,
                "type": "awardee",
                "title": "DAVAO DEL NORTE HOSPITAL — SAMAL ZONE",
                "number": 3,
                "category": "DOTS PROVIDING FACILITY",
                "subtitle": "Island Garden City of Samal",
                "categoryTag": "TB PROVIDING FACILITY"
            },
            {
                "id": 4,
                "type": "awardee",
                "title": "DAVAO PRISON AND PENAL FARM INFIRMARY",
                "number": 4,
                "category": "DOTS PROVIDING FACILITY",
                "subtitle": "DAPECOL · B.E. Dujali / Panabo City",
                "categoryTag": "TB PROVIDING FACILITY"
            },
            {
                "id": 5,
                "type": "awardee",
                "title": "PHILIPPINE TUBERCULOSIS SOCIETY, INC. — TAGUM",
                "number": 5,
                "category": "DOTS PROVIDING FACILITY",
                "subtitle": "Tagum City",
                "image": "../assets/photos/ptsi_tagum.jpg",
                "categoryTag": "TB PROVIDING FACILITY"
            },
            {
                "id": 6,
                "type": "awardee",
                "title": "TAGUM DOCTORS HOSPITAL, INC.",
                "number": 6,
                "category": "DOTS PROVIDING FACILITY",
                "subtitle": "Tagum City",
                "categoryTag": "TB PROVIDING FACILITY"
            },
            {
                "id": 7,
                "type": "awardee",
                "title": "TAGUM MEDICAL CITY",
                "number": 7,
                "category": "DOTS PROVIDING FACILITY",
                "subtitle": "Tagum City",
                "categoryTag": "TB PROVIDING FACILITY"
            },
            {
                "id": 8,
                "type": "awardee",
                "title": "RIVERA MEDICAL CENTER, INC.",
                "number": 8,
                "category": "DOTS PROVIDING FACILITY",
                "subtitle": "Panabo City",
                "categoryTag": "TB PROVIDING FACILITY"
            },
            {
                "id": 9,
                "type": "awardee",
                "title": "PANABO POLYMEDIC HOSPITAL, INC.",
                "number": 9,
                "category": "DOTS PROVIDING FACILITY",
                "subtitle": "Panabo City",
                "categoryTag": "TB PROVIDING FACILITY"
            },
            {
                "id": 10,
                "type": "closing",
                "title": "SALUTE TO OUR DEDICATED TB PROVIDING FACILITIES",
                "subtitle": "DAVNOR TB SUMMIT 2026",
                "citation": "In grateful recognition of your sustained excellence in providing quality DOTS services and advancing patient-centered tuberculosis care."
            }
        ]
    },

    # -------------------------------------------------------------------------
    # DECK 05: Individual TB Indicator Awards (14 Indicators)
    # -------------------------------------------------------------------------
    {
        "folder": "05-top-health-centers",
        "key": "tb-05-top-health-centers",
        "title": "Individual TB Indicator Awards",
        "category": "INDIVIDUAL TB INDICATOR AWARDS",
        "subTitle": "Recognizing outstanding facilities for exceptional achievements across the TB Cascades of Care",
        "slides": [
            {
                "id": 0,
                "type": "title",
                "event": "DAVNOR TB SUMMIT 2026",
                "subEvent": "Province of Davao del Norte · Provincial Health Office",
                "title": "INDIVIDUAL TB INDICATOR AWARDS",
                "category": "DAVNOR TB SUMMIT 2026",
                "citation": "Honoring excellence in case notification, treatment coverage, cure rate, contact tracing, laboratory surveillance, and integrated TB care"
            },
            {
                "id": 1,
                "type": "awardee",
                "title": "PHILIPPINE TUBERCULOSIS SOCIETY, INC. — TAGUM BRANCH",
                "number": 1,
                "category": "HIGHEST NUMBER OF ENROLLED TB CASES — ALL FORMS",
                "subtitle": "567 Cases Enrolled in 2025 · High-Impact Treatment Network",
                "categoryTag": "INDICATOR AWARD 01"
            },
            {
                "id": 2,
                "type": "awardee",
                "title": "MUNICIPAL HEALTH OFFICE OF KAPALONG",
                "number": 2,
                "category": "HIGHEST TB CASE NOTIFICATION RATE",
                "subtitle": "580 per 100,000 Population in 2025 · Intensive Surveillance",
                "categoryTag": "INDICATOR AWARD 02"
            },
            {
                "id": 3,
                "type": "awardee",
                "title": "MUNICIPAL HEALTH OFFICE OF KAPALONG",
                "number": 3,
                "category": "HIGHEST TB TREATMENT COVERAGE RATE",
                "subtitle": "90.28% in 2025 · Benchmark Performance",
                "categoryTag": "INDICATOR AWARD 03"
            },
            {
                "id": 4,
                "type": "awardee",
                "title": "CITY HEALTH OFFICE OF TAGUM",
                "number": 4,
                "category": "HIGHEST NUMBER OF ENROLLED AND TREATED TB IN CHILDREN CASES",
                "subtitle": "48 Cases in 2025 · Pediatric TB Protection & Early Care",
                "categoryTag": "INDICATOR AWARD 04"
            },
            {
                "id": 5,
                "type": "awardee",
                "title": "CITY HEALTH OFFICE OF PANABO",
                "number": 5,
                "category": "HIGHEST NUMBER OF CURED DS-TB CASES",
                "subtitle": "242 Cured Cases in 2025 (Cohort 2024) · Dedicated Patient Adherence",
                "categoryTag": "INDICATOR AWARD 05"
            },
            {
                "id": 6,
                "type": "awardee",
                "title": "PHILIPPINE TUBERCULOSIS SOCIETY, INC. — TAGUM BRANCH",
                "number": 6,
                "category": "HIGHEST NUMBER OF SUCCESSFULLY TREATED DS-TB CASES",
                "subtitle": "518 Successfully Treated Cases in 2025 (Cohort 2024)",
                "categoryTag": "INDICATOR AWARD 06"
            },
            {
                "id": 7,
                "type": "awardee",
                "title": "MUNICIPAL HEALTH OFFICE OF SAWATA",
                "number": 7,
                "category": "HIGHEST DS-TB CURE RATE",
                "subtitle": "97% in 2025 (Cohort 2024) · High Cure Rate Performance",
                "categoryTag": "INDICATOR AWARD 07"
            },
            {
                "id": 8,
                "type": "awardee",
                "title": "MUNICIPAL HEALTH OFFICE OF SAWATA",
                "number": 8,
                "category": "HIGHEST DS-TB TREATMENT SUCCESS RATE",
                "subtitle": "100% DS-TB Treatment Success Rate in 2025 (Cohort 2024) · Flawless Retention",
                "categoryTag": "INDICATOR AWARD 08"
            },
            {
                "id": 9,
                "type": "awardee",
                "title": "MUNICIPAL HEALTH OFFICE OF KAPALONG",
                "number": 9,
                "category": "HIGHEST NUMBER OF CLOSE CONTACTS PROVIDED WITH TB PREVENTIVE TREATMENT",
                "subtitle": "255 Close Contacts Provided with TB Preventive Treatment (TPT) in 2025",
                "categoryTag": "INDICATOR AWARD 09"
            },
            {
                "id": 10,
                "type": "awardee",
                "title": "MUNICIPAL HEALTH OFFICE OF KAPALONG",
                "number": 10,
                "category": "100% PICT COVERAGE RATE WITH HIGHEST TB PATIENTS TESTED FOR HIV",
                "subtitle": "435 Cases in 2025 · 100% Provider-Initiated Counseling & Testing",
                "categoryTag": "INDICATOR AWARD 10"
            },
            {
                "id": 11,
                "type": "awardee",
                "title": "PHILIPPINE TUBERCULOSIS SOCIETY, INC. — TAGUM BRANCH",
                "number": 11,
                "category": "HIGHEST NUMBER OF ELIGIBLE TB PATIENTS TESTED FOR DIABETES",
                "subtitle": "555 Eligible Patients Tested for Diabetes in 2025 · Comprehensive Screening",
                "categoryTag": "INDICATOR AWARD 11"
            },
            {
                "id": 12,
                "type": "awardee",
                "title": "CITY HEALTH OFFICE OF PANABO",
                "number": 12,
                "category": "HIGHEST NUMBER OF SPUTUM-SMEARED TESTED",
                "subtitle": "864 Sputum Smear Tests Completed in 2025 · Relentless Surveillance",
                "categoryTag": "INDICATOR AWARD 12"
            },
            {
                "id": 13,
                "type": "awardee",
                "title": "CITY HEALTH OFFICE OF TAGUM",
                "number": 13,
                "category": "TOP PERFORMING RAPID TB DIAGNOSTIC LABORATORY (RTDL) IN DAVAO DEL NORTE",
                "subtitle": "3,389 Presumptive TB Patients Tested in 2025 · High-Volume Diagnostic Hub",
                "image": "../assets/photos/rtdl_top1_tagum.jpg",
                "categoryTag": "INDICATOR AWARD 13"
            },
            {
                "id": 14,
                "type": "awardee",
                "title": "DAVAO REGIONAL MEDICAL CENTER",
                "number": 14,
                "category": "OUTSTANDING RAPID TB DIAGNOSTIC LABORATORY (RTDL) SERVICE AWARD",
                "subtitle": "Exemplary Diagnostic Excellence · Referral & Molecular Hub of Davao del Norte",
                "categoryTag": "SPECIAL COMMENDATION"
            },
            {
                "id": 15,
                "type": "closing",
                "title": "CONGRATULATIONS TO ALL TOP PERFORMING HEALTH CENTERS",
                "subtitle": "DAVNOR TB SUMMIT 2026",
                "citation": "Recognizing leadership, diligence, and data-driven healthcare achievements transforming the fight against tuberculosis in Davao del Norte."
            }
        ]
    },

    # -------------------------------------------------------------------------
    # DECK 06: Top Performing BHW (Rank 10–4)
    # -------------------------------------------------------------------------
    {
        "folder": "06-top-bhw-10-4",
        "key": "tb-06-top-bhw-10-4",
        "title": "Top Performing BHW (Rank 10–4)",
        "category": "TOP 10 BARANGAY HEALTH WORKERS",
        "subTitle": "Distinction Awards for Outstanding Dedication in TB Case Finding, Patient Support, and Community Education",
        "slides": [
            {
                "id": 0,
                "type": "title",
                "event": "DAVNOR TB SUMMIT 2026",
                "subEvent": "Province of Davao del Norte · Provincial Health Office",
                "title": "TOP 10 BARANGAY HEALTH WORKERS (RANK 10–4)",
                "category": "DISTINCTION AWARDS",
                "citation": "In grateful recognition of your commendable performance and valuable contribution to the implementation of the TB Prevention and Control Program"
            },
            {
                "id": 1,
                "type": "awardee",
                "title": "DISTINCTION AWARDEES (RANK 10TH TO 4TH)",
                "number": 1,
                "category": "TOP 10 BARANGAY HEALTH WORKERS",
                "subtitle": "Honoring Ranks 10 through 4 · Exemplary Frontline Service",
                "categoryTag": "DISTINCTION OVERVIEW",
                "citations": [
                    "MELROSE S. MEDIDA — Macgum, New Corella (Rank 10)",
                    "JENNIFE C. ROVIRA — San Jose, Sto. Tomas (Rank 9)",
                    "MARY JANE B. CARGO — New Casay, B. E. Dujali (Rank 8)",
                    "LORENA G. RUZ — New Visayas, Panabo City (Rank 7)",
                    "HELEN B. FERNANDEZ — Mamangan, Sawata (Rank 6)",
                    "ESABETH SAMPAG — Gupitan, Kapalong (Rank 5)",
                    "AZENITH M. PAYBANO — San Miguel, Tagum City (Rank 4)"
                ]
            },
            {
                "id": 2,
                "type": "awardee",
                "title": "MELROSE S. MEDIDA",
                "number": 2,
                "category": "RANK 10 · DISTINCTION AWARD",
                "subtitle": "Barangay Macgum · Municipality of New Corella",
                "categoryTag": "10TH PLACE"
            },
            {
                "id": 3,
                "type": "awardee",
                "title": "JENNIFE C. ROVIRA",
                "number": 3,
                "category": "RANK 9 · DISTINCTION AWARD",
                "subtitle": "Barangay San Jose · Municipality of Sto. Tomas",
                "categoryTag": "9TH PLACE"
            },
            {
                "id": 4,
                "type": "awardee",
                "title": "MARY JANE B. CARGO",
                "number": 4,
                "category": "RANK 8 · DISTINCTION AWARD",
                "subtitle": "Barangay New Casay · Municipality of Braulio E. Dujali",
                "categoryTag": "8TH PLACE"
            },
            {
                "id": 5,
                "type": "awardee",
                "title": "LORENA G. RUZ",
                "number": 5,
                "category": "RANK 7 · DISTINCTION AWARD",
                "subtitle": "Barangay New Visayas · City of Panabo",
                "categoryTag": "7TH PLACE"
            },
            {
                "id": 6,
                "type": "awardee",
                "title": "HELEN B. FERNANDEZ",
                "number": 6,
                "category": "RANK 6 · DISTINCTION AWARD",
                "subtitle": "Barangay Mamangan · Municipality of Sawata",
                "categoryTag": "6TH PLACE"
            },
            {
                "id": 7,
                "type": "awardee",
                "title": "ESABETH SAMPAG",
                "number": 7,
                "category": "RANK 5 · DISTINCTION AWARD",
                "subtitle": "Barangay Gupitan · Municipality of Kapalong",
                "categoryTag": "5TH PLACE"
            },
            {
                "id": 8,
                "type": "awardee",
                "title": "AZENITH M. PAYBANO",
                "number": 8,
                "category": "RANK 4 · DISTINCTION AWARD",
                "subtitle": "Barangay San Miguel · City of Tagum",
                "categoryTag": "4TH PLACE"
            },
            {
                "id": 9,
                "type": "closing",
                "title": "MABUHAY ANG ATING MGA BARANGAY HEALTH WORKERS!",
                "subtitle": "DAVNOR TB SUMMIT 2026",
                "citation": "Salute to our frontline heroes bridging communities and healthcare facilities in the shared mission to eliminate tuberculosis."
            }
        ]
    },

    # -------------------------------------------------------------------------
    # DECK 07: Top Performing Barangay (Rank 10–4)
    # -------------------------------------------------------------------------
    {
        "folder": "07-top-barangay-10-4",
        "key": "tb-07-top-barangay-10-4",
        "title": "Top Performing Barangay (Rank 10–4)",
        "category": "TOP 10 BARANGAY HEALTH STATIONS",
        "subTitle": "Distinction Awards for Strengthening the Four TB Cascades of Care and Local Political Commitment",
        "slides": [
            {
                "id": 0,
                "type": "title",
                "event": "DAVNOR TB SUMMIT 2026",
                "subEvent": "Province of Davao del Norte · Provincial Health Office",
                "title": "TOP 10 BARANGAY HEALTH STATIONS (RANK 10–4)",
                "category": "DISTINCTION AWARDS",
                "citation": "Recognizing commendable performance in the Four TB Cascades of Care — Screening, Testing, Treatment, and Prevention — with strong local leadership"
            },
            {
                "id": 1,
                "type": "awardee",
                "title": "DISTINCTION AWARDEES (RANK 10TH TO 4TH)",
                "number": 1,
                "category": "TOP 10 BARANGAY HEALTH STATIONS",
                "subtitle": "Honoring Ranks 10 through 4 · Community TB Cascade Excellence",
                "categoryTag": "DISTINCTION OVERVIEW",
                "citations": [
                    "BHS – SINDATON, PANABO CITY · B/Capt. Eduardo O. Bernaldez (Rank 10)",
                    "BHS – SAN MIGUEL, TAGUM CITY · B/Capt. Maximo D. Suico (Rank 9)",
                    "BHS – CEBULANO, CARMEN · B/Capt. Jerson R. Tacmoy (Rank 8)",
                    "BHS – MAMANGAN, SAWATA · B/Capt. Joel F. Hernandez (Rank 7)",
                    "BHS – MAGDUM, TAGUM CITY · B/Capt. Clarita B. Rey (Rank 6)",
                    "BHS – LIMBAAN, NEW CORELLA · B/Capt. Orbestondo P. Palen (Rank 5)",
                    "BHS – PAG-ASA, KAPALONG · B/Capt. Ricardo B. Maymay (Rank 4)"
                ]
            },
            {
                "id": 2,
                "type": "awardee",
                "title": "BHS — SINDATON, PANABO CITY",
                "number": 2,
                "category": "RANK 10 · DISTINCTION AWARD",
                "subtitle": "Punong Barangay: Hon. Eduardo O. Bernaldez · City of Panabo",
                "categoryTag": "10TH PLACE"
            },
            {
                "id": 3,
                "type": "awardee",
                "title": "BHS — SAN MIGUEL, TAGUM CITY",
                "number": 3,
                "category": "RANK 9 · DISTINCTION AWARD",
                "subtitle": "Punong Barangay: Hon. Maximo D. Suico · City of Tagum",
                "categoryTag": "9TH PLACE"
            },
            {
                "id": 4,
                "type": "awardee",
                "title": "BHS — CEBULANO, CARMEN",
                "number": 4,
                "category": "RANK 8 · DISTINCTION AWARD",
                "subtitle": "Punong Barangay: Hon. Jerson R. Tacmoy · Municipality of Carmen",
                "categoryTag": "8TH PLACE"
            },
            {
                "id": 5,
                "type": "awardee",
                "title": "BHS — MAMANGAN, SAWATA",
                "number": 5,
                "category": "RANK 7 · DISTINCTION AWARD",
                "subtitle": "Punong Barangay: Hon. Joel F. Hernandez · Municipality of Sawata",
                "categoryTag": "7TH PLACE"
            },
            {
                "id": 6,
                "type": "awardee",
                "title": "BHS — MAGDUM, TAGUM CITY",
                "number": 6,
                "category": "RANK 6 · DISTINCTION AWARD",
                "subtitle": "Punong Barangay: Hon. Clarita B. Rey · City of Tagum",
                "categoryTag": "6TH PLACE"
            },
            {
                "id": 7,
                "type": "awardee",
                "title": "BHS — LIMBAAN, NEW CORELLA",
                "number": 7,
                "category": "RANK 5 · DISTINCTION AWARD",
                "subtitle": "Punong Barangay: Hon. Orbestondo P. Palen · Municipality of New Corella",
                "categoryTag": "5TH PLACE"
            },
            {
                "id": 8,
                "type": "awardee",
                "title": "BHS — PAG-ASA, KAPALONG",
                "number": 8,
                "category": "RANK 4 · DISTINCTION AWARD",
                "subtitle": "Punong Barangay: Hon. Ricardo B. Maymay · Municipality of Kapalong",
                "categoryTag": "4TH PLACE"
            },
            {
                "id": 9,
                "type": "closing",
                "title": "CONGRATULATIONS TO OUR CHAMPION BARANGAYS",
                "subtitle": "DAVNOR TB SUMMIT 2026",
                "citation": "Salute to our exemplary barangay leadership and frontline health stations championing community tuberculosis prevention and care."
            }
        ]
    },

    # -------------------------------------------------------------------------
    # DECK 08: Consolation TB Providers (Distinction Ranks 13–4)
    # -------------------------------------------------------------------------
    {
        "folder": "08-consolation-tb-providers",
        "key": "tb-08-consolation-tb-providers",
        "title": "Consolation Awards — TB Providing Facilities",
        "category": "TOP TB PROVIDING HEALTH CENTER FACILITIES",
        "subTitle": "Distinction Awards (Rank 13th to 4th) Commending Dedicated TB Service Delivery Across Davao del Norte",
        "slides": [
            {
                "id": 0,
                "type": "title",
                "event": "DAVNOR TB SUMMIT 2026",
                "subEvent": "Province of Davao del Norte · Provincial Health Office",
                "title": "TOP TB PROVIDING HEALTH CENTER FACILITIES",
                "category": "DISTINCTION AWARDS (RANK 13–4)",
                "citation": "In grateful recognition of commendable performance and dedicated service in the implementation of the Davao del Norte TB Prevention and Control Program"
            },
            {
                "id": 1,
                "type": "awardee",
                "title": "DISTINCTION AWARDEES (RANK 13TH TO 4TH)",
                "number": 1,
                "category": "TOP TB PROVIDING HEALTH CENTER FACILITIES",
                "subtitle": "Official Overall Performance Scores",
                "categoryTag": "DISTINCTION OVERVIEW",
                "citations": [
                    "MUNICIPAL HEALTH OFFICE OF TALAINGOD — 29.48% (Rank 13)",
                    "DISTRICT HEALTH OFFICE OF KAPUTIAN, IGACOS — 32.69% (Rank 12)",
                    "DISTRICT HEALTH OFFICE OF BABAK, IGACOS — 34.77% (Rank 11)",
                    "MUNICIPAL HEALTH OFFICE OF BRAULIO E. DUJALI — 37.96% (Rank 10)",
                    "MUNICIPAL HEALTH OFFICE OF ASUNCION — 41.66% (Rank 9)",
                    "DISTRICT HEALTH OFFICE OF SAMAL, IGACOS — 41.79% (Rank 8)",
                    "MUNICIPAL HEALTH OFFICE OF NEW CORELLA — 47.74% (Rank 7)",
                    "MUNICIPAL HEALTH OFFICE OF SAWATA — 50.43% (Rank 6)",
                    "PANABO CITY HEALTH OFFICE — 57.33% (Rank 5)",
                    "MUNICIPAL HEALTH OFFICE OF CARMEN — 60.92% (Rank 4)"
                ]
            },
            {
                "id": 2,
                "type": "awardee",
                "title": "MUNICIPAL HEALTH OFFICE OF TALAINGOD",
                "number": 2,
                "category": "RANK 13 · DISTINCTION AWARD",
                "subtitle": "Municipality of Talaingod · Overall Score: 29.48%",
                "citations": [
                    "DR. RICAR P. APAS, MD — Tb Medical Coordinator",
                    "MARIA LIZA R. MONTERO, RN — Tb Nurse Coordinator",
                    "CHRISTINE DENNISE P. OLAYAN, RMT — Tb Med Tech Coordinator",
                    "JOSEPHINE S. BANTAO, RM — HEPO",
                    "JESSA B. VILLANUEVA — Tb Community Health Worker (CHW)",
                    "MARILYN D. ASI-AN · SONIA B. COLE — Community Health Workers"
                ],
                "categoryTag": "13TH PLACE"
            },
            {
                "id": 3,
                "type": "awardee",
                "title": "DISTRICT HEALTH OFFICE OF KAPUTIAN",
                "number": 3,
                "category": "RANK 12 · DISTINCTION AWARD",
                "subtitle": "Island Garden City of Samal · Overall Score: 32.69%",
                "citations": [
                    "DR. DENNIS CARLOS D. FLORES — City Health Officer",
                    "DR. FRITZ GERARD M. LLANOS — Tb Medical Coordinator",
                    "SWEET DAFFODIL N. ROBLE, RN, MAN — Tb Nurse Coordinator",
                    "ELIAZAR L. GUALDAJARA JR., RMT — Medical Technologist",
                    "ALJON B. OLIVEROS — ITIS Encoder",
                    "ANA MARIE E. MACABENTA, RN — HEPO · TELY GRACE P. LUCERO, RN MAN — Admin Officer",
                    "JELYN S. PAGALAN · JENNY B. MONTEJO · MARIBEL M. CORTEZ — CHWs"
                ],
                "categoryTag": "12TH PLACE"
            },
            {
                "id": 4,
                "type": "awardee",
                "title": "DISTRICT HEALTH OFFICE OF BABAK",
                "number": 4,
                "category": "RANK 11 · DISTINCTION AWARD",
                "subtitle": "Island Garden City of Samal · Overall Score: 34.77%",
                "citations": [
                    "DR. JOSE BERNARD D. YAP — Tb Medical Coordinator",
                    "TEODORO C. MEJIAS JR., RN — Public Health Nurse",
                    "AIZA MATAS, RMT — Medical Technologist",
                    "ZENITH JANE T. SAMBILAD — ITIS Encoder",
                    "MARITESS F. SUSAS — Tb Community Health Worker (CHW)",
                    "MEREJINE B. SUAREZ · RUDITH V. JOVEN — Community Health Workers"
                ],
                "categoryTag": "11TH PLACE"
            },
            {
                "id": 5,
                "type": "awardee",
                "title": "MUNICIPAL HEALTH OFFICE OF BRAULIO E. DUJALI",
                "number": 5,
                "category": "RANK 10 · DISTINCTION AWARD",
                "subtitle": "Municipality of Braulio E. Dujali · Overall Score: 37.96%",
                "citations": [
                    "DR. CHERRY T. DEMAALA — Tb Medical Coordinator",
                    "JOVELYN A. DUMALUAN, RN — Tb Nurse Coordinator",
                    "BETTY L. CALAMAY, RM — Tb Focal Person",
                    "SHARON ROSE B. LACORDA, RMT — Tb Med Tech Coordinator",
                    "FRENALIE D. BESAGAS — Laboratory Aide",
                    "CHERYL R. GENTALLAN · NENA C. PLAGA · NOIME A. FLORES — CHWs"
                ],
                "categoryTag": "10TH PLACE"
            },
            {
                "id": 6,
                "type": "awardee",
                "title": "MUNICIPAL HEALTH OFFICE OF ASUNCION",
                "number": 6,
                "category": "RANK 9 · DISTINCTION AWARD",
                "subtitle": "Municipality of Asuncion · Overall Score: 41.66%",
                "citations": [
                    "DR. JOHN C. BATACAN — Municipal Health Officer",
                    "DR. JUSTIN LOUIE RYAN S. YUMANG — Medical Officer IV",
                    "RUEBEN L. IMBANG, RN — Tb Nurse Coordinator",
                    "KRIZZIA MAE A. SABUDAN, RMT — Tb Med Tech Coordinator",
                    "JENNIE F. AVENIDO · DAISY L. ESCALA · WENDY S. TAUNGAAN — CHWs",
                    "EVELYN M. ECHALAS — CHW / Community Volunteer"
                ],
                "categoryTag": "9TH PLACE"
            },
            {
                "id": 7,
                "type": "awardee",
                "title": "DISTRICT HEALTH OFFICE OF SAMAL",
                "number": 7,
                "category": "RANK 8 · DISTINCTION AWARD",
                "subtitle": "Island Garden City of Samal · Overall Score: 41.79%",
                "citations": [
                    "DR. STEPHANIE ALVAR R. PARREÑO — Tb Medical Coordinator",
                    "WENFREDO L. LAVADOR, RN — Public Health Nurse",
                    "CLARICE FAYE C. CAMANZO, RMT — Medical Technologist",
                    "DEN MARK V. ROMO — ITIS Encoder",
                    "JO-ANN L. TANGINAN · JACKYLOU C. SERRANO · MARY GRACE L. VILLAHERMOSA — CHWs"
                ],
                "categoryTag": "8TH PLACE"
            },
            {
                "id": 8,
                "type": "awardee",
                "title": "MUNICIPAL HEALTH OFFICE OF NEW CORELLA",
                "number": 8,
                "category": "RANK 7 · DISTINCTION AWARD",
                "subtitle": "Municipality of New Corella · Overall Score: 47.74%",
                "citations": [
                    "DR. NANCY CACAYORIN — Tb Medical Coordinator",
                    "DR. JULIUS CLOYDE A. JALA — Assistant Municipal Health Officer",
                    "MARITES M. BELLOSA, RM, BSM — Tb Coordinator",
                    "INGRID J. CUÑADO, RMT — Tb Med Tech Coordinator",
                    "LIZA C. MANUBAG, RN — HEPO",
                    "JOY E. OMBILAYAN · JEANNIFER C. HANGAD · RECEL S. BALILI — CHWs"
                ],
                "categoryTag": "7TH PLACE"
            },
            {
                "id": 9,
                "type": "awardee",
                "title": "MUNICIPAL HEALTH OFFICE OF SAWATA",
                "number": 9,
                "category": "RANK 6 · DISTINCTION AWARD",
                "subtitle": "Municipality of Sawata · Overall Score: 50.43%",
                "citations": [
                    "DR. MERCY ASUNCION U. MACASERO, MD — Tb Medical Coordinator",
                    "DR. KESSEL T. DOMINGUEZ, MD — DTTB",
                    "JAY RYAN G. VALIAO, RN — Tb Nurse Coordinator",
                    "JOHN RUMEL N. JADRAQUE, RMT — Tb Med Tech Coordinator",
                    "JAY M. CARMELOTES — ITIS Encoder",
                    "JOELITA B. TUYOR · ELSEVITA P. FERNANDEZ · EVA GRACE J. MANILA — CHWs"
                ],
                "categoryTag": "6TH PLACE"
            },
            {
                "id": 10,
                "type": "awardee",
                "title": "CITY HEALTH OFFICE OF PANABO",
                "number": 10,
                "category": "RANK 5 · DISTINCTION AWARD",
                "subtitle": "City of Panabo · Overall Score: 57.33%",
                "citations": [
                    "DR. ALGAE ROSE S. HECHANOVA — City Health Officer",
                    "DR. RAYAN JAE A. DEOCAMPO — Tb Medical Coordinator",
                    "MARY DIVINE GRACE T. HOFILEÑA, RN — Tb Nurse Coordinator",
                    "NADINE GEMMA S. EUSTAQUIO, RMT — Tb Med Tech Coordinator",
                    "CHERI S. LENDIO, RN — HEPO II · LEONIDA D. BASOBAS — Lab Aide",
                    "JENEFER N. ANTON · NERISSA B. GORRE · SHAA B. MAMAD · MARDEL S. LUMAAD — CHWs"
                ],
                "categoryTag": "5TH PLACE"
            },
            {
                "id": 11,
                "type": "awardee",
                "title": "MUNICIPAL HEALTH OFFICE OF CARMEN",
                "number": 11,
                "category": "RANK 4 · DISTINCTION AWARD",
                "subtitle": "Municipality of Carmen · Overall Score: 60.92%",
                "citations": [
                    "DR. HANNAH KATRINA P. SEVILLA, DBPA, FPSA, FPSMSG — Municipal Health Officer",
                    "DR. THOMPSON C. UY — Tb Consultant",
                    "JANE S. APUACA, RM, BSM — Tb Coordinator",
                    "CHERISH MADEL B. ELLECO, RMT — Tb Med Tech Coordinator",
                    "ROY P. SANTILLAN, RN — HEPO",
                    "FEMER B. DABALOS · ANNALOU A. BASOT · GEMMA L. BAJAO · ELSIE S. VERGARA — CHWs"
                ],
                "categoryTag": "4TH PLACE"
            },
            {
                "id": 12,
                "type": "closing",
                "title": "SALUTE TO ALL DISTINCTION TB PROVIDING FACILITIES",
                "subtitle": "DAVNOR TB SUMMIT 2026",
                "citation": "Your steadfast dedication, community mobilization, and resilient healthcare delivery inspire the entire Province of Davao del Norte."
            }
        ]
    },

    # -------------------------------------------------------------------------
    # DECK 09: Top Performing BHW (Rank 3–1 / Podium)
    # -------------------------------------------------------------------------
    {
        "folder": "09-top-bhw-3-1",
        "key": "tb-09-top-bhw-3-1",
        "title": "Top Performing BHW (Rank 3–1 / Podium)",
        "category": "OUTSTANDING BARANGAY HEALTH WORKERS",
        "subTitle": "Grand Podium Celebration of the Top 3, Top 2, and Champion Barangay Health Workers of Davao del Norte",
        "slides": [
            {
                "id": 0,
                "type": "title",
                "event": "DAVNOR TB SUMMIT 2026",
                "subEvent": "Province of Davao del Norte · Provincial Health Office",
                "title": "TOP 3 OUTSTANDING BARANGAY HEALTH WORKERS",
                "category": "GRAND PODIUM ANNOUNCEMENT",
                "citation": "Celebrating the highest achievers in frontline TB case finding, community mobilization, and patient adherence across Davao del Norte"
            },
            {
                "id": 1,
                "type": "awardee",
                "title": "LUZVIMINDA C. MELLEJOR",
                "number": 1,
                "category": "TOP 3 OUTSTANDING BARANGAY HEALTH WORKER",
                "subtitle": "Barangay Ising · Municipality of Carmen · Overall Score: 73/100",
                "image": "../assets/photos/bhw_top3_mellejor.jpg",
                "categoryTag": "🥉 3RD PLACE"
            },
            {
                "id": 2,
                "type": "awardee",
                "title": "EVELYN M. ECHALAS",
                "number": 2,
                "category": "TOP 2 OUTSTANDING BARANGAY HEALTH WORKER",
                "subtitle": "Barangay Cambanogoy · Municipality of Asuncion · Overall Score: 74/100",
                "image": "../assets/photos/bhw_top2_echalas.jpg",
                "categoryTag": "🥈 2ND PLACE"
            },
            {
                "id": 3,
                "type": "awardee",
                "title": "MIGUELITA C. AQUINO",
                "number": 3,
                "category": "TOP 1 OUTSTANDING BARANGAY HEALTH WORKER",
                "subtitle": "Barangay Madaum · City of Tagum · Overall Score: 78/100",
                "image": "../assets/photos/bhw_top1_aquino.jpg",
                "categoryTag": "🥇 GRAND CHAMPION"
            },
            {
                "id": 4,
                "type": "closing",
                "title": "MABUHAY ANG ATING MGA BARANGAY HEALTH WORKERS!",
                "subtitle": "DAVNOR TB SUMMIT 2026",
                "citation": "In grateful recognition of your outstanding dedication, compassion, and exemplary service in achieving a TB-free Davao del Norte."
            }
        ]
    },

    # -------------------------------------------------------------------------
    # DECK 10: Top Performing Barangay (Rank 3–1 / Podium)
    # -------------------------------------------------------------------------
    {
        "folder": "10-top-barangay-3-1",
        "key": "tb-10-top-barangay-3-1",
        "title": "Top Performing Barangay (Rank 3–1 / Podium)",
        "category": "OUTSTANDING BARANGAY HEALTH STATIONS",
        "subTitle": "Grand Podium Celebration of the Top 3, Top 2, and Champion Barangay Health Stations in TB Elimination",
        "slides": [
            {
                "id": 0,
                "type": "title",
                "event": "DAVNOR TB SUMMIT 2026",
                "subEvent": "Province of Davao del Norte · Provincial Health Office",
                "title": "TOP 3 OUTSTANDING BARANGAY HEALTH STATIONS",
                "category": "GRAND PODIUM ANNOUNCEMENT",
                "citation": "Honoring excellence in the Four TB Cascades of Care — Screening, Testing, Treatment, and Prevention — with steadfast political leadership"
            },
            {
                "id": 1,
                "type": "awardee",
                "title": "BHS — MADAUM 1, TAGUM CITY",
                "number": 1,
                "category": "TOP 3 OUTSTANDING BARANGAY HEALTH STATION",
                "subtitle": "Punong Barangay: Hon. Leo C. Uy · Overall Score: 74/100",
                "image": "../assets/photos/bhs_top3_madaum_tagum.jpg",
                "categoryTag": "🥉 3RD PLACE"
            },
            {
                "id": 2,
                "type": "awardee",
                "title": "BHS — CAPUNGAGAN, KAPALONG",
                "number": 2,
                "category": "TOP 2 OUTSTANDING BARANGAY HEALTH STATION",
                "subtitle": "Punong Barangay: Hon. Sergio A. Acquiatan · Overall Score: 76/100",
                "image": "../assets/photos/bhs_top2_capungagan_kapalong.jpg",
                "categoryTag": "🥈 2ND PLACE"
            },
            {
                "id": 3,
                "type": "awardee",
                "title": "BHS — GUPITAN, KAPALONG",
                "number": 3,
                "category": "TOP 1 OUTSTANDING BARANGAY HEALTH STATION",
                "subtitle": "Punong Barangay: Hon. Marco Antonio O. Pupa · Overall Score: 79/100",
                "image": "../assets/photos/bhs_top1_gupitan_kapalong.jpg",
                "categoryTag": "🥇 GRAND CHAMPION"
            },
            {
                "id": 4,
                "type": "closing",
                "title": "CONGRATULATIONS TO OUR CHAMPION BARANGAYS!",
                "subtitle": "DAVNOR TB SUMMIT 2026",
                "citation": "In recognition of your outstanding performance, strong political commitment, and exemplary partnership in achieving a TB-free Davao del Norte."
            }
        ]
    },

    # -------------------------------------------------------------------------
    # DECK 11: Top TB Providers (Rank 3–1 / Podium)
    # -------------------------------------------------------------------------
    {
        "folder": "11-top-tb-providers-3-1",
        "key": "tb-11-top-tb-providers-3-1",
        "title": "Top Performing TB Providing Facilities (Rank 3–1 / Podium)",
        "category": "GRAND PODIUM AWARDEES",
        "subTitle": "Grand Podium Celebration of Bronze, Silver, and Champion TB Providing Facilities: Sto. Tomas, Tagum City, and Kapalong",
        "slides": [
            {
                "id": 0,
                "type": "title",
                "event": "DAVNOR TB SUMMIT 2026",
                "subEvent": "Province of Davao del Norte · Provincial Health Office",
                "title": "TOP 3–1 PERFORMING TB PROVIDING FACILITIES",
                "category": "GRAND PODIUM CEREMONY",
                "citation": "Grand celebration of the Bronze, Silver, and Champion Municipal and City Health Offices leading the elimination of TB in Davao del Norte"
            },
            {
                "id": 1,
                "type": "awardee",
                "title": "MUNICIPAL HEALTH OFFICE OF STO. TOMAS",
                "number": 1,
                "category": "3RD PLACE — TOP TB PROVIDING HEALTH CENTER FACILITY",
                "subtitle": "Municipality of Sto. Tomas · Overall Score: 63.00%",
                "image": "../assets/photos/provider_top3_sto_tomas.jpg",
                "categoryTag": "🥉 3RD PLACE · BRONZE"
            },
            {
                "id": 2,
                "type": "awardee",
                "title": "MHO STO. TOMAS — HEALTHCARE TEAM & VOLUNTEERS",
                "number": 2,
                "category": "HEALTHCARE TEAM RECOGNITION",
                "subtitle": "Municipality of Sto. Tomas · Bronze Podium Finalist",
                "citations": [
                    "DR. JUNE P. LIM, RMT, MD, MPM — Tb Medical Coordinator",
                    "RAYCHELE M. ABUDA, RN — Tb Nurse Coordinator",
                    "ANNALOU O. OLANDRIA, RMT — Tb Med Tech Coordinator",
                    "GEMMA M. DURAN — HEPO",
                    "MARIBEL A. OBEAL — Tb Community Health Worker (CHW)",
                    "JANETTE B. MEDINA · ROSIE S. SIBAY · HELEN P. VELARDE — Community Health Workers"
                ],
                "categoryTag": "3RD PLACE TEAM"
            },
            {
                "id": 3,
                "type": "awardee",
                "title": "CITY HEALTH OFFICE OF TAGUM",
                "number": 3,
                "category": "2ND PLACE — TOP TB PROVIDING HEALTH CENTER FACILITY",
                "subtitle": "City of Tagum · Overall Score: 66.28%",
                "image": "../assets/photos/provider_top2_tagum.jpg",
                "categoryTag": "🥈 2ND PLACE · SILVER"
            },
            {
                "id": 4,
                "type": "awardee",
                "title": "CHO TAGUM — HEALTHCARE LEADERSHIP & TECHNICAL TEAM",
                "number": 4,
                "category": "LEADERSHIP & TECHNICAL TEAM",
                "subtitle": "City of Tagum · Silver Podium Finalist",
                "citations": [
                    "DR. MUHAMMAD HISHAM B. MACKNO, MD — Tb Medical Coordinator",
                    "JOHAN CALVIN P. CHIENG, RN — Tb Nurse Coordinator",
                    "CRISTINA A. FERNANDEZ, RMT — Tb Med Tech Coordinator",
                    "JOSEPH JASON SOLIS — ITIS Encoder",
                    "EVALY FAITH V. EUGENIO, RMT — Supervising Health Officer IV",
                    "RAE KATHERINE APURA, RN — HEPO III",
                    "LORENA S. PEÑAS — Laboratory Aide"
                ],
                "categoryTag": "2ND PLACE LEADERSHIP"
            },
            {
                "id": 5,
                "type": "awardee",
                "title": "CHO TAGUM — COMMUNITY HEALTH WORKERS & VOLUNTEERS",
                "number": 5,
                "category": "FRONTLINE WORKFORCE RECOGNITION",
                "subtitle": "City of Tagum · Frontline Community Health Workers",
                "citations": [
                    "MIGUELITA C. AQUINO · EVELYN J. RAZONABLE · MA. LUNA G. AMBITO — CHW / Community Volunteers",
                    "ALMERA R. ABELLANA · MARIANITA A. ABUCAY · MARITESS B. ANACAYA · JOAN L. ARAÑO — CHWs",
                    "JOSELYN L. BAYA · RUBY L. BITANGCOL · CRISTINE JOY P. BUAYA · DATCHES B. BUNAYAN — CHWs",
                    "AMELIA A. CATUBIG · HAYDELISA C. CONCON · LORIEBETH D. DAYAG · MARIA CEILO D. DEOCARES — CHWs",
                    "CARMELITA C. FAMILAR · TERESITA S. FERNANDEZ · NICANORA M. FUNESTO · GRACE A. GAUM — CHWs",
                    "MILAGROSA C. HINAY · FE L. MACIAS · MILDRED C. MAGDADARO · KARENA B. MAYOR — CHWs",
                    "EDNA C. MOMONGAN · MARIA ELITA Q. ONONG · BABYLYN C. PANGONA · AZENITH M. PAYBANO — CHWs",
                    "ROSALIA PUNO · JINA Q. RABE · SHEILA C. ROLLO · VIRGENIA G. SAREÑANA — CHWs",
                    "GEMIMA A. VELA · MARYJEAN C. BUSTAMANTE · AILYN O. NATURAL — CHWs"
                ],
                "categoryTag": "2ND PLACE CHWS"
            },
            {
                "id": 6,
                "type": "awardee",
                "title": "MUNICIPAL HEALTH OFFICE OF KAPALONG",
                "number": 6,
                "category": "1ST PLACE — TOP TB PROVIDING HEALTH CENTER FACILITY",
                "subtitle": "Municipality of Kapalong · Overall Score: 80.19%",
                "image": "../assets/photos/provider_top1_kapalong.png",
                "categoryTag": "🥇 1ST PLACE · GRAND CHAMPION"
            },
            {
                "id": 7,
                "type": "awardee",
                "title": "MHO KAPALONG — CHAMPION HEALTHCARE & FRONTLINE TEAM",
                "number": 7,
                "category": "CHAMPION HEALTHCARE TEAM",
                "subtitle": "Municipality of Kapalong · Grand Champion Team",
                "citations": [
                    "DR. LOUELYN H. EXALA, MD, DBCOM — TB Medical Coordinator",
                    "IRWIN JOSEPH B. BATIBUT, RN — Tb Nurse Coordinator",
                    "RENATO C. NAVARRO JR., RMT — Tb Med Tech Coordinator",
                    "AL BARRAY T. PERALTA — ITIS Encoder",
                    "RIZALYN C. RAMIREZ — Tb Admin Support",
                    "SHAIRA FAITH G. LIGANSO, RM, BSM — HEPO",
                    "TITING D. PAYNAG — Community Volunteer",
                    "DELIA S. OBENIETA · MARIEL M. OYDA · MARY S. LALUMA — CHWs",
                    "LIEZEL C. MASALOON · BABIE M. DAGANSINA · JOLLY ANN M. MANGUAN — CHWs"
                ],
                "categoryTag": "1ST PLACE TEAM"
            },
            {
                "id": 8,
                "type": "closing",
                "title": "CONGRATULATIONS TO OUR PODIUM CHAMPIONS!",
                "subtitle": "DAVNOR TB SUMMIT 2026",
                "citation": "In salute to Sto. Tomas, Tagum City, and Kapalong for their extraordinary leadership, dedication, and clinical excellence in eliminating Tuberculosis."
            }
        ]
    }
]

def make_index_html(cfg):
    return f"""<!DOCTYPE html>
<html lang="en">
<head>
  <script>if(location.protocol!=="file:"&&!location.pathname.endsWith("/")&&!location.pathname.endsWith(".html")){{location.replace(location.pathname+"/"+location.search+location.hash);}}</script>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>DAVNOR TB Summit 2026 — {cfg['title']}</title>
  <link rel="stylesheet" href="../../shared/css/floral-theme.css">
  <link rel="stylesheet" href="../../shared/css/tb-gala-theme.css">
</head>
<body>

  <div class="presentation-wrapper">
    <!-- Ambient Canvas Petals / Glitter Layer -->
    <canvas id="petalsCanvas" class="petals-canvas"></canvas>

    <!-- Slide Content Viewport -->
    <main id="slideViewport" class="slide-viewport" role="region" aria-label="Slide presentation viewport"></main>

    <!-- Bottom Floating Control Bar -->
    <nav id="controlBar" class="control-bar" aria-label="Presentation controls">
      <button class="control-btn" onclick="window.PresentationEngine.prev()" title="Previous Slide (← / ↑)" aria-label="Previous Slide">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"></polyline></svg>
      </button>

      <div id="slideCounter" class="slide-counter" aria-live="polite">01 / {len(cfg['slides']):02d}</div>

      <button class="control-btn" onclick="window.PresentationEngine.next()" title="Next Slide (→ / Space / Enter)" aria-label="Next Slide">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
      </button>

      <span style="width: 1px; height: 20px; background: rgba(212, 175, 55, 0.4); margin: 0 4px;"></span>

      <button class="control-btn" onclick="window.PresentationEngine.toggleDrawer()" title="Order of Ceremony Grid (G / Esc)" aria-label="All Programme Segments">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
          <rect x="3" y="3" width="7" height="7"></rect>
          <rect x="14" y="3" width="7" height="7"></rect>
          <rect x="14" y="14" width="7" height="7"></rect>
          <rect x="3" y="14" width="7" height="7"></rect>
        </svg>
      </button>

      <button id="soundToggleBtn" class="control-btn" onclick="window.PresentationEngine.toggleSound()" title="Toggle Chime (M)" aria-label="Toggle Sound">
        <!-- populated dynamically by JS -->
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

      <a href="../index.html" class="control-btn" title="Return to TB Summit Hub" style="text-decoration: none;" aria-label="Ceremony Hub">
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
        <div class="drawer-title">✦ DAVNOR TB Summit 2026 — {cfg['title']}</div>
        <input type="text" id="drawerSearch" class="drawer-search-input" placeholder="Search awardee, facility, category..." aria-label="Search programme">
        <button class="drawer-close-btn" onclick="window.PresentationEngine.toggleDrawer(false)" aria-label="Close drawer">&times;</button>
      </div>
      <div id="drawerGrid" class="drawer-grid"></div>
    </div>
  </aside>

  <!-- Presentation Scripts -->
  <script>
    window.DECK_KEY = '{cfg['key']}';
    window.OFFICIAL_LOGOS = ['../../shared/assets/logos/DDN.png', '../../shared/assets/logos/PHO-Logo.png'];
    window.THEME_PETAL_STOPS = [
      [[0, '140, 106, 28', 0.8], [0.5, '212, 175, 55', 0.75], [1, '247, 231, 161', 0.7]],
      [[0, '125, 130, 140', 0.75], [0.5, '192, 196, 204', 0.7], [1, '242, 243, 245', 0.7]],
      [[0, '184, 145, 42', 0.75], [0.5, '230, 199, 102', 0.65], [1, '255, 255, 255', 0.6]]
    ];
    window.PARTICLE_STYLE = 'glitter';
    window.THEME_CONFETTI = ['#D4AF37', '#F7E7A1', '#B8912A', '#C0C4CC', '#F2F3F5', '#7D828C'];
  </script>
  <script src="slides-data.js"></script>
  <script src="../../shared/js/cloud-sync.js"></script>
  <script src="../../shared/js/presentation.js"></script>
</body>
</html>
"""

def make_presenter_html(cfg):
    return f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Presenter View — TB Summit 2026 {cfg['title']}</title>
  <link rel="stylesheet" href="../../shared/css/presenter-console.css">
  <link rel="stylesheet" href="../../shared/css/tb-gala-theme.css">
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
        <a href="../index.html" class="topbar-btn" title="Return to TB Summit Hub">
          ✦ TB Summit Hub
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
            <input type="text" id="presenterSearch" class="presenter-search-input" placeholder="Search awardee, facility, category... (Press /)" autocomplete="off" spellcheck="false" />
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

def make_slides_data_js(cfg):
    js_content = f"""(function () {{
  // Source: DAVNOR END TB SUMMIT 2026 (Technical Cue Guide & Awards Catalog)
  var data = {json.dumps(cfg['slides'], indent=2, ensure_ascii=False)};

  window.SLIDES_DATA = data;
  window.DECKS_CATALOG = window.DECKS_CATALOG || {{}};
  window.DECKS_CATALOG['{cfg['key']}'] = data;
}})();
"""
    return js_content

if __name__ == '__main__':
    for cfg in DECKS_CONFIG:
        deck_dir = os.path.join(BASE_DIR, cfg['folder'])
        os.makedirs(deck_dir, exist_ok=True)

        # Write slides-data.js
        slides_path = os.path.join(deck_dir, 'slides-data.js')
        with open(slides_path, 'w', encoding='utf-8') as f:
            f.write(make_slides_data_js(cfg))

        # Write index.html
        index_path = os.path.join(deck_dir, 'index.html')
        with open(index_path, 'w', encoding='utf-8') as f:
            f.write(make_index_html(cfg))

        # Write presenter.html
        presenter_path = os.path.join(deck_dir, 'presenter.html')
        with open(presenter_path, 'w', encoding='utf-8') as f:
            f.write(make_presenter_html(cfg))

        print(f"Generated {cfg['folder']}: {len(cfg['slides'])} slides.")

    print(f"All {len(DECKS_CONFIG)} TB Summit decks generated successfully!")
