<template>
  <div class="container">
    <h1 v-for="(number, index) in numbers" :key="index">
      {{number}}
    </h1>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Number',
  data () {
    return {
      numbers: []
    }
  },
  methods: {
    ...mapActions([
      'addArray'
    ]),
    randomNumber () {
      for (let i = 0; i <= 5; i++) {
        this.numbers[i] = parseInt(Math.random() * 300 + 1)
      }
      this.addArray(this.numbers)
    }
  },
  created () {
    this.randomNumber()
  }
}
</script>

<style scoped>

  .container {
    width: 90vw;
    margin: auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-top: 15%;
  }

  h1 {
    min-width: 100px;
    max-width: 100px;
    background-color: #041F1E;
    padding: 0 10px;
    border-radius: 5%;
    color: white;
    text-align: center;
    font-size: 1.5em;
    margin: 3% 3% 0 0;
  }

  @media(min-width: 435px) {
    h1{
      min-width: 120px;
      max-width: 120px;
      padding: 0 20px;
    }

  }

  @media(min-width: 570px) {
    h1{
      min-width: 190px;
      max-width: 190px;
      padding: 0 20px;
      font-size: 2.5em;
    }
  }

  @media(min-width: 700px) {
    .container{
      width: 70vw;

    }

  }

</style>
