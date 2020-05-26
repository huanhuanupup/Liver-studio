// 连接服务器
// const port = 8090
// const host = '10.31.160.36'
// const serverURL = `ws://${host}:${port}`
// const client = new WebSocket(serverURL)

import {cancelBox,confirmBox} from "./nameBox.js"   //
import { SMS } from "./SMS.js"
import { show } from "./show.js"


cancelBox()
confirmBox()
SMS()
show()