/* Farmakologi — Modul 3 og 5.
   Generiske navn slik de står i Felleskatalogen. Virkningsmekanisme, gruppe,
   den bivirkningen som faktisk endrer behandlingen, og antidotene. */

window.MED_DECKS = window.MED_DECKS || {};
window.MED_DECKS.farmakologi = {
  id: 'farmakologi',
  navn: 'Farmakologi',
  beskrivelse: 'Gruppe, mekanisme, bivirkning og antidot',
  nav: 'farmakologi',
  moduler: 'Modul 3 & 5',
  grupper: ['hjerte & kar', 'smerte & anestesi', 'psykofarmaka', 'endokrin & mage',
            'farmakokinetikk', 'antidoter'],
  kort: [

    /* ---------------- hjerte & kar ---------------- */
    { sp: 'Hvilken legemiddelgruppe tilhører metoprolol?',
      svar: [['betablokker', 'beta-1-selektiv betablokker', 'b1-blokker', 'beta-blokker']],
      gruppe: 'hjerte & kar', modul: 3 },

    { sp: 'Hvilken legemiddelgruppe tilhører amlodipin?',
      svar: [['kalsiumblokker', 'kalsiumantagonist', 'dihydropyridin', 'kalsiumkanalblokker']],
      gruppe: 'hjerte & kar', modul: 3 },

    { sp: 'Hvilken legemiddelgruppe tilhører ramipril?',
      svar: [['ACE-hemmer', 'acehemmer']],
      gruppe: 'hjerte & kar', modul: 3 },

    { sp: 'Hvilken legemiddelgruppe tilhører losartan?',
      svar: [['angiotensin II-reseptorblokker', 'arb', 'a2-blokker', 'sartan']],
      gruppe: 'hjerte & kar', modul: 3 },

    { sp: 'Hvilken bivirkning gjør at ACE-hemmer oftest byttes til en ARB?',
      svar: [['tørrhoste', 'hoste', 'torrhoste']],
      gruppe: 'hjerte & kar', modul: 3,
      notat: 'ACE bryter også ned bradykinin. Akkumulert bradykinin gir hoste — og, sjeldnere ' +
             'men farligere, angioødem.' },

    { sp: 'Hvor i nefronet virker furosemid?',
      svar: [['tykke oppstigende del av Henles sløyfe', 'henles sloyfe', 'oppstigende del av henles sloyfe',
              'tykke oppadstigende del av henles sloyfe']],
      gruppe: 'hjerte & kar', modul: 3 },

    { sp: 'Hvilken transportør blokkerer furosemid?',
      svar: [['NKCC2', 'na-k-2cl-kotransportøren', 'natrium-kalium-klorid-kotransportoren']],
      gruppe: 'hjerte & kar', modul: 3 },

    { sp: 'Hvilken elektrolyttforstyrrelse gir loop-diuretika og tiazider?',
      svar: [['hypokalemi', 'lavt kalium']],
      gruppe: 'hjerte & kar', modul: 3 },

    { sp: 'Hvilken reseptor blokkerer spironolakton?',
      svar: [['mineralkortikoidreseptoren', 'aldosteronreseptoren', 'mineralkortikoidreseptor']],
      gruppe: 'hjerte & kar', modul: 3 },

    { sp: 'Hvilken elektrolyttforstyrrelse må du følge ved spironolakton?',
      svar: [['hyperkalemi', 'høyt kalium', 'hoyt kalium']],
      gruppe: 'hjerte & kar', modul: 3,
      notat: 'Kombinasjonen spironolakton + ACE-hemmer/ARB + NSAID er en klassisk ' +
             '«triple whammy» for hyperkalemi og akutt nyresvikt.' },

    { sp: 'Hvilket enzym hemmer statiner?',
      svar: [['HMG-CoA-reduktase', 'hmg coa reduktase']],
      gruppe: 'hjerte & kar', modul: 3 },

    { sp: 'Hvilket enzym hemmer acetylsalisylsyre irreversibelt i trombocytten?',
      svar: [['COX-1', 'cyklooksygenase-1', 'cox1']],
      gruppe: 'hjerte & kar', modul: 3,
      notat: 'Trombocytten har ingen cellekjerne og kan ikke lage nytt enzym — derfor varer ' +
             'effekten hele trombocyttens levetid (~7–10 døgn).' },

    { sp: 'Hvilken reseptor blokkerer klopidogrel?',
      svar: [['P2Y12', 'p2y12-reseptoren', 'adp-reseptoren']],
      gruppe: 'hjerte & kar', modul: 3 },

    { sp: 'Hvilket enzym hemmer warfarin?',
      svar: [['vitamin K-epoksidreduktase', 'vkor', 'vkorc1', 'epoksidreduktase']],
      gruppe: 'hjerte & kar', modul: 3 },

    { sp: 'Hvilken koagulasjonsfaktor hemmer apiksaban og rivaroksaban?',
      svar: [['faktor Xa', 'xa', 'faktor 10a']],
      gruppe: 'hjerte & kar', modul: 3 },

    { sp: 'Hva hemmer dabigatran?',
      svar: [['trombin', 'faktor IIa', 'faktor 2a']],
      gruppe: 'hjerte & kar', modul: 3 },

    { sp: 'Hvilken pumpe hemmer digoksin?',
      svar: [['Na+/K+-ATPase', 'natrium-kaliumpumpen', 'na-k-atpase']],
      gruppe: 'hjerte & kar', modul: 3 },

    { sp: 'Hvilken elektrolyttforstyrrelse øker faren for digoksintoksisitet?',
      svar: [['hypokalemi', 'lavt kalium']],
      gruppe: 'hjerte & kar', modul: 3,
      notat: 'Digoksin og kalium konkurrerer om samme bindingssete på pumpa. Lavt kalium ' +
             '= mer bundet digoksin = toksisitet ved «normal» serumkonsentrasjon.' },

    /* ---------------- smerte & anestesi ---------------- */
    { sp: 'Hvilken reseptor virker morfin hovedsakelig på?',
      svar: [['my-opioidreseptoren', 'mu-reseptoren', 'my-reseptor', 'mor']],
      gruppe: 'smerte & anestesi', modul: 3 },

    { sp: 'Hva er maksimal døgndose paracetamol til en frisk voksen, i gram?',
      svar: [['4', '4 g', '4 gram']],
      gruppe: 'smerte & anestesi', modul: 3,
      notat: 'Reduser til 2–3 g/døgn ved lav kroppsvekt, høy alder, underernæring, ' +
             'leversykdom eller høyt alkoholforbruk.' },

    { sp: 'Hvilken metabolitt gir levercelleskade ved paracetamolforgiftning?',
      svar: [['NAPQI', 'n-acetyl-p-benzokinonimin']],
      gruppe: 'smerte & anestesi', modul: 3,
      notat: 'Normalt konjugeres NAPQI med glutation. Når glutationlagrene er tømt, ' +
             'binder metabolitten seg til hepatocyttene i stedet.' },

    { sp: 'NSAID hemmer prostaglandiner som holder hvilke kar i nyren utvidet?',
      svar: [['afferente arterioler', 'afferent arteriole', 'de afferente arteriolene']],
      gruppe: 'smerte & anestesi', modul: 3,
      notat: 'Mindre afferent dilatasjon gir lavere filtrasjonstrykk — derfor faller GFR akutt, ' +
             'særlig hos dehydrerte og hos pasienter som alt står på ACE-hemmer.' },

    { sp: 'Hvilket av lidokain og bupivakain har lengst virketid?',
      svar: [['bupivakain']],
      gruppe: 'smerte & anestesi', modul: 3,
      notat: 'Bupivakain er også det mest kardiotoksiske — derfor aspirerer man alltid før ' +
             'injeksjon og holder seg til maksdosene.' },

    { sp: 'Hvorfor tilsettes adrenalin i lokalanestetika?',
      svar: [['vasokonstriksjon', 'karkontraksjon', 'forlenger virketiden']],
      gruppe: 'smerte & anestesi', modul: 3,
      notat: 'Vasokonstriksjonen holder anestetikumet på plass: lengre virketid, mindre ' +
             'systemisk opptak og mindre blødning i feltet.' },

    { sp: 'Hvilken muskelrelaksant er depolariserende?',
      svar: [['suksametonium', 'succinylkolin', 'suxameton']],
      gruppe: 'smerte & anestesi', modul: 3,
      notat: 'Raskest anslag av alle — derfor brukes det ved rapid sequence induction. ' +
             'Kan utløse hyperkalemi og malign hypertermi.' },

    { sp: 'Hvilken reseptor potenserer propofol?',
      svar: [['GABA-A', 'gaba-a-reseptoren', 'gabaa']],
      gruppe: 'smerte & anestesi', modul: 3 },

    /* ---------------- psykofarmaka ---------------- */
    { sp: 'Hvilken legemiddelgruppe tilhører sertralin?',
      svar: [['SSRI', 'selektiv serotoninreopptakshemmer']],
      gruppe: 'psykofarmaka', modul: 5 },

    { sp: 'Hvilken reseptor blokkerer antipsykotika for å dempe psykotiske symptomer?',
      svar: [['D2', 'dopamin-d2-reseptoren', 'd2-reseptoren']],
      gruppe: 'psykofarmaka', modul: 5 },

    { sp: 'Hva heter tilstanden med feber, rigiditet, autonom instabilitet og høy CK ved antipsykotika?',
      svar: [['malignt nevroleptikasyndrom', 'mns', 'malignt neuroleptikasyndrom']],
      gruppe: 'psykofarmaka', modul: 5 },

    { sp: 'Hvilken blodprøve må følges regelmessig ved klozapinbehandling?',
      svar: [['nøytrofile granulocytter', 'noytrofile', 'leukocytter', 'hvite blodceller']],
      gruppe: 'psykofarmaka', modul: 5,
      notat: 'Klozapin kan gi agranulocytose. Derfor er behandlingen underlagt fast ' +
             'monitoreringsregime, og klozapin er forbeholdt behandlingsresistent schizofreni.' },

    { sp: 'Hvilke to organsystemer må monitoreres under litiumbehandling?',
      svar: [['nyrene', 'nyrefunksjon', 'nyre'],
             ['thyreoidea', 'skjoldbruskkjertelen', 'tyreoidea']],
      gruppe: 'psykofarmaka', modul: 5,
      notat: 'Litium har smalt terapeutisk vindu og skilles ut renalt — dehydrering, NSAID, ' +
             'ACE-hemmere og tiazider kan alle skyve serumkonsentrasjonen opp i toksisk område.' },

    { sp: 'Hva heter syndromet med agitasjon, klonus, hyperrefleksi og hypertermi ved serotonerg overdosering?',
      svar: [['serotonergt syndrom', 'serotoninsyndrom']],
      gruppe: 'psykofarmaka', modul: 5 },

    { sp: 'Hvilken reseptor potenserer benzodiazepiner?',
      svar: [['GABA-A', 'gaba-a-reseptoren', 'gabaa']],
      gruppe: 'psykofarmaka', modul: 5,
      notat: 'Benzodiazepiner øker frekvensen av kloridkanalåpninger, barbiturater øker ' +
             'varigheten. Derfor har barbiturater lavere terapeutisk indeks.' },

    { sp: 'Hvilket antiepileptikum bør unngås hos fertile kvinner på grunn av nevralrørsdefekter?',
      svar: [['valproat', 'valproinsyre']],
      gruppe: 'psykofarmaka', modul: 5 },

    { sp: 'Hvilket legemiddel er førstevalg som substitusjon i LAR?',
      svar: [['buprenorfin', 'buprenorfin-nalokson', 'buprenorfin og nalokson']],
      gruppe: 'psykofarmaka', modul: 5,
      notat: 'Buprenorfin, helst i kombinasjon med nalokson. Metadon er alternativet, men har ' +
             'høyere overdoserisiko og er vanskeligere å trappe ned.',
      kilde: 'Nasjonal faglig retningslinje for LAR ved opioidavhengighet, Helsedirektoratet' },

    /* ---------------- endokrin & mage ---------------- */
    { sp: 'Hva er førstevalg legemiddel ved type 2-diabetes?',
      svar: [['metformin']],
      gruppe: 'endokrin & mage', modul: 3 },

    { sp: 'Hvilken sjeldne, men alvorlige bivirkningen frykter man ved metformin?',
      svar: [['laktacidose', 'laktatacidose']],
      gruppe: 'endokrin & mage', modul: 3 },

    { sp: 'Under hvilken eGFR er metformin kontraindisert?',
      svar: [['30', '30 ml/min', 'egfr under 30']],
      gruppe: 'endokrin & mage', modul: 3,
      notat: 'Halver dosen ved eGFR 30–45. Seponer midlertidig ved akutt sykdom med ' +
             'dehydrering og før kontrastundersøkelser.' },

    { sp: 'Hvilken transportør hemmer empagliflozin?',
      svar: [['SGLT2', 'sglt-2']],
      gruppe: 'endokrin & mage', modul: 3,
      notat: 'Gir glukosuri — men den viktigste kliniske effekten er nyre- og ' +
             'hjertesviktbeskyttelse uavhengig av blodsukkeret.' },

    { sp: 'Hvilken legemiddelgruppe tilhører liraglutid og semaglutid?',
      svar: [['GLP-1-analog', 'glp1-analog', 'glp-1-reseptoragonist']],
      gruppe: 'endokrin & mage', modul: 3 },

    { sp: 'Hvilket enzym hemmer omeprazol?',
      svar: [['H+/K+-ATPase', 'protonpumpen', 'h-k-atpase']],
      gruppe: 'endokrin & mage', modul: 3 },

    { sp: 'Hvilket hormon erstatter levotyroksin?',
      svar: [['tyroksin', 't4', 'tyroxin']],
      gruppe: 'endokrin & mage', modul: 3 },

    { sp: 'Hvorfor kan langvarig prednisolonbehandling ikke stoppes brått?',
      svar: [['binyrebarksvikt', 'binyrebarksuppresjon', 'addisonkrise', 'sekundaer binyrebarksvikt']],
      gruppe: 'endokrin & mage', modul: 3,
      notat: 'Eksogene steroider hemmer ACTH og gjør binyrebarken atrofisk. Brå seponering ' +
             'gir kortisolsvikt — derfor gradvis nedtrapping.' },

    /* ---------------- farmakokinetikk ---------------- */
    { sp: 'Hvor mange halveringstider tar det å nå steady state?',
      svar: [['4–5', '4-5', '5', 'fire til fem']],
      gruppe: 'farmakokinetikk', modul: 3,
      notat: 'Samme regnestykke gjelder ved seponering: legemidlet er praktisk talt ute etter ' +
             '4–5 halveringstider.' },

    { sp: 'Hvilken administrasjonsvei gir per definisjon 100 % biotilgjengelighet?',
      svar: [['intravenøst', 'iv', 'intravenos', 'i.v.']],
      gruppe: 'farmakokinetikk', modul: 3 },

    { sp: 'Hvilket enzymsystem står for mesteparten av fase I-metabolismen i leveren?',
      svar: [['cytokrom P450', 'cyp450', 'cyp']],
      gruppe: 'farmakokinetikk', modul: 3 },

    { sp: 'Hvilket CYP-enzym metaboliserer flest legemidler?',
      svar: [['CYP3A4', 'cyp 3a4']],
      gruppe: 'farmakokinetikk', modul: 3 },

    { sp: 'Hva heter tapet av legemiddel i tarmvegg og lever før stoffet når systemisk sirkulasjon?',
      svar: [['førstepassasjemetabolisme', 'forstepassasjemetabolisme', 'first pass-effekt',
              'forstepassasjeeffekt']],
      gruppe: 'farmakokinetikk', modul: 3 },

    { sp: 'Hvilken juice hemmer CYP3A4 og kan gi toksiske statinkonsentrasjoner?',
      svar: [['grapefruktjuice', 'grapefrukt']],
      gruppe: 'farmakokinetikk', modul: 3 },

    /* ---------------- antidoter ---------------- */
    { sp: 'Antidot ved paracetamolforgiftning?',
      svar: [['acetylcystein', 'n-acetylcystein', 'nac']],
      gruppe: 'antidoter', modul: 3,
      notat: 'Full effekt hvis gitt innen 8–10 timer. Etterfyller glutationlagrene som ' +
             'nøytraliserer NAPQI.' },

    { sp: 'Antidot ved opioidoverdose?',
      svar: [['nalokson', 'naloxon']],
      gruppe: 'antidoter', modul: 3,
      notat: 'Kortere halveringstid enn de fleste opioider — pasienten kan falle tilbake i ' +
             'respirasjonsdepresjon og må observeres etter oppvåkning.' },

    { sp: 'Antidot ved benzodiazepinoverdose?',
      svar: [['flumazenil']],
      gruppe: 'antidoter', modul: 3,
      notat: 'Brukes tilbakeholdent: kan utløse krampeanfall hos blandingsforgiftede og hos ' +
             'pasienter med benzodiazepinavhengighet.' },

    { sp: 'Antidot ved warfarinblødning?',
      svar: [['vitamin K', 'fytomenadion', 'konakion', 'k-vitamin']],
      gruppe: 'antidoter', modul: 3,
      notat: 'Ved alvorlig blødning gis protrombinkomplekskonsentrat i tillegg — vitamin K ' +
             'alene tar timer på å virke.' },

    { sp: 'Antidot ved dabigatranblødning?',
      svar: [['idarusizumab', 'praxbind']],
      gruppe: 'antidoter', modul: 3 },

    { sp: 'Antidot ved heparinoverdose?',
      svar: [['protaminsulfat', 'protamin']],
      gruppe: 'antidoter', modul: 3 },

    { sp: 'Hvilket legemiddel gis ved betablokkeroverdose som ikke svarer på atropin og væske?',
      svar: [['glukagon']],
      gruppe: 'antidoter', modul: 3,
      notat: 'Glukagon øker cAMP i myocytten via en egen reseptor, og omgår dermed den ' +
             'blokkerte betareseptoren.' },

    { sp: 'Antidot ved metanol- og etylenglykolforgiftning?',
      svar: [['fomepizol', 'etanol']],
      gruppe: 'antidoter', modul: 3,
      notat: 'Begge blokkerer alkoholdehydrogenase, så giften ikke omdannes til de toksiske ' +
             'metabolittene. Fomepizol foretrekkes; hemodialyse fjerner både gift og metabolitter.' },

    { sp: 'Antidot ved organofosfatforgiftning?',
      svar: [['atropin', 'atropin og pralidoksim']],
      gruppe: 'antidoter', modul: 3 },

    { sp: 'Antidot ved jernforgiftning?',
      svar: [['deferoksamin']],
      gruppe: 'antidoter', modul: 3 },

    { sp: 'Antidot ved cyanidforgiftning?',
      svar: [['hydroksokobalamin', 'cyanokit']],
      gruppe: 'antidoter', modul: 3 },

    { sp: 'Antidot ved metotreksattoksisitet?',
      svar: [['kalsiumfolinat', 'folinsyre', 'leukovorin']],
      gruppe: 'antidoter', modul: 3 },
  ],
};
