import shop from '../../api/shop';
import { PRODUCTS } from '../mutation-types';

// initial state
const state = {
  all: [],
  moduleName: 'products'
};

// mutations
const mutations = {
  [PRODUCTS.SET_PRODUCTS] (state, products) {
    state.all = products;
  },

  [PRODUCTS.DECREMENT_PRODUCT_INVENTORY] (state, { id }) {
    console.log('[products mutations]: decrement product inventory');

    const product = state.all.find(product => product.id === id);
    product.inventory--;
  }
};

// actions
const actions = {
  getAllProducts: function({ commit }) {
    shop.getProducts(
      products => {
        console.log('[shop.getProducts]:');
        console.log(products);  // products is callback response from shop.getProducts API

        commit(PRODUCTS.SET_PRODUCTS, products);
      }
    );
  }
};

// getters
const getters = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}

