<template>
  <div class="container">
    <div class="picture">obrázek</div>
    <div class="text">
      <h2>Jméno</h2>
      text
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style scoped>
.container {
  display: flex;
  padding: 30px;
  border: 1px solid rgb(231, 231, 231);
  border-radius: 10px;
  width: 85%;
  margin-left: 50px;
  margin-right: 50px;
  margin-top: 10px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5)
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
