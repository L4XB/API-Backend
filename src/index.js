const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')
const userRouters = require("./routes/user")
const taskRouters = require("./routes/task")

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRouters)
app.use(taskRouters)



app.listen(port, () => {
    console.log('Server is up on port ' + port)
})