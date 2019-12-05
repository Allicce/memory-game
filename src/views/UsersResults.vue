<template>
    <div>
      <h1>Uzivatel pise vysledok</h1>
      <p v-for="(num, index) in watchNumber" :key="index">{{num}}</p>
    </div>

</template>

<script>

export default {
  name: 'UsersResults',
  props: {
    watchNumber: Array
  },
  components: {

  }
}
</script>

<style scoped>

</style>
