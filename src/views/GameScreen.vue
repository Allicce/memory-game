<template>
  <div class="container">
    <div class="header">
      <return-to-home-page></return-to-home-page>
      <Timer class="timer"></Timer>
    </div>
    <Number class="number"></Number>
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
  .container {
    display: flex;
    flex-wrap: wrap;
  }

  .number {
    margin-top: 10%;
    align-self: center;
    font-size: 40px;
  }

  .header{
    width: 100vw;
    margin-left: 5%;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    justify-content: space-between;
  }

  .timer {
    grid-column: -1;
  }

</style>
