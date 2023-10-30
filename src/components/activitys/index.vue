<template>
    <div style="margin-top: 20px;">
    <el-carousel indicator-position="none" height="170px" >
      <el-carousel-item v-for="item,index in activityList" :key="index" height="170px" style=" height: 170px; " >
        <div class="activity"  style="width: 100%;  display: flex;justify-content: space-between">
          <div class="trendsl" style="width: 100%;">
         <div class="img" style="width:55%;">
          <img :src="item.img" style="height: 100%;">
         </div>
        <div class="lovesopiless" style="width: 35%;">
          <P  style="width: 100%; white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">{{ item.name }}</P><br>
          <P  style="width: 100%; white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">活动时间:{{ item.startTime }}</P><br>
          <P style="width: 100%; white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">活动区域:{{ item.address }}</P>
          <P  style="width: 100%; white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">报名人数:{{ item.maxNum }}</P>
        </div>
      </div>
    
    </div>
      </el-carousel-item>
    </el-carousel>
    <div class="times" style="display: flex; justify-content: space-around;margin-top: 10px; " >
        <div class="numberof" >
          <p style="width: 102px; height: 17px;font-size: 16px;color: #D1FDFF;font-family: Microsoft YaHei; line-height: 24px; font-weight: 400;margin-left: 25px;">活动次数</p>
          <p style="width: 53px; height: 23px; font-size: 30px; color: #1CEFFA; line-height: 24px; text-align: center; margin: 15px auto;">{{ lists.timeNums }}</p>
        </div>
        <div class="numberof" style=" text-align: center;">
          <p style="width: 102px; height: 17px;font-size: 16px;color: #D1FDFF;font-family: Microsoft YaHei; line-height: 24px; font-weight: 400;margin-left: 14px;">参与人次</p>
        
            <p  slot="reference" style="width: 133px;  height: 27px; font-size: 30px; color: #1CEFFA; font-family: Arial; line-height: 24px;text-align: center; margin: 15px auto;  overflow: hidden; text-overflow: ellipsis;">{{ lists.peopleNums | num}}</p>
    
         
        </div>
      </div>
  </div>
    </template>
    
    <script>
    import {volunteers} from '../../api/api.js'
    export default {
      filters: {
     num: (val) => {
       val = '' + val // 转换成字符串
       let int = val
       int = int.split('').reverse().join('') // 翻转整数
       let temp = '' // 临时变量
       for (let i = 0; i < int.length; i++) {
         temp += int[i]
         if ((i + 1) % 3 === 0 && i !== int.length - 1) {
           temp += ',' // 每隔三个数字拼接一个逗号
         }
       }
       temp = temp.split('').reverse().join('') // 加完逗号之后翻转
       return temp // 返回
     }
   }
  ,
     
      data () {
          return {
            lists:{
            timeNums:0,
            peopleNums:0,
            },
            activityList:[
              {
              img:"https://czh-wp.oss-cn-hangzhou.aliyuncs.com/img/51miz-E1305777-21867535%20%281%29.png",
              name:'520爱情日',
              startTime:'2023-05-20',
              address:'百城区',
              maxNum:'2090人'
            },
            {
              img:"https://czh-wp.oss-cn-hangzhou.aliyuncs.com/img/51miz-E1305777-21867535%20%281%29.png",
              name:'结婚周年纪念日',
              startTime:'2023-05-20',
              address:'百城区',
              maxNum:'2090人'
            },
            {
              img:"https://czh-wp.oss-cn-hangzhou.aliyuncs.com/img/51miz-E1305854-21867689.png",
              name:'520爱情日',
              startTime:'2023-05-20',
              address:'百城区',
              maxNum:'5090人'
            },
            {
              img:"https://czh-wp.oss-cn-hangzhou.aliyuncs.com/img/51miz-E1305266-21866372.png",
              name:'520爱情日',
              startTime:'2023-05-20',
              address:'百城区',
              maxNum:'568人'
            },
            {
              img:"https://czh-wp.oss-cn-hangzhou.aliyuncs.com/img/51miz-E1305754-21867489.png",
              name:'七夕节',
              startTime:'2023-7-7',
              address:'百城区',
              maxNum:'2090人'
            },
          ]
          }
      },
      created(){

         
    },
    mounted() {
     
   
  
    },
    }
    </script>
    
    <style lang="scss" >
    .el-popover.my-popover{
      background-color: #090d29;
      border: #090d29;
    }
    .el-popover.my-popover {
    color: white;
    }
    .activity{
      width: 100%;
      height: 90%;
  
                      // white-space: nowrap;
      // background-color: #FFFFFF;
    }
    .trendsl{
        width: 100%;
        height: 70%;
      //   border: 1px solid white;
      // background-color: #FFFFFF;
        display: flex;    
        justify-content: space-around;
        .img{
          width: 37%;
          height: 158%;
          img{
            width: 100%;
            height: 100%;
       
          }
        }
        .lovesopiless{
          width: 58%;
          height: 158%;
              p{      
                  display: inline-block;
                  // border: 1px solid white;                                
                    
                      // white-space: nowrap;
                  
                      font-size: 14px;                
                      font-family: Microsoft YaHei;       
                      font-weight: 400;
                      color: #FFFFFF;
                      line-height: 32px;
              }
        }
    }
    </style>
    