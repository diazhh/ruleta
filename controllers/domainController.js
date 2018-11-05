const domainService = require('../services/domainService');

module.exports = {
    async getAllDomain(){
        return await domainService.getAllDomains();
    },
    async getDomain(req, res){
        return await domainService.getDomain(req, res);
    },
    async createDomain(req, res){
        return await domainService.createDomain(req, res);
    },
    async deleteDomain(req, res){
        return await domainService.deleteDomain(req, res);
    },
    async updateDomain(req, res){
        return await domainService.updateDomain(req, res);
    }
}