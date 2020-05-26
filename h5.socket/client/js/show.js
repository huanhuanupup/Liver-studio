import * as CONNECT from "./connect.js"
import { filterDate } from "./filterDate.js"
const ul = document.querySelector("ul")

// 获取服务端的信息，然后展示到界面上
function show (){
    CONNECT.client.onmessage = function ( msg ) {
    console.log('msg',msg.data)
    const li = document.createElement('LI')
    const p = document.createElement('P')
    p.innerHTML = window.userName + ' - ' + filterDate( Date.now() )
    li.innerHTML = msg.data
    li.appendChild(p)
    ul.appendChild(li)
  }
}
export { show }