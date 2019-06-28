<template>
	<div class="wrapper">
		<swiper :options="swiperOption">
			<swiper-slide v-for="item of headerImg" :key="item.id">
				<img class="swiper-img" :src="item.imgUrl">
			</swiper-slide>
			<div class="swiper-pagination" slot="pagination"></div>
		</swiper>
	</div>
</template>

<script>
	export default {
		name: 'homeSwiper',
		data(){
			return {
				headerImg:[
					{
						id:'001',
						imgUrl:'https://pic5.40017.cn/01/000/31/71/rBANC1sy7-iAaElXAADxiWL4LPo263_520x218_00.jpg'
					},
					{
						id:'002',
						imgUrl:'https://pic5.40017.cn/03/000/31/0c/rBANB1zlAcKAJMMtAALRm_wVSlk432_520x218_00.jpg'
					}
				],
				swiperOption:{
					pagination:'.swiper-pagination',
					loop:true
				},
			}
		},
	}
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet 
  background:#fff
.swiper-img
  width:100%
</style>
