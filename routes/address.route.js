const auth = require("../middleware/auth"); 

module.exports = app => {
  const addresses = require("../controllers/address.controller");
  
    var router = require("express").Router();
  
    router.post("/addresses", addresses.address);
    
    app.use(router);
  };