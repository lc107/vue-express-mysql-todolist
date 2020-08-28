<template>
  <div class="Todolist">
    <h1>{{ msg }}</h1>
    <div style="margin: 15px auto;width:600px">
      <el-input placeholder="输入" v-model="inputValue" class="input-with-select" 
        size="medium" @keyup.enter.native="handleClickButton">
        <el-button slot="append" icon="el-icon-check" @click="handleClickButton"></el-button>
      </el-input>
    </div>
    <template>
      <TodoItemCarousel :List="list"/>
      <TodoItem :List="list"/>
    </template>
  </div>
</template>

<script>
import TodoItem from './TodoItem.vue'
import TodoItemCarousel from './TodoItemCarousel.vue'
// import {mapState,mapMutations,mapActions} from 'vuex'

import { handleAddItem,handleGetData } from '../http'

export default {
  name: 'Todolist',
  props: {
    msg: String
  },
  data(){
    return {
      inputValue:'',
      list:[],
      searchValue:'',
    }
  },
  components:{
    TodoItem,
    TodoItemCarousel,
  },
  methods:{
    handleClickButton(){
      let inputValue = this.inputValue;
      if(inputValue){
        let newItem = { id:this.list.length,text: this.inputValue}
        this.list.unshift(newItem)
        this.inputValue = '';
        handleAddItem(newItem)
        this.handleAddSueecss()
      }
    },
    handleAddSueecss(){
        this.$notify({
          title: '添加',
          message: '添加成功！',
          type: 'success'
        });
    },
    // ...mapMutations({
        // add:'addItem'
    // }),
    // ...mapActions(['getData']),
  },
  computed:{
    // ...mapState(['list']),
  },
  created(){
    handleGetData().then((res)=>{
      this.list = res.data.data;
    }).catch((err) =>{
      console.log(err)
    })
  }
}
</script>

<style scoped>
  
</style>
