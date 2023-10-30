<template>
  <div style="margin-top: 20px; height: 100%">
    <div style="width: 100%; height: 20%">
      <ul style="display: flex; justify-content: center">
        <li
          style="
            width: 85px;
            height: 58px;
            text-align: center;
            position: relative;
          "
          v-for="(items, index) in box"
          :key="index"
          :class="lpo[index]"
        >
          <img
            :src="items.sysUser.avatar"
            alt=""
            style="width: 60%; height: 85%; border-radius: 50%"
          />
          <p style="color: aliceblue">{{ items.sysUser.nickName }}</p>
          <p
            style="
              width: 20px;
              height: 20px;
              border-radius: 50%;
              position: absolute;
              top: 30px;
              left: 61px;
            "
            :class="classlist[index]"
          >
            {{ boxlistpo[index] }}
          </p>
        </li>
      </ul>
    </div>
    <div
      class="a1"
      style="
        width: 100%;
        margin-top: 42px;
        display: flex;
        justify-content: space-between;
      "
    >
      <ul style="width: 45%">
        <li
          style="
            width: 100%;
            height: 52px;
            text-align: center;
            display: flex;
            justify-content: space-around;
            align-items: center;
          "
          v-for="(item, index) in listpit"
          :key="index"
        >
          <p
            style="
              width: 25%;
              height: 100%;
              line-height: 53px;
              font-size: 31px;
              color: rgb(224, 133, 14);
            "
          >
            {{ index + 4 }}
          </p>
          <div
            style="
              height: 84%;
              width: 50%;
              display: flex;
              align-items: center;
              justify-content: space-around;
            "
          >
            <img
              :src="item.sysUser.avatar"
              alt=""
              style="border-radius: 50%; width: 30%; height: 100%"
            />
            <span
              style="
                color: aliceblue;
                white-space: nowrap;
                width: 50%;
                overflow: hidden;
                text-overflow: ellipsis;
              "
              >{{ item.sysUser.nickName }}</span
            >
          </div>
          <p style="width: 25%">{{ item.value }}</p>
        </li>
      </ul>
      <ul style="width: 45%">
        <li
          style="
            width: 100%;
            height: 52px;
            text-align: center;
            display: flex;
            justify-content: space-around;
            align-items: center;
          "
          v-for="(item, index) in pointslist"
          :key="index"
        >
          <p
            style="
              width: 25%;
              height: 100%;
              line-height: 53px;
              font-size: 31px;
              color: rgb(224, 133, 14);
            "
          >
            {{ index + 8 }}
          </p>
          <div
            style="
              height: 84%;
              width: 50%;
              display: flex;
              align-items: center;
              justify-content: space-around;
            "
          >
            <img
              :src="item.sysUser.avatar"
              alt=""
              style="border-radius: 50%; width: 30%; height: 100%"
            />
            <span
              style="
                color: aliceblue;
                white-space: nowrap;
                width: 50%;
                overflow: hidden;
                text-overflow: ellipsis;
              "
              >{{ item.sysUser.nickName }}</span
            >
          </div>
          <p style="width: 25%">{{ item.value }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { standings } from "../../api/api.js";
export default {
  data() {
    return {
      listpit: [],
      box: [],
      boxlistpo: ["2", "1", "3"],
      classlist: ["Chart2", "Chart1", "Chart3"],
      lpo: ["sss1", "sss2", "sss3"],
      pointslist: [],
    };
  },
  created() {
    standings().then((res) => {
      res.data.data.sort((a, b) => {
        return b.value - a.value;
      });

      // this.box =res.data.data.slice(0,3)
      this.box[0] = res.data.data[1];
      this.box[1] = res.data.data[0];
      this.box[2] = res.data.data[2];
      this.listpit = res.data.data.slice(3, 7);
      this.pointslist = res.data.data.slice(7, 11);
    });
  },
  computed: {},
  methods: {},
};
</script>
<style>
.Chart1 {
  background-color: #fead04 !important;
  z-index: 11111111111;
}
.Chart2 {
  background-color: #aaaaaa !important;
  z-index: 11111111111;
}
.Chart3 {
  background-color: #f6794d;
  z-index: 11111111111;
}

.sss1 {
  margin-top: 20px;
  margin-right: 20px;
}
.sss2 {
  margin: 0px;
}
.sss3 {
  margin-top: 20px;
  margin-left: 20px;
}
</style>
