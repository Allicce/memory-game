<template>
<div>
  <div id="contact-form" class="contact-form">
      <img src="/Charac_F-F2-idle_0.png" alt="greenmonster" class="monster">
        <h3 class="contact-form_title">Kontaktní formulář</h3>
        <div class="separator"></div>

        <div v-if="isSending" class="loading">Odesílám...</div>

        <form class="form" @submit="onSubmit">
          <input
            required
            name="name"
            v-model="contact.name"
            placeholder="Jméno"
            type="text"
            autocomplete="off"
          />
          <input
            required
            name="email"
            v-model="contact.email"
            placeholder="E-mail"
            type="email"
            autocomplete="off"
          />
          <textarea
            name="message"
            v-model="contact.message"
            rows="4"
            placeholder="Sem napiš zprávu"
          ></textarea>
          <button class="button">Odeslat</button>
        </form>
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      contact: {
        name: '',
        email: '',
        message: ''
      },
      isSending: false
    }
  },

  methods: {
    clearForm () {
      for (let field in this.contact) {
        this.contact[field] = ''
      }
    },
    onSubmit (evt) {
      evt.preventDefault()

      this.isSending = true

      setTimeout(() => {
        let form = new FormData()
        for (let field in this.contact) {
          form.append(field, this.contact[field])
        }

        // Send form to server
        this.$http
          .post('/app.php', form)
          .then(response => {
            console.log(response)
            this.clearForm()
            this.isSending = false
          })
          .catch(e => {
            console.log(e)
          })
      }, 1000)
    }
  }
}
</script>

<style scoped>
.monster {
width: 75px;
position: absolute;
top: 0px;
right: 20%;
background-color: transparent;
}
.contact-form {
font-family: 16px;
margin: 0 auto;
max-width: 600px;
width: 100%;
position: relative;
}

.contact-form .separator {
border-bottom: solid 1px #ccc;
margin-bottom: 15px;
}

.contact-form .form {
display: flex;
flex-direction: column;
font-size: 16px;
}

.contact-form_title {
color: #333;
text-align: left;
font-size: 28px;
}
.contact-form input[type="email"],
.contact-form input[type="text"],
.contact-form textarea {
border: solid 1px #e8e8e8;
font-family: 'Roboto', sans-serif;
padding: 10px 7px;
margin-bottom: 15px;
outline: none;
}
.contact-form textarea {
resize: none;
}
.contact-form .button {
background: green;
border: solid 1px green;
color: whitesmoke;
cursor: pointer;
padding: 10px 50px;
text-align: center;
text-transform: uppercase;
}

.contact-form .button:hover {
background: #434343;
border: solid 1px #434343;
box-shadow: 3px 5px 10px rgba(0, 0, 0, 0.5)
}

.contact-form input[type="email"],
.contact-form input[type="text"],
.contact-form textarea,
.contact-form .button {
font-size: 15px;
border-radius: 3px
}

@media (max-width: 550px) {
  .monster {
    display: none;
  }
  .contact-form {
    width: 300px;
  }
  .contact-form h3 {
    font-size: 18px;
  }
}
</style>
