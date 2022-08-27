<template>
  <el-tabs
    v-model="activeName"
    @tab-click="handleClick"
    type="border-card"
    class="tabs-all"
  >
    <el-tab-pane label="二维码" name="first" class="">
      <QRCode />
    </el-tab-pane>
    <el-tab-pane label="url编解码" name="second">
      <div class="new-plane">敬请期待</div>
    </el-tab-pane>
  </el-tabs>
</template>
<script>
import QRCode from './QRCode.vue';
export default {
  components: {
    QRCode,
  },
  data() {
    return {
      activeName: 'first',
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>

<style scoped>
.tabs-all {
  width: 900px;
  margin: auto;
  margin-top: 50px;
}
.new-plane {
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #aaa;
}
</style>
