import { title } from "process";

export interface Prayer {
  id: string;
  titlePortugues: string;
  titleLatim?: string;
  textPortugues: string;
  textLatim?: string;
}
//℣.  ℟.
export interface PrayerCategory {
  categoryId: string;
  categoryTitle: string;
  prayers: Prayer[];
}

export const prayerCategories: PrayerCategory[] = [
  {
    categoryId: "oracoes-principais",
    categoryTitle: "Orações Principais",
    prayers: [
      {
        id: "sinal-cruz",
        titlePortugues: "Sinal da Cruz",
        titleLatim: "Signum Crucis",
        textPortugues: `Em nome do Pai, e do Filho, e do Espírito Santo. Amém.`,
        textLatim: `In nómine Patris, et Fílii, et Spíritus Sancti. Amen.`,
      },
      {
        id: "per-signum",
        titlePortugues: "Pelo sinal da Santa Cruz",
        titleLatim: "Per signum crucis",
        textPortugues: `Pelo sinal da Santa Cruz, livrai-nos Deus, nosso Senhor, dos nossos inimigos.
Em nome do Pai e do Filho e do Espírito Santo.
Amém.`,
        textLatim: `Per signum crucis, de inimícis nostris líbera nos Deus noster.
In nómine Patris et Fílii et Spíritus Sancti.
Amen.`,
      },
      {
        id: "pai-nosso",
        titlePortugues: "Pai Nosso",
        titleLatim: "Pater Noster",
        textPortugues: `Pai nosso que estais nos céus, santificado seja o vosso nome, venha a nós o vosso reino, seja feita a vossa vontade assim na terra como no céu. O pão nosso de cada dia nos dai hoje, perdoai-nos as nossas ofensas assim como nós perdoamos a quem nos tem ofendido, e não nos deixeis cair em tentação, mas livrai-nos do mal. Amém.`,
        textLatim: `Pater noster, qui es in cælis, sanctificétur nomen tuum, advéniat regnum tuum, fiat volúntas tua, sicut in cælo et in terra. Panem nostrum cotidiánum da nobis hódie, et dimítte nobis débita nostra, sicut et nos dimíttimus debitóribus nostris, et ne nos indúcas in tentatiónem, sed líbera nos a malo. Amen.`,
      },
      {
        id: "ave-maria-principal",
        titlePortugues: "Ave Maria",
        titleLatim: "Ave María",
        textPortugues: `Ave Maria, cheia de graça, o Senhor é convosco, bendita sois vós entre as mulheres, e bendito é o fruto do vosso ventre, Jesus. Santa Maria, Mãe de Deus, rogai por nós, pecadores, agora e na hora de nossa morte. Amém.`,
        textLatim: `Ave María, grátia plena, Dóminus tecum, benedícta tu in muliéribus, et benedíctus fructus ventris tui, Iesus. Sancta María, Mater Dei, ora pro nobis peccatóribus, nunc et in hora mortis nostræ. Amen.`,
      },
      {
        id: "credo-apostolorum",
        titlePortugues: "Credo dos Apóstolos",
        titleLatim: "Symbolum Apostolorum",
        textPortugues: `Creio em Deus, Pai todo-poderoso, Criador do Céu e da Terra.
E em Jesus Cristo, seu único Filho, nosso Senhor que foi concebido pelo poder do Espírito Santo; nasceu da Virgem Maria; padeceu sob Pôncio Pilatos, foi crucificado, morto e sepultado; desceu à mansão dos mortos; ressuscitou ao terceiro dia; subiu aos Céus; está sentado à direita de Deus Pai todo-poderoso, de onde há de vir a julgar os vivos e os mortos.
Creio no Espírito Santo; na santa Igreja Católica; na comunhão dos Santos; na remissão dos pecados; na ressurreição da carne; e na vida eterna.
Amém.`,
        textLatim: `Credo in Deum Patrem omnipotentem, Creatorem caeli et terrae.
Et in Iesum Christum, Filium eius unicum, Dominum nostrum, qui conceptus est de Spiritu Sancto, natus ex Maria Virgine, passus sub Pontio Pilato, crucifixus, mortuus, et sepultus, descendit ad inferos, tertia die resurrexit a mortuis, ascendit ad caelos, sedet ad dexteram Dei Patris omnipotentis, inde venturus est iudicare vivos et mortuos.
Credo in Spiritum Sanctum, sanctam Ecclesiam catholicam, sanctorum communionem, remissionem peccatorum, carnis resurrectionem, vitam aeternam.
Amen.`,
      },
      {
        id: "credo-niceno",
        titlePortugues: "Credo Niceno-Constantinopolitano",
        titleLatim: "Credo Niceno-Constantinopolitanum",
        textPortugues: `Creio em um só Deus, Pai todo-poderoso, Criador do céu e da terra, de todas as coisas visíveis e invisíveis.
Creio em um só Senhor, Jesus Cristo, Filho Unigênito de Deus, nascido do Pai antes de todos os séculos. Deus de Deus, luz da luz, Deus verdadeiro de Deus verdadeiro, gerado, não criado, consubstancial ao Pai. Por Ele todas as coisas foram feitas.
E, por nós, homens, e para a nossa salvação, desceu dos céus: e se encarnou pelo Espírito Santo, no seio da Virgem Maria, e se fez homem. Também por nós foi crucificado sob Pôncio Pilatos; padeceu e foi sepultado. Ressuscitou ao terceiro dia, conforme as Escrituras; e subiu aos céus, onde está sentado à direita do Pai. E de novo há de vir em sua glória, para julgar os vivos e os mortos; e o seu reino não terá fim.
Creio no Espírito Santo, Senhor que dá a vida, e procede do Pai e do Filho; e com o Pai e o Filho é adorado e glorificado: Ele que falou pelos profetas.
Creio na Igreja una, santa, católica e apostólica. Professo um só batismo para remissão dos pecados. Espero a ressurreição dos mortos e a vida do mundo que há de vir.
Amém.`,
        textLatim: `Credo in unum Deum, Patrem omnipoténtem, Factórem caeli et terrae, visibílium ómnium et invisibílium.
Et in unum Dóminum, Iesum Christum, Fílium Dei Unigénitum, et ex Patre natum ante ómnia saecula.
Deum de Deo, lumen de lúmine, Deum verum de Deo vero, génitum, non factum, consubstantiálem Patri. Per quem ómnia facta sunt.
Qui propter nos hómines et propter nostram salútem descéndit de caelis: et incarnátus est de Spíritu Sancto, ex María Vírgine, et homo factus est.
Crucifíxus étiam pro nobis sub Póntio Piláto; passus et sepúltus est. Et resurréxit tértia die, secúndum Scriptúras; et ascéndit in caelum, sedet ad déxteram Patris. Et íterum ventúrus est cum glória, iudicáre vivos et mórtuos; cuius regni non erit finis.
Et in Spíritum Sanctum, Dóminum et vivificántem, qui ex Patre Filióque procédit; qui cum Patre et Fílio simul adorátur et conglorificátur; qui locútus est per prophétas.
Et unam, sanctam, cathólicam et apostólicam Ecclésiam.
Confíteor unum baptísma in remissiónem peccatórum.
Et expecto resurrectiónem mortuórum, et vitam ventúri saeculi.
Amen.`,
      },
      {
        id: "gloria-patri",
        titlePortugues: "Glória ao Pai",
        titleLatim: "Gloria Patri",
        textPortugues: `Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora e sempre, e pelos séculos dos séculos.
Amém.`,
        textLatim: `Glória Patri et Fílio et Spirítui Sancto, sicut erat in princípio, et nunc et semper, et in saecula saeculorum.
Amen.`,
      },
      {
        id: "anjo-da-guarda",
        titlePortugues: "Oração do Anjo da Guarda",
        titleLatim: "Angele Dei",
        textPortugues: `Santo Anjo do Senhor, meu zeloso guardador, se a ti me confiou a piedade divina, sempre me rege, guarda, governa, ilumina.
Amém.`,
        textLatim: `Angele Dei, qui custos es mei, me tibi commíssum pietáte supérna, illúmina, custódi, rege et gubérna.
Amen.`,
      },
      {
        id: "veni-sancte-spiritus",
        titlePortugues: "Vinde Espírito Santo",
        titleLatim: "Veni Sancte Spiritus",
        textPortugues: `Vinde Espírito Santo, enchei os corações dos vossos fiéis e acendei neles o fogo do vosso amor.
Enviai o Vosso Espírito e tudo será criado.
E renovareis a face da terra.

Oremos.
Ó Deus, que instruístes os corações dos vossos fiéis com a luz do Espírito Santo, fazei que apreciemos retamente todas as coisas segundo o mesmo Espírito e gozemos da sua consolação.
Por Cristo Senhor Nosso.
Amém.`,
        textLatim: `Veni Sancte Spíritus, reple tuórum corda fidélium, et tu amóris in eis ignem accénde.
Emítte Spíritum tuum et creabúntur.
Et renovábis faciem terrae.

Oremus.
Deus, qui corda fidélium Sancti Spíritus illustratióne docuisti, da nobis in eódem Spíritu recta sápere, et de eius semper consolatióne gaudére.
Per Christum Dóminum nostrum.
Amen.`,
      },
      {
        id: "sanctus",
        titlePortugues: "Santo",
        titleLatim: "Sanctus",
        textPortugues: `Santo, Santo, Santo, Senhor Deus do universo!
O Céu e a Terra proclamam a Vossa Glória.
Hosana nas alturas!
Bendito o que vem em nome do Senhor.
Hosana nas alturas!`,
        textLatim: `Sanctus, Sanctus, Sanctus, Dominus Deus Sabaoth!
Pleni sunt caeli et terra gloria Tua.
Hosanna in excelsis!
Benedictus, qui venit in Nomine Domini.
Hosanna in excelsis!`,
      },
      {
        id: "angelus",
        titlePortugues: "Ângelus",
        titleLatim: "Angelus",
        textPortugues: `V. O Anjo do Senhor anunciou a Maria. 
R. E ela concebeu do Espírito Santo.
Ave Maria... 
V. Eis aqui a serva do Senhor.
R. Faça-se em mim segundo a vossa palavra.
Ave Maria...
V.  E o Verbo se fez carne.
R. E habitou entre nós.
Ave Maria... 

Oremos.
Infundi, Senhor, em nossos corações a vossa graça, para que, conhecendo a anunciação do Anjo e a encarnação de Jesus Cristo, vosso Filho, cheguemos à glória da ressurreição.
Pelo mesmo Cristo Senhor Nosso.
Amém.`,
        textLatim: `V. Ángelus Dómini nuntiávit Mariae.
R. Et concépit de Spiritu Sancto.
Ave Maria...
V. Écce ancílla Dómini.
R. Fiat míhi secúndum verbum túum.
Ave Maria...
V. Et Verbum caro factum est.
R. Et habitávit in nobis.
Ave Maria...

Oremus.
Gratiam tuam, quaesumus, Dómine, méntibus nostris infúnde; ut qui, Angelo nuntiánte, Christi Fílii tui incarnatiónem cognóvimus, per passiónem eius et crucem ad resurrectiónis gloriam perducámur.
Per eúmdem Christum Dóminum nostrum.
Amen.`,
      },
      {
        id: "regina-caeli",
        titlePortugues: "Rainha do Céu",
        titleLatim: "Regina caeli",
        textPortugues: `Rainha do Céu, alegrai-vos, aleluia!
Porque Aquele que merecestes trazer em vosso ventre, aleluia!
Ressuscitou como disse, aleluia!
Rogai por nós a Deus, aleluia!

Alegrai-vos e exultai, ó Virgem Maria, aleluia!
Porque o Senhor ressuscitou verdadeiramente, aleluia!

Oremos.
Ó Deus, que Vos dignastes alegrar o mundo com a Ressurreição do vosso Filho, concedei-nos que, pela intercessão da Virgem Maria, alcancemos a glória da vida eterna.
Pelo mesmo Cristo Nosso Senhor.
Amém.`,
        textLatim: `Regína caeli, laetáre, allelúia!
Quia quem meruísti portáre, alleluia!
Resurréxit, sicut dixit, allelúia!
Ora pro nobis Deum, allelúia!

Gaude et laetáre, Virgo Maria, allelúia!
Quia surréxit Dóminus vere, allelúia!

Orémus.
Deus, qui per resurrectiónem Fílii tui, Dómini nostri Iesu Christi, mundum laetífícáre dignátus es, praesta, quaesumus, ut, per eius Genetrícem Vírginem Maríam, perpétuae capiámus gáudia vitae.
Per eúmdem Christum Dóminum nostrum.
Amen.`,
      },
    ],
  },

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //

  {
    categoryId: "oracoes-manha",
    categoryTitle: "Orações da Manhã",
    prayers: [
      {
        id: "atos-abandono",
        titlePortugues: "Atos de Abandono",
        titleLatim: "Actus Abandonationis",
        textPortugues:
          "Em vossas mãos, ó meu Deus, eu me entrego. Virai e revirai esta argila, como a vasilha que se modela nas mãos do oleiro. Dai-lhe forma e em seguida despedaçai-a, se assim quiserdes; ela vos pertence e nada tem a dizer. Basta-me que ela sirva a todos os vossos desígnios e que em nada resista a vosso divino beneplácito, para o qual eu fui criado. Pedi, ordenai: que quereis que eu faça? Que quereis que eu deixe de fazer? Exaltado ou rebaixado, perseguido, consolado ou aflito, utilizado em vossas obras ou sem para nada servir, a mim não resta senão dizer, a exemplo de vossa Mãe Santíssima: Seja feito segundo a vossa palavra. Concedei-me o amor por excelência, o amor da cruz, não das cruzes heroicas cujo esplendor poderia nutrir o amor-próprio, mas das cruzes ordinárias de todos os dias: no caminho, na contradição, no esquecimento, no fracasso, nos falsos julgamentos, nas contrariedades, na frieza ou no entusiasmo dos outros, na enfermidade do corpo, nas trevas do espírito, no silêncio e na secura do coração. Somente então sabereis que vos amo, embora às vezes nem eu mesmo o saiba ou sinta; e isto me basta.",
        textLatim:
          "In manus tuas, Deus meus, me trado. Verte et revolve hanc argillam sicut vas quod in manu figuli formatur. Da ei formam et postea confringe, si ita vis; tua est enim et nihil dicere potest. Sufficit mihi ut omnibus tuis consiliis inserviat nec ullo modo tuo divino beneplacito resistat, ad quod creatus sum. Iube, praecipe: quid vis ut faciam? Quid vis ut omittam? Exaltatus aut humiliatus, persecutus, consolatus aut afflictus, adhibitus in operibus tuis aut ad nihil utilis, nihil mihi restat nisi dicere, ad exemplum Sanctissimae Matris tuae: Fiat secundum verbum tuum. Concede mihi amorem excellentissimum, amorem crucis, non illarum crucium heroicorum quae amorem proprium alunt, sed crucium quotidianarum, quae in itinere vitae occurrunt: in contradictione, oblivione, defectu, falsis iudiciis, adversitatibus, frigiditate aut fervore aliorum, in infirmitate corporis, in tenebris spiritus, in silentio et ariditate cordis. Tunc tantum scies me te amare, etiamsi ego ipse id interdum nec sentiam nec intelligam; et hoc mihi sufficit.",
      },

      {
        id: "oferecimento-do-dia",
        titlePortugues: "Oferecimento do Dia",
        titleLatim: "Oblatio Diei",
        textPortugues:
          "Senhor Deus, Rei do céu e da terra, dirige, santifica, conduz e governa neste dia nossos corações e nossos corpos, nossos sentimentos, palavras e ações, a fim de que, submissos à tua lei e agindo conforme os teus preceitos, mereçamos, por teu auxílio, ser salvos e livres nesta vida e na eternidade. Ó Salvador do mundo, que vives e reinas pelos séculos dos séculos. Amém.",
        textLatim:
          "Dirigere et sanctificare, regere et gubernare dignare, Domine Deus, Rex caeli et terrae, hodie corda et corpora nostra, sensus, sermones et actus nostros in lege tua et in operibus mandatorum tuorum, ut hic et in aeternum, te auxiliante, salvi et liberi esse mereamur. Salvator mundi, qui vivis et regnas in saecula saeculorum. Amen.",
      },

      {
        id: "oracoes-manha-ao-vestir",
        titlePortugues: "Orações da Manhã – Ao vestir-se",
        titleLatim: "Oratio Matutina – Dum Vestitur",
        textPortugues:
          "Jesus, Salvador meu, ofereço-me e consagro-me inteiramente e para sempre a ti, e por ti ao Eterno Pai. Eu te ofereço meu corpo, minha alma, meu espírito, meu coração, minha vida, todos os meus pensamentos, palavras e ações, as respirações e as batidas do meu coração, meus olhares e o uso dos meus sentidos, tudo quanto sou e possuo. Consagro tudo à tua glória, para que tudo seja louvor, adoração e amor a ti, Salvador meu. Eu te suplico que socorras as angústias dos pobres e, assim como me socorres para vestir meu corpo, reveste também minha alma de ti mesmo, de teu amor e de todas as virtudes.",
        textLatim:
          "Iesu, Salvator meus, me ipsum tibi offero et consecro totum et in perpetuum, et per te Patri Aeterno. Offerro tibi corpus meum, animam meam, spiritum meum, cor meum, vitam meam, omnes cogitationes, verba et actiones meas, respirationes et pulsus cordis mei, oculos meos et usum omnium sensuum meorum, totum quod sum et possideo. Omnia gloriae tuae consecro, ut sint laus, adoratio et amor tibi, Salvator meus. Supplico ut pauperum angustias subleves et, sicut corpus meum vestis, ita animam meam te ipso, tuo amore omnibusque virtutibus induas.",
      },

      {
        id: "senhor-deus-todo-poderoso",
        titlePortugues: "Senhor Deus Todo-poderoso",
        titleLatim: "Domine Deus Omnipotens",
        textPortugues:
          "Senhor Deus Todo-poderoso, que nos fizestes chegar ao princípio deste dia, salvai-nos hoje por vosso poder, para que não nos deixemos arrastar a pecado algum neste dia, mas que nossas palavras, pensamentos e obras tendam sempre ao cumprimento da vossa justiça. Por Cristo, nosso Senhor. Amém.",
        textLatim:
          "Domine Deus omnipotens, qui ad principium huius diei nos pervenire fecisti, salva nos hodie tua virtute, ut in nullo peccato labamur, sed omnes cogitationes, verba et opera nostra ad implendam iustitiam tuam dirigantur. Per Christum Dominum nostrum. Amen.",
      },

      {
        id: "consagracao-diaria-nossa-senhora",
        titlePortugues: "Consagração Diária a Nossa Senhora",
        titleLatim: "Consecratio Quotidiana ad Beatam Virginem Mariam",
        textPortugues:
          "Ó minha Senhora e minha Mãe, eu me ofereço todo a vós e, em prova da minha devoção para convosco, vos consagro neste dia meus olhos, meus ouvidos, minha boca, meu coração e todo o meu ser. E porque assim sou vosso, ó incomparável Mãe, guardai-me e defendei-me como coisa e propriedade vossa. Amém.",
        textLatim:
          "O Domina mea et Mater mea, totus me tibi offero et, in testimonium devotionis meae erga te, tibi hodie consecro oculos meos, aures meas, os meum, cor meum atque totum meipsum. Quia igitur tuus sum, o incomparabilis Mater, conserva me et protege me ut rem et possessionem tuam. Amen.",
      },
    ],
  },
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  {
    categoryId: "oracoes-noite",
    categoryTitle: "Orações da Noite",
    prayers: [
      {
        id: "visitai-senhor",
        titlePortugues: "Visitai, Senhor",
        titleLatim: "Visita, quaesumus, Domine",
        textPortugues: `Visitai, Senhor, esta casa, e afastai as ciladas do inimigo; nela habitem vossos santos Anjos, para nos guardar na paz, e a vossa bênção fique sempre conosco. Por Cristo, nosso Senhor.
Amém.`,
        textLatim: `Visita, quaesumus, Domine, habitationem istam, et omnes insidias inimici ab ea longe repelle: Angeli tui sancti habitent in ea, qui nos in pace custodiant; et benedictio tua sit super nos semper.
Per Christum Dominum nostrum.
Amen.`,
      },
      {
        id: "tres-ave-marias",
        titlePortugues: "As Três Ave-Marias",
        titleLatim: "Tres Ave Maria",
        textPortugues: `Pelo poder que vos concedeu o Pai Eterno,
Ave Maria...
Pela sabedoria que vos concedeu o Filho,
Ave Maria...
Pelo amor que vos concedeu o Espírito Santo,
Ave Maria...
Por vossa Imaculada Conceição, ó Maria, purificai meu corpo e santificai minha alma.
Ó Maria, minha Mãe, livrai-me de cair em pecado mortal!`,
        textLatim: `Per virtutem quam dedit tibi Pater Aeternus,
Ave Maria...
Per sapientiam quam dedit tibi Filius,
Ave Maria...
Per caritatem quam dedit tibi Spiritus Sanctus,
Ave Maria...
Per tuam Immaculatam Conceptionem, o Maria, purifica corpus meum et sanctifica animam meam.
O Maria, Mater mea, libera me ne in peccatum mortale incidam!`,
      },
      {
        id: "reparacao",
        titlePortugues: "Reparação",
        titleLatim: "Reparatio",
        textPortugues: `Eterno Pai, ofereço-vos o Sagrado Coração de vosso Filho Jesus Cristo, com todo o seu amor, seus sofrimentos e seus méritos:
— para expiar todos os pecados que tenho cometido neste dia e durante toda a minha vida.
Glória ao Pai...
— para satisfazer toda negligência que cometi na prática do bem neste dia e durante toda a minha vida.
Glória ao Pai....
— para reparar as omissões do bem que deveria ter feito e não o fiz neste dia e durante toda a minha vida.
Glória ao Pai...`,
        textLatim: `Pater Aeterne, offero tibi Sacratissimum Cor Filii tui Iesu Christi, cum omni eius amore, doloribus et meritis:
— ad expianda omnia peccata quae hodie et tota vita mea commisi.
Gloria Patri...
— ad satisfaciendam omnem negligentiam quam in bono operando hodie et tota vita mea exhibui.
Gloria Patri...
— ad reparandas omissiones boni quod facere debui et non feci hodie et tota vita mea.
Gloria Patri...`,
      },
      {
        id: "exame-consciencia",
        titlePortugues: "Exame de Consciência Diário",
        titleLatim: "Examen Conscientiae Diurnum",
        textPortugues: `Em nome do Pai e do Filho e do Espírito Santo.

Meu Deus, iluminai-me para conhecer os pecados que hoje cometi, as suas causas e os meios de os evitar.

Ofereci a Deus o meu trabalho? 
Dei-lhe graças, aceitando com fé os sofrimentos e contrariedades? 
Recorri a Ele com confiança filial? 
Agi por respeito humano em alguma situação? 
Fiz minhas orações com atenção e devoção?

Tratei os outros com dureza, irritação ou desprezo? 
Fui invejoso ou egoísta? 
Pensei ou falei mal dos outros? 
Preocupei-me em ajudar os que me rodeiam, sendo generoso e fazendo-lhes a vida mais agradável? 
Aproveitei as oportunidades para aproximar alguém de Deus? 
Perdoei aos que me ofenderam? 
Pedi a Deus pelos outros?

Esforcei-me por melhorar hoje em alguma virtude, principalmente para vencer meu defeito dominante? 
Fui orgulhoso, vaidoso, preguiçoso? 
Deixei-me levar por sentimentos de sensualidade? 
Recorri a Deus para pedir sua graça e o aumento de todas as virtudes, especialmente da fé, da esperança e da caridade?`,
        textLatim: `In nomine Patris, et Filii, et Spiritus Sancti.

Deus meus, illumina me ad cognoscenda peccata quae hodie commisi, eorum causas et media ad vitandum.

Offeri Deo opus meum?
Dedi ei gratias, accipiens cum fide dolores et contrarietates?
Recurri ad Eum cum fiducia filiali?
Egi propter timorem humanum in aliqua occasione?
Feci meas preces cum attentione et devotione?

Tractavi alios cum duritia, irritatione vel contemptu?
Fui invidus vel egoisticus?
Cogitavi vel locutus sum male de aliis?
Sollicitus fui adiuvandi eos qui me circumdant, generosus existens et faciens eorum vitam suaviorem?
Usus sum occasionibus ad aliquem appropinquandum Deo?
Ignovi illis qui me offenderunt?
Rogavi Deum pro aliis?

Conatus sum hodie meliorari in aliqua virtute, praesertim ad vincendum meum defectum dominantem?
Fui superbus, vanus, piger?
Me permisi duci a sensibus sensualitatis?
Recurri ad Deum ad petendam eius gratiam et augmentum omnium virtutum, praesertim fidei, spei et caritatis?`,
      },
      {
        id: "ato-contricao-breve",
        titlePortugues: "Ato de Contrição Breve",
        titleLatim: "Actus Contritionis Brevis",
        textPortugues: `Meu Deus, eu me arrependo de todo o coração de vos ter ofendido, porque sois tão bom e amável. Prometo, com a vossa graça, nunca mais pecar.
  
  Meu Jesus, misericórdia!`,
        textLatim: `Deus meus, ex toto corde paenitet me omnium meorum peccatorum, eaque detestor, quia peccando, non solum poenas a Te iuste statutas promeritus sum, sed praesertim quia offendi Te, summum bonum, ac dignum qui super omnia diligaris. Ideo firmiter propono, adiuvante gratia Tua, de cetero me non peccaturum peccandique occasiones proximas fugiturum. Amen.
  
  Mi Iesu, misericordia!`,
      },
      {
        id: "jaculatorias",
        titlePortugues: "Jaculatórias",
        titleLatim: "Iaculatoriae",
        textPortugues: `Jesus, Maria e José, dou-vos o coração e a minha alma.
Jesus, Maria e José, assisti-me na última agonia.
Dignai-vos, Senhor, retribuir com a vida eterna a todos os que nos fazem bem por amor do vosso nome. Amém.`,
        textLatim: `Iesu, Maria et Ioseph, vobis cor et animam meam commendo.
Iesu, Maria et Ioseph, assistite mihi in agonia ultima.
Dignare, Domine, die isto sine peccato nos custodire. Miserere nostri, Domine, miserere nostri. Fiat misericordia tua, Domine, super nos, quemadmodum speravimus in te. In te, Domine, speravi: non confundar in aeternum.
Amen.`,
      },
      {
        id: "hino-completas",
        titlePortugues: "Hino das Completas",
        titleLatim: "Hymnus ad Completorium",
        textPortugues: `Agora que o clarão da luz se apaga,
a vós nós imploramos, Criador:
com vossa paternal misericórdia,
guardai-nos sob a luz do vosso amor.

Os nossos corações sonhem convosco:
no sono, possam eles vos sentir.
Cantemos novamente a vossa glória
ao brilho da manhã que vai surgir.

Saúde concedei-nos nesta vida,
as nossas energias renovai;
da noite a pavorosa escuridão
com vossa claridade iluminai.

Ó Pai, prestai ouvido às nossas preces,
ouvi-nos por Jesus, nosso Senhor,
que reina para sempre em vossa glória,
convosco e o Espírito de Amor.

Oremos:
O Senhor Todo-poderoso nos conceda uma noite tranquila e, no fim da vida, uma morte santa.
Amém.`,
        textLatim: `Te lucis ante terminum,
Rerum Creator, poscimus,
Ut pro tua clementia
Sis praesul et custodia.

Procul recedant somnia,
Et noctium phantasmata;
Hostemque nostrum comprime,
Ne polluantur corpora.

Praesta, Pater piissime,
Patrique compar Unice,
Cum Spiritu Paraclito
Regnans per omne saeculum.
Amen.

Oremus:
Visita, quaesumus, Domine, habitationem istam, et omnes insidias inimici ab ea longe repelle: Angeli tui sancti habitent in ea, qui nos in pace custodiant; et benedictio tua sit super nos semper.
Per Christum Dominum nostrum.
Amen.

Iube, Domne, benedicere:
Noctem quietam et finem perfectum concedat nobis Dominus omnipotens.
Amen.`,
      },
    ],
  },
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  {
    categoryId: "nossa-senhora",
    categoryTitle: "A Nossa Senhora",
    prayers: [
      {
        id: "alma-redemptoris-mater",
        titlePortugues: "Alma Redemptoris Mater",
        titleLatim: "Alma Redemptoris Mater",
        textPortugues: `Santa Mãe do Redentor, que és acesso e porta do céu, estrela do mar, socorre ao povo caído. Que quer se levantar do abismo da culpa. Tu que gerastes, ante a natureza maravilhada, vosso santo Criador. Virgem antes e depois, de receber aquele Ave da boca de Gabriel, tem misericórdia dos pecadores.

℣. O Anjo do Senhor anunciou a Maria.
℟. E ela concebeu do Espírito Santo.

Oremos.
Infundi, Senhor, em nossos corações a vossa graça, vo-lo suplicamos, a fim de que, conhecendo a anunciação do Anjo e a encarnação de Jesus Cristo, vosso Filho pelos merecimentos de sua paixão e morte cheguemos à glória da ressurreição.
Pelo mesmo Cristo Senhor Nosso. 
℟. Amém.

℣. O auxílio divino permaneça sempre conosco.
℟. Amém.`,
        textLatim: `Alma Redemptóris Mater, quae pérvia caeli, Porta manes, et Stella máris, succúrre cadénti. Súrgere qui curat populo. Tu quae genuísti, natúra mirante, tuum sanctum Genitorem. Virgo prius ac postérius, Gabriélis ab ore sumens illud Ave, peccatórum miserere.

℣. Ángelus Dómini nuntiávit Mariae.
℟. Et concépit de Spiritu Sancto.

Oremus.
Gratiam tuam, quaesumus, Dómine, méntibus nostris infúnde; ut qui, Angelo nuntiánte, Christi Fílii tui incarnatiónem cognóvimus, per passiónem eius et crucem ad resurrectiónis gloriam perducámur. 
Per eúmdem Christum Dóminum nostrum. 
℟. Amen.

℣. Divínum auxílium máneat semper nobíscum.
℟. Amen.`,
      },
      {
        id: "ave-regina-caelorum",
        titlePortugues: "Ave, Regina Caelorum",
        titleLatim: "Ave, Regina Caelorum",
        textPortugues: `Ave, Rainha do Céu, Ave, Senhora dos Anjos: Salve, raiz fecunda, salve, porta do céu, pela qual a luz nasceu para o mundo: Alegrai-vos, ó Virgem gloriosa, entre todas a mais bela. Salve, esplendor radioso, e rogai por nós a Cristo.

℣. Fazei-me digno de vos louvar, sagrada Virgem.
℟. Protegei-me e dai-me força contra os vossos inimigos.

Oremos.
Concedei, misericordioso Deus, um grande esforço à nossa fragilidade, para que nós, que celebramos a memória da santa Mãe de Deus; com o auxílio de sua intercessão, ressucitemos das nossas iniquidades.
Pelo mesmo Cristo Senhor Nosso. 
℟. Amém.

℣. O auxílio divino permaneça sempre connosco.
℟. Amém.`,
        textLatim: `Ave, Regina caelorum, Ave, Domina Angelorum: Salve, radix, salve, porta, ex qua mundo lux est orta: Gaude, Virgo gloriosa, super omnes speciosa. Vale, o valde decora, et pro nobis Christum exora.

℣. Dignare me laudare te, Virgo sacrata.
℟. Da mihi virtutem contra hostes tuos.

Oremus.
Concede, misericors Deus, fragilitati nostrae praesidium: ut, qui sanctae Dei Genitricis memoriam agimus; intercessionis eius auxilio, a nostris iniquitatibus resurgamus.
Per eundem Christum Dominum nostrum.
℟. Amen.

℣. Divínum auxílium máneat semper nobíscum.
℟. Amen.`,
      },
      {
        id: "salve-regina",
        titlePortugues: "Salve Rainha",
        titleLatim: "Salve Regina",
        textPortugues: `Salve, Rainha, Mãe de misericórdia, vida, doçura, esperança nossa, salve. 
A Vós bradamos, os degredados filhos de Eva. A Vós suspiramos, gemendo e chorando neste vale de lágrimas. 
Eia pois, advogada nossa, esses Vossos olhos misericordiosos a nós volvei. 
E depois deste desterro, mostrai-nos Jesus, bendito fruto do Vosso ventre. 
Ó clemente, ó piedosa, ó doce Virgem Maria. 

Ora pro nobis Sancta Dei Génetrix.
Ut digni efficiámur promissiónibus Christi.
Amen.`,
        textLatim: `Salve, Regina, Mater misericordiae, vita, dulcedo, et spes nostra, salve. 
Ad te clamamus, exsules filii Evae. Ad te suspiramus, gementes et flentes in hac lacrimarum valle. 
Eia ergo, advocata nostra, illos tuos misericordes oculos ad nos converte. 
Et Iesum benedictum fructum ventris tui, nobis, post hoc exsilium, ostende.
O clemens, o pia, o dulcis Virgo Maria.

Ora pro nobis Sancta Dei Génetrix.
Ut digni efficiámur promissiónibus Christi.
Amen.`,
      },
      {
        id: "sub-tuum-praesidium",
        titlePortugues: "Sub Tuum Praesidium",
        titleLatim: "Sub Tuum Praesidium",
        textPortugues: `À vossa proteção recorremos, Santa Mãe de Deus; não desprezeis as nossas súplicas em nossas necessidades; mas livrai-nos sempre de todos os perigos, ó Virgem gloriosa e bendita.
Amen.`,
        textLatim: `Sub tuum praesidium confugimus, sancta Dei Genetrix; nostras deprecationes ne despicias in necessitatibus nostris, sed a periculis cunctis libera nos semper, Virgo gloriosa et benedicta.
Amen.`,
      },
      {
        id: "ave-maris-stella",
        titlePortugues: "Ave Maris Stella",
        titleLatim: "Ave Maris Stella",
        textPortugues: `Ave, do mar Estrela
De Deus mãe bela,
Sempre virgem, da morada
Celeste Feliz entrada.

Ó tu que ouviste da boca
Do anjo a saudação;
Dá-nos a paz e quietação;
E o nome da Eva troca.

As prisões aos réus desata.
E a nós cegos alumia;
De tudo que nos maltrata
Nos livra, o bem nos granjeia.

Ostenta que és mãe, fazendo
Que os rogos do povo seu
Ouça aquele que, nascendo
Pos nós, quis ser filho teu.

Ó virgem especiosa,
Toda cheia de ternura,
Extintos nossos pecados
Dá-nos pureza e bravura,

Dá-nos uma vida pura,
Põe-nos em vida segura,
Para que a Jesus gozemos,
E sempre nos alegremos.

A Deus Pai veneremos:
A Jesus Cristo também:
E ao Espírito Santo; demos
Aos três um louvor: Amém.`,
        textLatim: `Ave, Maris Stella,
Dei mater alma,
Atque semper Virgo,
Felix caeli porta.

Sumens illud Ave,
Gabrielis ore,
Funda nos in pace
Mutans Evae nomen.

Solve vincla reis,
Profer lumen caecis,
Mala nostra pelle,
Bona cuncta posce.

Monstra te esse Matrem,
Sumat per te preces,
Qui pro nobis natus
Tulit esse tuus.

Virgo singularis,
Inter omnes mitis,
Nos, culpis solutos,
Mites fac et castos.

Vitam praesta puram,
Iter para tutum:
Ut, videntes Jesum,
Semper collaetemur.

Sit laus Deo Patri,
Summo Christo decus
Spiritui Sancto,
Tribus honor unus. Amen.`,
      },
      {
        id: "bendita-seja-pureza",
        titlePortugues: "Bendita Seja a Tua Pureza",
        titleLatim: "Benedicta Sit Puritas Tua",
        textPortugues: `Bendita seja a tua pureza e eternamente o seja, pois todo um Deus se recreia em tão graciosa beleza. 
A ti, celestial princesa, Virgem sagrada Maria, ofereço neste dia alma, vida e coração. 
Olha-me com compaixão; não me deixes, minha Mãe, morrer sem Confissão.`,
        textLatim: `Benedicta Virginis mundities in æternumque benedicta, summo cum sit Deo ipsi deliciæ. 
En, cæli regina, sacra Virgo Maria, vitam hodie tibi offero, meum animum et cor. 
Misericordiæ in me respice oculis, meque, Mater mea, ne patiare impænitentem obire.`,
      },
      {
        id: "memorare",
        titlePortugues: "Memorare",
        titleLatim: "Memorare",
        textPortugues: `Lembrai-vos, ó piíssima Virgem Maria, que nunca se ouviu dizer que algum dos que tem recorrido à vossa proteção, implorado a vossa assistência, e reclamado o vosso socorro, fosse por Vós desamparado.
Animado eu, pois, com igual confiança, a Vós, Virgem das virgens, como Mãe recorro, a ti eu venho, diante de ti como pecador me prostro.
Ó Mãe do Verbo Encarnado, não desprezeis as minhas súplicas, mas ouve-me propícia e responde-me.
Amém.`,
        textLatim: `Memorare, O piissima Virgo Maria, non esse auditum a saeculo, quemquam ad tua currentem praesidia, tua implorantem auxilia, tua petentem suffragia, esse derelictum.
Ego tali animatus confidentia, ad te, Virgo Virginum, Mater, curro, ad te venio, coram te gemens peccator assisto.
Noli, Mater Verbi, verba mea despicere; sed audi propitia et exaudi.
Amen.`,
      },
      {
        id: "o-jesus-em-maria",
        titlePortugues: "Ó Jesus que Viveis em Maria",
        titleLatim: "O Iesu qui in Maria habitas",
        textPortugues: `Ó Jesus que viveis em Maria,
vinde e vivei em vossos servos,
no espírito de vossa santidade,
na plenitude de vossa força,
na perfeição de vossos caminhos,
na verdade de vossas virtudes,
na comunhão de vossos mistérios;
dominai sobre toda a potestade inimiga,
em vosso espírito e para a glória do Pai.
Amém.`,
        textLatim: `O Iesu qui in Maria habitas, veni et habita in servis tuis, in spiritu sanctitatis tuae, in plenitudine virtutis tuae, in perfectione viarum tuarum, in veritate virtutum tuarum, in communione mysteriorum tuorum. Impera omni potestati inimica in spiritu tuo, ad gloriam Patris. Amen.`,
      },
      {
        id: "stabat-mater",
        titlePortugues: "Stabat Mater",
        titleLatim: "Stabat Mater",
        textPortugues: `Estava a Mãe dolorosa
Junto à cruz lacrimosa,
Onde pendia o Filho.
Cuja alma, gemendo,
Contristada e doendo,
Transpassada foi por gládio.
Oh! quão triste e aflita
Foi aquela bendita
Mãe do Unigênito.
Que soluçava e tremia,
E a ver se estremecia
Do Filho o suplício.
Qual homem não choraria
Se a Mãe de Cristo visse
Em tanto suplício?
Quem não se entristeceria
Contemplando a Mãe piedosa
Com tão duro martírio?
Pelos pecados da sua gente
Viu Jesus em tormentos
E açoites submetido.
Viu o seu doce Menino
Morrendo desolado
Até exalar o espírito.
Ó Mãe, fonte de amor,
Fazei-me sentir a dor
Para convosco chorar.
Fazei arder meu coração
No amor de Cristo Deus
Para a Ele agradar.
Santa Mãe, fazei isso:
As chagas do Crucificado
Em meu coração gravai.
Do vosso Filho, vulnerado,
Tão dignado padecer por mim,
As penas comigo partilhai.
Fazei que convosco chore
O Crucificado deplore
Enquanto eu viver.
Junto à cruz convosco estar
E de vontade me associar
Ao vosso pranto quero.
Virgem das virgens excelsa,
Não sejais para mim avessa,
Fazei-me convosco prantear.
Fazei que a morte de Cristo porte
Sua paixão compartilhe
E as chagas recorde.
Fazei-me pelas chagas ferir,
Pela cruz inebriar-me
Pelo amor do Filho.
Inflamado e aceso
Por vós, Virgem, seja defendido
No dia do juízo.
Fazei-me pela cruz guardado,
Pela morte de Cristo protegido,
Pela graça acalentado.
Quando o corpo morrer,
Fazei que à alma se dê
A glória do paraíso.
Amém.`,
        textLatim: `Stabat mater dolorosa
Iuxta crucem lacrimosa
Dum pendebat filius
Cuius animam gementem
Contristantam et dolentem
Pertransivit gladius
O quam tristis et afflicta
Fuit illa benedicta
Mater unigeniti
Quae maerebat et dolebat
Et tremebat, cum videbat
Nati poenas incliti
Quis est homo qui non fleret
Matrem christi si videret
In tanto supplicio?
Quis non posset contristari
Piam matrem contemplari
Dolentem cum filio?
Pro peccatis suae gentis
Iesum vidit in tormentis
Et flagellis subditum
Vidit suum dulcem natum
Morientem desolatum
Dum emisit spiritum
Eia mater fons amoris
Me sentire vim doloris
Fac ut tecum lugeam
Fac ut ardeat cor meum
In amando christum deum
Ut sibi complaceam
Sancta mater, istud agas
Crucifixi fige plagas
Cordi meo valide
Tui nati vulnerati
Tam dignati pro me pati
Poenas mecum divide!
Fac me vere tecum flere
Crucifixo condolere
Donec ego vixero
Iuxta crucem tecum stare
Te libenter sociare
In planctu desidero
Virgo virginum praeclara
Mihi iam non sis amara
Fac me tecum plangere
Fac ut portem christi mortem
Passionis eius sortem
Et plagas recolere
Fac me plagis vulnerari
Cruce hac inebriari
Ob amorem filii
Inflammatus et accensus
Per te virgo sim defensus
In die iudicii
Fac me cruce custodiri
Morte christi praemuniri
Confoveri gratia
Quando corpus morietur
Fac ut animae donetur
Paradisi gloria
Amen`,
      },
    ],
  },
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  {
    categoryId: "sao-jose",
    categoryTitle: "A São José",
    prayers: [
      {
        id: "a-vos-sao-jose",
        titlePortugues: "A vós, São José",
        titleLatim: "Ad te, beate Ioseph",
        textPortugues: `A vós, São José, recorremos em nossa tribulação e, depois de termos implorado o auxílio de vossa santíssima Esposa, cheios de confiança solicitamos também o vosso patrocínio. Por esse laço sagrado de caridade que vos uniu à Virgem imaculada, Mãe de Deus, e pelo amor paternal que tivestes ao Menino Jesus, ardentemente suplicamos que lanceis um olhar benigno para a herança que Jesus Cristo conquistou com seu sangue e nos socorrais em nossas necessidades com o vosso auxílio e poder. 

Protegei, ó guarda providente da divina Família, a raça eleita de Jesus Cristo. Afastai para longe de nós, ó pai amantíssimo, a peste do erro e do vício. Assisti-nos do alto do céu, ó nosso fortíssimo sustentáculo, na luta contra o poder das trevas, e assim como outrora salvastes da morte a vida ameaçada do Menino Jesus, assim também defendei agora a santa Igreja de Deus das ciladas de seus inimigos e de toda adversidade. 

Amparai a cada um de nós com o vosso constante patrocínio, a fim de que, pelo vosso exemplo e sustentados com o vosso auxílio, possamos viver virtuosamente, morrer piedosamente e obter no céu a eterna bem-aventurança. Amém.`,
        textLatim: `Ad te, beate Ioseph, in tribulatione nostra confugimus atque, implorato Sponsae tuae sanctissimae auxilio, patrocinium quoque tuum fidenter exposcimus. 

Per eam, quaesumus, quae te cum immaculata Virgine Dei Genetrice coniunxit, caritatem perque paternum, quo puerum Iesum amplexus es, amorem, supplices deprecamur, ut ad hereditatem quam Iesus Christus acquisivit sanguine suo benignus respicias ac necessitatibus nostris tua virtute et ope succurras. 

Tuere, o custos providentissime divinae Familiae, Iesu Christi sobolem electam; prohibe a nobis, amantissime pater, omnem errorum ac corruptelarum luem; propitius nobis, sospitator noster fortissime, in hoc cum potestate tenebrarum certamine e caelo adesto; et sicut olim puerum Iesum e summo eripuisti vitae discrimine, ita nunc Ecclesiam sanctam Dei ab hostilibus insidiis atque ab omni adversitate defende, nosque singulos perpetuo tege patrocinio, ut, ad tui exemplar et ope tua suffulti, sancte vivere, pie emori, sempiternamque in caelis beatitudinem assequi possimus. Amen.`,
      },
      {
        id: "caelitum-ioseph",
        titlePortugues: "Caelitum, Ioseph (Hino das Laudes)",
        titleLatim: "Caelitum, Ioseph",
        textPortugues: `Ó José, glória dos céus e certa esperança de nossa vida, coluna do mundo, acolhei benigno os louvores que alegres cantamos.

A ti, nascido de Davi, o Criador constituiu esposo da Virgem, quis que fosses chamado pai do Verbo e te deu ser ministro da salvação.

Tu vês com alegria o Redentor deitado na manjedoura, aquele que o coro dos profetas cantou que viria, e primeiro, unido à Mãe, o adoras.

O Rei Deus dos reis, dominador do mundo, a cujo aceno treme a multidão dos infernos, a quem o céu serve submisso, se submete a ti.

Glória seja à excelsa Trindade perene, que te concedendo insígne honra, nos dê por teus méritos os gozos da vida bem-aventurada. Amém.`,
        textLatim: `Caelitum, Ioseph, decus atque nostrae
certa spes vitae columenque mundi,
quas tibi laeti canimus, benignus
suscipe laudes.

Te, satum David, statuit Creator
Virginis sponsum, voluitque Verbi
te patrem dici, dedit et ministrum
esse salutis.

Tu Redemptorem stabulo iacentem,
quem chorus vatum cecinit futurum,
aspicis gaudens, sociusque matris
primus adoras.

Rex Deus regum, dominator orbis,
cuius ad nutum tremit inferorum
turba, cui pronus famulatur aether,
se tibi subdit.

Laus sit excelsae Triadi perennis,
quae tibi insignes tribuens honores,
det tuis nobis meritis beatae
gaudia vitae. Amen.`,
      },
      {
        id: "sao-jose-ceu-gloria",
        titlePortugues: "São José, do céu a glória",
        titleLatim: "Sancte Ioseph, caelorum gloria",
        textPortugues: `São José, do céu a glória,
esperança verdadeira
que reluz na nossa vida,
proteção de todo o mundo,
ouve os cantos e louvores
da Igreja agradecida.

A ti, filho de Davi,
como esposo de Maria
escolheu o Criador.
Quis que fosses pai do Verbo
e da nossa salvação
diligente servidor.

Reclinado no presépio,
o Esperado dos profetas,
Redentor do mundo inteiro,
tu contemplas, venturoso,
e, unido à Virgem Mãe,
o adoras por primeiro.

O Senhor e Deus do mundo,
Rei dos reis, a cujo aceno
se ajoelha o céu fulgente
e os infernos estremecem,
revestindo a nossa carne,
fez-se a ti obediente.

Glória eterna à Divindade,
Unidade na Trindade,
Deus imenso, Sumo Bem,
que te deu tão grande graça.
Por ti, dê-nos sua vida
e alegria eterna. Amém.`,
        textLatim: `Sancte Ioseph, caelorum gloria,
vera spes nostrae, certa salus vitae,
mundi columen, tuis fidelibus
semper adesto.

David stirpe natus, te Creator
Virginis sponsum voluit Mariae,
Verbi pater diceris, et ministro
salutis huius.

Redemptorem stabulo iacentem,
quem prophetae cecinere olim,
tu, beate, cernis, et cum Virgine
primus adoras.

Rex regnorum, Dominusque mundi,
cuius nutu tremit inferorum
turba, caeli famulantur omnes,
tibi subditur.

Laus excelsae Triadi perennis,
quae tibi tantos tribuit honores,
det, ut meritis, tua nos beatae
gaudia vitae. Amen.`,
      },
      {
        id: "o-glorioso-sao-jose",
        titlePortugues: "Ó glorioso São José",
        titleLatim: "O gloriosissime Ioseph",
        textPortugues: `Ó glorioso São José, a quem foi dado o poder de tornar possível as coisas humanamente impossíveis, vinde em nosso auxílio nas dificuldades em que nos achamos.
Tomai sob vossa proteção a causa importante que vos confiamos, para que tenha uma solução favorável.

Ó Pai muito amado, em vós depositamos toda a nossa confiança. Que ninguém possa jamais dizer que vos invocamos em vão. Já que tudo podeis junto a Jesus e Maria, mostrai-nos que vossa bondade é igual ao vosso poder.

São José, a quem Deus confiou o cuidado da mais santa família que jamais houve, sede, nós vos pedimos, o pai e protetor da nossa, e impetrai-nos a graça de vivermos e morrermos no amor de Jesus e Maria.

São José, rogai por nós que recorremos a vós.`,
        textLatim: `O gloriosissime Ioseph, cui datum est potestatem faciendi possibilia quae humano modo impossibilia videntur, veni in auxilium nostrum in difficultatibus quibus detinemur.
Accipe sub tuam protectionem causam gravem quam tibi committimus, ut habeat exitum felicem.

O Pater amantissime, in te omnem fiduciam nostram ponimus. Nemo unquam dicere possit quod te invocavimus in vanum. Cum omnia possis apud Iesum et Mariam, ostende nobis quod tua bonitas aequalis est tuae potentiae.

Sancte Ioseph, cui Deus commisit curam sanctissimae Familiae quae unquam fuit, esto, quaesumus, pater et protector familiae nostrae, et impetra nobis gratiam vivendi et moriendi in amore Iesu et Mariae.

Sancte Ioseph, ora pro nobis qui ad te confugimus.`,
      },
      {
        id: "oracao-sao-jose-sao-pio-x",
        titlePortugues: "Oração a São José - São Pio X",
        titleLatim: "Oratio ad Sanctum Ioseph - Sanctus Pius X",
        textPortugues: `Glorioso São José, modelo de todos os que se dedicam ao trabalho, obtende-me a graça de trabalhar com espírito de penitência para expiação de meus numerosos pecados;

De trabalhar com consciência, pondo o culto do dever acima de minhas inclinações;

De trabalhar com recolhimento e alegria, olhando como uma honra empregar e desenvolver pelo trabalho os dons recebidos de Deus;

De trabalhar com ordem, paz, moderação e paciência, sem nunca recuar perante o cansaço e as dificuldades;

De trabalhar, sobretudo com pureza de intenção e com desapego de mim mesmo, tendo sempre diante dos olhos a morte e a conta que deverei dar do tempo perdido, dos talentos inutilizados, do bem omitido e da vã complacência nos sucessos, tão funesta à obra de Deus!

Tudo por Jesus, tudo por Maria, tudo à vossa imitação, oh! Patriarca São José! Tal será a minha divisa na vida e na morte. Amém.`,
        textLatim: `Gloriose Sancte Ioseph, exemplar omnium qui labori se dedunt, impetra mihi gratiam laborandi cum spiritu poenitentiae ad expianda mea multa peccata;

Laborandi cum conscientia, ponendo cultum officii supra meas inclinationes;

Laborandi cum recollectione et gaudio, considerans ut honorem adhibere et evolvere per laborem dona a Deo accepta;

Laborandi cum ordine, pace, moderatione et patientia, nunquam cedendo ante lassitudinem et difficultates;

Laborandi, praesertim cum puritate intentionis et cum detachment a meipso, semper habens ante oculos mortem et rationem quam reddere debeo de tempore perdito, de talentis inutilibus, de bono omisso et de vana complacentia in successibus, tam funesta operi Dei!

Omnia pro Iesu, omnia pro Maria, omnia ad imitationem tuam, o Patriarcha Sancte Ioseph! Hoc erit meum signum in vita et in morte. Amen.`,
      },
      {
        id: "piedosas-suplicas",
        titlePortugues: "Piedosas Súplicas",
        titleLatim: "Piae Preces",
        textPortugues: `São José, rogai a Jesus que desça na minha alma e a santifique.
São José, rogai a Jesus que desça no meu coração e o inflame de caridade.
São José, rogai a Jesus que desça na minha inteligência e a ilumine.
São José, rogai a Jesus que desça na minha vontade e a fortifique.
São José, rogai a Jesus que desça nos meus pensamentos e os purifique.
São José, rogai a Jesus que desça nos meus afetos e os regre.
São José, rogai a Jesus que desça nos meus desejos e os dirija.
São José, rogai a Jesus que desça nas minhas obras e as abençoe.
São José, alcançai-me de Jesus o seu santo amor.
São José, alcançai-me de Jesus a imitação das vossas virtudes.
São José, alcançai-me de Jesus a verdadeira humildade de espírito.
São José, alcançai-me de Jesus a mansidão do coração.
São José, alcançai-me de Jesus a paz de alma.
São José, alcançai-me de Jesus o santo temor de Deus.
São José, alcançai-me de Jesus o desejo da perfeição.
São José, alcançai-me de Jesus a doçura de caráter.
São José, alcançai-me de Jesus um coração puro e caridoso.
São José, alcançai-me de Jesus o amor ao padecimento.
São José, alcançai-me de Jesus a sabedoria das verdades eternas.
São José, alcançai-me de Jesus a perseverança em fazer o bem.
São José, alcançai-me de Jesus a fortaleza para suportar as cruzes.
São José, alcançai-me de Jesus o desprendimento dos bens terrenos.
São José, alcançai-me de Jesus que eu ande pelo caminho estreito do Céu.
São José, alcançai-me de Jesus que eu fique livre de toda a ocasião de pecar.
São José, alcançai-me de Jesus um santo desejo do Paraíso.
São José, alcançai-me de Jesus a perseverança final.

São José, não vos afasteis de mim.
São José, fazei que o meu coração nunca cesse de vos amar e minha língua de vos louvar.
São José, pelo amor que tivestes a Jesus, ajudai-me a amá-lo.
São José, dignai-vos a acolher-me como vosso devoto.
São José, eu me entrego a vós: aceitai-me e socorrei-me.
São José, não me abandoneis na hora da morte.

Jesus, José e Maria, eu vos dou o meu coração e a minha alma.

Glória ao Pai… (3 vezes)

Para alcançar uma morte feliz.
— Ó São José, que nos suavíssimos braços de Jesus, vosso protegido, e de vossa santíssima esposa, Maria, migrastes desta vida, socorrei-me, ó santo pai, com Jesus e Maria, sobretudo quando a morte vier pôr fim à minha vida; e alcançai-me (é a única coisa que vos peço) o consolo de expirar nos mesmos braços santíssimos de Jesus e de Maria. 

Em vossas mãos, na vida e na morte, entrego o meu espírito, Jesus, Maria e José. Amém.`,
        textLatim: `Sancte Ioseph, ora ut Iesus descendat in animam meam et eam sanctificet.
Sancte Ioseph, ora ut Iesus descendat in cor meum et illud caritate inflammet.
Sancte Ioseph, ora ut Iesus descendat in intellectum meum et illum illuminet.
Sancte Ioseph, ora ut Iesus descendat in voluntatem meam et eam confortet.
Sancte Ioseph, ora ut Iesus descendat in cogitationes meas et eas purificet.
Sancte Ioseph, ora ut Iesus descendat in affectus meos et eos regat.
Sancte Ioseph, ora ut Iesus descendat in desideria mea et ea dirigat.
Sancte Ioseph, ora ut Iesus descendat in opera mea et ea benedicat.
Sancte Ioseph, impetra mihi a Iesu sanctum eius amorem.
Sancte Ioseph, impetra mihi a Iesu imitationem virtutum tuarum.
Sancte Ioseph, impetra mihi a Iesu veram humilitatem spiritus.
Sancte Ioseph, impetra mihi a Iesu mansuetudinem cordis.
Sancte Ioseph, impetra mihi a Iesu pacem animae.
Sancte Ioseph, impetra mihi a Iesu sanctum Dei timorem.
Sancte Ioseph, impetra mihi a Iesu desiderium perfectionis.
Sancte Ioseph, impetra mihi a Iesu suavitatem characteris.
Sancte Ioseph, impetra mihi a Iesu cor purum et caritativum.
Sancte Ioseph, impetra mihi a Iesu amorem patiendi.
Sancte Ioseph, impetra mihi a Iesu sapientiam veritatum aeternarum.
Sancte Ioseph, impetra mihi a Iesu perseverantiam in bono faciendo.
Sancte Ioseph, impetra mihi a Iesu fortitudinem ad cruces sustinendas.
Sancte Ioseph, impetra mihi a Iesu detachment a bonis terrenis.
Sancte Ioseph, impetra mihi a Iesu ut ambulem per viam angustam caeli.
Sancte Ioseph, impetra mihi a Iesu ut liberer ab omni occasione peccandi.
Sancte Ioseph, impetra mihi a Iesu sanctum Paradisi desiderium.
Sancte Ioseph, impetra mihi a Iesu finalem perseverantiam.

Sancte Ioseph, noli recedere a me.
Sancte Ioseph, fac ut cor meum nunquam desinat te amare et lingua mea te laudare.
Sancte Ioseph, per amorem quem habuisti erga Iesum, adiuva me ut eum amem.
Sancte Ioseph, dignare me accipere ut devotum tuum.
Sancte Ioseph, me tibi commendo: accipe me et succurre mihi.
Sancte Ioseph, noli me derelinquere in hora mortis.

Iesu, Ioseph et Maria, vobis cor et animam meam commendo.

Gloria Patri... (ter)

Ad obtinendam felicem mortem.
— O Sancte Ioseph, qui in suavissimis brachiis Iesu, protegi tui, et sanctissimae sponsae tuae, Mariae, ex hac vita migrasti, succurre mihi, o sancte Pater, cum Iesu et Maria, praesertim quando mors vitam meam finiturus venerit; et impetra mihi (hoc unum a te peto) consolationem exspirandi in iisdem sanctissimis brachiis Iesu et Mariae.

In manus tuas, in vita et in morte, commendo spiritum meum, Iesu, Maria et Ioseph. Amen.`,
      },
      {
        id: "te-ioseph-celebrent",
        titlePortugues: "Te, Joseph, célebrent",
        titleLatim: "Te, Ioseph, célebrent",
        textPortugues: `Te, ó José, celebrem as hostes celestiais,
Te, todos os coros cristãos ressoem,
Que, ilustre pelos méritos, unido estás
À Virgem ilustre por casta aliança.

Vendo tua Esposa inchada do germe vital,
Admirando, és tocado por ansiedade dubitativa;
O anjo do sopro do Espírito superior
Ensinou que o Menino foi concebido.

Tu apertas o Senhor nascido, segues
Para as regiões estrangeiras do Egito fugindo;
Perdido em Jerusalém, procuras e achas,
Misturando alegrias com lágrimas.

Aos outros escolhidos, piedosa morte os consagra,
E a glória acolhe os que se tornaram dignos;
Tu, vivendo, igual aos Superiores, gozas de Deus,
Por sorte admirável mais feliz.

A nós, ó Trindade summa, perdoai suplicantes;
Dai pelos méritos de José escalar os astros,
Para que nos seja permitido finalmente
Entoar sempre o agradável canto. Amém.`,
        textLatim: `Te, Ioseph, célebrent ágmina caelitum,
te cuncti résonent christíanum chori,
qui, clarus méritis, iunctus es ínclitae
casto foedére Vírgini.

Almo cum túmidam gérmine cóniugem
admírans, dúbio tángeris ánxius,
afflátu súperi Fláminis ángelus
concéptum púerum docet.

Tu natum Dóminum stringis, ad éxteras
Aegýpti prófugum tu séqueris plagas;
amíssum Sólymis quaeris et ínvenis,
miscens gáudia flétibus.

Eléctos réliquos mors pia cónsecrat
palmámque eméritos glória súscipit;
tu vivens, Súperis par, frúeris Deo,
mira sorte beátior.

Nobis, summa Trias, parce precántibus;
da Ioseph méritis sídera scándere,
ut tandem líceat nos tibi pérpetim
gratum prómere cánticum. Amen.`,
      },
      {
        id: "celebre-jose-corte-celeste",
        titlePortugues: "Celebre a José a corte celeste",
        titleLatim: "Celebrant Ioseph agmina caelitum",
        textPortugues: `Celebre a José a corte celeste,
prossiga o louvor o povo cristão:
Só ele merece à Virgem se unir
em casta união.

Ao ver sua Esposa em Mãe transformar-se,
José quer deixar Maria em segredo.
Um anjo aparece: "É obra de Deus!"
Afasta-lhe o medo.

Nascido o Senhor, nos braços o estreitas.
A ti tem por guia, a Herodes fugindo.
Perdido no templo, és tu que o encontras,
chorando e sorrindo.

Convívio divino a outros, somente
após dura morte é dado gozar.
Mas tu, já em vida, abraças a Deus,
e o tens no teu lar!

Ó dai-nos, Trindade, o que hoje pedimos:
Um dia no céu, cantarmos também
o canto que canta o esposo da Virgem
sem mácula. Amém.`,
        textLatim: `Celebrant Ioseph agmina caelitum,
resonat christianus cunctis in choris:
qui, meritis clarus, iunctus es inclitae
Virgini casto foedere.

Cum vides coniugem tumidam germine,
mirans, anxius dubio tangeris;
angelus Spiritus afflatu docet
conceptum puerum caelitus.

Natum Dominum stringis, et profugum
Aegypti sequeris plagas externas;
amissum quaeris Solymis, invenis,
miscens gaudia fletibus.

Electis aliis mors pia consecrat,
et palma emeritos gloria suscipit;
tu vivens, Superis par, frueris Deo,
sorte mirabili beatus.

O summa Trinitas, parce precantibus;
da Ioseph meritis sidera scandere,
ut tandem liceat nos tibi perpetim
gratum promere canticum. Amen.`,
      },
    ],
  },
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  {
    categoryId: "antes-e-depois-da-missa",
    categoryTitle: "orações para antes e depois da Santa Missa",
    prayers: [
      {
        id: "formula-intencao-missa",
        titlePortugues: "Fórmula de intenção para a missa",
        titleLatim: "Formula intentionis pro Missa",
        textPortugues: `Quero celebrar a Missa e consagrar o Corpo e Sangue de nosso Senhor Jesus Cristo, conforme o rito da santa Igreja Romana, em louvor do Deus todo-poderoso e de toda a Igreja triunfante, para meu próprio bem e de toda a Igreja militante, por todos os que se recomendaram às minhas orações, de modo geral e em particular, e pela felicidade da santa Igreja Católica. Amém.

Que Deus todo-poderoso e cheio de misericórdia nos conceda alegria e paz, conversão de vida, tempo para a verdadeira penitência, a graça e a força do Espírito Santo e perseverança nas boas obras. Amém.`,
        textLatim: `Volo celebrare Missam et consecrare Corpus et Sanguinem Domini nostri Iesu Christi, iuxta ritum sanctae Ecclesiae Romanae, in laudem Dei omnipotentis et totius Ecclesiae triumphantis, pro me ipso et pro tota Ecclesia militante, pro omnibus qui se meis orationibus commendaverunt, tam generaliter quam particulariter, et pro felicitate sanctae Catholicae Ecclesiae. Amen.

Deus omnipotens et plenus misericordiae concedat nobis gaudium et pacem, conversionem vitae, tempus verae poenitentiae, gratiam et virtutem Spiritus Sancti et perseverantiam in bonis operibus. Amen.`,
      },
      {
        id: "oracao-nossa-senhora-sacerdote",
        titlePortugues: "Oração a Nossa Senhora (para sacerdotes)",
        titleLatim: "Oratio ad Beatam Virginem Mariam (pro sacerdotibus)",
        textPortugues: `Ó Mãe de bondade e misericórdia, Santa Virgem Maria, eu, pobre e indigno pecador, a vós recorro com todo o afeto do meu coração, implorando a vossa piedade. Assim como estivestes de pé junto à cruz do vosso Filho, também vos digneis a assistir-me, não só a mim, pobre pecador, como a todos os sacerdotes que hoje celebram a Eucaristia em toda a santa Igreja. Auxiliados por vós, possamos oferecer ao Deus uno e trino a vítima do seu agrado. Amém.`,
        textLatim: `O Mater bonitatis et misericordiae, sancta Virgo Maria, ego, pauper et indignus peccator, ad te confugio cum toto cordis mei affectu, implorans tuam pietatem. Sicut stetisti iuxta crucem Filii tui, ita digneris mihi adesse, non solum mihi, pauperi peccatori, sed omnibus sacerdotibus qui hodie Eucharistiam celebrant in tota sancta Ecclesia. Adiuti a te, possimus offerre Deo uni et trino hostiam suae beneplacitationis. Amen.`,
      },
      {
        id: "oracao-santo-ambrosio",
        titlePortugues: "Oração de Santo Ambrósio",
        titleLatim: "Oratio Sancti Ambrosii",
        textPortugues: `Senhor Jesus Cristo, eu, pecador, não presumindo de meus próprios méritos, mas confiando em vossa bondade e misericórdia, temo entretanto e hesito em aproximar-me da mesa de vosso doce convívio. Pois meu corpo e meu coração estão manchados por muitas faltas, e não guardei com cuidado meu espírito e minha língua. 

Por isso, ó bondade divina e temível majestade, em minha miséria recorro a vós, fonte de misericórdia; corro para junto de vós a fim de ser curado, refugio-me em vossa proteção e anseio ter como Salvador aquele que não posso suportar como juiz. Senhor, eu vos mostro minhas chagas, e vos revelo a minha vergonha. 

Sei que meus pecados são muitos e grandes e temo por causa deles, mas espero em vossa infinita misericórdia. Olhai-me pois com os vossos olhos misericordiosos, Senhor Jesus Cristo, Rei eterno, Deus e homem, crucificado por causa do homem. Escutai-me, pois espero em vós; tende piedade de mim, cheio de misérias e pecados, vós que jamais deixareis de ser para nós a fonte da compaixão.

Salve, vítima salvadora, oferecida no patíbulo da Cruz por mim e por todos os homens. Salve, nobre e precioso Sangue, que brotas das chagas de meu Senhor Jesus Cristo crucificado e lavas os pecados do mundo inteiro. 

Lembrai-vos, Senhor, da vossa criatura resgatada por vosso Sangue. Arrependo-me de ter pecado, desejo reparar o que fiz. Livrai-me, ó Pai clementíssimo, de todas as minhas iniquidades e pecados, para que inteiramente purificado mereça participar dos Santos Mistérios. 

E concedei que o vosso Corpo e o vosso Sangue, que eu embora indigno me preparo para receber, sejam perdão para os meus pecados e completa purificação de minhas faltas. Que eles afastem de mim os pensamentos maus e despertem os bons sentimentos; tornem eficazes as obras que vos agradam, e protejam meu corpo e minha alma contra as ciladas de meus inimigos. Amém.`,
        textLatim: `Domine Iesu Christe, ego peccator, non praesumens de meis meritis, sed confidens in tua bonitate et misericordia, timeo tamen et haesito accedere ad mensam dulcis convivii tui. Nam corpus meum et cor maculata sunt multis vitiis, et non custodivi cum diligentia spiritum et linguam meam.

Ideo, o divina bonitas et tremenda maiestas, in mea miseria confugio ad te, fontem misericordiae; curro ad te ut saner, refugio in protectionem tuam, et desidero habere Salvatorem quem non possum sustinere ut iudicem. Domine, ostendo tibi vulnera mea, et revelo pudorem meum.

Scio peccata mea multa esse et magna et timeo propter ea, sed spero in misericordia tua infinita. Respice ergo in me oculis misericordiae tuae, Domine Iesu Christe, Rex aeterne, Deus et homo, pro homine crucifixus. Exaudi me, quia spero in te; miserere mei, pleni miseriis et peccatis, tu qui numquam cessabis esse nobis fons compassionis.

Ave, victima salvifica, oblata in patibulo Crucis pro me et pro omnibus hominibus. Ave, sanguis nobilis et pretiose, qui manas ex vulneribus Domini mei Iesu Christi crucifixi et lavas peccata totius mundi.

Memento, Domine, creaturae tuae redemptae per Sanguinem tuum. Paenitet me peccasse, cupio emendare quod feci. Libera me, o Pater clementissime, ab omnibus iniquitatibus et peccatis meis, ut perfecte purgatus mercar participare Sancta Mysteria.

Et concede ut Corpus et Sanguis tuus, quae ego licet indignus me accipere paro, sint remissio peccatorum meorum et plena purgatio culpae meae. Quae mala cogitata a me removeant et bona excitent; efficacia reddant opera quae tibi placent, et corpus meum animamque meam protegent ab insidiis inimicorum meorum. Amen.`,
      },
      {
        id: "oracao-santo-tomas-comunhao",
        titlePortugues: "Oração de Santo Tomás de Aquino (antes da Comunhão)",
        titleLatim: "Oratio Sancti Thomae Aquinatis (ante Communionem)",
        textPortugues: `Ó Deus eterno e todo-poderoso, eis que me aproximo do sacramento do vosso Filho único, nosso Senhor Jesus Cristo. Impuro, venho à fonte da misericórdia; cego, à luz da eterna claridade; pobre e indigente, ao Senhor do céu e da terra. 

Imploro pois a abundância de vossa imensa liberalidade para que vos digneis curar minha fraqueza, lavar minhas manchas, iluminar minha cegueira, enriquecer minha pobreza, e vestir minha nudez. 

Que eu receba o pão dos Anjos, o Rei dos reis e o Senhor dos senhores, com o respeito e a humildade, com a contrição e a devoção, a pureza e a fé, o propósito e a intenção que convêm à salvação de minha alma. 

Dai-me receber não só o sacramento do Corpo e do Sangue do Senhor, mas também seu efeito e sua força. Ó Deus de mansidão, dai-me acolher com tais disposições o Corpo que vosso Filho único, nosso Senhor Jesus Cristo, recebeu da Virgem Maria, que seja incorporado a seu corpo místico e contado entre seus membros. 

Ó Pai cheio de amor, fazei que, recebendo agora o vosso Filho sob o véu do sacramento, possa na eternidade contemplá-lo face a face. Ele, que convosco vive e reina para sempre. Amém.`,
        textLatim: `Deus aeterne et omnipotens, ecce accedo ad sacramentum unici Filii tui, Domini nostri Iesu Christi. Immun dus ad fontem misericordiae; caecus ad lumen aeternae claritatis; pauper et indigens ad Dominum caeli et terrae.

Deprecor itaque ubertatem immensae largitatis tuae ut digneris sanare infirmitatem meam, lavare maculas meas, illuminare caecitatem meam, ditare paupertatem meam, et vestire nuditatem meam.

Ut accipiam panem Angelorum, Regem regum et Dominum dominantium, cum reverentia et humilitate, cum contritione et devotione, cum puritate et fide, cum proposito et intentione quae conveniunt saluti animae meae.

Da mihi percipere non solum sacramentum Corporis et Sanguinis Domini, sed etiam effectum et virtutem eius. O Deus mansuetudinis, da mihi sic suscipere Corpus quod unicus Filius tuus, Dominus noster Iesus Christus, sumpsit ex Virgine Maria, ut incorporer corpori eius mystico et annumerer inter membra eius.

O Pater plene amoris, fac ut, recipiens nunc Filium tuum sub velamento sacramenti, possim in aeternitate contemplari eum facie ad faciem. Qui tecum vivit et regnat in saecula saeculorum. Amen.`,
      },
      {
        id: "oracao-sao-joao-crisostomo",
        titlePortugues: "Oração de São João Crisóstomo",
        titleLatim: "Oratio Sancti Ioannis Chrysostomi",
        textPortugues: `Creio, Senhor e confesso, que em verdade Tu És Cristo, Filho de Deus vivo e que vieste ao mundo para salvar os pecadores, dos quais eu sou o primeiro. 

Creio ainda que este é o Teu Puríssimo Corpo e que este é o Teu próprio precioso Sangue. 

Suplico-Te, pois, tem misericórdia de mim e perdoa-me as minhas faltas voluntárias e involuntárias, que cometi por palavras ou ações, com conhecimento ou por ignorância, e concede-me sem condenação receber Teus puríssimos Mistérios para remissão dos pecados e para a vida eterna. 

Da Tua Ceia Mística, aceita-me hoje como participante, ó Filho de Deus; pois não revelarei o Teu Mistério aos Teus inimigos, nem Te darei o beijo como Judas, mas como o ladrão me confesso: lembra-Te de mim, Senhor, no Teu Reino. 

Que não seja para meu juízo ou condenação, a recepção de Teus Santos Mistérios, Senhor, mas para a cura do corpo e da alma. Amém.`,
        textLatim: `Credo, Domine, et confiteor quia vere tu es Christus, Filius Dei vivi, qui venisti in mundum ut salvares peccatores, quorum primus ego sum.

Credo etiam quod hoc est corpus tuum purissimum et hic est sanguis tuus proprius pretiosus.

Rogo itaque, miserere mei et dimitte mihi delicta mea voluntaria et involuntaria, quae commisi verbo vel opere, scienter vel ignoranter, et concede mihi sine condemnatione accipere sanctissima mysteria tua in remissionem peccatorum et in vitam aeternam.

De coena mystica tua suscipe me hodie communicantem, o Fili Dei; non enim inimicis tuis mysterium tuum revelabo, nec osculum tibi dabo sicut Iudas, sed sicut latro confiteor tibi: memento mei, Domine, in regno tuo.

Non in iudicium vel condemnationem mihi sit receptio sanctorum mysteriorum tuorum, Domine, sed in sanitatem corporis et animae. Amen.`,
      },
      {
        id: "alma-christi",
        titlePortugues: "Alma de Cristo",
        titleLatim: "Anima Christi",
        textPortugues: `Alma de Cristo, santificai-me.
Corpo de Cristo, salvai-me.
Sangue de Cristo, inebriai-me.
Água do lado de Cristo, lavai-me.
Paixão de Cristo, confortai-me.
Ó bom Jesus, ouvi-me.
Dentro de Vossas chagas, escondei-me.
Não permitais que me separe de Vós.
Do espírito maligno, defendei-me.
Na hora da minha morte, chamai-me
e mandai-me ir para Vós,
para que com os vossos Santos Vos louve
por todos os séculos dos séculos.
Amém.`,
        textLatim: `Anima Christi, sanctifica me.
Corpus Christi, salva me.
Sanguis Christi, inebria me.
Aqua lateris Christi, lava me.
Passio Christi, conforta me.
O bone Iesu, exaudi me.
Intra tua vulnera absconde me.
Ne permittas me separari a te.
Ab hoste maligno defende me.
In hora mortis meae voca me,
et iube me venire ad te,
ut cum Sanctis tuis laudem te
in saecula saeculorum.
Amen.`,
      },
      {
        id: "oracao-clemente-xi",
        titlePortugues: "Oração atribuída ao Papa Clemente XI",
        titleLatim: "Oratio attributa Papae Clementi XI",
        textPortugues: `Meu Deus, eu creio em vós, mas fortificai a minha fé; espero em vós, mas tornai mais confiante a minha esperança; eu vos amo, mas afervorai o meu amor; arrependo-me de ter pecado, mas aumentai o meu arrependimento. 

Eu vos adoro como primeiro princípio, eu vos desejo como fim último; eu vos louvo como benfeitor perpétuo, eu vos invoco como benévolo defensor. 

Que vossa sabedoria me dirija, vossa justiça me contenha, vossa clemência me console, vosso poder me proteja. 

Meu Deus, eu vos ofereço meus pensamentos, para que só pense em vós; minhas palavras, para que só fale em vós; minhas ações, para que sejam do vosso agrado; meus sofrimentos, para que sejam por vosso amor. 

Quero o que quiserdes, porque o que quereis como o quereis, e enquanto o quereis. Senhor eu vos peço: iluminai minha inteligência, inflamai minha vontade, purificai meu coração e santificai minha alma. 

Dai-me chorar os pecados passados, repelir as tentações futuras, corrigir as má inclinações e praticar as virtudes do meu estado. 

Concedei-me ó Deus de bondade, ardente amor por vós e aversão por meus defeitos, zelo pelo próximo e desapego do mundo. 

Que eu me esforce para obedecer aos meus superiores, auxiliar os que dependem de mim, dedicar-me aos amigos e perdoar os inimigos. 

Que eu vença a sensualidade pela austeridade, a avareza pela generosidade, a cólera pela mansidão e a tibieza pelo fervor. 

Torne-me prudente nas decisões, corajoso nos perigos, paciente nas adversidades e humilde na prosperidade. 

Fazei Senhor, que eu seja atento na oração, sóbrio nos alimentos, diligente no trabalho e firme nas resoluções. 

Que eu procure possuir pureza de coração e modéstia de costumes, um procedimento exemplar e uma vida reta. 

Que eu me aplique sempre em vencer a natureza, colaborar com a graça, guardar os mandamentos e merecer a salvação. 

Aprenda de vós como é pequeno o que é da terra, como é grande o que é divino, breve o que é desta vida e duradouro o que é eterno. 

Dai-me preparar-me para a morte, temer o dia do juízo, fugir do inferno e alcançar o paraíso. Por Cristo Nosso Senhor.
Amém.`,
        textLatim: `Deus meus, credo in te, sed corrobora fidem meam; spero in te, sed redde spem meam confidentiorem; amo te, sed accende amorem meum; paenitet me peccasse, sed auge paenitentiam meam.

Adoro te ut primum principium, desidero te ut finem ultimum; laudo te ut benefactorem perpetuum, invoco te ut defensorem benevolum.

Sapientia tua me dirigat, iustitia tua me contineat, clementia tua me consoletur, potentia tua me protegat.

Deus meus, offero tibi cogitationes meas, ut tantum de te cogitem; verba mea, ut tantum de te loquar; actiones meas, ut tibi placeant; passiones meas, ut sint propter amorem tuum.

Volo quod volueris, quia quod vis ut vis, et dum vis. Domine rogo te: illumina intellectum meum, inflamma voluntatem meam, purifica cor meum et sanctifica animam meam.

Da mihi flere peccata praeterita, repellere temptationes futuras, corrigere pravas inclinationes et exercere virtutes status mei.

Concede mihi, o Deus bonitatis, amorem ardenter erga te et aversionem erga defectus meos, zelum pro proximo et detachment a mundo.

Coner obedire superioribus meis, adiuvare dependentes a me, dedicare amicis et ignoscere inimicis.

Vincam sensualitatem per austeritatem, avaritiam per generositatem, iram per mansuetudinem et teporem per fervorem.

Redde me prudentem in consiliis, fortem in periculis, patientem in adversitatibus et humilem in prosperitatibus.

Fac, Domine, ut sim attentus in oratione, sobrius in cibis, diligens in opere et firmus in propositis.

Quaeram possidere puritatem cordis et modestiam morum, conversationem exemplarem et vitam rectam.

Applicem me semper ad vincendam naturam, collaborandum cum gratia, servandum mandata et merendam salutem.

Discam a te quam parvum sit quod terrenum est, quam magnum quod divinum est, breve quod huius vitae est et durabile quod aeternum est.

Da mihi praeparare me ad mortem, timere diem iudicii, fugere infernum et adipisci paradisum. Per Christum Dominum nostrum.
Amen.`,
      },
      {
        id: "oracao-jesus-crucificado",
        titlePortugues: "Oração a Nosso Senhor Jesus Cristo Crucificado",
        titleLatim: "Oratio ad Dominum nostrum Iesum Christum crucifixum",
        textPortugues: `Eis-me aqui, ó bom e dulcíssimo Jesus! De joelhos me prostro em vossa presença e vos suplico com todo o fervor de minha alma que vos digneis gravar no meu coração os mais vivos sentimentos de fé, esperança e caridade, verdadeiro arrependimento de meus pecados e firme propósito de emenda, enquanto vou considerando, com vivo afeto e dor, as vossas cinco chagas, tendo diante dos olhos aquilo que o profeta Davi já vos fazia dizer, ó bom Jesus: "Traspassaram minhas mãos e meus pés, e contaram todos os meus ossos" (Sl 21,17-18).`,
        textLatim: `Ecce adsum, o bone et dulcissime Iesu! Genibus flexis coram te prosternor ac toto animi fervore te obsecro ut digneris imprimere cordi meo vivos fidei, spei et caritatis sensus, veram peccatorum meorum paenitentiam ac firmum emendationis propositum, dum considero, cum vivo affectu et dolore, quinque vulnera tua, habens ante oculos id quod iam per David prophetam tibi dicebas, o bone Iesu: "Foderunt manus meas et pedes meos, et dinumeraverunt omnia ossa mea" (Ps 21,17-18).`,
      },
      {
        id: "oracao-nossa-senhora-pos-comunhao",
        titlePortugues: "Oração a Nossa Senhora (após a Comunhão)",
        titleLatim: "Oratio ad Beatam Virginem Mariam (post Communionem)",
        textPortugues: `Ó Maria, Virgem e Mãe santíssima, eis que recebi o vosso amado Filho, que concebestes em vosso seio imaculado e destes à luz, amamentastes e estreitastes com ternura em vossos braços. 

Eis que humildemente e com todo o amor vos apresento e ofereço de novo aquele mesmo cuja face vos alegrava e enchia de delícias, para que, tomando-o em vossos braços e amando-o de todo o coração, o apresenteis à Santíssima Trindade em supremo culto de adoração, para vossa honra e glória, por minhas necessidades e pelas de todo o mundo. 

Peço-vos, pois, ó Mãe compassiva, que imploreis a Deus o perdão dos meus pecados, graças abundantes para servi-lo mais fielmente e a perseverança final, para que convosco possa louvá-lo para sempre. Amém.`,
        textLatim: `O Maria, Virgo et Mater sanctissima, ecce recepi dilectum Filium tuum, quem concepisti in sinu immaculato tuo et peperisti, lactasti et tenuisti tenerrimis ulnis tuis.

Ecce humiliter et cum toto amore tibi repraesento et offero eundem illum cuius facies te laetificabat et deliciis implebat, ut, accipiens eum in ulnis tuis et amans ex toto corde, praesentes eum Sanctissimae Trinitati in supremo cultu adorationis, pro tuo honore et gloria, pro meis necessitatibus et pro toto mundo.

Rogo itaque, o Mater compassiva, ut implores a Deo remissionem peccatorum meorum, gratias abundantes ad serviendum ei fidelius et finalem perseverantiam, ut tecum possim laudare eum in saecula. Amen.`,
      },
      {
        id: "oferecimento-santo-inacio",
        titlePortugues: "Oferecimento de si mesmo de Santo Inácio de Loyola",
        titleLatim: "Oblatio sui ipsius Sancti Ignatii de Loyola",
        textPortugues: `Recebei, Senhor, minha liberdade inteira.
Recebei minha memória,
minha inteligência e toda a minha vontade.
Tudo que tenho ou possuo de vós me veio;
tudo vos devolvo e entrego sem reserva
para que a vossa vontade tudo governe.
Dai-me somente vosso amor e vossa graça
e nada mais vos peço,
pois já serei bastante rico.
Amém.`,
        textLatim: `Sume, Domine, et suscipe omnem libertatem meam,
memoriam, intellectum atque omnem voluntatem.
Quidquid habeo vel possideo, mihi largitus es;
id tibi totum restituo, ac tuae prorsus voluntati trado gubernandum.
Amorem tui solum cum gratia tua mihi dones,
et dives sum satis,
nec aliud quidquam ultra posco.
Amen.`,
      },
      {
        id: "oracao-santo-tomas-acao-gracas",
        titlePortugues: "Oração de Santo Tomás de Aquino (ação de graças)",
        titleLatim: "Oratio Sancti Thomae Aquinatis (gratiarum actio)",
        textPortugues: `Eu vos dou graças, ó Senhor, Pai Santo, Deus eterno e todo poderoso, porque, sem mérito algum de minha parte, mas somente pela condescendência de vossa misericórdia, vos dignastes saciar-me, a mim pecador, vosso indigno servo, com o Sagrado Corpo e o Precioso Sangue de vosso Filho, nosso Senhor Jesus Cristo. 

Eu peço que esta Santa Comunhão não me seja motivo de castigo, mas salutar garantia de perdão. Seja para mim armadura da fé, escudo de boa vontade e libertação dos meus vícios. 

Extinga em mim a concupiscência e os maus desejos, aumente a caridade, a paciência, a humildade e a obediência, e todas as virtudes.

Defenda-me eficazmente contra as ciladas dos inimigos, tanto visíveis como invisíveis. Pacifique inteiramente todas as minhas paixões, unindo-me firmemente a vós, Deus uno e verdadeiro, feliz consumação de meu destino. 

E peço que vos digneis conduzir a mim pecador aquele inefável convívio em que vós, com vosso Filho e o Espírito Santo, sois para os vossos Santos a luz verdadeira, a plena saciedade e a eterna alegria, a ventura completa e a felicidade perfeita. Por Cristo, nosso Senhor. Amém.`,
        textLatim: `Gratias tibi ago, Domine, Pater sancte, Deus aeterne et omnipotens, quia nullis meis meritis, sed sola dignatione misericordiae tuae, satiare dignatus es me peccatorem, indignum famulum tuum, sacro Corpore et pretioso Sanguine Filii tui, Domini nostri Iesu Christi.

Rogo ut haec sancta Communio non sit mihi reatus ad poenam, sed salutare praesidium ad veniam. Sit mihi lorica fidei, scutum bonae voluntatis et abolitio vitiorum meorum.

Extinguat in me concupiscentiam et mala desideria, augeat caritatem, patientiam, humilitatem et obedientiam, et omnes virtutes.

Defendat me efficaciter ab insidiis omnium inimicorum, tam visibilium quam invisibilium. Pacificet totaliter omnes passiones meas, adhaerere me faciat firmiter tibi, uni et vero Deo, felici consummatione destinati mei.

Et peto ut digneris perducere me peccatorem ad illud ineffabile convivium in quo tu, cum Filio tuo et Spiritu Sancto, es Sanctis tuis lux vera, satietas plena, gaudium sempiternum, iucunditas consummata et felicitas perfecta. Per Christum Dominum nostrum. Amen.`,
      },
    ],
  },
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  {
    categoryId: "acao-gracas",
    categoryTitle: "Para Ação de Graças",
    prayers: [
      {
        id: "oracao-acao-gracas",
        titlePortugues: "Oração de Ação de Graças",
        titleLatim: "Oratio Gratiarum Actionis",
        textPortugues:
          "Senhor meu Deus, agradeço-Vos de todo o coração por todos os bens que me haveis concedido. A vossa bondade é infinita e a vossa misericórdia não tem limites. Ajudai-me a ser sempre grato e a usar todos os dons para a vossa maior glória. Amém.",
        textLatim:
          "Dómine Deus meus, grátias ago Tibi ex toto corde pro ómnibus bonis quæ mihi tribuísti. Bónitas Tua infiníta est et misericórdia Tua sine límite. Ádiuva me semper gratum esse et ómnibus donis uti ad maiórem glóriam Tuam. Amen.",
      },
    ],
  },
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  {
    categoryId: "devocoes-eucaristicas",
    categoryTitle: "Devoções Eucarísticas",
    prayers: [
      {
        id: "oracao-santissimo",
        titlePortugues: "Oração diante do Santíssimo Sacramento",
        titleLatim: "Oratio coram Sanctissimo Sacramento",
        textPortugues:
          "Ó Sacrário vivente de Deus, Vós que estais verdadeiramente presente sob as espécies do pão e do vinho, eu Vos adoro com toda a minha alma. Permanecei comigo, Senhor, e concedei-me a graça de nunca me afastar de Vós. Amém.",
        textLatim:
          "O vivum Dei Tabernáculum, qui vere præsens es sub spéciébus panis et vini, Te adóro ex tota ánima mea. Mane mecum, Dómine, et concéde mihi grátiam numquam a Te recedéndi. Amen.",
      },
    ],
  },
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  {
    categoryId: "oracoes-diversas",
    categoryTitle: "Orações Diversas",
    prayers: [
      {
        id: "oracao-paz",
        titlePortugues: "Oração pela Paz",
        titleLatim: "Oratio pro Pace",
        textPortugues:
          "Senhor, fazei de mim um instrumento de vossa paz. Onde houver ódio, que eu leve o amor. Onde houver ofensa, que eu leve o perdão. Onde houver discórdia, que eu leve a união. Amém.",
        textLatim:
          "Dómine, fac me instruméntum pacis Tuæ. Ubi ódium, amórem féram. Ubi offénsa, véniam féram. Ubi discórdia, uniónem féram. Amen.",
      },
    ],
  },
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  {
    categoryId: "ladainhas",
    categoryTitle: "Ladainhas",
    prayers: [
      {
        id: "ladainha-nossa-senhora",
        titlePortugues: "Ladainha de Nossa Senhora",
        titleLatim: "Litaniæ Lauretanæ",
        textPortugues:
          "Senhor, tende piedade de nós.\nCristo, tende piedade de nós.\nSenhor, tende piedade de nós.\nCristo, ouvi-nos.\nCristo, atendei-nos.\nPai celeste, que sois Deus, tende piedade de nós.\nFilho, Redentor do mundo, que sois Deus, tende piedade de nós.\nEspírito Santo, que sois Deus, tende piedade de nós.",
        textLatim:
          "Kýrie, eléison.\nChriste, eléison.\nKýrie, eléison.\nChriste, audi nos.\nChriste, exáudi nos.\nPater de cælis, Deus, miserére nobis.\nFili, Redémptor mundi, Deus, miserére nobis.\nSpíritus Sancte, Deus, miserére nobis.",
      },
    ],
  },
];

//
//
//
//
//
//
//
//
//
//
export const getCategoryById = (
  categoryId: string,
): PrayerCategory | undefined => {
  return prayerCategories.find((cat) => cat.categoryId === categoryId);
};

export const getPrayerById = (
  categoryId: string,
  prayerId: string,
): Prayer | undefined => {
  const category = getCategoryById(categoryId);
  return category?.prayers.find((prayer) => prayer.id === prayerId);
};
