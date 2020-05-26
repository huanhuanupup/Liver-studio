const stin = document.querySelector("#content")
const btn = document.querySelector("#btn")
import * as CONNECT from './connect.js'

function SMS() {
    // 点击发送发送内容
    btn.onclick = sendSMS

    // 回车也发送内容
    document.onkeydown = function (e) {
        if (e.keyCode == 13) {
            sendSMS()
        }
    }
}

function sendSMS() {
    const val = stin.value
    if (val) {
        CONNECT.client.send(val)
        stin.value = ''
    } else {
        alert('请输入内容')
    }
}

export { SMS }