<template>
<header>
<div><h1>LOGO</h1></div>
<menu />
</header>
</template>

<script>
import Menu from './Menu.vue'

export default {
  components: {
    'menu': Menu
  }
}
</script>
<style scoped>
header {
    display: flex;
    background-color: #041F1E;
    color: whitesmoke;
}
</style>
