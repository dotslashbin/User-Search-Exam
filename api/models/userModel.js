const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserModel = new Schema({
    name: {
        type: string,
        required: true
    },
    email: {
        type:string
    }
})

module.exports = User = mongoose.model('users', UserModel)