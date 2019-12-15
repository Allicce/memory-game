<template>

  <div>
    <h1> {{percentil}} percentil</h1>
  </div>

</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Percentil',
  props: {
    percentil: Number
  },
  computed: {
    ...mapState([
      'actualLevel'
    ])
  }

}
</script>

<style scoped>

</style>
