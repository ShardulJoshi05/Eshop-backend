const auth = require("../middleware/auth"); 

module.exports = app => {
  const users = require("../controllers/user.controller");
  
    var router = require("express").Router();
  
    router.post("/auth", users.login);
  
    router.post("/user", users.signUp);

   // router.post("/logout", auth, users.logout);
  
    app.use(router);
  };