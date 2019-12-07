<template>
    <div class="container">
      <p v-if="alert"> Musí to byť číslo</p>
      <div class="input_container">
        <input v-model="inputNumber"
        @change="addNumber"
        type="number" autofocus/>
      </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

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
      const object = { number: this.number,
        index: index }
      this.addUserArray(object)
    }
  }
}
</script>

<style scoped>
  .container{
  }
  .input_container{
    width: 100px;
  }
  input {
    width: 100%;
    display: block;
    background-color: #041F1E;
    color: white;
    padding: 0 20px;
    border: none;
    border-radius: 5%;
    font-size: 50px;
    text-align: center;
  }

  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

</style>
