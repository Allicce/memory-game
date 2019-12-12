<template>
  <div>
    <div v-for="(list, index) in watchPictures" :key="index">
      <div class="container_item">
        <div v-for="item in list"
             :key="item"
             class ="item"
             :class="{ [item]: true }">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Picture',
  computed: {
    ...mapState([
      'allPicture',
      'watchPictures'
    ])
  },
  methods: {
    randomPicture () {
      for (let i = 0; i < 6; i++) {
        let index = parseInt(Math.random() * 6)
        this.watchPictures.push([this.allPicture[index]])
      }
    }

  },
  created () {
    this.randomPicture()
  }
}
</script>

<style scoped>
  .item, .container_item {
    box-sizing: border-box;
    display: inline-block;
    border-radius: 10px;
    width: 100px;
    height: 100px;
    background: #ccc;
    vertical-align: middle;
    margin-right: 20px;
    position: relative;
    padding: 5px;
    padding-top: 35px;
    text-align: center;
    margin: 3px;
  }

  .container_item {
    display: inline-block;
    vertical-align: top;
    padding: 15px;
    margin-bottom: 20px;
    width: auto;
    height: auto;
    min-width: 100px;
    min-height: 100px;
    background-color: #041F1E;
  }

  .item {
    color: #fff;
    cursor: move;
    background: whitesmoke;
    border-right: 2px solid #666;
    border-bottom: 2px solid #666;

    display: inline-block;
    background-size: 80%;
    background-position: center;
    background-repeat: no-repeat;
  }

  .item.A { background-image: url("../../public/Charac_F-F2-idle_0.png") }
  .item.B { background-image: url("../../public/Charac_F-F1-idle_0.png") }
  .item.C { background-image: url("../../public/Charac_F-F03-Idle_0.png") }
  .item.D { background-image: url("../../public/Charac_S-F2-Idle_0.png") }
  .item.E { background-image: url("../../public/Charac_S-F1-Idle_5.png") }
  .item.F { background-image: url("../../public/Charac_S-F03-Idle_5.png") }
  .item.G { background-image: url("../../public/Charac_S-F1-Idle_5_left.png") }
  .item.H { background-image: url("../../public/Charac_S-F2-Idle_0_left.png") }
  .item.I { background-image: url("../../public/Charac_S-F03-Idle_5_left.png") }
  .item.J { background-image: url("../../public/Charac_F-F1-idle_0_foot.png") }
  .item.K { background-image: url("../../public/Charac_F-F2-idle_0_foot.png") }
  .item.L { background-image: url("../../public/Charac_F-F03-Idle_0_foot.png") }

</style>
