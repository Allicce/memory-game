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
      <Button class="button" name="hraj" routeTo="/gameScreen"/>
      <Button class="button" name="Trenuj" routeTo="/pageUnderConstruction"/>
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
    opacity: 1;
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
    .text {
      width: 60vw;
    }

    h1 {
      font-size: 5em;
    }

    .description {
      font-size: 1.5em;
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
      width: 80vw;
      display: flex;
      justify-content: space-between;
    }

  }

</style>
