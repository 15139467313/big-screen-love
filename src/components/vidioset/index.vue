<template>
  <div style="width: 100%; height: 100%; position: relative">
    <div class="msg-box" ref="msgBox">
      <span class="msg" ref="scrollMsg">
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
        preload
        style="width: 100%; height: 100%; margin: 0 auto"
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
      color: "yelow",
      liststyle: [],
      videoData: {
        video: "",
      },
    };
  },
  created() {
    this.bannerss();

    this.videoData =
      "https://czh-wp.oss-cn-hangzhou.aliyuncs.com/img/%E8%A7%85%E7%9F%A5%E7%BD%91_520%E5%A9%9A%E7%A4%BC%E8%A1%A8%E7%99%BD%E7%92%80%E7%92%A8%E7%83%9F%E8%8A%B1%E7%89%87%E5%A4%B4520%E7%89%87%E5%A4%B4_149794.mp4";
  },
  computed: {},
  mounted() {
    this.handleScrollMsg();
  },
  methods: {
    //横向播放通知公告
    bannerss() {
      this.msg =
        "你一定会遇到一个男孩子，把你捧在手心里，像日出日落一样陪着你  幸福是爱情完美的独特，泪流是错爱美丽的邂逅";
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
  height: 10%;

  /* background-color: #0B1A52; */
  overflow: hidden;
  position: relative;
  margin-bottom: 20px;
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
