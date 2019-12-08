<template>
  <div class="profile">
    <div id="container" :class="profile.id === 2 ? 'change' : ''" v-for="profile in list" :key="profile.id">
    <div class="picture"><img class="photo" :src="`/${profile.photo}`" :alt="profile.id"></div>
    <div class="text">
      <h2>{{ profile.name }}</h2>
      <p>{{ profile.text }}</p>
    </div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    list () {
      return this.$store.state.profiles
    }
  } }
</script>
<style scoped>
#container {
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
.photo {
  max-width: 200px;
}
.change {
    flex-direction: row-reverse;
    background-color: rgb(230, 255, 248);
}
</style>
