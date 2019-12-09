<template>
  <div>
    <Header/>
    <div v-show="isEqual">
      <h1>Správne</h1>
    </div>
    <div v-show="!isEqual">
      <h1 class="mistake">Chyba</h1>
    </div>
    <p>Zobrazené čísla</p>
    <div class="container">
      <div v-for="(number, index) in watchNumber" :key="index" class="number"> {{ number }}</div>
    </div>
    <p>Tvoje čísla</p>
    <div class="container">
      <div v-for="(number, index) in usersNumber" :key="index" class="number"> {{ number }}</div>
    </div>

    <div v-show="isEqual" class="button_container">
      <Button class="button margin-5"
              name="pokračuj"
              @click.native="goToPath('/gameScreen'), nextLevel()"

      />
      <div class="image">
        <img src="../../public/Charac_F-F2-Jump.gif">
      </div>
    </div>
    <div v-show="!isEqual" class="button_container">
      <Button class="button"
              name="hraj znova!"
              @click.native="goToPath('/gameScreen'), resetToFirstLevel()"
      />
      <div class="image">
        <img src="../../public/Characs_F-F2-Idle.gif">
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

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
      'usersNumber',
      'totalLevel',
      'actualLevel'
    ])
  },
  methods: {
    ...mapActions([
      'getDefaultState',
      'resetLevels',
      'incrementActualLevel'

    ]),
    resetUsersNumber () {
      this.getDefaultState()
    },
    resetToFirstLevel () {
      this.resetLevels()
    },
    nextLevel () {
      if (this.actualLevel === this.totalLevel) {
        this.resetToFirstLevel()
        this.$router.push('/endGame')
      } else {
        this.incrementActualLevel()
      }
    },
    goToPath (path) {
      this.$router.push(path)
    }

  },
  created () {
    console.log(this.watchNumber)
    console.log(this.usersNumber)
    this.isEqual = _.isEqual(this.watchNumber, this.usersNumber)
  },
  destroyed () {
    this.resetUsersNumber()
  }
}
</script>

<style scoped>
  .container {
    width: 90vw;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(2, minmax(100px, 1fr));
    justify-content: center;
    padding-top: 5%;
  }

  .number {
    justify-self: center;
    min-width: 30vw;
    max-width: 30vw;
    background-color: #041F1E;
    padding: 0 10px;
    border-radius: 5%;
    color: white;
    text-align: center;
    font-size: 40px;
    margin: 3% 3% 0 0;
  }

  .mistake {
    color: red;
  }

  .margin-5 {
    margin-top: 5%;
    padding: 0;
  }

  .image{
    display: none;
  }

  @media(min-width: 700px) {
    .container {
      width: 70vw;
      padding: 3%;
      grid-template-columns: repeat(3, minmax(80px, 1fr));
      font-size: 40px;
    }

    .number {
      min-width: 15vw;
      max-width: 15vw;
      padding: 0 10px;
      font-size: 1.5em;
    }

    .button {
      width: 15vw;
      padding: 3% 10%;

    }

    .image {
      display: block;
      width: 15vw;
    }

    .image  img {
      width: 100%;
    }

  .button_container {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0 5%;
  }

  }

</style>
