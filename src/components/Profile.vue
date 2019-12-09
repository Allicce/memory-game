<template>
  <div class="container">
    <div class="picture">{{ picture }}</div>
    <div class="text">
      <h2>{{ title }}</h2>
      <div v-html="content">{{ text }}</div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['title', 'picture', 'text']
}
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
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
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
