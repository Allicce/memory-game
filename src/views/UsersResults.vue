<template>
    <div class="container">
      <h1>Výsledok</h1>
      <v-show v-if="actualLevel >= 1 && actualLevel <= 5">
        <p>Presun obrazky do správneho poradia</p>
        <div class="container_user">
          <drag-and-drop></drag-and-drop>
        </div>
        <Button class="button" name="Výsledok" @click.native="goToPath('/results')"/>
      </v-show>
      <v-show v-else>
        <p>Do políčka zapíš čísla, ktoré si videl na predchádzajucej obrazovke</p>
        <div class="container_user">
          <Input v-for="index in 6" :key="index" :inputIndex="index" class="input_element"
          />
        </div>
        <Button class="button" name="Výsledok" @click.native="goToPath('/results')"/>
      </v-show>

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
      'actualLevel'
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
