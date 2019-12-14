<template>
    <div class="container">
      <input v-model="inputNumber"
             @change="addNumber"
             type="number" autofocus/>
    </div>

</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Input',
  props: {
    inputIndex: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      number: '',
      alert: false
    }
  },
  computed: {
    inputNumber: {
      get () {
        return this.number
      },
      set (newValue) {
        this.number = newValue
      }
    }
  },
  methods: {
    ...mapActions([
      'addUserArray'
    ]),
    addNumber () {
      const index = this.inputIndex - 1
      this.number = this.number.trim()
      this.number = parseInt(this.number)
      const object = { number: this.number,
        index: index }
      this.addUserArray(object)
    }
  }
}
</script>

<style scoped>
  .container{
    margin-top: 5%;
  }

  input {
    min-width: 30vw;
    max-width: 30vw;
    display: block;
    background-color: #041F1E;
    color: white;
    border: none;
    border-radius: 5%;
    font-size: 3em;
    text-align: center;
    padding: 5% 0;
  }

  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  @media(min-width: 700px) {
    input {
      min-width: 15vw;
      max-width: 15vw;
      font-size: 1.5em;
    }
  }

</style>
