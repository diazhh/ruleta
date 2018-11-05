"use strict"
const loginController = require('../controllers/loginController')
const userController = require('../controllers/userController')
const userService = require('../services/userService')
const Joi = require('joi');
console.log('Cargando ruta auth');
module.exports = [
    
    {
        method: 'PUT',
        path: '/role/users/{id}',
        handler: userController.updateUserRole,
        config: {
            tags: ['api'],
            description: 'Cambiar rol al usuario',
            notes: ['Cambia de rol al usuario'],
            validate: {
                headers: Joi.object({
                    'authorization': Joi.string().required()
                }).options({ allowUnknown: true }),
                params: {
                    id: Joi.string()
                        .required()
                        .description('ID of the user')
                },
                payload: {
                    role_id: Joi.string().required()
                }
            }
        },
    },
    {
        method: 'PUT',
        path: '/user/username/{id}',
        handler: userController.updateUsername,
        config: {
            tags: ['api'],
            description: 'Cambiar username a usuario',
            notes: ['Cambia nombre de usuario al usuario'],
            validate: {
                headers: Joi.object({
                    'authorization': Joi.string().required()
                }).options({ allowUnknown: true }),
                params: {
                    id: Joi.string()
                        .required()
                        .description('ID of the user')
                },
                payload: {
                    username: Joi.string().required()
                }
            }
        }
    },
    {
        method: 'PUT',
        path: '/user/password/{id}',
        handler: userController.updateUserPass,
        config: {
            tags: ['api'],
            description: 'Cambiar password a usuario',
            notes: ['Cambia password al usuario'],
            validate: {
                headers: Joi.object({
                    'authorization': Joi.string().required()
                }).options({ allowUnknown: true }),
                params: {
                    id: Joi.string()
                        .required()
                        .description('ID of the user')
                },
                payload: {
                    password: Joi.string().required()
                }
            }
        }
    },
    {
        method: 'PUT',
        path: '/user/email/{id}',
        handler: userController.updateUserMail,
        config: {
            tags: ['api'],
            description: 'Cambiar email a usuario',
            notes: ['Cambia email al usuario'],
            validate: {
                headers: Joi.object({
                    'authorization': Joi.string().required()
                }).options({ allowUnknown: true }),
                params: {
                    id: Joi.string()
                        .required()
                        .description('ID of the user')
                },
                payload: {
                    email: Joi.string().required()
                }
            }
        }
},
{
        method: 'GET',
        path: '/user/username/{username}',
        handler: userController.getUsername,
        config: {
            tags: ['api'],
            description: 'Verificar su usuario existe',
            notes: ['Verificar su usuario existe'],
            validate: {
                headers: Joi.object({
                    'authorization': Joi.string().required()
                }).options({ allowUnknown: true }),
                params: {
                    username: Joi.string()
                        .required()
                        .description('username')
                },
                
            }
        }
},
{
        method: 'GET',
        path: '/api/user/email/{email}',
        handler: userController.getEmail,
        config: {
            tags: ['api'],
            description: 'Verificar su email existe',
            notes: ['Verificar su email existe'],
            validate: {
                headers: Joi.object({
                    'authorization': Joi.string().required()
                }).options({ allowUnknown: true }),
                params: {
                    email: Joi.string()
                        .required()
                        .description('username')
                },
                
            }
        }
}


]

