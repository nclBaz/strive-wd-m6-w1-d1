import express from "express"
import listEndpoints from "express-list-endpoints"
import usersRouter from "./services/users/index.js"

const server = express()

const port = 3001

// ************************ ENDPOINTS *******************

server.use("/users", usersRouter) // all the endpoints in the usersRouter they gonna have http://localhost:3001/users as a URL

server.listen(port, () => {
  console.table(listEndpoints(server))
  console.log(`Server is running on port ${port}`)
})
