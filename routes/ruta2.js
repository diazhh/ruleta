const loginController = require('../controllers/loginController')
const userController = require('../controllers/userController')
const userService = require('../services/userService')
const Joi = require('joi');

module.exports = [
    {
        method: 'POST',
        path: '/verificar/correo/{id}',
        handler: userController.verificarMail,
        config: {
            description: 'Enviar correo verificacion mail',
            notes: 'Create user by sending in the data along the token in headers',
            tags: ['api'],
            
            plugins: {
                'hapi-swagger': {
                    payloadType: 'form'
                }
            },
            validate: {
           
                payload: Joi.object({
                    id: Joi.string(),
                    
                })
            }
        }
    }
]