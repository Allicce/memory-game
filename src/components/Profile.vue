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
  flex-direction: column;
  padding: 30px;
  border: 1px solid rgb(231, 231, 231);
  border-radius: 10px;
  width: 85%;
  margin: auto;
  margin-top: 10px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
}
.picture {
  flex: 0 1 50%;
}
h2 {
  margin-top: 0px;
}
.text {
  flex: 1 1 50%;
  padding: 0 10%;
}
  img {
    width: 50%;
    padding: 0 10%;
  }

  .change {
    background-color: rgb(204, 255, 207);
  }

@media (min-width: 1200px) {
  .container {
    flex-direction: row;
  }
  .change {
    flex-direction: row-reverse;
  }
}
</style>
