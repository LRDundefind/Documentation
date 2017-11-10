<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>This Is Documentation For Use</h2>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to My Vue.js App'
    }
  }
}
</script>

<style scoped>
h1, h2 {
    text-align: center;
    font-weight: normal;
}

</style>
