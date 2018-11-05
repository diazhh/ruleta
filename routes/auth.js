"use strict"
const loginController = require('../controllers/loginController')
const userController = require('../controllers/userController')
const userService = require('../services/userService')
const Joi = require('joi');
console.log('Cargando ruta auth');
module.exports = [
    {
        method: 'GET',
        path: '/',
        handler: loginController.greetings,
        config: {
            description: 'Bienvenido',
            auth: false,
            tags: ['api']
        }
    },
    {
        method: 'POST',
        path: '/auth/login',
        handler: loginController.authenticate,
        config: {
            tags: ['api'],
            description: 'Autenticacion de usuarios',
            notes: 'Endpoint para autenticacion',
            
            auth: false,
            plugins: {
                'hapi-swagger': {
                    payloadType: 'form'
                }
            },
            validate: {
                payload: Joi.object({
                    username: Joi.string(),
                    password: Joi.string()
                })
            }
        }
    },
    {
        method: 'GET',
        path: '/users',
        handler: userController.getAllUsers,
        config: {
            tags: ['api'],
            auth: 'jwt',            //Specifiying the auth scheme , this is specified in server.js file
            description: 'Get All Users',
            validate: {
                headers: Joi.object({
                    'authorization': Joi.string().required()    //Getting auth token in headers
                }).options({ allowUnknown: true }),
            }
        }
    },
    {
        method: 'GET',
        path: '/user/{id}',
        handler: userController.getUser,
        config: {
            tags: ['api'],
            auth: 'jwt',          
            description: 'usuario en especifico pasando la id',
            validate: {
                headers: Joi.object({
                    'authorization': Joi.string().required() 
                }).options({ allowUnknown: true }),
                params: {
                    id: Joi.string()
                        .required()
                        .description('ID del dominio')
                },
            }
        }
    },
    {
        method: 'POST',
        path: '/auth/users',
        handler: userController.createUser,
        config: {
            tags: ['api'],
            description: 'Crear Usuario',
            notes: 'Create user by sending in the data along the token in headers',
         
            auth: 'jwt',
            plugins: {
                'hapi-swagger': {
                    payloadType: 'form'
                }
            },
            validate: {
                headers: Joi.object({
                    'authorization': Joi.string().required()
                }).options({ allowUnknown: true }),
                payload: Joi.object({
                    DomainId: Joi.string(),
                    UserTypeId: Joi.string(),
                    first_name: Joi.string(),
                    Apellido: Joi.string(),
                    DNI: Joi.string(),
                    username: Joi.string(),
                    password: Joi.string(),
                    Status: Joi.boolean(),
                    email: Joi.string(),
                    phone: Joi.string(),
                })
            }
        }
    },
    {
        method: 'DELETE',
        path: '/user/{id}',
        handler: userController.deleteUser,
        config: {
            tags: ['api'],
            description: 'Delete User',
            notes: 'Delete user by sending in the user id along the token in headers',
         
            auth: 'jwt',
            plugins: {
                'hapi-swagger': {
                    payloadType: 'form'
                }
            },
            validate: {
                headers: Joi.object({
                    'authorization': Joi.string().required()
                }).options({ allowUnknown: true }),
                params: Joi.object({
                    id: Joi.string(),
                })
            }
        }
    },
    {
        method: 'PUT',
        path: '/user/{id}',
        handler: userController.updateUser,
        config: {
            tags: ['api'],
            description: 'Update user',
            notes: ['Update user in our database'],
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
                    first_name: Joi.string(),
                    last_name: Joi.string(),
                    dni: Joi.string(),
                    status: Joi.boolean().required()
                }
            }
        },
    }


]

