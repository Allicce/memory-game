<template>
    <div class="container">
      <h1>Výsledok</h1>
      <div v-show="actualLevel >= 1 && actualLevel <= 5">
        <p>Presun obrazky do správneho poradia</p>
        <div class="container_user">
          <drag-and-drop></drag-and-drop>
        </div>
        <Button class="button" name="Výsledok" @click.native="goToPath('/results')"/>
      </div>
      <div v-show="actualLevel > 5">
        <p class="pad">Do políčka zapíš čísla, ktoré si videl na predchádzajucej obrazovke</p>
        <div class="container_user">
          <Input v-for="index in countItems" :key="index" :inputIndex="index" class="input_element"
          />
        </div>

        <Button class="button" name="Výsledok" @click.native="goToPath('/results')"/>

      </div>

    </div>

</template>

<script>
import Input from '../components/Input'
import Button from '../components/Button'
import DragAndDrop from '../components/DragAndDrop'
import { mapState } from 'vuex'

export default {
  name: 'UsersResults',
  components: {
    Input,
    Button,
    DragAndDrop
  },
  computed: {
    ...mapState([
      'actualLevel',
      'countItems'
    ])
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
    padding-top: 10%;
  }

  .input_element {
    justify-self: center;
  }

  h1 {
    padding: 20% 0 0 0;
  }

  .button {
    padding: 20% 0;
    margin: auto;
  }

  @media(min-width: 700px ) {

    .container_user {
      width: 70vw;
      padding: 0;
      grid-template-columns: repeat(3, minmax(80px, 1fr));
      font-size: 40px;
    }

    h1{
      margin: 0;
      padding: 3% 0 0 0;
    }

    .button {
      margin: 0;
      margin-left: 70vw;
      margin-top: 1%;
      justify-self: flex-end;
      width: 15vw;
      padding-top: 1%;

    }
  }

  @media(min-width: 1900px) {
    p {
      padding-bottom: 5%;
    }

    .pad {
      padding: 2% 0 5% 0;
    }
  }

</style>
