<template>
	<div class="wrapper">
		<div class="icon" v-for="item of iconList" :key="item.id">
			<div class="icon-img">
				<img class="img" :src="item.imgUrl" :class="[item.color]">
			</div>
			<div class="icon-desc">{{item.desc}}</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'homeCatalog',
		props:{
			iconList:Array
		},
		data(){
			return {
				red:'red',
				orange:'orange',
				green:'green',
				blue:'blue',
        /*
				iconList:[
					{
						id:'00001',
						imgUrl:'https://pic5.40017.cn/01/001/9d/a8/rBANC1rPFcWAaF5sAAAIHYwRlQQ791.png',
						desc:'本地热推',
						color:'green',
					},
					{
						id:'00002',
						imgUrl:'https://pic5.40017.cn/02/001/6d/e2/rBLkCFmEG8eALBI8AAAEA1xXmqI793.png',
						desc:'亲子一夏',
						color:'orange',
					},
					{
						id:'00003',
						imgUrl:'https://pic5.40017.cn/02/000/6d/db/rBLkCVmEGV2ANfgbAAADhcD1vDg827.png',
						desc:'名山大川',
						color:'blue',
					},
					{
						id:'00004',
						imgUrl:'https://pic5.40017.cn/02/000/6d/d2/rBLkCFmEFx-AZS1jAAADBu4tOF4076.png',
						desc:'宏村',
						color:'red',
					},
				],
        */
			}
		},
	}
</script>

<style lang="stylus" scoped>
.wrapper
  background:#fff
  padding-top:.2rem
  .icon
    width:25%
    float:left
    .img
      display:block
      background:red
      border-radius:1rem
      margin:0 auto
      width:50%
    .red
      background:#fd6266
    .orange
      background:#fda424
    .green
      background:#6dcf16
    .blue
      background:#41a9f2
    .icon-desc
      text-align:center
      padding-top:.2rem
      padding-bottom:.5rem
</style>
