<template>
<div class="header">
<div class="logo"> <img src="../../public/Logo.png" @click="goToPath('/')"></div>
<navigation />
</div>
</template>

<script>
import Menu from './Menu.vue'

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
  margin-top: 0.5%;
}
img {
  width: 100%;
}

  @media(min-width: 1900px) {
    .logo {
      width: 15vw;
    }
  }
</style>
