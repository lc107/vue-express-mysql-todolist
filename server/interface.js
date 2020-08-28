import './app.js'

// 查询
app.get('/api/todolist',(req,res) => {
    const sql ='SELECT * FROM todolist ORDER BY id DESC'//todolist为表名
    connection.query(sql,(err,results) =>{
        if(err){
            return res.json({
                code: 1,
                data: '错误',
                affextedRows: 0
            })
        }
        res.json ({
            code : 200,
            data: results,
            affextedRows:results.affextedRows
        })
    })
})

//添加
app.post('/api/add', (req,res) => {
    const item = req.body
    let text = item.text
    let newItem = { id:uuid.v1() , text }
    const addSql = 'INSERT INTO todolist SET ?'
    connection.query(addSql,newItem,(err,results) => {
        if (err) {
            return res.json({
                code: 1,
                data: '添加失败',
                affextedRows: 0
            })
        }
        res.json ({
            code: 200,
            data: '添加成功',
            affextedRows:results.affextedRows
        })
    })
})

//删除
app.post('/api/del', (req,res) => {
    const item = req.body
    const delSql = `DELETE FROM todolist WHERE id='${item.id}'`
    connection.query(delSql,(err,results) => {
        if (err) {
            return res.json({
                code: 1,
                data: '删除失败',
                affextedRows: 0,
                message:err.message
            })
        }
        res.json ({
            code: 200,
            data: '删除成功',
            affextedRows:results.affextedRows
        })
    })
})



