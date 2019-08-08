<template>
  <div>
    <ul class="list">
      <li v-for="item of alphabetList" :key="item.id" @click="handleLetterClick">
        {{item.content}}
      </li>
    </ul>
    <div class="connect" :style="hidden" ref="distance">
      {{this.content}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'locationAlphabet',
	props:{
		alphabetList:Array,
	},
  methods:{
    handleLetterClick(e){
      this.content = e.target.innerText
      //console.log(this.content)
      this.$emit("change",this.content)
      for (let i = 0; i < this.alphabetList.length; i++) {
        if (this.content===this.alphabetList[i].content) {
          let distance = 0.8 + ((i+1)*0.3)
          const showElement = this.$refs.distance
          showElement.style="display:block"
          showElement.style="top:"+distance+"rem"
          setTimeout(function(){
            showElement.style="display:none"
          },500)
        }
      }
    },
  },
  data(){
    return {
      /*
      alphabetList:[
        {
          id:'1',
          content:'当前',
        },
        {
          id:'2',
          content:'热门城市',
        },
        {
          id:'3',
          content:'A',
        },
        {
          id:'4',
          content:'B',
        },
        {
          id:'5',
          content:'C',
        },
        {
          id:'6',
          content:'D',
        },
        {
          id:'7',
          content:'E',
        },
        {
          id:'8',
          content:'F',
        },
        {
          id:'9',
          content:'G',
        },
        {
          id:'10',
          content:'H',
        },
        {
          id:'11',
          content:'I',
        },
        {
          id:'12',
          content:'J',
        },
        {
          id:'13',
          content:'K',
        },
        {
          id:'14',
          content:'L',
        },
        {
          id:'15',
          content:'M',
        },
        {
          id:'16',
          content:'N',
        },
        {
          id:'17',
          content:'O',
        },
        {
          id:'18',
          content:'P',
        },
        {
          id:'19',
          content:'Q',
        },
        {
          id:'20',
          content:'R',
        },
        {
          id:'21',
          content:'S',
        },
        {
          id:'22',
          content:'T',
        },
        {
          id:'23',
          content:'U',
        },
        {
          id:'24',
          content:'V',
        },
        {
          id:'25',
          content:'W',
        },
        {
          id:'26',
          content:'X',
        },
        {
          id:'27',
          content:'Y',
        },
        {
          id:'28',
          content:'Z',
        },
      ],
      */
      content:'',
      hidden:{
        display:'none'
      },
    }
  },
}
</script>

<style lang="stylus" scoped>
.list
  position: fixed;
  top: 1.15rem;
  right: 0;
  z-index: 100;
  text-align: center;
  width: 15%;
  background: #eff1f5;
  padding-bottom: 100rem;
  opacity: .7;
  color: #53cabf;
.list>li
  margin: .1rem 0;
  font-weight: bold;
.connect
  position: absolute;
  top: 1.1rem;
  right: 1.1rem;
  z-index: 100;
  text-align: center;
  background: rgba(80,180,0,.7);
  border-radius: .07rem;
  color: #fff;
  padding: .1rem .1rem;
  margin-right: .2rem;
</style>
