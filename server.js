const express = require("express");
const userRoutes = require("./routes/user.rotes");
const birdsRoutes = require("./routes/birds.routes");
const VERSION = "/v1";

class Server {
  constructor() {
    this.app = express();
    this.handleMiddlewares()
    this.handleRoutes()
  }

  handleMiddlewares (){
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(express.json());

    // this.app.use(this.authMiddleware);
  }

  authMiddleware(req, res, next){
    // console.log("I am Middleware", req.params.id)
    if(!req.headers.token){
     return res.status(401).send("Not Authorized")
    }
    next()
  }   

  handleRoutes() {
    this.app.use(VERSION + "/user", userRoutes);
    this.app.use(VERSION + "/birds", birdsRoutes);
  }

  listen(PORT) {
    this.app.listen(PORT, () => {
      console.log(`Example app listening on port ${PORT}`);
    });
  }
}
module.exports = Server
