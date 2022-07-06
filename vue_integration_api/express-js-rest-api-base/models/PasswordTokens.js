const knex = require('../database/connection')
const { Guid } = require('js-guid');
class PasswordTokens {
    async create(user) {
    
            try {
                const tokintance = Guid.newGuid();
                const token  =  tokintance.toString()
                await knex.insert({
                    user_id: user.id,
                    used: 0,
                    token: token.toString()//GUID  
                }).table("passwordtokens");

                return {
                    status: true,
                    token: token
                }
            } catch (err) {
                console.log(err)
                return {
                    status: false,
                    err: err
                }
            }
    }
    async validate(token) {
        try {
            const result = await knex.select().where({ token: token }).table("passwordtokens").first();
            if(Object.keys(result).length >0){
                const tk = result;
                if(tk.used){
                    return {status: false};
                }else{
                    return{
                        status: true,
                        token:tk
                    };
                }
            }else{
                return {status: false};
            }
        } catch (error) {
            console.log(error);
            return false;
        }
    }
    async setUsed(token){
        try {
            await knex.update({used:1}).where({token:token}).table("passwordtokens");
        } catch (error) {
            console.log(error)
        }
    }
}
module.exports = new PasswordTokens();