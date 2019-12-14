<template>
  <div class="about">
    <heading />
    <h1>O nás</h1>
    <main>
    <profile class="white">
      <img src="../../public/monster_czechitas.png" alt="czechimonster" slot="picture">
      <div slot="text">
      <h2>O hře</h2>
      <p>Tuto hru jsme vytvořily jako závěrečný projekt webové akademie <b>Czechitas</b>. Když jsme si vybíraly téma, shodly jsme se na tom,
             že v době, kdy digitální média kradou velkou část naší pozornosti, nám dává více a více zabrat udržet náš mozek fit. Začaly jsme si všímat toho,
             že obzvlášť naše paměť při denní práci u počítače trošičku zlenivěla. A tak jsme se rozhodly jí dát co proto. A tohle fitko pro paměť chceme poskytnout i vám
              v podobě této hry!<br>
              A že nevíš, kdo nebo co jsou <b>Czechitas?</b> Jedná se o organizaci, která dává ženám a dětem příložitost se něco naučit v různých oblastech IT. Kromě programování a psaní webu
              učí třeba o testování, informační bezpečnosti a datové analytice, a to v několika městech v Česku. Kurzů je skutečně spousta, tak
              se podívej na jejich <a href="https://www.czechitas.cz/cs/">webové stránky</a> a třeba tě něco zaujme.</p>
      </div>
    </profile>
    <profile class="green">
      <img src="../../public/DSC_2372.jpg" alt="betka" slot="picture">
      <div slot="text">
      <h2>Alžbeta</h2>
      <p>Pracujem ako test lead pre IPTV, kde som mám možnosť si ošahať rôzne platformy, vidieť vývoj od vzniku až po release
             a byť jeho neodmyslitelnou sučasťou. Ako prvý impuls pre prihlásenie sa do webovej akadémie bolo zistiť niečo viac
             o webe, nepozerať sa na neho len z testerského pohladu ale prehlbiť si znalosti. A nikdy by ma nenapadlo že
             ma vývoj webu až tak nadchne. A preto sa nachádzate na prvom väčšom projekte, ktorý som vytvorila spolu s Katkou
             a určite nie je posledný.<br> Dalšie moje záľuby sú knihy. Jedny z mojích obľúbených sú 1984, všetky knihy od Zibury
             a Sú svetlá ktoré nevidíme. A neodmyslitelnou súčasťou mna je cestovanie. Milujem mestá a v poslednej dobe sa
             mi hrozne cnie po New Yorku. Europske mesto ktoré odporúčam a s priateľom ho navštevujeme každý rok je Budapešť.
             V Budapešti odporúčam navštíviť nejaký koncert a je jedno či je to maličký koncert alebo najjväčší, ktorý usporiadali,
             vždy dýcha nezabudnuteľnou atmosférou.</p>
      </div>
    </profile>
    <profile class="white">
      <img src="../../public/katka.jpg" alt="Katka" slot="picture">
      <div slot="text">
      <h2>Katka</h2>
      <p>Vystudovala jsme psychologii, ale vždycky mě bavila kreativní tvorba. Svoje první, byť velice jednoduché, webové stránky jsem
        vytvořila už ve třinácti, avšak od té doby utekla spousta vody a od té doby jsem se několikrát pokusila rozjet alespoň vlastní blog.
        Jeden z nich, kde se věnuji svému největšímu koníčku, vaření, stále můžete <a href="www.reallyluckykaty.cz">navštívit</a>.
       <br>Do budoucna bych se ráda naučila něco o uživatelském designu, které vnímám jako ideální propojení mezi psychologií, estetikou a IT. Mimo to se snažím trochu fotit, šiji na stroji nebo hraju na ukulele. S přítelem jsme také postavili obytnout dodávku,
       s níž už jsme navštívili velký kus Evropy. Procestovali jsme tak třeba celou jižní Itálii, kterou jsme si zamilovali. Mojí vysněnou destinací
       je ale jižní Španělsko a mimo Evropu Vietnam, o němž mluvím už pár let.</p>
      </div>
    </profile>
    </main>
    <div class="foot">
    <footing />
    </div>
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
<style scoped>
a {
  color:green;
  font-weight: bold;
}
p {
  font-size: 1.1em;
}

h2 {
  font-size: 1.5em;
  font-weight: bold;
}
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
