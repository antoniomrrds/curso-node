const app = require('express')();

app.get("/", (req, res)=>{
    res.json({success:true});
})
app.get("/color/:person",(req,res)=>{   
    const person  = req.params.person;
    if(person=="Antony"){
        res.json({color:  "red" });
    }   
})

module.exports = app;

