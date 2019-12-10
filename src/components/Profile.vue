<template>
  <div class="container">
    <div class="picture"><img :src="image_src"></div>
    <div class="text">
      <h2>{{ title }}</h2>
      <div>{{ text }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'image', 'text'],
  data () {
    return {
      image_src: require(`../../public/${this.image}`)
    }
  }
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
  flex: 0 1 50%;
}
.text {
  flex: 1 1 50%;
  padding: 0 10%;
}
.change {
  flex-direction: row-reverse;
}
  img {
    width: 50%;
    padding: 0 10%;
  }
</style>
