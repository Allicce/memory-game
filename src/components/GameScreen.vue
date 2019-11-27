<template>
  <div>
    <Timer></Timer>
  </div>

</template>

<script>
    import Timer from '../views/Timer.vue'

    export default {
        name: "GameScreen",
        components: {
            'Timer': Timer
        }
    }
</script>

<style scoped>

</style>
