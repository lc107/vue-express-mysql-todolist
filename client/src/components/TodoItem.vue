<template>
    <div class="todoItem">
        <el-card class="box-card" v-for="(item,index) in List" :key="index">
            <span class="text item" :data-id="item.id">
                {{ item.text }} - {{item.id}}
            </span>
            <span class="el-icon-delete" @click="handleClickDel(index,item.id)"></span>
        </el-card>
    </div>
</template>

<script>

import { handleDelItem } from '../http'

export default {
    name:'TodoItem',
    data(){
        return{}
    },
    props:{
        List:Array,
    },
    methods:{
        handleClickDel(index,ID){
            this.List.splice(index,1)
            handleDelItem(ID)
            console.log(ID)
            this.handleDeletSueecss()
        },
        handleDeletSueecss(){
            this.$notify({
                title: '删除',
                message: '删除成功！',
                type: 'success'
            });
        },
    },
}
</script>

<style scoped>
    .todoItem{
        width: 600px;
        margin: 15px auto;
        height: 330px;
        overflow: auto;
    }
    .todoItem::-webkit-scrollbar {/*滚动条整体样式*/
        width: 10px;     
        height: 1px;
    }
    .todoItem::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.1);
        background: #535353;
    }
    .todoItem::-webkit-scrollbar-track {/*滚动条里面轨道*/
        -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.1);
        border-radius: 10px;
        background: #EDEDED;
    }
    .box-card{
        text-align: left;
    }
    .el-icon-delete{
        float: right;
        cursor: pointer;
    }
</style>