const WebSocket = require('ws');

const wss = new WebSocket.Server({port:9000})

wss.on("connection", (ws)=>{
    console.log("new user connected");
    
    
    setInterval(() => {
        ws.send('yoo');
    }, 3000);

    ws.on("message", (data)=>{
        console.log("message = ", data);
    })

    ws.on("close", ()=>{
        console.log("user disconnected");
    })
})