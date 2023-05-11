const store = require("../stores/user.store")

class UserController {
    constructor(){
    }

    getAll(req,res){
       const users = store.getAll();
       return res.json(users)
    }

    getById(req, res){
        const user = store.getById({ id: +req.params.id })
        return res.json({user})
    }

    

}

module.exports = new UserController()