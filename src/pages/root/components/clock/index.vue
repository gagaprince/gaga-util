<template>
  <div>
    <canvas id="clockCanvas"></canvas>
  </div>
</template>

<script>
import Clock from "./clock";
export default {
  mounted() {
    Clock.init("clockCanvas");
  },
};
</script>

<style scoped lang="scss">
canvas {
  width: 300px;
  height: 225px;
}
</style>
