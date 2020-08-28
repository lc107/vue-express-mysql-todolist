import Vue from 'vue'
import Vuex from 'vuex'
// import Axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // list:[
    //     {index:1,text:'hello1'},
    //     {index:2,text:'hello2'},
    //     {index:3,text:'hello3'},
    //     {index:4,text:'hello4'},
    //     {index:5,text:'hello5'},
    // ],
  },
  mutations: {
    // addItem(state,payload){
    //   state.list.push(payload)
    // },
  },
  getters:{
    
  },
  actions: {
    // getData(){
    //   return Axios.get('http://localhost:3001/api/todolist')
    // }
  },
  modules: {
  }
})
