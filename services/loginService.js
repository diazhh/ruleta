const userService = require('./userService');
const moment = require('moment');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');



const generateJwtToken = (user) => {
    let expires = moment().utc().add({ days: 1 }).unix();
    let token = jwt.sign({
        exp: expires,    //expira en 24 horas
        user: user
    }, "9DhvalMbCZ9srYWe9DTaJZ");
    return {
        token: token,
        expires: moment.unix(expires).format()
    }
}
let token;

module.exports = {
    async greetings() {
        return { "message": "Bienvenido!" }
    },
    async authentiate(req, res) {
        let data = [];
        data = await userService.findUserByUsername(req, res);
        console.log(data);
        if (data.length > 0) {
            let user = data[0].dataValues;
            let flag = await bcrypt.compare(req.payload.password, user.password);
            if (flag) {
                let response = {
                    id: user.id,
                    fullname: user.first_name,
                    email: user.email,
                    roles: user.UserTypeId
                }
                token = generateJwtToken(response);
            } else {
                return { "error": "Usuario y/o clave incorrecto." };
            }
            return token;
        } else {
            return { "error": "Usuario incorrecto." };
        }
        
    }
}

