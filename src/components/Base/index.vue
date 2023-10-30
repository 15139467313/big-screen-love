<template>
  <div
    class="assistance"
    style="margin-top: 20px; padding: 16px; height: 80%;position: relative;    display: flex;flex-wrap: wrap;
justify-content: space-around;
}"
  >
    <p style="margin-top: 60px;font-size: 30px;" v-if="this.l1 == 1">活动暂未开放</p>
    <el-carousel indicator-position="none" height="140px" style="width: 100%;height: 144px;" v-if="this.l1==0">
      <el-carousel-item
  
        v-for="(item, index) in assistances"
        :key="index"
        height="140px"
        style="height: 140px;"
      >
     
        <p
          style="
            height: 40px;
            width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
          "
        >
          {{ item.intro }}
        </p>
        <el-progress
          :percentage="Cdata[index]"
          :stroke-width="10"
          :text-color="customColor"
          :color="customColor"
          style="margin-top: 20px; margin-bottom: 10px"
        ></el-progress>
        <div class="target" style="margin-top: 25px;">
          <p>目标步数:{{ item.targetNum }}</p>
          <p>当前步数:{{ item.currentNum }}</p>
        </div>
      </el-carousel-item>
    </el-carousel>
    <div
      class="times"
      style="display: flex; justify-content: space-around;margin: 0 auto;position: absolute;bottom: 0px;"
    >
      <div class="numberofs" style="margin: 0 auto;">
        <p
          style="
            width: 102px;
            text-align: center;
            height: 17px;
            font-size: 16px;
            color: #d1fdff;
            font-family: Microsoft YaHei;
            line-height: 24px;
            font-weight: 400;
            margin-left: 14px;
          "
        >
          累计送出
        </p>
        <p
          slot="reference"
          style="
            width: 133px;
            height: 27px;
            font-size: 30px;
            color: #1ceffa;
            font-family: Arial;
            line-height: 24px;
            text-align: center;
            margin: 15px auto;
            overflow: hidden;
            text-overflow: ellipsis;
          "
        >
          {{ stepNums | num }}
        </p>
      </div>
      <div class="numberofs" style="text-align: center">
        <p
          style="
            width: 102px;
            text-align: center;
            height: 17px;
            font-size: 16px;
            color: #d1fdff;
            font-family: Microsoft YaHei;
            line-height: 24px;
            font-weight: 400;
            margin-left: 14px;
          "
        >
          参与人数
        </p>
        <el-popover
          placement="top-start"
          popper-class="my-popover"
          width="150"
          trigger="hover"
        >
          <p
            slot="reference"
            style="
              width: 133px;
              height: 27px;
              font-size: 30px;
              color: #1ceffa;
              font-family: Arial;
              line-height: 24px;
              text-align: center;
              margin: 15px auto;
              overflow: hidden;
              text-overflow: ellipsis;
            "
          >
            {{ peopleNums | num }}
          </p>
        </el-popover>
      </div>
    </div>
  </div>
</template>

<script>
import { assistance } from "../../api/api.js";
import * as echarts from "echarts";
export default {
  filters: {
    num: (val) => {
      val = "" + val; // 转换成字符串
      let int = val;
      int = int.split("").reverse().join(""); // 翻转整数
      let temp = ""; // 临时变量
      for (let i = 0; i < int.length; i++) {
        temp += int[i];
        if ((i + 1) % 3 === 0 && i !== int.length - 1) {
          temp += ","; // 每隔三个数字拼接一个逗号
        }
      }
      temp = temp.split("").reverse().join(""); // 加完逗号之后翻转
      return temp; // 返回
    },
  },
  data() {
    return {
      l1: null,
      peopleNums: "82",
      stepNums: "10",
      customColor: "#E0850E",
      thospeopleNums:null,
      assistances: [
        {
          intro: "累积步数达成目标，将一起为特殊情侣送出一个生日蛋糕。每日捐步，可获得爱心蛋糕积分 1分/天",
          targetNum: "220000",
          currentNum: "143710",
        },
      ],
    };
  },
  computed: {
    Cdata() {
      return this.assistances.map((item) => {
        return parseFloat(
          ((item.currentNum / item.targetNum) * 100).toFixed(2)
        );
      });
    },
  },
  mounted() {

    
      if(this.assistances.length == 0){
       
            this.l1=1
      }else{
        this.l1=0


        
      }

      if (this.stepNums != null) {
      
      } else {
        this.stepNums = 0;
      }
    

        this.peopleNums = 0;
      

  
    let main = echarts.init(this.$refs.main);
    var option = {
      grid: {
        height: "30%",
        top: 18,
        bottom: 5,
        left: 5,
        right: 50,
      },
      tooltip: {
        type: "axis",
      },
      title: {
        text: 45 + "%",
        right: 0,
        top: "middle",
        textStyle: {
          fontWeight: 500,
          fontSize: 16,
          color: "#E0850E",
        },
      },
      color: ["#74d1fd", "#eee"],
      xAxis: {
        show: false,
        type: "value",
        boundaryGap: [0, 0],
      },
      yAxis: [
        {
          type: "category",
          data: [""],
          axisLine: { show: false },
          axisTick: [
            {
              show: false,
            },
          ],
        },
      ],
      series: [
        {
          type: "bar",
          name: "已完成",
          stack: "总量",
          barMaxWidth: 10,
          label: {
            show: false,
            position: "inside",
            formatter: "{c}%",
          },
          itemStyle: {
            color: "#E0850E",
            barBorderRadius: [10, 10, 10, 10],
          },
          data: [45],
        },
        {
          type: "bar",
          name: "未完成",
          stack: "总量",
          barMaxWidth: 20,
          label: {
            show: false,
            color: "#aaa",
            position: "inside",
            formatter: "{c}%",
          },
          showBackground: true,
          backgroundStyle: {
            color: "#eee",
            barBorderRadius: [10, 10, 10, 10],
          },
          itemStyle: {
            color: "#FDE9D2",
            barBorderRadius: [0, 10, 10, 0],
          },
          silent: true,
          data: [55],
        },
      ],
    };

    main.setOption(option);

  },
  methods: {
    // 实习实训基地建设
  },
};
</script>

<style lang="scss" scoped>
#main {
  width: 100%;
  height: 60px;
  // border: 1px solid white;
  //   background-color: aliceblue;
}
.target {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
}
.el-progress {
  text-align: center;
}
::v-deep .el-progress-bar {
  width: 88% !important;
}
::v-deep .el-progress-bar .el-progress-bar__outer{
    height: 17px !important;
}
</style>
