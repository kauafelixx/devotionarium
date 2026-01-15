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
Ave María...
V. Écce ancílla Dómini.
R. Fiat míhi secúndum verbum túum.
Ave María...
V. Et Verbum caro factum est.
R. Et habitávit in nobis.
Ave María...

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
    textPortugues: "Em vossas mãos, ó meu Deus, eu me entrego. Virai e revirai esta argila, como a vasilha que se modela nas mãos do oleiro. Dai-lhe forma e em seguida despedaçai-a, se assim quiserdes; ela vos pertence e nada tem a dizer. Basta-me que ela sirva a todos os vossos desígnios e que em nada resista a vosso divino beneplácito, para o qual eu fui criado. Pedi, ordenai: que quereis que eu faça? Que quereis que eu deixe de fazer? Exaltado ou rebaixado, perseguido, consolado ou aflito, utilizado em vossas obras ou sem para nada servir, a mim não resta senão dizer, a exemplo de vossa Mãe Santíssima: Seja feito segundo a vossa palavra. Concedei-me o amor por excelência, o amor da cruz, não das cruzes heroicas cujo esplendor poderia nutrir o amor-próprio, mas das cruzes ordinárias de todos os dias: no caminho, na contradição, no esquecimento, no fracasso, nos falsos julgamentos, nas contrariedades, na frieza ou no entusiasmo dos outros, na enfermidade do corpo, nas trevas do espírito, no silêncio e na secura do coração. Somente então sabereis que vos amo, embora às vezes nem eu mesmo o saiba ou sinta; e isto me basta.",
    textLatim: "In manus tuas, Deus meus, me trado. Verte et revolve hanc argillam sicut vas quod in manu figuli formatur. Da ei formam et postea confringe, si ita vis; tua est enim et nihil dicere potest. Sufficit mihi ut omnibus tuis consiliis inserviat nec ullo modo tuo divino beneplacito resistat, ad quod creatus sum. Iube, praecipe: quid vis ut faciam? Quid vis ut omittam? Exaltatus aut humiliatus, persecutus, consolatus aut afflictus, adhibitus in operibus tuis aut ad nihil utilis, nihil mihi restat nisi dicere, ad exemplum Sanctissimae Matris tuae: Fiat secundum verbum tuum. Concede mihi amorem excellentissimum, amorem crucis, non illarum crucium heroicorum quae amorem proprium alunt, sed crucium quotidianarum, quae in itinere vitae occurrunt: in contradictione, oblivione, defectu, falsis iudiciis, adversitatibus, frigiditate aut fervore aliorum, in infirmitate corporis, in tenebris spiritus, in silentio et ariditate cordis. Tunc tantum scies me te amare, etiamsi ego ipse id interdum nec sentiam nec intelligam; et hoc mihi sufficit."
  },

  {
    id: "oferecimento-do-dia",
    titlePortugues: "Oferecimento do Dia",
    titleLatim: "Oblatio Diei",
    textPortugues: "Senhor Deus, Rei do céu e da terra, dirige, santifica, conduz e governa neste dia nossos corações e nossos corpos, nossos sentimentos, palavras e ações, a fim de que, submissos à tua lei e agindo conforme os teus preceitos, mereçamos, por teu auxílio, ser salvos e livres nesta vida e na eternidade. Ó Salvador do mundo, que vives e reinas pelos séculos dos séculos. Amém.",
    textLatim: "Dirigere et sanctificare, regere et gubernare dignare, Domine Deus, Rex caeli et terrae, hodie corda et corpora nostra, sensus, sermones et actus nostros in lege tua et in operibus mandatorum tuorum, ut hic et in aeternum, te auxiliante, salvi et liberi esse mereamur. Salvator mundi, qui vivis et regnas in saecula saeculorum. Amen."
  },

  {
    id: "oracoes-manha-ao-vestir",
    titlePortugues: "Orações da Manhã – Ao vestir-se",
    titleLatim: "Oratio Matutina – Dum Vestitur",
    textPortugues: "Jesus, Salvador meu, ofereço-me e consagro-me inteiramente e para sempre a ti, e por ti ao Eterno Pai. Eu te ofereço meu corpo, minha alma, meu espírito, meu coração, minha vida, todos os meus pensamentos, palavras e ações, as respirações e as batidas do meu coração, meus olhares e o uso dos meus sentidos, tudo quanto sou e possuo. Consagro tudo à tua glória, para que tudo seja louvor, adoração e amor a ti, Salvador meu. Eu te suplico que socorras as angústias dos pobres e, assim como me socorres para vestir meu corpo, reveste também minha alma de ti mesmo, de teu amor e de todas as virtudes.",
    textLatim: "Iesu, Salvator meus, me ipsum tibi offero et consecro totum et in perpetuum, et per te Patri Aeterno. Offerro tibi corpus meum, animam meam, spiritum meum, cor meum, vitam meam, omnes cogitationes, verba et actiones meas, respirationes et pulsus cordis mei, oculos meos et usum omnium sensuum meorum, totum quod sum et possideo. Omnia gloriae tuae consecro, ut sint laus, adoratio et amor tibi, Salvator meus. Supplico ut pauperum angustias subleves et, sicut corpus meum vestis, ita animam meam te ipso, tuo amore omnibusque virtutibus induas."
  },

  {
    id: "senhor-deus-todo-poderoso",
    titlePortugues: "Senhor Deus Todo-poderoso",
    titleLatim: "Domine Deus Omnipotens",
    textPortugues: "Senhor Deus Todo-poderoso, que nos fizestes chegar ao princípio deste dia, salvai-nos hoje por vosso poder, para que não nos deixemos arrastar a pecado algum neste dia, mas que nossas palavras, pensamentos e obras tendam sempre ao cumprimento da vossa justiça. Por Cristo, nosso Senhor. Amém.",
    textLatim: "Domine Deus omnipotens, qui ad principium huius diei nos pervenire fecisti, salva nos hodie tua virtute, ut in nullo peccato labamur, sed omnes cogitationes, verba et opera nostra ad implendam iustitiam tuam dirigantur. Per Christum Dominum nostrum. Amen."
  },

  {
    id: "consagracao-diaria-nossa-senhora",
    titlePortugues: "Consagração Diária a Nossa Senhora",
    titleLatim: "Consecratio Quotidiana ad Beatam Virginem Mariam",
    textPortugues: "Ó minha Senhora e minha Mãe, eu me ofereço todo a vós e, em prova da minha devoção para convosco, vos consagro neste dia meus olhos, meus ouvidos, minha boca, meu coração e todo o meu ser. E porque assim sou vosso, ó incomparável Mãe, guardai-me e defendei-me como coisa e propriedade vossa. Amém.",
    textLatim: "O Domina mea et Mater mea, totus me tibi offero et, in testimonium devotionis meae erga te, tibi hodie consecro oculos meos, aures meas, os meum, cor meum atque totum meipsum. Quia igitur tuus sum, o incomparabilis Mater, conserva me et protege me ut rem et possessionem tuam. Amen."
  }



       
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
        id: "oracao-noite",
        titlePortugues: "Oração da Noite",
        titleLatim: "Oratio Vespertina",
        textPortugues:
          "Senhor meu Deus, agradeço-Vos por todos os benefícios que me concedestes neste dia. Peço-Vos perdão pelos pecados que cometi. Guardai-me durante esta noite e livrai-me de todo mal. Amém.",
        textLatim:
          "Dómine Deus meus, grátias ago Tibi pro ómnibus benefíciis quæ mihi hódie contulísti. Véniam peto pro peccátis quæ commísi. Custódi me hac nocte et líbera me ab omni malo. Amen.",
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
        id: "ave-maria",
        titlePortugues: "Ave Maria",
        titleLatim: "Ave María",
        textPortugues:
          "Ave Maria, cheia de graça, o Senhor é convosco, bendita sois vós entre as mulheres, e bendito é o fruto do vosso ventre, Jesus. Santa Maria, Mãe de Deus, rogai por nós, pecadores, agora e na hora de nossa morte. Amém.",
        textLatim:
          "Ave María, grátia plena, Dóminus tecum, benedícta tu in muliéribus, et benedíctus fructus ventris tui, Iesus. Sancta María, Mater Dei, ora pro nobis peccatóribus, nunc et in hora mortis nostræ. Amen.",
      },
      {
        id: "salve-rainha",
        titlePortugues: "Salve Rainha",
        titleLatim: "Salve Regina",
        textPortugues:
          "Salve, Rainha, Mãe de misericórdia, vida, doçura e esperança nossa, salve! A vós bradamos, os degredados filhos de Eva. A vós suspiramos, gemendo e chorando neste vale de lágrimas. Eia, pois, advogada nossa, esses vossos olhos misericordiosos a nós volvei. E depois deste desterro, mostrai-nos Jesus, bendito fruto do vosso ventre. Ó clemente, ó piedosa, ó doce sempre Virgem Maria. Amém.",
        textLatim:
          "Salve, Regína, Mater misericórdiæ, vita, dulcédo et spes nostra, salve. Ad te clamámus, éxsules fílii Hevæ. Ad te suspirámus, geméntes et flentes in hac lacrimárum valle. Eia ergo, advocáta nostra, illos tuos misericórdes óculos ad nos convérte. Et Iesum, benedíctum fructum ventris tui, nobis post hoc exsílium osténde. O clemens, o pia, o dulcis Virgo María. Amen.",
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
        id: "oracao-sao-jose",
        titlePortugues: "Oração a São José",
        titleLatim: "Oratio ad Sanctum Ioseph",
        textPortugues:
          "Ó glorioso São José, esposo de Maria Virgem, guardai-nos e protegei-nos sob vossa santíssima guarda. Que a vossa singular proteção nos guarde sempre, em todos os momentos e circunstâncias de nossa vida. Amém.",
        textLatim:
          "O glorióse Sancte Ioseph, sponse Maríæ Vírginis, custódi nos et prótege sub sanctíssimo tuo patrocínio. Tua singuláris protéctio nos semper custódiat, in ómnibus vitæ nostræ moméntis et circumstántiis. Amen.",
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
    categoryId: "antes-missa",
    categoryTitle: "Antes da Santa Missa",
    prayers: [
      {
        id: "oracao-antes-missa",
        titlePortugues: "Oração antes da Santa Missa",
        titleLatim: "Oratio ante Missam",
        textPortugues:
          "Senhor, eu não sou digno de assistir ao vosso Santo Sacrifício, mas confio na vossa infinita misericórdia. Concedei-me a graça de participar com devoção e recolhimento, para que minha alma seja purificada e santificada. Amém.",
        textLatim:
          "Dómine, non sum dignus assístere Sancto Sacrifício Tuo, sed confído in infiníta misericórdia Tua. Concéde mihi grátiam participándi cum devotióne et recollectióne, ut ánima mea purificétur et sanctificétur. Amen.",
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
  categoryId: string
): PrayerCategory | undefined => {
  return prayerCategories.find((cat) => cat.categoryId === categoryId);
};

export const getPrayerById = (
  categoryId: string,
  prayerId: string
): Prayer | undefined => {
  const category = getCategoryById(categoryId);
  return category?.prayers.find((prayer) => prayer.id === prayerId);
};
