<template>
  <div>
    <location-header></location-header>
    <location-list :letter="letter"></location-list>
    <location-alphabet @change="handleLetterChange"></location-alphabet>
  </div>
</template>

<script>
import locationHeader from './components/locationHeader'
import locationList from './components/locationList'
import locationAlphabet from './components/locationAlphabet'
export default {
  name:'Location',
  data(){
    return{
      letter:'',
    }
  },
  methods:{
    handleLetterChange(e){
      this.letter = e
    },
  },
  components: {
    locationHeader,
    locationList,
    locationAlphabet,
  },
}
</script>

<style>
</style>
