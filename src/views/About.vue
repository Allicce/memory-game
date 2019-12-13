<template>
  <div class="about">
    <heading />
    <h1>O nás</h1>
    <main>
    <profile title="O hre"
             class="white"
             text="Hra bola vytvorená ako záverečný projekt Digitálnej akadémie web. Jej cielom je zlepšiť krátkodobu
              pamäť a koncentráciu. "
             image="monster_czechitas.png"
    />
    <profile title="Alžbeta"
             class="green"
             text="Pracujem ako test lead pre IPTV, kde som mám možnosť si ošahať rôzne platformy, vidieť vývoj od vzniku až po release
             a byť jeho neodmyslitelnou sučasťou. Ako prvý impuls pre prihlásenie sa do webovej akadémie bolo zistiť niečo viac
             o webe, nepozerať sa na neho len z testerského pohladu ale prehlbiť si znalosti. A nikdy by ma nenapadlo že
             ma vývoj webu až tak nadchne. A preto sa nachádzate na prvom väčšom projekte, ktorý som vytvorila spolu s Katkou
             a určite nie je posledný. Dalšie moje záľuby sú knihy. Jedny z mojích obľúbených sú 1984, všetky knihy od Ziburu
             a Sú svetlá ktoré nevidíme. A neodmyslitelnou súčasťou mna je cestovanie. Milujem mestá a v poslednej dobe sa
             mi hrozne cnie po New Yorku. Europske mesto ktoré odporúčam a s priateľom ho navštevujeme každý rok je Budapešť.
             V Budapešti odporúčam navštíviť nejaký koncert a je jedno či je to maličký koncert alebo najjväčší, ktorý usporiadali,
             vždy dýcha nezabudnuteľnou atmosférou.
              "
             image="DSC_2372.jpg"
    />
    <profile title="Katka"
             class="white"
             text="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
             Imperdiet massa tincidunt nunc pulvinar. Tincidunt nunc pulvinar sapien et ligula.
             Tempus iaculis urna id volutpat lacus laoreet non. Sit amet consectetur adipiscing elit ut
             aliquam purus sit. Nec feugiat nisl pretium fusce. Leo urna molestie at elementum eu. Faucibus
             vitae aliquet nec ullamcorper sit amet risus nullam. Varius duis at consectetur lorem donec massa
             sapien faucibus. Vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet. Id velit
             ut tortor pretium viverra suspendisse. Ut sem nulla pharetra diam sit. Cursus vitae congue mauris
             rhoncus aenean vel elit. Massa enim nec dui nunc mattis enim ut."
             image="katka.jpg"
    />
    </main>
    <footing />
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Profile from '../components/Profile.vue'
import Footer from '../components/Footer'
export default {
  components: {
    heading: Header,
    profile: Profile,
    'footing': Footer
  },
  mounted () {
    this.$store.dispatch('loadProfiles')
  }
}
</script>
<style>
main {
  margin: 3% 0;
}

  @media(min-width: 1900px) {
    h1 {
      font-size: 3em;
      padding-top: 2%;
    }
  }
</style>
