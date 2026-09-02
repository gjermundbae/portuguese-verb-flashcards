/* Fysiologi og biokjemi — Modul 1 og 2 (humanbiologi).
   Korte, eksakte fasitsvar: tall, enzymnavn, transmittere. */

window.MED_DECKS = window.MED_DECKS || {};
window.MED_DECKS.fysiologi = {
  id: 'fysiologi',
  navn: 'Fysiologi & biokjemi',
  beskrivelse: 'Mekanismer og tall du regner med, ikke slår opp',
  nav: 'fysiologi',
  moduler: 'Modul 1–2',
  grupper: ['sirkulasjon', 'respirasjon', 'nyre & syre-base', 'endokrin', 'nervesystem', 'metabolisme'],
  kort: [

    /* ---------------- sirkulasjon ---------------- */
    { sp: 'Hva er formelen for minuttvolum?',
      svar: [['slagvolum × hjertefrekvens', 'slagvolum x hjertefrekvens', 'sv x hf', 'hf x sv']],
      gruppe: 'sirkulasjon', modul: 1 },

    { sp: 'Hva er minuttvolumet i hvile hos en voksen, omtrent?',
      svar: [['5 l/min', '5 liter/min', '5 liter per minutt', '5 l/minutt']],
      gruppe: 'sirkulasjon', modul: 1 },

    { sp: 'En pasient har BT 120/60. Hva er middelarterietrykket (MAP) i mmHg?',
      svar: [['80', '80 mmhg']],
      hint: 'MAP = diastolisk + 1/3 av pulstrykket',
      gruppe: 'sirkulasjon', modul: 1,
      notat: '60 + (60/3) = 80. MAP under 65 mmHg er grensen som brukes for organperfusjon ' +
             'i sepsisbehandling.' },

    { sp: 'Hva heter hjertets primære pacemaker?',
      svar: [['sinusknuten', 'sinusknute', 'nodus sinuatrialis', 'sa-knuten']],
      gruppe: 'sirkulasjon', modul: 1 },

    { sp: 'Hvilket ion strømmer inn og holder platåfasen i ventrikkelmyocyttens aksjonspotensial?',
      svar: [['kalsium', 'ca2+', 'ca']],
      gruppe: 'sirkulasjon', modul: 1 },

    { sp: 'Hva kalles sammenhengen mellom økt enddiastolisk fylling og økt slagvolum?',
      svar: [['Frank-Starlings lov', 'frank starling', 'starlings lov', 'frank-starling-mekanismen']],
      gruppe: 'sirkulasjon', modul: 1 },

    { sp: 'Hvilket EKG-intervall gjenspeiler overledningen gjennom AV-knuten?',
      svar: [['PQ-intervallet', 'pr-intervallet', 'pq', 'pr']],
      gruppe: 'sirkulasjon', modul: 1 },

    { sp: 'Hva er øvre normalgrense for QRS-bredde, i sekunder?',
      svar: [['0,12', '0,12 s', '120 ms', '0,12 sekunder']],
      gruppe: 'sirkulasjon', modul: 3,
      notat: 'Bredere enn 0,12 s betyr at impulsen ikke bruker ledningssystemet normalt — ' +
             'grenblokk, ventrikulær rytme eller preeksitasjon.' },

    { sp: 'Under hvilken ejeksjonsfraksjon snakker vi om hjertesvikt med redusert EF (HFrEF)?',
      svar: [['40 %', '40', '40 prosent']],
      gruppe: 'sirkulasjon', modul: 3 },

    /* ---------------- respirasjon ---------------- */
    { sp: 'Hva er tidevolumet hos en voksen i hvile, omtrent?',
      svar: [['500 ml', '0,5 l', '500']],
      gruppe: 'respirasjon', modul: 1 },

    { sp: 'Hva heter volumet som er igjen i lungene etter maksimal utpust?',
      svar: [['residualvolum', 'residualvolumet', 'rv']],
      gruppe: 'respirasjon', modul: 1,
      notat: 'Kan ikke måles med spirometri — derfor trenger man kroppspletysmografi eller ' +
             'gassfortynning for å bestemme totalkapasiteten.' },

    { sp: 'Hvor stort er det anatomiske dødrommet hos en voksen, omtrent?',
      svar: [['150 ml', '150']],
      gruppe: 'respirasjon', modul: 1 },

    { sp: 'Hvilken gass styrer respirasjonsdriften normalt?',
      svar: [['CO2', 'karbondioksid', 'pco2']],
      gruppe: 'respirasjon', modul: 1,
      notat: 'Ved kronisk CO2-retensjon (KOLS) kan hypoksi overta som driv — derfor er ' +
             'ukritisk høy oksygentilførsel farlig hos noen av disse pasientene.' },

    { sp: 'Hvor sitter de sentrale kjemoreseptorene for CO2?',
      svar: [['medulla oblongata', 'hjernestammen', 'den forlengede marg']],
      gruppe: 'respirasjon', modul: 1 },

    { sp: 'Hva heter høyreforskyvningen av oksygendissosiasjonskurven ved økt CO2 og lav pH?',
      svar: [['Bohr-effekten', 'bohreffekten', 'bohr']],
      gruppe: 'respirasjon', modul: 1,
      notat: 'Høyreforskyvning = lavere oksygenaffinitet = lettere avgivelse i arbeidende vev.' },

    { sp: 'Hvilke celler produserer surfaktant?',
      svar: [['type II pneumocytter', 'type 2 pneumocytter', 'pneumocytter type ii']],
      gruppe: 'respirasjon', modul: 1,
      notat: 'Modnes sent i svangerskapet — derfor RDS hos premature, og derfor gis ' +
             'antenatale steroider ved truende prematur fødsel.' },

    { sp: 'Hvilken FEV1/FVC-ratio brukes som grense for obstruksjon ved KOLS-diagnostikk?',
      svar: [['0,70', '70 %', '0,7']],
      gruppe: 'respirasjon', modul: 3,
      notat: 'Målt etter bronkodilatator. Fast grense overdiagnostiserer eldre — derfor brukes ' +
             'nedre normalgrense (LLN) parallelt.' },

    /* ---------------- nyre & syre-base ---------------- */
    { sp: 'Omtrent hvor mange liter plasma filtreres i glomeruli per døgn?',
      svar: [['180', '180 liter', '180 l']],
      gruppe: 'nyre & syre-base', modul: 2,
      notat: 'Av 180 liter skilles ~1,5 liter ut som urin. Over 99 % reabsorberes.' },

    { sp: 'Hvor stor andel av filtrert natrium reabsorberes i proksimale tubulus?',
      svar: [['65 %', '2/3', 'to tredjedeler', '65']],
      gruppe: 'nyre & syre-base', modul: 2 },

    { sp: 'Hvilket hormon øker vannreabsorpsjonen i samlerørene?',
      svar: [['ADH', 'vasopressin', 'antidiuretisk hormon']],
      gruppe: 'nyre & syre-base', modul: 2 },

    { sp: 'Hvilket enzym fra juxtaglomerulære celler starter RAAS-kaskaden?',
      svar: [['renin']],
      gruppe: 'nyre & syre-base', modul: 2 },

    { sp: 'Hvilket enzym omdanner angiotensin I til angiotensin II?',
      svar: [['ACE', 'angiotensinkonverterende enzym', 'angiotensin converting enzyme']],
      gruppe: 'nyre & syre-base', modul: 2 },

    { sp: 'Hvilket organ produserer erytropoietin?',
      svar: [['nyrene', 'nyren', 'nyrebarken']],
      gruppe: 'nyre & syre-base', modul: 2,
      notat: 'Derfor gir kronisk nyresvikt anemi, og derfor behandles den med EPO-analoger.' },

    { sp: 'Hva er normalt arterielt pH-område?',
      svar: [['7,35–7,45', '7,35-7,45', '7,35 til 7,45']],
      gruppe: 'nyre & syre-base', modul: 2 },

    { sp: 'pH 7,25 · pCO2 7,5 kPa · BE −1. Hvilken syre-base-forstyrrelse?',
      svar: [['respiratorisk acidose']],
      gruppe: 'nyre & syre-base', modul: 3,
      notat: 'Lav pH med høy pCO2 og normal base excess: rent respiratorisk, uten metabolsk ' +
             'kompensasjon ennå — altså akutt.' },

    { sp: 'pH 7,52 · pCO2 3,5 kPa. Hvilken syre-base-forstyrrelse?',
      svar: [['respiratorisk alkalose']],
      gruppe: 'nyre & syre-base', modul: 3,
      notat: 'Klassisk ved hyperventilering — angst, smerte, sepsis eller lungeemboli.' },

    { sp: 'pH 7,28 · pCO2 3,8 kPa · BE −12. Hvilken syre-base-forstyrrelse?',
      svar: [['metabolsk acidose']],
      gruppe: 'nyre & syre-base', modul: 3,
      notat: 'Lav BE driver pH ned, og lav pCO2 er respiratorisk kompensasjon (Kussmaul-respirasjon).' },

    /* ---------------- endokrin ---------------- */
    { sp: 'Hvilket hormon fra hypofyseforlappen stimulerer binyrebarken?',
      svar: [['ACTH', 'kortikotropin', 'adrenokortikotropt hormon']],
      gruppe: 'endokrin', modul: 2 },

    { sp: 'Hvor frigjøres oksytocin og ADH fra?',
      svar: [['hypofysens baklapp', 'neurohypofysen', 'bakre hypofyse', 'nevrohypofysen']],
      gruppe: 'endokrin', modul: 2,
      notat: 'De produseres i hypothalamus og transporteres ned aksonene — baklappen lagrer, ' +
             'den syntetiserer ikke.' },

    { sp: 'Hvilket hormon fra thyreoidea senker kalsium i blodet?',
      svar: [['kalsitonin', 'calcitonin']],
      gruppe: 'endokrin', modul: 2 },

    { sp: 'Hvilket hormon øker kalsium i blodet?',
      svar: [['PTH', 'paratyreoideahormon', 'parathyreoideahormon']],
      gruppe: 'endokrin', modul: 2 },

    { sp: 'Hvilket organ står for 1-alfa-hydroksyleringen som aktiverer vitamin D?',
      svar: [['nyrene', 'nyren']],
      gruppe: 'endokrin', modul: 2,
      notat: 'Huden lager D3, leveren 25-hydroksylerer, nyren 1-alfa-hydroksylerer til aktiv ' +
             'kalsitriol.' },

    { sp: 'Hvilket binyrebarkhormon regulerer natrium- og kaliumbalansen?',
      svar: [['aldosteron']],
      gruppe: 'endokrin', modul: 2 },

    { sp: 'Hvilket hypofysehormon er forhøyet ved primær hypotyreose?',
      svar: [['TSH', 'tyreoideastimulerende hormon']],
      gruppe: 'endokrin', modul: 3,
      notat: 'Høy TSH med lav FT4 = primær (thyreoidea svikter). Lav/normal TSH med lav FT4 = ' +
             'sekundær (hypofysen svikter).' },

    { sp: 'Hvilket hormon fra fettvev signaliserer metthet til hypothalamus?',
      svar: [['leptin']],
      gruppe: 'endokrin', modul: 2 },

    /* ---------------- nervesystem ---------------- */
    { sp: 'Hvilken transmitter frigjøres i den nevromuskulære endeplaten?',
      svar: [['acetylkolin', 'ach', 'acetylcholin']],
      gruppe: 'nervesystem', modul: 2 },

    { sp: 'Hvilke celler danner myelin i sentralnervesystemet?',
      svar: [['oligodendrocytter', 'oligodendrocyt']],
      gruppe: 'nervesystem', modul: 2 },

    { sp: 'Hvilke celler danner myelin i det perifere nervesystemet?',
      svar: [['schwannceller', 'schwann-celler', 'schwannske celler']],
      gruppe: 'nervesystem', modul: 2 },

    { sp: 'Hvilken del av hjernen styrer temperatur, sult og tørste?',
      svar: [['hypothalamus', 'hypotalamus']],
      gruppe: 'nervesystem', modul: 2 },

    { sp: 'Hvor produseres cerebrospinalvæsken?',
      svar: [['plexus choroideus', 'choroid plexus', 'plexus chorioideus']],
      gruppe: 'nervesystem', modul: 4 },

    { sp: 'Hvilken bane krysser i medulla oblongata og fører viljestyrt motorikk?',
      svar: [['tractus corticospinalis', 'pyramidebanen', 'kortikospinalbanen']],
      gruppe: 'nervesystem', modul: 4,
      notat: 'Krysningen i decussatio pyramidum er grunnen til at en hemisfærelesjon gir ' +
             'utfall på motsatt side av kroppen.' },

    { sp: 'Hvilken transmitter faller bort ved degenerasjon i substantia nigra?',
      svar: [['dopamin']],
      gruppe: 'nervesystem', modul: 4 },

    { sp: 'Monro-Kellie: hvilke tre komponenter deler volumet inne i kraniet?',
      svar: [['hjernevev', 'hjernen', 'hjernevevet'],
             ['blod', 'blodvolum'],
             ['cerebrospinalvæske', 'csf', 'spinalvæske']],
      gruppe: 'nervesystem', modul: 4,
      notat: 'Kraniet har fast volum: øker det ene, må et annet vike. Derfor faller CSF og ' +
             'venøst blod først, og ICP stiger bratt når kompensasjonen er brukt opp.' },

    { sp: 'Over hvilket intrakranielt trykk (mmHg) behandler man vanligvis hos voksne?',
      svar: [['20', '20 mmhg', '>20']],
      gruppe: 'nervesystem', modul: 4 },

    /* ---------------- metabolisme ---------------- */
    { sp: 'Hvor i cellen foregår glykolysen?',
      svar: [['cytosol', 'cytoplasma', 'i cytosol']],
      gruppe: 'metabolisme', modul: 1 },

    { sp: 'Hvor mange netto ATP gir glykolysen per glukosemolekyl?',
      svar: [['2', 'to']],
      gruppe: 'metabolisme', modul: 1 },

    { sp: 'Hvilket enzym er hastighetsbestemmende i glykolysen?',
      svar: [['fosfofruktokinase-1', 'pfk-1', 'fosfofruktokinase', 'pfk1']],
      gruppe: 'metabolisme', modul: 1 },

    { sp: 'Hvor i cellen foregår sitronsyresyklus?',
      svar: [['mitokondriematriks', 'mitokondriene', 'matriks i mitokondriene']],
      gruppe: 'metabolisme', modul: 1 },

    { sp: 'Hva heter prosessen der leveren lager glukose fra laktat, aminosyrer og glyserol?',
      svar: [['glukoneogenese', 'gluconeogenese']],
      gruppe: 'metabolisme', modul: 1 },

    { sp: 'Hvilket organ er eneste sted ureasyklusen foregår fullstendig?',
      svar: [['leveren', 'lever']],
      gruppe: 'metabolisme', modul: 2,
      notat: 'Derfor stiger ammoniakk ved leversvikt og gir hepatisk encefalopati.' },

    { sp: 'Hvilket vitamin er kofaktor for pyruvatdehydrogenase, og mangler ved Wernickes encefalopati?',
      svar: [['tiamin', 'vitamin B1', 'b1', 'thiamin']],
      gruppe: 'metabolisme', modul: 2,
      notat: 'Gi alltid tiamin før glukose til pasienter med mistenkt mangel — glukosebelastning ' +
             'først kan utløse Wernicke.' },

    { sp: 'Nevn de fire koagulasjonsfaktorene som er vitamin K-avhengige.',
      svar: [['faktor II', 'ii', '2', 'protrombin'],
             ['faktor VII', 'vii', '7'],
             ['faktor IX', 'ix', '9'],
             ['faktor X', 'x', '10']],
      gruppe: 'metabolisme', modul: 3,
      notat: '«1972» — 2, 7, 9, 10. Protein C og S er også K-avhengige, og har kortest halveringstid; ' +
             'derfor er warfarin kortvarig protrombotisk i oppstarten.' },

    { sp: 'Hvor mange kcal gir ett gram fett?',
      svar: [['9', '9 kcal']],
      gruppe: 'metabolisme', modul: 2,
      notat: 'Karbohydrat og protein gir 4 kcal/g, alkohol 7 kcal/g.' },

    { sp: 'Hvilket protein transporterer jern i plasma?',
      svar: [['transferrin']],
      gruppe: 'metabolisme', modul: 3 },

    { sp: 'Hvor absorberes vitamin B12?',
      svar: [['terminale ileum', 'ileum', 'distale ileum']],
      gruppe: 'metabolisme', modul: 3,
      notat: 'Derfor gir Crohn i terminale ileum og ileumreseksjon B12-mangel.' },

    { sp: 'Hvilket protein fra ventrikkelens parietalceller må B12 bindes til for å tas opp?',
      svar: [['intrinsic factor', 'intrinsisk faktor', 'if']],
      gruppe: 'metabolisme', modul: 3,
      notat: 'Autoimmun ødeleggelse av parietalceller gir pernisiøs anemi.' },
  ],
};
