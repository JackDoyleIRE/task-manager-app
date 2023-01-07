const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')
const e = require('express')
const { response } = require('express')
const ObjectID = require('mongoose').Types.ObjectId
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || PORT

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})



