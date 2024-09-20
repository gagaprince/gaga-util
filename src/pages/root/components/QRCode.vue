<template>
  <el-row type="flex" justify="space-around" class="row">
    <el-col :span="12">
      <div class="qr-content">
        <el-input
          v-model="qrContent"
          class="qr-input"
          type="textarea"
          :rows="8"
          placeholder="请输入内容"
        >
        </el-input>
        <el-button type="success" class="create-btn" @click="createQRCode"
          >创建</el-button
        >
      </div>
    </el-col>
    <el-col :span="8">
      <div class="qr-output">
        <VueQrcode
          v-if="!showImgHolder"
          class="qrcode-output-content"
          :value="qrContentEntrue"
          :qr-options="{
            typeNumber: '0',
            mode: 'Byte',
            errorCorrectionLevel: 'Q',
          }"
          :image-options="{
            hideBackgroundDots: true,
            imageSize: 0.4,
            margin: 2,
          }"
          :dots-options="{ type: 'square', color: '#05004d' }"
          :corners-square-options="{ type: 'square', color: '#0e013c' }"
        />
        <img
          v-if="showImgHolder"
          class="img-holder"
          src="https://qr.xnxxxk.cn/create/img/wsc.4fc7ba79.png"
          alt=""
        />
      </div>
    </el-col>
  </el-row>
</template>

<script>
import VueQrcode from "qrcode-vue3";
export default {
  components: {
    VueQrcode,
  },
  data() {
    return {
      qrContent: "",
      showImgHolder: true,
      qrContentEntrue: "",
    };
  },
  methods: {
    createQRCode() {
      console.log(this.qrContent);
      if (this.qrContent) {
        this.showImgHolder = false;
        this.qrContentEntrue = this.qrContent;
      } else {
        this.showImgHolder = true;
        this.qrContentEntrue = "";
      }
      if (!this.showImgHolder) {
        this.showImgHolder = true;
        this.$nextTick(() => {
          this.showImgHolder = false;
        });
      }
    },
  },
};
</script>

<style scoped lang="scss">
.row {
  width: 900px;
  margin: auto;
}
.qr-input {
  margin-top: 30px;
}
.qr-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.create-btn {
  width: 200px;
  margin: 30px 0;
}
.qr-output {
  display: flex;
  justify-content: center;
  align-items: center;
  .img-holder {
    margin-top: 40px;
  }
  .qrcode-output-content {
    height: 250px;
    width: 250px;
  }
}
</style>
