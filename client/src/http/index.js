const axios = require('axios');

const axiosCfg = {
    getData:{
        url:'http://localhost:3001/api/todolist'
    },
    addItem:{
        url:'http://localhost:3001/api/add'
    },
    delItem:{
        url:'http://localhost:3001/api/del'
    },

}

const handleGetData = () => {
    return axios({
        method:'get',
        url:axiosCfg.getData.url,
    })
};

const handleAddItem = (newItem) => {
    return axios({
        method: 'post',
        url: axiosCfg.addItem.url,
        data: newItem
    })
};

const handleDelItem = (id) => {
    console.log(id)
    return axios({
        method: 'post',
        url: axiosCfg.delItem.url,
        data:{id:id}
    })
};

module.exports = {
    handleAddItem,
    handleDelItem,
    handleGetData
}