<template>
  <div class="about">
    <heading />
    <h1>O nás</h1>
    <profile />
    <profile :class="container = change" />
    <profile />
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Profile from '../components/Profile.vue'
export default {
  components: {
    heading: Header,
    profile: Profile
  }
}
</script>
<style>
.change {
    flex-direction: row-reverse;
}
</style>
