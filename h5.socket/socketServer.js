// 直播间挂载的服务器
const ws = require('ws')
const host = '10.31.160.36'
const port = 8090

const server = new ws.Server({
    host,
    port
})

let count = 1000
const clients = []
// 直播间id存储
server.on('connection', cli => {
    cli.name = ++count
    clients[cli.name] = cli
    // 获取直播间传来的数据
    cli.on('message', msg => {
        msg.name = cli.name    //获取直播间id
        console.log(msg.toString())
        broadcast(cli, msg)   //运行广播循环渲染弹幕

    })
    // 容错处理
    cli.on('error', error => {
        console.log(error)
    })
    // 正常关闭直播间
    cli.on('close', () => {
        console.log(cli.name + '下线了')
        delete (clients[cli.name])
    })
})

// 广播封装函数
function broadcast(client, msg) {
    for (let key in clients) {
        clients[key].send(msg.toString())
    }
}

// 监听服务器
server.on('listening', () => {
    console.log(`server is running at ws://${host}:${port}`)
})