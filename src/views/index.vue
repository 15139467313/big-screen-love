<template>
  <div id="index" ref="appRef">
    <div id="particles-js1"></div>
    <div class="bg">
      <dv-loading v-if="loading">Loading...</dv-loading>
      <div v-else class="host-body">
       <div class="boxlist">
        <div class="d-flex jc-center top">
          <div class="d-flex top-right">
            <!-- <img src="../assets/imgs/timeIcon.png" alt=""> -->
            <span class="date">{{ dateYear }} {{ nowWeek }} {{ dateDay }} </span>
          </div>
        </div>
       </div>
        <div class="body-box">
          <!-- 第三行数据 -->
          <!-- class="item" -->
          <div style="flex: 0 1 30%; margin-left: -25px;" class="item" >

            <div style="width: 100%; height: 310px; "  class="itemslist">
              <div :dur="10" style="width: 90%; height: 300px;  margin: 5px auto;" >
              <div class="itemTitle" style="padding-top: 19px;"><img src="../assets/imgs/itemIcon.png" alt="">爱情力量</div>
              <Course />

            </div>
           
            </div>

            <div style="width: 100%; height: 350px; "  class="itemslist">
              <div :dur="10" style="width: 90%; height: 310px;  margin: 0px auto;" >
              <vidioset1 />
            </div>
            </div>

            <div style="width: 100%; height: 310px; "  class="itemslist">
              <div :dur="10" style="width: 90%; height: 300px;  margin: 5px auto;" >
              <div class="itemTitle" style="padding-top: 19px;"><img src="../assets/imgs/itemIcon.png" alt="">爱情助力</div>
              <Base />
            </div>
          </div>
          </div>
          
          <div style="flex: 0 1 40% ; margin-left: 30px;" class="item" >
          
            <div style="height:500px; margin-top: 15px;">
                  <vidioset />
            </div>

            <div style=" height: 440px;"  class="itemslist">
              <div :dur="10" style="width: 90%; height: 300px;  margin: 5px auto;" >
              <div class="itemTitle" style="padding-top: 19px;"><img src="../assets/imgs/itemIcon.png" alt="">爱情之星</div>
              <integral />
              </div>
              </div>
            
          </div>
          <div style="flex: 0 1 28%;" class="item"  >
            <div style="width: 106%; height: 310px; margin-left: 25px;"  class="itemslist">
              <div :dur="10" style="width: 90%; height: 300px;  margin: 5px auto;" >
              <div class="itemTitle" style="padding-top: 19px;"><img src="../assets/imgs/itemIcon.png" alt="">爱情动态</div>
              <Education />
            </div>
            </div>

             <div style="width: 106%; height: 310px; margin-left: 25px;"  class="itemslist">
              <div :dur="10" style="width: 90%; height: 300px;  margin: 5px auto;" >
                <vidioset2/>
            </div>
            </div>


            <div style="width: 106%; height: 310px; margin-left: 25px;"  class="itemslist">
              <div :dur="10" style="width: 90%; height: 300px;  margin: 5px auto;" >
              <div class="itemTitle" style="padding-top: 19px;"><img src="../assets/imgs/itemIcon.png" alt="">爱情志愿服务</div>
              <activitys  />
            </div>
        </div>
          </div>
         
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {welfares} from '../api/api.js'
import drawMixin from "../utils/drawMixin";
import { formatTime } from '../utils/index.js'
import Course from "@/components/Course";
import Base from "@/components/Base";
import Major from "@/components/Major";
import integral from "@/components/integral"
import Education from "@/components/Education";
import activity from "@/components/activity"
import activitys from "@/components/activitys"
import vidioset from "@/components/vidioset"
import vidioset1 from "@/components/vidioset1"
import vidioset2 from "@/components/vidioset2"
import particles from 'particles.js'
// import {} from ''
export default {
  mixins: [ drawMixin ],
  data() {
    return {
      list:[
       
      ],
      timing: null,
      loading: false,
      dateDay: null,
      dateYear: null,
      nowWeek: null,
    }
  },
  components: {
    Course,
    Base,
    Major,
    Education,
    activity,
    vidioset,
    vidioset1,
    vidioset2,
    integral,
    activitys
  },
  created(){
  
  },
  mounted(){
    
    this.timeFn()
   },
   computed:{
   },
   methods:{
    timeFn() {
      let myDate = new Date()  
		let wk = myDate.getDay()  
    let weeks = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
		let week = weeks[wk]  
    this.nowWeek = week
      this.timing = setInterval(() => {
        this.dateDay = formatTime(new Date(), 'HH: mm: ss')
        this.dateYear = formatTime(new Date(), 'yyyy-MM-dd')
        // this.dateWeek = this.weekday[new Date().getDay()]
      }, 1000)
    },
   },
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/index';
#particles-js1{
  position: absolute;
 
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  margin-left: auto;
  margin-right: auto;
}
.itemslist{
  background-image: url("../../src/assets/imgs/矩形 6 拷贝.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;

}
.itemslist .itemTitle{
  padding-top:10px ;

  
}

</style>
