import os
import json

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

DECKS_CONFIG = [
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
                "title": "JORDAN F. KINTANAR, RMT",
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
                "title": "GLENN A. PONO, MD FPCP, FPCCP",
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
                "title": "MARIA VICTORIA L. LEGASPI, MD & JEORGIE ARVIN S. LEGASPI, MD",
                "number": 9,
                "category": "SPECIAL AWARD",
                "subtitle": "Specialist Consultants",
                "citations": [
                    "MARIA VICTORIA L. LEGASPI, MD, FPCP, FPCCP, FCCP — Internal Medicine/Pulmonologist",
                    "JEORGIE ARVIN S. LEGASPI, MD, DPCOM, FPSMS, MAHA — Internal Medicine/Occupational Medicine"
                ],
                "categoryTag": "SPECIAL AWARD"
            },
            {
                "id": 10,
                "type": "awardee",
                "title": "JOEBELLE MAY GALANG-DELA CRUZ, MD, MPM, FPAFP",
                "number": 10,
                "category": "SPECIAL AWARD",
                "subtitle": "Vice Chairperson · Davao del Norte TB Medical Advisory Committee · DRMC",
                "categoryTag": "SPECIAL AWARD"
            },
            {
                "id": 11,
                "type": "awardee",
                "title": "VIKKI DARL R. RODRIGUEZ, MD, FPCP, DPSMID",
                "number": 11,
                "category": "SPECIAL AWARD",
                "subtitle": "Member · Davao del Norte TB Medical Advisory Committee · DRMC",
                "categoryTag": "SPECIAL AWARD"
            },
            {
                "id": 12,
                "type": "awardee",
                "title": "LOUELYN H. EXALA, MD, DBCOM",
                "number": 12,
                "category": "SPECIAL AWARD",
                "subtitle": "Member · Davao del Norte TB Medical Advisory Committee · RHU Kapalong",
                "categoryTag": "SPECIAL AWARD"
            },
            {
                "id": 13,
                "type": "awardee",
                "title": "SHARIFF AMILOARI S. MANIBPEL, MD, FPCP",
                "number": 13,
                "category": "HIGHEST REFERRALS FOR TB MANDATORY NOTIFICATION",
                "subtitle": "Internal Medicine / Pulmonologist · Tagum City",
                "categoryTag": "SPECIAL AWARD"
            },
            {
                "id": 14,
                "type": "awardee",
                "title": "ERLYN D. LOPEZ, MD FPCR, FPCCP",
                "number": 14,
                "category": "HIGHEST REFERRALS FOR TB MANDATORY NOTIFICATION",
                "subtitle": "Pulmonologist · Panabo City",
                "categoryTag": "SPECIAL AWARD"
            },
            {
                "id": 15,
                "type": "awardee",
                "title": "PROVINCIAL DEPARTMENT OF HEALTH OFFICE",
                "number": 15,
                "category": "SPECIAL AWARD",
                "subtitle": "Davao del Norte",
                "citations": [
                    "VERGEL JAY T. BAUTISTA, MD, MPM — Development Management Officer V / Provincial Health Team Leader",
                    "LORENA M. ORILLA, ChE, MPA — Development Management Officer IV",
                    "JENNIFER D. HINGGO, MPA — Development Management Officer IV",
                    "IAN PATRICK M. VIDAL, RMT — Development Management Officer IV",
                    "DARLENE DOROTHY C. ARAMASA, RMT — Development Management Officer III"
                ],
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
                "title": "PROVINCIAL SOCIAL WELFARE DEVELOPMENT OFFICE",
                "number": 17,
                "category": "SPECIAL AWARD",
                "subtitle": "ROSALINDA O. RAPISTA, RSW, MPA · P. G. Dept. Head",
                "categoryTag": "SPECIAL AWARD"
            },
            {
                "id": 18,
                "type": "closing",
                "title": "CONGRATULATIONS TO ALL AWARDEES",
                "citation": "Thank you for your partnership and unwavering commitment to ending Tuberculosis in the Province of Davao del Norte.",
                "subtitle": "DAVNOR TB SUMMIT 2026"
            }
        ]
    },
    {
        "folder": "02-referring-facilities",
        "key": "tb-02-referring-facilities",
        "title": "Special Awards — Referring Facilities",
        "category": "REFERRING FACILITIES",
        "subTitle": "Recognizing referring hospitals, medical clinics, and custodial facilities actively notifying TB cases",
        "slides": [
            {
                "id": 0,
                "type": "title",
                "event": "DAVNOR TB SUMMIT 2026",
                "subEvent": "Province of Davao del Norte · Provincial Health Office",
                "title": "SPECIAL AWARDS — REFERRING FACILITIES",
                "category": "DAVNOR TB SUMMIT 2026",
                "citation": "Recognizing referring hospitals, medical clinics, and custodial facilities actively notifying TB cases in Davao del Norte"
            },
            {
                "id": 1,
                "type": "awardee",
                "title": "MEDICAL MISSION GROUP HOSPITAL & HEALTH SERVICES COOPERATIVE",
                "number": 1,
                "category": "REFERRING FACILITY",
                "subtitle": "Tagum City",
                "citations": ["RONA B. ADOL-ANG, RN — TB Nurse Coordinator"],
                "categoryTag": "REFERRING FACILITY"
            },
            {
                "id": 2,
                "type": "awardee",
                "title": "AQUINO MEDICAL SPECIALISTS HOSPITAL, INC.",
                "number": 2,
                "category": "REFERRING FACILITY",
                "subtitle": "Tagum City",
                "citations": ["JOESERIL T. FRUCTOSO, RN — TB Nurse Coordinator"],
                "categoryTag": "REFERRING FACILITY"
            },
            {
                "id": 3,
                "type": "awardee",
                "title": "UNITED DOCTORS HOSPITAL OF TAGUM, INC.",
                "number": 3,
                "category": "REFERRING FACILITY",
                "subtitle": "Tagum City",
                "citations": ["KHAYE RHE P. NAVACILLA, RN — TB Nurse Coordinator"],
                "categoryTag": "REFERRING FACILITY"
            },
            {
                "id": 4,
                "type": "awardee",
                "title": "TAGUM GLOBAL MEDICAL CENTER, INC.",
                "number": 4,
                "category": "REFERRING FACILITY",
                "subtitle": "Tagum City",
                "citations": ["NICOLLE A. CUESTAS, RN — TB Nurse Coordinator"],
                "categoryTag": "REFERRING FACILITY"
            },
            {
                "id": 5,
                "type": "awardee",
                "title": "CHRIST THE KING SPECIALISTS HOSPITAL",
                "number": 5,
                "category": "REFERRING FACILITY",
                "subtitle": "Tagum City",
                "citations": ["MARI-TESSA O. SURIGAO, RN — TB Nurse Coordinator"],
                "categoryTag": "REFERRING FACILITY"
            },
            {
                "id": 6,
                "type": "awardee",
                "title": "CAINGLET MEDICAL HOSPITAL, INC.",
                "number": 6,
                "category": "REFERRING FACILITY",
                "subtitle": "Panabo City",
                "citations": ["CYRIAN MAE JAVIER-NAVIGAR, RN — TB Nurse Coordinator"],
                "categoryTag": "REFERRING FACILITY"
            },
            {
                "id": 7,
                "type": "awardee",
                "title": "GOOD SHEPHERD HOSPITAL OF PANABO CITY, INC.",
                "number": 7,
                "category": "REFERRING FACILITY",
                "subtitle": "Panabo City",
                "citations": ["AMABELLA C. MALIA, RN — TB Nurse Coordinator"],
                "categoryTag": "REFERRING FACILITY"
            },
            {
                "id": 8,
                "type": "awardee",
                "title": "TADECO HOSPITAL",
                "number": 8,
                "category": "REFERRING FACILITY",
                "subtitle": "Panabo City",
                "citations": ["JOANNE D. NOVELA, RN — TB Nurse Coordinator"],
                "categoryTag": "REFERRING FACILITY"
            },
            {
                "id": 9,
                "type": "awardee",
                "title": "CARMEN MEDICAL CLINIC AND HOSPITAL",
                "number": 9,
                "category": "REFERRING FACILITY",
                "subtitle": "Carmen, Davao del Norte",
                "citations": ["CHELAMAE CLAIRE P. JACOT, RN — TB Nurse Coordinator"],
                "categoryTag": "REFERRING FACILITY"
            },
            {
                "id": 10,
                "type": "awardee",
                "title": "DAVAO DEL NORTE HOSPITAL — CARMEN ZONE",
                "number": 10,
                "category": "REFERRING FACILITY",
                "subtitle": "Carmen, Davao del Norte",
                "citations": [
                    "RUCHILLE S. ARROCENA, MD, FPSMSI, MAHA — OIC - Chief of Hospital",
                    "KARREN MAE R. BARCENA, RN — TB Nurse Coordinator",
                    "JENNIFER R. BRECIO, RMT — RTDL Medical Technologist",
                    "Radiology Department"
                ],
                "categoryTag": "REFERRING FACILITY"
            },
            {
                "id": 11,
                "type": "awardee",
                "title": "BUNGABONG-SANICO MEDICAL CLINIC & MATERNITY HOSPITAL",
                "number": 11,
                "category": "REFERRING FACILITY",
                "subtitle": "Davao del Norte",
                "citations": ["SHILLA MEE M. MALABAGO, RN — TB Nurse Coordinator"],
                "categoryTag": "REFERRING FACILITY"
            },
            {
                "id": 12,
                "type": "awardee",
                "title": "ESTELA MEDICAL CLINIC AND HOSPITAL",
                "number": 12,
                "category": "REFERRING FACILITY",
                "subtitle": "Davao del Norte",
                "citations": ["NIMFA G. NACIS, RN — TB Nurse Coordinator"],
                "categoryTag": "REFERRING FACILITY"
            },
            {
                "id": 13,
                "type": "awardee",
                "title": "EMILIO B. RIVERA PRIMARY CARE CENTERS, INC.",
                "number": 13,
                "category": "REFERRING FACILITY",
                "subtitle": "Davao del Norte",
                "citations": ["JUDITH L. DEOCAMPO, RN — TB Nurse Coordinator"],
                "categoryTag": "REFERRING FACILITY"
            },
            {
                "id": 14,
                "type": "awardee",
                "title": "MATUTES MEDICAL CLINIC AND HOSPITAL",
                "number": 14,
                "category": "REFERRING FACILITY",
                "subtitle": "Davao del Norte",
                "citations": ["JESSE MARI T. CARLON, RN — TB Nurse Coordinator"],
                "categoryTag": "REFERRING FACILITY"
            },
            {
                "id": 15,
                "type": "awardee",
                "title": "METROPOLITAN POLYMEDIC COMMUNITY HOSPITAL, INC.",
                "number": 15,
                "category": "REFERRING FACILITY",
                "subtitle": "Davao del Norte",
                "citations": ["RICHE A. DADULA, RN — TB Nurse Coordinator"],
                "categoryTag": "REFERRING FACILITY"
            },
            {
                "id": 16,
                "type": "awardee",
                "title": "JA ALEGRE MEDICAL CLINIC AND HOSPITAL",
                "number": 16,
                "category": "REFERRING FACILITY",
                "subtitle": "Davao del Norte",
                "citations": ["DARYL V. TEVES, RN — TB Nurse Coordinator"],
                "categoryTag": "REFERRING FACILITY"
            },
            {
                "id": 17,
                "type": "awardee",
                "title": "DAVAO DEL NORTE HOSPITAL — KAPALONG ZONE",
                "number": 17,
                "category": "REFERRING FACILITY",
                "subtitle": "Kapalong, Davao del Norte",
                "citations": [
                    "JESSIE T. BELGA, MD, FPSMSI, MSPH-HA — Chief of Hospital II",
                    "ZHEENA MAE C. NALUPA, RN, MAN — TB Nurse Coordinator",
                    "LEONA S. OLILA, RMT — RTDL Medical Technologist",
                    "Radiology Department"
                ],
                "categoryTag": "REFERRING FACILITY"
            },
            {
                "id": 18,
                "type": "awardee",
                "title": "DRMC WARD EXTENSION (INFIRMARY)",
                "number": 18,
                "category": "REFERRING FACILITY",
                "subtitle": "Davao Regional Medical Center",
                "citations": ["MYLENE V. TORCULAS, RN — TB Nurse Coordinator"],
                "categoryTag": "REFERRING FACILITY"
            },
            {
                "id": 19,
                "type": "awardee",
                "title": "TAGUM CITY DISTRICT JAIL — MALE DORMITORY",
                "number": 19,
                "category": "REFERRING FACILITY",
                "subtitle": "Bureau of Jail Management and Penology",
                "citations": ["SJO4 JONATHAN D. ALMONARES, RN — TB Nurse Coordinator"],
                "categoryTag": "REFERRING FACILITY"
            },
            {
                "id": 20,
                "type": "awardee",
                "title": "TAGUM CITY DISTRICT JAIL — FEMALE DORMITORY",
                "number": 20,
                "category": "REFERRING FACILITY",
                "subtitle": "Bureau of Jail Management and Penology",
                "citations": ["JO2 JENNY ANN C. MELENDREZ, RN — TB Nurse Coordinator"],
                "categoryTag": "REFERRING FACILITY"
            },
            {
                "id": 21,
                "type": "awardee",
                "title": "PANABO CITY DISTRICT JAIL",
                "number": 21,
                "category": "REFERRING FACILITY",
                "subtitle": "Bureau of Jail Management and Penology",
                "citations": ["SJO4 HENRY S. AGUISANDO, RN — TB Nurse Coordinator"],
                "categoryTag": "REFERRING FACILITY"
            },
            {
                "id": 22,
                "type": "awardee",
                "title": "SAMAL CITY JAIL",
                "number": 22,
                "category": "REFERRING FACILITY",
                "subtitle": "Bureau of Jail Management and Penology",
                "citations": ["JO2 KARLAND DALE C. BALON, RN — TB Nurse Coordinator"],
                "categoryTag": "REFERRING FACILITY"
            },
            {
                "id": 23,
                "type": "awardee",
                "title": "DAVAO DEL NORTE PROVINCIAL REHABILITATION CENTER",
                "number": 23,
                "category": "REFERRING FACILITY",
                "subtitle": "Province of Davao del Norte",
                "citations": ["PS TRISTAN C. AGAG, RN — TB Nurse Coordinator"],
                "categoryTag": "REFERRING FACILITY"
            },
            {
                "id": 24,
                "type": "closing",
                "title": "CONGRATULATIONS TO ALL REFERRING FACILITIES",
                "citation": "Saluting your proactive patient notification and surveillance that brings TB care within reach of every community.",
                "subtitle": "DAVNOR TB SUMMIT 2026"
            }
        ]
    },
    {
        "folder": "03-individual-awards",
        "key": "tb-03-individual-awards",
        "title": "Individual Awards",
        "category": "INDIVIDUAL AWARDS",
        "subTitle": "Honoring community volunteers, specimen transport riders, engagement officers, and laboratory technicians",
        "slides": [
            {
                "id": 0,
                "type": "title",
                "event": "DAVNOR TB SUMMIT 2026",
                "subEvent": "Province of Davao del Norte · Provincial Health Office",
                "title": "RECOGNITION OF INDIVIDUAL AWARDS",
                "category": "DAVNOR TB SUMMIT 2026",
                "citation": "Honoring community volunteers, specimen transport riders, engagement officers, and laboratory technicians in Davao del Norte"
            },
            {
                "id": 1,
                "type": "awardee",
                "title": "MIGUELITA C. AQUINO",
                "number": 1,
                "category": "TB COMMUNITY VOLUNTEER",
                "subtitle": "Dedicated Community Frontliner",
                "categoryTag": "COMMUNITY VOLUNTEER"
            },
            {
                "id": 2,
                "type": "awardee",
                "title": "EVELYN J. RAZONABLE",
                "number": 2,
                "category": "TB COMMUNITY VOLUNTEER",
                "subtitle": "Dedicated Community Frontliner",
                "categoryTag": "COMMUNITY VOLUNTEER"
            },
            {
                "id": 3,
                "type": "awardee",
                "title": "MA. LUNA G. AMBITO",
                "number": 3,
                "category": "TB COMMUNITY VOLUNTEER",
                "subtitle": "Dedicated Community Frontliner",
                "categoryTag": "COMMUNITY VOLUNTEER"
            },
            {
                "id": 4,
                "type": "awardee",
                "title": "EVELYN M. ECHALAS",
                "number": 4,
                "category": "TB COMMUNITY VOLUNTEER",
                "subtitle": "Dedicated Community Frontliner",
                "categoryTag": "COMMUNITY VOLUNTEER"
            },
            {
                "id": 5,
                "type": "awardee",
                "title": "TITING D. PAYNAG",
                "number": 5,
                "category": "TB COMMUNITY VOLUNTEER",
                "subtitle": "Dedicated Community Frontliner",
                "categoryTag": "COMMUNITY VOLUNTEER"
            },
            {
                "id": 6,
                "type": "awardee",
                "title": "REYNALDO M. CELIS",
                "number": 6,
                "category": "SPECIMEN TRANSPORT RIDER (STRIDER)",
                "subtitle": "Rapid Diagnostic Specimen Courier",
                "categoryTag": "STRIDER"
            },
            {
                "id": 7,
                "type": "awardee",
                "title": "EDWIN S. SALANG",
                "number": 7,
                "category": "SPECIMEN TRANSPORT RIDER (STRIDER)",
                "subtitle": "Rapid Diagnostic Specimen Courier",
                "categoryTag": "STRIDER"
            },
            {
                "id": 8,
                "type": "awardee",
                "title": "GLADYS P. BANTILAN",
                "number": 8,
                "category": "SPECIMEN TRANSPORT RIDER (STRIDER)",
                "subtitle": "Rapid Diagnostic Specimen Courier",
                "categoryTag": "STRIDER"
            },
            {
                "id": 9,
                "type": "awardee",
                "title": "JEANIZE YARI B. TURQUEZA",
                "number": 9,
                "category": "PRIVATE SECTOR ENGAGEMENT OFFICER (PSENOS)",
                "subtitle": "Healthcare Linkage & Engagement",
                "categoryTag": "PSENOS"
            },
            {
                "id": 10,
                "type": "awardee",
                "title": "ALTHEA A. GONZALES, RMT",
                "number": 10,
                "category": "PRIVATE SECTOR ENGAGEMENT OFFICER (PSENOS)",
                "subtitle": "Healthcare Linkage & Engagement",
                "categoryTag": "PSENOS"
            },
            {
                "id": 11,
                "type": "awardee",
                "title": "KRISTINE MARIE E. PANSOY",
                "number": 11,
                "category": "INTEGRATED TB INFORMATION SYSTEM",
                "subtitle": "Integrated TB Information System (ITIS) Project Associate",
                "categoryTag": "ITIS ASSOCIATE"
            },
            {
                "id": 12,
                "type": "awardee",
                "title": "ELLEN G. GERMAN, RN",
                "number": 12,
                "category": "DRMC — PMDT CLINICAL TEAM",
                "subtitle": "Davao Regional Medical Center",
                "categoryTag": "DRMC PMDT"
            },
            {
                "id": 13,
                "type": "awardee",
                "title": "MANASIS M. DIAMANTE, RN",
                "number": 13,
                "category": "DRMC — PMDT CLINICAL TEAM",
                "subtitle": "Davao Regional Medical Center",
                "categoryTag": "DRMC PMDT"
            },
            {
                "id": 14,
                "type": "awardee",
                "title": "JENRY KEN VINCENT I. MIBATO, RMT, MSMT, MLS(ASCPi)cm",
                "number": 14,
                "category": "GENEXPERT TECHNICIAN",
                "subtitle": "Molecular TB Diagnostic Specialist",
                "categoryTag": "GENEXPERT TECH"
            },
            {
                "id": 15,
                "type": "awardee",
                "title": "CRISTINA TIARA A. FERNANDEZ, RMT",
                "number": 15,
                "category": "GENEXPERT TECHNICIAN",
                "subtitle": "Molecular TB Diagnostic Specialist",
                "categoryTag": "GENEXPERT TECH"
            },
            {
                "id": 16,
                "type": "awardee",
                "title": "LEONA S. OLILA, RMT",
                "number": 16,
                "category": "GENEXPERT TECHNICIAN",
                "subtitle": "Molecular TB Diagnostic Specialist",
                "categoryTag": "GENEXPERT TECH"
            },
            {
                "id": 17,
                "type": "awardee",
                "title": "NADINE GEMMA S. EUSTAQUIO, RMT",
                "number": 17,
                "category": "GENEXPERT TECHNICIAN",
                "subtitle": "Molecular TB Diagnostic Specialist",
                "categoryTag": "GENEXPERT TECH"
            },
            {
                "id": 18,
                "type": "awardee",
                "title": "ALLEN GLENN B. SORIANO, RMT",
                "number": 18,
                "category": "GENEXPERT TECHNICIAN",
                "subtitle": "Molecular TB Diagnostic Specialist",
                "categoryTag": "GENEXPERT TECH"
            },
            {
                "id": 19,
                "type": "awardee",
                "title": "CHRISTINE DENNISE P. OLAYAN, RMT",
                "number": 19,
                "category": "GENEXPERT TECHNICIAN",
                "subtitle": "Molecular TB Diagnostic Specialist",
                "categoryTag": "GENEXPERT TECH"
            },
            {
                "id": 20,
                "type": "awardee",
                "title": "SHARON ROSE B. LACORDA, RMT",
                "number": 20,
                "category": "GENEXPERT TECHNICIAN",
                "subtitle": "Molecular TB Diagnostic Specialist",
                "categoryTag": "GENEXPERT TECH"
            },
            {
                "id": 21,
                "type": "awardee",
                "title": "ANNALOU O. OLANDRIA, RMT",
                "number": 21,
                "category": "GENEXPERT TECHNICIAN",
                "subtitle": "Molecular TB Diagnostic Specialist",
                "categoryTag": "GENEXPERT TECH"
            },
            {
                "id": 22,
                "type": "awardee",
                "title": "JENNIFER R. BRECIO, RMT",
                "number": 22,
                "category": "GENEXPERT TECHNICIAN",
                "subtitle": "Molecular TB Diagnostic Specialist",
                "categoryTag": "GENEXPERT TECH"
            },
            {
                "id": 23,
                "type": "closing",
                "title": "CONGRATULATIONS TO ALL INDIVIDUAL HEROES",
                "citation": "Honoring the tireless riders, volunteers, officers, and laboratory technicians working on the frontlines every single day.",
                "subtitle": "DAVNOR TB SUMMIT 2026"
            }
        ]
    },
    {
        "folder": "04-tb-providers",
        "key": "tb-04-tb-providers",
        "title": "Recognition Awards to TB Providing Facilities",
        "category": "TB PROVIDING FACILITIES",
        "subTitle": "Saluting multi-disciplinary TB DOTS, PMDT, laboratory, and hospital care teams across Davao del Norte",
        "slides": [
            {
                "id": 0,
                "type": "title",
                "event": "DAVNOR TB SUMMIT 2026",
                "subEvent": "Province of Davao del Norte · Provincial Health Office",
                "title": "RECOGNITION AWARDS TO TB PROVIDING FACILITIES",
                "category": "DAVNOR TB SUMMIT 2026",
                "citation": "Saluting multi-disciplinary TB DOTS, PMDT, laboratory, and hospital care teams across Davao del Norte"
            },
            {
                "id": 1,
                "type": "awardee",
                "title": "DAVAO REGIONAL MEDICAL CENTER — TB DOTS",
                "number": 1,
                "category": "TB PROVIDING FACILITY",
                "subtitle": "Tagum City",
                "citations": [
                    "JOEBELLE MAY GALANG-DELA CRUZ, MD, MPM, FPAFP — Clinical Head",
                    "EVIE Q. CERVANTES, RN — TB Nurse Coordinator",
                    "MARIE TESS T. BASMAYOR, RMT — Medical Technologist - TML"
                ],
                "categoryTag": "TB PROVIDER"
            },
            {
                "id": 2,
                "type": "awardee",
                "title": "DAVAO REGIONAL MEDICAL CENTER — PMDT",
                "number": 2,
                "category": "TB PROVIDING FACILITY",
                "subtitle": "Tagum City",
                "citations": [
                    "JOEBELLE MAY GALANG-DELA CRUZ, MD, MPM, FPAFP — Clinical Head",
                    "MANASIS M. DIAMANTE, RN — PMDT Nurse",
                    "JENRY KEN VINCENT I. MIBATO, RMT, MSMT, MLS(ASCPi)cm — RTDL Medical Technologist"
                ],
                "categoryTag": "TB PROVIDER"
            },
            {
                "id": 3,
                "type": "awardee",
                "title": "PHILIPPINE TUBERCULOSIS SOCIETY INC. — TAGUM",
                "number": 3,
                "category": "TB PROVIDING FACILITY",
                "subtitle": "Tagum City Branch",
                "citations": [
                    "GLADYS P. PASCUA, RN — Branch Manager / TB Nurse Coordinator",
                    "MARICRIS C. ARPAFO, RN — TB Nurse",
                    "MICAELA MARIE KIANA C. CUEVAS, RR — Radiology Technician",
                    "CHARMAINE Q. VILLANUEVA — Laboratory Technician",
                    "JHUNDEY L. HALASAN — ITIS Encoder"
                ],
                "categoryTag": "TB PROVIDER"
            },
            {
                "id": 4,
                "type": "awardee",
                "title": "TAGUM DOCTORS HOSPITAL, INC.",
                "number": 4,
                "category": "TB PROVIDING FACILITY",
                "subtitle": "Tagum City",
                "citations": [
                    "KHAYRONIZA P. DIUDA, RN — TB Nurse Coordinator",
                    "JOHN ANTHONY S. HALOG, RMT — TB Med Tech Coordinator"
                ],
                "categoryTag": "TB PROVIDER"
            },
            {
                "id": 5,
                "type": "awardee",
                "title": "DAVAO PRISON AND PENAL FARM INFIRMARY",
                "number": 5,
                "category": "TB PROVIDING FACILITY",
                "subtitle": "Bureau of Corrections",
                "citations": [
                    "CTSINSP GALILEO C. MASCARINA JR., MD — TB Medical Coordinator",
                    "CO1 RIEZA R. CUDAL, RN — TB Nurse Coordinator",
                    "CO1 CHAREN LEE O. GUMANID, RMT — TB Med Tech Coordinator",
                    "CO2 DARYL MARK A. MANAWATAO, RN — HIV Coordinator",
                    "CO1 AIZZA GRACE S. PADILLA, RRT — ITIS Encoder",
                    "CO1 KEITH PAUL L. ACEBEDO, RRT — Radiology Technician"
                ],
                "categoryTag": "TB PROVIDER"
            },
            {
                "id": 6,
                "type": "awardee",
                "title": "DAVAO DEL NORTE HOSPITAL — SAMAL ZONE",
                "number": 6,
                "category": "TB PROVIDING FACILITY",
                "subtitle": "Island Garden City of Samal",
                "citations": [
                    "DR. CATHERINE MANCIO-VALERA, MD, FPOGS — Chief of Hospital II",
                    "GIBB ANTHONY C. APAT, RN, MAN — TB Nurse Coordinator",
                    "ALLEN GLENN B. SORIANO, RMT — RTDL Medical Technologist",
                    "Radiology Department"
                ],
                "categoryTag": "TB PROVIDER"
            },
            {
                "id": 7,
                "type": "awardee",
                "title": "RIVERA MEDICAL CENTER, INC.",
                "number": 7,
                "category": "TB PROVIDING FACILITY",
                "subtitle": "Panabo City",
                "citations": [
                    "MAYCHEAL A. CRAMPATANTA, RN — TB Nurse Coordinator",
                    "JAPHETH G. ANGANA, RMT — TB Med Tech Coordinator"
                ],
                "categoryTag": "TB PROVIDER"
            },
            {
                "id": 8,
                "type": "awardee",
                "title": "PANABO POLYMEDIC HOSPITAL, INC.",
                "number": 8,
                "category": "TB PROVIDING FACILITY",
                "subtitle": "Panabo City",
                "citations": [
                    "LETECIA L. PAHAMOTANG, RN — TB Nurse Coordinator",
                    "YASMIN S. ODASAN, RMT, MLS(ASCPi) — TB Med Tech Coordinator"
                ],
                "categoryTag": "TB PROVIDER"
            },
            {
                "id": 9,
                "type": "awardee",
                "title": "TAGUM MEDICAL CITY",
                "number": 9,
                "category": "TB PROVIDING FACILITY",
                "subtitle": "Tagum City",
                "citations": [
                    "GIRLY B. SEVILLA, RN — TB Nurse Coordinator",
                    "PRINCESS NATHALIE B. PANLILIO, RMT — TB Med Tech Coordinator"
                ],
                "categoryTag": "TB PROVIDER"
            },
            {
                "id": 10,
                "type": "closing",
                "title": "CONGRATULATIONS TO ALL PROVIDING FACILITIES",
                "citation": "Saluting the multi-disciplinary healthcare teams delivering patient-centered, life-saving TB care.",
                "subtitle": "DAVNOR TB SUMMIT 2026"
            }
        ]
    },
    {
        "folder": "05-top-health-centers",
        "key": "tb-05-top-health-centers",
        "title": "Top Performing Health Centers",
        "category": "TOP HEALTH CENTERS",
        "subTitle": "Recognizing benchmark achievements in TB case notification, treatment coverage, pediatric care, and cure rates",
        "slides": [
            {
                "id": 0,
                "type": "title",
                "event": "DAVNOR TB SUMMIT 2026",
                "subEvent": "Province of Davao del Norte · Provincial Health Office",
                "title": "TOP PERFORMING HEALTH CENTERS",
                "category": "DAVNOR TB SUMMIT 2026",
                "citation": "Recognizing benchmark achievements in TB case notification, treatment coverage, pediatric care, and cure rates"
            },
            {
                "id": 1,
                "type": "awardee",
                "title": "PHILIPPINE TUBERCULOSIS SOCIETY, INC. — TAGUM CITY BRANCH",
                "number": 1,
                "category": "HIGHEST NUMBER OF ENROLLED TB CASES — ALL FORMS",
                "subtitle": "567 Cases Enrolled in 2025",
                "citations": ["567 Cases in 2025 · Benchmark High Volume Care"],
                "categoryTag": "ALL FORMS ENROLLMENT"
            },
            {
                "id": 2,
                "type": "awardee",
                "title": "MUNICIPAL HEALTH OFFICE OF KAPALONG",
                "number": 2,
                "category": "HIGHEST TB CASE NOTIFICATION RATE",
                "subtitle": "580 per 100,000 Population in 2025",
                "citations": ["580 per 100,000 population in 2025 · Intensive Case Finding"],
                "categoryTag": "CASE NOTIFICATION"
            },
            {
                "id": 3,
                "type": "awardee",
                "title": "MUNICIPAL HEALTH OFFICE OF KAPALONG",
                "number": 3,
                "category": "HIGHEST TB TREATMENT COVERAGE RATE",
                "subtitle": "90.28% Treatment Coverage in 2025",
                "citations": ["90.28% in 2025 · Exceeding National 90% Target Benchmark"],
                "categoryTag": "TREATMENT COVERAGE"
            },
            {
                "id": 4,
                "type": "awardee",
                "title": "CITY HEALTH OFFICE OF TAGUM",
                "number": 4,
                "category": "HIGHEST NUMBER OF ENROLLED & TREATED TB IN CHILDREN",
                "subtitle": "45 Pediatric Cases Managed in 2025",
                "citations": ["45 Cases in 2025 · Protecting Children from Tuberculosis"],
                "categoryTag": "CHILDREN TB"
            },
            {
                "id": 5,
                "type": "awardee",
                "title": "CITY HEALTH OFFICE OF PANABO",
                "number": 5,
                "category": "HIGHEST NUMBER OF CURED DS-TB CASES",
                "subtitle": "242 Cured DS-TB Cases in 2025 (Cohort 2024)",
                "citations": ["242 Cured Cases in 2025 (Cohort 2024) · Excellence in Clinical Follow-Through"],
                "categoryTag": "CURED DS-TB"
            },
            {
                "id": 6,
                "type": "awardee",
                "title": "PHILIPPINE TUBERCULOSIS SOCIETY, INC. — TAGUM CITY BRANCH",
                "number": 6,
                "category": "HIGHEST NUMBER OF SUCCESSFULLY TREATED DS-TB CASES",
                "subtitle": "518 Successfully Treated Cases in 2025 (Cohort 2024)",
                "citations": ["518 Cases in 2025 (Cohort 2024) · Exemplary Treatment Completion"],
                "categoryTag": "SUCCESSFUL TREATMENT"
            },
            {
                "id": 7,
                "type": "awardee",
                "title": "DAVAO DEL NORTE HOSPITAL — SAMAL ZONE",
                "number": 7,
                "category": "HIGHEST DS-TB CURE RATE",
                "subtitle": "100% DS-TB Cure Rate in 2025 (Cohort 2024)",
                "citations": ["100% in 2025 (Cohort 2024) · Perfect Microbiological Cure Record"],
                "categoryTag": "100% CURE RATE"
            },
            {
                "id": 8,
                "type": "awardee",
                "title": "MUNICIPAL HEALTH OFFICE OF SAWATA",
                "number": 8,
                "category": "HIGHEST DS-TB TREATMENT SUCCESS RATE",
                "subtitle": "100% DS-TB Treatment Success Rate in 2025 (Cohort 2024)",
                "citations": ["100% in 2025 (Cohort 2024) · Flawless Patient Retention & Success"],
                "categoryTag": "100% TREATMENT SUCCESS"
            },
            {
                "id": 9,
                "type": "awardee",
                "title": "MUNICIPAL HEALTH OFFICE OF CARMEN",
                "number": 9,
                "category": "HIGHEST NUMBER OF CLOSE CONTACTS PROVIDED WITH TPT",
                "subtitle": "255 Close Contacts Provided with TB Preventive Treatment",
                "citations": ["255 Patients in 2025 · Breaking the Chain of Transmission"],
                "categoryTag": "TPT PREVENTIVE CARE"
            },
            {
                "id": 10,
                "type": "closing",
                "title": "CONGRATULATIONS TO ALL TOP PERFORMING HEALTH CENTERS",
                "citation": "Celebrating benchmark clinical standards, visionary leadership, and relentless commitment to saving lives.",
                "subtitle": "DAVNOR TB SUMMIT 2026"
            }
        ]
    },
    {
        "folder": "06-top-bhw-10-4",
        "key": "tb-06-top-bhw-10-4",
        "title": "Top Performing BHW (Rank 10–4)",
        "category": "BHW RANK 10–4",
        "subTitle": "Barangay Health Workers ranking 10th to 4th in TB case finding, screening, and treatment support",
        "slides": [
            {
                "id": 0,
                "type": "title",
                "event": "DAVNOR TB SUMMIT 2026",
                "subEvent": "Province of Davao del Norte · Provincial Health Office",
                "title": "TOP PERFORMING BARANGAY HEALTH WORKERS (RANK 10–4)",
                "category": "DAVNOR TB SUMMIT 2026",
                "citation": "Saluting our outstanding Barangay Health Workers ranking 10th to 4th in TB surveillance and DOTS support"
            },
            {
                "id": 1,
                "type": "awardee",
                "title": "OFFICIAL TABULATION IN PROGRESS",
                "number": 1,
                "category": "TOP PERFORMING BHW (RANK 10–4)",
                "subtitle": "Awaiting Final Verification by the Awards Committee",
                "citations": ["Slide placeholders ready — final awardees will appear here once official validation completes."],
                "categoryTag": "TABULATION IN PROGRESS"
            },
            {
                "id": 2,
                "type": "closing",
                "title": "MABUHAY ANG ATING MGA BARANGAY HEALTH WORKERS!",
                "citation": "Ang inyong malasakit at dedikasyon ang sandigan ng kalusugan sa bawat barangay.",
                "subtitle": "DAVNOR TB SUMMIT 2026"
            }
        ]
    },
    {
        "folder": "07-top-barangay-10-4",
        "key": "tb-07-top-barangay-10-4",
        "title": "Top Performing Barangay (Rank 10–4)",
        "category": "BARANGAY RANK 10–4",
        "subTitle": "Barangays ranking 10th to 4th across Davao del Norte in community TB control and local health action",
        "slides": [
            {
                "id": 0,
                "type": "title",
                "event": "DAVNOR TB SUMMIT 2026",
                "subEvent": "Province of Davao del Norte · Provincial Health Office",
                "title": "TOP PERFORMING BARANGAYS (RANK 10–4)",
                "category": "DAVNOR TB SUMMIT 2026",
                "citation": "Recognizing champion barangays ranking 10th to 4th in community TB response and screening coverage"
            },
            {
                "id": 1,
                "type": "awardee",
                "title": "OFFICIAL TABULATION IN PROGRESS",
                "number": 1,
                "category": "TOP PERFORMING BARANGAY (RANK 10–4)",
                "subtitle": "Awaiting Final Verification by the Awards Committee",
                "citations": ["Slide placeholders ready — final awardee barangays will appear here once official validation completes."],
                "categoryTag": "TABULATION IN PROGRESS"
            },
            {
                "id": 2,
                "type": "closing",
                "title": "CONGRATULATIONS TO OUR CHAMPION BARANGAYS",
                "citation": "Building strong, TB-free communities through proactive local leadership and teamwork.",
                "subtitle": "DAVNOR TB SUMMIT 2026"
            }
        ]
    },
    {
        "folder": "08-consolation-tb-providers",
        "key": "tb-08-consolation-tb-providers",
        "title": "Consolation Awards — TB Providing Facilities",
        "category": "CONSOLATION AWARDS",
        "subTitle": "Commending dedicated TB providing facilities for unwavering commitment and service delivery",
        "slides": [
            {
                "id": 0,
                "type": "title",
                "event": "DAVNOR TB SUMMIT 2026",
                "subEvent": "Province of Davao del Norte · Provincial Health Office",
                "title": "CONSOLATION AWARDS — TB PROVIDING FACILITIES",
                "category": "DAVNOR TB SUMMIT 2026",
                "citation": "Commending dedicated TB providing facilities for unwavering commitment and patient care"
            },
            {
                "id": 1,
                "type": "awardee",
                "title": "OFFICIAL TABULATION IN PROGRESS",
                "number": 1,
                "category": "CONSOLATION AWARDS",
                "subtitle": "Awaiting Final Verification by the Awards Committee",
                "citations": ["Slide placeholders ready — final facility awardees will appear here once official validation completes."],
                "categoryTag": "TABULATION IN PROGRESS"
            },
            {
                "id": 2,
                "type": "closing",
                "title": "SALUTE TO ALL PARTICIPATING TB FACILITIES",
                "citation": "Thank you for your dedicated service to every patient on the path to recovery.",
                "subtitle": "DAVNOR TB SUMMIT 2026"
            }
        ]
    },
    {
        "folder": "09-top-bhw-3-1",
        "key": "tb-09-top-bhw-3-1",
        "title": "Top Performing BHW (Rank 3–1 / Podium)",
        "category": "BHW PODIUM 3–1",
        "subTitle": "Grand podium honors: Top 3, Top 2, and Top 1 Best Barangay Health Workers of Davao del Norte",
        "slides": [
            {
                "id": 0,
                "type": "title",
                "event": "DAVNOR TB SUMMIT 2026",
                "subEvent": "Province of Davao del Norte · Provincial Health Office",
                "title": "TOP 3–1 PERFORMING BARANGAY HEALTH WORKERS",
                "category": "DAVNOR TB SUMMIT 2026",
                "citation": "Grand podium announcement of the Top 3, Top 2, and Champion Barangay Health Workers of Davao del Norte"
            },
            {
                "id": 1,
                "type": "awardee",
                "title": "OFFICIAL TABULATION IN PROGRESS",
                "number": 1,
                "category": "TOP PERFORMING BHW (RANK 3–1)",
                "subtitle": "Podium Announcement Awaiting Final Official Tally",
                "citations": ["Top 3, 2, and 1 champion podium slides ready — will populate upon committee release."],
                "categoryTag": "PODIUM FINALISTS"
            },
            {
                "id": 2,
                "type": "closing",
                "title": "CONGRATULATIONS TO OUR PODIUM BHW CHAMPIONS!",
                "citation": "Your extraordinary compassion, grit, and service illuminate the entire Province of Davao del Norte.",
                "subtitle": "DAVNOR TB SUMMIT 2026"
            }
        ]
    },
    {
        "folder": "10-top-barangay-3-1",
        "key": "tb-10-top-barangay-3-1",
        "title": "Top Performing Barangay (Rank 3–1 / Podium)",
        "category": "BARANGAY PODIUM 3–1",
        "subTitle": "Grand podium honors: Top 3, Top 2, and Champion Barangays in TB elimination leadership",
        "slides": [
            {
                "id": 0,
                "type": "title",
                "event": "DAVNOR TB SUMMIT 2026",
                "subEvent": "Province of Davao del Norte · Provincial Health Office",
                "title": "TOP 3–1 PERFORMING BARANGAYS",
                "category": "DAVNOR TB SUMMIT 2026",
                "citation": "Grand podium announcement of the Top 3, Top 2, and Champion Barangays of Davao del Norte"
            },
            {
                "id": 1,
                "type": "awardee",
                "title": "OFFICIAL TABULATION IN PROGRESS",
                "number": 1,
                "category": "TOP PERFORMING BARANGAY (RANK 3–1)",
                "subtitle": "Podium Announcement Awaiting Final Official Tally",
                "citations": ["Top 3, 2, and 1 champion podium slides ready — will populate upon committee release."],
                "categoryTag": "PODIUM FINALISTS"
            },
            {
                "id": 2,
                "type": "closing",
                "title": "CONGRATULATIONS TO OUR PODIUM CHAMPION BARANGAYS!",
                "citation": "Setting the gold standard for community health, disease eradication, and exemplary governance.",
                "subtitle": "DAVNOR TB SUMMIT 2026"
            }
        ]
    },
    {
        "folder": "11-top-tb-providers-3-1",
        "key": "tb-11-top-tb-providers-3-1",
        "title": "Top Performing TB Providing Facilities (Rank 3–1 / Podium)",
        "category": "PROVIDERS PODIUM 3–1",
        "subTitle": "Grand podium honors: Top 3, Top 2, and Champion TB Providing Facilities in Davao del Norte",
        "slides": [
            {
                "id": 0,
                "type": "title",
                "event": "DAVNOR TB SUMMIT 2026",
                "subEvent": "Province of Davao del Norte · Provincial Health Office",
                "title": "TOP 3–1 PERFORMING TB PROVIDING FACILITIES",
                "category": "DAVNOR TB SUMMIT 2026",
                "citation": "Grand podium announcement of the Top 3, Top 2, and Champion TB Providing Facilities in Davao del Norte"
            },
            {
                "id": 1,
                "type": "awardee",
                "title": "OFFICIAL TABULATION IN PROGRESS",
                "number": 1,
                "category": "TOP PERFORMING TB PROVIDER (RANK 3–1)",
                "subtitle": "Podium Announcement Awaiting Final Official Tally",
                "citations": ["Top 3, 2, and 1 champion podium slides ready — will populate upon committee release."],
                "categoryTag": "PODIUM FINALISTS"
            },
            {
                "id": 2,
                "type": "closing",
                "title": "CONGRATULATIONS TO OUR PODIUM CHAMPION PROVIDERS!",
                "citation": "Delivering peerless medical excellence, patient survival, and hope in ending Tuberculosis.",
                "subtitle": "DAVNOR TB SUMMIT 2026"
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

      <a href="presenter.html" target="_blank" class="control-btn" title="Open Presenter View (P)" aria-label="Presenter View" style="text-decoration: none;">
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
            <input type="text" id="presenterSearchInput" class="presenter-search-input" placeholder="Jump to slide / search awardee..." aria-label="Jump to slide">
            <button id="clearSearchBtn" class="clear-search-btn" onclick="window.PresenterConsoleApp.clearSearch()" style="display: none;" aria-label="Clear search">&times;</button>
          </div>
          <div id="searchResultsList" class="search-results-dropdown" style="display: none;"></div>
        </div>

        <div class="presenter-next-pane">
          <div class="pane-header">
            <span class="pane-title">Next Slide</span>
            <span id="nextSlideLabel" class="next-label">Slide 2</span>
          </div>
          <div class="presenter-next-preview">
            <iframe id="nextSlideFrame" class="slide-frame" src="index.html?mode=preview#1" title="Next Upcoming Slide"></iframe>
          </div>
        </div>

        <div class="presenter-notes-pane">
          <div class="pane-header">
            <span class="pane-title">Speaker &amp; Stage Notes</span>
            <div class="notes-zoom-controls">
              <button class="zoom-btn" onclick="window.PresenterConsoleApp.adjustNotesZoom(-1)" title="Decrease font size">A-</button>
              <button class="zoom-btn" onclick="window.PresenterConsoleApp.adjustNotesZoom(1)" title="Increase font size">A+</button>
            </div>
          </div>
          <div id="presenterNotesBody" class="presenter-notes-content">
            <div class="notes-placeholder">No notes for this slide.</div>
          </div>
        </div>
      </section>
    </main>

    <footer class="presenter-nav-bar">
      <div class="nav-left">
        <button id="navPrevBtn" class="nav-action-btn" onclick="window.PresenterConsoleApp.navigatePrev()" title="Previous Slide (← / PageUp)">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"></polyline></svg>
        </button>

        <div class="slide-position-box">
          <span id="currentSlideNum">1</span>
          <span class="slide-divider">/</span>
          <span id="totalSlidesNum">{len(cfg['slides'])}</span>
        </div>

        <button id="navNextBtn" class="nav-action-btn nav-action-btn-primary" onclick="window.PresenterConsoleApp.navigateNext()" title="Next Slide (→ / Space / PageDown)">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </button>
      </div>

      <div class="nav-center-title">
        <span class="deck-indicator-badge">TB 2026</span>
        <span id="currentSlideTitle" class="current-slide-heading">{cfg['title']}</span>
      </div>

      <div class="nav-right-tools">
        <button id="blackoutBtn" class="tool-btn" onclick="window.PresenterConsoleApp.toggleBlackout()" title="Blackout Stage Screen (B)">
          <span class="tool-icon">⬛</span> Black Screen
        </button>
        <button id="confettiBtn" class="tool-btn" onclick="window.PresenterConsoleApp.triggerConfetti()" title="Trigger Confetti on Stage (C)">
          <span class="tool-icon">🎉</span> Confetti
        </button>
      </div>
    </footer>
  </div>

  <script src="slides-data.js"></script>
  <script src="../../shared/js/presenter-console.js"></script>
</body>
</html>
"""

def make_slides_data_js(cfg):
    js_content = f"""(function () {{
  // Source: TB SUMMIT LIST OF AWARDS.xlsx (DAVNOR TB Summit 2026)
  var data = {json.dumps(cfg['slides'], indent=2)};

  window.SLIDES_DATA = data;
  window.DECKS_CATALOG = window.DECKS_CATALOG || {{}};
  window.DECKS_CATALOG['{cfg['key']}'] = data;
}})();
"""
    return js_content

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

print("All 11 TB Summit decks generated successfully!")
