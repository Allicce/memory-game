<template>
  <div class="container">
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
import { mapState, mapActions } from 'vuex'
import _ from 'lodash'

export default {
  name: 'Picture',
  computed: {
    ...mapState([
      'allPicture',
      'watchPictures',
      'countItems',
      'actualLevel',
      'greenMonsterPicture',
      'blackMonsterPicture',
      'lilaMonsterPicture',
      'monsterArray'
    ])
  },
  methods: {
    ...mapActions([
      'addCountItem',
      'addMonsterArray',
      'getDefaultState'
    ]),
    createItems () {
      this.addCountItem()
    },
    createRandomPicture (list, breakPoint) {
      let index
      for (let i = 0; i < breakPoint; i++) {
        index = parseInt(Math.random() * list.length)
        this.watchPictures.push([list[index]])
      }
      let newArray = _.shuffle(this.watchPictures)
      this.watchPictures = newArray
    },
    randomPicture () {
      while (this.watchPictures.length > 0) {
        this.watchPictures.pop()
      }
      console.log('create random picture ' + this.countItems)
      if (this.actualLevel === 1) {
        this.createRandomPicture(this.greenMonsterPicture, this.countItems)
      } else if (this.actualLevel === 2 || this.actualLevel === 3) {
        this.changeMonsterArray()
        let index = parseInt(Math.random() * this.greenMonsterPicture.length)
        this.watchPictures.push([this.greenMonsterPicture[index]])
        index = parseInt(Math.random() * this.blackMonsterPicture.length)
        this.watchPictures.push([this.blackMonsterPicture[index]])
        this.createRandomPicture(this.monsterArray, this.countItems - 2)
      } else if (this.actualLevel === 5 || this.actualLevel === 4) {
        let index = parseInt(Math.random() * this.greenMonsterPicture.length)
        this.watchPictures.push([this.greenMonsterPicture[index]])
        index = parseInt(Math.random() * this.blackMonsterPicture.length)
        this.watchPictures.push([this.blackMonsterPicture[index]])
        index = parseInt(Math.random() * this.lilaMonsterPicture.length)
        this.watchPictures.push([this.lilaMonsterPicture[index]])
        this.createRandomPicture(this.allPicture, this.countItems - 3)
      }
      console.log(this.watchPictures)
    },
    changeMonsterArray () {
      this.addMonsterArray()
    }

  },
  created () {
    this.getDefaultState()
    this.createItems()
    this.randomPicture()
  }
}
</script>

<style scoped>
  .container {
    width: 90vw;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(2, minmax(100px, 140px));
    justify-content: center;
  }
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

    display: block;
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

  @media(min-width: 700px) {
    .container {
      width: 60vw;
      grid-template-columns: repeat(3, minmax(100px, 140px));
    }
  }

  @media(min-width: 1900px) {
    .container {
      width: 80vw;
      grid-template-columns: repeat(3, minmax(140px, 220px))
    }

    .item {
      height: 140px;
      width: 140px;
    }

    .container_item {
      min-width: 180px;
      min-height: 180px;
    }
  }

</style>
