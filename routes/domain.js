const domainController = require('../controllers/domainController')
const Joi = require('joi');

//All the routes of the api will be defined here 
module.exports = [
    
    {
        method: 'GET',
        path: '/domain',
        handler: domainController.getAllDomain,
        config: {
            tags: ['api'],
            auth: 'jwt',          
            description: 'Lista de dominios',
            validate: {
                headers: Joi.object({
                    'authorization': Joi.string().required() 
                }).options({ allowUnknown: true }),
            }
        }
    },
    {
        method: 'GET',
        path: '/domain/{id}',
        handler: domainController.getDomain,
        config: {
            tags: ['api'],
            auth: 'jwt',          
            description: 'Dominio en especifico pasando la id',
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
        path: '/domain',
        handler: domainController.createDomain,
        config: {
            tags: ['api'],
            description: 'Crear dominio',
            notes: 'Crear nuevo dominio',
         
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
                    name: Joi.string(),
                    dni: Joi.string(),
                    Status: Joi.boolean(),
                    
                })
            }
        }
    },
    {
        method: 'DELETE',
        path: '/domain/{id}',
        handler: domainController.deleteDomain,
        config: {
            tags: ['api'],
            description: 'Eliminar dominio',
            notes: 'Elimina un dominio envianso su id y el token en la cabecera',
       
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
        path: '/domain/{id}',
        handler: domainController.updateDomain,
        config: {
            tags: ['api'],
            description: 'Actualizar dominios',
            notes: ['Actualizar dominio enviando id y token'],
            validate: {
                headers: Joi.object({
                    'authorization': Joi.string().required()
                }).options({ allowUnknown: true }),
                params: {
                    id: Joi.string()
                        .required()
                        .description('ID del dominio')
                },
                payload: {
                    name: Joi.string()
                        .required(),
                    dni: Joi.string()
                        .required(),
                    status: Joi.boolean()
                        .required()
                }
            }
        },
    }


]

