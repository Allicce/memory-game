<template>
    <div class="container">
      <h1>Výsledok</h1>
      <p>Do políčka zapíš čísla, ktoré si videl na predchádzajucej obrazovke</p>
      <div class="container_user">
        <Input v-for="index in 6" :key="index" :inputIndex="index" class="input_element"
        />
      </div>
      <Button class="button" name="Výsledok" @click.native="goToPath('/results')"/>
    </div>

</template>

<script>
import Input from '../components/Input'
import Button from '../components/Button'

export default {
  name: 'UsersResults',
  components: {
    Input,
    Button
  },
  data () {
    return {
    }
  },
  methods: {
    goToPath (path) {
      this.$router.push(path)
    }
  }
}
</script>

<style scoped>

  .container_user {
    width: 90vw;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(2, minmax(100px, 1fr));
    justify-content: center;
    padding-top: 20%;
  }

  .input_element {
    justify-self: center;
  }

  h1 {
    padding: 10% 0 0 0;
  }

  .button {
    padding: 20% 0;
    margin: auto;
  }

  @media(min-width: 700px ) {

    .container_user {
      width: 70vw;
      padding: 3%;
      grid-template-columns: repeat(3, minmax(80px, 1fr));
      font-size: 40px;
    }

    h1{
      padding: 3% 0 0 0;
    }

    .button {
      width: 15vw;
      padding-top: 3%;

    }
  }

</style>
