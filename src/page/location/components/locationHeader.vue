<template>
  <div>
    <div class="search">
      <span class="iconfont">&#xe688;</span>
      <input type="text" class="search-input" placeholder="请输入城市名（如北京、bj、beijing）">
    </div>
  </div>
</template>

<script>
export default {
  name: 'locationHeader',
}
</script>

<style lang="stylus" scoped>
.search
  position: relative;
  height: .72rem;
  background: #e0e4ec;
  padding: .2rem;
  .iconfont
    position: absolute;
    top: .4rem;
    left: .4rem;
    color: #666;
  .search-input
    height: .72rem;
    line-height: .72rem;
    width: 100%;
    text-align: left;
    box-sizing: border-box;
    padding-left: .6rem;
    border-radius: .06rem;
    color: #666;
</style>
