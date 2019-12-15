<template>

  <div class="containter">
    <h1>Percentil: {{percentil}}</h1>
    <h2>Si lepší ako {{percentil}}% populácie</h2>
    <div class="chart">
      <chart-area></chart-area>
    </div>

    <div class="conainer_button">
      <Buttons name="Hraj znova" @click.native="goToPath('/gameScreen')"></Buttons>
    </div>
  </div>

</template>

<script>
import { mapState } from 'vuex'
import Buttons from '../components/Button.vue'
import ChartArea from '../components/Chart.vue'

export default {
  name: 'Percentil',
  components: {
    Buttons,
    ChartArea
  },
  data () {
    return {
      percentil: 1
    }
  },
  computed: {
    ...mapState([
      'actualLevel'
    ])
  },
  methods: {
    addPercentil () {
      switch (this.actualLevel) {
        case 1: {
          this.percentil = 1
          break
        }
        case 2: {
          this.percentil = 3
          break
        }
        case 3: {
          this.percentil = 20
          break
        }
        case 4: {
          this.percentil = 25
          break
        }
        case 5: {
          this.percentil = 30
          break
        }
        case 6: {
          this.percentil = 32
          break
        }
        case 7: {
          this.percentil = 35
          break
        }
        case 8: {
          this.percentil = 50
          break
        }
        case 9: {
          this.percentil = 55
          break
        }
        case 10: {
          this.percentil = 67
          break
        }
        default: {
          this.percentil = 87
        }
      }
    }
  },
  created () {
    this.addPercentil()
  }

}
</script>

<style scoped>

  .chart {
    margin: auto;
    background-color: white;
    width: 50vw;
  }

</style>
