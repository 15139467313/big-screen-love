<template>
  <div :id="id" :class="className" :style="{ height: height, width: width }" />
</template>

<script>
import tdTheme from './theme.json' // 引入默认主题
import '../map/fujian.js'

export default {
  name: 'echart',
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    id: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '2.5rem'
    },
    options: {
      type: Object,
      default: ()=>({})
    }
  },
  data () {
    return {
      chart: null
    }
  },
  watch: {
    options: {
      handler (options) {
        // 设置true清空echart缓存
        this.chart.setOption(options, true)
      },
      deep: true
    }
  },
  mounted () {
    this.$echarts.registerTheme('tdTheme', tdTheme); // 覆盖默认主题
    this.initChart();
  },
  beforeDestroy () {
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart () {
      // 初始化echart
      this.chart = this.$echarts.init(this.$el, 'tdTheme')
      this.chart.setOption(this.options, true)


      let index = 0; //播放所在下标
      let that = this;

      setInterval(function() {
        that.chart?.dispatchAction({
          type: 'showTip',
          seriesIndex: 0,
          dataIndex: index,
        });
        that.chart?.dispatchAction({
            type: 'highlight',
            seriesIndex: 0,
            dataIndex: index
        });
        that.chart?.dispatchAction({
            type: 'downplay',
            seriesIndex: 0,
            dataIndex: index == 0 ? that.options.series[0].data.length-1 : index - 1
        });
        index++;
        if(index >= that.options.series[0].data.length) {
          index = 0;
        }
        if(that.options.dataZoom){
          if (that.options.dataZoom[0].endValue == that.options.series[0].data.length) {
            that.options.dataZoom[0].endValue = 5;
            that.options.dataZoom[0].startValue = 0;
          } else {
            that.options.dataZoom[0].endValue = that.options.dataZoom[0].endValue + 1;
            that.options.dataZoom[0].startValue = that.options.dataZoom[0].startValue + 1;
          }
        }
      }, 5000);
    }
  }
}
</script>

<style>
</style>
