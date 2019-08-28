const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserModel = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String
    }
})

module.exports = User = mongoose.model('users', UserModel)