
const User = require('../models/User')

module.exports = class AuthController{
    static async login(request,response){
        return response.render("view/login")
    }
}