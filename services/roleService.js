"use strict"
const Seq = require('../sequelize/models');
const bcrypt = require('bcrypt');
var models = require('../sequelize/models/index');
//console.log('model.user is : '+Role);
const SALT_ROUNDS = 10;
module.exports = {
    
    async createRole(req, res) {
        let role;
        role = await models.User_type.create({
            name: req.payload.name,
            description: req.payload.description,
            status: req.payload.status
        });
        return res.response(role).code(200);
    },

    async getAllRole() {
        let result = await models.User_type.all()
        return result;
    },
    async getRole(req, res) {
        let result = await models.User_type.all({
            where: {
                id: req.params.id
            }
        })
        return result;
    },
    async deleteRole(req, res) {
        return await models.User_type.destroy({
            where: {
                id: req.params.id
            }
        }).then((affectedRows) => {
            console.log(affectedRows + "registros eliminados");
            return models.User_type.findAll();

        })

    },
    async updateRole(req, res) {
        console.log(req.params.id);
        req.payload = JSON.parse(JSON.stringify(req.payload)); //converting payload to json
        return await models.User_type.update(
            {
                name: req.payload.name,
            description: req.payload.description,
            status: req.payload.status
            }, /* set attributes' value */
            {
                where:
                    { id: req.params.id }
            } /* where criteria */
        ).then((affectedRows) => {
            console.log(affectedRows + "registros actualizados");
            return models.User_type.findAll();

        }).error((error)=>{console.log(error)})

    }
};