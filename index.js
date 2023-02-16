const WebSocket = require('ws')
const wss = new WebSocket.Server({ port: 8080 })
wss.on('connection', ws => {
  ws.on('message', (message, isBinary) => {
    console.log(`Replying ${isBinary ? 'binary' : text} message => ${message}`)
    ws.send(message, { binary: isBinary });
  })
  ws.send('Hello! Message From Server!!')
})