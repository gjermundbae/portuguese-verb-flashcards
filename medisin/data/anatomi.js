/* Anatomi — Modul 1 og 2 (humanbiologi, thorax).
   Norsk spørsmål, latinsk fasit. Latinske forkortelser er valgfrie: "n. medianus",
   "nervus medianus" og "medianus" godtas alle. */

window.MED_DECKS = window.MED_DECKS || {};
window.MED_DECKS.anatomi = {
  id: 'anatomi',
  navn: 'Anatomi',
  beskrivelse: 'Latinske navn, innervasjon, kar og topografi',
  nav: 'anatomi',
  moduler: 'Modul 1–2',
  grupper: ['retning & snitt', 'skjelett', 'muskler', 'nerver', 'kar', 'organer'],
  merknad: 'Latinske forkortelser er valgfrie — <strong>n. medianus</strong>, ' +
           '<strong>nervus medianus</strong> og <strong>medianus</strong> godtas likt. ' +
           'Æ, ø og å kan skrives som ae, o og a.',
  kort: [

    /* ---------------- retning & snitt ---------------- */
    { sp: 'Hva er det anatomiske ordet for «mot hodet»?',
      svar: [['kranialt', 'cranialt', 'superiort', 'kranial']],
      gruppe: 'retning & snitt', modul: 1 },

    { sp: 'Hva er det anatomiske ordet for «mot føttene»?',
      svar: [['kaudalt', 'caudalt', 'inferiort', 'kaudal']],
      gruppe: 'retning & snitt', modul: 1 },

    { sp: 'Hvilket ord beskriver noe som ligger nærmere midtlinjen?',
      svar: [['medialt', 'medial']],
      gruppe: 'retning & snitt', modul: 1 },

    { sp: 'Hvilket ord beskriver noe som ligger lenger fra midtlinjen?',
      svar: [['lateralt', 'lateral']],
      gruppe: 'retning & snitt', modul: 1 },

    { sp: 'Håndleddet ligger ___ for albuen.',
      svar: [['distalt', 'distal']],
      hint: 'Proksimalt eller distalt?',
      gruppe: 'retning & snitt', modul: 1,
      notat: 'Proksimalt/distalt brukes bare om ekstremiteter og rørformede organ — ' +
             'på truncus sier man kranialt/kaudalt.' },

    { sp: 'Hvilket snitt deler kroppen i to like store høyre og venstre halvdeler?',
      svar: [['medianplanet', 'medianplan', 'midtsagittalplanet', 'mediansagittalplanet']],
      gruppe: 'retning & snitt', modul: 1,
      notat: 'Sagittalplan er alle plan parallelt med dette — bare det som treffer midtlinjen ' +
             'er medianplanet.' },

    { sp: 'Hvilket snitt deler kroppen i en fremre og en bakre del?',
      svar: [['frontalplan', 'frontalplanet', 'koronalplan', 'koronalplanet']],
      gruppe: 'retning & snitt', modul: 1 },

    { sp: 'Hvilket snitt deler kroppen i en øvre og en nedre del?',
      svar: [['transversalplan', 'transversalplanet', 'aksialplan', 'horisontalplan']],
      gruppe: 'retning & snitt', modul: 1,
      notat: 'Dette er snittet du ser på et vanlig CT-bilde.' },

    { sp: 'Hva kalles håndflatesiden av hånden?',
      svar: [['palmart', 'volart', 'palmar']],
      gruppe: 'retning & snitt', modul: 1 },

    { sp: 'Hva kalles fotsålesiden av foten?',
      svar: [['plantart', 'plantar']],
      gruppe: 'retning & snitt', modul: 1 },

    /* ---------------- skjelett ---------------- */
    { sp: 'Hva heter lårbeinet på latin?',
      svar: [['os femoris', 'femur']],
      gruppe: 'skjelett', modul: 2 },

    { sp: 'Hva heter skinnebeinet på latin?',
      svar: ['tibia'],
      gruppe: 'skjelett', modul: 2 },

    { sp: 'Hva heter leggbeinet på latin?',
      svar: ['fibula'],
      gruppe: 'skjelett', modul: 2 },

    { sp: 'Hva heter kragebeinet på latin?',
      svar: ['clavicula'],
      gruppe: 'skjelett', modul: 1 },

    { sp: 'Hva heter skulderbladet på latin?',
      svar: ['scapula'],
      gruppe: 'skjelett', modul: 1 },

    { sp: 'Hva heter overarmsbeinet på latin?',
      svar: ['humerus'],
      gruppe: 'skjelett', modul: 2 },

    { sp: 'Hvilket underarmsbein ligger på tommelsiden?',
      svar: ['radius'],
      gruppe: 'skjelett', modul: 2,
      notat: 'Radius følger tommelen, ulna følger lillefingeren — verdt å ha automatisert ' +
             'før du leser røntgen av håndledd.' },

    { sp: 'Hva heter brystbeinet på latin?',
      svar: ['sternum'],
      gruppe: 'skjelett', modul: 1 },

    { sp: 'Hva heter kneskjellet på latin?',
      svar: ['patella'],
      gruppe: 'skjelett', modul: 2 },

    { sp: 'Hvilket bein danner hælen?',
      svar: [['calcaneus', 'os calcaneus']],
      gruppe: 'skjelett', modul: 2 },

    { sp: 'Hvor mange virvler har halsryggen?',
      svar: ['7'],
      gruppe: 'skjelett', modul: 2 },

    { sp: 'Hvor mange virvler har brystryggen?',
      svar: ['12'],
      gruppe: 'skjelett', modul: 1 },

    { sp: 'Hvor mange virvler har lendryggen?',
      svar: ['5'],
      gruppe: 'skjelett', modul: 2 },

    { sp: 'Hvilken virvel kalles atlas?',
      svar: [['C1', 'første cervikalvirvel']],
      gruppe: 'skjelett', modul: 2,
      notat: 'Atlas (C1) bærer hodet; axis (C2) har dens som hodet roterer rundt.' },

    { sp: 'Hvor mange par ribbein har mennesket normalt?',
      svar: ['12'],
      gruppe: 'skjelett', modul: 1 },

    { sp: 'Nevn de tre beina som til sammen danner hoftebeinet (os coxae).',
      svar: [['os ilium', 'ilium', 'tarmbeinet'],
             ['os ischii', 'ischium', 'sittebeinet'],
             ['os pubis', 'pubis', 'skambeinet']],
      gruppe: 'skjelett', modul: 2 },

    { sp: 'Hvor mange knokler er det i håndroten (carpus)?',
      svar: ['8'],
      gruppe: 'skjelett', modul: 2 },

    { sp: 'Hvilken knokkel i håndroten brekker oftest ved fall på utstrakt hånd?',
      svar: [['os scaphoideum', 'scaphoideum', 'båtbeinet']],
      gruppe: 'skjelett', modul: 2,
      notat: 'Blodforsyningen går distalt fra — derfor gir proksimale brudd risiko for ' +
             'avaskulær nekrose, og bruddet kan være usynlig på røntgen de første dagene.' },

    { sp: 'Hvilken bihule er størst?',
      svar: [['sinus maxillaris', 'kjevehulen']],
      gruppe: 'skjelett', modul: 2 },

    /* ---------------- muskler ---------------- */
    { sp: 'Hvilken muskel er hovedinnåndingsmuskel?',
      svar: [['diafragma', 'diaphragma', 'mellomgulvet']],
      gruppe: 'muskler', modul: 1 },

    { sp: 'Nevn de fire musklene i rotatorcuffen.',
      svar: [['m. supraspinatus', 'supraspinatus'],
             ['m. infraspinatus', 'infraspinatus'],
             ['m. teres minor', 'teres minor'],
             ['m. subscapularis', 'subscapularis']],
      gruppe: 'muskler', modul: 2,
      notat: 'Alle fire fester på tuberculum majus bortsett fra subscapularis, som fester på ' +
             'tuberculum minus og er den eneste innadrotatoren i cuffen.' },

    { sp: 'Hvilken muskel starter abduksjonen i skulderleddet (de første ~15 gradene)?',
      svar: [['m. supraspinatus', 'supraspinatus']],
      gruppe: 'muskler', modul: 2,
      notat: 'Deltoideus overtar deretter opp til ~90°. Derfor tester du supraspinatus med ' +
             'armen langs siden.' },

    { sp: 'Hvilken muskel bøyer i albuen og supinerer underarmen?',
      svar: [['m. biceps brachii', 'biceps brachii', 'biceps']],
      gruppe: 'muskler', modul: 2 },

    { sp: 'Nevn de fire hodene i m. quadriceps femoris.',
      svar: [['m. rectus femoris', 'rectus femoris'],
             ['m. vastus lateralis', 'vastus lateralis'],
             ['m. vastus medialis', 'vastus medialis'],
             ['m. vastus intermedius', 'vastus intermedius']],
      gruppe: 'muskler', modul: 2,
      notat: 'Bare rectus femoris krysser hofteleddet, og er derfor også hoftebøyer.' },

    { sp: 'Nevn de tre hamstringsmusklene.',
      svar: [['m. biceps femoris', 'biceps femoris'],
             ['m. semitendinosus', 'semitendinosus'],
             ['m. semimembranosus', 'semimembranosus']],
      gruppe: 'muskler', modul: 2 },

    { sp: 'Hvilke to muskler danner triceps surae?',
      svar: [['m. gastrocnemius', 'gastrocnemius'],
             ['m. soleus', 'soleus']],
      gruppe: 'muskler', modul: 2 },

    { sp: 'Hva heter senen som fester triceps surae til calcaneus?',
      svar: [['akillessenen', 'tendo calcaneus', 'akillessene']],
      gruppe: 'muskler', modul: 2 },

    { sp: 'Hvilken muskel er den kraftigste tyggemuskelen?',
      svar: [['m. masseter', 'masseter']],
      gruppe: 'muskler', modul: 2 },

    { sp: 'Hvilken muskel bøyer nakken til samme side og roterer hodet til motsatt side?',
      svar: [['m. sternocleidomastoideus', 'sternocleidomastoideus', 'scm']],
      gruppe: 'muskler', modul: 2 },

    { sp: 'Hvilken muskel er den viktigste hoftebøyeren?',
      svar: [['m. iliopsoas', 'iliopsoas']],
      gruppe: 'muskler', modul: 2 },

    /* ---------------- nerver ---------------- */
    { sp: 'Hvor mange par hjernenerver har vi?',
      svar: ['12'],
      gruppe: 'nerver', modul: 2 },

    { sp: 'Hvilken nerve innerverer m. deltoideus?',
      svar: [['n. axillaris', 'axillarisnerven']],
      gruppe: 'nerver', modul: 2,
      notat: 'Løper rundt collum chirurgicum humeri — derfor sjekker du sensibiliteten over ' +
             'deltoideus etter skulderluksasjon og proksimal humerusfraktur.' },

    { sp: 'Hvilken nerve innerverer diafragma?',
      svar: [['n. phrenicus', 'phrenicusnerven', 'n. frenicus']],
      gruppe: 'nerver', modul: 1 },

    { sp: 'Fra hvilke ryggmargssegmenter kommer n. phrenicus?',
      svar: [['C3–C5', 'C3-C5', 'C3, C4 og C5', 'C3 C4 C5']],
      gruppe: 'nerver', modul: 1,
      notat: '«C3, 4, 5 keeps the diaphragm alive.» Høy cervikal tverrsnittslesjon over C3 ' +
             'lammer respirasjonen.' },

    { sp: 'Skade på hvilken nerve gir dropphånd?',
      svar: [['n. radialis', 'radialisnerven']],
      gruppe: 'nerver', modul: 2,
      notat: 'Radialis løper i sulcus nervi radialis på humerus og rammes ved humerusskaftfraktur ' +
             'og ved langvarig trykk mot overarmen.' },

    { sp: 'Hvilken nerve er klemt ved karpaltunnelsyndrom?',
      svar: [['n. medianus', 'medianusnerven']],
      gruppe: 'nerver', modul: 2 },

    { sp: 'Hvilken nerve ligger i sulcus nervi ulnaris ved albuen?',
      svar: [['n. ulnaris', 'ulnarisnerven']],
      gruppe: 'nerver', modul: 2 },

    { sp: 'Nevn de fem hovedgrenene fra plexus brachialis.',
      svar: [['n. musculocutaneus', 'musculocutaneus'],
             ['n. axillaris', 'axillaris'],
             ['n. radialis', 'radialis'],
             ['n. medianus', 'medianus'],
             ['n. ulnaris', 'ulnaris']],
      gruppe: 'nerver', modul: 2 },

    { sp: 'Hvilken nerve innerverer m. quadriceps femoris?',
      svar: [['n. femoralis', 'femoralisnerven']],
      gruppe: 'nerver', modul: 2 },

    { sp: 'Skade på hvilken nerve ved fibulahalsen gir droppfot?',
      svar: [['n. peroneus communis', 'n. fibularis communis', 'peroneusnerven']],
      gruppe: 'nerver', modul: 2,
      notat: 'Nerven ligger overflatisk mot collum fibulae — utsatt ved gipsing, leiring på ' +
             'operasjonsbordet og kryssing av bena.' },

    { sp: 'Hvilken hjernenerve er nr. VII?',
      svar: [['n. facialis', 'facialis']],
      gruppe: 'nerver', modul: 2 },

    { sp: 'Hvilken hjernenerve er nr. X?',
      svar: [['n. vagus', 'vagus']],
      gruppe: 'nerver', modul: 2 },

    { sp: 'Hvilken hjernenerve gir sensibilitet i ansiktet?',
      svar: [['n. trigeminus', 'trigeminus']],
      gruppe: 'nerver', modul: 2 },

    { sp: 'Hvilken hjernenerve innerverer m. rectus lateralis i øyet?',
      svar: [['n. abducens', 'abducens']],
      gruppe: 'nerver', modul: 4,
      notat: 'LR6 SO4 — lateral rectus av VI, obliquus superior av IV, resten av III.' },

    { sp: 'Hvilken hjernenerve står for den efferente delen av pupillens lysrefleks?',
      svar: [['n. oculomotorius', 'oculomotorius']],
      gruppe: 'nerver', modul: 4,
      notat: 'Afferent er n. opticus (II), efferent er n. oculomotorius (III). Derfor gir ' +
             'opticusskade svekket direkte refleks, men bevart konsensuell på motsatt side.' },

    /* ---------------- kar ---------------- */
    { sp: 'Hvilken arterie palperer du på tommelsiden av håndleddet?',
      svar: [['a. radialis', 'radialisarterien']],
      gruppe: 'kar', modul: 2 },

    { sp: 'Hvilken arterie palperer du i lysken?',
      svar: [['a. femoralis', 'femoralisarterien']],
      gruppe: 'kar', modul: 2 },

    { sp: 'Hvilken arterie palperer du bak mediale malleol?',
      svar: [['a. tibialis posterior']],
      gruppe: 'kar', modul: 2 },

    { sp: 'Hvilken arterie deler seg i a. carotis interna og a. carotis externa?',
      svar: [['a. carotis communis']],
      gruppe: 'kar', modul: 2 },

    { sp: 'Hva kalles circulus arteriosus cerebri på norsk?',
      svar: [['Willis’ arteriesirkel', 'willis arteriesirkel', 'circulus willisi', 'willis sirkel']],
      gruppe: 'kar', modul: 4 },

    { sp: 'Hvilken vene fører blod fra tarmen til leveren?',
      svar: [['v. portae', 'portvenen', 'vena porta']],
      gruppe: 'kar', modul: 2,
      notat: 'Portasystemet er grunnen til at peroralt inntatte legemidler møter ' +
             'førstepassasjemetabolisme før de når systemkretsløpet.' },

    { sp: 'Nevn de tre uparede arteriene som forsyner tarmen fra aorta abdominalis.',
      svar: [['truncus coeliacus', 'truncus celiacus'],
             ['a. mesenterica superior'],
             ['a. mesenterica inferior']],
      gruppe: 'kar', modul: 2 },

    { sp: 'Hvor tømmer ductus thoracicus seg?',
      svar: [['venstre venevinkel', 'angulus venosus sinister']],
      gruppe: 'kar', modul: 2,
      notat: 'Overgangen mellom v. jugularis interna og v. subclavia på venstre side. ' +
             'All lymfe unntatt høyre overkropp går hit.' },

    { sp: 'Hvilken koronararterie forsyner fremreveggen og septum, og gir størst infarkt ved okklusjon?',
      svar: [['LAD', 'ramus interventricularis anterior', 'venstre fremre nedadgående arterie']],
      gruppe: 'kar', modul: 3,
      notat: 'Kalles «the widow maker». På EKG gir okklusjon ST-elevasjon i V1–V4.' },

    /* ---------------- organer ---------------- */
    { sp: 'Hvor mange lungelapper har høyre lunge?',
      svar: ['3'],
      gruppe: 'organer', modul: 1,
      notat: 'Venstre har to — plassen går til hjertet (incisura cardiaca).' },

    { sp: 'Nevn de fire hjertekamrene.',
      svar: [['høyre atrium', 'hoyre atrium', 'høyre forkammer'],
             ['høyre ventrikkel', 'hoyre ventrikkel'],
             ['venstre atrium', 'venstre forkammer'],
             ['venstre ventrikkel']],
      gruppe: 'organer', modul: 1 },

    { sp: 'Hvilken klaff ligger mellom venstre atrium og venstre ventrikkel?',
      svar: [['mitralklaffen', 'valva mitralis', 'bikuspidalklaffen', 'mitralklaff']],
      gruppe: 'organer', modul: 1 },

    { sp: 'Hvilken klaff ligger mellom høyre atrium og høyre ventrikkel?',
      svar: [['trikuspidalklaffen', 'valva tricuspidalis', 'trikuspidalklaff']],
      gruppe: 'organer', modul: 1 },

    { sp: 'Nevn de tre delene av tynntarmen i rekkefølge.',
      svar: [['duodenum', 'tolvfingertarmen'],
             ['jejunum'],
             ['ileum', 'krumtarmen']],
      gruppe: 'organer', modul: 2 },

    { sp: 'Hva heter overgangen mellom magesekken og duodenum?',
      svar: [['pylorus', 'pylorusporten']],
      gruppe: 'organer', modul: 2 },

    { sp: 'Hva heter den funksjonelle enheten i nyren?',
      svar: [['nefronet', 'nefron']],
      gruppe: 'organer', modul: 2 },

    { sp: 'Hvor i nefronet skjer filtrasjonen av plasma?',
      svar: [['glomerulus', 'nyrenøstet']],
      gruppe: 'organer', modul: 2 },

    { sp: 'Hvilke celler i de langerhanske øyer produserer insulin?',
      svar: [['betaceller', 'b-celler', 'beta-celler']],
      gruppe: 'organer', modul: 2,
      notat: 'Alfaceller lager glukagon, deltaceller somatostatin.' },

    { sp: 'Hvilket lag i binyrebarken produserer kortisol?',
      svar: [['zona fasciculata', 'fasciculata']],
      gruppe: 'organer', modul: 2,
      notat: 'Utenfra og inn: glomerulosa (aldosteron), fasciculata (kortisol), ' +
             'reticularis (kjønnshormoner) — «salt, sukker, sex».' },

    { sp: 'I hvor mange segmenter deles leveren etter Couinaud?',
      svar: ['8'],
      gruppe: 'organer', modul: 2 },

    { sp: 'Hvilket organ i venstre øvre kvadrant kan rumpere ved mononukleose?',
      svar: [['milten', 'lien', 'splen']],
      gruppe: 'organer', modul: 3,
      notat: 'Derfor rådes pasienter med mononukleose fra kontaktidrett i minst 3–4 uker.' },
  ],
};
