<template>
  <div class="text-center">
    <v-menu offset-y>
        <v-btn flat slot="activator" color="white">
        <v-icon left><img src="expand_more-24px.svg"></v-icon>
        <span>Menu</span>
        </v-btn>
      <v-list>
        <v-list-tile
          v-for="link in links" :key="link.text" router :to="link.route"
        >
          <v-list-tile-title>{{ link.text }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {
  data () {
    return { links: [
      { text: 'O nás',
        route: '/about'
      },
      { text: 'Trénuj',
        route: '/pageUnderConstruction'
      },
      { text: 'Hraj',
        route: '/gameScreen'
      },
      { text: 'Napiš nám',
        route: '/contact-us'
      }
    ]
    }
  }
}
</script>
<style>
</style>
