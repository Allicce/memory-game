<template>
<div class="header">
<div class="logo"> <router-link to="/"><h1>KAŠdesign</h1></router-link></div>
<navigation />
</div>
</template>

<script>
import Menu from './Menu.vue'

export default {
  components: {
    'navigation': Menu
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
  height: 53px;
  padding: auto;
}
a {
  color: whitesmoke;
  text-decoration: none;
}
</style>
