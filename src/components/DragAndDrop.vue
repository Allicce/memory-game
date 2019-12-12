<template>
  <div class="container">
    <div v-for="(list, i) in lists" :key="i">
      <drop class="drop list" @drop="handleDrop(list, ...arguments)">
        <drag v-for="(item, index) in list"
              class="drag"
              :key="index"
              :class="{ [item]: true }"
              :transfer-data="{ item: item, list: list, example: 'lists' }">
        </drag>
      </drop>
    </div>
    <div v-for="(list, i) in userResults" :key="i">
      <drop class="drop list" @drop="handleDrop(list, ...arguments)">
        <drag v-for="(item, index) in list"
              class="drag"
              :key="index"
              :class="{ [item]: true }"
              :transfer-data="{ item: item, list: list, example: 'lists' }">
        </drag>
      </drop>

    </div>
  </div>

</template>

<script>
import { Drag, Drop } from 'vue-drag-drop'
import { mapState } from 'vuex'

import _ from 'lodash'

export default {
  components: { Drag, Drop },
  data () {
    return {
      lists: [],
      list: [],
      shuffledArray: []
    }
  },
  computed: {
    ...mapState([
      'watchPictures',
      'allPicture',
      'userResults'
    ])

  },
  methods: {
    handleDrop (toList, data) {
      const fromList = data.list
      if (fromList) {
        toList.push(data.item)
        fromList.splice(fromList.indexOf(data.item), 1)
        toList.sort((a, b) => a > b)
      }
    },
    getRandomList () {
      for (let i = 0; i < this.watchPictures.length; i++) {
        this.list.push(this.watchPictures[i][0])
      }
      for (let i = 0; i < 6; i++) {
        let index = parseInt(Math.random() * 6)
        this.list.push(this.allPicture[index])
      }
      this.shuffledArray = _.shuffle(this.list)
      this.lists.push(this.shuffledArray)
    }
  },
  created () {
    this.getRandomList()
  }

}
</script>

<style scoped>

  .drag, .drop {
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

  .drag {
    color: #fff;
    cursor: move;
    background: whitesmoke;
    border-right: 2px solid #666;
    border-bottom: 2px solid #666;
  }

  .drop {
    border-top: 2px solid black;
    border-left: 2px solid black;
  }

  .drag {
    display: inline-block;
    background-size: 80%;
    background-position: center;
    background-repeat: no-repeat;
  }

  .drag.A { background-image: url("../../public/Charac_F-F2-idle_0.png") }
  .drag.B { background-image: url("../../public/Charac_F-F1-idle_0.png") }
  .drag.C { background-image: url("../../public/Charac_F-F03-Idle_0.png") }
  .drag.D { background-image: url("../../public/Charac_S-F2-Idle_0.png") }
  .drag.E { background-image: url("../../public/Charac_S-F1-Idle_5.png") }
  .drag.F { background-image: url("../../public/Charac_S-F03-Idle_5.png") }
  .drag.G { background-image: url("../../public/Charac_S-F1-Idle_5_left.png") }
  .drag.H { background-image: url("../../public/Charac_S-F2-Idle_0_left.png") }
  .drag.I { background-image: url("../../public/Charac_S-F03-Idle_5_left.png") }
  .drag.J { background-image: url("../../public/Charac_F-F1-idle_0_foot.png") }
  .drag.K { background-image: url("../../public/Charac_F-F2-idle_0_foot.png") }
  .drag.L { background-image: url("../../public/Charac_F-F03-Idle_0_foot.png") }

  .drop {
    display: inline-block;
    vertical-align: top;
    padding: 15px;
    margin-bottom: 20px;
    width: auto;
    height: auto;
  }

  .list {
    min-width: 100px;
    min-height: 100px;
    background-color: #041F1E;
  }

</style>
