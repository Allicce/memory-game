<template>
  <div class="container">
    <h1 v-for="(number, index) in numbers" :key="index">
      {{number}}
    </h1>
  </div>
</template>

<script>
export default {
  name: 'Number',
  data () {
    return {
      numbers: [],
      watchNumber: []
    }
  },
  methods: {
    randomNumber () {
      for (let i = 0; i <= 5; i++) {
        this.numbers[i] = parseInt(Math.random() * 300 + 1)
      }
      this.watchNumber = this.numbers
    }
  },
  created () {
    this.randomNumber()
  }
}
</script>

<style scoped>
  .container{
    width: 70vw;
    margin: auto;
    display: flex;
    justify-content: space-between;

  }

  h1 {
    background-color: #041F1E;
    padding: 0 20px;
    border-radius: 5%;
    color: white;
  }
</style>
