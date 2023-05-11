const users = [{
    id: 1,
    name: "abc"
}]
class UserStore {
    getAll(){
        return {data: users}
    }

    getById({id}){
        const user = users.find(x => x.id === id)
        return user
    }
}

module.exports = new UserStore()