<template>
  <div>
    <h2>Jméno</h2>
    <div class="container">
      <div class="picture">obrázek</div>
      <div class="text">text</div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style scoped>
.container {
    display:flex;
}
.picture {
    flex: 1 1 50%;
}
.text {
    flex: 1 1 50%;
}
.change {
    flex-direction: row-reverse;
}
</style>
