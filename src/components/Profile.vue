<template>
  <div class="container">
    <div class="picture"><slot name="picture"></slot></div>
    <div class="text">
      <slot name="text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  data () {
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
  align-self: center;
}
h2 {
  margin-top: 0px;
  text-align: center;
}
.text {
  flex: 1 1 50%;
  padding: 0 6%;
  text-align: left;
  margin-bottom: 2em;
}

img {
  width: 50%;
  padding: 0 10%;
}

.white {
  background-color: white;
}

.green {
  background-color: white;
}

@media (min-width: 1200px) {
  .container {
    flex-direction: row;
  }
  .green {
    flex-direction: row-reverse;
  }

  h2 {
    padding: 5% 0;
  }

  .about {
    padding-bottom: 10%;
  }
}
  @media(min-width: 1900px) {
    h2 {
      font-size: 2em;
    }

    .about {
      font-size: 1.3em;
    }
  }
</style>
