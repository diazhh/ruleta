const userService = require('../services/userService');

module.exports = {
    async getAllUsers(){
        return await userService.getAllUsers();
    },
    async getUser(req, res){
        return await userService.getUser(req, res);
    },
    async getUsername(req, res){
        return await userService.getUsername(req, res);
    },
    async getEmail(req, res){
        return await userService.getEmail(req, res);
    },
    async createUser(req, res){
        return await userService.createUser(req, res);
    },
    async deleteUser(req, res){
        return await userService.deleteUser(req, res);
    },
    async updateUser(req, res){
        return await userService.updateUser(req, res);
    },
    async updateUserMail(req, res){
        return await userService.updateUserMail(req, res);
    },
    async updateUserPass(req, res){
        console.log("dfsgs");
        return await userService.updateUserPass(req, res);
    },
    async updateUsername(req, res){
        
        return await userService.updateUsername(req, res);
    },
    async updateUserRole(req, res){
        return await userService.updateUserRole(req, res);
    },
    async verificarMail(req, res){
        console.log("verificar mail");
        return await userService.verificarMail(req, res);
    }
}