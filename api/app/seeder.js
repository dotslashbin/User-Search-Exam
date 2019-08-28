const User = require('../models/userModel')

module.exports = {
    createUsers: function() {
        const newUser = new User({
            name: 'Joshua',
            email: 'joshuarpf@gmail.com'
        })

        newUser.save()
            .then(() => {
                console.log(`NEW USER CREATED ... `)
            })
            .catch(() => {
                console.error(`ERROR CREATING USER: `, error)
            })
    }
}