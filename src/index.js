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
const port = process.env.PORT || 3000

 

//app.use((req, res, next) => {
//   res.status(503).send('Site is currently down! Check back soon!')
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

// const main = async () => {
    // const task = await Task.findById('636f78b5a7b5453cf94c30af')
    // await task.populate('owner')
    // console.log(task.owner)

//   const user = await User.findById('636f71b9a5ca95610d4e86b9')
//    await user.populate('tasks') 
//    console.log(user.tasks)
//}

//main()