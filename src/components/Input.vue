<template>
    <div>
      <input v-model="inputNumber"
      @keydown.tab="addNumber"/>
      <p>{{number}}</p>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Input',
  data () {
    return {
      number: -1
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
      console.log('log ' + this.number)
      this.addUserArray(this.number)
    }
  }
}
</script>

<style scoped>

</style>
