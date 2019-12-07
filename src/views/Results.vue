<template>
  <div>
    <Header/>
    <div v-show="isEqual">
      <h1>Správne</h1>
    </div>
    <div v-show="!isEqual">
      <h1>Chyba</h1>
    </div>
    <div v-for="(number, index) in watchNumber" :key="index"> {{ number }}</div>
    <hr>
    <div v-for="(number, index) in usersNumber" :key="index"> {{ number }}</div>
    <div v-show="isEqual">
      <Button class="button" name="pokračuj" routeTo="/gameScreen"/>
    </div>
    <div v-show="!isEqual">
      <Button class="button" name="hraj znova!" routeTo="/gameScreen"/>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Header from '../components/Header'
import _ from 'lodash'
import Button from '../components/Button'

export default {
  name: 'Results',
  components: {
    Header,
    Button
  },
  data () {
    return {
      number: '',
      isEqual: true
    }
  },
  computed: {
    ...mapState([
      'watchNumber',
      'usersNumber'
    ])
  },
  created () {
    this.isEqual = _.isEqual(this.watchNumber, this.usersNumber)
  }
}
</script>

<style scoped>

</style>
