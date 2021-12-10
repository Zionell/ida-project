import { createStore } from "vuex";

export default createStore({
  state: {
    goodsList: [
      {
        id: 0,
        name: "Наименование товара",
        description:
          "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
        price: 10000,
        urlImg:
          "https://raw.githubusercontent.com/Zionell/idaproject/main/src/assets/img/photo-good.jpg",
      },
      {
        id: 1,
        name: "Фотоаппарат мыльница",
        description:
          "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
        price: 13200,
        urlImg:
          "https://raw.githubusercontent.com/Zionell/idaproject/main/src/assets/img/photo-good.jpg",
      },
      {
        id: 2,
        name: "Фотоаппарат беззеркальный",
        description:
          "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
        price: 33600,
        urlImg:
          "https://raw.githubusercontent.com/Zionell/idaproject/main/src/assets/img/photo-good.jpg",
      },
      {
        id: 3,
        name: "Фотоаппарат цифровой",
        description:
          "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
        price: 28650,
        urlImg:
          "https://raw.githubusercontent.com/Zionell/idaproject/main/src/assets/img/photo-good.jpg",
      },
      {
        id: 4,
        name: "Фотоаппарат цифровой дальномерный",
        description:
          "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
        price: 38670,
        urlImg:
          "https://raw.githubusercontent.com/Zionell/idaproject/main/src/assets/img/photo-good.jpg",
      },
      {
        id: 5,
        name: "Фотоаппарат polaroid",
        description:
          "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
        price: 6590,
        urlImg:
          "https://raw.githubusercontent.com/Zionell/idaproject/main/src/assets/img/photo-good.jpg",
      },
      {
        id: 6,
        name: "Фотоаппарат instax",
        description:
          "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
        price: 6480,
        urlImg:
          "https://raw.githubusercontent.com/Zionell/idaproject/main/src/assets/img/photo-good.jpg",
      },
      {
        id: 7,
        name: "Фотоаппарат цифровой",
        description:
          "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
        price: 27650,
        urlImg:
          "https://raw.githubusercontent.com/Zionell/idaproject/main/src/assets/img/photo-good.jpg",
      },
      {
        id: 8,
        name: "Фотоаппарат цифровой дальномерный",
        description:
          "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
        price: 39630,
        urlImg:
          "https://raw.githubusercontent.com/Zionell/idaproject/main/src/assets/img/photo-good.jpg",
      },
      {
        id: 9,
        name: "Фотоаппарат polaroid",
        description:
          "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
        price: 6400,
        urlImg:
          "https://raw.githubusercontent.com/Zionell/idaproject/main/src/assets/img/photo-good.jpg",
      },
      {
        id: 10,
        name: "Фотоаппарат instax",
        description:
          "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
        price: 6300,
        urlImg:
          "https://raw.githubusercontent.com/Zionell/idaproject/main/src/assets/img/photo-good.jpg",
      },
    ],
    searchParameters: [
      "По умолчанию",
      "Цена по возрастанию",
      "Цена по убыванию",
      "По названию",
    ],
    selected: "По умолчанию",
  },
  getters: {
    getGoodsList: (state) => state.goodsList,
    getSearchParameters: (state) => state.searchParameters,
    getSelected: (state) => state.selected,
  },
  mutations: {
    setGoodsList(state, payload) {
      state.goodsList.push(...payload);
    },
    addGood(state, payload) {
      state.goodsList.push(payload);
      sessionStorage.setItem("goods", JSON.stringify(state.goodsList));
    },
    removalGood(state, payload) {
      let ind = state.goodsList.indexOf(payload);
      state.goodsList.splice(ind, 1);
      sessionStorage.setItem("goods", JSON.stringify(state.goodsList));
    },
    changeSelected(state, params) {
      state.selected = params;
    },
  },
});
