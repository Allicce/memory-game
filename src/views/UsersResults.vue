<template>
    <div>
      <h1>Uzivatel pise vysledok</h1>
      <div>
        <Input v-for="index in 6" :key="index"/>
      </div>
      <p>{{numberA}}</p>
      <Button class="button" name="Výsledok" routeTo="/results"/>

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
  }
}
</script>

<style scoped>

</style>
