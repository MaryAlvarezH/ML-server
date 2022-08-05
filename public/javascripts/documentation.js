const getItems = [
  {
    author: {
      name: "María",
      lastname: "Álvarez",
    },
    categories: ["MLA7032", "MLA4286", "MLA7032", "MLA3518"],
    items: [
      {
        id: "MLA919755488",
        title: "Carry Disk Case Usb 3.0 Sata 2.5 Notebook Disco Hdd / Sdd",
        price: {
          amount: 2200,
          currency: "ARS",
          decimlas: 0,
        },
        picture:
          "http://http2.mlstatic.com/D_655709-MLA45865157541_052021-I.jpg",
        condition: "new",
        free_shipping: false,
      },
      {
        id: "MLA875517032",
        title: "Gabinete Xtech Atx + Fuente 600w Black Xtq-200 Mid Tower",
        price: {
          amount: 10197,
          currency: "ARS",
          decimlas: 0,
        },
        picture:
          "http://http2.mlstatic.com/D_970826-MLA49151766698_022022-I.jpg",
        condition: "new",
        free_shipping: true,
      },
      {
        id: "MLA872445858",
        title: "Carry Disk Disco Sata Ssd Hdd 2.5 Usb Case Externo Noga Cd3 ",
        price: {
          amount: 2369,
          currency: "ARS",
          decimlas: 0,
        },
        picture:
          "http://http2.mlstatic.com/D_635269-MLA43101582186_082020-I.jpg",
        condition: "new",
        free_shipping: false,
      },
      {
        id: "MLA1149525865",
        title: "Apple AirPods Con Estuche De Carga Inalámbrica - Blanco",
        price: {
          amount: 40300,
          currency: "ARS",
          decimlas: 0,
        },
        picture:
          "http://http2.mlstatic.com/D_776908-MLA46302567710_062021-I.jpg",
        condition: "new",
        free_shipping: true,
      },
    ],
  },
];

const getItem = {
  author: {
    name: "María",
    lastname: "Álvarez",
  },
  item: {
    id: "MLA919755488",
    title: "Carry Disk Case Usb 3.0 Sata 2.5 Notebook Disco Hdd / Sdd",
    price: {
      amount: 2200,
      currency: "ARS",
      decimals: 0,
    },
    picture: "http://http2.mlstatic.com/D_655709-MLA45865157541_052021-O.jpg",
    condition: "new",
    free_shipping: false,
    sold_quantity: 5000,
    description:
      "IMPORTANTE: Para que podamos emitir la factura A, necesitamos que la cuenta desde donde vayas a realizar la compra, esté registrada como IVA Responsable Inscripto o IVA Exento. De lo contrario, se va a emitir automáticamente una factura B.\n\n>> MERCADO ENVÍO: MERCADO ENVIO es un servicio administrado por MERCADO LIBRE, que se encarga de seleccionar los Correos y Logísticas que efectuarán las entregas. Nosotros no coordinamos dichos envíos, y no podemos indicarles cambios de Direcciones, ni determinar días u horarios de entrega. Ver Panel de Seguimiento del Envío.\n\n>> ENVIOS EN EL DÍA (CABA & GBA): Los repartos son efectuados por LOGISTICAS privadas, que retiran de nuestro Local desde las 14:00 entregando hasta las 21:00 aprox. y no sabemos la hora que le llegara cada paquete. Si la entrega tuviese algún inconveniente, reintentarán al día siguiente. Ver Panel de Seguimiento del Envío. No podemos coordinar horarios específicos. \n\nFácil de usar e instalar, no requiere tornillos no software, compatible con discos SATA de 2,5 \" HDD y SSD solo debes oprimir la hendidura para el dedo en la parte trasera del case para abrirlo e insertar el disco conectándolo en el puerto SATA del case y listo para usar.\n\nCase compacto y resistente fácil de llevar contigo a cualquier lugar, ideal liberar espacio de tu pc almacenando archivos que no quieres borrar pero ocupan espacio innecesario en la PC, hacer copias de seguridad, almacenar películas, series, juegos, animes, transportar archivos de trabajo o diseño, ideal para estudiantes\n\nGracias al puerto USB 3.0 puede alcanzar velocidades de transferencias alta hasta 5 Gbps, soporta discos de hasta 3 TB\n\n\nESPECIFICACIONES\n\n- Es compatible con USB 3.0 y 2.0.\n- Soporta discos SATA de 2.5', SSD 5V SATA.\n- Plug and play (no requiere drivers de instalación)\n- Soporta Windows Server 2003, 2008, Windows 2000/ME, XP, Vista, 7, 8, Win 10, - Linux y Mac 10.3 o posteriores\n- Alimentación 5V USB\n- Carcasa ABS\n- Tamaño pequeño: 12 cm x 7.5 cm x 1.3 cm\n\n\nLA COMPRA INCLUYE\n\n- Carcasa ABS Case\n- Conector Sata a MicroUSB B\n- Cable MicroUSB B a USB3.0\n\nNO INCLUYE DISCO\nNO INCLUYE FUNDA",
  },
};

module.exports = {
  getItemsJson: JSON.stringify(getItems, null, 4),
  getItemJson: JSON.stringify(getItem, null, 4),
};
