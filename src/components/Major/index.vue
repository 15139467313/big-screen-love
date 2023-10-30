<template>
    <div class="contribution" style="margin-top: 10px; height: 75%; overflow: hidden; text-overflow: ellipsis;padding: 16px;" ref="scrollItemBox">
      

        <div class="listspict" style="width: 100%;" ref="lopo11">

          <div class="love" style="height: 129px;" v-for="(item,index) in contribution" :key="index">
                    <div style="display: flex; justify-content: space-between;">
                        <p style="color: #2ED8FC;">{{ item.assistance }}</p>
                        <p>{{ dateYear }}</p>
                    </div>
                    <ul style="margin-top: 10px; display: flex; justify-content: space-around" >
                        <li  v-for="(items,indexs) in item.ids" :key="indexs" style="list-style: none;width: 44px; height: 60px; background: #E0850E; font-size: 46px; line-height: 60px; text-align: center; color: #FFFFFF;">
                           {{ items }}
                        </li>
                        <span style="line-height: 98px;">元</span>
                       
                    </ul>
            </div>
              <!-- <p>1111111111</p> -->
              <div style="display: flex; justify-content: space-between;">
                        <p style="color: #2ED8FC;">个人、企业累计捐物</p>
                        <p>{{ dateYear }}</p>
                </div>
                <ul style="margin-top: 10px; display: flex; justify-content: space-around" >
                        <li  v-for="(items,indexs) in idss" :key="indexs" style="list-style: none;width: 44px; height: 60px; background: #E0850E; font-size: 46px; line-height: 60px; text-align: center; color: #FFFFFF;">
                        {{ items }}
                        </li>
                        <span style="line-height: 98px;">件</span>
                       
                    </ul>

        </div>

    </div>
</template>

<script>
import { formatTime } from '../../utils/index.js'
import {contribution} from '../../api/api.js'
export default {
  props:['dateYear'],
   data() {
      return {
        i:0,
        idss:0,
        contribution:[
            {
              assistance:'爱心订单累计助力',
              ids:'' 
            }
            ,
            {
              assistance:'个人、企业累计助力',
              ids:''  
            }
            ,
            // {
            //   // assistance:'个人、企业累计捐物',
            //   // ids:''  
            // }
        ],
        timer:null,
        lists:['1','9','1','7','5','1'],
        listerr:[]
      }
   },
   created(){
    // this.idss=this.idss.toString().split('')
    this.timer = window.setInterval(() => {
        setTimeout(this.tops());
      }, 5000);
    contribution().then((res)=>{
      function PrefixZero(num, n) {
    return (Array(n).join(0) + num).slice(-n);
      }
     
        // res.data.data.map(function(item,index){
        //   res.data.data.loveOrderNums=
        // })


      if(res.data.data.loveOrderNums !=null){
        // parseFloat((item.price / 100)
        // res.data.data.loveOrderNums
        this.contribution[0].ids =res.data.data.loveOrderNums
      }else{
        this.contribution[0].ids=0;
      }
      if(res.data.data.peopleNums !=null){
        this.contribution[1].ids = parseFloat((res.data.data.peopleNums / 100).toFixed(0))
      }else{
        this.contribution[1].ids=0;
      }
      if(res.data.data.benevoLenceNums !=null){
        this.idss = res.data.data.benevoLenceNums
      }
      
      // this.contribution[2].ids =res.data.data.benevoLenceNums
      this.contribution.map(item =>{
        item.ids =PrefixZero(item.ids,6).toString().split('')
      })

      this.idss=PrefixZero(this.idss,6).toString().split('')
    })
   },
   mounted(){
 
   },
   computed:{
   },
   methods:{
    tops(){
        this.i++
      
        if(this.i > this.contribution.length -1){
            this.i =0
            
        }
        this.$refs.lopo11.style.marginTop = -129 * this.i + "px"

        // this.$refs.lp1.style.color = "red"
    },

   
       

   },
}
</script>
<style lang=scoped>



</style>
