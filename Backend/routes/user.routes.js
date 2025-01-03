const express = require("express");
const router = express.Router();
const {createUser, handleLogin} =require('../controller/user.controller');

router.post("/create-account", createUser);
router.post("/login",handleLogin);
module.exports = router;