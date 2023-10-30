<template>
  
  <el-carousel indicator-position="none"  >
    <el-carousel-item v-for="item,index in trends" :key="index" height="140px" >
  <div class="trends" style="margin-top: 20px; height: 80%;" >
   
     <div class="img" style="width: 55%;">
      <img :src="item.coverUrl" style="height: 80%; width: 100%;">
     </div>
    <div class="lovesopile" style="width: 40%;" >
      <p style=" height: 13%; width: 100%;overflow: hidden; ;text-overflow:ellipsis; display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;">{{ item.title }}</p>
      <p style=" height: 67%;width: 100%; overflow: hidden; ;text-overflow:ellipsis; display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:6;  font-size: 13px; line-height: 27px;" v-html="item.content "></p>

    </div>
 
  </div>
</el-carousel-item>
  </el-carousel>
</template>

<script>
import {trends} from '../../api/api.js'
export default {
  data () {
    return{
      trends:[{
        coverUrl:"https://czh-wp.oss-cn-hangzhou.aliyuncs.com/img/51miz-E1305745-21867471.png",
        title:"爱情治愈",
        content:"情不知所起，一往而深。誓言还在耳边，眼前已不见伊人。怎知我用一转身离开的你，竟要用一辈子来忘记。有人说，谁放了谁的手，谁比谁更难受。等到回看过往时才发现，原来缘起缘灭都是折磨。"
      }
   
      ]
    }
  },
  mounted(){
  //   trends().then((res)=>{
  // //  this.trends =res.data.data
  //   })
  }
  
}
</script>

<style lang="scss" scoped>
.trends{
    width: 100%;
    // border: 1px solid white;
    display: flex;    
    justify-content: space-around;
    .img{
      width: 80%;
      img{
        width: 100%;
      }
    }
    .lovesopile{
      width: 45%;
      margin-left: 10px;
      p{
        display: block;
        width: 100%;
        height: 87%;
          // border: 1px solid white;    
             
          overflow: hidden; //超出的文本隐藏
          text-overflow: ellipsis; //溢出用省略号显示
                    // white-space: nowrap;
          line-height: 29px;
          color: #FFFFFF;
          font-weight: 400;
          font-family: Microsoft YaHei;
      }
    }
}
</style>
