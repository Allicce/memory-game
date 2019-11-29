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
      numbers: []
    }
  },
  methods: {
    randomNumber () {
      for (let i = 0; i < 5; i++) {
        this.numbers[i] = parseInt(Math.random() * 300 + 1)
      }
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
    background-color: lightgreen;
    padding: 0 20px;
    border-radius: 5%;
  }
</style>
