// 向客户端展示页面的服务器
const express = require('express')
const path = require('path')
const app = express()
const PORT = 8088
const HOST_NAME = '10.31.160.36'

app.use(express.static(path.join(__dirname,'./client')))   //设置静态资源目录

app.listen(PORT,HOST_NAME,()=>{          //监听服务器
    console.log(`此页面展示的url是:http://${HOST_NAME}:${PORT}`)
})