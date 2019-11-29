<template>
  <div class="container">
    <div class="text">
      <h1>Objav čo tvoja pamäť dokáže</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo cupiditate nihil mollitia sequi? Facilis
        necessitatibus provident a totam dolore neque error nobis architecto accusamus molestiae eius iste unde
      </p>
    </div>
    <div class="container_button">
      <div class="monster left">
        <img src="../../public/Charac_S-F2-Idle_0.png" alt="monster">
      </div>
      <Button class="button" name="hraj" routeTo="/gameScreen"/>
      <Button class="button" name="Trenuj"/>
      <div class="monster right">
        <img src="../../public/Charac_S-F2-Idle_0.png" alt="monster">
      </div>
    </div>
  </div>

</template>

<script>
// @ is an alias to /src
import Button from '../components/Button.vue'

export default {
  name: 'home',
  components: {
    Button
  }
}
</script>

<style scoped>
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
    width: 60vw;
    margin: auto;
  }

  nav li {
    display: inline-block;
    text-transform: capitalize;
  }

  h1 {
    font-size: 5em;
  }

  a {
    display: inline-block;
  }

  .monster {
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

</style>
