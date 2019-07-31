<template>
  <div class="guess">
    <div class="guess-desc" :class="[guessDescChange]">
      <div>猜你喜欢</div>
    </div>
    <router-link tag="div" class="guess-content" v-for="item of guessList" :key="item.id" :to='"/detail/"+item.id'>
      <div class="guess-content-img">
        <img :src="item.imgUrl">
        <div>{{item.rank}}</div>
      </div>
      <div class="guess-content-desc">
        {{item.desc}}
      </div>
      <div class="guess-content-prise">
        <div class="guess-content-prise-left">
          酒店距景点{{item.distance}}km
        </div>
        <div class="guess-content-prise-right">
          <span>¥</span>{{item.prise}}<span>起</span>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name:'homeGuess',
  props:{
    guessList:Array
  },
  data(){
    return {
      guessDescChange:'',
      /*
      guessList:[
        {
          id:'1',
          imgUrl:'https://pic3.40017.cn/zzy/rimage/2015/03/17/11/yYZqZD_420x228_00.jpg',
          rank:'98%满意度',
          desc:'【网红亲子酒店】住昆山托尼洛·兰博基尼酒店，自选自助晚餐/下午茶/蒙特利亲子乐园/水世界',
          distance:'15.25',
          prise:'638',
        },
        {
          id:'2',
          imgUrl:'https://pic5.40017.cn/02/000/62/15/rBLkCVoFWqCAYeTUAAE0n_LOm-w049_420x228_00.jpg',
          rank:'97%满意度',
          desc:'住上海客莱福诺富特酒店，自选游上海迪士尼乐园/野生动物园/海昌海洋公园',
          distance:'36.24',
          prise:'1800',
        },
        {
          id:'3',
          imgUrl:'https://pic4.40017.cn/zzy/rimage/2016/09/18/15/aMo1AI_420x228_00.jpg',
          rank:'99%满意度',
          desc:'入住句容余坤开元大酒店+双人自助早餐，自选伏热花海/宝华山/海鲜自助晚餐/一价全包',
          distance:'16.05',
          prise:'418',
        },
        {
          id:'4',
          imgUrl:'https://pic4.40017.cn/zzy/rimage/2016/09/23/20/eyUnpM_420x228_00.jpg',
          rank:'97%满意度',
          desc:'住合肥万达嘉华酒店1晚，自选万达水乐园/万达主题乐园',
          distance:'0.95',
          prise:'610',
        },
        {
          id:'5',
          imgUrl:'https://pic4.40017.cn/scenery/destination/2016/09/23/17/sXr3J7_420x228_00.jpg',
          rank:'97%满意度',
          desc:'住合肥万达美居酒店，自选万达水乐园/万达主题乐园，酒店房间自带阳台【春游江淮】',
          distance:'0',
          prise:'556',
        },
        {
          id:'6',
          imgUrl:'https://pic5.40017.cn/02/001/72/b6/rBLkCVoNSf2AU0bOAAL8fEh6q0g447_420x228_00.jpg',
          rank:'99%满意度',
          desc:'住合肥丰大国际大酒店，自选合肥万达主题乐园/合肥万达水乐园，非常方便',
          distance:'11.69',
          prise:'738',
        },
        {
          id:'7',
          imgUrl:'https://pic3.40017.cn/zzy/rimage/2015/03/17/11/BbujZG_420x228_00.jpg',
          rank:'92%满意度',
          desc:'住合肥金孔雀温泉度假村，游玩金孔雀温泉度假村温泉',
          distance:'0',
          prise:'387',
        },
        {
          id:'8',
          imgUrl:'https://pic5.40017.cn/02/001/72/b6/rBLkCVoNSfWAKi8dAAMR_0HVzNk908_420x228_00.JPG',
          rank:'100%满意度',
          desc:'住合肥滨湖云谷路亚朵酒店，自选合肥万达水乐园/合肥万达主题乐园',
          distance:'2.23',
          prise:'840',
        },
        {
          id:'9',
          imgUrl:'https://pic3.40017.cn/scenery/destination/2015/04/18/22/nN4I0C_420x228_00.jpg',
          rank:'新品上线 暂无点评',
          desc:'住合肥花都CEO商务酒店(政务区店)，游玩宝贝地球村，度亲子时光',
          distance:'0',
          prise:'347',
        },
        {
          id:'10',
          imgUrl:'https://pic4.40017.cn/zzy/rimage/2016/07/21/13/C2V18d_420x228_00.jpg',
          rank:'新品上线 暂无点评',
          desc:'住合肥中辰智选假日酒店，自选宝贝地球村',
          distance:'3.34',
          prise:'469',
        },
        {
          id:'11',
          imgUrl:'https://pic5.40017.cn/02/000/7e/21/rBLkCVtiqa-AYg17AAQ0Y_YCV4M051_420x228_00.jpg',
          rank:'新品上线 暂无点评',
          desc:'住合肥瑞能CEO国际酒店，游玩合肥万达主题乐园，酒店位于宁国路附近',
          distance:'15.61',
          prise:'794',
        },
        {
          id:'12',
          imgUrl:'https://pic5.40017.cn/01/001/61/cb/rBANC1m2_GyAIsXcAADT6HWYDnU837_420x228_00.jpg',
          rank:'新品上线 暂无点评',
          desc:'住合肥绿地福朋喜来登酒店，游宝贝地球村，开心亲子周末时光',
          distance:'0',
          prise:'851',
        },
        {
          id:'13',
          imgUrl:'https://pic3.40017.cn/zzy/rimage/2015/03/20/09/Sxblfp_420x228_00.jpg',
          rank:'97%满意度',
          desc:'住芜湖方特酒店，酒店近方特234期景区，自选游玩芜湖方特梦幻王国/欢乐世界/东方神话/水上乐园等',
          distance:'2.23',
          prise:'264',
        },
        {
          id:'14',
          imgUrl:'https://pic3.40017.cn/zzy/rimage/2015/06/05/19/UJsInk_420x228_00.jpg',
          rank:'98%满意度',
          desc:'住途居露营地(黄山店)，自选黄山/安徽宏村/翡翠谷等景区畅玩，醉美营地房车【非凡房车】',
          distance:'8.9',
          prise:'500',
        },
        {
          id:'15',
          imgUrl:'https://pic4.40017.cn/scenery/destination/2017/03/07/16/7cR1b1_420x228_00.jpg',
          rank:'98%满意度',
          desc:'住景区酒店马仁山庄，游马仁奇峰森林公园，体验玻璃栈道、玻璃桥的惊险刺激【夏游江淮】',
          distance:'0',
          prise:'219',
        },
        {
          id:'16',
          imgUrl:'https://pic3.40017.cn/zzy/rimage/2015/06/23/15/28oGd9_420x228_00.jpg',
          rank:'99%满意度',
          desc:'住途居芜湖龙山露营地1晚，自选游玩响水涧、芜湖方特、马仁奇峰【非凡房车】【夏游江淮】',
          distance:'9.65',
          prise:'424',
        },
        {
          id:'17',
          imgUrl:'https://pic4.40017.cn/zzy/rimage/2016/05/06/16/G3S3Dk_420x228_00.jpg',
          rank:'97%满意度',
          desc:'住黄山轩辕国际大酒店，自选黄山风景区/黄山太平湖/黄山虎林园等【春游江淮】',
          distance:'4.85',
          prise:'460',
        },
      ],
      */
    }
  },
  methods:{
    scrollChange(){
      let height = document.documentElement.scrollTop
      //console.log(height)
      if(height>600){
        this.guessDescChange='guessDescChange'
      }else{
        this.guessDescChange=''
      }
    },
  },
  mounted(){
    window.addEventListener('scroll',this.scrollChange)
  }
}
</script>

