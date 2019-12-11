<template>
  <div class="ContactUs">
    <heading />
    <div class="main">
    <h1>Napiš nám</h1>
    <p>
      Líbí se ti naše hra? Chceš nám něco vzkázat nebo poradit? Neváhej nás
      kontaktovat pomocí formuláře níže. Budeme rády za zpětnou vazbu.
    </p>
    </div>
    <contact-form />
    <div class="footer">
    <footing />
    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'
export default {
  components: {
    heading: Header,
    'footing': Footer,
    'contact-form': ContactForm
  }
}
</script>

<style scoped>
.ContactUs {
  position: relative;
  min-height: 100vh;
}
.footer {
  position: absolute;
  bottom: 0;
}
.main {
  margin-bottom: 50px;
}
</style>
