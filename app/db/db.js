const users = [
  {
    id: 0,
    email: "Dummy@gmail.com",
    username: "Dummy123",
    password: "123Dummy321",
  },
];

const items = [
  {
    id: 0,
    name: "Fender '60 Vibe ",
    description:
      "El sonido está basado en las pastillas Alnico V de bobina simple, que ofrecen un ataque rápido con mayor presencia de frecuencias medias.l mástil estilo años 60 presenta un radio moderno de 9,5” que aporta mayor comodidad y facilidad para los estiramientos de cuerdas.",
    price: "10000",
    category: "Guitar",
    imageUrl: require("../assets/stratocaster_1.jpg"),
  },
  {
    id: 1,
    name: "Cry Baby - Wah Wah",
    description:
      "Este nuevo efecto expresivo fue un éxito instantáneo con músicos como Jimi Hendrix y Eric Clapton- que han contribuido a la enorme popularidad del Wah Cry Baby. Mientras que otros efectos se han ido y venido- el Wah Cry Baby sigue mejorando con la edad. ",
    price: "12000",
    category: "Pedal",
    imageUrl: require("../assets/Wah_Wah.jpg"),
  },
  {
    id: 2,
    name: "BOSS - BD2",
    description:
      "El BD-2 es un pedal que tiene el tono de blues clásico de un amplificador de tubos en un pedal compacto capaz de realizar de sonidos cálidos saturados a la distorsión total. No emborrona tu interpretación, es capaz de respetar todos los matices que seas capaz de crear. Uno de los grandes clásicos mundiales en el terreno del overdrive. Indispensable en cualquier pedalera que se precie. ",
    price: "8000",
    category: "Pedal",
    imageUrl: require("../assets/BossBD2.jpg"),
  },
  {
    id: 3,
    name: "Marshall - DSL40",
    description:
      "El DSL40TM ha sido diseñado en combinación con un altavoz de 12” Celestion G-12 v-type para tener un gran tono y versatilidad sonora. Con la posibilidad de tener dos sonidos diferentes en cada canal de ganancia, es un amplificador que se adapta a todo tipo de estilos musicales.",
    price: "34000",
    category: "Amp",
    imageUrl: require("../assets/Marshall_DSL40.jpg"),
  },
  {
    id: 4,
    name: "Digitech - Whammy",
    description:
      "Proporciona a los músicos la capacidad de desplazar la afinación de su guitarra eléctrica hacia arriba o hacia abajo en tiempo real por un balanceo del pedal en respectiva dirección, de forma similar a como un pedal wah afecta el tono de la guitarra basado el la posición del pedal.",
    price: "18000",
    category: "Pedal",
    imageUrl: require("../assets/Digitech_Whammy.jpg"),
  },
  {
    id: 5,
    name: "Gibson - Standard",
    description:
      "Generalmente de caoba y con una tapa convexa de arce, cuyo acabado puede ser tanto en colores opacos como en otros traslúcidos que permiten ver las vetas de la madera. El mástil, encolado, lleva inserta un alma regulable y está rematado por un diapasón de 22 trastes, que suele ser de palo rosa.",
    price: "100000",
    category: "Guitar",
    imageUrl: require("../assets/Gibson_Standard.jpg"),
  },
  {
    id: 6,
    name: "Fender Telecaster AS",
    description:
      "La guitarra electrica Fender Stratocaster American Standard es un instrumento clásico elegante y a la vez asequible, que combina un diseño tradicional con especificaciones actuales. El venerado estilo de Fender y las actualizaciones modernas pueden ser compatibles y este modelo ofrece lo mejor de ambos mundos, en un instrumento ideal para guitarristas de cualquier nivel.",
    price: "90000",
    category: "Guitar",
    imageUrl: require("../assets/Fender_Telecaster.jpg"),
  },
  {
    id: 7,
    name: "Vox Valvetronix VT20+ Classic",
    description:
      "El Vox Valvetronix VT20 ofrece un sonido que supera las expectativas de su potencia nominal, a pesar de su pequeño tamaño. Ahora puedes disfrutar de todas las características sorprendentes del VT20+ en un VOX de apariencia clásica, con la rejilla tradicional en cruces. Con circuitos Tube-Driven Valve Reactor, 33 modelos de amplificador y 25 diversos efectos, este amplificador y el resto de la serie Valvetronix+ tienen mucho de lo que emocionarse.",
    price: "28000",
    category: "Amp",
    imageUrl: require("../assets/Vox.jpg"),
  },
];

const categories = [
  {
    id: 0,
    categoryName: "Guitar",
  },
  {
    id: 1,
    categoryName: "Pedal",
  },
  {
    id: 2,
    categoryName: "Amp",
  },
];

export const getCategories = () => {
  return categories;
};

export const getUsers = () => {
  return users;
};

export const setUsers = (user) => {
  users.push(user);
};

export const getItems = () => {
  return items;
};

export const addItem = (item) => {
  items.push(item);
};
