import { WebSocketServer } from "ws";
import { client } from "db/client"

const server = new WebSocketServer({
  port: 3001
},() => {
  console.log("WebSocket server is running on port 3001");
});

server.on("connection", async (socket) => {
  const num = Math.random() * 100;
  await client.user.create({
    data: {
      username: `Abhinav${num}`,
      password: "12345678"
    }
  });

  console.log("user connected");
  socket.send("Connected to the websocket from turbo repo ws-server")
})

server.on("error", (error) => {
  console.error("WebSocket server error:", error);
});
