<template>
  <div>
    <Header/>
    <h1>Results</h1>
    <div v-for="(number, index) in watchNumber" :key="index"> {{ number }}</div>
    <hr>
    <div v-for="(number, index) in usersNumber" :key="index"> {{ number }}</div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Header from '../components/Header'

export default {
  name: 'Results',
  components: {
    Header
  },
  data () {
    return {
      number: ''
    }
  },
  computed: {
    ...mapState([
      'watchNumber',
      'usersNumber'
    ])
  }
}
</script>

<style scoped>

</style>
