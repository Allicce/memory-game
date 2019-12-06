<template>
  <div class="about">
    <heading />
    <h1>O nás</h1>
    <profile title="O hře"/>
    <profile title="Bětka" class="change" />
    <profile title="Katka"/>
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
    flex-direction: column-reverse;
    background-color: rgb(230, 255, 248);
}
</style>
