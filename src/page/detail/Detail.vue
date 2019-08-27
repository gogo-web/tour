<template>
  <div>
    <detail-header></detail-header>
		<detail-swiper :swiperList="swiperList"></detail-swiper>
    <router-view :galaryList="galaryList" :imgList="imgList">
    </router-view>
  </div>
</template>

<script>
import axios from 'axios'
import detailHeader from './components/detailHeader'
import detailSwiper from './components/detailSwiper'
export default {
  name: 'Detail',
  data(){
    return{
      swiperList:[],
      galaryList:[],
      imgList:[],
    }
  },
  components:{
    detailHeader,
		detailSwiper,
  },
  methods:{
    a(){
      axios.get("/api/detail.json?id="+this.$route.params.id).then(this.b)
    },
    b(res){
      //console.log(res)
      res = res.data
      if(res.data){
        const data = res.data
        this.swiperList = data.swiperList
        this.galaryList = data.galaryList
        this.imgList = data.imgList
      }
    },
  },
  mounted(){
    this.a()
  },
}
</script>

<style lang="stylus" scoped>
</style>
