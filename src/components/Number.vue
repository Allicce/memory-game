<template>
  <div class="container">
    <div class="monster_number">
      <img src="../../public/Charac_F-F2-idle_0.png">
    </div>
    <h1 v-for="(number, index) in numbers" :key="index">
      {{number}}
    </h1>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Number',
  data () {
    return {
      numbers: []
    }
  },
  computed: {
    ...mapState([
      'actualLevel'
    ])
  },
  methods: {
    ...mapActions([
      'addArray'
    ]),
    randomNumber () {
      if (this.actualLevel >= 6 && this.actualLevel <= 10) {
        for (let i = 0; i <= 5; i++) {
          this.numbers[i] = parseInt(Math.random() * 9 + 1)
        }
      } else if (this.actualLevel >= 11 && this.actualLevel <= 16) {
        for (let i = 0; i <= 5; i++) {
          this.numbers[i] = parseInt(Math.random() * 99 + 1)
        }
      } else if (this.actualLevel >= 16 && this.actualLevel <= 20) {
        for (let i = 0; i <= 5; i++) {
          this.numbers[i] = parseInt(Math.random() * 300 + 1)
        }
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
    display: grid;
    grid-template-columns: repeat(2, minmax(100px, 1fr));
    justify-content: center;
    padding-top: 15%;
  }

  h1 {
    justify-self: center;
    min-width: 30vw;
    max-width: 30vw;
    background-color: #041F1E;
    padding: 0 10px;
    border-radius: 5%;
    color: white;
    text-align: center;
    font-size: 1.5em;
    margin: 3% 3% 0 0;
  }

  .monster_number {
    justify-self: center;
    position: relative;
    bottom: -30px;
    grid-column: 2;
    width: 20vw;
  }

  .monster_number img {
    width: 100%;
  }

  @media(min-width: 700px ) {
    .container{
      width: 60vw;
      padding: 20%;
      grid-template-columns: repeat(3, minmax(100px, 1fr));
    }

    h1{
      min-width: 15vw;
      max-width: 15vw;
      padding: 0 10px;
      font-size: 1.5em;
    }

    .monster_number {
      grid-column: 3;
      width: 5vw;
    }

  }

  @media(min-width: 1200px) {

    .monster {
      bottom: -40px;
    }

  }

</style>
