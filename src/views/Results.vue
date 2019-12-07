<template>
  <div>
    <Header/>
    <div v-show="isEqual">
      <h1>Správne</h1>
    </div>
    <div v-show="!isEqual">
      <h1 class="mistake">Chyba</h1>
    </div>
    <div class="container">
      <div v-for="(number, index) in watchNumber" :key="index" class="number"> {{ number }}</div>
    </div>
    <div class="container">
      <div v-for="(number, index) in usersNumber" :key="index" class="number"> {{ number }}</div>
    </div>

    <div v-show="isEqual">
      <Button class="button margin-5" name="pokračuj" routeTo="/gameScreen"/>
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
  .container {
    margin: auto;
    width: 80vw;
    display: flex;
    justify-content: space-between;
  }

  .number {
    margin-top: 10%;
    background-color: #041F1E;
    color: white;
    padding: 0 20px;
    font-size: 50px;
    border-radius: 5%;
  }

  .mistake {
    color: red;
  }

  .margin-5 {
    margin-top: 5%;
    padding: 0;
  }

</style>
