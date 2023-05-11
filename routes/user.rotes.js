const express = require('express')
const router = express.Router()
const userController = require('../controller/user.controller')

// define the home page route
// router.get('/', (req, res) => {
//     res.json(users)
// })

function middleware(req, res){
    
}
router.get("/", userController.getAll)

router.get("/:id", userController.getById)

// define the about route
// router.get('/:id', (req, res) => {
//     // const user = users.find(x => x.id === +req.params.id)
//     // res.json(user)
// })

module.exports = router