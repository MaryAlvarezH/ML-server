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

module.exports = {
  getItemsJson: JSON.stringify(getItems, null, 4),
};
