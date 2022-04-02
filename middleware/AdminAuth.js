const jwt = require('jsonwebtoken');
const secret = "opuioo89jmywesxbvbnbvnfsdeawzcvnhgccbasdadasdaksdladdf54df5s5fa5f7sdfasdfad8fs8a8"
module.exports = (req,res,next) =>{
    const authToken = req.headers['authorization']
    if(authToken != undefined){
        const bearer = authToken.split(' ')[1]
        const token = bearer;
        try {
            const decoded = jwt.verify(token,secret);
            (decoded.role ==1)? next() :  res.status(403).send("Você não tem permissão para isso !")
        } catch (error) {
            res.status(403).send("Você não está auteticado !")
            return;
        }    
    }else{
        res.status(403).send("Você não está auteticado !")
        return;
    }
}