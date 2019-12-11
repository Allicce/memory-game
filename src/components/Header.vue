<template>
<div class="header">
<div class="logo"> <img src="../../public/Logo.png" @click="goToPath('/')"></div>
<navigation />
</div>
</template>

<script>
import Menu from './MobileMenu.vue'

export default {
  components: {
    'navigation': Menu
  },
  methods: {
    goToPath (path) {
      this.$router.push(path)
    }
  }
}
</script>
<style scoped>
.header {
    display: flex;
    background-color: #041F1E;
    color: whitesmoke;
    width: 100%;
    height: 59px;
    justify-content: space-between;
}
h1 {
  font-size:20px;
  margin-left: 50px;
  margin-top: 15px
  }
.logo {
  width: 20vw;
  padding: auto;
}
img {
  width: 100%;
}
</style>
