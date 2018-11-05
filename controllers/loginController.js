// All the methods related to the login will be here
const loginService = require('../services/loginService');

module.exports ={
    greetings(){
        return loginService.greetings();
    },
    authenticate(req, res){
        //aqui iria redis
        if(req.payload.username){
            return loginService.authentiate(req, res);
        }else{
            return res.response({"error":"Porfavor, coloque su usuario"}).code(500);
        }
        
    }
}
