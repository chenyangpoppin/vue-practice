<template>
  <div>
    <p>props info: {{ info }}</p>
    <p>props name: {{ name }}</p>
    <p>props list: {{ list }}</p>
    <p>data.a: {{ a }}</p>
    <p>
      <button @click="BChangeHandler">Change data.b</button>
    </p>
  </div>
</template>

<script>
export default {
  name: 'PropsAndData',
  props: {
    info: Object,
    name: String,
    list: Array
  },
  data: function() {
    return {
      a: 'Hello',
      b: 'Vue'
    };
  },
  // this updated hook function only will be triggered when relevant attribute is used in template
  updated: function() {
    console.log('Trigger PropsAndData updated event');
  },
  methods: {
    BChangeHandler: function() {
      this.b = 'Vue' + Date.now();  // data.b will trigger updated event, because it is not used in template
      console.log('data.b is changed, but did not trigger component update', this.b);
    }
  }
}
</script>