/* Kliniske skårer, kriterier og terskelverdier — Modul 3 til 8.
   Alt her er ting du blir spurt om på visitten og som avgjør hva du gjør
   videre. Mange av kortene er «nevn alle» — svarene kan skrives i valgfri
   rekkefølge. */

window.MED_DECKS = window.MED_DECKS || {};
window.MED_DECKS.skarer = {
  id: 'skarer',
  navn: 'Skårer & kriterier',
  beskrivelse: 'ABCDE, GCS, NEWS2, CURB-65, Centor, Apgar',
  nav: 'skårer',
  moduler: 'Modul 3–8',
  grupper: ['akuttmedisin', 'kardiologi', 'infeksjon', 'nevrologi', 'kvinne & barn'],
  kort: [

    /* ---------------- akuttmedisin ---------------- */
    { sp: 'Hva står bokstavene i ABCDE for?',
      svar: [['Airway', 'luftvei', 'a - airway'],
             ['Breathing', 'respirasjon', 'pust'],
             ['Circulation', 'sirkulasjon'],
             ['Disability', 'bevissthet', 'nevrologi'],
             ['Exposure', 'eksponering', 'omgivelser']],
      gruppe: 'akuttmedisin', modul: 3,
      notat: 'Poenget er rekkefølgen: du går aldri videre til neste bokstav før den forrige ' +
             'er håndtert.' },

    { sp: 'Nevn de sju parametrene i NEWS2.',
      svar: [['respirasjonsfrekvens', 'rf', 'respirasjon'],
             ['oksygenmetning', 'spo2', 'metning', 'saturasjon'],
             ['oksygentilskudd', 'oksygenbehandling', 'luft eller oksygen', 'o2-tilskudd'],
             ['systolisk blodtrykk', 'blodtrykk', 'bt'],
             ['puls', 'hjertefrekvens', 'hf'],
             ['bevissthet', 'acvpu', 'bevissthetsnivå'],
             ['temperatur', 'temp']],
      gruppe: 'akuttmedisin', modul: 3,
      notat: 'SpO2-skala 2 brukes for pasienter med kronisk CO2-retensjon, der målområdet er ' +
             '88–92 %. Bruk feil skala, og du får feil skår.' },

    { sp: 'Nevn de tre komponentene i Glasgow Coma Scale.',
      svar: [['øyeåpning', 'oyeapning', 'øyne', 'oye'],
             ['verbal respons', 'verbal', 'tale'],
             ['motorisk respons', 'motorikk', 'motorisk']],
      gruppe: 'akuttmedisin', modul: 4 },

    { sp: 'Hva er høyeste og laveste mulige GCS-skår?',
      svar: [['15', 'femten'], ['3', 'tre']],
      gruppe: 'akuttmedisin', modul: 4,
      notat: 'Minimum er 3, ikke 0 — hver av de tre komponentene gir minst 1 poeng. ' +
             'Øyeåpning 1–4, verbal 1–5, motorisk 1–6.' },

    { sp: 'Ved hvilken GCS-skår vurderes intubasjon for å sikre luftveien?',
      svar: [['8', 'gcs 8', '8 eller lavere', 'atte']],
      gruppe: 'akuttmedisin', modul: 4,
      notat: '«GCS 8 — intubate.» Under dette klarer pasienten ikke å beskytte egen luftvei.' },

    { sp: 'Hva er dosen adrenalin intramuskulært til en voksen ved anafylaksi?',
      svar: [['0,5 mg', '0,5 mg im', '0,5 ml av 1 mg/ml', '0,5']],
      gruppe: 'akuttmedisin', modul: 3,
      notat: 'Settes lateralt i låret, gjentas etter 5 minutter ved manglende effekt. ' +
             'Intramuskulært, aldri subkutant — og adrenalin gis før antihistamin og steroid.' },

    { sp: 'Hvilken kompresjon:ventilasjon-ratio brukes ved HLR på voksne?',
      svar: [['30:2', '30 2', '30-2']],
      gruppe: 'akuttmedisin', modul: 3 },

    { sp: 'Hvilke to hjerterytmer er sjokkbare ved hjertestans?',
      svar: [['ventrikkelflimmer', 'vf', 'ventrikulær fibrillering'],
             ['pulsløs ventrikkeltakykardi', 'pulslos vt', 'vt', 'ventrikkeltakykardi']],
      gruppe: 'akuttmedisin', modul: 3,
      notat: 'Asystole og PEA er ikke sjokkbare — der er det kompresjoner, adrenalin og ' +
             'reversible årsaker som gjelder.' },

    { sp: 'Nevn de fire H-ene blant reversible årsaker til hjertestans.',
      svar: [['hypoksi'],
             ['hypovolemi'],
             ['hypotermi'],
             ['hyperkalemi', 'hypo- og hyperkalemi', 'metabolske forstyrrelser', 'hypokalemi']],
      gruppe: 'akuttmedisin', modul: 3 },

    { sp: 'Nevn de fire T-ene blant reversible årsaker til hjertestans.',
      svar: [['trykkpneumothorax', 'pneumothorax', 'overtrykkspneumothorax'],
             ['tamponade', 'hjertetamponade', 'perikardtamponade'],
             ['toksiner', 'forgiftning', 'toksisk'],
             ['trombose', 'lungeemboli', 'koronartrombose']],
      gruppe: 'akuttmedisin', modul: 3 },

    /* ---------------- kardiologi ---------------- */
    { sp: 'Hvilke to komponenter i CHA₂DS₂-VA gir 2 poeng hver?',
      svar: [['alder ≥ 75 år', 'alder over 75', 'alder 75', '75 ar'],
             ['tidligere hjerneslag eller TIA', 'hjerneslag', 'slag/tia', 'tia', 'tidligere slag']],
      gruppe: 'kardiologi', modul: 3,
      notat: 'Alle de andre komponentene gir 1 poeng. Derfor er en 76-åring med tidligere TIA ' +
             'alene på 4 poeng.' },

    { sp: 'Hvilken komponent ble tatt ut av CHA₂DS₂-VASc i ESC-retningslinjen fra 2024?',
      svar: [['kvinnelig kjønn', 'kjønn', 'kjonn', 'sex category', 'kvinne']],
      gruppe: 'kardiologi', modul: 3,
      notat: 'Skåren heter nå CHA₂DS₂-VA. Kjønnsforskjellen i tromboembolirisiko har falt bort ' +
             'i nyere data, og terskelen er den samme for alle: antikoagulasjon fra 2 poeng.',
      kilde: 'ESC Guidelines for atrial fibrillation, 2024' },

    { sp: 'Fra hvilken CHA₂DS₂-VA-skår anbefales antikoagulasjon?',
      svar: [['2', 'to', '≥2']],
      gruppe: 'kardiologi', modul: 3,
      kilde: 'ESC Guidelines for atrial fibrillation, 2024' },

    { sp: 'Hvilke tre EKG-avledninger dekker hjertets inferiorvegg?',
      svar: [['II', 'ii', '2'], ['III', 'iii', '3'], ['aVF', 'avf']],
      gruppe: 'kardiologi', modul: 3,
      notat: 'ST-elevasjon her betyr som regel okklusjon i høyre koronararterie. Sjekk ' +
             'blodtrykket før du gir nitroglyserin — høyre ventrikkel kan være med.' },

    { sp: 'Hvilke fire EKG-avledninger dekker lateralveggen?',
      svar: [['I', 'i', '1'], ['aVL', 'avl'], ['V5', 'v5'], ['V6', 'v6']],
      gruppe: 'kardiologi', modul: 3 },

    { sp: 'Hvilken biomarkør er mest spesifikk for myokardskade?',
      svar: [['troponin', 'hs-troponin', 'troponin t', 'troponin i']],
      gruppe: 'kardiologi', modul: 3,
      notat: 'Spesifikk for myokardskade, ikke for infarkt: nyresvikt, myokarditt, ' +
             'lungeemboli og sepsis gir også stigning.' },

    { sp: 'Innen hvor mange minutter fra STEMI-diagnose bør primær PCI være utført?',
      svar: [['120', '120 minutter', '2 timer']],
      gruppe: 'kardiologi', modul: 3,
      notat: 'Kan man ikke nå det, gis trombolyse — en reell problemstilling i norsk ' +
             'distriktsmedisin med lange transportavstander.' },

    { sp: 'Nevn de tre komponentene i Virchows triade.',
      svar: [['endotelskade', 'karveggskade', 'endoteldysfunksjon'],
             ['stase', 'venøs stase', 'redusert blodstrøm', 'immobilisering'],
             ['hyperkoagulabilitet', 'økt koagulabilitet', 'trombofili']],
      gruppe: 'kardiologi', modul: 3 },

    { sp: 'Hvilken skår brukes til å vurdere klinisk sannsynlighet for lungeemboli?',
      svar: [['Wells score', 'wells', 'wells-skår']],
      gruppe: 'kardiologi', modul: 3,
      notat: 'Lav sannsynlighet + negativ D-dimer utelukker lungeemboli uten CT. Høy ' +
             'sannsynlighet gjør D-dimer irrelevant — gå rett på CT.' },

    /* ---------------- infeksjon ---------------- */
    { sp: 'Nevn de fem komponentene i CURB-65.',
      svar: [['konfusjon', 'confusion', 'forvirring'],
             ['urea', 'urinstoff', 'urea over 7'],
             ['respirasjonsfrekvens', 'rf', 'respirasjon'],
             ['blodtrykk', 'bt', 'lavt blodtrykk', 'hypotensjon'],
             ['alder over 65 år', '65 ar', 'alder 65', 'alder']],
      gruppe: 'infeksjon', modul: 3,
      notat: 'Terskler: konfusjon, urea > 7 mmol/L, RF ≥ 30, BT < 90 systolisk eller ' +
             '≤ 60 diastolisk, alder ≥ 65 år. Ett poeng hver.' },

    { sp: 'Fra hvilken CURB-65-skår bør pasienten vurderes for sykehusinnleggelse?',
      svar: [['2', 'to', '≥2']],
      gruppe: 'infeksjon', modul: 3,
      notat: '0–1 kan som regel behandles hjemme; 3 eller mer betyr vurdering av ' +
             'intensivbehandling.' },

    { sp: 'Nevn de fire Centor-kriteriene ved mistanke om streptokokktonsillitt.',
      svar: [['feber over 38,5 °C', 'feber', 'feber over 38,5'],
             ['ømme fremre halslymfeknuter', 'omme lymfeknuter', 'lymfeknuter', 'omme halslymfeknuter'],
             ['belegg på tonsillene', 'belegg', 'belegg pa tonsiller', 'tonsilleeksudat'],
             ['fravær av hoste', 'ikke hoste', 'fravaer av hoste', 'ingen hoste']],
      gruppe: 'infeksjon', modul: 3,
      notat: 'Tre eller fire kriterier gjør streptokokketiologi sannsynlig nok å teste for. ' +
             'Fravær av hoste er kriteriet folk oftest glemmer.',
      kilde: 'Antibiotika i primærhelsetjenesten, Helsedirektoratet' },

    { sp: 'Hvilke tre parametre inngår i qSOFA?',
      svar: [['respirasjonsfrekvens', 'rf', 'respirasjon'],
             ['systolisk blodtrykk', 'blodtrykk', 'bt'],
             ['bevissthet', 'endret bevissthet', 'mental status', 'gcs']],
      gruppe: 'infeksjon', modul: 3,
      notat: 'Terskler: RF ≥ 22, systolisk BT ≤ 100 mmHg, GCS < 15. To av tre gir økt ' +
             'risiko for dårlig utfall — men qSOFA er et varselsflagg, ikke en sepsisdiagnose.' },

    { sp: 'Hvor mange SOFA-poeng økning definerer organsvikt i Sepsis-3?',
      svar: [['2', 'to', '≥2']],
      gruppe: 'infeksjon', modul: 3,
      notat: 'Sepsis-3: infeksjon + akutt økning i SOFA på minst 2 poeng. SIRS-kriteriene ' +
             'er ikke lenger en del av definisjonen.' },

    { sp: 'Hvilken laktatverdi (mmol/L) inngår i definisjonen av septisk sjokk?',
      svar: [['2', '2 mmol/l', 'over 2', '>2']],
      gruppe: 'infeksjon', modul: 3,
      notat: 'Septisk sjokk = sepsis + behov for vasopressor for å holde MAP ≥ 65 mmHg ' +
             '+ laktat > 2 mmol/L til tross for adekvat væskebehandling.' },

    /* ---------------- nevrologi ---------------- */
    { sp: 'Hva er tidsvinduet for intravenøs trombolyse ved akutt hjerneinfarkt, i timer?',
      svar: [['4,5', '4,5 timer', '4.5']],
      gruppe: 'nevrologi', modul: 4,
      notat: 'Trombektomi har lengre vindu — opptil 24 timer ved storkarokklusjon og gunstig ' +
             'perfusjonsbilde. Derfor er «for sent for trombolyse» ikke det samme som ' +
             '«for sent for behandling».' },

    { sp: 'Hvilken skår brukes for å gradere alvorlighet ved akutt hjerneslag?',
      svar: [['NIHSS', 'nih stroke scale']],
      gruppe: 'nevrologi', modul: 4 },

    { sp: 'Hva er de tre testene i den norske slagkampanjen «Prate, smile, løfte»?',
      svar: [['prate', 'tale', 'snakke'],
             ['smile', 'ansikt'],
             ['løfte', 'lofte', 'arm', 'lofte armene']],
      gruppe: 'nevrologi', modul: 4,
      notat: 'Svikter én av dem akutt: ring 113. Norsk motstykke til FAST.' },

    { sp: 'Nevn de tre tegnene i Cushings triade ved kritisk forhøyet intrakranielt trykk.',
      svar: [['hypertensjon', 'høyt blodtrykk', 'hoyt blodtrykk', 'stigende blodtrykk'],
             ['bradykardi', 'lav puls', 'fallende puls'],
             ['uregelmessig respirasjon', 'respirasjonsforstyrrelse', 'irregulær respirasjon',
              'uregelmessig pust']],
      gruppe: 'nevrologi', modul: 4,
      notat: 'Sent og alvorlig tegn — herniering er i gang. Ikke vent på triaden før du ' +
             'behandler et høyt ICP.' },

    { sp: 'Nevn de tre kardinalsymptomene ved Parkinsons sykdom.',
      svar: [['hviletremor', 'tremor'],
             ['rigiditet', 'stivhet'],
             ['bradykinesi', 'hypokinesi', 'langsomme bevegelser']],
      gruppe: 'nevrologi', modul: 4 },

    { sp: 'Nevn triaden ved normaltrykkshydrocephalus.',
      svar: [['gangvansker', 'gangforstyrrelse', 'ustøhet', 'ustohet'],
             ['urininkontinens', 'inkontinens'],
             ['demens', 'kognitiv svikt']],
      gruppe: 'nevrologi', modul: 4,
      notat: '«Wet, wobbly and wacky.» Reversibel med shunt — derfor verdt å tenke på hos ' +
             'eldre med gangvansker og kognitiv svikt.' },

    /* ---------------- kvinne & barn ---------------- */
    { sp: 'Nevn de fem parametrene i Apgar-skår.',
      svar: [['hjertefrekvens', 'puls', 'hf'],
             ['respirasjon', 'pust', 'respirasjonsinnsats'],
             ['muskeltonus', 'tonus'],
             ['reflekser', 'refleksirritabilitet', 'refleks'],
             ['hudfarge', 'farge']],
      gruppe: 'kvinne & barn', modul: 6,
      notat: 'Hver gir 0–2 poeng, maks 10. Skåren styrer ikke resuscitering — den ' +
             'dokumenterer tilstanden. Resuscitering starter på klinikk, ikke på poengsum.' },

    { sp: 'På hvilke to tidspunkt settes Apgar-skår rutinemessig?',
      svar: [['1 minutt', '1 min', 'etter 1 minutt'],
             ['5 minutter', '5 min', 'etter 5 minutter']],
      gruppe: 'kvinne & barn', modul: 6,
      notat: 'Er 5-minutters-skåren lav, gjentas den ved 10 minutter.' },

    { sp: 'Fra hvilken svangerskapsuke regnes fødselen som til termin?',
      svar: [['37', 'uke 37', '37 uker']],
      gruppe: 'kvinne & barn', modul: 6,
      notat: 'Prematur er før uke 37, ekstremt prematur før uke 28. Overtid fra uke 42.' },

    { sp: 'Hva er de to klassiske funnene ved preeklampsi?',
      svar: [['hypertensjon', 'høyt blodtrykk', 'hoyt blodtrykk'],
             ['proteinuri', 'protein i urinen', 'albuminuri']],
      gruppe: 'kvinne & barn', modul: 6,
      notat: 'Moderne kriterier godtar også hypertensjon etter uke 20 med annen organaffeksjon ' +
             '— nyresvikt, leverpåvirkning, trombocytopeni, nevrologiske symptomer eller ' +
             'placentasvikt — uten proteinuri.' },

    { sp: 'Etter hvilken svangerskapsuke kalles nyoppstått hypertensjon svangerskapsindusert?',
      svar: [['20', 'uke 20', 'etter uke 20']],
      gruppe: 'kvinne & barn', modul: 6 },

    { sp: 'Hvilken Rh-status hos mor gjør at anti-D-profylakse er aktuelt?',
      svar: [['Rh-negativ', 'rhesus negativ', 'rh negativ', 'rhd-negativ']],
      gruppe: 'kvinne & barn', modul: 6,
      notat: 'I Norge screenes RhD-negative gravide med fosterets RhD-status i mors blod i ' +
             'uke 24, og profylakse gis bare til dem som bærer et RhD-positivt foster.' },
  ],
};
