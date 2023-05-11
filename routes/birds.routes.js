const express = require('express')
const router = express.Router()
const users = [{
    id: 1,
    name: "abc"
}]
// define the home page route
router.get('/', (req, res) => {
    res.json(users)
})
// define the about route
router.get('/:id', (req, res) => {
    const user = users.find(x => x.id === +req.params.id)
    res.json(user)
})

module.exports = router