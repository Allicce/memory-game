<template>
  <div class="container">
    <heading />
    <div class="text">
      <h1>Objav čo tvoja pamäť dokáže</h1>
      <p class="description">Zahraj si hru a prever svoju krátkodobu pamäť s ostatnými. Hra zlepší tvoju krátkodobu pamäť,
      koncentráciu a rýchlosť rozoznávania. Stlač hraj. </p>
    </div>
    <div class="container_button">
      <div class="monster_mobile">
        <img src="../../public/Charac_F-F2-idle_0.png" alt="monster">
      </div>
      <div class="monster_welcome_page left">
        <img src="../../public/Charac_S-F2-Idle_0.png" alt="monster">
      </div>
      <Button class="button_left button" name="hraj" @click.native="goToPath('/gameScreen')"/>
      <Button class="button_right button " name="Trenuj" @click.native="goToPath('/pageUnderConstruction')"/>
      <div class="monster_welcome_page right">
        <img src="../../public/Charac_S-F2-Idle_0.png" alt="monster">
      </div>
    </div>
    <Footer/>
  </div>

</template>

<script>
// @ is an alias to /src
import Button from '../components/Button.vue'
import Header from '../components/Header.vue'
import Footer from '../components/Footer'

export default {
  name: 'home',
  components: {
    Button,
    'heading': Header,
    Footer
  },
  methods: {
    goToPath (path) {
      this.$router.push(path)
    }
  }
}
</script>

<style scoped>

  .container {
    height: 100vh;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    color:  #041F1E;
    text-align: center;
    flex-wrap: wrap;
  }

  .text {
    padding-top: 10%;
    width: 60vw;
    margin: auto;
  }

  .description {
    padding-top: 10%;
  }

  h1 {
    padding-top: 10%;
    font-size: 2em;
  }

  .monster_welcome_page {
    display: none;
  }

  .monster_mobile {
    width: 20vw;
    position: relative;
    bottom: -10px;
  }

  .monster_mobile  img{
    display: block;
    width: 100%;
    height: auto;
  }

  @media(min-width: 700px) {
    .monster_mobile {
      display: none;
    }

    .text {
      width: 80vw;
    }

    h1 {
      width: 80%;
      margin: auto;
      padding: 0;
      font-size: 5em;
    }

    .description {
      font-size: 1.5em;
      margin: 0;
      padding: 7% 0;
    }

    .monster_welcome_page {
      display: block;
      width: 20vw;
      padding-left: 2%;
    }

    .right img {
      transform: scaleX(-1);
    }

    img {
      width: 100%;
    }

    .container_button {
      width: 70vw;
      display: grid;
      justify-content: space-between;
      grid-template-columns: repeat(8, minmax(20px, 1fr));
      align-items: center;
      margin: auto;
    }

    .button {
      width: 10vw;
    }

    .left {
      grid-column: 1 / span 3;
      grid-row: 1;
    }

    .right {
      grid-column: 7 / span 3;
      grid-row: 1;
    }

    .button_left {
      grid-column: 3 / span 2;
      grid-row: 1;

    }

    .button_right {
      grid-column: 5 / span 2;
      grid-row: 1;
    }
  }

  @media(min-width: 1200px) {
    .container  {
      display: block;
    }

    .text {
      padding: 5% 0 0 0;
    }

    h1 {
      font-size: 4em;
    }

    .description {
      padding: 5% 0 0 0;
      font-size: 1.2em;
    }

    .monster_welcome_page {
       width: 15vw;
    }

    .container_button {
      padding: 5% 0 ;
    }
  }

  @media(min-width: 1900px) {
    h1 {
      font-size: 6em;
    }

    .text p {
      font-size: 2em;
    }
  }

</style>
