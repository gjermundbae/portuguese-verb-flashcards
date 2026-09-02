/* Normalverdier og terskler — Modul 2 og 3 (klinisk biokjemi, propedeutikk).
   Referanseområdene følger Fürst, som er laboratoriet de fleste norske
   allmennleger og studenter møter først. Enheten står i spørsmålet, så du
   trenger ikke skrive den — «137-145» og «137-145 mmol/L» godtas likt. */

window.MED_DECKS = window.MED_DECKS || {};
window.MED_DECKS.normalverdier = {
  id: 'normalverdier',
  navn: 'Normalverdier',
  beskrivelse: 'Referanseområder og de tersklene som utløser handling',
  nav: 'normalverdier',
  moduler: 'Modul 2–3',
  grupper: ['hematologi', 'elektrolytter & nyre', 'lever & pankreas',
            'endokrin & metabolsk', 'blodgass', 'vitale parametre'],
  merknad: 'Referanseområdene er <strong>Fürsts</strong>, og varierer mellom laboratorier — ' +
           'les alltid intervallet som står på svararket. Enheten trenger du ikke skrive.',
  kort: [

    /* ---------------- hematologi ---------------- */
    { sp: 'Nedre referansegrense for hemoglobin hos menn, i g/dL?',
      svar: [['13,4', '13,4 g/dl']],
      gruppe: 'hematologi', modul: 3, kilde: 'Fürst' },

    { sp: 'Nedre referansegrense for hemoglobin hos kvinner, i g/dL?',
      svar: [['11,7', '11,7 g/dl']],
      gruppe: 'hematologi', modul: 3, kilde: 'Fürst' },

    { sp: 'Referanseområde for leukocytter, i 10⁹/L?',
      svar: [['3,5–10,0', '3,5-10', '3,5-10,0']],
      gruppe: 'hematologi', modul: 3, kilde: 'Fürst' },

    { sp: 'Under hvilket trombocyttall (10⁹/L) er det risiko for spontan blødning?',
      svar: [['20', 'under 20']],
      gruppe: 'hematologi', modul: 3,
      notat: 'Ved 50–100 tolereres de fleste inngrep; under 20 kommer blødninger av seg selv, ' +
             'og under 10 er transfusjon som regel indisert uansett.' },

    { sp: 'Nedre referansegrense for ferritin hos kvinner, i µg/L?',
      svar: [['15', '15 ug/l']],
      gruppe: 'hematologi', modul: 3,
      notat: 'Ferritin er et akuttfaseprotein — normal verdi utelukker ikke jernmangel hvis ' +
             'CRP er forhøyet. Sjekk transferrinmetning i tvilstilfeller.',
      kilde: 'Fürst' },

    { sp: 'Terapeutisk INR-område ved warfarin for atrieflimmer?',
      svar: [['2,0–3,0', '2-3', '2,0-3,0']],
      gruppe: 'hematologi', modul: 3,
      notat: 'Mekanisk hjerteventil krever høyere mål, typisk 2,5–3,5.' },

    /* ---------------- elektrolytter & nyre ---------------- */
    { sp: 'Referanseområde for natrium, i mmol/L?',
      svar: [['137–145', '137-145']],
      gruppe: 'elektrolytter & nyre', modul: 3, kilde: 'Fürst' },

    { sp: 'Referanseområde for kalium, i mmol/L?',
      svar: [['3,6–5,0', '3,6-5,0', '3,6-5']],
      gruppe: 'elektrolytter & nyre', modul: 3,
      notat: 'Hemolyse i prøven gir falskt høyt kalium — den vanligste årsaken til et ' +
             'skremmende svar hos en pasient som er helt fin.',
      kilde: 'Fürst' },

    { sp: 'Over hvilken kaliumverdi (mmol/L) skal hyperkalemi behandles akutt?',
      svar: [['6,5', '6,5 mmol/l', 'over 6,5']],
      gruppe: 'elektrolytter & nyre', modul: 3,
      notat: 'Eller ved EKG-forandringer uansett verdi: kalsium for å stabilisere myokard, ' +
             'insulin-glukose og beta-2-agonist for å flytte kalium inn i cellene.' },

    { sp: 'Referanseområde for total kalsium, i mmol/L?',
      svar: [['2,15–2,51', '2,15-2,51', '2,15-2,5']],
      gruppe: 'elektrolytter & nyre', modul: 3,
      notat: 'Totalkalsium må albuminkorrigeres — lavt albumin gir falskt lavt totalkalsium, ' +
             'mens det ioniserte (aktive) kalsiumet er normalt.',
      kilde: 'Fürst' },

    { sp: 'Øvre referansegrense for kreatinin hos menn, i µmol/L?',
      svar: [['105', '105 umol/l']],
      gruppe: 'elektrolytter & nyre', modul: 3, kilde: 'Fürst' },

    { sp: 'Øvre referansegrense for kreatinin hos kvinner, i µmol/L?',
      svar: [['90', '90 umol/l']],
      gruppe: 'elektrolytter & nyre', modul: 3,
      notat: 'Kreatinin kommer fra muskelmasse. En liten, gammel pasient kan ha halvert GFR ' +
             'med kreatinin midt i referanseområdet.',
      kilde: 'Fürst' },

    { sp: 'Hvilket eGFR-intervall definerer kronisk nyresykdom stadium G3a?',
      svar: [['45–59', '45-59']],
      gruppe: 'elektrolytter & nyre', modul: 3,
      notat: 'G1 ≥90, G2 60–89, G3a 45–59, G3b 30–44, G4 15–29, G5 <15.',
      kilde: 'KDIGO' },

    { sp: 'Under hvilken eGFR er man i stadium G5 (terminal nyresvikt)?',
      svar: [['15', 'under 15']],
      gruppe: 'elektrolytter & nyre', modul: 3, kilde: 'KDIGO' },

    { sp: 'Under hvilken timediurese (ml/kg/time) snakker vi om oliguri?',
      svar: [['0,5', '0,5 ml/kg/t']],
      gruppe: 'elektrolytter & nyre', modul: 3 },

    /* ---------------- lever & pankreas ---------------- */
    { sp: 'Øvre referansegrense for CRP, i mg/L?',
      svar: [['5', 'under 5', '<5']],
      gruppe: 'lever & pankreas', modul: 3,
      notat: 'CRP bruker 6–12 timer på å stige. En normal CRP tidlig i forløpet utelukker ' +
             'ingenting.',
      kilde: 'Fürst' },

    { sp: 'Øvre referansegrense for ALAT hos menn, i U/L?',
      svar: [['70', '70 u/l']],
      gruppe: 'lever & pankreas', modul: 3, kilde: 'Fürst' },

    { sp: 'Øvre referansegrense for ALAT hos kvinner, i U/L?',
      svar: [['45', '45 u/l']],
      gruppe: 'lever & pankreas', modul: 3, kilde: 'Fürst' },

    { sp: 'Øvre referansegrense for total bilirubin, i µmol/L?',
      svar: [['26', '26 umol/l']],
      gruppe: 'lever & pankreas', modul: 3, kilde: 'Fürst' },

    { sp: 'Omtrent fra hvilken bilirubinverdi (µmol/L) blir ikterus synlig?',
      svar: [['50', 'ca 50', 'over 50']],
      gruppe: 'lever & pankreas', modul: 3,
      notat: 'Ses først i sklera, deretter i huden. Ved lys hud kan det være vanskelig å se ' +
             'før verdien er godt over 50.' },

    { sp: 'Hvilke to prøver skiller hepatocellulær fra kolestatisk leverskade?',
      svar: [['ALAT', 'alat/asat', 'transaminaser'],
             ['ALP', 'alkalisk fosfatase', 'alp/ggt']],
      gruppe: 'lever & pankreas', modul: 3,
      notat: 'Dominerende ALAT-stigning = hepatocellulær. Dominerende ALP (med GT) = ' +
             'kolestatisk. Forholdet mellom dem styrer utredningen videre.' },

    /* ---------------- endokrin & metabolsk ---------------- */
    { sp: 'Hvilken HbA1c-verdi (mmol/mol) er diagnostisk grense for diabetes?',
      svar: [['48', '48 mmol/mol', '≥48']],
      gruppe: 'endokrin & metabolsk', modul: 3,
      notat: 'Norge bruker mmol/mol, ikke prosent — 48 mmol/mol svarer til 6,5 %. Kan ikke ' +
             'brukes ved raskt utviklende diabetes, anemi eller hemoglobinopati.' },

    { sp: 'Referanseområde for HbA1c, i mmol/mol?',
      svar: [['28–41', '28-41']],
      gruppe: 'endokrin & metabolsk', modul: 3, kilde: 'Fürst' },

    { sp: 'Referanseområde for fastende glukose, i mmol/L?',
      svar: [['4,0–6,0', '4-6', '4,0-6,0']],
      gruppe: 'endokrin & metabolsk', modul: 3, kilde: 'Fürst' },

    { sp: 'Hvilken fastende glukoseverdi (mmol/L) er diagnostisk grense for diabetes?',
      svar: [['7,0', '7', '≥7,0']],
      gruppe: 'endokrin & metabolsk', modul: 3 },

    { sp: 'Under hvilken blodsukkerverdi (mmol/L) snakker vi om hypoglykemi?',
      svar: [['4,0', '4', 'under 4']],
      gruppe: 'endokrin & metabolsk', modul: 3,
      notat: '«Fire er gulvet.» Ved bevissthetstap gis glukose intravenøst eller glukagon ' +
             'intramuskulært.' },

    { sp: 'Referanseområde for TSH, i mU/L?',
      svar: [['0,20–4,0', '0,2-4', '0,20-4,0']],
      gruppe: 'endokrin & metabolsk', modul: 3, kilde: 'Fürst' },

    { sp: 'Referanseområde for fritt T4, i pmol/L?',
      svar: [['11,0–23,0', '11-23', '11,0-23,0']],
      gruppe: 'endokrin & metabolsk', modul: 3, kilde: 'Fürst' },

    /* ---------------- blodgass ---------------- */
    { sp: 'Referanseområde for arteriell pH?',
      svar: [['7,35–7,45', '7,35-7,45']],
      gruppe: 'blodgass', modul: 3 },

    { sp: 'Referanseområde for arteriell pCO2, i kPa?',
      svar: [['4,7–5,9', '4,7-5,9', '4,7-6,0', '4,7-6']],
      gruppe: 'blodgass', modul: 3,
      notat: 'Norge måler blodgass i kPa. Vil du sammenligne med engelsk litteratur i mmHg: ' +
             'multipliser med 7,5.' },

    { sp: 'Referanseområde for arteriell pO2 hos voksne under 40 år, i kPa?',
      svar: [['11,0–14,4', '11-14,4', '11,0-14,4']],
      gruppe: 'blodgass', modul: 3,
      notat: 'Faller med alderen — over 80 år er nedre grense rundt 8,8 kPa. Derfor må du ' +
             'kjenne pasientens alder før du kaller en pO2 for lav.' },

    { sp: 'Referanseområde for bikarbonat (HCO3⁻), i mmol/L?',
      svar: [['22–26', '22-26']],
      gruppe: 'blodgass', modul: 3 },

    { sp: 'Referanseområde for base excess (BE), i mmol/L?',
      svar: [['−3 til +3', '-3 til 3', '-3 - 3', '-3 til +3']],
      gruppe: 'blodgass', modul: 3,
      notat: 'BE forteller om den metabolske komponenten alene, uavhengig av pCO2 — ' +
             'derfor er det BE du leser for å avgjøre om acidosen er metabolsk.' },

    { sp: 'Over hvilken laktatverdi (mmol/L) regnes verdien som forhøyet?',
      svar: [['2', 'over 2', '2,0']],
      gruppe: 'blodgass', modul: 3,
      notat: 'Inngår i definisjonen av septisk sjokk, og er en av de bedre markørene for ' +
             'hvor syk pasienten faktisk er.' },

    /* ---------------- vitale parametre ---------------- */
    { sp: 'Normal respirasjonsfrekvens hos en voksen i hvile?',
      svar: [['12–20', '12-20', '12-16']],
      gruppe: 'vitale parametre', modul: 3,
      notat: 'Respirasjonsfrekvens er den parameteren som oftest ikke blir målt, og den som ' +
             'varsler tidligst om forverring.' },

    { sp: 'Normal hjertefrekvens hos en voksen i hvile?',
      svar: [['60–100', '60-100', '50-90']],
      gruppe: 'vitale parametre', modul: 3 },

    { sp: 'Målområde for SpO2 hos en KOLS-pasient med CO2-retensjon?',
      svar: [['88–92 %', '88-92', '88-92 %']],
      gruppe: 'vitale parametre', modul: 3,
      notat: 'For friske voksne er målet 94–98 %. Gir du full oksygenmetning til en ' +
             'CO2-retinerende pasient, kan du slå ut respirasjonsdriften.' },

    { sp: 'Fra hvilket kontormålt blodtrykk defineres hypertensjon?',
      svar: [['140/90', '140/90 mmhg']],
      gruppe: 'vitale parametre', modul: 3,
      notat: 'Hjemmemålinger og 24-timers måling har lavere grenser — 135/85 hjemme, ' +
             '130/80 som døgnsnitt.' },

    { sp: 'Hvilket MAP-mål (mmHg) styrer væske- og vasopressorbehandling ved sepsis?',
      svar: [['65', '65 mmhg']],
      gruppe: 'vitale parametre', modul: 3 },

    { sp: 'Normal respirasjonsfrekvens hos et nyfødt barn?',
      svar: [['30–60', '30-60']],
      gruppe: 'vitale parametre', modul: 6 },

    { sp: 'Normal hjertefrekvens hos et nyfødt barn?',
      svar: [['120–160', '120-160', '110-160']],
      gruppe: 'vitale parametre', modul: 6 },

    { sp: 'Øvre normalgrense for leukocytter i spinalvæske hos voksne, per µL?',
      svar: [['5', 'under 5', '<5']],
      gruppe: 'vitale parametre', modul: 4,
      notat: 'Over dette er det pleocytose. Nøytrofil dominans peker mot bakteriell ' +
             'meningitt, lymfocytær mot viral.' },
  ],
};
