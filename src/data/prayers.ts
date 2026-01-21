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
        textPortugues: `Em nome do Pai,
         e do Filho,
          e do Espírito Santo.
          
          Amém.`,
        textLatim: `In nómine Patris,
         et Fílii,
          et Spíritus Sancti.
          
          Amen.`,
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
        textPortugues: `Pai nosso que estais nos céus,
         santificado seja o vosso nome,
         venha a nós o vosso reino, 
         seja feita a vossa vontade assim na terra como no céu.
         O pão nosso de cada dia nos dai hoje,
         perdoai-nos as nossas ofensas assim como nós perdoamos a quem nos tem ofendido, 
         e não nos deixeis cair em tentação, mas livrai-nos do mal. Amém.`,

        textLatim: `Pater noster, qui es in cælis,
         sanctificétur nomen tuum, advéniat regnum tuum,
          fiat volúntas tua,
           sicut in cælo et in terra.
            Panem nostrum cotidiánum da nobis hódie,
             et dimítte nobis débita nostra,
              sicut et nos dimíttimus debitóribus nostris,
               et ne nos indúcas in tentatiónem,
                sed líbera nos a malo. Amen.`,
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
          `Em vossas mãos, ó meu Deus, eu me entrego. Virai e revirai esta argila, como a vasilha que se modela nas mãos do oleiro. Dai-lhe forma e em seguida despedaçai-a, se assim quiserdes; ela vos pertence e nada tem a dizer. Basta-me que ela sirva a todos os vossos desígnios e que em nada resista a vosso divino beneplácito, para o qual eu fui criado. Pedi, ordenai: que quereis que eu faça? Que quereis que eu deixe de fazer? Exaltado ou rebaixado, perseguido, consolado ou aflito, utilizado em vossas obras ou sem para nada servir, a mim não resta senão dizer, a exemplo de vossa Mãe Santíssima: Seja feito segundo a vossa palavra. Concedei-me o amor por excelência, o amor da cruz, não das cruzes heroicas cujo esplendor poderia nutrir o amor-próprio, mas das cruzes ordinárias de todos os dias: no caminho, na contradição, no esquecimento, no fracasso, nos falsos julgamentos, nas contrariedades, na frieza ou no entusiasmo dos outros, na enfermidade do corpo, nas trevas do espírito, no silêncio e na secura do coração. Somente então sabereis que vos amo, embora às vezes nem eu mesmo o saiba ou sinta; e isto me basta.`,
        textLatim:
          `In manus tuas, Deus meus, me trado. Verte et revolve hanc argillam sicut vas quod in manu figuli formatur. Da ei formam et postea confringe, si ita vis; tua est enim et nihil dicere potest. Sufficit mihi ut omnibus tuis consiliis inserviat nec ullo modo tuo divino beneplacito resistat, ad quod creatus sum. Iube, praecipe: quid vis ut faciam? Quid vis ut omittam? Exaltatus aut humiliatus, persecutus, consolatus aut afflictus, adhibitus in operibus tuis aut ad nihil utilis, nihil mihi restat nisi dicere, ad exemplum Sanctissimae Matris tuae: Fiat secundum verbum tuum. Concede mihi amorem excellentissimum, amorem crucis, non illarum crucium heroicorum quae amorem proprium alunt, sed crucium quotidianarum, quae in itinere vitae occurrunt: in contradictione, oblivione, defectu, falsis iudiciis, adversitatibus, frigiditate aut fervore aliorum, in infirmitate corporis, in tenebris spiritus, in silentio et ariditate cordis. Tunc tantum scies me te amare, etiamsi ego ipse id interdum nec sentiam nec intelligam; et hoc mihi sufficit.`,
      },

      {
        id: "oferecimento-do-dia",
        titlePortugues: "Oferecimento do Dia",
        titleLatim: "Oblatio Diei",
        textPortugues:
          `Senhor Deus, Rei do céu e da terra, dirige, santifica, conduz e governa neste dia nossos corações e nossos corpos, nossos sentimentos, palavras e ações, a fim de que, submissos à tua lei e agindo conforme os teus preceitos, mereçamos, por teu auxílio, ser salvos e livres nesta vida e na eternidade. Ó Salvador do mundo, que vives e reinas pelos séculos dos séculos. Amém.`,
        textLatim:
          `Dirigere et sanctificare, regere et gubernare dignare, Domine Deus, Rex caeli et terrae, hodie corda et corpora nostra, sensus, sermones et actus nostros in lege tua et in operibus mandatorum tuorum, ut hic et in aeternum, te auxiliante, salvi et liberi esse mereamur. Salvator mundi, qui vivis et regnas in saecula saeculorum. Amen.`,
      },

      {
        id: "oracoes-manha-ao-vestir",
        titlePortugues: "Ao vestir-se",
        titleLatim: "Dum Vestitur",
        textPortugues:
          `Jesus, Salvador meu, ofereço-me e consagro-me inteiramente e para sempre a ti, e por ti ao Eterno Pai. Eu te ofereço meu corpo, minha alma, meu espírito, meu coração, minha vida, todos os meus pensamentos, palavras e ações, as respirações e as batidas do meu coração, meus olhares e o uso dos meus sentidos, tudo quanto sou e possuo. Consagro tudo à tua glória, para que tudo seja louvor, adoração e amor a ti, Salvador meu. Eu te suplico que socorras as angústias dos pobres e, assim como me socorres para vestir meu corpo, reveste também minha alma de ti mesmo, de teu amor e de todas as virtudes.`,
        textLatim:
          `Iesu, Salvator meus, me ipsum tibi offero et consecro totum et in perpetuum, et per te Patri Aeterno. Offerro tibi corpus meum, animam meam, spiritum meum, cor meum, vitam meam, omnes cogitationes, verba et actiones meas, respirationes et pulsus cordis mei, oculos meos et usum omnium sensuum meorum, totum quod sum et possideo. Omnia gloriae tuae consecro, ut sint laus, adoratio et amor tibi, Salvator meus. Supplico ut pauperum angustias subleves et sicut corpus meum vestis ita animam meam te ipso tuo amore omnibusque virtutibus induas.`,
      },

      {
        id: "senhor-deus-todo-poderoso",
        titlePortugues: "Senhor Deus Todo-poderoso",
        titleLatim: "Domine Deus Omnipotens",
        textPortugues:
          `Senhor Deus Todo-poderoso, que nos fizestes chegar ao princípio deste dia, salvai-nos hoje por vosso poder, para que não nos deixemos arrastar a pecado algum neste dia, mas que nossas palavras, pensamentos e obras tendam sempre ao cumprimento da vossa justiça. Por Cristo, nosso Senhor. Amém.`,
        textLatim:
          `Domine Deus omnipotens, qui ad principium huius diei nos pervenire fecisti, salva nos hodie tua virtute, ut in nullo peccato labamur, sed omnes cogitationes, verba et opera nostra ad implendam iustitiam tuam dirigantur. Per Christum Dominum nostrum. Amen.`,
      },

      {
        id: "consagracao-diaria-nossa-senhora",
        titlePortugues: "Consagração Diária a Nossa Senhora",
        titleLatim: "Consecratio Quotidiana ad Beatam Virginem Mariam",
        textPortugues:
          `Ó minha Senhora e minha Mãe, eu me ofereço todo a vós e, em prova da minha devoção para convosco, vos consagro neste dia meus olhos, meus ouvidos, minha boca, meu coração e todo o meu ser. E porque assim sou vosso, ó incomparável Mãe, guardai-me e defendei-me como coisa e propriedade vossa. Amém.`,
        textLatim:
          `O Domina mea et Mater mea, totus me tibi offero et, in testimonium devotionis meae erga te, tibi hodie consecro oculos meos, aures meas, os meum, cor meum atque totum meipsum. Quia igitur tuus sum, o incomparabilis Mater, conserva me et protege me ut rem et possessionem tuam. Amen.`,
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

V. O Anjo do Senhor anunciou a Maria.
R. E ela concebeu do Espírito Santo.

Oremos.
Infundi, Senhor, em nossos corações a vossa graça, vo-lo suplicamos, a fim de que, conhecendo a anunciação do Anjo e a encarnação de Jesus Cristo, vosso Filho pelos merecimentos de sua paixão e morte cheguemos à glória da ressurreição.
Pelo mesmo Cristo Senhor Nosso. 
R. Amém.

V. O auxílio divino permaneça sempre conosco.
R. Amém.`,
        textLatim: `Alma Redemptóris Mater, quae pérvia caeli, Porta manes, et Stella máris, succúrre cadénti. Súrgere qui curat populo. Tu quae genuísti, natúra mirante, tuum sanctum Genitorem. Virgo prius ac postérius, Gabriélis ab ore sumens illud Ave, peccatórum miserere.

V. Ángelus Dómini nuntiávit Mariae.
R. Et concépit de Spiritu Sancto.
Oremus.
Gratiam tuam, quaesumus, Dómine, méntibus nostris infúnde; ut qui, Angelo nuntiánte, Christi Fílii tui incarnatiónem cognóvimus, per passiónem eius et crucem ad resurrectiónis gloriam perducámur. 
Per eúmdem Christum Dóminum nostrum. 
R. Amen.

V. Divínum auxílium máneat semper nobíscum.
R. Amen.`,
      },
      {
        id: "ave-regina-caelorum",
        titlePortugues: "Ave, Regina Caelorum",
        titleLatim: "Ave, Regina Caelorum",
        textPortugues: `Ave, Rainha do Céu, Ave, Senhora dos Anjos: Salve, raiz fecunda, salve, porta do céu, pela qual a luz nasceu para o mundo: Alegrai-vos, ó Virgem gloriosa, entre todas a mais bela. Salve, esplendor radioso, e rogai por nós a Cristo.

V. Fazei-me digno de vos louvar, sagrada Virgem.
R. Protegei-me e dai-me força contra os vossos inimigos.
Oremos.
Concedei, misericordioso Deus, um grande esforço à nossa fragilidade, para que nós, que celebramos a memória da santa Mãe de Deus; com o auxílio de sua intercessão, ressucitemos das nossas iniquidades.
Pelo mesmo Cristo Senhor Nosso. 
R. Amém.

V. O auxílio divino permaneça sempre connosco.
R. Amém.`,
        textLatim: `Ave, Regina caelorum, Ave, Domina Angelorum: Salve, radix, salve, porta, ex qua mundo lux est orta: Gaude, Virgo gloriosa, super omnes speciosa. Vale, o valde decora, et pro nobis Christum exora.

V. Dignare me laudare te, Virgo sacrata.
R. Da mihi virtutem contra hostes tuos.

Oremus.
Concede, misericors Deus, fragilitati nostrae praesidium: ut, qui sanctae Dei Genitricis memoriam agimus; intercessionis eius auxilio, a nostris iniquitatibus resurgamus.
Per eundem Christum Dominum nostrum.
R. Amen.

V. Divínum auxílium máneat semper nobíscum.
R. Amen.`,
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

        textLatim:
`Ave, Maris Stella,
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
        textPortugues:
`Estava a Mãe dolorosa
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

        textLatim:
 `Stabat mater dolorosa
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
        textLatim:
`Caelitum, Ioseph, decus atque nostrae
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
        textLatim: 
`Sancte Ioseph, caelorum gloria,
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


Glória ao Pai... (3 vezes)

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
        id: "ato-contricao",
        titlePortugues: "Ato de Contrição",
        titleLatim: "Actus Contritionis",
        textPortugues: `Meu Deus, porque sois infinitamente bom e Vos amo de todo o meu coração, pesa-me de Vos ter ofendido e, com o auxílio da Vossa divina graça, proponho firmemente emendar-me e nunca mais Vos tornar a ofender. Peço e espero o perdão das minhas culpas pela Vossa infinita misericórdia. Amém.`,
        textLatim: `Deus meus, quia infinite bonus es et te ex toto corde meo amo, paenitet me te offendi et, adiutus divina gratia tua, firmiter propono me emendare et numquam te iterum offendere. Rogo et spero veniam culpae meae per misericordiam tuam infinitam. Amen.`,
      },
      {
        id: "ato-fe",
        titlePortugues: "Ato de Fé",
        titleLatim: "Actus Fidei",
        textPortugues: `Senhor Deus, creio firmemente e confesso todas e cada uma das coisas que a Santa Igreja Católica propõe, porque Vós, ó Deus, revelastes todas essas coisas, Vós, que sois a eterna verdade e sabedoria que não pode enganar nem ser enganada.

Nesta fé, é minha determinação viver e morrer. Amém.`,
        textLatim: `Domine Deus, firma fide credo et confiteor omnia et singula quae Sancta Ecclesia Catholica proponit, quia tu, Deus, ea omnia revelasti, qui es aeterna veritas et sapientia quae nec fallere nec falli potest.

In hac fide vivere et mori statuo. Amen.`,
      },
      {
        id: "ato-esperanca",
        titlePortugues: "Ato de Esperança",
        titleLatim: "Actus Spei",
        textPortugues: `Espero, Senhor Deus, que, pela Vossa graça, hei de conseguir a remissão de todos os pecados e depois desta vida a felicidade eterna, porque Vós prometestes, Vós que sois infinitamente poderoso, fiel e misericordioso.

Nesta esperança, é minha determinação viver e morrer. Amém.`,
        textLatim: `Domine Deus, spero per gratiam tuam remissionem omnium peccatorum, et post hanc vitam aeternam felicitatem me esse consecuturum: quia tu promisisti, qui es infinite potens, fidelis, benignus et misericors.

In hac spe vivere et mori statuo. Amen.`,
      },
      {
        id: "ato-caridade",
        titlePortugues: "Ato de Caridade",
        titleLatim: "Actus Caritatis",
        textPortugues: `Senhor Deus, amo-vos sobre todas as coisas e a meu próximo por causa de Vós, porque Vós sois o sumo bem, infinito e perfeitíssimo, digno de todo amor.

Nesta caridade, é minha determinação viver e morrer. Amém.`,
        textLatim: `Domine Deus, amo te super omnia et proximum meum propter te, quia tu es summum, infinitum et perfectissimum bonum, omni dilectione dignum.

In hac caritate vivere et mori statuo. Amen.`,
      },
      {
        id: "ato-agradecimento-oferecimento",
        titlePortugues:
          "Ato de Agradecimento e Oferecimento (Santo Afonso de Ligório)",
        titleLatim:
          "Actus Gratiarum Actionis et Oblationis (Sanctus Alphonsus de Ligorio)",
        textPortugues: `Senhor meu Jesus Cristo, que pelo amor que tendes aos homens estais noite e dia neste Sacramento, cheio de piedade e de amor, esperando, chamando e acolhendo a todos os que vêm visitar-Vos; creio que estais presente no santíssimo Sacramento do altar.

Eu Vos adoro do abismo do meu nada e Vos agradeço todas as graças que me haveis concedido, especialmente porque todo Vos destes a mim neste Sacramento, e me concedestes por Advogada, vossa Mãe, Maria Santíssima, e me chamastes a visitar-Vos nesta igreja.

Eu saúdo, pois, hoje o Vosso amantíssimo Coração, e a minha intenção é faze-lo por três motivos: 

1º em ação de graças por esta grande dadiva; 

2º em desagravo por todos os ultrajes que haveis recebido de todos os vossos inimigos neste Sacramento; 

3º na intenção de adorar-Vos, por esta visita, em todos os lugares da terra onde estais menos reverenciado e mais abandonado.


Ó meu Jesus, eu vos amo de todo o meu coração; pesa-me de ter no passado tantas vezes ofendido a vossa bondade infinita: proponho, com o auxílio da Vossa graça nunca mais ofender-Vos para o futuro; e no presente, miserável qual sou, eu me consagro e me entrego todo a Vós e renuncio a toda vontade própria, a todos os afetos e desejos, a todas as minhas coisas para oferece-las a Vós.

De hoje em diante disponde de mim e de tudo quanto posso como Vos aprouver. Só procuro e Vos peço o Vosso santo amor, a perseverança final, e o total cumprimento da Vossa santíssima vontade.

Recomendo-Vos as almas do purgatório, especialmente as que foram mais devotas do SS. Sacramento e de Maria Santíssima. Também Vos recomendo todos os pobres pecadores.

Eu uno enfim, meu amado Salvador, todos os meus afetos com os do Vosso amorosíssimo Coração, e assim unidos eu os ofereço ao Vosso eterno Pai, pedindo-Lhe em Vosso nome que, por Vosso amor, haja por bem aceita-los e atende-los.`,
        textLatim: `Domine mi Iesu Christe, qui amore hominum nocte ac die in hoc Sacramento es, pietate et amore plenus, expectans, vocans et suscipiens omnes qui te visitare veniunt; credo te praesentem esse in sacratissimo altaris Sacramento.

Te adoro ab abysso nihil mei et gratias ago tibi pro omnibus gratiis quas mihi concessisti, praesertim quod totum te dedisti mihi in hoc Sacramento, et dedisti mihi pro Advocata, Matrem tuam, Mariam Sanctissimam, et vocasti me ut te in hac ecclesia visitarem.

Saluto igitur hodie Cor tuum amantissimum, et mea intentio est illud facere tribus de causis:

1° in actione gratiarum pro hac magna donatione;

2° in reparatione pro omnibus contumeliis quas recepisti ab omnibus inimicis tuis in hoc Sacramento;

3° in intentione adorandi te, per hanc visitationem, in omnibus locis terrae ubi minus revereris et magis derelinquis.


O mi Iesu, amo te ex toto corde meo; paenitet me in praeterito toties offendi bonitatem tuam infinitam: propono, adiutus gratia tua, numquam te de cetero offendere; et in praesenti, miser qualis sum, me consecro et me totum trado tibi et renuntio omni voluntati propriae, omnibus affectibus et desideriis, omnibus meis rebus ut eas tibi offeram.

Ex hodierno die disponas de me et de omnibus quae possum sicut tibi placuerit. Solum quaero et te rogo sanctum amorem tuum, finalem perseverantiam, et totalem adimpletionem sanctissimae voluntatis tuae.

Commendo tibi animas purgatorii, praesertim eas quae fuerunt devotiores SS. Sacramento et Mariae Sanctissimae. Etiam commendo tibi omnes pauperes peccatores.

Unio denique, mi Salvator dilecte, omnes meos affectus cum illis Cordis tui amantissimi, et sic unitos offero eos Patri tuo aeterno, petens ab eo in nomine tuo ut, amore tuo, bene dignetur eos accipere et exaudire.`,
      },
      {
        id: "eis-me-aqui-jesus",
        titlePortugues: "Eis-me aqui, ó bom e dulcíssimo Jesus",
        titleLatim: "Ecce adsum, o bone et dulcissime Iesu",
        textPortugues: `Eis-me aqui, ó bom e dulcíssimo Jesus! De joelhos me prostro em vossa presença e vos suplico com todo o fervor de minha alma que vos digneis gravar no meu coração os mais vivos sentimentos de fé, esperança e caridade, verdadeiro arrependimento de meus pecados e firme propósito de emenda, enquanto vou considerando com vivo afeto e dor as vossas cinco chagas, tendo diante dos olhos aquilo que o profeta Davi já nos fazia dizer, Ó bom Jesus: "Transpassaram minhas mãos e meus pés e contaram todos os meus ossos".`,
        textLatim: `Ecce adsum, o bone et dulcissime Iesu! Genibus flexis coram te prosternor ac toto animi fervore te obsecro ut digneris imprimere cordi meo vivos fidei, spei et caritatis sensus, veram peccatorum meorum paenitentiam ac firmum emendationis propositum, dum considero cum vivo affectu et dolore quinque vulnera tua, habens ante oculos id quod per David prophetam iam nobis dicere facis, o bone Iesu: "Foderunt manus meas et pedes meos et dinumeraverunt omnia ossa mea".`,
      },
      {
        id: "oferecimento-santo-inacio",
        titlePortugues: "Oferecimento de si mesmo - Santo Inácio de Loyola",
        titleLatim: "Oblatio sui ipsius - Sanctus Ignatius de Loyola",
        textPortugues: `Recebei, Senhor, minha liberdade inteira.
Recebei minha memória, inteligência e toda a minha vontade.
Tudo que tenho e possuo, de Vós me veio.
Tudo Vos devolvo e entrego sem reservas,
para que Vossa vontade tudo governe.
Dai-me somente o Vosso amor e a Vossa graça,
e nada mais Vos peço,
pois já serei bastante rico.
Amém.`,
        textLatim: `Sume, Domine, universam meam libertatem.
Accipe memoriam, intellectum atque voluntatem omnem.
Quidquid habeo vel possideo, mihi largitus es.
Id tibi totum restituo, ac tuae prorsus voluntati trado gubernandum.
Amorem tui solum cum gratia tua mihi dones,
et dives sum satis,
nec aliud quidquam ultra posco.
Amen.`,
      },
      {
        id: "fica-comigo-senhor",
        titlePortugues: "Fica comigo, Senhor!",
        titleLatim: "Mane mecum, Domine!",
        textPortugues: `Fica Senhor comigo, pois preciso da tua presença para não te esquecer.
Sabes quão facilmente posso te abandonar.

Fica Senhor comigo, porque sou fraco e preciso da tua força para não cair.

Fica Senhor comigo, porque és minha vida, e sem ti perco o fervor.

Fica Senhor comigo, porque és minha luz, e sem ti reina a escuridão.

Fica Senhor comigo, para me mostrar tua vontade.

Fica Senhor comigo, para que ouça tua voz e te siga.

Fica Senhor comigo, pois desejo amar-te e permanecer sempre em tua companhia.

Fica Senhor comigo, se queres que te seja fiel.

Fica Senhor comigo, porque, por mais pobre que seja minha alma, quero que se transforme num lugar de consolação para ti, um ninho de amor.

Fica comigo, Jesus, pois se faz tarde e o dia chega ao fim; a vida passa, e a morte, o julgamento e a eternidade se aproximam. Preciso de ti para renovar minhas energias e não parar no caminho. Está ficando tarde, a morte avança e eu tenho medo da escuridão, das tentações, da falta de fé, da cruz, das tristezas. Oh, quanto preciso de ti, meu Jesus, nesta noite de exílio.

Fica comigo nesta noite, Jesus, pois ao longo da vida, com todos os seus perigos, eu preciso de ti. Faze, Senhor, que te reconheça como te reconheceram teus discípulos ao partir do pão, a fim de que a Comunhão Eucarística seja a luz a dissipar a escuridão, a força a me sustentar, a única alegria do meu coração.

Fica comigo, Senhor, porque na hora da morte quero estar unido a ti, se não pela Comunhão, ao menos pela graça e pelo amor.

Fica comigo, Jesus. Não peço consolações divinas, porque não as mereço, mas apenas o presente da tua presença, ah, isso sim te suplico!

Fica Senhor comigo, pois é só a ti que procuro, teu amor, tua graça, tua vontade, teu coração, teu Espírito, porque te amo, e a única recompensa que te peço é poder amar-te sempre mais. Com este amor resoluto desejo amar-te de todo o coração enquanto estiver na terra, para continuar a te amar perfeitamente por toda a eternidade. Amém.

São Padre Pio, rogai por nós!`,
        textLatim: `Mane mecum, Domine, quia praesentia tua indigeo ne te obliviscar.
Scis quam facile te deserere possim.

Mane mecum, Domine, quia infirmus sum et virtute tua indigeo ne cadam.

Mane mecum, Domine, quia vita mea es, et sine te fervorem perdo.

Mane mecum, Domine, quia lux mea es, et sine te tenebrae regnant.

Mane mecum, Domine, ut voluntatem tuam mihi ostendas.

Mane mecum, Domine, ut vocem tuam audiam et te sequar.

Mane mecum, Domine, quia te amare desidero et semper in tua societate manere.

Mane mecum, Domine, si vis ut tibi fidelis sim.

Mane mecum, Domine, quia, quamvis pauper sit anima mea, volo ut convertatur in locum consolationis tibi, nidum amoris.

Mane mecum, Iesu, quia sero fit et dies ad finem venit; vita transit, et mors, iudicium et aeternitas appropinquant. Te indigeo ut vires meas renovem et in via non subsistam. Sero fit, mors appropinquat et timeo tenebras, tentationes, defectum fidei, crucem, tristitias. O quam te indigeo, mi Iesu, in hac nocte exsilii.

Mane mecum hac nocte, Iesu, quia in vita, cum omnibus periculis suis, te indigeo. Fac, Domine, ut te agnoscam sicut te agnoverunt discipuli tui in fractione panis, ut Communio Eucharistica sit lux ad dissipandas tenebras, vis ad me sustentandum, unica gaudii mei causa.

Mane mecum, Domine, quia in hora mortis tecum uniri volo, si non per Communionem, saltem per gratiam et amorem.

Mane mecum, Iesu. Non peto consolationes divinas, quia eas non mereor, sed solum donum praesentiae tuae, ah, id te suppliciter rogo!

Mane mecum, Domine, quia te solum quaero, amorem tuum, gratiam tuam, voluntatem tuam, cor tuum, Spiritum tuum, quia te amo, et unica merces quam peto est posse te semper plus amare. Hoc amore deliberate desidero te amare ex toto corde dum in terra sum, ut pergam te perfecte amare in aeternitate. Amen.

Sancte Pater Pio, ora pro nobis!`,
      },
      {
        id: "oracao-santo-agostinho",
        titlePortugues: "Oração de Santo Agostinho",
        titleLatim: "Oratio Sancti Augustini",
        textPortugues: `Vós sois, ó Jesus, o Cristo, meu Pai santo, meu Deus misericordioso, meu Rei infinitamente grande; sois meu bom pastor, meu único mestre, meu auxílio cheio de bondade, meu bem-amado de uma beleza maravilhosa, meu pão vivo, meu sacerdote eterno, meu guia para a pátria, minha verdadeira luz, minha santa doçura, meu reto caminho, sapiência minha preclara, minha pura simplicidade, minha paz e concórdia; sois, enfim, toda a minha salvaguarda, minha herança preciosa, minha eterna salvação…

Ó Jesus Cristo, amável Senhor, por que, em toda a minha vida, amei, por que desejei outra coisa senão vós? Onde estava eu quando não pensava em vós? Ah! que, pelo menos, a partir deste momento meu coração só deseje a vós e por vós se abrase, Senhor Jesus! 

Desejos de minha alma, correi, que já bastante tardastes; apressai-vos para o fim a que aspirais; procurai em verdade aquele que procurais. Ó Jesus, anátema seja quem não vos ama. Aquele que não vos ama seja repleto de amarguras. 

Ó doce Jesus, sede o amor, as delícias, a admiração de todo coração dignamente consagrado à vossa glória. Deus de meu coração e minha partilha, Jesus Cristo, que em vós meu coração desfaleça, e sede vós mesmo a minha vida. 

Acenda-se em minha alma a brasa ardente de vosso amor e se converta num incêndio todo divino, a arder para sempre no altar de meu coração; que inflame o íntimo do meu ser, e abrase o âmago de minha alma; para que no dia de minha morte eu apareça diante de vós inteiramente consumido em vosso amor.
Amém.`,
        textLatim: `Tu es Christus, pater meus sanctus, Deus meus pius, rex meus magnus, pastor meus bonus, magister meus unus, adjutor meus optimus, dilectus meus pulcherrimus, panis meus vivus, sacerdos meus in aeternum, dux meus ad patriam, lux mea vera, dulcedo mea sancta, via mea recta, sapientia mea praeclara, simplicitas mea pura, concordia mea pacifica, custodia mea tota, portio mea bona, salus mea sempiterna.

Christe Jesu, amabilis Domine, cur amavi, quare concupivi in omni vita mea quidquam praeter te, Jesum Deum meum? Ubi eram quando tecum mente non eram? Ah! saltem ex hoc momento cor meum solum te desideret et per te incalescat, Domine Jesu!

Desideria animae meae, currite, quod satis hactenus tardastis; properate ad finem quem aspiratis; quaerite vere quem quaeritis. O Jesu, anathema sit qui non amat te. Qui non amat te amaritudinibus repleatur.

O dulcis Jesu, sis amor, deliciae, admiratio omnis cordis digne consecrati gloriae tuae. Deus cordis mei et portio mea, Jesu Christe, deficitiat cor meum spiritu suo, et vivas tu in me, et sis ipse vita mea.

Accendatur in anima mea pruna ardens amoris tui et convertatur in incendium totum divinum, ut ardeat in aeternum in ara cordis mei; quod inflammet intima mei esse, et flagret medullas animae meae; ut in die consummationis meae consummatus appaream coram te totus in amore tuo consumptus.
Amen.`,
      },
      {
        id: "oracao-sao-boaventura",
        titlePortugues: "Oração de São Boaventura",
        titleLatim: "Oratio Sancti Bonaventurae",
        textPortugues: `Feri, dulcíssimo Jesus, o mais íntimo e profundo do meu ser com o dardo suavíssimo e salutar do vosso amor, com aquela santíssima e inalterável caridade que foi brasão e timbre dos vossos Apóstolos, para que a minha alma se deleite e enterneça com a febre sempre crescente de Vos querer mais.

Dai à minha alma que se queime em desejos de Vós, que desfaleça nos vossos átrios, e deseje dissolver-se e confundir-se convosco. 

Que tenha fome de Vós, ó Pão dos Anjos, Pão das almas santas, Pão nosso de cada dia, supersubstancial, fonte inexaurível de paz e suavidade. Ó Vós, a Quem unicamente os Anjos desejam contemplar!

Oh! que o meu coração tenha fome de Vós, que só de Vós se alimente, e que só do prazer que de Vós deriva se comovam as entranhas do meu ser; que só de Vós tenha sede, ó fonte da vida e da sabedoria, da ciência e da luz eterna; ó torrente de todos os prazeres, ó riqueza da casa de Deus, só por Vós anseie, só a Vós procure, só a Vós encontre, só para Vós caminhe, só a Vós alcance, só em Vós pense, só de Vós fale, e tudo o que fizer seja para honra e glória do vosso nome, com humildade e discrição, com prazer e amor, com alegria e afeto, com perseverança até o fim.

Sede, Senhor, a minha única esperança: só em Vós confie, só de Vós seja rico, só em Vós me regozije e alegre, ó meu descanso, ó minha paz, ó meu amor, aroma que me inebriais, doçura que me deleitais, pão que me revigorais, refúgio que me defendeis, auxílio que me escudais, sabedoria que me iluminais, herança e tesouro que espero. 

Em Quem só a minha alma e o meu coração vivam e se radiquem de maneira firme e inabalável. Amém.`,
        textLatim: `Feri, dulcissime Iesu, intima et profundiora mei esse sagitta suavissima ac salutari amoris tui, cum illa sanctissima et incommutabili caritate quae fuit insigne et signum Apostolorum tuorum, ut anima mea delectetur et intenerescat febre semper crescente te plus amandi.

Da animae meae ut ardeat desideriis tui, deficiat in atriis tuis, et cupiat dissolvi et confundi tecum.

Ut esuriat te, o Panis Angelorum, Panis animarum sanctarum, Panis noster quotidianus, supersubstantialis, fons inexhaustus pacis et suavitatis. O Tu, quem solum Angeli desiderant contemplari!

Oh! ut cor meum esuriat te, solo te pascatur, et solo gaudio quod a te derivatur commoveantur viscera mei esse; solo te sitiat, o fons vitae et sapientiae, scientiae et lucis aeternae; o torrens omnium voluptatum, o divitiae domus Dei, solum te exspectet, solum te quaerat, solum te inveniat, solum ad te ambulet, solum te assequatur, solum de te cogitet, solum de te loquatur, et quidquid faciat sit in honorem et gloriam nominis tui, cum humilitate et discretione, cum voluptate et amore, cum gaudio et affectu, cum perseverantia usque in finem.

Sis, Domine, unica spes mea: in te solo confidam, de te solo dives sim, in te solo gaudeam et laeter, o requies mea, o pax mea, o amor meus, aroma quod me inebrias, dulcedo quod me delectas, panis quod me refocillas, refugium quod me defendis, auxilium quod me protegis, sapientia quod me illuminas, hereditas et thesaurus quem spero.

In quo sola anima mea et cor meum vivant et radicentur modo firma et incommutabili. Amen.`,
      },
      {
        id: "oracao-universal-clemente-xi",
        titlePortugues: "Oração universal atribuída ao Papa Clemente XI",
        titleLatim: "Oratio universalis attributa Papae Clementi XI",
        textPortugues: `Meu Deus, eu creio em vós, mas fortificai a minha fé; espero em vós, mas tornai mais confiante a minha esperança; eu vos amo, mas afervorai o meu amor; arrependo-me de ter pecado, mas aumentai o meu arrependimento. 

Eu vos adoro como primeiro princípio, eu vos desejo como fim último; eu vos louvo como benfeitor perpétuo, eu vos invoco como benévolo defensor. 

Que vossa sabedoria me dirija, vossa justiça me contenha, vossa clemência me console, vosso poder me proteja. 

Meu Deus, eu vos ofereço meus pensamentos, para que só pense em vós; minhas palavras, para que só fale em vós; minhas ações, para que sejam do vosso agrado; meus sofrimentos, para que sejam por vosso amor. 

Quero o que quiserdes, porque o que quereis como o quereis, e enquanto o quereis. Senhor eu vos peço: iluminai minha inteligência, inflamai minha vontade, purificai meu coração e santificai minha alma. 

Dai-me chorar os pecados passados, repelir as tentações futuras, corrigir as más inclinações e praticar as virtudes do meu estado. 

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
        id: "adoro-te-devote",
        titlePortugues: "Adoro Te Devote",
        titleLatim: "Adoro Te Devote",
        textPortugues: `Eu te adoro, ó Cristo, Deus no santo altar,
no teu sacramento vivo a palpitar!
Dou-te, sem partilha, vida e coração;
pois de amor me inflamo na contemplação.

Tato e vista falham, bem como o sabor;
só por meu ouvido tem a fé vigor.
Creio o que disseste, ó Jesus, meu Deus,
Verbo da Verdade, vindo a nós dos céus.

Tua divindade não se viu na cruz,
nem a humanidade vê-se aqui, Jesus;
ambas eu confesso como o bom ladrão,
e um lugar espero na eternal mansão.

Não me deste a dita como a São Tomé,
de tocar as chagas, mas eu tenho fé.
Faze que ela cresça com o meu amor,
e minha esperança tenha novo ardor.

Dos teus sofrimentos é memorial,
este pão de vida, pão celestial;
dele eu sempre queira mais me alimentar,
sentir-lhe a doçura divinal sem par.

Bom Pastor piedoso, Cristo, meu Senhor,
lava no teu sangue a mim pecador,
pois que uma só gota pode resgatar
do pecado o mundo e o purificar.

Ora te contemplo, com espesso véu,
mas desejo ver-te, bom Jesus, no céu.
Face a face um dia, hei de ti gozar,
nessa doce Pátria sem fim te amar.
Amém.`,
        textLatim: `Adoro te devote, latens Deitas,
Quae sub his figuris vere latitas.
Tibi se cor meum totum subiicit,
Quia te contemplans totum deficit.

Visus, tactus, gustus in te fallitur,
Sed auditu solo tuto creditur.
Credo quidquid dixit Dei Filius;
Nil hoc verbo veritatis verius.

In cruce latebat sola Deitas,
At hic latet simul et humanitas;
Ambo tamen credens atque confitens,
Peto quod petivit latro paenitens.

Plagas, sicut Thomas, non intueor,
Deum tamen meum te confiteor.
Fac me tibi semper magis credere,
In te spem habere, te diligere.

O memoriale mortis Domini,
Panis vivus vitam praestans homini:
Praesta meae menti de te vivere
Et te illi semper dulce sapere.

Pie pellicane, Iesu Domine,
Me immundum munda tuo sanguine,
Cuius una stilla salvum facere
Totum mundum quit ab omni scelere.

Iesu, quem velatum nunc aspicio,
Oro fiat illud quod tam sitio;
Ut, te revelata cernens facie,
Visu sim beatus tuae gloriae.
Amen.`,
      },
      {
        id: "aspiracoes-fervorosas",
        titlePortugues: "Aspirações fervorosas",
        titleLatim: "Aspirationes ferventes",
        textPortugues: `Ó Coração ardente de Jesus, abrasai meu pobre coração.

Ó Chagas de Jesus, penetrai-me com uma seta de amor para com Jesus.

Ó Sangue de Jesus, inebriai-me de amor para com Jesus.

Ó Agonia de Jesus, ajudai-me suportar com resignação minha última agonia.

Ó Sofrimentos de Jesus, dai-me paciência nas contrariedades.

Ó Açoites de Jesus, preservai-me do desespero eterno.

Ó Morte de Jesus, fazei-me morrer para todo amor que não seja por Jesus.

Ó Lágrimas de Maria, obtende-me a graça de chorar os meus pecados.

Ó São José, por vossa bendita morte, alcançai que a minha seja boa.`,

        textLatim: `O Cor ardens Iesu, incende cor meum pauper.

O Vulnera Iesu, transfige me sagitta amoris erga Iesum.

O Sanguis Iesu, inebria me amore erga Iesum.

O Agonia Iesu, adiuva me sustinere cum resignatione ultimam agoniam meam.

O Dolores Iesu, da mihi patientiam in adversitatibus.

O Flagella Iesu, conserva me a desperatione aeterna.

O Mors Iesu, fac me mori omni amori qui non sit erga Iesum.

O Lacrimae Mariae, impetrate mihi gratiam flere peccata mea.

O Sancte Ioseph, per beatam mortem tuam, impetra ut mea bona sit.`,

      },
      {
        id: "ave-verum-corpus",
        titlePortugues: "Ave Verum Corpus",
        titleLatim: "Ave Verum Corpus",
        textPortugues: `Salve, ó verdadeiro corpo nascido da Virgem Maria
Que verdadeiramente padeceu e foi imolado na cruz pelo homem.
De seu lado transpassado fluiu água e sangue.
Sê para nós uma antecipação na provação da morte.
Ó doce Jesus, ó bom Jesus, ó Jesus filho de Maria.`,
        textLatim: `Ave verum corpus natum de Maria Virgine,
Vere passum, immolatum in cruce pro homine.
Cuius latus perforatum fluxit aqua et sanguine.
Esto nobis praegustatum mortis in examine.
O Iesu dulcis, o Iesu pie, o Iesu fili Mariae.`,
      },
      {
        id: "comunhao-espiritual",
        titlePortugues: "Comunhão espiritual (Santo Afonso Maria de Ligório)",
        titleLatim: "Communio spiritualis (Sanctus Alphonsus Maria de Ligorio)",
        textPortugues: `Meu Jesus,
Eu creio que estais presente
no Santíssimo Sacramento do Altar.
Amo-vos sobre todas as coisas,
e minha alma suspira por Vós.
Mas como não posso receber-Vos
agora no Santíssimo Sacramento,
vinde, ao menos espiritualmente,
ao meu coração.
Abraço-me convosco como se já
estivésseis comigo:
uno-me convosco inteiramente.
Ah! Não permitais que torne a
separar-me de vós!

Aos vossos pés,
ó meu Jesus,
me prostro e vos ofereço
o arrependimento do meu coração
que mergulha no seu nada
na Vossa santa presença.

Eu vos adoro no Sacramento do vosso amor, a inefável Eucaristia.
Desejo receber-vos na pobre morada
que meu coração vos oferece.
À espera da felicidade da comunhão sacramental,
quero possuir-vos em Espírito.

Vinde a mim,
ó meu Jesus,
que eu venha a vós.
Que o vosso amor
possa inflamar todo o meu ser,
para a vida e para a morte.
Creio em vós,
espero em vós.
Amo-vos.
Assim seja.`,
        textLatim: `Mi Iesu,
Credo te praesentem esse
in sacratissimo Sacramento Altaris.
Amo te super omnia,
et anima mea suspirat te.
Sed quia non possum te recipere
nunc in sacratissimo Sacramento,
veni, saltem spiritualiter,
in cor meum.
Amplector te quasi si iam
adesses mecum:
unior tecum omnino.
Ah! Ne permittas me iterum
separari a te!

Ad pedes tuos,
o mi Iesu,
me prosterno et tibi offero
paenitentiam cordis mei
quod mergitur in suo nihilo
in tua sancta praesentia.

Te adoro in Sacramento amoris tui, Eucharistia ineffabili.
Desidero te recipere in paupere habitaculo
quod cor meum tibi offert.
Exspectans felicitatem communionis sacramentalis,
te possidere in Spiritu volo.

Veni ad me,
o mi Iesu,
ut ego veniam ad te.
Ut amor tuus
totum esse meum inflammare possit,
pro vita et pro morte.
Credo in te,
spero in te.
Amo te.
Ita fiat.`,
      },
      {
        id: "oracao-coracao-esmagado",
        titlePortugues: "Oração ao Coração Esmagado de Jesus",
        titleLatim: "Oratio ad Cor Iesu contritum",
        textPortugues: `Coração de Jesus, esmagado por causa dos nossos pecados,
Coração entristecido e martirizado por tantos crimes e faltas,
Coração, vítima de todas as iniquidades,
Eu Vos amo com toda a minha alma e acima de todas as coisas.

Eu Vos amo por aqueles que Vos desprezam e Vos abandonam,
Eu Vos amo por aqueles que Vos ultrajam e Vos impedem de reinar,
Eu Vos amo por aqueles que Vos deixam sozinho na Sagrada Eucaristia,
Eu Vos amo pelas almas ingratas que ousam profanar o vosso Sacramento de Amor com seus insultos e sacrilégios.

Coração de Jesus, perdoai os pecadores: eles não sabem o que fazem!
Coração de Jesus, ajudai os que propagam o vosso Nome Santo!
Coração de Jesus, ajudai a todos os que sofrem e lutam!
Coração de Jesus, fazei que a sociedade se inspire em tudo no vosso Evangelho, única salvaguarda da justiça e da paz!

Coração de Jesus, que as famílias e as nações proclamem os vossos direitos!
Coração de Jesus, reinai na minha Pátria!
Coração de Jesus, venha a nós o vosso Reino, pelo Coração Imaculado de Maria! Amém.`,
        textLatim: `Cor Iesu, contritum propter peccata nostra,
Cor contristatum et martyrizatum tot criminibus et culpis,
Cor, victima omnium iniquitatum,
Amo te tota anima mea et super omnia.

Amo te pro illis qui te contemnunt et te derelinquunt,
Amo te pro illis qui te contumeliis afficiunt et te impediunt regnare,
Amo te pro illis qui te solum relinquunt in Sacra Eucharistia,
Amo te pro animis ingratis quae audent profanare Sacramentum Amoris tui cum suis contumeliis et sacrilegiis.

Cor Iesu, dimitte peccatoribus: nesciunt quid faciunt!
Cor Iesu, adiuva eos qui nomen tuum sanctum propagant!
Cor Iesu, adiuva omnes qui patiuntur et pugnant!
Cor Iesu, fac ut societas in omnibus Evangelio tuo inspiretur, unica tutela iustitiae et pacis!

Cor Iesu, ut familiae et nationes iura tua proclament!
Cor Iesu, rena in Patria mea!
Cor Iesu, adveniat regnum tuum, per Cor Immaculatum Mariae! Amen.`,
      },
      {
        id: "iesu-dulcis-memoria",
        titlePortugues: "Jesu Dulcis Memoria",
        titleLatim: "Iesu Dulcis Memoria",
        textPortugues: `Doce é a lembrança de Jesus,
Ele dá as verdadeiras alegrias do coração;
Mais que o mel e todas as coisas
doce é a sua presença.

Não se canta nada mais suave,
nada se ouve de mais agradável,
nenhum pensamento é mais doce
que Jesus, o Filho de Deus.

Ó Jesus, esperança dos penitentes!
Como sois terno para os que vos imploram,
Como sois bom para os que Vos procuram,
Mas o que sois para os que Vos encontram!

Não há palavra que o diga,
Nem letra que saiba exprimir:
Só quem experimentou pode crer,
O que seja amar Jesus.

Sede, Jesus, nossa alegria,
Vós que haveis de ser o nosso prêmio:
Que a nossa glória repouse em Vós
Por todos os séculos dos séculos. Amém.`,
        textLatim: `Iesu dulcis memoria,
Dans vera cordis gaudia;
Sed super mel et omnia,
Eius dulcis praesentia.

Nil canitur suavius,
Nil auditur iucundius,
Nil cogitatur dulcius.
Quam Iesus Dei Filius.

Iesu, spes paenitentibus,
Quam pius es petentibus!
Quam bonus te quaerentibus!
Sed quid invenientibus?

Nec lingua valet dicere,
Nec littera exprimere:
Expertus potest credere,
Quid sit Iesum diligere.

Sis, Iesu, nostrum gaudium,
Qui es futurus praemium:
Sit nostra in te gloria,
Per cuncta semper saecula. Amen.`,
      },
      {
        id: "lauda-sion-salvatorem",
        titlePortugues: "Lauda Sion Salvatorem",
        titleLatim: "Lauda Sion Salvatorem",
        textPortugues: `Sião, louva o Salvador,
Louva o teu guia e pastor
Com hinos e cantos.
O quanto podes, tanto ousa,
Pois maior que qualquer louva,
E louvá-lo não te basta.

O tema especial de louvor,
Pão vivo e vital
Hoje é proposto.
Que na mesa da santa Ceia
À multidão dos doze irmãos
Foi dado, não se duvida.

Seja o louvor pleno, sonoro;
Seja alegre, seja digno
O júbilo da mente.
Pois celebra-se o dia solene
Em que da mesa se recorda
A primeira instituição.

Nesta mesa do novo Rei,
A nova Páscoa da nova lei
Termina a Páscoa antiga.
A novidade expulsa a velhice,
A verdade dissipa a sombra,
A luz elimina a noite.

O que Cristo fez na Ceia,
Para fazê-lo expressou
Em sua memória.
Instruídos nos sagrados ritos,
O pão, o vinho em sacrifício
Consagramos.

É dogma dado aos cristãos
Que em carne se transubstancia o pão
E o vinho em sangue.
O que não captas, o que não vês,
A alma firme com fé sustenta
Além da ordem das coisas.

Sob diversas espécies,
Sinais apenas e não coisas,
Estão ocultas realidades excelsas.
Carne é alimento, sangue é bebida,
Mas permanece Cristo todo
Sob cada uma das espécies.

Por quem recebe não é cortado,
Não é quebrado, não é dividido,
Inteiro é recebido.
Recebe um, recebem mil,
Tanto estes quanto aquele,
Nem recebido é consumido.

Recebem os bons, recebem os maus,
Porém com sorte desigual
De vida ou de perdição.
Morte é para os maus, vida para os bons:
Vede como da mesma recepção
É diferente a saída.

Quebrado enfim o Sacramento,
Não vaciles, mas lembra-te
Que tanto está sob o fragmento
Quanto sob o todo se encerra.

Nenhuma divisão da realidade ocorre,
Apenas do sinal há quebra
Pela qual nem o estado nem a estatura
Do significado diminuem.

Eis o pão dos anjos
Feito alimento dos peregrinos,
Verdadeiramente pão dos filhos,
Não para ser lançado aos cães.

Em figuras foi prefigurado,
Quando Isaac foi imolado,
O cordeiro pascal foi designado,
O maná foi dado aos pais.

Bom Pastor, pão verdadeiro,
Jesus nosso, tem piedade,
Tu nos alimenta, protege-nos,
Faze-nos ver os bens
Na terra dos viventes.

Tu que tudo sabes e podes,
Que nos alimentas aqui mortais,
Faze-nos ali teus companheiros,
Co-herdeiros e consócios
Dos santos cidadãos.
Amém.`,
        textLatim: `Lauda, Sion, Salvatorem, 
Lauda ducem et pastorem 
In hymnis et canticis.
Quantum potes, tantum aude, 
Quia maior omni laude, 
Nec laudare sufficis.

Laudis thema specialis, 
Panis vivus et vitalis 
Hodie proponitur.
Quem in sacrae mensa coenae 
Turbae fratrum duodenae 
Datum non ambigitur.

Sit laus plena, sit sonora; 
Sit iucunda, sit decora 
Mentis iubilatio.
Dies enim solemnis agitur 
In qua mensae prima recolitur 
Huius institutio.

In hac mensa novi Regis, 
Novum pascha novae legis 
Phase vetus terminat.
Vetustatem novitas, 
Umbram fugat veritas, 
Noctem lux eliminat.

Quod in coena Christus gessit 
Faciendum hoc expressit 
In sui memoriam.
Docti sacris institutis, 
Panem, vinum in salutis 
Consecramus hostiam.

Dogma datur christianis 
Quod in carnem transit panis 
Et vinum in sanguinem.
Quod non capis, quod non vides 
Animosa firmat fides 
Praeter rerum ordinem.

Sub diversis specieibus, 
Signis tantum et non rebus, 
Latent res eximiae.
Caro cibus, sanguis potus, 
Manet tamen Christus totus 
Sub utraque specie.

A sumente non concisus, 
Non confractus, non divisus, 
Integer accipitur.
Sumit unus, sumunt mille, 
Quantum isti tantum ille, 
Nec sumptus consumitur.

Sumunt boni, sumunt mali, 
Sorte tamen inaequali 
Vitae vel interitus.
Mors est malis, vita bonis: 
Vide paris sumptionis 
Quam sit dispar exitus.

Fracto demum Sacramento, 
Ne vacilles, sed memento 
Tantum esse sub fragmento 
Quantum toto tegitur.

Nulla rei fit scissura, 
Signi tantum fit fractura 
Qua nec status nec statura 
Signati minuitur.

Ecce panis angelorum 
Factus cibus viatorum, 
Vere panis filiorum 
Non mittendus canibus.

In figuris praesignatur, 
Cum Isaac immolatur, 
Agnus paschae deputatur, 
Datur manna patribus.

Bone Pastor, panis vere, 
Iesu nostri miserere, 
Tu nos pasce, nos tuere, 
Tu nos bona fac videre 
In terra viventium.

Tu qui cuncta scis et vales 
Qui nos pascis hic mortales, 
Tuos ibi commensales, 
Coheredes et sodales 
Fac sanctorum civium.
Amen.`,
      },
      {
        id: "o-sacrum-convivium",
        titlePortugues: "O Sacrum Convivium",
        titleLatim: "O Sacrum Convivium",
        textPortugues: `Ó sagrado banquete!
em que Cristo é recebido;
a memória da sua paixão é renovada;
a mente se enche de graça;
e nos é dado penhor da glória futura.
Aleluia.`,
        textLatim: `O sacrum convivium!
In quo Christus sumitur:
Recolitur memoria passionis eius:
Mens impletur gratia:
Et futurae gloriae nobis pignus datur.
Alleluia.`,
      },
      {
        id: "pange-lingua-gloriosi",
        titlePortugues: "Pange Lingua Gloriosi",
        titleLatim: "Pange Lingua Gloriosi",
        textPortugues: `Canta, ó língua, o mistério
do Corpo glorioso
e do precioso Sangue
que, para resgate do mundo,
o Rei das nações, fruto de ventre generoso,
verteu.

Dado a nós, por nós nascido
da Virgem intacta,
e no mundo vivido,
espalhando a semente da palavra,
encerrou sua permanência
com maravilhosa ordem.

Na noite da última Ceia,
reclinado com os irmãos,
observada plenamente a lei
nos alimentos legais,
como alimento à turba dos doze
se dá com suas próprias mãos.

O Verbo feito carne, o pão verdadeiro
com a palavra faz carne,
e torna-se sangue de Cristo o vinho puro,
e se os sentidos falham,
para confirmar o coração sincero
basta só a fé.

Ao tão grande Sacramento
veneremos, pois, curvados;
e o antigo testamento
ceda ao novo rito;
preste a fé suplemento
à falha dos sentidos.

Ao Gerador, e ao Gerado
louvor e júbilo,
salvação, honra, virtude também
seja e bênção:
ao que de ambos procede
igual seja o louvor.
Amém.`,
        textLatim: `Pange, lingua, gloriósi
Córporis mystérium,
Sanguinísque pretiósi,
Quem in mundi prétium
Fructus ventris generósi
Rex effúdit géntium.

Nobis datus, nobis natus
Ex intácta Vírgine,
Et in mundo conversátus,
Sparso verbi sémine,
Sui moras incolátus
Miro clausit órdine.

In suprémæ nocte coenæ
Recúmbens cum frátribus
Observáta lege plene
Cibis in legálibus,
Cibum turbæ duodénæ
Se dat suis mánibus.

Verbum caro, panem verum
Verbo carnem éfficit:
Fitque sanguis Christi merum,
Et si sensus déficit,
Ad firmándum cor sincérum
Sola fides súfficit.

Tantum ergo Sacramentum
Venerémur cérnui:
Et antíquum documéntum
Novo cedat rítui:
Præstet fides suppleméntum
Sénsuum deféctui.

Genitóri, Genitóque
Laus et jubilátio,
Salus, honor, virtus quoque
Sit et benedíctio:
Procedénti ab utróque
Compar sit laudátio.
Amen.`,
      },
      {
        id: "sacris-solemniis",
        titlePortugues: "Sacris Solemniis",
        titleLatim: "Sacris Solemniis",
        textPortugues: `Às sagradas solenidades unam-se alegrias,
E do mais íntimo do coração ressoem louvores;
Afastem-se as coisas antigas, tudo seja renovado:
Os corações, as vozes e as obras.

Comemora-se a ceia derradeira daquela noite,
Na qual se crê que Cristo deu o Cordeiro e os pães ázimos
Aos irmãos, segundo o preceito da lei
Concedido outrora aos antigos pais.

Ao Se fazer Cordeiro e acabada a Ceia,
O Corpo do Senhor foi dado aos discípulos.
Assim, o mesmo Corpo, inteiro a todos, inteiro a cada um,
Confessamos que foi dado por suas próprias mãos.

Deu aos fracos, seu Corpo em alimento,
E aos tristes o cálice de seu Sangue,
Dizendo: "Tomai este cálice que vos entrego;
E bebei todo dele."

Assim instituiu o novo sacrifício,
Cujo ministério quis confiar
Aos sacerdotes somente, a quem convém
Que recebam e distribuam aos outros.

O pão dos Anjos torna-se pão dos homens;
O pão do céu põe fim aos velhos símbolos.
Oh coisa admirável! Alimentam-se do Senhor
O pobre, o servo e o humilde.

A Vós, Deus Uno e Trino, humildemente suplicamos:
Que nos visites enquanto te adoramos;
Por Teus caminhos, conduz-nos ao nosso fim,
De chegar à luz onde habitas. Amen.`,
        textLatim: `Sacris solemniis juncta sint gaudia,
Et ex praecordiis sonent praeconia;
Recedant vetera, nova sint omnia,
Corda, voces et opera.

Noctis recolitur coena novissima,
Qua Christus creditur agnum et azyma
Dedisse fratribus, juxta legitima,
Priscis indulta patribus.

Post agnum typicum, expletis epulis,
Corpus Dominicum datum Discipulis.
Sic totum omnibus, quod totum singulis,
Ejus fatemur manibus.

Dedit fragilibus corporis ferculum,
Dedit et tristibus sanguinis poculum,
Dicens: Accipite quod trado vasculum;
Omnes ex eo bibite.

Sic sacrificium istud instituit,
Cujus officium committi voluit,
Solis presbyteris, quibus sic congruit,
Ut sumant et dent ceteris.

Panis angelicus fit panis hominum;
Dat panis caelicus figuris terminum.
O res mirabilis! manducat Dominum
Pauper, servus et humilis.

Te, trina Deitas unaque, poscimus,
Sic nos Tu visita, sicut Te colimus;
Per tuas semitas duc nos quo tendimus,
Ad lucem quam inhabitas. Amen.`,
      },
      {
        id: "verbum-supernum-prodiens",
        titlePortugues: "Verbum Supernum Prodiens",
        titleLatim: "Verbum Supernum Prodiens",
        textPortugues: `O Verbo Supremo que procede,
sem deixar a destra do Pai,
saiu a realizar Sua obra
e veio ao entardecer da vida.

Foi entregue à morte por um discípulo seu
que O traiu a Seus inimigos,
antes, no banquete da vida
Se deu aos seus discípulos.

Sob duas espécies sagradas,
deu-lhes seu Corpo e Sangue,
para com tal dupla substância
alimentasse plenamente o homem.

Ao nascer, deu-se como companheiro,
ao cear com os Doze, como alimento,
morrendo, deu-se como preço,
reinando, dá-se como prêmio.

Ó Hóstia Salutar,
que abres as portas do céu,
na guerra perene e hostil,
dá-nos força, traz auxílio!

Ao Senhor Uno e Trino,
seja glória eterna;
que a vida sem fim
nos conceda na Pátria Celestial. Amen.`,
        textLatim: `Verbum supernum prodiens,
Nec Patris linquens dexteram,
Ad opus suum exiens,
Venit ad vitae vesperam.

In mortem a discipulo
Suis tradendus aemulis,
Prius in vitae ferculo
Se tradidit discipulis.

Quibus sub bina specie
Carnem dedit et sanguinem;
Ut duplicis substantiae
Totum cibaret hominem.

Se nascens dedit socium,
Convescens in edulium,
Se moriens in pretium,
Se regnans dat in praemium.

O salutaris Hostia,
Quae caeli pandis ostium,
Bella premunt hostilia,
Da robur, fer auxilium.

Uni trinoque Domino
Sit sempiterna gloria,
Qui vitam sine termino
Nobis donet in patria. Amen.`,
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
  {
    categoryId: "oracoes-diversas",
    categoryTitle: "Orações Diversas",
    prayers: [
      {
        id: "oracao-sagrada-familia",
        titlePortugues: "Oração à Sagrada Família",
        titleLatim: "Oratio ad Sanctam Familiam",
        textPortugues: `Jesus, Maria e José,
em Vós contemplamos
o esplendor do verdadeiro amor,
confiantes, a Vós nos consagramos.

Sagrada Família de Nazaré,
tornai também as nossas famílias
lugares de comunhão e cenáculos de oração,
autênticas escolas do Evangelho
e pequenas igrejas domésticas.

Sagrada Família de Nazaré,
que nunca mais haja nas famílias
episódios de violência, de fechamento e divisão;
e quem tiver sido ferido ou escandalizado
seja rapidamente consolado e curado.

Sagrada Família de Nazaré,
fazei que todos nos tornemos conscientes
do carácter sagrado e inviolável da família,
da sua beleza no projecto de Deus.

Jesus, Maria e José,
ouvi-nos e acolhei a nossa súplica.
Ámen.`,
        textLatim: `Iesu, Maria et Ioseph,
in vobis contemplamur
splendor veri amoris,
fidentes, vobis nos consecramus.

Sancta Familia Nazarena,
facite etiam familias nostras
locos communionis et cenacula orationis,
authenticas scholae Evangelii
et parvas ecclesias domesticas.

Sancta Familia Nazarena,
ut numquam amplius in familiis
episodia violentiae, clausurae et divisionis sint;
et qui laesus vel scandalizatus fuerit
cito consoleretur et curetur.

Sancta Familia Nazarena,
facite ut omnes conscii efficiamur
characteris sacri et inviolabilis familiae,
eius pulchritudinis in consilio Dei.

Iesu, Maria et Ioseph,
audite nos et accipite preces nostras.
Amen.`,
      },
      {
        id: "hino-sagrada-familia",
        titlePortugues: "Hino da Sagrada Família",
        titleLatim: "Hymnus Sanctae Familiae",
        textPortugues: `Ó Altíssima Esperança dos mortais,
bendita Luz dos Santos lá do alto,
ó Jesus, sobre cuja
casa de infância sorriu com amor bondoso;

E tu, cujo seio o amamentou,
ó Maria, tão agraciada,
cujo peito deu leite a Jesus,
cujos braços teu Deus abraçou.

E tu, dentre todos os homens, escolhido
para guardar a fama da Virgem,
a quem o Filho de Deus não negou
o nome misericordioso de Pai.

Nascido para a cura da nação,
da nobre linhagem de Jessé,
eis os suplicantes ajoelhados,
ó, ouçam o clamor do pecador!

O sol retornou ao entardecer,
o crepúsculo tomou conta do ar:
nós, permanecendo aqui diante de ti,
derramamos nossa sincera prece.

Sua casa era como um jardim
repleto das mais belas flores;
que a vida floresça docemente
em todos os nossos lares.

Louvado sejas Tu, ó Jesus,
a quem os pais obedeces;
louvor ao Pai soberano
e Paráclito para sempre.`,
        textLatim: `O Lux beata caelitum
Et summa spes mortalium
Iesu, o cui domestica
Arrisit orto caritas:

Maria, dives gratia,
O sola quae casto potes
Fovere Iesum pectore,
Cum lacte donans oscula:

Tuque ex vetustis partibus
Delecte custos Virginis,
Dulci patris quem nomine
Divina Proles invocat:

De stirpe Iesse nobili
Nati in salutem gentium,
Audite nos, qui supplices
Vestras ad aras sistimus.

Dum sol redux ad vesperum
Rebus nitorem detrahit,
Nos hic manentes intimo
Ex corde vota fundimus.

Qua vestra sedes floruit
Virtutis omnis gratia,
Hanc detur in domesticis
Referere posse moribus.

Iesu, tuis oboediens
Qui factus es parentibus,
Cum Patre summo ac Spiritu
Sempre tibi sit gloria.`,
      },
      {
        id: "sao-miguel-arcanjo",
        titlePortugues: "São Miguel Arcanjo",
        titleLatim: "Sancte Michael Archangele",
        textPortugues: `São Miguel Arcanjo, defendei-nos no combate.
Sede o nosso refúgio contra as maldades e ciladas do demônio.
Que Deus manifeste o seu poder sobre ele. Eis a nossa humilde súplica.
E vós, Príncipe da Milícia Celeste, com o poder que Deus vos conferiu,
precipitai no inferno Satanás e os outros espíritos malignos,
que andam pelo mundo tentando as almas. Amém.`,
        textLatim: `Sancte Michael Archangele, defende nos in proelio.
Contra nequitiam et insidias diaboli esto praesidium.
Imperet illi Deus, supplices deprecamur.
Tuque, Princeps militiae caelestis, Satanam aliosque spiritus malignos,
qui ad perditionem animarum pervagantur in mundo, divina virtute in infernum detrude.
Amen.`,
      },
      {
        id: "antes-de-qualquer-atividade-1",
        titlePortugues: "Antes de qualquer atividade (1)",
        titleLatim: "Ante quamlibet actionem (1)",
        textPortugues: `Dai-nos, Senhor, nós vos pedimos, o auxílio da vossa graça, a fim de cumprirmos, sob a vossa operação, o que por vossa autoridade sabemos ser o nosso dever. Por Cristo, Senhor nosso. Amém.`,
        textLatim: `Praesta nobis, quaesumus Domine, auxilium gratiae tuae, ut quae, te auctore, facienda cognovimus, te operante impleamus. Per Christum Dominum nostrum. Amen.`,
      },
      {
        id: "antes-de-qualquer-atividade-2",
        titlePortugues: "Antes de qualquer atividade (2)",
        titleLatim: "Ante quamlibet actionem (2)",
        textPortugues: `Dai-nos, nós vos pedimos, Deus todo-poderoso, que, meditando sempre o que é conforme à razão, levemos a cabo por palavras e obras o que é do vosso agrado. Por Cristo, Senhor nosso. Amém.`,
        textLatim: `Praesta, quaesumus omnipotens Deus, ut semper rationabilia meditantes, quae tibi sunt placita et dictis exequamur et factis. Per Christum Dominum nostrum. Amen.`,
      },
      {
        id: "oracao-antes-estudos-santo-tomas",
        titlePortugues: "Oração antes dos estudos (Santo Tomás de Aquino)",
        titleLatim: "Oratio ante studia (Sanctus Thomas Aquinas)",
        textPortugues: `Criador inefável, que, em meio aos tesouros de Vossa Sabedoria, elegestes três hierarquias de anjos e as dispusestes em uma ordem admirável acima dos Céus, que dispusestes com tanta beleza as partes do universo; Vós, a quem chamamos a verdadeira Fonte de Luz e de Sabedoria, e o Princípio supereminente, dignai-vos derramar sobre as trevas de minha inteligência um raio de Vossa clareza. Afastai para longe de mim a dupla obscuridade na qual nasci: o pecado e a ignorância.

Vós, que tornais eloquente a língua das criancinhas, modelai minha palavra e derramai nos meus lábios a graça de Vossa bênção. Dai-me a penetração da inteligência, a faculdade de lembrar-me, o método e a facilidade do estudo, a profundidade na interpretação e uma graça abundante de expressão.

Fortificai meu estudo, dirigi o seu curso, aperfeiçoa o seu fim, Vós que sois verdadeiro Deus e verdadeiro homem, e que viveis nos séculos dos séculos. Amém.`,
        textLatim: `Creator ineffabilis, qui de thesauris sapientiae tuae tres Angelorum hierarchias designasti et eas super caelum empyreum miro ordine collocasti atque universi partes elegantissime distribuisti: tu, inquam, qui verus fons luminis et sapientiae diceris ac supereminens principium, infundere digneris super intellectus mei tenebras tuae radium claritatis, duplices, in quibus natus sum, a me removens tenebras, peccatum scilicet et ignorantiam.

Tu, qui linguas infantium facis disertas, linguam meam erudias atque in labiis meis gratiam tuae benedictionis infundas. Da mihi intelligendi acumen, retinendi capacitatem, addiscendi modum et facilitatem, interpretandi subtilitatem, loquendi gratiam copiosam.

Ingressum instruas, progressum dirigas, egressum compleas. Tu, qui es verus Deus et homo, qui vivis et regnas in saecula saeculorum. Amen.`,
      },
      {
        id: "oracao-anjo-guarda-sao-joao-berchmans",
        titlePortugues: "Oração ao Anjo da Guarda (São João Berchmans)",
        titleLatim: "Oratio ad Angelum Custodem (Sanctus Ioannes Berchmans)",
        textPortugues: `Santo Anjo, amado de Deus, que me acolheu, por disposição divina, sob a tua bendita tutela, nunca deixes de me defender, de me iluminar e de me dirigir.
Te venero como protetor, submeto-me à sua direção e lhe entrego tudo para ser governado por você.

Rogo-te, portanto, e pelo amor de Jesus Cristo, rogo-te que, quando sou ingrato a ti e teimosamente surdo às tuas inspirações, não queiras, apesar disso, me abandonar.
Coloque-me rapidamente no caminho certo, se eu me desviei dele; ensina-me, se sou ignorante; levanta-me, se eu cair; apoie-me se estiver em perigo e leve-me ao céu para possuir nele a felicidade eterna, amém.

Santos Anjos da Guarda, rogai por nós.`,
        textLatim: `Sancte Angele, dilecte Dei, qui me, divina dispositione, sub tua beata tutela suscepisti, nunquam desinas me defendere, illuminare et dirigere.
Te veneror ut protectorem, submitto me directioni tuae et tibi omnia trado ut a te guberner.

Rogo igitur te, et per amorem Iesu Christi, rogo te ut, quando ingratus tibi sum et pertinaciter surdus inspirationibus tuis, nolis, nihilominus, me derelinquere.
Cito me in viam rectam pone, si ex ea deviavero; doce me, si ignarus sum; erige me, si cecidero; adiuva me si in periculo sum et ad caelum me perducas ut in eo aeternam felicitatem possideam, amen.

Sancti Angeli Custodes, orate pro nobis.`,
      },
      {
        id: "oracao-anjo-guarda-santa-terezinha",
        titlePortugues:
          "Oração ao Anjo da Guarda (Santa Teresinha do Menino Jesus)",
        titleLatim:
          "Oratio ad Angelum Custodem (Sancta Teresia a Iesu Infante)",
        textPortugues: `Tu que brilhas no belo céu
Como uma pura e doce chama
Ao lado do trono do Eterno
Por mim tu desces à Terra
E iluminando-me com teu esplendor
Belo anjo, tu te tornas meu irmão
Meu amigo, meu consolador…

Conhecendo minha grande fraqueza,
Tu me diriges pela mão
E te vejo com ternura
Afastar as pedras do chão
Tua doce voz sempre me convida
A olhar apenas para o Céu.
Quanto mais me vês humilde e pequena
Mais radiante fica tua face.

Ó tu que atravessas o espaço
Mais rápido que os relâmpagos
Eu te peço, voa em meu lugar
Para perto daqueles que amo
Com tua asa seca-lhes o pranto
Canta que Jesus é bom
e que dor tem seus encantos
E sussurra-lhes meu nome…

Eu quero, em minha curta vida,
Salvar meus irmãos, os pecadores
Ó belo anjo da Pátria,
Dá-me teus santos ardores
Eu tenho apenas meus sacrifícios
E minha austera pobreza
Com tuas celestes delícias
Ofereça-os à Trindade.

A ti o Reino e a Glória
A riqueza do Rei dos reis
A mim a Hóstia humilde do cibório
A mim o tesouro da Cruz
Com a Cruz e com a Hóstia
E com tua celeste ajuda
Eu espero em paz as alegrias
Da outra vida, que durarão eternamente.`,
        textLatim: `Tu qui splendes in caelo pulchro
Ut flamma pura et dulcis
Iuxta thronum Aeterni
Pro me descens ad Terram
Et illuminans me splendore tuo
Pulcher Angele, frater meus evadis
Amicus meus, consolator meus…

Cognoscens magnam infirmitatem meam,
Me dirigis per manum
Et te video cum dulcedine
Removere lapides a terra
Dulcis vox tua semper me invitat
Ut solum ad Caelum aspiciam.
Quanto plus me vides humilem et parvam
Tanto radiantior fit facies tua.

O tu qui transis spatium
Celerius quam fulgura
Te rogo, vola loco meo
Ad propinquos quos amo
Cum ala tua sicca lacrimas eorum
Canta quod Iesus bonus est
et quod dolor suos habet incantationes
Et susurra eis nomen meum…

Volo, in vita mea brevi,
Salvare fratres meos, peccatores
O pulcher Angele Patriae,
Da mihi sanctos ardores tuos
Habeo tantum sacrificia mea
Et austeram paupertatem meam
Cum tuis caelestibus deliciis
Offer ea Trinitati.

Tibi Regnum et Gloria
Divitiae Regis regum
Mihi Hostia humilis ciborii
Mihi thesaurus Crucis
Cum Cruce et cum Hostia
Et cum tuo caelesti auxilio
Spero in pace gaudia
Alterius vitae, quae aeterna durant.`,
      },
      {
        id: "ato-reparacao-sacratissimo-coracao",
        titlePortugues: "Ato de Reparação ao Sacratíssimo Coração de Jesus",
        titleLatim: "Actus Reparationis ad Sacratissimum Cor Iesu",
        textPortugues: `Dulcíssimo Jesus, cuja infinita caridade para com os homens é por eles tão ingratamente correspondida com esquecimentos, friezas e desprezos, eis-nos aqui prostrados na Vossa presença, para Vos desagravarmos, com especiais homenagens, da insensibilidade tão insensata e das nefandas injúrias com que é de toda parte alvejado o Vosso amorosíssimo coração.

Reconhecendo, porém, com a mais profunda dor, que também nós mais de uma vez cometemos as mesmas indignidades, para nós, em primeiro lugar, imploramos a Vossa misericórdia, prontos a expiar não só as próprias culpas, senão também as daqueles que, errando longe do caminho da salvação, ou se obstinam na sua infidelidade, não Vos querendo como pastor e guia, ou, conculcando as promessas do batismo, sacudiram o suavíssimo jugo da Vossa santa lei.

De todos estes tão deploráveis crimes, Senhor, queremos nós hoje desagravar-Vos, mais particularmente da licença dos costumes e imodéstia do vestido, de tantos laços de corrupção armados à inocência, da violação dos dias santificados, das execrandas blasfêmias contra Vós e Vossos Santos, dos insultos ao Vosso Vigário e a todo o Vosso clero, do desprezo e das horrendas e sacrílegas profanações do Sacramento do divino amor e, enfim, dos atentados e rebeldias das nações contra os direitos e o Magistério da Vossa Igreja.

Oh! Se pudéssemos lavar com o próprio sangue tantas iniqüidades!

Entretanto, para reparar a honra divina ultrajada, Vos oferecemos, juntamente com os merecimentos da Virgem Mãe, de todos os santos e almas piedosas, aquela infinita satisfação, que Vós oferecestes ao eterno Pai sobre a cruz, e que não cessais de renovar todos os dias sobre nossos altares.

Ajudai-nos Senhor, com o auxílio da Vossa graça, para que possamos, como é nosso firme propósito, com a vivência da fé, com a pureza dos costumes, com a fiel observância da lei e caridade evangélicas, reparar todos os pecados cometidos por nós e por nosso próximo, impedir, por todos os meios, novas injúrias à Vossa divina Majestade e atrair ao Vosso serviço o maior número de almas possível.

Recebei, ó benigníssimo Jesus, pelas mãos de Maria santíssima reparadora, a espontânea homenagem deste nosso desagravo, e concedei-nos a grande graça de perseverarmos constantes, até à morte, no fiel cumprimento de nossos deveres e no Vosso santo serviço, para que possamos chegar todos à pátria bem-aventurada, onde Vós com o Pai e o Espírito Santo viveis e reinais por todos os séculos dos séculos.

Amém.`,
        textLatim: `Dulcissime Iesu, cuius infinita caritas erga homines ab eis tam ingrate respondetur cum oblivionibus, frigoribus et contemptibus, ecce adsumus prostrati in conspectu tuo, ut te dehonoremus, cum specialibus honoribus, de insensibilitate tam insensata et nefandis iniuriis quibus undique percutitur Cor tuum amantissimum.

Recognoscentes autem, cum altissima dolore, quod et nos saepe commisimus easdem indignitates, pro nobis, in primis, imploramus misericordiam tuam, parati expiare non solum proprias culpas, sed etiam illorum qui, errantes longe a via salutis, vel obstinant in sua infidelitate, te non volentes ut pastorem et ducem, vel, conculcantes promissa baptismatis, excusserunt iugum suavissimum sanctae legis tuae.

De omnibus his tam deplorandis criminibus, Domine, volumus hodie te dehonorare, magis particulariter de licentia morum et immodestia vestitus, de totibus laqueis corruptionis armatae innocentiae, de violatione dierum sanctificatorum, de execrandis blasphemiis contra te et Sanctos tuos, de iniuriis ad Vicarium tuum et ad omnem clerum tuum, de contemptu et horrendis ac sacrilegis profanationibus Sacramenti divini amoris et, demum, de attentatis et rebellionibus nationum contra iura et Magisterium Ecclesiae tuae.

Oh! Si possemus lavare proprio sanguine tot iniquitates!

Interim, ad reparandam divinam honorem dehonestatam, tibi offerimus, una cum meritis Virginis Matris, omnium sanctorum et animarum piorum, illam infinitam satisfactionem, quam tu obtulisti aeterno Patri super crucem, et quam non cessas renovare omnibus diebus super altaria nostra.

Adiuva nos, Domine, cum auxilio gratiae tuae, ut possimus, ut est firmum propositum nostrum, cum viventia fidei, cum puritate morum, cum fida observantia legis et caritatis evangelicae, reparare omnia peccata commissa a nobis et a proximo nostro, impedire, per omnia media, novas iniurias ad divinam Maiestatem tuam et attrahere ad servitium tuum maximum numerum animarum possibile.

Accipe, o benignissime Iesu, per manus Mariae sanctissimae reparationis, spontaneum honorem huius nostri dehonorationis, et concede nobis magnam gratiam perseverandi constantes, usque ad mortem, in fide impletione officiorum nostrorum et in sancto servitio tuo, ut possimus pervenire omnes ad patriam beatam, ubi tu cum Patre et Spiritu Sancto vivis et regnas per omnia saecula saeculorum.

Amen.`,
      },
      {
        id: "magnificat",
        titlePortugues: "Magnificat",
        titleLatim: "Magnificat",
        textPortugues: `A minha alma glorifica ao Senhor 
e o meu espírito se alegra em Deus, meu Salvador. 
Porque pôs os olhos na humildade da sua serva: 
de hoje em diante me chamarão bem-aventurada todas as gerações. 

O Todo-Poderoso fez em mim maravilhas: 
Santo é o seu nome. 
A sua misericórdia se estende de geração em geração 
sobre aqueles que O temem. 

Manifestou o poder do seu braço 
e dispersou os soberbos. 
Derrubou os poderosos de seus tronos 
e exaltou os humildes. 
Aos famintos encheu de bens 
e aos ricos despediu de mãos vazias. 

Acolheu Israel seu servo, 
lembrado da sua misericórdia, 
como tinha prometido a nossos pais, 
a Abraão e à sua descendência 
para sempre. 

Glória ao Pai e ao Filho 
e ao Espírito Santo. 
Como era no princípio, agora e sempre. 
Ámen.`,
        textLatim: `Magnificat anima mea Dominum,
et exsultavit spiritus meus in Deo salutari meo.
Quia respexit humilitatem ancillae suae:
ecce enim ex hoc beatam me dicent omnes generationes.

Quia fecit mihi magna qui potens est:
et sanctum nomen eius.
Et misericordia eius a progenie in progenies
timentibus eum.

Fecit potentiam in brachio suo:
dispersit superbos mente cordis sui.
Deposuit potentes de sede,
et exaltavit humiles.
Esurientes implevit bonis,
et divites dimisit inanes.

Suscepit Israel puerum suum,
recordatus misericordiae suae,
sicut locutus est ad patres nostros,
Abraham et semini eius
in saecula.

Gloria Patri, et Filio,
et Spiritui Sancto.
Sicut erat in principio, et nunc, et semper,
et in saecula saeculorum.
Amen.`,
      },
      {
        id: "miserere",
        titlePortugues: "Miserere",
        titleLatim: "Miserere",
        textPortugues: `Tende piedade, ó meu Deus, misericórdia!
Na imensidão de vosso amor, purificai-me!
Do meu pecado, todo inteiro, me lavai,
e apagai completamente a minha culpa!

Eu reconheço toda a minha iniqüidade,
o meu pecado está sempre à minha frente.
Foi contra vós, só contra vós, que eu pequei,
e pratiquei o que é mau aos vossos olhos.

Mostrais assim quanto sois justo na sentença,
e quanto é reto o julgamento que fazeis.
Vede, senhor, que eu nasci na iniqüidade
e em pecado minha mãe me concebeu.

Mas vós amais os corações que são sinceros,
na intimidade me ensinais a sabedoria.
Aspergi-me e serei puro do pecado,
e mais branco do que a neve ficarei.

Fazei-me ouvir cantos de festa e de alegria,
e exultarão estes meus ossos que esmagastes.
Desviai o vosso olhar dos meus pecados
e apagai todas as minhas transgressões!

Criai em mim um coração que seja puro,
dai-me de novo um espírito decidido.
Ó Senhor, não me afasteis de vossa face,
nem retireis de mim o vosso Santo Espírito!

Dai-me de novo a alegria de ser salvo
E confirmai-me com espírito generoso!
Ensinarei vosso caminho aos pecadores,
e para vós se voltarão os transviados.

Da morte como pena, libertai-me,
e minha língua exaltará vossa justiça!
Abri meus lábios, ó Senhor, para cantar,
e minha boca anunciará vosso louvor!

Pois não são de vosso agrado os sacrifícios,
e, se oferto um holocausto, o rejeitais.
Meu sacrifício é minha alma penitente,
não desprezeis um coração arrependido!

Sede benigno com Sião, por vossa graça,
reconstruí Jerusalém e os seus muros!
E aceitareis o verdadeiro sacrifício,
os holocaustos e oblações em vosso altar!

Glória ao Pai, ao Filho e ao Espírito Santo.
Como era no princípio, agora e sempre.
Amém.`,
        textLatim: `Miserere mei, Deus, secundum magnam misericordiam tuam.
Et secundum multitudinem miserationum tuarum, dele iniquitatem meam.
Amplius lava me ab iniquitate mea, et a peccato meo munda me.

Quoniam iniquitatem meam ego cognosco,
et peccatum meum contra me est semper.
Tibi soli peccavi, et malum coram te feci,
ut iustificeris in sermonibus tuis, et vincas cum iudicaris.

Ecce enim in iniquitatibus conceptus sum,
et in peccatis concepit me mater mea.
Ecce enim veritatem dilexisti:
incerta et occulta sapientiae tuae manifestasti mihi.

Asperges me hyssopo, et mundabor;
lavabis me, et super nivem dealbabor.
Auditui meo dabis gaudium et laetitiam,
et exsultabunt ossa humiliata.

Averte faciem tuam a peccatis meis,
et omnes iniquitates meas dele.
Cor mundum crea in me, Deus,
et spiritum rectum innova in visceribus meis.

Ne proiicias me a facie tua,
et spiritum sanctum tuum ne auferas a me.
Redde mihi laetitiam salutaris tui,
et spiritu principali confirma me.

Docebo iniquos vias tuas,
et impii ad te convertentur.
Libera me de sanguinibus, Deus, Deus salutis meae,
et exsultabit lingua mea iustitiam tuam.

Domine, labia mea aperies,
et os meum annuntiabit laudem tuam.
Quoniam si voluisses sacrificium, dedissem utique;
holocaustis non delectaris.

Sacrificium Deo spiritus contribulatus;
cor contritum et humiliatum, Deus, non despicies.
Benigne fac, Domine, in bona voluntate tua Sion,
ut aedificentur muri Ierusalem.

Tunc acceptabis sacrificium iustitiae, oblationes et holocausta;
tunc imponent super altare tuum vitulos.
Gloria Patri, et Filio, et Spiritui Sancto.
Sicut erat in principio, et nunc, et semper,
et in saecula saeculorum.
Amen.`,
      },
      {
        id: "veni-creator-spiritus",
        titlePortugues: "Veni Creator Spiritus",
        titleLatim: "Veni Creator Spiritus",
        textPortugues: `Vinde Espírito Criador, a nossa alma visitai
e enchei os corações com vossos dons celestiais.
Vós sois chamado o Intercessor de Deus excelso dom sem par,
a fonte viva, o fogo, o amor, a unção divina e salutar.

Sois o doador dos sete dons e sois poder na mão do Pai,
por Ele prometido a nós, por nós seus feitos proclamai.
A nossa mente iluminai, os corações enchei de amor,
nossa fraqueza encorajai, qual força eterna e protetor.

Nosso inimigo repeli, e concedei-nos a vossa paz,
se pela graça nos guiais, o mal deixamos para trás.
Ao Pai e ao Filho Salvador, por vós possamos conhecer
que procedeis do Seu amor, fazei-nos sempre firmes crer.
Amém!`,
        textLatim: `Veni, Creator Spiritus,
mentes tuorum visita,
imple superna gratia
quae tu creasti pectora.

Qui diceris Paraclitus,
altissimi donum Dei,
fons vivus, ignis, caritas,
et spiritalis unctio.

Tu septiformis munere,
digitus paternae dexterae,
Tu rite promissum Patris,
sermone ditans guttura.

Accende lumen sensibus:
infunde amorem cordibus:
infirma nostri corporis
virtute firmans perpeti.

Hostem repellas longius,
pacemque dones protinus:
ductore sic te praevio
vitemus omne noxium.

Per te sciamus da Patrem,
noscamus atque Filium;
Teque utriusque Spiritum
credamus omni tempore.

Deo Patri sit gloria,
et Filio, qui a mortuis
surrexit, ac Paraclito,
in saeculorum saecula.
Amen.`,
      },
      {
        id: "te-deum",
        titlePortugues: "Te Deum",
        titleLatim: "Te Deum",
        textPortugues: `Nós Vos louvamos, ó Deus, 
nós Vos bendizemos, Senhor. 
Toda a terra Vos adora, 
Pai eterno e omnipotente. 

Os Anjos, os Céus 
e todas as Potestades, 
os Querubins e os Serafins 
Vos aclamam sem cessar: 
Santo, Santo, Santo, 
Senhor Deus do Universo, 
o céu e a terra proclamam a vossa glória. 

O coro glorioso dos Apóstolos, 
a falange venerável dos Profetas, 
o exército resplandecente dos Mártires 
cantam os vossos louvores. 

A santa Igreja anuncia por toda a terra 
a glória do vosso nome: 
Deus de infinita majestade, 
Pai, Filho e Espírito Santo. 

Senhor Jesus Cristo, Rei da glória, 
Filho do Eterno Pai, 
para salvar o homem, tomastes 
a condição humana no seio da Virgem Maria. 

Vós despedaçastes as cadeias da morte 
e abristes as portas do céu. 
Vós estais sentado à direita de Deus, 
na glória do Pai, 
e de novo haveis de vir para julgar 
os vivos e os mortos. 

Socorrei os vossos servos, Senhor, 
que remistes com vosso Sangue precioso;
e recebei-os na luz da glória, 
na assembleia dos vossos Santos. 

Salvai o vosso povo, Senhor, 
e abençoai a vossa herança; 
sede o seu pastor e guia através dos tempos 
e conduzi-o às fontes da vida eterna. 

Nós Vos bendiremos todos os dias da nossa vida 
e louvaremos para sempre o vosso nome. 
Dignai-Vos, Senhor, neste dia, livrar-nos do pecado. 

Tende piedade de nós, 
Senhor, tende piedade de nós. 
Desça sobre nós a vossa misericórdia, 
Porque em Vós esperamos. 
Em Vós espero, meu Deus, 
não serei confundido eternamente.`,
        textLatim: `Te Deum laudamus:
te Dominum confitemur.
Te aeternum Patrem
omnis terra veneratur.

Tibi omnes Angeli;
tibi caeli et universae Potestates;
Tibi Cherubim et Seraphim
incessabili voce proclamant:
Sanctus, Sanctus, Sanctus,
Dominus Deus Sabaoth.
Pleni sunt caeli et terra
majestatis gloriae tuae.

Te gloriosus Apostolorum chorus,
Te Prophetarum laudabilis numerus,
Te Martyrum candidatus laudat exercitus.
Te per orbem terrarum
sancta confitetur Ecclesia,
Patrem immensae majestatis:
Venerandum tuum verum et unicum Filium;
Sanctum quoque Paraclitum Spiritum.

Tu Rex gloriae, Christe.
Tu Patris sempiternus es Filius.
Tu ad liberandum suscepturus hominem,
non horruisti Virginis uterum.
Tu, devicto mortis aculeo,
aperuisti credentibus regna caelorum.
Tu ad dexteram Dei sedes, in gloria Patris.
Iudex crederis esse venturus.

Te ergo quaesumus, tuis famulis subveni,
quos pretioso sanguine redemisti.
Aeterna fac cum sanctis tuis in gloria numerari.

Salvum fac populum tuum, Domine,
et benedic hereditati tuae.
Et rege eos, et extolle illos usque in aeternum.

Per singulos dies benedicimus te;
Et laudamus nomen tuum in saeculum, et in saeculum saeculi.
Dignare, Domine, die isto sine peccato nos custodire.
Miserere nostri, Domine, miserere nostri.
Fiat misericordia tua, Domine, super nos,
quemadmodum speravimus in te.
In te, Domine, speravi:
non confundar in aeternum.`,
      },
      {
        id: "veni-sancte-spiritus",
        titlePortugues: "Veni Sancte Spiritus",
        titleLatim: "Veni Sancte Spiritus",
        textPortugues: `Vinde Espírito Santo, enchei os corações dos vossos fiéis e acendei neles o fogo do vosso amor. Enviai o Vosso Espírito e tudo será criado. E renovareis a face da terra.

Oremos.
Ó Deus que instruíste os corações dos vossos fiéis, com a luz do Espírito Santo, fazei que apreciemos retamente todas as coisas segundo o mesmo Espírito e gozemos da sua Consolação.
Por Cristo Senhor Nosso.
Amém.`,
        textLatim: `Veni Sancte Spiritus, reple tuorum corda fidelium, et tui amoris in eis ignem accende. Emitte Spiritum tuum et creabuntur. Et renovabis faciem terrae.

Oremus.
Deus, qui corda fidelium Sancti Spiritus illustratione docuisti, da nobis in eodem Spiritu recta sapere, et de eius semper consolatione gaudere.
Per Christum Dominum nostrum.
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
  {
    categoryId: "ladainhas",
    categoryTitle: "Ladainhas",
    prayers: [
      {
        id: "ladainha-nossa-senhora",
        titlePortugues: "Ladainha de Nossa Senhora",
        titleLatim: "Litaniæ Lauretanæ",
        textPortugues:
`Senhor, tende piedade de nós.
R. Senhor, tende piedade de nós.

Jesus Cristo, tende piedade de nós.
R. Jesus Cristo, tende piedade de nós.

Senhor, tende piedade de nós.
R. Senhor, tende piedade de nós.

Jesus Cristo, ouvi-nos.
R. Jesus Cristo, ouvi-nos.

Jesus Cristo, atendei-nos.
R. Jesus Cristo, atendei-nos.

Pai celeste que sois Deus.
R. Tende piedade de nós.

Filho, Redentor do mundo, que sois Deus.
R. Tende piedade de nós.

Espírito Santo, que sois Deus.
R. Tende piedade de nós.

Santíssima Trindade, que sois um só Deus.
R. Tende piedade de nós.

Santa Maria.
R. Rogai por nós.

Santa Mãe de Deus.
R. Rogai por nós.

Santa Virgem das Virgens.
R. Rogai por nós.

Mãe de Jesus Cristo.
R. Rogai por nós.

Mãe da Igreja.
R. Rogai por nós.

Mãe de misericórdia.
R. Rogai por nós.

Mãe da divina graça.
R. Rogai por nós.

Mãe da esperança.
R. Rogai por nós.

Mãe puríssima.
R. Rogai por nós.

Mãe castíssima.
R. Rogai por nós.

Mãe imaculada.
R. Rogai por nós.

Mãe intacta.
R. Rogai por nós.

Mãe amável.
R. Rogai por nós.

Mãe admirável.
R. Rogai por nós.

Mãe do bom conselho.
R. Rogai por nós.

Mãe do Criador.
R. Rogai por nós.

Mãe do Salvador.
R. Rogai por nós.

Virgem prudentíssima.
R. Rogai por nós.

Virgem venerável.
R. Rogai por nós.

Virgem louvável.
R. Rogai por nós.

Virgem poderosa.
R. Rogai por nós.

Virgem clemente.
R. Rogai por nós.

Virgem fiel.
R. Rogai por nós.

Espelho de justiça.
R. Rogai por nós.

Sede de sabedoria.
R. Rogai por nós.

Causa da nossa alegria.
R. Rogai por nós.

Vaso espiritual.
R. Rogai por nós.

Vaso honorífico.
R. Rogai por nós.

Vaso insígne de devoção.
R. Rogai por nós.

Rosa mística.
R. Rogai por nós.

Torre de Davi.
R. Rogai por nós.

Torre de marfim.
R. Rogai por nós.

Casa de ouro.
R. Rogai por nós.

Arca da aliança.
R. Rogai por nós.

Porta do Céu.
R. Rogai por nós.

Estrela da manhã.
R. Rogai por nós.

Saúde dos enfermos.
R. Rogai por nós.

Refúgio dos pecadores.
R. Rogai por nós.

Socorro dos migrantes.
R. Rogai por nós.

Consoladora dos aflitos.
R. Rogai por nós.

Auxílio dos cristãos.
R. Rogai por nós.

Rainha dos anjos.
R. Rogai por nós.

Rainha dos patriarcas.
R. Rogai por nós.

Rainha dos profetas.
R. Rogai por nós.

Rainha dos apóstolos.
R. Rogai por nós.

Rainha dos mártires.
R. Rogai por nós.

Rainha dos confessores.
R. Rogai por nós.

Rainha das virgens.
R. Rogai por nós.

Rainha de todos os santos.
R. Rogai por nós.

Rainha concebida sem pecado original.
R. Rogai por nós.

Rainha assunta ao Céu.
R. Rogai por nós.

Rainha do sacratíssimo Rosário.
R. Rogai por nós.

Rainha da família.
R. Rogai por nós.

Rainha da paz.
R. Rogai por nós.

Cordeiro de Deus, que tirai os pecados do mundo.
R. Perdoai-nos, Senhor.

Cordeiro de Deus, que tirai os pecados do mundo.
R. Ouvi-nos, Senhor.

Cordeiro de Deus, que tirai os pecados do mundo.
R. Tende piedade de nós.

V. Rogai por nós, Santa Mãe de Deus.
R. Para que sejamos dignos das promessas de Cristo.

Oremos.
Ó Deus, cujo Filho unigênito, por sua vida, morte e ressurreição, nos obteve o prêmio da salvação eterna, concedei-nos, nós vos pedimos que, meditando os mistérios do Sacratíssimo Rosário da Bem-Aventurada Virgem Maria, imitemos o que contêm e consigamos o que prometem.
Pelo mesmo Cristo, Senhor Nosso.
Amém.`,
        textLatim: `Litaniae Lauretanae beatae Mariae Virginis
Kýrie, eléison.
R. Kýrie, eléison.

Christe, eléison.
R. Christe, eléison.

Kýrie, eléison.
R. Kýrie, eléison.

Christe, audi nos.
R. Christe, audi nos.

Christe, exaudi nos.
R. Christe, exaudi nos.

Pater de caelis, Deus.
R. Miserére nobis.

Fili, Redémptor mundi, Deus.
R. Miserére nobis.

Spíritus Sancte, Deus.
R. Miserére nobis.

Sancta Trínitas, unus Deus.
R. Miserére nobis.

Sancta Maria.
R. Ora pro nobis.

Sancta Dei Génitrix.
R. Ora pro nobis.

Sancta Virgo vírginum.
R. Ora pro nobis.

Mater Christi.
R. Ora pro nobis.

Mater Ecclésiae.
R. Ora pro nobis.

Mater misericórdiae.
R. Ora pro nobis.

Mater divínae grátiae.
R. Ora pro nobis.

Mater spei.
R. Ora pro nobis.

Mater puríssima.
R. Ora pro nobis.

Mater castíssima.
R. Ora pro nobis.

Mater invioláta.
R. Ora pro nobis.

Mater intemerata.
R. Ora pro nobis.

Mater amábilis.
R. Ora pro nobis.

Mater admirábilis.
R. Ora pro nobis.

Mater boni consílii.
R. Ora pro nobis.

Mater Creatóris.
R. Ora pro nobis.

Mater Salvatóris.
R. Ora pro nobis.

Virgo prudentíssima.
R. Ora pro nobis.

Virgo veneranda.
R. Ora pro nobis.

Virgo praedicánda.
R. Ora pro nobis.

Virgo potens.
R. Ora pro nobis.

Virgo clemens.
R. Ora pro nobis.

Virgo fidélis.
R. Ora pro nobis.

Spéculum iustítiae.
R. Ora pro nobis.

Sedes sapiéntiae.
R. Ora pro nobis.

Causa nostrae laetítiae.
R. Ora pro nobis.

Vas spirituále.
R. Ora pro nobis.

Vas honorábile.
R. Ora pro nobis.

Vas insígne devotiónis.
R. Ora pro nobis.

Rosa mystica.
R. Ora pro nobis.

Turris davídica.
R. Ora pro nobis.

Turris ebúrnea.
R. Ora pro nobis.

Domus áurea.
R. Ora pro nobis.

Féderis arca.
R. Ora pro nobis.

Iánua caeli.
R. Ora pro nobis.

Stella matutina.
R. Ora pro nobis.

Salus infirmórum.
R. Ora pro nobis.

Refúgium peccatórum.
R. Ora pro nobis.

Solácium Migrántium.
R. Ora pro nobis.

Consolátrix afflictórum.
R. Ora pro nobis.

Auxílium christianórum.
R. Ora pro nobis.

Regína angelórum.
R. Ora pro nobis.

Regína patriarchárum.
R. Ora pro nobis.

Regína prophetárum.
R. Ora pro nobis.

Regína apostolórum.
R. Ora pro nobis.

Regína mártyrum.
R. Ora pro nobis.

Regína confessórum.
R. Ora pro nobis.

Regína vírginum.
R. Ora pro nobis.

Regína sanctórum ómnium.
R. Ora pro nobis.

Regína sine labe 
R. Ora pro nobis.

origináli concepta.
R. Ora pro nobis.

Regína in caelum assumpta.
R. Ora pro nobis.

Regína sacratíssimi rosárii.
R. Ora pro nobis.

Regína famíliae.
R. Ora pro nobis.

Regína pacis.
R. Ora pro nobis.

Agnus Dei, qui tollis peccata mundi.
R. Parce nobis Domine.

Agnus Dei, qui tollis peccata mundi.
R. Exaudi nos Domine.

Agnus Dei, qui tollis peccata mundi.
R. Miserere nobis.

V. Ora pro nobis, sancta Dei Génitrix.
R. Ut digni efficiámur promissiónibus Christi.

Orémus.
Deus, cuius Unigénitus per vitam, mortem et resurrectiónem suam nobis salútis aetérnae praemia comparávit, concéde, quaesumus: ut haec mystéria sacratíssimo beátae Maríae Vírginis Rosário recoléntes, et imitémur quod cóntinent, et quod promíttunt assequámur.
Per eúndem Christum Dóminum nostrum.
Amen.`,
      },

      {
        id: "ladainha-espirito-santo",
        titlePortugues: "Ladainha do Espírito Santo",
        titleLatim: "Litaniæ Sancti Spiritus",
        textPortugues: 
`Senhor, tende piedade de nós.
Jesus Cristo, tende piedade de nós.
Senhor, tende piedade de nós.

Divino Espírito Santo, ouvi-nos.
Espírito Paráclito, atendei-nos.
Deus Pai dos céus, tende piedade de nós.
Deus Filho, Redentor do mundo, tende piedade de nós.
Deus Espírito Santo, tende piedade de nós.
Santíssima Trindade, que sois um só Deus, tende piedade de nós.

Espírito da verdade,
 tende piedade de nós.

Espírito da sabedoria,
 tende piedade de nós.

Espírito da inteligência,
 tende piedade de nós.

Espírito da fortaleza,
 tende piedade de nós.

Espírito da piedade,
 tende piedade de nós.

Espírito do bom conselho,
 tende piedade de nós.

Espírito da ciência, 
tende piedade de nós.

Espírito do santo temor,
 tende piedade de nós.

Espírito da caridade,
 tende piedade de nós.

Espírito da alegria,
 tende piedade de nós.

Espírito da paz,
 tende piedade de nós.

Espírito das virtudes, 
tende piedade de nós.

Espírito de toda a graça,
 tende piedade de nós.

Espírito da adoção dos filhos de Deus,
 tende piedade de nós.

Purificador das nossas almas,
 tende piedade de nós.

Santificador e guia da Igreja Católica,
 tende piedade de nós.

Distribuidor dos dons celestes,
 tende piedade de nós.

Conhecedor dos pensamentos e das intenções do coração,
 tende piedade de nós.

Doçura dos que começam a vos servir, 
tende piedade de nós.

Coroa dos perfeitos,
 tende piedade de nós.

Alegria dos anjos,
 tende piedade de nós.

Luz dos patriarcas,
 tende piedade de nós.

Inspiração dos profetas,
 tende piedade de nós.

Palavra e sabedoria dos apóstolos, 
tende piedade de nós.

Vitória dos mártires,
 tende piedade de nós.

Ciência dos confessores, 
tende piedade de nós.

Pureza das virgens,
 tende piedade de nós.

Unção de todos os santos, 
tende piedade de nós.

Sede-nos propício,
 perdoai-nos, Senhor.

Sede-nos propício,
 atendei-nos, Senhor.

De todo o pecado, 
livrai-nos, Senhor.

De todas as tentações e ciladas do demônio,
 livrai-nos, Senhor.

De toda a presunção e desesperação,
 livrai-nos, Senhor.

Do ataque à verdade conhecida,
 livrai-nos, Senhor.

Da inveja da graça fraterna,
 livrai-nos, Senhor.

De toda a obstinação e impenitência,
 livrai-nos, Senhor.

De toda a negligência e tepor do espírito, 
livrai-nos, Senhor.

De toda a impureza da mente e do corpo,
 livrai-nos, Senhor.

De todas as heresias e erros,
 livrai-nos, Senhor.

De todo o mau espírito,
 livrai-nos, Senhor.

Da morte má e eterna,
 livrai-nos, Senhor.

Pela vossa eterna procedência do Pai e do Filho,
 livrai-nos, Senhor.

Pela milagrosa conceição do Filho de Deus, 
livrai-nos, Senhor.

Pela vossa descida sobre Jesus Cristo batizado,
 livrai-nos, Senhor.

Pela vossa santa aparição na transfiguração do Senhor,
 livrai-nos, Senhor.

Pela vossa vinda sobre os discípulos do Senhor,
 livrai-nos, Senhor.

No dia do juízo,
 livrai-nos, Senhor.

Ainda que pecadores, nós vos rogamos,
 ouvi-nos.

Para que nos perdoeis, nós vos rogamos,
 ouvi-nos.

Para que vos digneis vivificar e santificar todos os membros da Igreja, nós vos rogamos,
 ouvi-nos.

Para que vos digneis conceder-nos o dom da verdadeira piedação, devoção e oração, nós vos rogamos,
 ouvi-nos.

Para que vos digneis inspirar-nos sinceros afetos de misericórdia e de caridade, nós vos rogamos,
 ouvi-nos.

Para que vos digneis criar em nós um espírito novo e um coração puro, nós vos rogamos,
 ouvi-nos.

Para que vos digneis conceder-nos verdadeira paz e tranquilidade do coração, nós vos rogamos,
 ouvi-nos.

Para que vos digneis fazer-nos dignos e fortes, para suportar as perseguições pela justiça, nós vos rogamos,
 ouvi-nos.

Para que vos digneis confirmar-nos em vossa graça, nós vos rogamos, 
ouvi-nos.

Para que vos digneis receber-nos no número dos vossos eleitos, nós vos rogamos, 
ouvi-nos.

Para que vos digneis ouvir-nos, nós vos rogamos,
 ouvi-nos.

Espírito de Deus, nós vos rogamos,
 ouvi-nos.

Cordeiro de Deus que tirais o pecado do mundo,
 enviai-nos o Espírito Santo.

Cordeiro de Deus que tirais o pecado do mundo,
 mandai-nos o Espírito prometido do Pai.

Cordeiro de Deus que tirais o pecado do mundo,
 dai-nos o Espírito bom.

Espírito Santo,
 ouvi-nos.

Espírito consolador, 
atendei-nos.

℣. Enviai, Senhor, o vosso Espírito, e tudo será criado,
℟. E renovareis a face da terra.

Oremos. Deus, que instruístes os corações dos vossos fiéis com a luz do Espírito Santo, fazei que apreciemos retamente todas as coisas segundo o mesmo Espírito e gozemos sempre da sua consolação. Por Cristo, nosso Senhor. Amém.`,
        textLatim: `Litaniæ Sancti Spiritus
Kýrie, eléison.
Christe, eléison.
Kýrie, eléison.
Spíritus Sancte, audi nos.
Spíritus Paráclite, exáudi nos.
Pater de cælis, Deus, miserére nobis.
Fili, Redémptor mundi, Deus, miserére nobis.
Spíritus Sancte, Deus, miserére nobis.
Sancta Trínitas, unus Deus, miserére nobis.
Spíritus veritátis, miserére nobis.
Spíritus sapiéntiæ, miserére nobis.
Spíritus intelléctus, miserére nobis.
Spíritus fortitúdinis, miserére nobis.
Spíritus pietátis, miserére nobis.
Spíritus consílii, miserére nobis.
Spíritus sciéntiæ, miserére nobis.
Spíritus timóris Dómini, miserére nobis.
Spíritus caritátis, miserére nobis.
Spíritus gáudii, miserére nobis.
Spíritus pacis, miserére nobis.
Spíritus virtútum, miserére nobis.
Spíritus omnis grátiæ, miserére nobis.
Spíritus adoptiónis filiórum Dei, miserére nobis.
Purificátor animárum nostrárum, miserére nobis.
Sanctificátor et dux Ecclésiæ cathólicæ, miserére nobis.
Distribútor donorum cæléstium, miserére nobis.
Cognitor cogitatiónum et intentiónum cordis, miserére nobis.
Dulcédo incipiéntium servíre tibi, miserére nobis.
Coróna perfectorum, miserére nobis.
Gáudium Angelórum, miserére nobis.
Lux Patriarchárum, miserére nobis.
Inspirátor Prophetárum, miserére nobis.
Verbum et sapiéntia Apostolórum, miserére nobis.
Victoria Mártyrum, miserére nobis.
Sciéntia Confessórum, miserére nobis.
Castitas Virginum, miserére nobis.
Unctio ómnium Sanctórum, miserére nobis.
Propítius esto, parce nobis, Dómine.
Propítius esto, exáudi nos, Dómine.
Ab omni peccáto, líbera nos, Dómine.
Ab omni tentatióne et insídiis diáboli, líbera nos, Dómine.
Ab omni præsumptióne et desperatióne, líbera nos, Dómine.
Ab impugnatióne veritátis cognítæ, líbera nos, Dómine.
Ab invídia grátiæ fraterna, líbera nos, Dómine.
Ab omni pertinácia et impœniténtia, líbera nos, Dómine.
Ab omni neglegéntia et tepóre spíritus, líbera nos, Dómine.
Ab omni immundítia mentis et córporis, líbera nos, Dómine.
Ab ómnibus hærésibus et erroribus, líbera nos, Dómine.
Ab omni malo spíritu, líbera nos, Dómine.
A morte mala et ætérna, líbera nos, Dómine.
Per tuam ætérnam processiónem a Patre et Filio, líbera nos, Dómine.
Per miram conceptiónem Fílii Dei, líbera nos, Dómine.
Per tuam descensiónem super baptizátum Iesum Christum, líbera nos, Dómine.
Per tuam sanctam apparitiónem in transfiguratióne Dómini, líbera nos, Dómine.
Per tuam advéntum super discípulos Dómini, líbera nos, Dómine.
In die iudícii, líbera nos, Dómine.
Peccatóres, te rogámus, audi nos.
Ut nobis indúlgeas, te rogámus, audi nos.
Ut omnes membra Ecclésiæ vivificáre et sanctificáre dignéris, te rogámus, audi nos.
Ut nobis dona veræ pietátis, devotiónis et oratiónis concédere dignéris, te rogámus, audi nos.
Ut nobis sinceros afféctus misericórdiæ et caritátis inspiráre dignéris, te rogámus, audi nos.
Ut cor mundum creáre in nobis et spíritum rectum innováre dignéris, te rogámus, audi nos.
Ut veram pacem et tranquillitátem cordis nobis concédere dignéris, te rogámus, audi nos.
Ut nos dignos et fortes facias pro iustítia persecutiónes toleráre, te rogámus, audi nos.
Ut nos in tua grátia confirmáre dignéris, te rogámus, audi nos.
Ut nos in número electórum tuórum recípere dignéris, te rogámus, audi nos.
Ut nos exaudíre dignéris, te rogámus, audi nos.
Spíritus Dei, te rogámus, audi nos.
Agnus Dei, qui tollis peccáta mundi, mítte nobis Spíritum Sanctum.
Agnus Dei, qui tollis peccáta mundi, da nobis Spíritum a Patre promíssum.
Agnus Dei, qui tollis peccáta mundi, dona nobis Spíritum bonum.
Spíritus Sancte, audi nos.
Spíritus Paráclite, exáudi nos.
℣. Emítte Spíritum tuum, et creabúntur,
℟. Et renovábis fáciem terræ.
Orémus.
 Deus, qui corda fidélium Sancti Spíritus illuminatióne docuísti, da nobis in eódem Spíritu recta sápere, et de eius semper consolatióne gaudére. Per Christum Dóminum nostrum. Amen.`,
      },

      {
        id: "ladainha-santissimo-nome-de-jesus",
        titlePortugues: "Ladainha do Santíssimo Nome de Jesus",
        titleLatim: "Litaniæ Sanctissimi Nominis Iesu",
        textPortugues: `Ladainha do Santíssimo Nome de Jesus
Senhor, tende piedade de nós.
Jesus Cristo, tende piedade de nós.
Senhor, tende piedade de nós.
Jesus Cristo, ouvi-nos.
Jesus Cristo, atendei-nos.
Pai celeste, que sois Deus, tende piedade de nós.
Filho, Redentor do mundo, que sois Deus, tende piedade de nós.
Espírito Santo, que sois Deus, tende piedade de nós.
Santíssima Trindade, que sois um só Deus, tende piedade de nós.
Jesus, Filho de Deus vivo, tende piedade de nós.
Jesus, esplendor do Pai, tende piedade de nós.
Jesus, pureza da luz eterna, tende piedade de nós.
Jesus, Rei da glória, tende piedade de nós.
Jesus, sol da justiça, tende piedade de nós.
Jesus, Filho da Virgem Maria, tende piedade de nós.
Jesus amável, tende piedade de nós.
Jesus admirável, tende piedade de nós.
Jesus, Deus forte, tende piedade de nós.
Jesus, pai do futuro do século, tende piedade de nós.
Jesus, anjo do grande conselho, tende piedade de nós.
Jesus poderosíssimo, tende piedade de nós.
Jesus pacientíssimo, tende piedade de nós.
Jesus obedientíssimo, tende piedade de nós.
Jesus, manso e humilde de coração, tende piedade de nós.
Jesus, amante da castidade, tende piedade de nós.
Jesus, amador nosso, tende piedade de nós.
Jesus, Deus da paz, tende piedade de nós.
Jesus, autor da vida, tende piedade de nós.
Jesus, exemplar das virtudes, tende piedade de nós.
Jesus, zelador das almas, tende piedade de nós.
Jesus, nosso Deus, tende piedade de nós.
Jesus, nosso refúgio, tende piedade de nós.
Jesus, pai dos pobres, tende piedade de nós.
Jesus, tesouro dos fiéis, tende piedade de nós.
Jesus, bom pastor, tende piedade de nós.
Jesus, luz verdadeira, tende piedade de nós.
Jesus, sabedoria eterna, tende piedade de nós.
Jesus, bondade infinita, tende piedade de nós.
Jesus, nosso caminho e nossa vida, tende piedade de nós.
Jesus, alegria dos anjos, tende piedade de nós.
Jesus, rei dos patriarcas, tende piedade de nós.
Jesus, mestre dos Apóstolos, tende piedade de nós.
Jesus, doutor dos evangelistas, tende piedade de nós.
Jesus, fortaleza dos mártires, tende piedade de nós.
Jesus, luz dos confessores, tende piedade de nós.
Jesus, pureza das virgens, tende piedade de nós.
Jesus, coroa de todos os santos, tende piedade de nós.
Sede-nos propício, perdoai-nos, Jesus.
Sede-nos propício, ouvi-nos, Jesus.
De todo o mal, livrai-nos, Jesus.
De todo o pecado, livrai-nos, Jesus.
De vossa ira, livrai-nos, Jesus.
Das ciladas do demônio, livrai-nos, Jesus.
Do espírito de impureza, livrai-nos, Jesus.
Da morte eterna, livrai-nos, Jesus.
Do desprezo das vossas inspirações, livrai-nos, Jesus.
Pelo mistério da vossa santa Encarnação, livrai-nos, Jesus.
Pela vossa natividade, livrai-nos, Jesus.
Pela vossa infância, livrai-nos, Jesus.
Pela vossa santíssima vida, livrai-nos, Jesus.
Pelos vossos trabalhos, livrai-nos, Jesus.
Pela vossa agonia e paixão, livrai-nos, Jesus.
Pela vossa cruz e desamparo, livrai-nos, Jesus.
Pelas vossas angústias, livrai-nos, Jesus.
Pela vossa morte e sepultura, livrai-nos, Jesus.
Pela vossa ressurreição, livrai-nos, Jesus.
Pela vossa ascensão, livrai-nos, Jesus.
Pela vossa instituição da Santíssima Eucaristia, livrai-nos, Jesus.
Pelas vossas alegrias, livrai-nos, Jesus.
Pela vossa glória, livrai-nos, Jesus.
Cordeiro de Deus, que tirais os pecados do mundo, perdoai-nos, Jesus.
Cordeiro de Deus, que tirais os pecados do mundo, ouvi-nos, Jesus.
Cordeiro de Deus, que tirais os pecados do mundo, tende piedade de nós, Jesus.
Jesus, ouvi-nos.
Jesus, atendei-nos.
Oremos: Senhor Jesus Cristo, que dissestes: “Pedi e recebereis, buscai e achareis, batei e abrir-se-vos-á”, nós vos suplicamos que concedais a nós, que vos pedimos, os sentimentos afetivos de vosso divino amor, a fim de que vos amemos de todo o coração e que esse amor transcenda por nossas ações. Permiti que tenhamos sempre, Senhor, um igual temor e amor pelo vosso santo nome, pois não deixais de governar aqueles que estabeleceis na firmeza do vosso amor. Vós que viveis e renais pelos séculos dos séculos. Amém.`,
        textLatim: `Litaniæ Sanctissimi Nominis Iesu
Kýrie, eléison.
Christe, eléison.
Kýrie, eléison.
Christe, audi nos.
Christe, exáudi nos.
Pater de cælis, Deus, miserére nobis.
Fili, Redémptor mundi, Deus, miserére nobis.
Spíritus Sancte, Deus, miserére nobis.
Sancta Trínitas, unus Deus, miserére nobis.
Iesu, Fili Dei vivi, miserére nobis.
Iesu, splendor Patris, miserére nobis.
Iesu, candor lucis ætérnæ, miserére nobis.
Iesu, Rex glóriæ, miserére nobis.
Iesu, sol iustítiæ, miserére nobis.
Iesu, Fili Maríæ Vírginis, miserére nobis.
Iesu amábilis, miserére nobis.
Iesu admirábilis, miserére nobis.
Iesu, Deus fortis, miserére nobis.
Iesu, pater futúri sæculi, miserére nobis.
Iesu, angele magni consílii, miserére nobis.
Iesu potentíssime, miserére nobis.
Iesu patientíssime, miserére nobis.
Iesu obedientíssime, miserére nobis.
Iesu, mitis et húmilis corde, miserére nobis.
Iesu, amátor castitátis, miserére nobis.
Iesu, amátor noster, miserére nobis.
Iesu, Deus pacis, miserére nobis.
Iesu, auctor vitæ, miserére nobis.
Iesu, exémplar virtútum, miserére nobis.
Iesu, zelátor animárum, miserére nobis.
Iesu, Deus noster, miserére nobis.
Iesu, refúgium nostrum, miserére nobis.
Iesu, pater páuperum, miserére nobis.
Iesu, thesáure fidélium, miserére nobis.
Iesu, bone pastor, miserére nobis.
Iesu, lux vera, miserére nobis.
Iesu, sapiéntia ætérna, miserére nobis.
Iesu, bónitas infiníta, miserére nobis.
Iesu, via et vita nostra, miserére nobis.
Iesu, gáudium Angelórum, miserére nobis.
Iesu, rex Patriarchárum, miserére nobis.
Iesu, magíster Apostolórum, miserére nobis.
Iesu, doctor Evangelistárum, miserére nobis.
Iesu, fortitúdo Mártyrum, miserére nobis.
Iesu, lumen Confessórum, miserére nobis.
Iesu, puritas Virginum, miserére nobis.
Iesu, coróna Sanctórum ómnium, miserére nobis.
Propítius esto, parce nobis, Iesu.
Propítius esto, exáudi nos, Iesu.
Ab omni malo, líbera nos, Iesu.
Ab omni peccáto, líbera nos, Iesu.
Ab ira tua, líbera nos, Iesu.
Ab insídiis diáboli, líbera nos, Iesu.
A spíritu fornicatiónis, líbera nos, Iesu.
A morte perpétua, líbera nos, Iesu.
A negléctu inspiratiónum tuárum, líbera nos, Iesu.
Per mystérium sanctæ incarnatiónis tuæ, líbera nos, Iesu.
Per nativitátem tuam, líbera nos, Iesu.
Per infántiam tuam, líbera nos, Iesu.
Per sanctíssimam vitam tuam, líbera nos, Iesu.
Per labóres tuos, líbera nos, Iesu.
Per agóniam et passiónem tuam, líbera nos, Iesu.
Per crucem et derelictiónem tuam, líbera nos, Iesu.
Per angústias tuas, líbera nos, Iesu.
Per mortem et sepultúram tuam, líbera nos, Iesu.
Per resurrectiónem tuam, líbera nos, Iesu.
Per ascensiónem tuam, líbera nos, Iesu.
Per institutiónem sanctíssimi Eucharístiæ sacráménti, líbera nos, Iesu.
Per gáudia tua, líbera nos, Iesu.
Per glóriam tuam, líbera nos, Iesu.
Agnus Dei, qui tollis peccáta mundi, parce nobis, Iesu.
Agnus Dei, qui tollis peccáta mundi, exáudi nos, Iesu.
Agnus Dei, qui tollis peccáta mundi, miserére nobis, Iesu.
Iesu, audi nos.
Iesu, exáudi nos.
Orémus: Dómine Iesu Christe, qui dixísti: «Pétite et accipiétis, quærite et inveniétis, pulsáte et aperiétur vobis», quæsumus, da nobis peténtibus affectum tuæ divínæ caritátis, ut te toto corde díligamus et in ómnibus operibus nostris gloriémur. Concéde ut nomen sanctum tuum, Dómine, párili timóre et amóre venerémur, quia numquam a tua gubernatióne decédis, quos in soliditáte tuæ caritátis instituís. Qui vivis et regnas in sǽcula sæculórum. Amen.`,
      },

      {
        id: "ladainha-sagrado-coracao-de-jesus",
        titlePortugues: "Ladainha do Sagrado Coração de Jesus",
        titleLatim: "Litaniæ Sacratissimi Cordis Iesu",
        textPortugues: `Ladainha do Sagrado Coração de Jesus
Senhor, tende piedade de nós.
Jesus Cristo, tende piedade de nós.
Senhor, tende piedade de nós.
Jesus Cristo, ouvi-nos.
Jesus Cristo, atendei-nos.
Pai celeste, que sois Deus, tende piedade de nós.
Filho, Redentor do mundo, que sois Deus, tende piedade de nós.
Espírito Santo, que sois Deus, tende piedade de nós.
Santíssima Trindade, que sois um só Deus, tende piedade de nós.
Coração de Jesus, Filho do Pai eterno, tende piedade de nós.
Coração de Jesus, formado pelo Espírito Santo no seio da Virgem Mãe, tende piedade de nós.
Coração de Jesus, unido substancialmente ao Verbo de Deus, tende piedade de nós.
Coração de Jesus, de majestade infinita, tende piedade de nós.
Coração de Jesus, templo santo de Deus, tende piedade de nós.
Coração de Jesus, tabernáculo do Altíssimo, tende piedade de nós.
Coração de Jesus, casa de Deus e porta do Céu, tende piedade de nós.
Coração de Jesus, fornalha ardente de caridade, tende piedade de nós.
Coração de Jesus, receptáculo de justiça e de amor, tende piedade de nós.
Coração de Jesus, cheio de bondade e de amor, tende piedade de nós.
Coração de Jesus, abismo de todas as virtudes, tende piedade de nós.
Coração de Jesus, digníssimo de todo o louvor, tende piedade de nós.
Coração de Jesus, Rei e centro de todos os corações, tende piedade de nós.
Coração de Jesus, no qual estão todos os tesouros da sabedoria e ciência, tende piedade de nós.
Coração de Jesus, no qual habita toda a plenitude da divindade, tende piedade de nós.
Coração de Jesus, no qual o Pai põe todas as suas complacências, tende piedade de nós.
Coração de Jesus, de cuja plenitude todos nós participamos, tende piedade de nós.
Coração de Jesus, desejado das colinas eternas, tende piedade de nós.
Coração de Jesus, paciente e de muita misericórdia, tende piedade de nós.
Coração de Jesus, rico para todos que vos invocam, tende piedade de nós.
Coração de Jesus, fonte de vida e santidade, tende piedade de nós.
Coração de Jesus, propiciação por nossos pecados, tende piedade de nós.
Coração de Jesus, saturado de opróbrios, tende piedade de nós.
Coração de Jesus, esmagado de dor por causa dos nossos pecados, tende piedade de nós.
Coração de Jesus, feito obediente até a morte, tende piedade de nós.
Coração de Jesus, transpassado pela lança, tende piedade de nós.
Coração de Jesus, fonte de toda consolação, tende piedade de nós.
Coração de Jesus, nossa vida e ressurreição, tende piedade de nós.
Coração de Jesus, nossa paz e reconciliação, tende piedade de nós.
Coração de Jesus, vítima dos pecadores, tende piedade de nós.
Coração de Jesus, salvação dos que em vós esperam, tende piedade de nós.
Coração de Jesus, esperança dos que morrem em vós, tende piedade de nós.
Coração de Jesus, delícias de todos os santos, tende piedade de nós.
Cordeiro de Deus, que tirais os pecados do mundo, perdoai-nos, Senhor.
Cordeiro de Deus, que tirais os pecados do mundo, ouvi-nos, Senhor.
Cordeiro de Deus, que tirais os pecados do mundo, tende piedade de nós, Senhor.
V. Jesus, manso e humilde de coração,
R. Fazei o nosso coração semelhante ao vosso.
Oremos:
Deus eterno e todo-poderoso, olhai para o Coração do vosso diletíssimo Filho e para os louvores e satisfações que Ele, em nome dos pecadores, vos tem tributado; e, deixando-vos aplacar, perdoai aos que imploram a vossa misericórdia, em nome de vosso mesmo Filho, Jesus Cristo, que convosco vive e reina na unidade do Espírito Santo. Amém.`,
        textLatim: `Litaniæ Sacratissimi Cordis Iesu
Kýrie, eléison.
Christe, eléison.
Kýrie, eléison.
Christe, audi nos.
Christe, exáudi nos.
Pater de cælis, Deus, miserére nobis.
Fili, Redémptor mundi, Deus, miserére nobis.
Spíritus Sancte, Deus, miserére nobis.
Sancta Trínitas, unus Deus, miserére nobis.
Cor Iesu, Filii Patris ætérni, miserére nobis.
Cor Iesu, in sinu Virginis Matris a Spíritu Sancto formátum, miserére nobis.
Cor Iesu, Verbo Dei substántialiter unítum, miserére nobis.
Cor Iesu, maiestátis infinitæ, miserére nobis.
Cor Iesu, templum Dei sanctum, miserére nobis.
Cor Iesu, tabernáculum Altíssimi, miserére nobis.
Cor Iesu, domus Dei et porta cæli, miserére nobis.
Cor Iesu, fornax ardens caritátis, miserére nobis.
Cor Iesu, iustítiæ et amóris receptáculum, miserére nobis.
Cor Iesu, bonitáte et amóre plenum, miserére nobis.
Cor Iesu, virtútum ómnium abýssus, miserére nobis.
Cor Iesu, omni laude digníssimum, miserére nobis.
Cor Iesu, rex et centrum ómnium córdium, miserére nobis.
Cor Iesu, in quo sunt omnes thesáuri sapiéntiæ et sciéntiæ, miserére nobis.
Cor Iesu, in quo hábitat omnis plenitúdo divinitátis, miserére nobis.
Cor Iesu, in quo Pater sibi bene complácuit, miserére nobis.
Cor Iesu, de cuius plenitúdine omnes nos accépimus, miserére nobis.
Cor Iesu, desidérium cólium æternórum, miserére nobis.
Cor Iesu, pátiens et multæ misericórdiæ, miserére nobis.
Cor Iesu, dives in omnes qui ínvocant te, miserére nobis.
Cor Iesu, fons vitæ et sanctitátis, miserére nobis.
Cor Iesu, propitiátio pro peccátis nostris, miserére nobis.
Cor Iesu, saturátum oppróbriis, miserére nobis.
Cor Iesu, attritum propter scélera nostra, miserére nobis.
Cor Iesu, usque ad mortem obédiens factum, miserére nobis.
Cor Iesu, láncea perforátum, miserére nobis.
Cor Iesu, fons totíus consolatiónis, miserére nobis.
Cor Iesu, vita et resurréctio nostra, miserére nobis.
Cor Iesu, pax et reconciliátio nostra, miserére nobis.
Cor Iesu, víctima peccatórum, miserére nobis.
Cor Iesu, salus in te sperántium, miserére nobis.
Cor Iesu, spes in te moriéntium, miserére nobis.
Cor Iesu, delíciæ Sanctórum ómnium, miserére nobis.
Agnus Dei, qui tollis peccáta mundi, parce nobis, Dómine.
Agnus Dei, qui tollis peccáta mundi, exáudi nos, Dómine.
Agnus Dei, qui tollis peccáta mundi, miserére nobis, Dómine.
℣. Iesu, mitis et húmilis corde,
℟. Fac cor nostrum símile tuum.
Orémus:
Omnípotens sempitérne Deus, réspice in Cor diléctissimi Fílii tui et in laudes et satisfactiónes, quas in nómine peccatórum tibi réddit; et supplícibus tuis veniam concéde placátus, in nómine eiúsdem Fílii tui Iesu Christi, qui tecum vivit et regnat in unitáte Spíritus Sancti, Deus, per ómnia sǽcula sæculórum. Amen.`,
      },

      {
        id: "ladainha-preciosissimo-sangue-de-cristo",
        titlePortugues: "Ladainha do Preciosíssimo Sangue de Cristo",
        titleLatim: "Litaniæ Pretiosissimi Sanguinis Christi",
        textPortugues: `Ladainha em honra ao Preciosíssimo Sangue de Cristo
Senhor, tende piedade de nós.
Cristo, tende piedade de nós.
Senhor, tende piedade de nós.
Jesus Cristo, ouvi-nos.
Jesus Cristo, atendei-nos.
Deus Pai dos céus, tende piedade de nós.
Deus Filho, redentor do mundo tende piedade de nós.
Deus Espírito Santo, tende piedade de nós.
Santíssima Trindade, que sois um só Deus, tende piedade de nós.
Sangue de Cristo, Sangue do Filho Unigênito do Eterno Pai, salvai-nos.
Sangue de Cristo, Sangue do Verbo de Deus encarnado, salvai-nos.
Sangue de Cristo, Sangue do Novo e Eterno Testamento, salvai-nos.
Sangue de Cristo, correndo pela terra na agonia, salvai-nos.
Sangue de Cristo, manando abundante na flagelação, salvai-nos.
Sangue de Cristo, gotejando na coroação de espinhos, salvai-nos.
Sangue de Cristo, derramado na cruz, salvai-nos.
Sangue de Cristo, preço da nossa salvação, salvai-nos.
Sangue de Cristo, sem o qual não pode haver redenção, salvai-nos.
Sangue de Cristo, que apagais a sede das almas e as purificais na Eucaristia, salvai-nos.
Sangue de Cristo, torrente de misericórdia, salvai-nos.
Sangue de Cristo, vencedor dos demônios, salvai-nos.
Sangue de Cristo, fortaleza dos mártires, salvai-nos.
Sangue de Cristo, virtude dos confessores, salvai-nos.
Sangue de Cristo, que suscitais almas virgens, salvai-nos.
Sangue de Cristo, força dos tentados, salvai-nos.
Sangue de Cristo, alívio dos que trabalham, salvai-nos.
Sangue de Cristo, consolação dos que choram, salvai-nos.
Sangue de Cristo, esperança dos penitentes, salvai-nos.
Sangue de Cristo, conforto dos moribundos, salvai-nos.
Sangue de Cristo, paz e doçura dos corações, salvai-nos.
Sangue de Cristo, penhor de eterna vida, salvai-nos.
Sangue de Cristo, que libertais as almas do Purgatório, salvai-nos.
Sangue de Cristo, digno de toda a honra e glória, salvai-nos.
Cordeiro de Deus, que tirais os pecados do mundo, perdoai-nos, Senhor.
Cordeiro de Deus, que tirais os pecados do mundo, ouvi-nos, Senhor.
Cordeiro de Deus, que tirais os pecados do mundo, tende piedade de nós, Senhor.
V. Remistes-nos, Senhor com o Vosso Sangue.
R. E fizestes de nós um reino para o nosso Deus.
Oremos:
Todo-Poderoso e Eterno Deus, que constituístes o Vosso Unigênito Filho, Redentor do mundo, e quisestes ser aplacado com o seu Sangue, concedei-nos a graça de venerar o preço da nossa salvação e de encontrar, na virtude que Ele contém, defesa contra os males da vida presente, de tal modo que eternamente gozemos dos seus frutos no Céu. Pelo mesmo Cristo, Senhor nosso. Assim seja.`,
        textLatim: `Litaniæ Pretiosissimi Sanguinis Christi
Kýrie, eléison.
Christe, eléison.
Kýrie, eléison.
Christe, audi nos.
Christe, exáudi nos.
Pater de cælis, Deus, miserére nobis.
Fili, Redémptor mundi, Deus, miserére nobis.
Spíritus Sancte, Deus, miserére nobis.
Sancta Trínitas, unus Deus, miserére nobis.
Sanguis Christi, Unigéniti Patris ætérni, salva nos.
Sanguis Christi, Verbi Dei incarnáti, salva nos.
Sanguis Christi, Novi et Ætérni Testaménti, salva nos.
Sanguis Christi, in agónia decúrrens in terram, salva nos.
Sanguis Christi, in flagellatióne profúsus, salva nos.
Sanguis Christi, in coronatióne spinárum emanáns, salva nos.
Sanguis Christi, in Cruce effúsus, salva nos.
Sanguis Christi, pretium nostræ salvatiónis, salva nos.
Sanguis Christi, sine quo non fit remíssio, salva nos.
Sanguis Christi, in Eucharístia potus et lavácrum animárum, salva nos.
Sanguis Christi, torrens misericórdiæ, salva nos.
Sanguis Christi, victor dæmónum, salva nos.
Sanguis Christi, fortitúdo Mártyrum, salva nos.
Sanguis Christi, virtus Confessórum, salva nos.
Sanguis Christi, generans Vírgines, salva nos.
Sanguis Christi, robur tentatórum, salva nos.
Sanguis Christi, refúgium labórantium, salva nos.
Sanguis Christi, solátium fléntium, salva nos.
Sanguis Christi, spes pœniténtium, salva nos.
Sanguis Christi, solácium moriéntium, salva nos.
Sanguis Christi, pax et dulcédo córdium, salva nos.
Sanguis Christi, pignus vitæ ætérnæ, salva nos.
Sanguis Christi, ánimas de Lymbó liberans, salva nos.
Sanguis Christi, omni honóre et glória digníssime, salva nos.
Agnus Dei, qui tollis peccáta mundi, parce nobis, Dómine.
Agnus Dei, qui tollis peccáta mundi, exáudi nos, Dómine.
Agnus Dei, qui tollis peccáta mundi, miserére nobis, Dómine.
℣. Redemísti nos, Dómine, in Sánguine tuo,
℟. Et fecísti nos Deo nostro regnum.
Orémus:
Omnípotens sempitérne Deus, qui Unigénitum Filium tuum mundi Redemptórem constituísti, ac eius Sánguine placári voluísti: concéde, quǽsumus, salútis nostræ pretium sollémni cultu ita venerári, atque a præséntis vitæ malis eius virtúte deféndi in terris, ut fructu perpétuo lætémur in cælis. Per eúndem Christum Dóminum nostrum. Amen.`,
      },

      {
        id: "ladainha-sao-jose",
        titlePortugues: "Ladainha de São José",
        titleLatim: "Litaniæ Sancti Ioseph",
        textPortugues: `Ladainha em honra a São José
Senhor, tende piedade de nós.
Jesus Cristo, tende piedade de nós.
Senhor, tende piedade de nós.
Jesus Cristo, ouvi-nos.
Jesus Cristo, atendei-nos.
Deus, Pai dos Céus, tende piedade de nós.
Deus Filho, Redentor do mundo, tende piedade de nós.
Deus Espírito Santo, tende piedade de nós.
Santíssima Trindade, que sois um só Deus, tende piedade de nós.
Santa Maria, rogai por nós.
São José, rogai por nós.
Ilustre filho de Davi, rogai por nós.
Luz dos Patriarcas, rogai por nós.
Esposo da Mãe de Deus, rogai por nós.
Casto guarda da Virgem, rogai por nós.
Sustentador do Filho de Deus, rogai por nós.
Zeloso defensor de Jesus Cristo, rogai por nós.
Chefe da Sagrada Família, rogai por nós.
José justíssimo, rogai por nós.
José castíssimo, rogai por nós.
José prudentíssimo, rogai por nós.
José fortíssimo, rogai por nós.
José obedientíssimo, rogai por nós.
José fidelíssimo, rogai por nós.
Espelho de paciência, rogai por nós.
Amante da pobreza, rogai por nós.
Modelo dos trabalhadores, rogai por nós.
Honra da vida de família, rogai por nós.
Guarda das virgens, rogai por nós.
Sustentáculo das famílias, rogai por nós.
Alívio dos miseráveis, rogai por nós.
Esperança dos doentes, rogai por nós.
Patrono dos moribundos, rogai por nós.
Terror dos demônios, rogai por nós.
Protetor da Santa Igreja, rogai por nós.
Cordeiro de Deus que tirais os pecados do mundo, perdoai-nos, Senhor.
Cordeiro de Deus que tirais os pecados do mundo, ouvi-nos, Senhor.
Cordeiro de Deus que tirais os pecados do mundo, tende piedade de nós.
V. Ele constituiu-o senhor de sua casa.
R. E fê-lo príncipe de todos os seus bens.
Oremos. Ó Deus, que por inefável providência vos dignastes escolher a São José por esposo de vossa Mãe Santíssima; concedei-nos, vo-lo pedimos, que mereçamos ter por intercessor no céu, aquele que veneramos na terra como protetor. Vós que viveis e reinais por todos os séculos dos séculos. Amém.`,
        textLatim: `Litaniæ Sancti Ioseph
Kýrie, eléison.
Christe, eléison.
Kýrie, eléison.
Christe, audi nos.
Christe, exáudi nos.
Pater de cælis, Deus, miserére nobis.
Fili, Redémptor mundi, Deus, miserére nobis.
Spíritus Sancte, Deus, miserére nobis.
Sancta Trínitas, unus Deus, miserére nobis.
Sancta María, ora pro nobis.
Sancte Ioseph, ora pro nobis.
Proles David ínclita, ora pro nobis.
Lumen Patrum, ora pro nobis.
Dei Genetrícis spónse, ora pro nobis.
Custos pudíce Vírginis, ora pro nobis.
Fílii Dei nutrície, ora pro nobis.
Christi defénsor sedule, ora pro nobis.
Almae Famíliæ præsés, ora pro nobis.
Ioseph iustíssime, ora pro nobis.
Ioseph castíssime, ora pro nobis.
Ioseph prudentíssime, ora pro nobis.
Ioseph fortíssime, ora pro nobis.
Ioseph oboedientíssime, ora pro nobis.
Ioseph fidelíssime, ora pro nobis.
Spéculum patiéntiae, ora pro nobis.
Amátor paupertátis, ora pro nobis.
Exémplar opificum, ora pro nobis.
Domésticæ vitæ decus, ora pro nobis.
Custos vírginum, ora pro nobis.
Familiárum colúmen, ora pro nobis.
Solátium miserórum, ora pro nobis.
Spes ægrotántium, ora pro nobis.
Patróne moriéntium, ora pro nobis.
Terror dæmónum, ora pro nobis.
Protéctor sanctæ Ecclésiæ, ora pro nobis.
Agnus Dei, qui tollis peccáta mundi, parce nobis, Dómine.
Agnus Dei, qui tollis peccáta mundi, exáudi nos, Dómine.
Agnus Dei, qui tollis peccáta mundi, miserére nobis.
℣. Constítuit eum dóminum domus suæ,
℟. Et príncipem omnis possessiónis suæ.
Orémus. Deus, qui ineffábili providéntia beátum Ioseph sanctíssimæ Genetrícis tuæ sponsum elígere dignátus es: præsta, quǽsumus; ut, quem protectórem venerámur in terris, intercessórem habére mereámur in cælis: Qui vivis et regnas in sǽcula sæculórum. Amen.`,
      },

      {
        id: "ladainha-humildade",
        titlePortugues: "Ladainha da Humildade",
        titleLatim: "Litaniæ Humilitatis",
        textPortugues: `Ladainha da Humildade
Jesus, manso e humilde de coração, ouvi-me.
Do desejo de ser estimado, livrai-me, ó Jesus.
Do desejo de ser amado, livrai-me, ó Jesus.
Do desejo de ser conhecido, livrai-me, ó Jesus.
Do desejo de ser honrado, livrai-me, ó Jesus.
Do desejo de ser louvado, livrai-me, ó Jesus.
Do desejo de ser preferido, livrai-me, ó Jesus.
Do desejo de ser consultado, livrai-me, ó Jesus.
Do desejo de ser aprovado, livrai-me, ó Jesus.
Do receio de ser humilhado, livrai-me, ó Jesus.
Do receio de ser desprezado, livrai-me, ó Jesus.
Do receio de sofrer repulsas, livrai-me, ó Jesus.
Do receio de ser caluniado, livrai-me, ó Jesus.
Do receio de ser esquecido, livrai-me, ó Jesus.
Do receio de ser ridicularizado, livrai-me, ó Jesus.
Do receio de ser difamado, livrai-me, ó Jesus.
Do receio de ser objeto de suspeita, livrai-me, ó Jesus.
Que os outros sejam amados mais do que eu, Jesus, dai-me a graça de desejá-lo.
Que os outros sejam estimados mais do que eu, Jesus, dai-me a graça de desejá-lo.
Que os outros possam elevar-se na opinião do mundo, e que eu possa ser diminuído, Jesus, dai-me a graça de desejá-lo.
Que os outros possam ser escolhidos e eu posto de lado, Jesus, dai-me a graça de desejá-lo.
Que os outros possam ser louvados e eu desprezado, Jesus, dai-me a graça de desejá-lo.
Que os outros possam ser preferidos a mim em todas as coisas, Jesus, dai-me a graça de desejá-lo.
Que os outros possam ser mais santos do que eu, embora me torne o mais santo quanto me for possível, Jesus, dai-me a graça de desejá-lo.`,
        textLatim: `Litaniæ Humilitatis
Iesu, mitis et húmilis corde, exáudi me.
A desidério estimári, líbera me, o Iesu.
A desidério amári, líbera me, o Iesu.
A desidério cognosci, líbera me, o Iesu.
A desidério honorári, líbera me, o Iesu.
A desidério laudári, líbera me, o Iesu.
A desidério præferri, líbera me, o Iesu.
A desidério consultári, líbera me, o Iesu.
A desidério approbári, líbera me, o Iesu.
A timóre humiliári, líbera me, o Iesu.
A timóre despici, líbera me, o Iesu.
A timóre repelli, líbera me, o Iesu.
A timóre calumniári, líbera me, o Iesu.
A timóre oblivisci, líbera me, o Iesu.
A timóre derideri, líbera me, o Iesu.
A timóre diffamári, líbera me, o Iesu.
A timóre suspectum esse, líbera me, o Iesu.
Ut alii plus quam ego amentur, Iesu, da mihi grátiam hoc desiderándi.
Ut alii plus quam ego æstiméntur, Iesu, da mihi grátiam hoc desiderándi.
Ut alii in opinione mundi ascendant, et ego minuár, Iesu, da mihi grátiam hoc desiderándi.
Ut alii eligantur et ego postpónar, Iesu, da mihi grátiam hoc desiderándi.
Ut alii laudentur et ego despiciar, Iesu, da mihi grátiam hoc desiderándi.
Ut alii in ómnibus mihi præferantur, Iesu, da mihi grátiam hoc desiderándi.
Ut alii sanctióres fiant quam ego, licet ego quam maxíme sanctus fiam, Iesu, da mihi grátiam hoc desiderándi.`,
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
