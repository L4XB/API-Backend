const express = require('express')
require('./db/mongoose')
const userRouters = require("./routes/user")


const app = express()
const port = process.env.PORT || 3000



app.use(express.json())
app.use(userRouters)



app.listen(port, () => {
    console.log('Server is up on port ' + port)
})