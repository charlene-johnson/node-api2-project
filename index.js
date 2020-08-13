const express = require("express")
const postsRouter = require("./posts/posts-router")
const welcomeRouter = require("./welcome-router")


const server = express()
const port = process.env.PORT || 4000




server.use(express.json())
server.use("/", welcomeRouter)
server.use(postsRouter)

server.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
})