<template>
  <div>
    <location-header></location-header>
    <location-list></location-list>
  </div>
</template>

<script>
import locationHeader from './components/locationHeader'
import locationList from './components/locationList'
export default {
  name:'Location',
  components: {
    locationHeader,
    locationList,
  },
}
</script>

<style>
</style>
