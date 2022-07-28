require('../src/db/mongoose')
const User = require('../src/models/user')



User.findByIdAndUpdate('62c1bfa448d8cf23b80c395e',{age: 16}).then((user) => {
    console.log(user)
    return User.countDocuments({age: 16})
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})