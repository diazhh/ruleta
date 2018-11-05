const roleController = require('../controllers/roleController')
const Joi = require('joi');

//All the routes of the api will be defined here 
module.exports = [
    
    {
        method: 'GET',
        path: '/role',
        handler: roleController.getAllRole,
        config: {
            tags: ['api'],
            auth: 'jwt',          
            description: 'Lista de roles',
            validate: {
                headers: Joi.object({
                    'authorization': Joi.string().required() 
                }).options({ allowUnknown: true }),
            }
        }
    },
    {
        method: 'GET',
        path: '/role/{id}',
        handler: roleController.getRole,
        config: {
            tags: ['api'],
            auth: 'jwt',          
            description: 'rol en especifico pasando la id',
            validate: {
                headers: Joi.object({
                    'authorization': Joi.string().required() 
                }).options({ allowUnknown: true }),
                params: {
                    id: Joi.string()
                        .required()
                        .description('ID del rol')
                },
            }
        }
    },
    {
        method: 'POST',
        path: '/role',
        handler: roleController.createRole,
        config: {
            description: 'Crear role',
            notes: 'Crear nuevo role',
            tags: ['api'],
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
                    description: Joi.string(),
                    Status: Joi.boolean(),
                    
                })
            }
        }
    },
    {
        method: 'DELETE',
        path: '/role/{id}',
        handler: roleController.deleteRole,
        config: {
            description: 'Eliminar rol',
            notes: 'Elimina un rol enviando su id y el token en la cabecera',
            tags: ['api'],
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
        path: '/role/{id}',
        handler: roleController.updateRole,
        config: {
            tags: ['api'],
            description: 'Actualizar role',
            notes: ['Actualizar rol enviando id y token'],
            validate: {
                headers: Joi.object({
                    'authorization': Joi.string().required()
                }).options({ allowUnknown: true }),
                params: {
                    id: Joi.string()
                        .required()
                        .description('ID del role')
                },
                payload: {
                    name: Joi.string()
                        .required(),
                    description: Joi.string()
                        .required(),
                    status: Joi.boolean()
                        .required()
                }
            }
        },
    }


]

