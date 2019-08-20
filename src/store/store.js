import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    city:'合肥',
  },
  actions:{
    change(ctx,city){
      ctx.commit('cha',city)
    }
  },
  mutations:{
    cha(state,city){
      state.city = city
    }
  }
})
