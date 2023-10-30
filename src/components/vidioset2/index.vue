<template>
  <div style="width: 100%; height: 100%; position: relative">
    <div class="msg-box" ref="msgBox">
      <span class="msg" ref="scrollMsg" :style="{ color: this.color }">
        <i
          class="iconfont icon-aixin"
          style="
            width: 50px;
            display: inline-block;
            height: 30px;
            text-align: center;
          "
        ></i>
        {{ msg }}</span
      >
    </div>

    <div style="width: 100%; height: 85%; text-align: center">
      <video
        ref="video"
        autoplay="autoplay"
        loop="loop"
        muted="true"
        preload
        style="width: 500px; height: 90%; margin: 0 auto"
        controls
        :src="videoData"
      ></video>
      <!-- <div class="img" style="position: absolute;top: 23%; left: 45%;" @click="start">
            <img src="../../../public/image/ok.png" alt="">
          </div> -->
    </div>
  </div>
</template>
<script>
import { loading } from "@jiaminghi/data-view";
import { video, banners } from "../../api/api.js";
export default {
  data() {
    return {
      msg: null,
      starts: 0,
      index: 0,
      color: "yellow",
      liststyle: [],
      videoData: {
        video: "",
      },
    };
  },
  created() {
    this.bannerss();
      this.videoData =
        "https://czh-wp.oss-cn-hangzhou.aliyuncs.com/img/%E8%A7%85%E7%9F%A5%E7%BD%91_%E6%B8%A9%E9%A6%A8%E5%A9%9A%E7%A4%BC%E4%B8%83%E5%A4%95%E7%88%B1%E6%83%85%E5%A9%9A%E5%BA%86%E7%94%B5%E5%AD%90%E7%9B%B8%E5%86%8C%E6%83%85%E4%BA%BA%E8%8A%82%E5%A9%9A%E7%A4%BC%E7%9B%B8%E5%86%8C_172514.mp4";
  },
  computed: {},
  mounted() {
    this.handleScrollMsg();
  },
  methods: {
    //横向播放通知公告
    bannerss() {

        this.msg =
          "在最美的夜里想你，在最深的呼吸中念你，在最惬意的时候感受你，在最失意的时候知道，这个世界有你就已经足够";
    },
    handleScrollMsg() {
      let speed = 30; //字体的整体滚动速度
      let box = this.$refs.msgBox;
      let msg = this.$refs.scrollMsg;

      let scroll = () => {
        // offsetLeft元素对其父元素左边缘的偏移量
        // offsetWidth 是元素的实际宽度，包括元素的 padding、border 和滚动条。
        if (msg.offsetLeft <= -msg.offsetWidth) {

          msg.style.left = box.offsetWidth + "px";
          if (this.index == this.liststyle.length - 1) {
            this.index = 0;
            this.bannerss();
          } else {
            this.index = this.index + 1;
            this.bannerss();
          }
        } else {
          msg.style.left = msg.offsetLeft - 1 + "px";
        }
      };

      let timer = setInterval(scroll, speed);
      //鼠标移动到通知内容上暂停
      msg.onmouseover = () => {
        clearInterval(timer);
      };
      //移开继续滚动
      msg.onmouseout = () => {
        timer = setInterval(scroll, speed);
      };
    },
    start() {
      if (this.starts == 0) {
        this.$refs.video.play();
        this.starts = 1;
      } else {
        this.$refs.video.pause();
        this.starts = 0;
      }
    },
  },
};
</script>
<style scoped>
.icon-aixin {
  color: red;
  font-size: 30px;
}
.msg-box {
  width: 100%;
  height: 15%;

  /* background-color: #0B1A52; */
  overflow: hidden;
  position: relative;
  margin-bottom: 20px;
  top: 15px;
  background-image: url("../../assets/imgs/backgroundImage.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.msg {
  margin: 10px auto;

  display: flex;
  align-items: center;
  font-family: Microsoft YaHei;
  font-size: 20px;
  position: absolute;
  line-height: 30px;
  /* font-size: 14px; */
  white-space: nowrap;
}
</style>
