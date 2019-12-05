<template>
  <div>
    <h1>Results</h1>
    <return-to-home-page></return-to-home-page>
    <div v-for="(number, index) in watchNumber" :key="index"> {{ number }}</div>
    <hr>
    <div v-for="(number, index) in usersNumber" :key="index"> {{ number }}</div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ReturnToHomePage from '../components/ReturnToHomePage'
export default {
  name: 'Results',
  components: {
    ReturnToHomePage
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
