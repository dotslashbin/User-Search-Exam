var express = require('express')
var router = express.Router()
var users = require('../../app/userFunc')


router.get('/', (eq, res, next) => {
    console.log(`testing ... `)
    const result = users.search('joshua')

    res.send({ result })
})

module.exports = router