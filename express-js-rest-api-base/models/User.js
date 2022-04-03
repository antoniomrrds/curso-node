const knex = require('../database/connection')
const bcrypt = require('bcrypt');
const PasswordTokens = require('./PasswordTokens');
class User {

    async findAll() {
        try {
            const result = await knex.select(['id', 'name', 'email', 'role']).table('users');
            return result;
        } catch (error) {
            console.log(error)
            return [];
        }
    }

    async findById(id) {
        try {
            const result = await knex.select(['id', 'name', 'email', 'role']).where({ id: id }).table('users');
            return (result.length > 0) ? result : undefined;

        } catch (err) {
            console.log(err);
            return undefined;
        }
    }

    
    async findByEmail(email) {
        try {
            const result = await knex.select(['id', 'name','password', 'email', 'role']).where({ email: email }).table('users').first();
            return (Object.keys(result).length > 0) ? result : undefined;

        } catch (err) {
            console.log(err);
            return undefined;
        }
    }
    async new(email, password, name) {
        try {
            const hash = await bcrypt.hash(password, 10);
            await knex.insert({ email, password: hash, name, role: 0 }).table('Users');

        } catch (err) {
            console.log('Ops houve um erro no cadastro : ' + err)
        }

    }
    async findEmail(email) {
        try {
            const result = await knex.select('*').from('users').where({ email: email });
            return (result.length > 0) ? true : false;
        } catch (error) {
            console.log(error)
            return false
        }
    }
    async update(id, email, name, role) {
        const user = await this.findById(id);

        if (user != undefined) {
            const editUser = {};
            if (email != undefined) {
                if (email != user.email) {
                    const result = await this.findEmail(email);
                    if (result == false) {
                        editUser.email = email;
                    }else{
                        return {
                            status: false,
                            err: 'O E-mail já esta cadastrado !!!'
                        }
                    }
                }
            }
            if (name != undefined || role != undefined) {
                editUser.name = name;
                editUser.role = role
            }
            try{
              await knex.update(editUser).where({id:id}).table("users");
              return { status: true}
            }catch (error) {
                return {
                    status: false,
                    err:error
                }
            }
        } else {
            return {
                status: false,
                err: 'O Usuario não existe !!!'
            }
        }
    }
    async delete(id){
        const userId = await this.findById(id);
        if(userId != undefined){
            try {
                await knex.delete().where({id:id}).table('users');
                return{status:true}
            } catch (error) {
                return {
                    status: false,
                    err:error
                }
            }
        }else{
            return {
                status: false,
                err:'O usuário não existe !!!'
            }
        }
    }
    async changePassword(newPassword,id,token){
        const hash = await bcrypt.hash(newPassword, 10);
        await knex.update({password : hash}).where({id:id}).table("users");
        await PasswordTokens.setUsed(token);
    }

}

module.exports = new User()