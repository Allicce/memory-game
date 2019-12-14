<template>
  <div id="app">
    <router-view/>
   </div>
</template>
<script>
export default {
  components: {
  }
}
</script>

<style lang="scss">
  html {
    background-image: url("../public/backgroundImage.png");
    background-size: 100%;
    background-position: left top;
  }

  body {
    margin: 0;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>
