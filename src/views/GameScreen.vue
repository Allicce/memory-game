<template>
  <div class="container_screen">
    <div class="header">
      <return-to-home-page class="home"></return-to-home-page>
      <Timer class="timer"></Timer>
    </div>
    <div v-show="actualLevel >= 1 && actualLevel <= 5">
      <div class="text">
        <h1> Level {{ actualLevel }}</h1>
        <p> Zapamätaj si všetky obrázky v presnom poradí</p>
      </div>
      <Picture/>
    </div>
    <div v-show="actualLevel >= 6">
      <div class="text">
        <h1> Level {{ actualLevel }}</h1>
        <p> Zapamätaj si všetky čísla v presnom poradí</p>
      </div>
      <Number class="number"></Number>
    </div>
  </div>

</template>

<script>
import Timer from '../components/Timer.vue'
import Number from '../components/Number'
import ReturnToHomePage from '../components/ReturnToHomePage'
import Picture from '../components/Picture'
import { mapState } from 'vuex'

export default {
  name: 'GameScreen',
  components: {
    'Timer': Timer,
    Number,
    ReturnToHomePage,
    Picture
  },
  computed: {
    ...mapState([
      'actualLevel'
    ])
  }
}
</script>

<style scoped>

  /*.header {
    width: 100%;
  }*/

  .container_screen {
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
    margin-top: 2%;
    width: 100vw;
    margin-left: 5%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .text {
    padding: 1% 5%;
  }
  @media(min-width: 700px) {
    .text {
      text-align: left;
      font-size: 15px;
    }
    .header {
      margin-top: 3%;
    }
    .container_screen {
      flex-direction: column;
    }
  }

  @media(min-width: 1200px) {
    .text {
      padding-bottom: 0;
    }

    .text p {
      margin-bottom: 0;
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
