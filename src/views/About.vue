<template>
  <div class="about">
    <heading />
    <h1>O nás</h1>
    <profile />
    <footing />
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Profile from '../components/Profile.vue'
import Footer from '../components/Footer'
export default {
  components: {
    heading: Header,
    profile: Profile,
    'footing': Footer
  },
  mounted () {
    this.$store.dispatch('loadProfiles')
  }
}
</script>
<style scoped>
.about {
  position: relative;
}
</style>
