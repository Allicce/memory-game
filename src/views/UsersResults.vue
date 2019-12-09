<template>
    <div class="container">
      <h1>Uzivatel pise vysledok</h1>
      <div class="input_container">
        <Input v-for="index in 6" :key="index"/>
      </div>
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

  .input_container{
    width: 80vw;
    display: flex;
    align-content: center;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: auto;
  }

</style>
