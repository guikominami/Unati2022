import Category from "../models/category";
import Vocabulary from "../models/vocabulary";
import Phrase from "../models/phrases";

export const CATEGORIES = [
  new Category(
    1,
    "Desafio de Vocabulário",
    "#f4ebdc",
    "VocabularyLearnScreen",
    "Vocabulary"
  ),
  new Category(
    2,
    "Lista de Vocabulário",
    "#CF9B33",
    "VocabularyListScreen",
    "Vocabulary"
  ),
  new Category(
    3,
    "Desafio de Frases",
    "#7E2E27",
    "VocabularyLearnScreen",
    "Phrase"
  ),
  new Category(
    4,
    "Lista de Frases",
    "#3A1C1D",
    "VocabularyListScreen",
    "Phrase"
  ),
];

export const VOCABULARY = [
  new Vocabulary(
    1,
    "nûnu,naná",
    "nûnu",
    "naná",
    "Abacaxi",
    "naná",
    require("../assets/images/vocabulary/abacaxi.jpg"),
    require("../assets/audios/vocabulary/abacaxi.mp3")
  ),
  new Vocabulary(
    2,
    "orekáti,kevîti",
    "orekáti",
    "kevîti",
    "Abanico",
    "kevîti",
    require("../assets/images/vocabulary/abanico.jpg"),
    require("../assets/audios/vocabulary/abanico.mp3")
  ),
  new Vocabulary(
    3,
    "oropeuti,oropa",
    "oropeuti",
    "oropa",
    "Abelha",
    "oropa",
    require("../assets/images/vocabulary/abelha.jpg"),
    require("../assets/audios/vocabulary/abelha.mp3")
  ),
  new Vocabulary(
    4,
    "Kâmo,kâme",
    "Kâmo",
    "kâme",
    "Abobora",
    "kâme",
    require("../assets/images/vocabulary/abobora.jpg"),
    require("../assets/audios/vocabulary/abobora.mp3")
  ),
  new Vocabulary(
    5,
    "kovoxeati,kovo’ero",
    "kovoxeati",
    "kovo’ero",
    "Águia",
    "kovo’ero",
    require("../assets/images/vocabulary/aguia.jpg"),
    require("../assets/audios/vocabulary/aguia.mp3")
  ),
  new Vocabulary(
    6,
    "tîpe,tôpe",
    "tîpe",
    "tôpe",
    "Agulha",
    "tôpe",
    require("../assets/images/vocabulary/agulha.jpg"),
    require("../assets/audios/vocabulary/agulha.mp3")
  ),
  new Vocabulary(
    7,
    "Nêvo,névoe",
    "Nêvo",
    "névoe",
    "Algodão",
    "névoe",
    require("../assets/images/vocabulary/algodao.jpg"),
    require("../assets/audios/vocabulary/algodao.mp3")
  ),
  new Vocabulary(
    8,
    "kurikoâti,kurîke",
    "kurikoâti",
    "kurîke",
    "Amendoim",
    "kurîke",
    require("../assets/images/vocabulary/amendoin.jpg"),
    require("../assets/audios/vocabulary/amendoin.mp3")
  ),
  new Vocabulary(
    9,
    "uhôro,horoxo",
    "uhôro",
    "horoxo",
    "Anel",
    "horoxo",
    require("../assets/images/vocabulary/anel.jpg"),
    require("../assets/audios/vocabulary/anel.mp3")
  ),
  new Vocabulary(
    10,
    "tokerehi,tokoe",
    "tokerehi",
    "tokoe",
    "Angola(galinha)",
    "tokoe",
    require("../assets/images/vocabulary/angola.jpg"),
    require("../assets/audios/vocabulary/angola.mp3")
  ),
  new Vocabulary(
    11,
    "tâki,tâe",
    "tâki",
    "tâe",
    "Anúbranco",
    "tâe",
    require("../assets/images/vocabulary/anubranco.jpg"),
    require("../assets/audios/vocabulary/anubranco.mp3")
  ),
  new Vocabulary(
    12,
    "povôti,povôko",
    "povôti",
    "povôko",
    "Anúpreto",
    "povôko",
    require("../assets/images/vocabulary/anupreto.jpg"),
    require("../assets/audios/vocabulary/anupreto.mp3")
  ),
  new Vocabulary(
    13,
    "númiru,númiku",
    "númiru",
    "númiku",
    "Anzol",
    "númiku",
    require("../assets/images/vocabulary/anzol.jpg"),
    require("../assets/audios/vocabulary/anzol.mp3")
  ),
  new Vocabulary(
    14,
    "Váhere,varâka",
    "Váhere",
    "varâka",
    "Aracuã",
    "varâka",
    require("../assets/images/vocabulary/aracua.jpg"),
    require("../assets/audios/vocabulary/aracua.mp3")
  ),
  new Vocabulary(
    15,
    "Váhere,váhaha",
    "Váhere",
    "váhaha",
    "Aranha",
    "váhaha",
    require("../assets/images/vocabulary/aranha.jpg"),
    require("../assets/audios/vocabulary/aranha.mp3")
  ),
  new Vocabulary(
    16,
    "Hiyáiti,hiyáinekuti",
    "Hiyáiti",
    "hiyáinekuti",
    "Ararinha",
    "hiyáinekuti",
    require("../assets/images/vocabulary/arara.jpg"),
    require("../assets/audios/vocabulary/ararinha.mp3")
  ),
  new Vocabulary(
    17,
    "opêti,úpikovoe",
    "opêti",
    "úpikovoe",
    "Arcoíris",
    "úpikovoe",
    require("../assets/images/vocabulary/arcoiris.jpg"),
    require("../assets/audios/vocabulary/arcoiris.mp3")
  ),
  new Vocabulary(
    18,
    "vorîri,harîri",
    "vorîri",
    "harîri",
    "Areia",
    "harîri",
    require("../assets/images/vocabulary/areia.jpg"),
    require("../assets/audios/vocabulary/areia.mp3")
  ),
  new Vocabulary(
    19,
    "nâku,nakáku",
    "nâku",
    "nakáku",
    "Arroz",
    "nakáku",
    require("../assets/images/vocabulary/arroz.jpg"),
    require("../assets/audios/vocabulary/arroz.mp3")
  ),
  new Vocabulary(
    20,
    "Tíketi,tíkoti",
    "Tíketi",
    "tíkoti",
    "Árvore",
    "tíkoti",
    require("../assets/images/vocabulary/arvore.jpg"),
    require("../assets/audios/vocabulary/arvore.mp3")
  ),
  new Vocabulary(
    21,
    "kevino,kêvi",
    "kevino",
    "kêvi",
    "Asa",
    "kêvi",
    require("../assets/images/vocabulary/asa.jpg"),
    require("../assets/audios/vocabulary/asa.mp3")
  ),
  new Vocabulary(
    22,
    "opêti,osoiuti",
    "opêti",
    "osoiuti",
    "Assado",
    "osoiuti",
    require("../assets/images/vocabulary/assado.jpg"),
    require("../assets/audios/vocabulary/assado.mp3")
  ),
  new Vocabulary(
    23,
    "Penanana,Pânana",
    "Penanana",
    "Pânana",
    "Banana",
    "Pânana",
    require("../assets/images/vocabulary/banana.jpg"),
    require("../assets/audios/vocabulary/banana.mp3")
  ),
  new Vocabulary(
    24,
    "Nípae,nipâke",
    "Nípae",
    "nipâke",
    "Baralho",
    "nipâke",
    require("../assets/images/vocabulary/baralho.jpg"),
    require("../assets/audios/vocabulary/baralho.mp3")
  ),
  new Vocabulary(
    25,
    "Yômo,yomômo",
    "Yômo",
    "yomômo",
    "Barro",
    "yomômo",
    require("../assets/images/vocabulary/barro.jpg"),
    require("../assets/audios/vocabulary/barro.mp3")
  ),
  new Vocabulary(
    26,
    "Xulûki,xulukúpenovoti",
    "Xulûki",
    "xulukúpenovoti",
    "Batata assada",
    "xulukúpenovoti",
    require("../assets/images/vocabulary/batataassada.jpg"),
    require("../assets/audios/vocabulary/batataassada.mp3")
  ),
  new Vocabulary(
    27,
    "Koye,ko’ê",
    "Koye",
    "ko’ê",
    "Batata",
    "ko’ê",
    require("../assets/images/vocabulary/batata.jpg"),
    require("../assets/audios/vocabulary/batata.mp3")
  ),
  new Vocabulary(
    28,
    "Kohípoti,kohíhiti",
    "Kohípoti",
    "kohíhiti",
    "Bêbado",
    "kohíhiti",
    require("../assets/images/vocabulary/bebado.jpg"),
    require("../assets/audios/vocabulary/bebado.mp3")
  ),
  new Vocabulary(
    29,
    "orekoâti,orekáti",
    "orekoâti",
    "orekáti",
    "Bebida",
    "orekáti",
    require("../assets/images/vocabulary/bebida.jpg"),
    require("../assets/audios/vocabulary/bebida.mp3")
  ),
  new Vocabulary(
    30,
    "kâvo,pâho",
    "kâvo",
    "pâho",
    "Boca",
    "pâho",
    require("../assets/images/vocabulary/boca.jpg"),
    require("../assets/audios/vocabulary/boca.mp3")
  ),
  new Vocabulary(
    31,
    "vaxôti,váxikita",
    "vaxôti",
    "váxikita",
    "Bode",
    "váxikita",
    require("../assets/images/vocabulary/bode.jpg"),
    require("../assets/audios/vocabulary/bode.mp3")
  ),
  new Vocabulary(
    32,
    "Tûi,vûi",
    "Tûi",
    "vûi",
    "Boi",
    "vûi",
    require("../assets/images/vocabulary/boi.jpg"),
    require("../assets/audios/vocabulary/boi.mp3")
  ),
  new Vocabulary(
    33,
    "Peréxa,pepêke",
    "Peréxa",
    "pepêke",
    "Bombo",
    "pepêke",
    require("../assets/images/vocabulary/bombo.jpg"),
    require("../assets/audios/vocabulary/bombo.mp3")
  ),
  new Vocabulary(
    34,
    "váka,vaka-váka",
    "váka",
    "vaka-váka",
    "Borboleta",
    "vaka-váka",
    require("../assets/images/vocabulary/borboleta.jpg"),
    require("../assets/audios/vocabulary/borboleta.mp3")
  ),
  new Vocabulary(
    35,
    "Métakiku,muníke",
    "Métakiku",
    "muníke",
    "Brasa",
    "muníke",
    require("../assets/images/vocabulary/brasa.jpg"),
    require("../assets/audios/vocabulary/brasa.mp3")
  ),
  new Vocabulary(
    36,
    "Kalihuti,kakêti",
    "Kalihuti",
    "kakêti",
    "Brinco",
    "kakêti",
    require("../assets/images/vocabulary/brinco.jpg"),
    require("../assets/audios/vocabulary/brinco.mp3")
  ),
  new Vocabulary(
    37,
    "Takurei,tokôro",
    "Takurei",
    "tokôro",
    "Bugio",
    "tokôro",
    require("../assets/images/vocabulary/bugiu.jpg"),
    require("../assets/audios/vocabulary/bugiu.mp3")
  ),
  new Vocabulary(
    38,
    "Horoxo,uhôro",
    "Horoxo",
    "uhôro",
    "Buraco",
    "uhôro",
    require("../assets/images/vocabulary/buraco.jpg"),
    require("../assets/audios/vocabulary/buraco.mp3")
  ),
  new Vocabulary(
    39,
    "Morôuke,muríka",
    "Morôuke",
    "muríka",
    "Burro",
    "muríka",
    require("../assets/images/vocabulary/burro.jpg"),
    require("../assets/audios/vocabulary/burro.mp3")
  ),
  new Vocabulary(
    40,
    "mbâriti,mbokoti",
    "mbâriti",
    "mbokoti",
    "Cachoeira",
    "mbokoti",
    require("../assets/images/vocabulary/cachoeira.jpg"),
    require("../assets/audios/vocabulary/cachoeira.mp3")
  ),
  new Vocabulary(
    41,
    "Tamúiti,tamúku",
    "Tamúiti",
    "tamúku",
    "Cachorro",
    "tamúku",
    require("../assets/images/vocabulary/cachorro.jpg"),
    require("../assets/audios/vocabulary/cachorro.mp3")
  ),
  new Vocabulary(
    42,
    "kúxoa,kâxu",
    "kúxoa",
    "kâxu",
    "Caju",
    "kâxu",
    require("../assets/images/vocabulary/caju.jpg"),
    require("../assets/audios/vocabulary/caju.mp3")
  ),
  new Vocabulary(
    43,
    "Koyomâti,kolemétete",
    "Koyomâti",
    "kolemétete",
    "Calango",
    "kolemétete",
    require("../assets/images/vocabulary/calango.jpg"),
    require("../assets/audios/vocabulary/calango.mp3")
  ),
  new Vocabulary(
    44,
    "iparôti,porôti",
    "iparôti",
    "porôti",
    "Calca",
    "porôti",
    require("../assets/images/vocabulary/calca.jpg"),
    require("../assets/audios/vocabulary/calca.mp3")
  ),
  new Vocabulary(
    45,
    "Vápuma,vatéke",
    "Vápuma",
    "vatéke",
    "Canoa",
    "vatéke",
    require("../assets/images/vocabulary/canoa.jpg"),
    require("../assets/audios/vocabulary/canoa.mp3")
  ),
  new Vocabulary(
    46,
    "Kâxu,evakáxu",
    "Kâxu",
    "evakáxu",
    "Capivara",
    "evakáxu",
    require("../assets/images/vocabulary/capivara.jpg"),
    require("../assets/audios/vocabulary/capivara.mp3")
  ),
  new Vocabulary(
    47,
    "kopîe,kopíke",
    "kopîe",
    "kopíke",
    "Carniceira (marimbondo)",
    "kopíke",
    require("../assets/images/vocabulary/carniceira.jpg"),
    require("../assets/audios/vocabulary/carniceira.mp3")
  ),
  new Vocabulary(
    48,
    "Hîru,hirimítiti",
    "Hîru",
    "hirimítiti",
    "Carrapato",
    "hirimítiti",
    require("../assets/images/vocabulary/carrapato.jpg"),
    require("../assets/audios/vocabulary/carrapato.mp3")
  ),
  new Vocabulary(
    49,
    "kuríkoti,kôreta",
    "kuríkoti",
    "kôreta",
    "Carroca",
    "kôreta",
    require("../assets/images/vocabulary/carroca.jpg"),
    require("../assets/audios/vocabulary/carroca.mp3")
  ),
  new Vocabulary(
    50,
    "pôu,xoromonike",
    "pôu",
    "xoromonike",
    "Carvão",
    "xoromonike",
    require("../assets/images/vocabulary/carvao.jpg"),
    require("../assets/audios/vocabulary/carvao.mp3")
  ),
  new Vocabulary(
    51,
    "Ovâti,ovokúti",
    "Ovâti",
    "ovokúti",
    "Casa",
    "ovokúti",
    require("../assets/images/vocabulary/casa.jpg"),
    require("../assets/audios/vocabulary/casa.mp3")
  ),
  new Vocabulary(
    52,
    "kâmo,kámo",
    "kâmo",
    "kámo",
    "Cavalo",
    "kámo",
    require("../assets/images/vocabulary/cavalo.jpg"),
    require("../assets/audios/vocabulary/cavalo.mp3")
  ),
  new Vocabulary(
    53,
    "poréxoa,poké’e",
    "poréxoa",
    "poké’e",
    "Chão",
    "poké’e",
    require("../assets/images/vocabulary/chao.jpg"),
    require("../assets/audios/vocabulary/chao.mp3")
  ),
  new Vocabulary(
    54,
    "xovoe,xovoíti",
    "xovoe",
    "xovoíti",
    "Chapéu",
    "xovoíti",
    require("../assets/images/vocabulary/chapeu.jpg"),
    require("../assets/audios/vocabulary/chapeu.mp3")
  ),
  new Vocabulary(
    55,
    "Orokéxoti,oropeuti",
    "Orokéxoti",
    "oropeuti",
    "Churrasco",
    "oropeuti",
    require("../assets/images/vocabulary/churrasco.jpg"),
    require("../assets/audios/vocabulary/churrasco.mp3")
  ),
  new Vocabulary(
    56,
    "Úne,úko",
    "Úne",
    "úko",
    "Chuva",
    "úko",
    require("../assets/images/vocabulary/chuva.jpg"),
    require("../assets/audios/vocabulary/chuva.mp3")
  ),
  new Vocabulary(
    57,
    "Hopúketi,hopíkiriri",
    "Hopúketi",
    "hopíkiriri",
    "Cigarra",
    "hopíkiriri",
    require("../assets/images/vocabulary/cigarra.jpg"),
    require("../assets/audios/vocabulary/cigarra.mp3")
  ),
  new Vocabulary(
    58,
    "kipohoti,hípo",
    "kipohoti",
    "hípo",
    "Cigarro",
    "hípo",
    require("../assets/images/vocabulary/cigarro.jpg"),
    require("../assets/audios/vocabulary/cigarro.mp3")
  ),
  new Vocabulary(
    59,
    "hôe,hoêti",
    "hôe",
    "hoêti",
    "Cinto",
    "hoêti",
    require("../assets/images/vocabulary/cinto.jpg"),
    require("../assets/audios/vocabulary/cinto.mp3")
  ),
  new Vocabulary(
    60,
    "koéxu,koexoe",
    "koéxu",
    "koexoe",
    "Cobra",
    "koexoe",
    require("../assets/images/vocabulary/cobra.jpg"),
    require("../assets/audios/vocabulary/cobra.mp3")
  ),
  new Vocabulary(
    61,
    "toké’novoti,konôum",
    "toké’novoti",
    "konôum",
    "Coelho",
    "konôum",
    require("../assets/images/vocabulary/coelho.jpg"),
    require("../assets/audios/vocabulary/coelho.mp3")
  ),
  new Vocabulary(
    62,
    "nikâti,nakáti",
    "nikâti",
    "nakáti",
    "Colar",
    "nakáti",
    require("../assets/images/vocabulary/colar.jpg"),
    require("../assets/audios/vocabulary/colar.mp3")
  ),
  new Vocabulary(
    63,
    "hûra,hûrepe",
    "hûra",
    "hûrepe",
    "Colher",
    "hûrepe",
    require("../assets/images/vocabulary/colher.jpg"),
    require("../assets/audios/vocabulary/colher.mp3")
  ),
  new Vocabulary(
    64,
    "ekovoti,enovopeti",
    "ekovoti",
    "enovopeti",
    "Copo",
    "enovopeti",
    require("../assets/images/vocabulary/copo.jpg"),
    require("../assets/audios/vocabulary/copo.mp3")
  ),
  new Vocabulary(
    65,
    "omomikoti,omixoneti",
    "omomikoti",
    "omixoneti",
    "Coracão",
    "omixoneti",
    require("../assets/images/vocabulary/coracao.jpg"),
    require("../assets/audios/vocabulary/coracao.mp3")
  ),
  new Vocabulary(
    66,
    "Marékoti,mâreso",
    "Marékoti",
    "mâreso",
    "Corda",
    "mâreso",
    require("../assets/images/vocabulary/corda.jpg"),
    require("../assets/audios/vocabulary/corda.mp3")
  ),
  new Vocabulary(
    67,
    "Hîyeu,hîyo",
    "Hîyeu",
    "hîyo",
    "Correcão (formiga)",
    "hîyo",
    require("../assets/images/vocabulary/correicao.jpg"),
    require("../assets/audios/vocabulary/correicao.mp3")
  ),
  new Vocabulary(
    68,
    "Notúnati,notovaka",
    "Notúnati",
    "notovaka",
    "Corrego",
    "notovaka",
    require("../assets/images/vocabulary/corrego.jpg"),
    require("../assets/audios/vocabulary/corrego.mp3")
  ),
  new Vocabulary(
    69,
    "Kamokínoti,kalivôno",
    "Kamokínoti",
    "kalivôno",
    "Crianca",
    "kalivôno",
    require("../assets/images/vocabulary/crianca.jpg"),
    require("../assets/audios/vocabulary/crianca.mp3")
  ),
  new Vocabulary(
    70,
    "omomi,onokena",
    "omomi",
    "onokena",
    "Cunhada",
    "onokena",
    require("../assets/images/vocabulary/cunhada.jpg"),
    require("../assets/audios/vocabulary/cunhada.mp3")
  ),
  new Vocabulary(
    71,
    "ovea,onê’a",
    "ovea",
    "onê’a",
    "Cunhado",
    "onê’a",
    require("../assets/images/vocabulary/cunhado.jpg"),
    require("../assets/audios/vocabulary/cunhado.mp3")
  ),
  new Vocabulary(
    72,
    "mote,motôu",
    "mote",
    "motôu",
    "Cupim",
    "motôu",
    require("../assets/images/vocabulary/cupim.jpg"),
    require("../assets/audios/vocabulary/cupim.mp3")
  ),
  new Vocabulary(
    73,
    "Ôemaka,oêti",
    "Ôemaka",
    "oêti",
    "Dente",
    "oêti",
    require("../assets/images/vocabulary/dente.jpg"),
    require("../assets/audios/vocabulary/dente.mp3")
  ),
  new Vocabulary(
    74,
    "Tíkoti,tiuketi",
    "Tíkoti",
    "tiuketi",
    "Dinheiro",
    "tiuketi",
    require("../assets/images/vocabulary/dinheiro.jpg"),
    require("../assets/audios/vocabulary/dinheiro.mp3")
  ),
  new Vocabulary(
    75,
    "ká’aye,ka’aríneti",
    "ká’aye",
    "ka’aríneti",
    "Doente",
    "ka’aríneti",
    require("../assets/images/vocabulary/doente.jpg"),
    require("../assets/audios/vocabulary/doente.mp3")
  ),
  new Vocabulary(
    76,
    "kîna,kipâe",
    "kîna",
    "kipâe",
    "Ema",
    "kipâe",
    require("../assets/images/vocabulary/ema.jpg"),
    require("../assets/audios/vocabulary/ema.mp3")
  ),
  new Vocabulary(
    77,
    "áha,áhara",
    "áha",
    "áhara",
    "Enxada",
    "áhara",
    require("../assets/images/vocabulary/enxada.jpg"),
    require("../assets/audios/vocabulary/enxada.mp3")
  ),
  new Vocabulary(
    78,
    "Avékoti,âve",
    "Avékoti",
    "âve",
    "Espinho",
    "âve",
    require("../assets/images/vocabulary/espinho.jpg"),
    require("../assets/audios/vocabulary/espinho.mp3")
  ),
  new Vocabulary(
    79,
    "Harîri,hékere",
    "Harîri",
    "hékere",
    "Estrela",
    "hékere",
    require("../assets/images/vocabulary/estrela.jpg"),
    require("../assets/audios/vocabulary/estrela.mp3")
  ),
  new Vocabulary(
    80,
    "Indína,ûndi",
    "Indína",
    "ûndi",
    "Eu",
    "ûndi",
    require("../assets/images/vocabulary/eu.jpg"),
    require("../assets/audios/vocabulary/eu.mp3")
  ),
  new Vocabulary(
    81,
    "Kiríka,pirítau",
    "Kiríka",
    "pirítau",
    "Faca",
    "pirítau",
    require("../assets/images/vocabulary/faca.jpg"),
    require("../assets/audios/vocabulary/faca.mp3")
  ),
  new Vocabulary(
    82,
    "ipuneti,ipunúpae",
    "ipuneti",
    "ipunúpae",
    "Farinha de milho",
    "ipunúpae",
    require("../assets/images/vocabulary/farinhademilho.jpg"),
    require("../assets/audios/vocabulary/farinhademilho.mp3")
  ),
  new Vocabulary(
    83,
    "Xupunu,râmoko",
    "Xupunu",
    "râmoko",
    "Farinha",
    "râmoko",
    require("../assets/images/vocabulary/farinhamandioca.jpg"),
    require("../assets/audios/vocabulary/farinhamandioca.mp3")
  ),
  new Vocabulary(
    84,
    "Xêpau,pêxou",
    "Xêpau",
    "pêxou",
    "Feijão",
    "pêxou",
    require("../assets/images/vocabulary/feijao.jpg"),
    require("../assets/audios/vocabulary/feijao.mp3")
  ),
  new Vocabulary(
    85,
    "hêve,hîu",
    "hêve",
    "hîu",
    "Flor (de árvores)",
    "hîu",
    require("../assets/images/vocabulary/flordearvore.jpg"),
    require("../assets/audios/vocabulary/flordearvore.mp3")
  ),
  new Vocabulary(
    86,
    "Ítukemea,itunoevoti",
    "Ítukemea",
    "itunoevoti",
    "Flores (de jardim)",
    "itunoevoti",
    require("../assets/images/vocabulary/floresdejardim.jpg"),
    require("../assets/audios/vocabulary/floresdejardim.mp3")
  ),
  new Vocabulary(
    87,
    "Yukílu,yúku",
    "Yukílu",
    "yúku",
    "Fogo",
    "yúku",
    require("../assets/images/vocabulary/fogo.jpg"),
    require("../assets/audios/vocabulary/fogo.mp3")
  ),
  new Vocabulary(
    88,
    "ixuxúkoti,xopilokoti",
    "ixuxúkoti",
    "xopilokoti",
    "Foice",
    "xopilokoti",
    require("../assets/images/vocabulary/foice.jpg"),
    require("../assets/audios/vocabulary/foice.mp3")
  ),
  new Vocabulary(
    89,
    "Koseana,kosîu",
    "Koseana",
    "kosîu",
    "Formiga",
    "kosîu",
    require("../assets/images/vocabulary/formiga.jpg"),
    require("../assets/audios/vocabulary/formiga.mp3")
  ),
  new Vocabulary(
    90,
    "irûti,iropoeti",
    "irûti",
    "iropoeti",
    "Frito",
    "iropoeti",
    require("../assets/images/vocabulary/frito.jpg"),
    require("../assets/audios/vocabulary/frito.mp3")
  ),
  new Vocabulary(
    91,
    "Kurikoti,kuríhoe",
    "Kurikoti",
    "kuríhoe",
    "Fumaca",
    "kuríhoe",
    require("../assets/images/vocabulary/fumaca.jpg"),
    require("../assets/audios/vocabulary/fumaca.mp3")
  ),
  new Vocabulary(
    92,
    "Xorexo,tapî’i",
    "Xorexo",
    "tapî’i",
    "Galinha",
    "tapî’i",
    require("../assets/images/vocabulary/galinha.jpg"),
    require("../assets/audios/vocabulary/galinha.mp3")
  ),
  new Vocabulary(
    93,
    "tapî’i,nûtava",
    "tapî’i",
    "nûtava",
    "Galo",
    "nûtava",
    require("../assets/images/vocabulary/galo.jpg"),
    require("../assets/audios/vocabulary/galo.mp3")
  ),
  new Vocabulary(
    94,
    "váhere,vorîri",
    "váhere",
    "vorîri",
    "Garoa",
    "vorîri",
    require("../assets/images/vocabulary/garoa.jpg"),
    require("../assets/audios/vocabulary/garoa.mp3")
  ),
  new Vocabulary(
    95,
    "marâo,marakáya",
    "marâo",
    "marakáya",
    "Gato",
    "marakáya",
    require("../assets/images/vocabulary/gato.jpg"),
    require("../assets/audios/vocabulary/gato.mp3")
  ),
  new Vocabulary(
    96,
    "Áhara,arâha",
    "Áhara",
    "arâha",
    "Goiaba",
    "arâha",
    require("../assets/images/vocabulary/goiaba.jpg"),
    require("../assets/audios/vocabulary/goiaba.mp3")
  ),
  new Vocabulary(
    97,
    "Kitáiti,kínati",
    "Kitáiti",
    "kínati",
    "Gordo(a)",
    "kínati",
    require("../assets/images/vocabulary/gordo.jpg"),
    require("../assets/audios/vocabulary/gordo.mp3")
  ),
  new Vocabulary(
    98,
    "Evésekea,evêke",
    "Evésekea",
    "evêke",
    "Granizo",
    "evêke",
    require("../assets/images/vocabulary/granizo.jpg"),
    require("../assets/audios/vocabulary/granizo.mp3")
  ),
  new Vocabulary(
    99,
    "Xêki,xelêke",
    "Xêki",
    "xelêke",
    "Graveto",
    "xelêke",
    require("../assets/images/vocabulary/graveto.jpg"),
    require("../assets/audios/vocabulary/graveto.mp3")
  ),
  new Vocabulary(
    100,
    "vésa,vísi",
    "vésa",
    "vísi",
    "Grilo",
    "vísi",
    require("../assets/images/vocabulary/grilo.jpg"),
    require("../assets/audios/vocabulary/grilo.mp3")
  ),
  new Vocabulary(
    101,
    "Purúsoti,pú’iti",
    "Purúsoti",
    "pú’iti",
    "Grosso",
    "Purúsoti",
    require("../assets/images/vocabulary/grosso.jpg"),
    require("../assets/audios/vocabulary/grosso.mp3")
  ),
  new Vocabulary(
    102,
    "Kínati,kipâhi",
    "Kínati",
    "kipâhi",
    "Guardachuva",
    "kipâhi",
    require("../assets/images/vocabulary/guardachuva.jpg"),
    require("../assets/audios/vocabulary/guardachuva.mp3")
  ),
  new Vocabulary(
    103,
    "ho’openo,hoyeno",
    "ho’openo",
    "hoyeno",
    "Homem",
    "hoyeno",
    require("../assets/images/vocabulary/homem.jpg"),
    require("../assets/audios/vocabulary/homem.mp3")
  ),
  new Vocabulary(
    104,
    "nêne,même",
    "nêne",
    "même",
    "Idosa",
    "même",
    require("../assets/images/vocabulary/idosa.jpg"),
    require("../assets/audios/vocabulary/idosa.mp3")
  ),
  new Vocabulary(
    105,
    "lêle,lûlu",
    "lêle",
    "lûlu",
    "Idoso",
    "lûlu",
    require("../assets/images/vocabulary/idoso.jpg"),
    require("../assets/audios/vocabulary/idoso.mp3")
  ),
  new Vocabulary(
    106,
    "ovoku,ovoe",
    "ovoku",
    "ovoe",
    "Jabuti",
    "ovoe",
    require("../assets/images/vocabulary/jabuti.jpg"),
    require("../assets/audios/vocabulary/jabuti.mp3")
  ),
  new Vocabulary(
    107,
    "Vatéke,vétekeke",
    "Vatéke",
    "vétekeke",
    "Jacaré",
    "vétekeke",
    require("../assets/images/vocabulary/jacare.jpg"),
    require("../assets/audios/vocabulary/jacare.mp3")
  ),
  new Vocabulary(
    108,
    "môko,mokohoe",
    "môko",
    "mokohoe",
    "jao",
    "mokohoe",
    require("../assets/images/vocabulary/jao.jpg"),
    require("../assets/audios/vocabulary/jao.mp3")
  ),
  new Vocabulary(
    109,
    "Xûruno,xukûyo",
    "Xûruno",
    "xukûyo",
    "Joãodebarro",
    "xukûyo",
    require("../assets/images/vocabulary/joaodebarro.jpg"),
    require("../assets/audios/vocabulary/joaodebarro.mp3")
  ),
  new Vocabulary(
    110,
    "Sêno,sêmu",
    "Sêno",
    "sêmu",
    "Lagartixa",
    "sêmu",
    require("../assets/images/vocabulary/lagartixa.jpg"),
    require("../assets/audios/vocabulary/largatixa.mp3")
  ),
  new Vocabulary(
    111,
    "yonúko,yunâe",
    "yonúko",
    "yunâe",
    "Lagarto",
    "yunâe",
    require("../assets/images/vocabulary/lagarto.jpg"),
    require("../assets/audios/vocabulary/lagarto.mp3")
  ),
  new Vocabulary(
    112,
    "Leôva,lâvona",
    "Leôva",
    "lâvona",
    "Lago",
    "lâvona",
    require("../assets/images/vocabulary/lago.jpg"),
    require("../assets/audios/vocabulary/lago.mp3")
  ),
  new Vocabulary(
    113,
    "naníka,nâranga",
    "naníka",
    "nâranga",
    "Laranja",
    "nâranga",
    require("../assets/images/vocabulary/laranja.jpg"),
    require("../assets/audios/vocabulary/laranja.mp3")
  ),
  new Vocabulary(
    114,
    "Nûnu,nêne",
    "Nûnu",
    "nêne",
    "Língua",
    "nêne",
    require("../assets/images/vocabulary/lingua.jpg"),
    require("../assets/audios/vocabulary/lingua.mp3")
  ),
  new Vocabulary(
    115,
    "Úko,úkoe",
    "Úko",
    "úkoe",
    "Lobinho",
    "úkoe",
    require("../assets/images/vocabulary/lobinho.jpg"),
    require("../assets/audios/vocabulary/lobinho.mp3")
  ),
  new Vocabulary(
    116,
    "Hôe,kohê",
    "Hôe",
    "kohê",
    "Lua",
    "kohê",
    require("../assets/images/vocabulary/lua.jpg"),
    require("../assets/audios/vocabulary/lua.mp3")
  ),
  new Vocabulary(
    117,
    "Parâva,paravo’uti",
    "Parâva",
    "paravo’uti",
    "Luva",
    "paravo’uti",
    require("../assets/images/vocabulary/luva.jpg"),
    require("../assets/audios/vocabulary/luva.mp3")
  ),
  new Vocabulary(
    118,
    "Kâke,kâ’i",
    "Kâke",
    "kâ’i",
    "Macaco",
    "kâ’i",
    require("../assets/images/vocabulary/macaco.jpg"),
    require("../assets/audios/vocabulary/macaco.mp3")
  ),
  new Vocabulary(
    119,
    "Poréxoti,povôti",
    "Poréxoti",
    "povôti",
    "Machado",
    "povôti",
    require("../assets/images/vocabulary/machado.jpg"),
    require("../assets/audios/vocabulary/machado.mp3")
  ),
  new Vocabulary(
    120,
    "yuvoriti,upôriti",
    "yuvoriti",
    "upôriti",
    "Magro(a)",
    "upôriti",
    require("../assets/images/vocabulary/magro.jpg"),
    require("../assets/audios/vocabulary/magro.mp3")
  ),
  new Vocabulary(
    121,
    "Kanáuti,karáraunati",
    "Kanáuti",
    "karáraunati",
    "Mamão macho",
    "karáraunati",
    require("../assets/images/vocabulary/mamaomacho.jpg"),
    require("../assets/audios/vocabulary/mamaomacho.mp3")
  ),
  new Vocabulary(
    122,
    "xupunu,xúpu",
    "xupunu",
    "xúpu",
    "Mandioca",
    "xúpu",
    require("../assets/images/vocabulary/mandioca.jpg"),
    require("../assets/audios/vocabulary/mandioca.mp3")
  ),
  new Vocabulary(
    123,
    "kâmo,háne",
    "kâmo",
    "háne",
    "Marimbondo",
    "háne",
    require("../assets/images/vocabulary/marimbondo.jpg"),
    require("../assets/audios/vocabulary/marimbondo.mp3")
  ),
  new Vocabulary(
    124,
    "môko,mopo",
    "môko",
    "mopo",
    "Mel",
    "mopo",
    require("../assets/images/vocabulary/mel.jpg"),
    require("../assets/audios/vocabulary/mel.mp3")
  ),
  new Vocabulary(
    125,
    "Nikokonoti,mêlatu",
    "Nikokonoti",
    "mêlatu",
    "Melado",
    "mêlatu",
    require("../assets/images/vocabulary/melado.jpg"),
    require("../assets/audios/vocabulary/melado.mp3")
  ),
  new Vocabulary(
    126,
    "hurâe,hándea",
    "hurâe",
    "hándea",
    "Melancia",
    "hándea",
    require("../assets/images/vocabulary/melancia.jpg"),
    require("../assets/audios/vocabulary/melancia.mp3")
  ),
  new Vocabulary(
    127,
    "Senoyakalivono,sêno",
    "Senoyakalivono",
    "sêno",
    "Menina",
    "sêno",
    require("../assets/images/vocabulary/menina.jpg"),
    require("../assets/audios/vocabulary/menina.mp3")
  ),
  new Vocabulary(
    128,
    "hômo,hoyenokalivono",
    "hômo",
    "hoyenokalivono",
    "Menino",
    "hoyenokalivono",
    require("../assets/images/vocabulary/menino.jpg"),
    require("../assets/audios/vocabulary/menino.mp3")
  ),
  new Vocabulary(
    129,
    "su’uso,sopôro",
    "su’uso",
    "sopôro",
    "Milho",
    "sopôro",
    require("../assets/images/vocabulary/milho.jpg"),
    require("../assets/audios/vocabulary/milho.mp3")
  ),
  new Vocabulary(
    130,
    "Arûmo,ârunoe",
    "Arûmo",
    "ârunoe",
    "Moca",
    "ârunoe",
    require("../assets/images/vocabulary/moca.jpg"),
    require("../assets/audios/vocabulary/moca.mp3")
  ),
  new Vocabulary(
    131,
    "Nikírihiko,níkiri",
    "Nikírihiko",
    "níkiri",
    "Moeda",
    "níkiri",
    require("../assets/images/vocabulary/moedas.jpg"),
    require("../assets/audios/vocabulary/moeda.mp3")
  ),
  new Vocabulary(
    132,
    "Môko,mô’im",
    "Môko",
    "mô’im",
    "Morango",
    "mô’im",
    require("../assets/images/vocabulary/morango.jpg"),
    require("../assets/audios/vocabulary/morango.mp3")
  ),
  new Vocabulary(
    133,
    "kêvi,kêhi",
    "kêvi",
    "kêhi",
    "Mosca",
    "kêhi",
    require("../assets/images/vocabulary/mosca.jpg"),
    require("../assets/audios/vocabulary/mosca.mp3")
  ),
  new Vocabulary(
    134,
    "nîka,nîyum",
    "nîka",
    "nîyum",
    "Mosquito",
    "nîyum",
    require("../assets/images/vocabulary/mosquito.jpg"),
    require("../assets/audios/vocabulary/mosquito.mp3")
  ),
  new Vocabulary(
    135,
    "Senôko,sêno",
    "Senôko",
    "sêno",
    "Mulher",
    "sêno",
    require("../assets/images/vocabulary/mulher.jpg"),
    require("../assets/audios/vocabulary/mulher.mp3")
  ),
  new Vocabulary(
    136,
    "ârami,aramúku",
    "ârami",
    "aramúku",
    "Mutuca",
    "aramúku",
    require("../assets/images/vocabulary/mutuca.jpg"),
    require("../assets/audios/vocabulary/mutuca.mp3")
  ),
  new Vocabulary(
    137,
    "kûre,kîri",
    "kûre",
    "kîri",
    "Nariz",
    "kîri",
    require("../assets/images/vocabulary/nariz.jpg"),
    require("../assets/audios/vocabulary/nariz.mp3")
  ),
  new Vocabulary(
    138,
    "araukoti,ámori",
    "araukoti",
    "ámori",
    "Neto(a)",
    "ámori",
    require("../assets/images/vocabulary/neto.jpg"),
    require("../assets/audios/vocabulary/neto.mp3")
  ),
  new Vocabulary(
    139,
    "iyôti,Yoti",
    "iyôti",
    "Yoti",
    "Noite",
    "Yoti",
    require("../assets/images/vocabulary/noite.jpg"),
    require("../assets/audios/vocabulary/noite.mp3")
  ),
  new Vocabulary(
    140,
    "Îti,ûti",
    "Îti",
    "ûti",
    "Nos",
    "ûti",
    require("../assets/images/vocabulary/nos.jpg"),
    require("../assets/audios/vocabulary/nos.mp3")
  ),
  new Vocabulary(
    141,
    "Hopukúiti,hopúoti",
    "Hopukúiti",
    "hopúoti",
    "Onca parda",
    "hopúoti",
    require("../assets/images/vocabulary/oncaparda.jpg"),
    require("../assets/audios/vocabulary/oncaparda.mp3")
  ),
  new Vocabulary(
    142,
    "sêne,sîni",
    "sêne",
    "sîni",
    "Onca",
    "sîni",
    require("../assets/images/vocabulary/onca.jpg"),
    require("../assets/audios/vocabulary/onca.mp3")
  ),
  new Vocabulary(
    143,
    "Kêvo,kêno",
    "Kêvo",
    "kêno",
    "Orelha",
    "kêno",
    require("../assets/images/vocabulary/orelha.jpg"),
    require("../assets/audios/vocabulary/orelha.mp3")
  ),
  new Vocabulary(
    144,
    "opíxerere,opêti",
    "opíxerere",
    "opêti",
    "Osso",
    "opêti",
    require("../assets/images/vocabulary/ossos.jpg"),
    require("../assets/audios/vocabulary/osso.mp3")
  ),
  new Vocabulary(
    145,
    "Nikíneti,nikitíniki",
    "Nikíneti",
    "nikitíniki",
    "Paka",
    "nikitíniki",
    require("../assets/images/vocabulary/paca.jpg"),
    require("../assets/audios/vocabulary/paca.mp3")
  ),
  new Vocabulary(
    146,
    "mo’okoti,momô’on",
    "mo’okoti",
    "momô’on",
    "Palmito",
    "momô’on",
    require("../assets/images/vocabulary/palmito.jpg"),
    require("../assets/audios/vocabulary/palmito.mp3")
  ),
  new Vocabulary(
    147,
    "yukuna,yúkui",
    "yukuna",
    "yúkui",
    "Pamonha",
    "yúkui",
    require("../assets/images/vocabulary/pamonha.jpg"),
    require("../assets/audios/vocabulary/pamonha.mp3")
  ),
  new Vocabulary(
    148,
    "Xûru,xûruno",
    "Xûru",
    "xûruno",
    "Panela",
    "xûruno",
    require("../assets/images/vocabulary/panela.jpg"),
    require("../assets/audios/vocabulary/panela.mp3")
  ),
  new Vocabulary(
    149,
    "Koexu,ko’êru",
    "Koexu",
    "ko’êru",
    "Papagaio",
    "ko’êru",
    require("../assets/images/vocabulary/papagaio.jpg"),
    require("../assets/audios/vocabulary/papagaio.mp3")
  ),
  new Vocabulary(
    150,
    "pâho,pôhi",
    "pâho",
    "pôhi",
    "Pato",
    "pôhi",
    require("../assets/images/vocabulary/pato.jpg"),
    require("../assets/audios/vocabulary/pato.mp3")
  ),
  new Vocabulary(
    151,
    "mopo,mopôi",
    "mopo",
    "mopôi",
    "Pedra",
    "mopôi",
    require("../assets/images/vocabulary/pedra.jpg"),
    require("../assets/audios/vocabulary/pedra.mp3")
  ),
  new Vocabulary(
    152,
    "Hoêti,hôe",
    "Hoêti",
    "hôe",
    "Peixe",
    "hôe",
    require("../assets/images/vocabulary/peixe.jpg"),
    require("../assets/audios/vocabulary/peixe.mp3")
  ),
  new Vocabulary(
    153,
    "movoiti,moveati",
    "movoiti",
    "moveati",
    "Pente",
    "moveati",
    require("../assets/images/vocabulary/pente.jpg"),
    require("../assets/audios/vocabulary/pente.mp3")
  ),
  new Vocabulary(
    154,
    "Varatútu,verékeke",
    "Varatútu",
    "verékeke",
    "Perereca",
    "verékeke",
    require("../assets/images/vocabulary/perereca.jpg"),
    require("../assets/audios/vocabulary/perereca.mp3")
  ),
  new Vocabulary(
    155,
    "kirîu,kilí-kili",
    "kirîu",
    "kilí-kili",
    "Periquito",
    "kilí-kili",
    require("../assets/images/vocabulary/piriquito.jpg"),
    require("../assets/audios/vocabulary/piriquito.mp3")
  ),
  new Vocabulary(
    156,
    "Yúku,yûxu",
    "Yúku",
    "yûxu",
    "Pilão",
    "yûxu",
    require("../assets/images/vocabulary/pilao.jpg"),
    require("../assets/audios/vocabulary/pilao.mp3")
  ),
  new Vocabulary(
    157,
    "Têtu,têti",
    "Têtu",
    "têti",
    "Pimenta",
    "têti",
    require("../assets/images/vocabulary/pimenta.jpg"),
    require("../assets/audios/vocabulary/pimenta.mp3")
  ),
  new Vocabulary(
    158,
    "kúmandu,kumá’a",
    "kúmandu",
    "kumá’a",
    "Pinga",
    "kumá’a",
    require("../assets/images/vocabulary/pinga.jpg"),
    require("../assets/audios/vocabulary/pinga.mp3")
  ),
  new Vocabulary(
    159,
    "No’okoati,nonéti",
    "No’okoati",
    "nonéti",
    "Plantas",
    "nonéti",
    require("../assets/images/vocabulary/plantas.jpg"),
    require("../assets/audios/vocabulary/plantas.mp3")
  ),
  new Vocabulary(
    160,
    "Nikôti,ikokuti",
    "Nikôti",
    "ikokuti",
    "Poco",
    "ikokuti",
    require("../assets/images/vocabulary/poco.jpg"),
    require("../assets/audios/vocabulary/poco.mp3")
  ),
  new Vocabulary(
    161,
    "nône,nûnu",
    "nône",
    "nûnu",
    "Pomba",
    "nûnu",
    require("../assets/images/vocabulary/pomba.jpg"),
    require("../assets/audios/vocabulary/pomba.mp3")
  ),
  new Vocabulary(
    162,
    "Kurîke,kurûte",
    "Kurîke",
    "kurûte",
    "Pombo",
    "kurûte",
    require("../assets/images/vocabulary/pomba.jpg"),
    require("../assets/audios/vocabulary/pombo.mp3")
  ),
  new Vocabulary(
    163,
    "Kîri,kûre",
    "Kîri",
    "kûre",
    "Porco",
    "kûre",
    require("../assets/images/vocabulary/porco.jpg"),
    require("../assets/audios/vocabulary/porco.mp3")
  ),
  new Vocabulary(
    164,
    "pahoeti,pahapéti",
    "pahoeti",
    "pahapéti",
    "Porta",
    "pahapéti",
    require("../assets/images/vocabulary/porta.jpg"),
    require("../assets/audios/vocabulary/porta.mp3")
  ),
  new Vocabulary(
    165,
    "Úko,ûto",
    "Úko",
    "ûto",
    "Prato",
    "ûto",
    require("../assets/images/vocabulary/prato.jpg"),
    require("../assets/audios/vocabulary/prato.mp3")
  ),
  new Vocabulary(
    166,
    "mutatá,muyúkutaka",
    "mutatá",
    "muyúkutaka",
    "Preá",
    "muyúkutaka",
    require("../assets/images/vocabulary/prea.jpg"),
    require("../assets/audios/vocabulary/prea.mp3")
  ),
  new Vocabulary(
    167,
    "Pepêke,perêku",
    "Pepêke",
    "perêku",
    "Prego",
    "perêku",
    require("../assets/images/vocabulary/prego.jpg"),
    require("../assets/audios/vocabulary/prego.mp3")
  ),
  new Vocabulary(
    168,
    "hononoiti,honovouti",
    "hononoiti",
    "honovouti",
    "Pulseira",
    "honovouti",
    require("../assets/images/vocabulary/pulseira.jpg"),
    require("../assets/audios/vocabulary/pulseira.mp3")
  ),
  new Vocabulary(
    169,
    "Kêno,kéhu",
    "Kêno",
    "kéhu",
    "Queijo",
    "kéhu",
    require("../assets/images/vocabulary/queijo.jpg"),
    require("../assets/audios/vocabulary/queijo.mp3")
  ),
  new Vocabulary(
    170,
    "ásurupi,axúka",
    "ásurupi",
    "axúka",
    "Rapadura",
    "axúka",
    require("../assets/images/vocabulary/rapadura.jpg"),
    require("../assets/audios/vocabulary/rapadura.mp3")
  ),
  new Vocabulary(
    171,
    "honôe,homoêhou",
    "honôe",
    "homoêhou",
    "Rapaz",
    "homoêhou",
    require("../assets/images/vocabulary/rapaz.jpg"),
    require("../assets/audios/vocabulary/rapaz.mp3")
  ),
  new Vocabulary(
    172,
    "Ôro,ôho",
    "Ôro",
    "ôho",
    "Rato",
    "ôho",
    require("../assets/images/vocabulary/rato.jpg"),
    require("../assets/audios/vocabulary/rato.mp3")
  ),
  new Vocabulary(
    173,
    "tunúku,tûiti",
    "tunúku",
    "tûiti",
    "Rede",
    "tûiti",
    require("../assets/images/vocabulary/rede.jpg"),
    require("../assets/audios/vocabulary/rede.mp3")
  ),
  new Vocabulary(
    174,
    "ipixáti,ipixéneneoti",
    "ipixáti",
    "ipixéneneoti",
    "Relâmpago",
    "ipixéneneoti",
    require("../assets/images/vocabulary/relampago.jpg"),
    require("../assets/audios/vocabulary/relampago.mp3")
  ),
  new Vocabulary(
    175,
    "hunôti,huvêo",
    "hunôti",
    "huvêo",
    "Rio",
    "huvêo",
    require("../assets/images/vocabulary/rio.jpg"),
    require("../assets/audios/vocabulary/rio.mp3")
  ),
  new Vocabulary(
    176,
    "Kirîti,kirîu",
    "Kirîti",
    "kirîu",
    "Rolinha",
    "kirîu",
    require("../assets/images/vocabulary/rolinha.jpg"),
    require("../assets/audios/vocabulary/rolinha.mp3")
  ),
  new Vocabulary(
    177,
    "kêvo,kâvo",
    "kêvo",
    "kâvo",
    "Sabão",
    "kâvo",
    require("../assets/images/vocabulary/sabao.jpg"),
    require("../assets/audios/vocabulary/sabao.mp3")
  ),
  new Vocabulary(
    178,
    "Xoere,xorêxo",
    "Xoere",
    "xorêxo",
    "Sabiá",
    "xorêxo",
    require("../assets/images/vocabulary/sabia.jpg"),
    require("../assets/audios/vocabulary/sabia.mp3")
  ),
  new Vocabulary(
    179,
    "ítike,íti",
    "ítike",
    "íti",
    "Sangue",
    "íti",
    require("../assets/images/vocabulary/sangue.jpg"),
    require("../assets/audios/vocabulary/sangue.mp3")
  ),
  new Vocabulary(
    180,
    "Ho’openo,hovôvo",
    "Ho’openo",
    "hovôvo",
    "Sapo",
    "hovôvo",
    require("../assets/images/vocabulary/sapo.jpg"),
    require("../assets/audios/vocabulary/sapo.mp3")
  ),
  new Vocabulary(
    181,
    "xirípa,xirípoe",
    "xirípa",
    "xirípoe",
    "Saracura",
    "xirípoe",
    require("../assets/images/vocabulary/saracura.jpg"),
    require("../assets/audios/vocabulary/saracura.mp3")
  ),
  new Vocabulary(
    182,
    "Varátutu,vatútu",
    "Varátutu",
    "vatútu",
    "Seriema",
    "vatútu",
    require("../assets/images/vocabulary/siriema.jpg"),
    require("../assets/audios/vocabulary/seriema.mp3")
  ),
  new Vocabulary(
    183,
    "Tôko,tohe",
    "Tôko",
    "tohe",
    "Sino",
    "tohe",
    require("../assets/images/vocabulary/sino.jpg"),
    require("../assets/audios/vocabulary/sino.mp3")
  ),
  new Vocabulary(
    184,
    "kîri,káxe",
    "kîri",
    "káxe",
    "Sol",
    "káxe",
    require("../assets/images/vocabulary/sol.jpg"),
    require("../assets/audios/vocabulary/sol.mp3")
  ),
  new Vocabulary(
    185,
    "tiuketi,tíkua",
    "tiuketi",
    "tíkua",
    "Tamanduá",
    "tíkua",
    require("../assets/images/vocabulary/tamandua.jpg"),
    require("../assets/audios/vocabulary/tamandua.mp3")
  ),
  new Vocabulary(
    186,
    "yúku,yukílu",
    "yúku",
    "yukílu",
    "Tartaruga",
    "yukílu",
    require("../assets/images/vocabulary/tartaruga.jpg"),
    require("../assets/audios/vocabulary/tartaruga.mp3")
  ),
  new Vocabulary(
    187,
    "Kopíhe,kopié",
    "Kopíhe",
    "kopié",
    "Tatu galinha",
    "kopié",
    require("../assets/images/vocabulary/tatugalinha.jpg"),
    require("../assets/audios/vocabulary/tatugalinha.mp3")
  ),
  new Vocabulary(
    188,
    "xelêke,xulûki",
    "xelêke",
    "xulûki",
    "Tatu",
    "xulûki",
    require("../assets/images/vocabulary/tatu.jpg"),
    require("../assets/audios/vocabulary/tatu.mp3")
  ),
  new Vocabulary(
    189,
    "Marîpa,mote",
    "Marîpa",
    "mote",
    "Terra",
    "mote",
    require("../assets/images/vocabulary/terra.jpg"),
    require("../assets/audios/vocabulary/terra.mp3")
  ),
  new Vocabulary(
    190,
    "Yútoe,yutâpa",
    "Yútoe",
    "yutâpa",
    "Tesoura",
    "yutâpa",
    require("../assets/images/vocabulary/tesoura.jpg"),
    require("../assets/audios/vocabulary/tesoura.mp3")
  ),
  new Vocabulary(
    191,
    "Pikôti,puxârara",
    "Pikôti",
    "puxârara",
    "Trovão",
    "puxârara",
    require("../assets/images/vocabulary/trovao.jpg"),
    require("../assets/audios/vocabulary/trovao.mp3")
  ),
  new Vocabulary(
    192,
    "Hepíko,hepîpi",
    "Hepíko",
    "hepîpi",
    "Tucanguira (formiga)",
    "hepîpi",
    require("../assets/images/vocabulary/tocandira.jpg"),
    require("../assets/audios/vocabulary/tocandira.mp3")
  ),
  new Vocabulary(
    193,
    "Honoti,honô’e",
    "Honoti",
    "honô’e",
    "Tucano",
    "honô’e",
    require("../assets/images/vocabulary/tucano.jpg"),
    require("../assets/audios/vocabulary/tucano.mp3")
  ),
  new Vocabulary(
    194,
    "kohea,koho",
    "kohea",
    "koho",
    "Tuiuiú",
    "koho",
    require("../assets/images/vocabulary/tuiuiu.jpg"),
    require("../assets/audios/vocabulary/tuiuiu.mp3")
  ),
  new Vocabulary(
    195,
    "Hiyáiti,hîpo",
    "Hiyáiti",
    "hîpo",
    "Unha",
    "hîpo",
    require("../assets/images/vocabulary/unha.jpg"),
    require("../assets/audios/vocabulary/unha.mp3")
  ),
  new Vocabulary(
    196,
    "Varâka,varatútu",
    "Varâka",
    "varatútu",
    "Urubu",
    "varatútu",
    require("../assets/images/vocabulary/urubu.jpg"),
    require("../assets/audios/vocabulary/urubu.mp3")
  ),
  new Vocabulary(
    197,
    "Váhere,váka",
    "Váhere",
    "váka",
    "Vaca",
    "váka",
    require("../assets/images/vocabulary/vaca.jpg"),
    require("../assets/audios/vocabulary/vaca.mp3")
  ),
  new Vocabulary(
    198,
    "komítiti,nomíti",
    "komítiti",
    "nomíti",
    "Vagalume",
    "nomíti",
    require("../assets/images/vocabulary/vagalume.jpg"),
    require("../assets/audios/vocabulary/vagalume.mp3")
  ),
  new Vocabulary(
    199,
    "Kaukapanapu,kauhá’ixopeti",
    "Kaukapanapu",
    "kauhá’ixopeti",
    "Vassoura",
    "kauhá’ixopeti",
    require("../assets/images/vocabulary/vassoura.jpg"),
    require("../assets/audios/vocabulary/vassoura.mp3")
  ),
  new Vocabulary(
    200,
    "Huléketi,hovenoino",
    "Huléketi",
    "hovenoino",
    "Velha",
    "hovenoino",
    require("../assets/images/vocabulary/velha.jpg"),
    require("../assets/audios/vocabulary/velha.mp3")
  ),
  new Vocabulary(
    201,
    "Yûma,yékoteno",
    "Yûma",
    "yékoteno",
    "Velho",
    "yékoteno",
    require("../assets/images/vocabulary/velho.jpg"),
    require("../assets/audios/vocabulary/velho.mp3")
  ),
];

