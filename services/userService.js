"use strict"
const Users = require('../sequelize/models/user')
const Seq = require('../sequelize/models');
const bcrypt = require('bcrypt');
var models = require('../sequelize/models/index');

const SALT_ROUNDS = 10;
console.log('model.user is : '+models.User);
module.exports = {
    async createUser(req, res) {
        let user;
        let hash = await bcrypt.hash(req.payload.password, SALT_ROUNDS);
        user = await models.User.create({
            first_name: req.payload.first_name,
            UserTypeId: req.payload.UserTypeId,
            last_name: req.payload.last_name,
            dni: req.payload.dni,
            username: req.payload.username,
            status: req.payload.status,
            email: req.payload.email,
            phone: req.payload.phone,
            password: hash,
            status_email: false
        });
        return res.response(user).code(200);
    },

    async getAllUsers(req, res) {
        let result = await models.User.all()
        return result;
    },
    async getUser(req, res) {
        let result = await models.User.all({
            where: {
                id: req.params.id
            }
        })
        return result;
    },
    async deleteUser(req, res) {
        return await models.User.destroy({
            where: {
                id: req.params.id
            }
        }).then((affectedRows) => {
            console.log(affectedRows + "registros insertados");
            return models.User.findAll();

        })

    },
    async updateUser(req, res) {
        
        req.payload = JSON.parse(JSON.stringify(req.payload));
        //let hash = await bcrypt.hash(req.payload.password, SALT_ROUNDS);
        return await models.User.update(
            {
                first_name: req.payload.first_name,
            last_name: req.payload.last_name,
            dni: req.payload.dni,
            status: req.payload.status,
            }, /* set attributes' value */
            {
                where:
                    { id: req.params.id }
            } /* where criteria */
        ).then((affectedRows) => {
            console.log(affectedRows + "registros actualizados");
            return models.User.findAll({
                where: {
                    id: req.params.id
                }
            });

        }).error((error)=>{console.log(error)})

    },
    async updateUserPass(req, res) {
        
        req.payload = JSON.parse(JSON.stringify(req.payload));
        let hash = await bcrypt.hash(req.payload.password, SALT_ROUNDS);
        return await models.User.update(
            {
                password: hash
            }, /* set attributes' value */
            {
                where:
                    { id: req.params.id }
            } /* where criteria */
        ).then((affectedRows) => {
            console.log(affectedRows + "registro actualizado");
            return models.User.findAll({
                where: {
                    id: req.params.id
                }
            });

        }).error((error)=>{console.log(error)})

    },
    async updateUsername(req, res) {
              
        let data = await this.findUserByUsername(req, res);
        
        if (data.length > 0) {
            return { "error": "Nombre de usuario no disponible. Intente con uno disntinto" };
        }else{
            req.payload = JSON.parse(JSON.stringify(req.payload));
            //let hash = await bcrypt.hash(req.payload.password, SALT_ROUNDS);
            return await models.User.update(
                {
                    username: req.payload.username
                }, /* set attributes' value */
                {
                    where:
                        { id: req.params.id }
                } /* where criteria */
            ).then((affectedRows) => {
                console.log(affectedRows + "registro actualizados");
                return models.User.findAll({
                    where: {
                        id: req.params.id
                    }
                });

            }).error((error)=>{console.log(error)})
        }
        

    },
    async updateUserMail(req, res) {
              
        let data = await this.findUserByEmail(req, res);
        
        if (data.length > 0) {
            return { "error": "El correo electronico ya se encuentra registrado en el sistema" };
        }else{
            req.payload = JSON.parse(JSON.stringify(req.payload));
            //let hash = await bcrypt.hash(req.payload.password, SALT_ROUNDS);
            return await models.User.update(
                {
                    email: req.payload.email,
                    status_email: false
                }, /* set attributes' value */
                {
                    where:
                        { id: req.params.id }
                } /* where criteria */
            ).then((affectedRows) => {
                console.log(affectedRows + "registro actualizados");
                return models.User.findAll({
                    where: {
                        id: req.params.id
                    }
                });

            }).error((error)=>{console.log(error)})
        }
        

    },
    async updateUserRole(req, res) {
        
        req.payload = JSON.parse(JSON.stringify(req.payload));
        //let hash = await bcrypt.hash(req.payload.password, SALT_ROUNDS);
        return await models.User.update(
            {
                UserTypeId: req.payload.role_id
            }, /* set attributes' value */
            {
                where:
                    { id: req.params.id }
            } /* where criteria */
        ).then((affectedRows) => {
            console.log(affectedRows + "registro actualizado");
            return models.User.findAll({
                where: {
                    id: req.params.id
                }
            });

        }).error((error)=>{console.log(error)})

    },
    async findUserByEmail(req, res) {
        let result = await models.User.findAll({
            where: {
                email: req.payload.email
            }
        })
        return result;
    },
    async findUserByUsername(req, res) {
        let result = await models.User.findAll({
            where: {
                username: req.payload.username
            }
        })
        
        return result;
    },
    async getUsername(req, res) {
        let result = await models.User.findAll({
            where: {
                username: req.params.username
            }
        })
        console.log(result.length)
        if(result.length > 0){
            return res.response("Usuario no disponible").code(403);
        }else{
            return res.response("Usuario disponible").code(200);
        }
        
        return result;
    },
    async getEmail(req, res) {
        let result = await models.User.findAll({
            where: {
                email: req.params.email
            }
        })
        console.log(result.length)
        if(result.length > 0){
            return res.response("Email no disponible").code(403);
        }else{
            return res.response("Email disponible").code(200);
        }
        
        return result;
    },
    async verificarMail(req, res){
       
        console.log(this.findUserById.id)
    },
    async findUserById(req, res){
        let result = await models.User.findAll({
            where: {
                id: req.payload.id
            }
        })
        return result;

    }
};