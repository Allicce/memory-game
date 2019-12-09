<template>
  <div class="button_cont">
    <p class="green_button">{{name}}</p>
  </div>

</template>

<script>

export default {
  name: 'button',
  props: [
    'name'
  ]
}
</script>

<style scoped>
  .green_button {
    margin-top: 0;
    width: 80vw;
    color: #fff !important;
    text-transform: uppercase;
    text-decoration: none;
    background: green;
    padding: 20px 0;
    border-radius: 5px;
  }

  @media(min-width: 700px) {
    .button_cont {
      padding: 0 5% 0 5%;
    }

    .green_button {
      padding: 20px;
      width: 100%;
      display: inline-block;
      border: none;
      transition: all 0.4s ease 0s;
    }

    .green_button:hover {
      background: #434343;
      letter-spacing: 1px;
      -webkit-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
      -moz-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
      box-shadow: 5px 40px -10px rgba(0,0,0,0.57);
      transition: all 0.4s ease 0s;
    }

  }
</style>
