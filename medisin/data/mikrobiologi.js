/* Mikrobiologi og antibiotika — Modul 3.
   Antibiotikavalgene følger de norske retningslinjene. Norge er et
   lavresistensland, og velger smalspektret der internasjonale kort ofte
   velger bredspektret — det er nettopp de kortene som er verdt å pugge her. */

window.MED_DECKS = window.MED_DECKS || {};
window.MED_DECKS.mikrobiologi = {
  id: 'mikrobiologi',
  navn: 'Mikrobiologi & antibiotika',
  beskrivelse: 'Agens, mekanisme og norsk førstevalg',
  nav: 'mikrobiologi',
  moduler: 'Modul 3',
  grupper: ['bakterier', 'virus', 'sopp & parasitter', 'antibiotikavalg', 'vaksiner & smittevern'],
  merknad: 'Antibiotikakortene følger <strong>Nasjonal faglig retningslinje for antibiotikabruk</strong> ' +
           '(Helsedirektoratet). Slå alltid opp i retningslinjen før du behandler en pasient — ' +
           'her er poenget å ha norsk førstevalg i fingrene.',
  kort: [

    /* ---------------- bakterier ---------------- */
    { sp: 'Hvilken bakterie er vanligste årsak til samfunnservervet pneumoni?',
      svar: [['Streptococcus pneumoniae', 'pneumokokker', 'pneumokokk', 's. pneumoniae']],
      gruppe: 'bakterier', modul: 3 },

    { sp: 'Hvilken bakterie står bak de fleste tilfellene av ukomplisert cystitt?',
      svar: [['Escherichia coli', 'e. coli']],
      gruppe: 'bakterier', modul: 3,
      notat: 'Rundt 80 % av tilfellene. E. coli i Norge har lav resistens mot nitrofurantoin ' +
             '(~1 %) og pivmecillinam (~5 %) — derfor er de trygge empiriske valg her.' },

    { sp: 'Hvilken bakterie gir erysipelas?',
      svar: [['Streptococcus pyogenes', 'gruppe A-streptokokker', 'gas', 's. pyogenes']],
      gruppe: 'bakterier', modul: 3 },

    { sp: 'Hvilken bakterie gir oftest abscesser og sårinfeksjoner i hud?',
      svar: [['Staphylococcus aureus', 'gule stafylokokker', 's. aureus']],
      gruppe: 'bakterier', modul: 3 },

    { sp: 'Hvilken bakterie er vanligste årsak til bakteriell meningitt hos voksne i Norge?',
      svar: [['Streptococcus pneumoniae', 'pneumokokker', 's. pneumoniae']],
      gruppe: 'bakterier', modul: 4 },

    { sp: 'Hvilken bakterie gir meningitt med petekkier og svært rask sepsisutvikling?',
      svar: [['Neisseria meningitidis', 'meningokokker', 'meningokokk']],
      gruppe: 'bakterier', modul: 4,
      notat: 'Petekkier som ikke blancherer ved trykk er alarmsymptomet. Ved mistanke gis ' +
             'antibiotika før transport — ikke etter.' },

    { sp: 'Hvilken bakterie er assosiert med ulcus og ventrikkelkreft?',
      svar: [['Helicobacter pylori', 'h. pylori']],
      gruppe: 'bakterier', modul: 3 },

    { sp: 'Hvilken bakterie gir antibiotikaassosiert kolitt?',
      svar: [['Clostridioides difficile', 'clostridium difficile', 'c. difficile']],
      gruppe: 'bakterier', modul: 3 },

    { sp: 'Hvordan ser Staphylococcus aureus ut i gramfarget preparat?',
      svar: [['grampositive kokker i klaser', 'grampositive kokker i klase', 'gram positive kokker i klaser']],
      gruppe: 'bakterier', modul: 3,
      notat: 'Streptokokker ligger i kjeder eller par, stafylokokker i klaser — «staphyle» ' +
             'er gresk for drueklase.' },

    { sp: 'Hvilken bakterie gir borreliose?',
      svar: [['Borrelia burgdorferi', 'borrelia']],
      gruppe: 'bakterier', modul: 3 },

    { sp: 'Hvilken bakterie gir kikhoste?',
      svar: [['Bordetella pertussis', 'b. pertussis']],
      gruppe: 'bakterier', modul: 6 },

    { sp: 'Hvilken bakterie gir tuberkulose?',
      svar: [['Mycobacterium tuberculosis', 'm. tuberculosis']],
      gruppe: 'bakterier', modul: 3 },

    { sp: 'Hvilken bakterie er vanligste årsak til akutt osteomyelitt hos barn?',
      svar: [['Staphylococcus aureus', 's. aureus', 'gule stafylokokker']],
      gruppe: 'bakterier', modul: 6 },

    { sp: 'Hvilken resistensmekanisme ligger bak MRSA?',
      svar: [['endret penicillinbindende protein', 'pbp2a', 'meca', 'mecA-genet']],
      gruppe: 'bakterier', modul: 3,
      notat: 'mecA koder for PBP2a, som betalaktamer binder dårlig. Derfor er hele ' +
             'betalaktamgruppen ute av spill — ikke bare meticillin.' },

    { sp: 'Hva står ESBL for?',
      svar: [['ekstendert spektrum betalaktamase', 'extended spectrum betalaktamase',
              'utvidet spektrum betalaktamase']],
      gruppe: 'bakterier', modul: 3 },

    /* ---------------- virus ---------------- */
    { sp: 'Hvilket virus gir mononukleose?',
      svar: [['Epstein-Barr-virus', 'ebv', 'epstein barr']],
      gruppe: 'virus', modul: 3 },

    { sp: 'Hvilket virus gir både vannkopper og helvetesild?',
      svar: [['varicella zoster-virus', 'vzv', 'varicella zoster']],
      gruppe: 'virus', modul: 3,
      notat: 'Primærinfeksjon = vannkopper. Viruset ligger latent i sensoriske ganglier og ' +
             'reaktiveres som herpes zoster i ett dermatom.' },

    { sp: 'Hvilken virusgruppe er vanligste årsak til viral meningitt?',
      svar: [['enterovirus', 'enterovirusene']],
      gruppe: 'virus', modul: 4 },

    { sp: 'Hvilket virus gir encefalitt med temporallappsaffeksjon hos voksne?',
      svar: [['herpes simplex-virus type 1', 'hsv-1', 'hsv1', 'herpes simplex 1']],
      gruppe: 'virus', modul: 4,
      notat: 'Behandles med aciklovir på mistanke — ikke vent på PCR-svar. Ubehandlet ' +
             'dødelighet er svært høy.' },

    { sp: 'Hvilke to HPV-genotyper står bak flest tilfeller av livmorhalskreft?',
      svar: [['16', 'hpv 16'], ['18', 'hpv 18']],
      gruppe: 'virus', modul: 6 },

    { sp: 'Hvilket virus er vanligste årsak til bronkiolitt hos små barn?',
      svar: [['RS-virus', 'rsv', 'respiratorisk syncytialvirus']],
      gruppe: 'virus', modul: 6 },

    { sp: 'Hvilke to hepatittvirus overføres fekal-oralt?',
      svar: [['hepatitt A', 'hav', 'hep a'],
             ['hepatitt E', 'hev', 'hep e']],
      gruppe: 'virus', modul: 3,
      notat: 'B, C og D overføres via blod og kroppsvæsker. A og E gir ikke kronisk ' +
             'infeksjon hos immunfriske.' },

    { sp: 'Hvilket virus står bak de fleste gastroenteritt-utbrudd på sykehjem og cruiseskip?',
      svar: [['norovirus']],
      gruppe: 'virus', modul: 3 },

    { sp: 'Hvilken celletype infiserer og ødelegger HIV?',
      svar: [['CD4-positive T-hjelperceller', 'cd4-celler', 'cd4+ t-celler', 't-hjelperceller']],
      gruppe: 'virus', modul: 3 },

    /* ---------------- sopp & parasitter ---------------- */
    { sp: 'Hvilken sopp gir oral trøske?',
      svar: [['Candida albicans', 'candida']],
      gruppe: 'sopp & parasitter', modul: 3 },

    { sp: 'Hvilken sopp gir pneumoni hos immunsupprimerte, og profylakteres med trimetoprim-sulfa?',
      svar: [['Pneumocystis jirovecii', 'pneumocystis', 'pcp']],
      gruppe: 'sopp & parasitter', modul: 3 },

    { sp: 'Hvilken malariaparasitt har høyest dødelighet?',
      svar: [['Plasmodium falciparum', 'p. falciparum', 'falciparum']],
      gruppe: 'sopp & parasitter', modul: 6,
      notat: 'Feber hos en reisende fra malariaområde er en øyeblikkelig-hjelp-situasjon: ' +
             'falciparum kan gå fra frisk til alvorlig syk på timer.' },

    { sp: 'Hvilken parasitt ga det store vannbårne utbruddet i Bergen i 2004?',
      svar: [['Giardia lamblia', 'giardia', 'giardia duodenalis']],
      gruppe: 'sopp & parasitter', modul: 3,
      notat: 'Gir langvarig vandig diaré, oppblåsthet og vekttap — tenk på den ved ' +
             'diaré som varer over to uker.' },

    { sp: 'Hvilken parasitt kan gi fosterskade ved primærinfeksjon i svangerskapet?',
      svar: [['Toxoplasma gondii', 'toxoplasma', 'toksoplasma']],
      gruppe: 'sopp & parasitter', modul: 6 },

    /* ---------------- antibiotikavalg ---------------- */
    { sp: 'Hva er førstevalg ved streptokokktonsillitt?',
      svar: [['fenoksymetylpenicillin', 'penicillin v', 'apocillin']],
      gruppe: 'antibiotikavalg', modul: 3,
      notat: 'Smalspektret, lav resistensdrivende effekt og fortsatt full følsomhet hos ' +
             'gruppe A-streptokokker i Norge.',
      kilde: 'Antibiotika i primærhelsetjenesten, Helsedirektoratet' },

    { sp: 'Hva er førstevalg ved akutt mediaotitt som skal behandles med antibiotika?',
      svar: [['fenoksymetylpenicillin', 'penicillin v', 'apocillin']],
      gruppe: 'antibiotikavalg', modul: 3,
      kilde: 'Antibiotika i primærhelsetjenesten, Helsedirektoratet' },

    { sp: 'Hva er førstevalg ved samfunnservervet pneumoni i allmennpraksis?',
      svar: [['fenoksymetylpenicillin', 'penicillin v', 'apocillin']],
      gruppe: 'antibiotikavalg', modul: 3,
      notat: 'Monoterapi holder: rundt 93 % av norske pneumokokker er fullt følsomme for ' +
             'penicillin. Dette er der internasjonale kortstokker oftest tar feil for norsk bruk.',
      kilde: 'Antibiotika i primærhelsetjenesten, Helsedirektoratet' },

    { sp: 'Nevn de tre likeverdige førstevalgene ved akutt cystitt hos ikke-gravid kvinne.',
      svar: [['pivmecillinam', 'selexid'],
             ['nitrofurantoin', 'furadantin'],
             ['trimetoprim']],
      gruppe: 'antibiotikavalg', modul: 3,
      notat: 'Alle tre har lav resistens mot E. coli i Norge og lite kollateral effekt på ' +
             'tarmfloraen. Kinoloner hører ikke hjemme ved ukomplisert cystitt.',
      kilde: 'Antibiotika i primærhelsetjenesten, Helsedirektoratet' },

    { sp: 'Hvor mange døgn behandles ukomplisert cystitt hos kvinne med pivmecillinam?',
      svar: [['3', '3 dogn', 'tre']],
      gruppe: 'antibiotikavalg', modul: 3,
      kilde: 'Antibiotika i primærhelsetjenesten, Helsedirektoratet' },

    { sp: 'Hva er førstevalg ved erysipelas?',
      svar: [['fenoksymetylpenicillin', 'penicillin v', 'apocillin']],
      gruppe: 'antibiotikavalg', modul: 3,
      notat: 'Erysipelas er streptokokkbetinget — smalt penicillin dekker. Ved mistanke om ' +
             'S. aureus (abscess, sår, pussdannelse) velger du dikloksacillin i stedet.',
      kilde: 'Antibiotika i primærhelsetjenesten, Helsedirektoratet' },

    { sp: 'Hva er førstevalg ved solitært erythema migrans hos voksen?',
      svar: [['fenoksymetylpenicillin', 'penicillin v', 'apocillin']],
      gruppe: 'antibiotikavalg', modul: 3,
      notat: 'Norsk retningslinje: penicillin V i 10 døgn, likeverdig med doksysyklin og ' +
             'amoksicillin. Amerikanske kort sier doksysyklin — her gjelder det norske valget.',
      kilde: 'Antibiotika i primærhelsetjenesten, Helsedirektoratet' },

    { sp: 'Hvor mange døgn behandles solitært erythema migrans?',
      svar: [['10', '10 dogn', 'ti']],
      gruppe: 'antibiotikavalg', modul: 3,
      kilde: 'Antibiotika i primærhelsetjenesten, Helsedirektoratet' },

    { sp: 'Hvilket antibiotikum velges ved hud- og bløtdelsinfeksjon der S. aureus er sannsynlig?',
      svar: [['dikloksacillin', 'diclocil']],
      gruppe: 'antibiotikavalg', modul: 3,
      notat: 'Stafylokokkpenicillin — stabilt mot stafylokokkenes betalaktamase, som bryter ned ' +
             'vanlig penicillin.',
      kilde: 'Antibiotika i primærhelsetjenesten, Helsedirektoratet' },

    { sp: 'Hva er empirisk antibiotikaregime ved sepsis med ukjent fokus i norske sykehus?',
      svar: [['benzylpenicillin', 'penicillin g', 'benzylpenicillin iv'],
             ['gentamicin', 'aminoglykosid', 'tobramycin']],
      gruppe: 'antibiotikavalg', modul: 3,
      notat: 'Benzylpenicillin 3 g x 4 + gentamicin 5–7 mg/kg x 1. Baktericid, synergistisk og ' +
             'påfallende smalspektret sammenlignet med internasjonale regimer — mulig fordi ' +
             'norsk resistensnivå er lavt.',
      kilde: 'Antibiotika i sykehus, Helsedirektoratet' },

    { sp: 'Hvilken antibiotikagruppe brukes ved straksallergi mot penicillin ved luftveisinfeksjon?',
      svar: [['makrolid', 'erytromycin', 'makrolider']],
      gruppe: 'antibiotikavalg', modul: 3 },

    { sp: 'Hvilken del av bakterien angriper betalaktamantibiotika?',
      svar: [['celleveggen', 'celleveggsyntesen', 'peptidoglykansyntesen']],
      gruppe: 'antibiotikavalg', modul: 3 },

    { sp: 'Hvilken ribosomal subenhet hemmer makrolider?',
      svar: [['50S', '50 s', 'den store subenheten']],
      gruppe: 'antibiotikavalg', modul: 3,
      notat: 'Aminoglykosider og tetrasykliner treffer 30S. «Buy AT 30, CELL at 50.»' },

    { sp: 'Hvilket enzym hemmer kinoloner?',
      svar: [['DNA-gyrase', 'dna gyrase', 'topoisomerase ii', 'topoisomerase']],
      gruppe: 'antibiotikavalg', modul: 3 },

    { sp: 'Nevn de to bivirkningene som begrenser bruken av gentamicin.',
      svar: [['nefrotoksisitet', 'nyreskade', 'nyretoksisitet'],
             ['ototoksisitet', 'hørselsskade', 'horselsskade', 'orebetennelse i indre ore']],
      gruppe: 'antibiotikavalg', modul: 3,
      notat: 'Derfor måles serumkonsentrasjon, og derfor gis døgndosen som én daglig dose — ' +
             'toppkonsentrasjonen dreper, dalkonsentrasjonen forgifter.' },

    /* ---------------- vaksiner & smittevern ---------------- */
    { sp: 'Hvilken vaksine gis ved 15 måneder i barnevaksinasjonsprogrammet?',
      svar: [['MMR', 'meslinger kusma rubella', 'mmr-vaksine']],
      gruppe: 'vaksiner & smittevern', modul: 7,
      kilde: 'Barnevaksinasjonsprogrammet, FHI' },

    { sp: 'Hvilken vaksine gis i 7. klasse?',
      svar: [['HPV', 'hpv-vaksine', 'humant papillomavirus']],
      gruppe: 'vaksiner & smittevern', modul: 7,
      notat: 'To doser i samme skoleår, og siden 2018 til både jenter og gutter.',
      kilde: 'Barnevaksinasjonsprogrammet, FHI' },

    { sp: 'Hvilken vaksine i programmet gis som dråper i munnen?',
      svar: [['rotavirusvaksine', 'rotavirus', 'rotavirusvaksinen']],
      gruppe: 'vaksiner & smittevern', modul: 7,
      notat: 'Levende, oral vaksine som bare gis til de minste — den skal være fullført ' +
             'tidlig i første leveår.',
      kilde: 'Barnevaksinasjonsprogrammet, FHI' },

    { sp: 'Mot hvor mange sykdommer beskytter barnevaksinasjonsprogrammet?',
      svar: [['12', 'tolv']],
      gruppe: 'vaksiner & smittevern', modul: 7,
      kilde: 'Barnevaksinasjonsprogrammet, FHI' },

    { sp: 'Hvilken vaksine tilbys gravide i uke 24?',
      svar: [['kikhostevaksine', 'kikhoste', 'pertussisvaksine', 'pertussis']],
      gruppe: 'vaksiner & smittevern', modul: 6,
      notat: 'Innført i programmet i 2024. Mors antistoffer beskytter den nyfødte til barnet ' +
             'kan vaksineres selv ved 6 ukers alder.',
      kilde: 'Barnevaksinasjonsprogrammet, FHI' },

    { sp: 'Hvilken vaksine i programmet tilbys bare barn med foreldre fra land med høy tuberkuloseforekomst?',
      svar: [['BCG', 'bcg-vaksine']],
      gruppe: 'vaksiner & smittevern', modul: 7,
      kilde: 'Barnevaksinasjonsprogrammet, FHI' },

    { sp: 'Er MMR en levende eller en inaktivert vaksine?',
      svar: [['levende', 'levende svekket', 'levende attenuert']],
      gruppe: 'vaksiner & smittevern', modul: 7,
      notat: 'Derfor er den kontraindisert ved svangerskap og alvorlig immunsuppresjon.',
      kilde: 'Vaksinasjonsveilederen, FHI' },

    { sp: 'Hva heter det nasjonale meldingssystemet for smittsomme sykdommer?',
      svar: [['MSIS', 'meldingssystem for smittsomme sykdommer']],
      gruppe: 'vaksiner & smittevern', modul: 7 },
  ],
};
