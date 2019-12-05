<template>
  <div>
    <h1>Results</h1>
    <div v-for="(number, index) in watchNumber" :key="index"> {{ number }}</div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Results',
  data () {
    return {
      number: ''
    }
  },
  computed: {
    ...mapState([
      'watchNumber'
    ])
  }
}
</script>

<style scoped>

</style>
