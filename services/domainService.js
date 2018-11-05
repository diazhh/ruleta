"use strict"
const bcrypt = require('bcrypt');
var models = require('../sequelize/models/index');

const SALT_ROUNDS = 10;
module.exports = {
    
    async createDomain(req, res) {
        let domain;
        domain = await models.Domain.create({
            name: req.payload.name,
            dni: req.payload.dni,
            status: req.payload.status
        });
        return res.response(domain).code(200);
    },

    async getAllDomains() {
        let result = await models.Domain.all()
        return result;
    },
    async getDomain(req, res) {
        console.debug(req);
        let result = await models.Domain.all({
            where: {
                id: req.params.id
            }
        })
        return result;
    },
    async deleteDomain(req, res) {
        return await models.Domain.destroy({
            where: {
                id: req.params.id
            }
        }).then((affectedRows) => {
            console.log(affectedRows + "registros eliminados");
            return models.Domain.findAll();

        })

    },
    async updateDomain(req, res) {
        req.payload = JSON.parse(JSON.stringify(req.payload)); //converting payload to json
        return await models.Domain.update(
            {
                name: req.payload.name,
            dni: req.payload.dni,
            status: req.payload.status
            }, /* set attributes' value */
            {
                where:
                    { id: req.params.id }
            } /* where criteria */
        ).then((affectedRows) => {
            console.log(affectedRows + "registros actualizados");
            return models.Domain.findAll();

        }).error((error)=>{console.log(error)})

    }
};