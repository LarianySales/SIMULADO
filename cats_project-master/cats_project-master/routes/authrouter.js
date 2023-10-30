const express = require('express')
const router = express.Router()
const Authcontroller = require("../controllers/AuthController")

router.get("/Login",Authcontroller.login);
router.post("/Login",Authcontroller.logar);
router.get("/registrar")

module.exports = router