export const PHRASES = [
  new Phrase(
    1,
    "O vestido da moca é bonito",
    "Váhere hîxo ne ârunoe",
    "Uhé’ekoti hîxo ne ârunoe",
    "vestido",
    "Uhé’ekoti hîxo ne ârunoe",
    require("../assets/audios/phrases/vestido.mp3")
  ),
  new Phrase(
    2,
    "A flor é cheirosa",
    "Úheti ihopune ne itunoevoti",
    "háheti ne itunoevoti",
    "flor",
    "Úheti ihopune ne itunoevoti",
    require("../assets/audios/phrases/flor.mp3")
  ),
  new Phrase(
    3,
    "A mulher indígena é linda",
    "Exoketi seno ne kopénoti",
    "Uhé’ekoti ne kopenoti",
    "mulher indigena",
    "Exoketi seno ne kopénoti",
    require("../assets/audios/phrases/mulher_indigena.mp3")
  ),
  new Phrase(
    4,
    "Aqui tem caju vermelha e amarela",
    "úheti ne kâxu",
    "Apé yaye hararáiti yoko hiyáiti kâxu",
    "caju",
    "Apé yaye hararáiti yoko hiyáiti kâxu",
    require("../assets/audios/phrases/caju.mp3")
  ),
  new Phrase(
    5,
    "O doce de abobora é uma delícia",
    "Úheti ndúsena kâme",
    "Tíuiti ne kâme",
    "abobora",
    "Úheti ndúsena kâme",
    require("../assets/audios/phrases/abobora.mp3")
  ),
  new Phrase(
    6,
    "O macaco quer comer banana",
    "Kahá’ati níkea pânana ne kâi",
    "Eno pânana yaye",
    "banana",
    "Kahá’ati níkea pânana ne kâi",
    require("../assets/audios/phrases/banana.mp3")
  ),
  new Phrase(
    7,
    "O papagaio é conversador",
    "Éxetinati ne ko’êru",
    "Ixépati ne ko’êru",
    "papagaio",
    "Éxetinati ne ko’êru",
    require("../assets/audios/phrases/papagaio.mp3")
  ),
  new Phrase(
    8,
    "Os pés da perereca são gelados",
    "Kásati hêve ne verékeke",
    "Upôriti ne verékeke",
    "perereca",
    "Kásati hêve ne verékeke",
    require("../assets/audios/phrases/perereca.mp3")
  ),
  new Phrase(
    9,
    "sorria todos os dias",
    "Yékapu uha koeti kaxe",
    "mbikoa ne koexoe",
    "sorria",
    "Yékapu uha koeti kaxe",
    require("../assets/audios/phrases/9.mp3")
  ),
  new Phrase(
    10,
    "todo domingo tem jogo de bingo",
    "Héu Koeti lûmingu ape kuríkoti bingú",
    "Kahá’a úti têyokono vitúkeovo",
    "todo domingo",
    "Héu Koeti lûmingu ape kuríkoti bingú",
    require("../assets/audios/phrases/10.mp3")
  ),
  new Phrase(
    11,
    "adoro laranja e pocã",
    "Anzá’ axo ra nâranga yoko pouca",
    "Anzá’ ra pouca nâranga axo yoko",
    "adoro laranja e pocã",
    "Anzá’ axo ra nâranga yoko pouca",
    require("../assets/audios/phrases/11.mp3")
  ),
  new Phrase(
    12,
    "gosto de suco de couve com limão",
    "Ya pohuti kaxé, inámati exoneti limão",
    "yomo’onjo sukuna kouve yoko limão",
    "suco de couve",
    "yomo’onjo sukuna kouve yoko limão",
    require("../assets/audios/phrases/12.mp3")
  ),
  new Phrase(
    13,
    "tenho medo de cobra",
    "ipúhikone koexoe",
    "mbikoa ne koexoe",
    "tenho medo de cobra",
    "mbikoa ne koexoe",
    require("../assets/audios/phrases/13.mp3")
  ),
  new Phrase(
    14,
    "o dinheiro saiu",
    "mbikoa ne koexoe",
    "ipúhikone tiûketi",
    "o dinheiro saiu",
    "ipúhikone tiûketi",
    require("../assets/audios/phrases/14.mp3")
  ),
  new Phrase(
    15,
    "Há poucas pessoas que falam nosso idioma",
    "Ya pohuti kaxé, inámati exoneti",
    "Akone axú’ina koyúhoti vemó’u",
    "falam nosso idioma",
    "Akone axú’ina koyúhoti vemó’u",
    require("../assets/audios/phrases/15.mp3")
  ),
  new Phrase(
    16,
    "eu danço a siputerena",
    "mbikoa ne koexoe",
    "Nziokexoa ra siputerena",
    "siputerena",
    "Nziokexoa ra siputerena",
    require("../assets/audios/phrases/16.mp3")
  ),
  new Phrase(
    17,
    "aqui em Limão Verde, há muitas igrejas.",
    "eno imokóvokuti yara tonó’iti límaum",
    "Yomó’oxo selúlar ne",
    "Limão Verde",
    "eno imokóvokuti yara tonó’iti límaum",
    require("../assets/audios/phrases/17.mp3")
  ),
  new Phrase(
    18,
    "hoje em dia, só internet",
    "ko pohéane oyene internet",
    "ko ́oyene pohéane internet",
    "só internet",
    "ko ́oyene pohéane internet",
    require("../assets/audios/phrases/18.mp3")
  ),
  new Phrase(
    19,
    "o rapaz é craque",
    "Aneko nonéti nakáku ítuke",
    "Ahúkoti ne homoêhou",
    "o rapaz é craque",
    "Ahúkoti ne homoêhou",
    require("../assets/audios/phrases/19.mp3")
  ),
  new Phrase(
    20,
    "cada dia, um novo aprendizado",
    "Ya pohuti kaxé, inámati exoneti",
    "ipúhikone tiûketi",
    "um novo aprendizado",
    "Ya pohuti kaxé, inámati exoneti",
    require("../assets/audios/phrases/20.mp3")
  ),
  new Phrase(
    21,
    "quero aprender a falar do nosso idioma",
    "Enjo’ ukuvane ra kótuti kaxe têrenoe",
    "ngaha’a enjea ngoyuhoiyea ra vemo’u têrenoe",
    "nosso idioma",
    "ngaha’a enjea ngoyuhoiyea ra vemo’u têrenoe",
    require("../assets/audios/phrases/21.mp3")
  ),
  new Phrase(
    22,
    "já existem muitos veículos em nossa comunidade",
    "Ahúkoti ne homoêhou",
    "enone ivú’eti yara vípuxovoku",
    "veículos",
    "enone ivú’eti yara vípuxovoku",
    require("../assets/audios/phrases/22.mp3")
  ),
  new Phrase(
    23,
    "minha finada avó fazia tecelagem",
    "ixuxúkoti itúkovo onzé’ikene",
    "Ya mekúke, ako’o úko ya agóstu onzé’ikene",
    "minha finada avó",
    "ixuxúkoti itúkovo onzé’ikene",
    require("../assets/audios/phrases/23.mp3")
  ),
  new Phrase(
    24,
    "os professores são indígenas",
    "kopenoti ihíkaxotihiko",
    "kopenoti ne ihíkaxotihiko",
    "os professores são indígenas",
    "kopenoti ne ihíkaxotihiko",
    require("../assets/audios/phrases/24.mp3")
  ),
  new Phrase(
    25,
    "Aqui no Limão não há mais muitos pés de manga",
    "Anzá’axo orópeuti váka",
    "Ako’o ne eno xuve mangá, yaye límaum ke",
    "pés de manga",
    "Ako’o ne eno xuve mangá, yaye límaum ke",
    require("../assets/audios/phrases/25.mp3")
  ),
  new Phrase(
    26,
    "Desejo a você um bom trabalho",
    "ixuxúkoti itúkovo onzé’ikene",
    "Ngaha’ainopi unatiya ke’ítukeiyi",
    "Desejo a você",
    "Ngaha’ainopi unatiya ke’ítukeiyi",
    require("../assets/audios/phrases/26.mp3")
  ),
  new Phrase(
    27,
    "Antigamente não chovia em agosto",
    "Ya mekúke, ako’o úko ya agóstu",
    "Ahúkoti ne homoêhou agóstu",
    "Antigamente",
    "Ya mekúke, ako’o úko ya agóstu",
    require("../assets/audios/phrases/27.mp3")
  ),
  new Phrase(
    28,
    "As mulheres do Limão são trabalhadoras",
    "Ngahá’api yaye ayonovo",
    "Senohikó ihae Límaum ko’ítuketihiko",
    "As mulheres do Limão",
    "Senohikó ihae Límaum ko’ítuketihiko",
    require("../assets/audios/phrases/28.mp3")
  ),
  new Phrase(
    29,
    "As crianças gostam de celular",
    "Yomó’oxo selúlar ne kalivono",
    "Ako’o ne eno xuve mangá, yaye límaum ke",
    "As crianças",
    "Yomó’oxo selúlar ne kalivono",
    require("../assets/audios/phrases/29.mp3")
  ),
  new Phrase(
    30,
    "O rabo do animal é comprido",
    "Enjo’ ukuvane ra kótuti kaxe",
    "Hána’iti îhi ne hó’openo",
    "O rabo do animal",
    "Hána’iti îhi ne hó’openo",
    require("../assets/audios/phrases/30.mp3")
  ),
  new Phrase(
    31,
    "Adoro carne assada",
    "Hána’iti îhi ne hó’openo",
    "Anzá’axo orópeuti váka",
    "Adoro carne assada",
    "Anzá’axo orópeuti váka",
    require("../assets/audios/phrases/31.mp3")
  ),
  new Phrase(
    32,
    "Antigamente as pessoas iam no córrego lavar roupa",
    "ixuxúkoti itúkovo onzé’ikene kipóheyea",
    "Yaneko mekúke nótuvaka yóno xâne kipóheyea",
    "Antigamente",
    "Yaneko mekúke nótuvaka yóno xâne kipóheyea",
    require("../assets/audios/phrases/32.mp3")
  ),
  new Phrase(
    33,
    "Na roça do Xóve tem milho, feijão e abóbora",
    "Eno sôporo, pêxou, xúpu, kamê isáneke Xóve",
    "Nziokexoa ra siputerena",
    "Na roça do Xóve",
    "Eno sôporo, pêxou, xúpu, kamê isáneke Xóve",
    require("../assets/audios/phrases/33.mp3")
  ),
  new Phrase(
    34,
    "André tem plantação de arroz",
    "Aneko nonéti nakáku ítuke Andre",
    "Aneko nakáku nonéti ra ítuke Andre",
    "André tem plantação",
    "Aneko nonéti nakáku ítuke Andre",
    require("../assets/audios/phrases/34.mp3")
  ),
  new Phrase(
    35,
    "Queremos respeito com a nossa cultura",
    "Kahá’a úti têyokono vitúkeovo",
    "Hána’iti îhi vitúkeovo ne hó’openo",
    "Queremos respeito",
    "Kahá’a úti têyokono vitúkeovo",
    require("../assets/audios/phrases/35.mp3")
  ),
  new Phrase(
    36,
    "A pandemia fez com que os alunos atrasassem",
    "Okó’okorixoa ihíkaxutihiko pandémia",
    "Okó’okorixoa ihíkaxutihiko ra pandémia",
    "A pandemia",
    "Okó’okorixoa ihíkaxutihiko ra pandémia",
    require("../assets/audios/phrases/36.mp3")
  ),
  new Phrase(
    37,
    "Já acostumei com o calor do sol",
    "Enjo’ ukuvane ra kótuti kaxe",
    "Ahúkoti ne homoêhou",
    "Já acostumei",
    "Enjo’ ukuvane ra kótuti kaxe",
    require("../assets/audios/phrases/37.mp3")
  ),
  new Phrase(
    38,
    "Quero você aqui",
    "Ahúkoti ne homoêhou",
    "Ngahá’api yaye",
    "Quero você aqui",
    "Ngahá’api yaye",
    require("../assets/audios/phrases/38.mp3")
  ),
];
