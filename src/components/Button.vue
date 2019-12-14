<template>
  <div class="button_cont">
    <p class="button_cont button_default"
       v-bind:class="{ 'green_button': isGreen,
                      'darker_green_button': isDarkerGreen,
                      'disabled': isDisabled}">{{name}}</p>
  </div>

</template>

<script>

export default {
  name: 'button',
  props: {
    name: {
      type: String,
      default: 'tlačidlo'
    },
    isGreen: {
      type: Boolean,
      default: true
    },
    isDarkerGreen: {
      type: Boolean,
      default: false
    },
    isDisabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>

  .button_default {
    margin: auto;
    width: 80vw;
    color: #fff !important;
    text-transform: uppercase;
    text-decoration: none;
    padding: 20px 0;
    border-radius: 5px;
  }

  .green_button {
    background: green;
  }

  .darker_green_button {
    background: #32936F;
  }

  p {
    cursor: pointer;
  }

  .disabled {
    background: #434343;
  }

  @media(min-width: 700px) {
    .button_cont {
      padding: 0 5% 0 5%;
      padding: 20px;
      max-width: 10vw;
      display: inline-block;
      border: none;
      transition: all 0.4s ease 0s;
    }

    .button_default:hover {
      background: #124559;
      letter-spacing: 1px;
      -webkit-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
      -moz-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
      box-shadow: 5px 40px -10px rgba(0,0,0,0.57);
      transition: all 0.4s ease 0s;
    }
  }
</style>
