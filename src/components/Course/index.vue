<template>
  <div class="box" id="cloud" style="margin-top: 40px; margin-left: 10px; display: flex;flex-wrap: wrap; " >
    <div class="power"  v-for="(item,index) in contributions" :key="index" style="display: flex;align-items: center;justify-content: space-around;margin-bottom:  55px; ">

     <div style="display: flex;align-items: center;width: 50%;">

        <div  style="width: 8px; height: 8px; border-radius: 50%; background-color: #2CACE4;margin-right: 7px;"></div>
            <span style="font-size: 18px;"> {{ item.ids }}</span>
        </div>
        
        <span  :class="list[index]" style="letter-spacing:5px;width: 50%;font-size: 20px;">{{ item.assistance }}</span>
        <!-- <div class="circular" style="vertical-align: middle; display: flex; justify-content: space-evenly;align-items: flex-end">
          

         <div class="characters" style="border: 1px solid ;">
          <span style="display: block;">{{ item.ids }}</span>
          <span  :class="list[index]" style="letter-spacing:5px">{{ item.assistance }}</span>

         </div>

        </div> -->
    </div>
  
  
  </div>
</template>

<script>
// import Chart from './chart.vue';
import {power} from '../../api/api.js'
export default {
  data () {
    return {
      list:[
        "ss1","ss2","ss3","ss4","ss5","ss6"
      ],
      src:"",
      contributions:[
            {
              
              src:require("../../assets/imgs/member.png"),
              assistance:'1000',
              ids:'个人会员' 
            },
            {
              src:require("../../assets/imgs/unit.png"),
              assistance:'206',
              ids:'政府机构'
            }
            ,
            {
              src:require("../../assets/imgs/volunteer.png"),
              assistance:'856',
              ids:'志愿者'
            }
            ,
            {
              src:require ("../../assets/imgs/welfare.png"),
              assistance:'1109',
              ids:'企业单位'
            }
            ,
            {
            
              assistance:'745',
              ids:'众之翼'
            }
            ,
            {
           
              assistance:'1569',
              ids:'社会组织'
            }
        ],
      
    }
  },
  created(){
  },
  mounted () {
  },
 
}
</script>

<style lang="scss" scoped>
.ss1{
  color: #016DEB;
}
.ss2{
  color: #FFBC30;
}
.ss3{
  color: #01EB90;
}
.ss4{
  color: #FF30AA;
}
.ss5{
  color: #C7EB01;
}
.ss6{
  color: #30FFF3;
}
.power{
  // border: 1px solid whitesmoke;
  width: 50%;
  // margin: 20px auto;

}
.circular{
    width: 100%;
  
  
    .characters span{
      line-height: 30px;
      font-size: 20px;
    }
    // background-color: antiquewhite;
    // height: 30px;
  .imagesop{
    width: 40%;
 
    img{
      width: 100%;
    }
  }
  }
  #cloud{
  background-image: url("../../../public/image/cloud.png");
  background-size: 50% 95%;
  background-repeat: no-repeat;
  background-position: center -5px;
}

</style>
