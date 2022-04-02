const User = require('../models/User')
const PasswordTokens = require('../models/PasswordTokens')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const secret = "opuioo89jmywesxbvbnbvnfsdeawzcvnhgccbasdadasdaksdladdf54df5s5fa5f7sdfasdfad8fs8a8"
class UserController {
    async index(req, res) {
        const users = await User.findAll();
        res.json(users);

    }
    async findUser(req, res) {
        const { id } = req.params;
        const user = await User.findById(id);
        return (user === undefined) ? res.status(404).json({}) : res.status(200).json(user);
    }

    async create(req, res) {
        const { email, name, password } = req.body
        if (email == undefined) {
            res.status(400).json({ err: "O e-mail é inválido !" })
            return;
        }
        const emailExists = await User.findEmail(email);
        if (emailExists) {
            res.status(406).json({ err: 'E-mail Já cadastrado !!!' })
            return;
        } else {
            await User.new(email, password, name)
            res.status(200).json({ msg: 'Esta tudo ok !!!' })
            return;
        }
    }
    async edit(req, res) {
        const { id, name, role, email } = req.body;
        const result = await User.update(id, email, name, role);
        if (result != undefined && result.status == true) {
            res.status(200).send('Tudo OK !');
        } else {
            res.status(406).send(result.err);
        }
    }
    async remove(req, res) {
        const id = req.params.id;
        const result = await User.delete(id);
        return (result.status) ? res.status(200).send('Usuário deletado') : res.status(406).send(result.err);
    }

    async recoverPassword(req, res) {
        const { email } = req.body;
        const user = await User.findByEmail(email);
        let result ;
        if (user != undefined) {
           result = await PasswordTokens.create(user);

        } else {
            return {
                status: false,
                err: 'O e-mail passado não existe no Banco de dados!'
            }
        }
        return (result.status) ? res.status(200).send(result.token) : res.status(406).send(result.err)
    }
    async changePassword(req, res) {
        const { token,password } = req.body;
        const isTokenValid = await PasswordTokens.validate(token);
        const newPass= password.toString()
        if (isTokenValid.status) {
            await User.changePassword(newPass, isTokenValid.token.user_id, isTokenValid.token.token);
            res.status(200).send("Senha alterada");
        } else {
            res.status(406).send("Token Inválido !");
        }
    }

    


    async login(req,res){
        const {email, password} =req.body;
        const user = await User.findByEmail(email)
    
        if(user != undefined){
           
                const result = await bcrypt.compare(password,user.password);
                if(result){
                    const token = jwt.sign({ email:user.email,role:user.role},secret);
                    res.status(200).json({token:token});
                } else{
                    res.send("Senha Incorreta ! ");
                }
            
          
        }else{
            res.json({status: false})
        }
    }
  
}

module.exports = new UserController();