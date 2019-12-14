<template>
  <div class="inputForm">
      <heading />
    <h1>Řekni nám něco o sobě</h1>
    <p>
      Abychom mohli vyhodnotit tvoje výsledky, potřebujeme se o tobě něco
      dozvědět
    </p>
    <img src="../../public/Charac_F-F2-idle_0.png" alt="anothermonster" class="anothermonster">
    <form class="form" @submit="submitForm">
      <p>Cítím se být:</p>
      <input type="radio" id="1" value="man" name="gender" v-model="Results.gender" />
      <label for="1">Mužem</label>
      <input type="radio" id="2" value="woman" name="gender" v-model="Results.gender" />
      <label for="2">Ženou</label>
      <p>Kolik ti je let?</p>
      <select v-model="Results.age">
        <option disabled value="">Vyber svou věkovou kategorii</option>
        <option>Méně než 18 let</option>
        <option>18–25 let</option>
        <option>26–40 let</option>
        <option>41–65 let</option>
        <option>Více než 65 let</option>
      </select><br>
        <div class="buttons">
      <Button class="sendButton" name="Potvrdit a hrát" /> <br>
      <router-link to="/">Zpátky domů</router-link> <router-link to="/gameScreen" class="skip">Přeskočit</router-link>
      </div>
    </form>
    <foot class="foot" />
  </div>
</template>

<script>
import Button from '../components/Button'
import heading from '../components/Header'
import foot from '../components/Footer'

export default {
  components: {
    Button,
    heading,
    foot
  },
  data () {
    return {
      Results: {
        gender: '',
        age: ''
      }
    }
  },
  methods: {
    const axios = require('axios')
    submitForm (event) {

    }
  }
}
</script>

<style scoped>
.buttons {
    margin: auto;
}
.inputForm {
    position: relative;
    min-height: 100vh;
}
.anothermonster {
    position: absolute;
    width: 150px;
    right: 15em;
    top: 8em;
}

.foot {
    position: absolute;
    bottom: 0;
}

h1 {
    margin: 3em;
}
p {
    font-weight: bold;
    font-size: 1.1em;
}

.sendButton {
    width: 12em;
}
a {
   color: green;
}
.skip {
    margin-left: 3em;
}
</style>
