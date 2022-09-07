<template>
  <div id="app">
    <el-row>
      <el-col :span="24"
        ><div class="grid-content bg-purple-dark">
          <div class="header-title">嘎嘎的前端工具箱</div>
          <header-tab></header-tab></div
      ></el-col>
    </el-row>
    <div class="footer">
      <a
        class="footer-item"
        target="_blank"
        href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802040231"
        ><img
          src="https://p0.meituan.net/travelcube/d0289dc0a46fc5b15b3363ffa78cf6c719256.png"
        />京公网安备 11010802040231号</a
      >

      <a class="footer-item" target="_blank" href="https://beian.miit.gov.cn"
        >京ICP备2022025646号-1</a
      >
    </div>
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
.footer {
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.footer-item {
  font-size: 14px;
  display: block;
  text-decoration: none;
  color: #999;
  margin: 0 10px 10px 10px;
}
.footer-item img {
  position: absolute;
  margin-left: -20px;
  margin-top: 2px;
  width: 15px;
  height: 15px;
}
</style>
