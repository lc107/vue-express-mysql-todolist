<template>
    <div class="todoItemCarousel">
        <el-carousel :interval="4000" type="card" height="200px">
            <el-carousel-item v-for="(item,i) in List" :key="i">
            <h3>{{ item.text }}</h3>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
export default {
    name:'TodoItemCarousel',
    data(){
        return{
            
        }
    },
    props:{
        List:Array,
    },
    mounted(){
        console.log(this.List)
    },
    methods:{
        
    },
}
</script>

<style scoped>
    .todoItemCarousel{
        width: 600px;
        margin: 15px auto;
    }
    .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>