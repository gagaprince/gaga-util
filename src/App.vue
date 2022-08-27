<template>
  <div id="app">
    <el-row>
      <el-col :span="24"
        ><div class="grid-content bg-purple-dark">
          <div class="header-title">嘎嘎的前端工具箱</div>
          <header-tab></header-tab></div
      ></el-col>
    </el-row>
  </div>
</template>

<script>
import HeaderTab from './components/HeaderTab.vue';
export default {
  name: 'app',
  components: {
    HeaderTab,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
body {
  background: #f5f5f5;
}
.header-title {
  width: 100%;
  color: #666;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  margin-top: 20px;
}
</style>
