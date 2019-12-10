<template>
  <div class="container">
    <div class="text">
      <h1>Na stránke</h1>
      <h2>sa pracuje</h2>
      <div class="image_container">
        <Button @click.native="goToPath('/')" name="Domov" class="button"/>
        <div class="image">
          <img src="../../public/Charac_F-F2-Jump.gif">
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import Button from '../components/Button'
export default {
  name: 'PageUnderConstruction',
  components: {
    Button
  },
  methods: {
    goToPath (path) {
      this.$router.push(path)
    }
  }
}
</script>

<style scoped>

  .image {
    display: none;
  }

  .text {
    display: table-cell;
    width: 100vw;
    height: 100vh;
    vertical-align: middle;
  }

  h1 {
    font-size: 3em;
  }

  h2 {
    font-size: 1.5em;
  }
  .button {
    margin-top: 20%;
  }

  @media(min-width: 700px) {
    h1 {
      font-size: 5em;
    }

    h2 {
      font-size: 3.5em;
    }

    .button {
      align-self: flex-end;
    }

    .image{
      display: block;
      width: 10vw;
      padding: 0 10% 0 0;
    }

    img {
      width: 100%;
    }

    .image_container {
      display: flex;
      justify-content: flex-end;
    }

  }

</style>
