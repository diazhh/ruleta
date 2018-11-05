const roleService = require('../services/roleService');

module.exports = {
    async getAllRole(){
        return await roleService.getAllRole();
    },
    async getRole(req, res){
        return await roleService.getRole(req, res);
    },
    async createRole(req, res){
        return await roleService.createRole(req, res);
    },
    async deleteRole(req, res){
        return await roleService.deleteRole(req, res);
    },
    async updateRole(req, res){
        return await roleService.updateRole(req, res);
    }
}