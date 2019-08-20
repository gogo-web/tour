<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="present-area">
        <div class="present-title" ref="present">当前</div>
        <div class="present-button" @click="handlePresentClick">{{this.$store.state.city}}</div>
      </div>
      <div class="hot-area">
        <div class="hot-title">热门城市</div>
        <div class="hot-list">
          <div class="hot-button" v-for="item of hotCities" :key="item.id" @click="handleCurrentClick(item.name)">
            {{item.name}}
          </div>
        </div>
      </div>
      <div class="alph-area">
        <div class="alph-wrapper" v-for="(item,key) of cities" :key="key" :ref="key">
          <div class="alph-title">{{key}}</div>
          <div class="alph-list">
            <div class="alph-button border-bottom" v-for="innerItem of item" :key="innerItem.id" @click="handleAlphClick(innerItem.name)">
              {{innerItem.name}}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import BMap from 'BMap'
export default {
  name: 'locationList',
  props:{
    letter:String,
    cities:Object,
    hotCities:Array,
  },
  methods:{
    handleCurrentClick(c){
      this.$store.dispatch('change',c)
      this.$router.push('/')
    },
    handleAlphClick(c){
      this.$store.dispatch('change',c)
      this.$router.push('/')
    },
    handlePresentClick(){
      this.$router.push('/')
    },
  },
  watch:{
    letter(){
      //console.log(this.letter)
      const elementLetter = this.$refs[this.letter]
      const elementPresent = this.$refs.present
      if (elementLetter) {
        const element = elementLetter[0]
        this.scroll.scrollToElement(element,500)
      } else {
        this.scroll.scrollToElement(elementPresent,500)
      }
    }
  },
  data(){
    return {
      city:'',
      /*
      cities:{
        "A":[
          {
            id:'11',
            name:'安庆',
          },
          {
            id:'12',
            name:'安顺',
          },
          {
            id:'13',
            name:'安阳',
          },
          {
            id:'14',
            name:'鞍山',
          },
          {
            id:'15',
            name:'阿拉善盟',
          },
          {
            id:'16',
            name:'安康',
          },
          {
            id:'17',
            name:'阿坝',
          },
          {
            id:'18',
            name:'阿里',
          },
          {
            id:'19',
            name:'阿克苏地区',
          },
          {
            id:'20',
            name:'澳门',
          },
          {
            id:'21',
            name:'阿勒泰地区',
          },
        ],
        "B":[
          {
            id:'22',
            name:'蚌埠',
          },
          {
            id:'23',
            name:'亳州',
          },
          {
            id:'24',
            name:'北京',
          },
          {
            id:'25',
            name:'白银',
          },
          {
            id:'15',
            name:'百色',
          },
          {
            id:'26',
            name:'北海',
          },
          {
            id:'27',
            name:'毕节',
          },
          {
            id:'28',
            name:'保定',
          },
          {
            id:'29',
            name:'白城',
          },
          {
            id:'30',
            name:'白山',
          },
          {
            id:'31',
            name:'本溪',
          },
        ],
      },
      hotCities:[
        {
          id:'1',
          name:'上海',
        },
        {
          id:'2',
          name:'广州',
        },
        {
          id:'3',
          name:'苏州',
        },
        {
          id:'4',
          name:'南京',
        },
        {
          id:'5',
          name:'常州',
        },
        {
          id:'6',
          name:'深圳',
        },
        {
          id:'7',
          name:'无锡',
        },
        {
          id:'8',
          name:'成都',
        },
        {
          id:'9',
          name:'北京',
        },
        {
          id:'10',
          name:'杭州',
        },
      ],
      */
    }
  },
  mounted(){
    this.scroll = new BScroll(this.$refs.wrapper,{
      click:true,
      mouseWheel:{
        speed:20,
        invert:false,
        easeTime:300,
      }
    })
  },
}
</script>

<style lang="stylus"scoped>
.border-bottom
  &:before
    border: .04rem solid #ccc
.list
  overflow: hidden;
  background: #e9ecf1;
  position: absolute;
  top: 1.12rem;
  left: 0;
  bottom: 0;
  width: 100%;
  z-index: 1;
  .hot-list
    overflow: hidden;
  .present-title, .hot-title, .alph-title
    margin-left: .4rem;
    padding: .4rem 0;
  .hot-title
    margin-bottom: -.3rem;
  .present-button, .hot-button, .alph-button
    line-height: .44rem;
    padding: .2rem .2rem;
    background: #fff;
  .present-button
    width: 84%;
    margin-left: .2rem;
  .hot-button
    width: 15%;
    float: left;
    margin-left: .2rem;
    text-align: center;
    margin-top: .2rem;
  .alph-button
    width: 100%;
    padding-left: .4rem;
</style>
