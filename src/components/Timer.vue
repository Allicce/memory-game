<template>
     <main id="clock">
          <template v-if="finished" >

          </template>
          <template v-else>
               <time :style="gradient" class="timer">
                    <div class="time_container" v-bind:class="{flicking : !isEndThreeSeconds}">
                         {{display}}
                    </div>
               </time>
          </template>
     </main>
</template>

<script>
import { DateTime, Duration } from 'luxon'

export default {
  name: 'Timer',
  data () {
    return {
      start: DateTime.local(),
      now: DateTime.local(),
      end: DateTime.local().plus({ seconds: 15 }),
      tick: null,
      timeout: ''
    }
  },
  watch: {
    now () {
      if (this.finished) {
        clearInterval(this.tick)
      }
    }
  },
  computed: {
    total () {
      return this.end.diff(this.start).toObject()
    },
    remaining () {
      return this.end.diff(this.now).toObject()
    },
    elapsed () {
      return this.now.diff(this.start).toObject()
    },
    percent () {
      return this.elapsed.milliseconds / this.total.milliseconds * 100
    },
    display () {
      return Duration.fromObject(this.remaining).toFormat('ss')
    },
    finished () {
      return this.now >= this.end
    },
    isEndThreeSeconds () {
      return this.end - this.now >= 3000
    },
    changeColor () {
      if (this.isEndThreeSeconds) {
        return '#42b983'
      } else {
        return '#D53738'
      }
    },
    gradient () {
      return {
        background: `radial-gradient(white 63%, transparent 61%), conic-gradient(${this.changeColor} 0% ${this.percent}%, transparent ${this.percent}% 100%)`
      }
    }
  },
  mounted () {
    this.tick = setInterval(() => {
      this.now = DateTime.local()
    }, 10)
    this.timeout = setTimeout(() => {
      this.$router.push('/gameScreen/usersResults')
    }, 15000)
  },
  destroyed () {
    console.log('clearTimeout')
    clearTimeout(this.timeout)
  }
}
</script>

<style scoped>
 @import url('https://fonts.googleapis.com/css?family=Orbitron');

 html, body, main {
      width: 10vw;
 }

 body {
      color: #D53738;
      font: 7vh 'Orbitron', sans-serif;
 }

 main {
      align-items: center;
      display: flex;
      justify-content: end;
 }

 time {
      border-radius: 50%;
      height: 10vh;
      width: 10vh;
 }

 .timer {
   display: flex;
   justify-content: center;
   align-items: center;
 }

 .time_container {
      font-size: 20px;
 }

 .flicking {
      -webkit-animation: flicker 2s infinite;
      color: #D53738;
 }

 @-webkit-keyframes flicker {
      0% {
           opacity: 1;
      }
      25% {
           opacity: 0;
      }
      50% {
           opacity: 1;
      }
      75% {
           opacity: 0;
      }
 }

</style>
