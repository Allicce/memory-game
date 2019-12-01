<template>
  <div class="nav">
    <ul>
      <li><router-link to="/about">O nás</router-link></li>
      <li><a href="www.google.com">Trénuj</a></li>
      <li><a href="www.google.com">Hraj</a></li>
      <li><router-link to="/contact-us">Napiš nám</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.nav {
  margin-right: 50px;
}
ul {
    display: flex;
    margin: 0 2px;
}
li {
    display: inline-block;
    padding: 20px 0
}
a:hover {
  background-color: green;
}
a {
  color: whitesmoke;
  text-decoration: none;
  font-size: 16px;
  padding: 20px 15px;
}
</style>
