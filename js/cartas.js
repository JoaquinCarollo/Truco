const cartas = [
  {
    id: 1,
    carta: "Uno de espada",
    valor: 1,
    valorDeEnvido: 1,
    tipo: "Espada",
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/1/1a/Uno_de_Espadas.jpg",
  },
  {
    id: 2,
    carta: "Dos de espada",
    valor: 6,
    valorDeEnvido: 2,
    tipo: "Espada",
    imagen:
      "https://i.pinimg.com/236x/44/79/05/447905e420447c5e05f1981766e6d018.jpg",
  },
  {
    id: 3,
    carta: "Tres de espada",
    valor: 5,
    valorDeEnvido: 3,
    tipo: "Espada",
    imagen:
      "https://i.pinimg.com/236x/70/ba/27/70ba276168fd76cfe90e2d637287273f.jpg",
  },
  {
    id: 4,
    carta: "Cuatro de espada",
    valor: 14,
    valorDeEnvido: 4,
    tipo: "Espada",
    imagen:
      "https://i.pinimg.com/236x/7c/bb/b7/7cbbb7043b55e21411b92693c5b8bf96.jpg",
  },
  {
    id: 5,
    carta: "Cinco de espada",
    valor: 13,
    valorDeEnvido: 5,
    tipo: "Espada",
    imagen:
      "https://i.pinimg.com/236x/67/41/e1/6741e1eca4a80920fc612c14bdd83af0.jpg",
  },
  {
    id: 6,
    carta: "Seis de espada",
    valor: 12,
    valorDeEnvido: 6,
    tipo: "Espada",
    imagen:
      "https://i.pinimg.com/236x/da/ce/97/dace97584f29fc94d072adb817327f89.jpg",
  },
  {
    id: 7,
    carta: "Siete de espada",
    valor: 3,
    valorDeEnvido: 7,
    tipo: "Espada",
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/c/cc/Siete_de_Espadas.jpg",
  },
  {
    id: 8,
    carta: "Diez de espada",
    valor: 10,
    valorDeEnvido: 0,
    tipo: "Espada",
    imagen:
      "https://i.pinimg.com/236x/9f/5f/7b/9f5f7b769660c259066327ea3a72dd43.jpg",
  },
  {
    id: 9,
    carta: "Once de espada",
    valor: 9,
    valorDeEnvido: 0,
    tipo: "Espada",
    imagen:
      "https://i.pinimg.com/474x/ab/f2/e3/abf2e341a78bc0223b06603a544e9414.jpg",
  },
  {
    id: 10,
    carta: "Doce de espada",
    valor: 8,
    valorDeEnvido: 0,
    tipo: "Espada",
    imagen:
      "https://i.pinimg.com/474x/7b/de/b1/7bdeb1ccf9f75f8e4071db35d4e20c99.jpg",
  },
  {
    id: 11,
    carta: "Uno de basto",
    valor: 2,
    valorDeEnvido: 1,
    tipo: "Basto",
    imagen:
      "https://i.pinimg.com/236x/16/f4/d6/16f4d60b8371cb6feb27890cdc7a5213.jpg",
  },
  {
    id: 12,
    carta: "Dos de basto",
    valor: 6,
    valorDeEnvido: 2,
    tipo: "Basto",
    imagen:
      "https://i.pinimg.com/474x/4b/dc/54/4bdc54b3b52a13ce700429726d6dce84.jpg",
  },
  {
    id: 13,
    carta: "Tres de basto",
    valor: 5,
    valorDeEnvido: 3,
    tipo: "Basto",
    imagen:
      "https://i.pinimg.com/474x/2e/28/dc/2e28dc4259b348e1b44559b1a6cdf5a2.jpg",
  },
  {
    id: 14,
    carta: "Cuatro de basto",
    valor: 14,
    valorDeEnvido: 4,
    tipo: "Basto",
    imagen:
      "https://i.pinimg.com/236x/54/58/6d/54586d6986e226f178f15a9d36f1a19d.jpg",
  },
  {
    id: 15,
    carta: "Cinco de basto",
    valor: 13,
    valorDeEnvido: 5,
    tipo: "Basto",
    imagen:
      "https://i.pinimg.com/236x/8b/38/41/8b384140a47da84e4de5b7689c98fc9a.jpg",
  },
  {
    id: 16,
    carta: "Seis de basto",
    valor: 12,
    valorDeEnvido: 6,
    tipo: "Basto",
    imagen:
      "https://i.pinimg.com/236x/87/1b/9a/871b9ade4634a3f4ddab36bd59939a9a.jpg",
  },
  {
    id: 17,
    carta: "Siete de basto",
    valor: 11,
    valorDeEnvido: 7,
    tipo: "Basto",
    imagen:
      "https://i.pinimg.com/236x/c8/42/1e/c8421e9b5e09bc0cc49d0724d89d42cd.jpg",
  },
  {
    id: 18,
    carta: "Diez de basto",
    valor: 10,
    valorDeEnvido: 0,
    tipo: "Basto",
    imagen:
      "https://i.pinimg.com/236x/06/39/70/0639708962f9faaa4bb14754a27d47c5.jpg",
  },
  {
    id: 19,
    carta: "Once de basto",
    valor: 9,
    valorDeEnvido: 0,
    tipo: "Basto",
    imagen:
      "https://i.pinimg.com/736x/6c/2c/74/6c2c74174cf9c1798e376f2bf2deca29.jpg",
  },
  {
    id: 20,
    carta: "Doce de basto",
    valor: 8,
    valorDeEnvido: 0,
    tipo: "Basto",
    imagen:
      "https://i.pinimg.com/736x/36/b7/19/36b7196ecd2b75f34a73d34d45965b9d.jpg",
  },
  {
    id: 21,
    carta: "Uno de oro",
    valor: 7,
    valorDeEnvido: 1,
    tipo: "Oro",
    imagen:
      "https://i.pinimg.com/236x/b9/3f/da/b93fda7c54c7f1a3c3c3ca786a4c42b7.jpg",
  },
  {
    id: 22,
    carta: "Dos de oro",
    valor: 6,
    valorDeEnvido: 2,
    tipo: "Oro",
    imagen:
      "https://i.pinimg.com/236x/f6/e1/4c/f6e14cd97a0da978ddf03752ba3713c9.jpg",
  },
  {
    id: 23,
    carta: "Tres de oro",
    valor: 5,
    valorDeEnvido: 3,
    tipo: "Oro",
    imagen:
      "https://i.pinimg.com/236x/0b/1e/ba/0b1eba025811ad9e5d5bf0ddd843cd97.jpg",
  },
  {
    id: 24,
    carta: "Cuatro de oro",
    valor: 14,
    valorDeEnvido: 4,
    tipo: "Oro",
    imagen:
      "https://i.pinimg.com/236x/32/30/b8/3230b8a5b99d79b0f97d179d8258fdab.jpg",
  },
  {
    id: 25,
    carta: "Cinco de oro",
    valor: 13,
    valorDeEnvido: 5,
    tipo: "Oro",
    imagen:
      "https://i.pinimg.com/474x/94/04/c0/9404c0eedf5862895774db7e6b1f5d33.jpg",
  },
  {
    id: 26,
    carta: "Seis de oro",
    valor: 12,
    valorDeEnvido: 6,
    tipo: "Oro",
    imagen:
      "https://i.pinimg.com/236x/bf/79/49/bf794971189236003529f54a4aaf257e.jpg",
  },
  {
    id: 27,
    carta: "Siete de oro",
    valor: 4,
    valorDeEnvido: 7,
    tipo: "Oro",
    imagen:
      "https://i.pinimg.com/236x/f2/98/a3/f298a3b4410a23085a92f853f79a248d.jpg",
  },
  {
    id: 28,
    carta: "Diez de oro",
    valor: 10,
    valorDeEnvido: 0,
    tipo: "Oro",
    imagen:
      "https://i.pinimg.com/236x/04/82/84/0482840244a018b3e214b5a75ccb770f.jpg",
  },
  {
    id: 29,
    carta: "Once de oro",
    valor: 9,
    valorDeEnvido: 0,
    tipo: "Oro",
    imagen:
      "https://i.pinimg.com/236x/42/56/9e/42569ef9fc840a4b35fdde4e9426dc97.jpg",
  },
  {
    id: 30,
    carta: "Doce de oro",
    valor: 8,
    valorDeEnvido: 0,
    tipo: "Oro",
    imagen:
      "https://i.pinimg.com/originals/fd/b2/0b/fdb20b603ad88c8f124278012d9e26f0.jpg",
  },
  {
    id: 31,
    carta: "Uno de copa",
    valor: 7,
    valorDeEnvido: 1,
    tipo: "Copa",
    imagen:
      "https://i.pinimg.com/474x/d0/54/6c/d0546c58569a9a23bddd04298eac01d2.jpg",
  },
  {
    id: 32,
    carta: "Dos de copa",
    valor: 6,
    valorDeEnvido: 2,
    tipo: "Copa",
    imagen:
      "https://i.pinimg.com/474x/09/08/81/0908812ee566f95de32e64a5a910785d.jpg",
  },
  {
    id: 33,
    carta: "Tres de copa",
    valor: 5,
    valorDeEnvido: 3,
    tipo: "Copa",
    imagen:
      "https://i.pinimg.com/236x/7b/71/67/7b71674ad4ac07dc433735766e41a9c6.jpg",
  },
  {
    id: 34,
    carta: "Cuatro de copa",
    valor: 14,
    valorDeEnvido: 4,
    tipo: "Copa",
    imagen:
      "https://i.pinimg.com/474x/3d/10/64/3d1064ff7b8860925fcb4c44bc912cbc.jpg",
  },
  {
    id: 35,
    carta: "Cinco de copa",
    valor: 13,
    valorDeEnvido: 5,
    tipo: "Copa",
    imagen:
      "https://i.pinimg.com/474x/ce/6d/a9/ce6da9c29a9cca0b1b6fb6f2511f52b1.jpg",
  },
  {
    id: 36,
    carta: "Seis de copa",
    valor: 12,
    valorDeEnvido: 6,
    tipo: "Copa",
    imagen:
      "https://i.pinimg.com/736x/f2/91/71/f29171199e6d3caaa1d353596c250c11.jpg",
  },
  {
    id: 37,
    carta: "Siete de copa",
    valor: 11,
    valorDeEnvido: 7,
    tipo: "Copa",
    imagen:
      "https://i.pinimg.com/474x/d7/c7/51/d7c751beea214fda50b763270220deb2.jpg",
  },
  {
    id: 38,
    carta: "Diez de copa",
    valor: 10,
    valorDeEnvido: 0,
    tipo: "Copa",
    imagen:
      "https://i.pinimg.com/474x/26/b9/c8/26b9c8127437f2135a3f482590b8db03.jpg",
  },
  {
    id: 39,
    carta: "Once de copa",
    valor: 9,
    valorDeEnvido: 0,
    tipo: "Copa",
    imagen:
      "https://i.pinimg.com/474x/07/d5/2e/07d52ea5558997beeb4bb87e7c89e9b8.jpg",
  },
  {
    id: 40,
    carta: "Doce de copa",
    valor: 8,
    valorDeEnvido: 0,
    tipo: "Copa",
    imagen:
      "https://i.pinimg.com/236x/68/7c/c6/687cc6083910cd859cdacda92442db41.jpg",
  },
];
