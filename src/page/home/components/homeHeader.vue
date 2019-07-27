<template>
	<div class="header">
		<div class="header-back">
			<span class="iconfont">&#xe641;</span>
		</div>
		<div class="header-search">
			<span class="iconfont">&#xe688;</span>
			搜一下，带你玩转周边
		</div>
		<div class="header-city">
			合肥
			<span class="iconfont">&#xe65d;</span>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'homeHeader',
	}
</script>

<style lang="stylus" scoped>
.header
  line-height:.88rem
  text-align:center
  display:flex
  .header-back
    float:left
    width:.9rem
  .header-search
    flex:1
    height:.6rem
    line-height:.6rem
    margin-top:.2rem
    margin-left:.2rem
    margin-right:.2rem
    border-radius:.5rem
    box-shadow:0 0 .01rem .02rem #ccc
  .header-city
    float:right
    width:1.4rem
</style>
