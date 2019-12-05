<template>
    <div>
      <input v-model="number"
      @keydown.tab="addNumber"/>
    </div>
</template>

<script>
export default {
  name: 'Input',
  data () {
    return {
      number: '',
      numbers: []
    }
  },
  methods: {
    addNumber () {
      this.numbers.push(this.number)
    }
  }
}
</script>

<style scoped>

</style>
