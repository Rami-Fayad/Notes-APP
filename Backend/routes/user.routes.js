const express = require("express");
const router = express.Router();
const {createUser, handleLogin, getUser} =require('../controller/user.controller');
const authenticateToken = require("../utilies");

router.post("/create-account", createUser);
router.post("/login",handleLogin);
router.get("/get-user", authenticateToken ,getUser);
module.exports = router;