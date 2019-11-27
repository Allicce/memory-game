<template>
  <div class="button_cont">
    <a class="green_button" href="add-website-here"
       rel="nofollow noopener">Button</a>
  </div>

</template>

<script>
export default {
  name: 'button'
}
</script>

<style scoped>

  .button_cont {
    margin: 5%;
    padding: 10% 5% 0 5%;
  }

  .green_button {
    color: #fff !important;
    text-transform: uppercase;
    text-decoration: none;
    background: green;
    padding: 20px;
    border-radius: 5px;
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

</style>
