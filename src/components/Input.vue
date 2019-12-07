<template>
    <div>
      <p v-if="alert"> Musí to byť číslo</p>
      <input v-model="inputNumber"
      @change="addNumber"
      type="number"/>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Input',
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
      this.addUserArray(this.number)
    }
  }
}
</script>

<style scoped>

</style>
