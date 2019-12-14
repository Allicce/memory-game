<template>
  <div class="container_screen">
    <div class="header">
      <return-to-home-page class="home"></return-to-home-page>
    </div>
    <div v-if="actualLevel >= 1 && actualLevel <= 5" class="flex_container">
      <div class="text">
        <h1> Level {{ actualLevel }}</h1>
        <p> Zapamätaj si všetky obrázky v presnom poradí</p>
      </div>
      <div>
        <Timer class="timer"></Timer>
        <Picture/>
        <div class="container_button">
          <Button name="už si to pamätám" @click.native="goToPath('/gameScreen/usersResults')"></Button>
        </div>
      </div>
    </div>
    <div v-else class="flex_container">
      <div class="text">
        <h1> Level {{ actualLevel }}</h1>
        <p> Zapamätaj si všetky čísla v presnom poradí</p>
      </div>
      <div>
        <Timer class="timer"></Timer>
        <Number class="number"></Number>
        <div class="container_button">
          <Button name="už si to pamätám" @click.native="goToPath('/gameScreen/usersResults')"></Button>
        </div>
      </div>

    </div>
  </div>

</template>

<script>
import Timer from '../components/Timer.vue'
import Number from '../components/Number.vue'
import ReturnToHomePage from '../components/ReturnToHomePage.vue'
import Picture from '../components/Picture.vue'
import Button from '../components/Button.vue'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'GameScreen',
  components: {
    'Timer': Timer,
    Number,
    ReturnToHomePage,
    Picture,
    Button
  },
  computed: {
    ...mapState([
      'actualLevel'
    ])
  },
  methods: {
    ...mapActions([
      'resetUsersInput'
    ]),
    goToPath (path) {
      this.$router.push(path)
    }
  },
  created () {
    // this.resetUsersInput()
  }
}
</script>

<style scoped>

  .container_screen {
    background-color: rgba(255,255,255,0.3);
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
  }

  .number {
    align-self: center;
    font-size: 30px;
    justify-content: center;
    margin-bottom: 20%;
    padding: 0;
  }

  .header{
    margin-top: 3%;
    width: 100vw;
    margin-left: 10%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .text {
    padding: 1% 5%;
  }

  .flex_container {
    display: flex;
    justify-content: center;
  }

  .timer {
    padding-left: 70%;
  }
  @media(min-width: 700px) {
    .text {
      text-align: left;
      font-size: 15px;
    }
    .header {
      width: 90vw;
    }
    .container_screen {
      flex-direction: column;
    }
  }

  @media(min-width: 1200px) {
    .text {
      padding-top: 10%;
      padding-bottom: 0;
    }

    .text p {
      margin-bottom: 0;
    }

    .container_button {
      padding-right: 10%;
      display: flex;
      justify-content: flex-end;
    }
  }

  @media(min-width: 1900px) {
    .text {
      font-size: 1.2em;
    }

    .header {
      padding-top: 0;
      margin-top: 0;
    }
  }
</style>