<style lang="stylus" scoped>
.guess
  border-top:.2rem solid #eee
  background:#fff
  .guess-desc
    overflow:hidden
    height:0
    padding-bottom:10%
    text-align:center
    color:#23beae
  .guessDescChange
    position:fixed
    top:.9rem
    left:0
    width:100%
    background:#fff
    z-index:100
  .guess-desc > div
    overflow:hidden
    width:25%
    height:0
    padding-bottom:6%
    margin:0 auto
    padding-top:.23rem
    border-bottom:.1rem solid #23beae
  .guess-content
    overflow:hidden
    width:92%
    height:0
    padding-bottom:64%
    margin:0 auto
    padding-top:.2rem
    border-top:.05rem solid #eee
    .guess-content-img
      position:relative
      overflow:hidden
      height:0
      padding-bottom:48.3%
    .guess-content-img >img
      max-width:100%
    .guess-content-img >div
      position:absolute
      bottom:.2rem
      left:.1rem
      color:#fff
    .guess-content-desc
      overflow:hidden
      height:0
      padding-bottom:12%
      text-align:left
      padding-top:.1rem
      text-indent:.1rem
      font-size:.28rem
      font-weight:bold
      letter-spacing:.01rem
      line-height:.35rem
    .guess-content-prise
      overflow:hidden
      height:0
      padding-bottom:10%
      .guess-content-prise-left
        float:left
        color:#aaa
      .guess-content-prise-right
        float:right
        margin-right:.1rem
      .guess-content-prise-right > span
        color:red
        font-weight:bold
        font-size:.4rem
</style>
