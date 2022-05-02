// ************************* USERS CRUD ********************************

// 1. POST http://localhost:3001/users/ --> CREATES A NEW USER
// 2. GET http://localhost:3001/users/ --> LIST ALL THE USERS
// 3. GET http://localhost:3001/users/:id --> READ A SINGLE USER (specified by id)
// 4. PUT http://localhost:3001/users/:id --> UPDATES A SINGLE USER (specified by id)
// 5. DELETE http://localhost:3001/users/:id --> DELETES A SINGLE USER (specified by id)

import express from "express"

const usersRouter = express.Router()

// 1.
usersRouter.post("/", (req, res) => {
  // (req, res) => {} is the ENDPOINT HANDLER. Is the function that will be executed every time a request on that endpoint is sent. req and res are REQUEST and RESPONSE objects

  res.send({ message: `HELLO I AM THE ${req.method} ROUTE: ` })
})

// 2.
usersRouter.get("/", (req, res) => {
  res.send({ message: `HELLO I AM THE ${req.method} ROUTE: ` })
})

// 3.
usersRouter.get("/:id", (req, res) => {
  res.send({ message: `HELLO I AM THE ${req.method} ROUTE: ` })
})

// 4.
usersRouter.put("/:id", (req, res) => {
  res.send({ message: `HELLO I AM THE ${req.method} ROUTE: ` })
})

// 5.
usersRouter.delete("/:id", (req, res) => {
  res.send({ message: `HELLO I AM THE ${req.method} ROUTE: ` })
})

export default usersRouter
