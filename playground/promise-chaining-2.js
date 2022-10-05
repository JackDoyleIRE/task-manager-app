require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndRemove('62efdc4d2261b32b768f1480').then((task) => {
//     console.log(task)
//     return Task.countDocuments({completed : false})

//     }).then((result) => {
//         console.log(result)
//     }).catch((e) => {
//         console.log(e)
//     })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false})
    return count
}

deleteTaskAndCount('62f53707ccb5453be46d0075').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})