// 连接服务器
export const port = 8090
export const host = '10.31.160.36'
export const serverURL = `ws://${host}:${port}`
export const client = new WebSocket(serverURL)
