<template>
  <div class="container_screen">
    <div class="header">
      <return-to-home-page class="home"></return-to-home-page>
      <Timer class="timer"></Timer>
    </div>
    <div class="monster">
      <img src="../../public/Charac_F-F2-idle_0.png">
    </div>
    <Number class="number"></Number>
    <div class="text">
      <p> Zapamätaj si všetky čísla v presnom poradí</p>
    </div>
  </div>

</template>

<script>
import Timer from '../components/Timer.vue'
import Number from '../components/Number'
import ReturnToHomePage from '../components/ReturnToHomePage'

export default {
  name: 'GameScreen',
  components: {
    'Timer': Timer,
    Number,
    ReturnToHomePage
  }
}
</script>

<style scoped>

  .container_screen {
    background-image: url("../../public/backgroundImage.png");
    background-size: 100%;
    background-position: left top;
    display: flex;
    flex-wrap: wrap;
  }

  .number {
    align-self: center;
    font-size: 40px;
    justify-content: center;
    margin-bottom: 20%;
    padding: 0;
  }

  .header{
    margin-top: 10%;
    width: 100vw;
    margin-left: 5%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .monster {
    width: 30vw;
    position: relative;
    right: -180px;
    bottom: -30px
  }

  .monster img {
    width: 100%;
  }

  .text {
    padding: 5%
  }

  @media(min-width: 370px) {
    .monster {
      width: 25vw;
      position: relative;
      right: -200px;
      bottom: -32px
    }

    .text {
      font-size: 1.5em;
    }
  }

  @media(min-width: 435px) {
    .monster {
      width: 20vw;
      position: relative;
      right: -290px;
      bottom: -35px
    }

  }

  @media(min-width: 570px) {
    .monster {
      width: 20vw;
      position: relative;
      right: -310px;
      bottom: -38px
    }
  }

  @media(min-width: 700px) {

  }

</style>
