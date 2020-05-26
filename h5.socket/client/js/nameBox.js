const nameBox = document.querySelector("#user")
const userIn = document.querySelector("#username")
const cancel = document.querySelector("#cancel")
const confirm = document.querySelector("#confirm")

import * as CONNECT from "./connect.js"



// 输入用户名的input框操作
function Box() {
    nameBox.style.display = 'none'
}
function cBox() {
    window.userName = userIn.value
    Box()
    // 第一次连接好服务器之后的发送
    console.log(CONNECT.client)
        CONNECT.client.send(`${window.userName}进来直播间`)

}
function cancelBox() {
    cancel.onclick = Box
}
function confirmBox() {
    confirm.onclick = cBox
}

export { cancelBox, confirmBox }   //