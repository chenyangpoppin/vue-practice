<template>
  <div id="app">
    <h1>Shopping Cart Demo</h1>
    <p>Name: {{ name }} </p>
    <p>Account: {{ email }}</p>
    <p>Website: {{ website }}</p>
    <hr/>
    <h2>Products</h2>
    <ProductList/>
    <hr/>
    <h2>Shopping Cart</h2>
    <ShoppingCart/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ProductList from './components/ProductList.vue'
import ShoppingCart from './components/ShoppingCart.vue'
import vuex from 'vuex'

console.log('[App.vue Entry Point]: Check vuex status');
console.log(vuex);  // Checkout vuex attributes

export default {
  name: 'App',
  computed: mapState({
    email: state => state.userInfo.email,
    name: state => state.userAccount.name,
    website: state => state.website
  }),
  components: {
    ProductList,
    ShoppingCart
  }
}
</script>

<style>
#app {
  font: 16px/1.5 tahoma,arial,'Hiragino Sans GB','\5b8b\4f53',sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
