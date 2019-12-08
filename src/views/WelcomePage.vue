<template>
  <div class="container">
    <heading />
    <div class="text">
      <h1>Objav čo tvoja pamäť dokáže</h1>
      <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo cupiditate nihil mollitia sequi? Facilis
        necessitatibus provident a totam dolore neque error nobis architecto accusamus molestiae eius iste unde
      </p>
    </div>
    <div class="container_button">
      <div class="monster_mobile">
        <img src="../../public/Charac_F-F2-idle_0.png" alt="monster">
      </div>
      <div class="monster left">
        <img src="../../public/Charac_S-F2-Idle_0.png" alt="monster">
      </div>
      <Button class="button_left button" name="hraj" routeTo="/gameScreen"/>
      <Button class="button_right button " name="Trenuj" routeTo="/pageUnderConstruction"/>
      <div class="monster right">
        <img src="../../public/Charac_S-F2-Idle_0.png" alt="monster">
      </div>
    </div>
  </div>

</template>

<script>
// @ is an alias to /src
import Button from '../components/Button.vue'
import Header from '../components/Header.vue'

export default {
  name: 'home',
  components: {
    Button,
    'heading': Header

  }
}
</script>

<style scoped>
  .container {
    background-image: url("../../public/backgroundImage.png");
    background-size: 100%;
    background-position: left top;
  }

  .container {
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

  nav li {
    display: inline-block;
    text-transform: capitalize;
  }

  h1 {
    padding-top: 10%;
    font-size: 2em;
  }

  a {
    display: inline-block;
  }
  .monster {
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

    .monster {
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
      width: 90vw;
      display: grid;
      justify-content: space-between;
      grid-template-columns: repeat(auto-fit, minmax(20px, 1fr));
      align-items: center;
      justify-content: space-between;
    }

    .button {
      width: 10vw;
    }

    .left {
      grid-column: 1 / span 2;
    }

    .right {
      grid-column: 7 / span 2;
    }

    .button_left {
      grid-column: 3 / span 2;

    }

    .button_right {
      grid-column: 5 / span 2;
    }
  }

  @media(min-width: 1200px) {
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

    .monster {
      width: 15vw;
    }

    .container_button {
      padding: 5% 0 ;
    }
  }

</style>
