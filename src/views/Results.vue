<template>
  <div>
    <Header/>
    <div v-show="isEqual">
      <h1>Správne</h1>
    </div>
    <div v-show="!isEqual">
      <h1 class="mistake">Chyba</h1>
    </div>
    <div v-show="actualLevel >= 1 && actualLevel <= 5">
      <div class="text_container">
        <p>Zobrazené obrázky</p>
        <p>Tvoje obrázky</p>
      </div>

      <div class="flex_container">
        <div class="grid">
          <div v-for="(list, index) in watchPictures" :key="index" class="flex_container_item">
            <div class="container_item">
              <div v-for="item in list"
                   :key="item"
                   class ="item"
                   :class="{ [item]: true }">
              </div>
            </div>
          </div>
        </div>
        <div class="grid">
          <div v-for="(list, index) in userResults" :key="index">
            <div class="container_item">
              <div v-for="item in list"
                   :key="item"
                   class ="item"
                   :class="{ [item]: true }">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-show="actualLevel > 5">
      <p>Zobrazené čísla</p>
      <div class="container">
        <div v-for="(number, index) in watchNumber" :key="index" class="number"> {{ number }}</div>
      </div>
      <p>Tvoje čísla</p>
      <div class="container">
        <div v-for="(number, index) in usersNumber" :key="index" class="number"> {{ number }}</div>
      </div>
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
      'actualLevel',
      'watchPictures',
      'userResults'
    ])
  },
  methods: {
    ...mapActions([
      'getDefaultState',
      'resetLevels',
      'incrementActualLevel'

    ]),
    resetUsersInput () {
      this.getDefaultState([])
    },
    resetToFirstLevel () {
      this.resetLevels([])
    },
    nextLevel () {
      if (this.actualLevel === this.totalLevel) {
        this.resetToFirstLevel()
        this.$router.push('/endGame')
      } else {
        this.incrementActualLevel([])
      }
    },
    goToPath (path) {
      this.$router.push(path)
    }

  },
  created () {
    if (this.actualLevel >= 1 && this.actualLevel <= 5) {
      this.isEqual = _.isEqual(this.watchPictures, this.userResults)
    } else {
      this.isEqual = _.isEqual(this.watchNumber, this.usersNumber)
    }
  },
  beforeDestroy () {
    this.resetUsersInput()
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

  .item, .container_item {
    box-sizing: border-box;
    display: inline-block;
    border-radius: 10px;
    width: 100px;
    height: 100px;
    background: #ccc;
    vertical-align: middle;
    margin-right: 20px;
    position: relative;
    padding: 5px;
    padding-top: 35px;
    text-align: center;
    margin: 3px;
  }

  .container_item {
    display: inline-block;
    vertical-align: top;
    padding: 15px;
    margin-bottom: 20px;
    width: auto;
    height: auto;
    min-width: 140px;
    min-height: 140px;
    background-color: #041F1E;
  }

  .item {
    color: #fff;
    cursor: move;
    background: whitesmoke;
    border-right: 2px solid #666;
    border-bottom: 2px solid #666;

    display: inline-block;
    background-size: 80%;
    background-position: center;
    background-repeat: no-repeat;
  }

  .item.A { background-image: url("../../public/Charac_F-F2-idle_0.png") }
  .item.B { background-image: url("../../public/Charac_F-F1-idle_0.png") }
  .item.C { background-image: url("../../public/Charac_F-F03-Idle_0.png") }
  .item.D { background-image: url("../../public/Charac_S-F2-Idle_0.png") }
  .item.E { background-image: url("../../public/Charac_S-F1-Idle_5.png") }
  .item.F { background-image: url("../../public/Charac_S-F03-Idle_5.png") }
  .item.G { background-image: url("../../public/Charac_S-F1-Idle_5_left.png") }
  .item.H { background-image: url("../../public/Charac_S-F2-Idle_0_left.png") }
  .item.I { background-image: url("../../public/Charac_S-F03-Idle_5_left.png") }
  .item.J { background-image: url("../../public/Charac_F-F1-idle_0_foot.png") }
  .item.K { background-image: url("../../public/Charac_F-F2-idle_0_foot.png") }
  .item.L { background-image: url("../../public/Charac_F-F03-Idle_0_foot.png") }

  .flex_container {
    width: 70vw;
    margin: auto;
    display: flex;
    justify-content: space-between;
  }

  .flex_container_item {
    flex: 1 1 50%;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(140px, 1fr));
  }

  .text_container {
    width: 70vw;
    margin: auto;
    display: flex;
    justify-content: space-between;
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
