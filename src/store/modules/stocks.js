export const state = {
  stocks: [],
};

export const getters = {
  stocks: (state) => state.stocks,
};

export const mutations = {
  SET_STOCKS(state, { stocks }) {
    state.stocks = stocks;
  },
};
