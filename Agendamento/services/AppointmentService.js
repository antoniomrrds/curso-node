const appointment = require('../models/Appointment')
const mongoose = require("mongoose");
const Appointmentfactory = require('../factories/Appointmentfactory');
const Appo = mongoose.model("Appointment", appointment);
const mailer = require("nodemailer");

class AppointmentService {

    async Create(name, email, description, cpf, date, time) {
        const newAppo = new Appo({
            name,
            email,
            description,
            cpf,
            date,
            time,
            finished: false,
            notified:false
        });

        try {
            await newAppo.save();
            return true;
        } catch (err) {
            console.log(err);
            return false;
        }
    }

    async GetAll(showFinished) {

        if (showFinished) {
            return await Appo.find();
        } else {
            var appos = await Appo.find({ 'finished': false });
            var appointments = [];
            appos.forEach(appointment => {
                appointments.push(Appointmentfactory.Build(appointment))
            });
            return appointments
        }
    }

    async GetById(id) {
        if (!isNaN(id) || id == undefined) {
            return false;
        }
        try {
            var event = await Appo.findOne({ '_id': id });
            return event;
        } catch (error) {
            console.log(error)
            return false;
        }
    }

    async Finish(id) {
        try {
            await Appo.findByIdAndUpdate(id, { finished: true });
            return true;
        } catch (err) {
            console.log(err);
            return false;
        }
    }

    async Search(query) {
        try {
            var appos = await Appo.find().or([{ email: query }, { cpf: query }])
            return appos;
        } catch (err) {
            console.log(err);
            return []
        }
    }

    async SendNotification(){
        var appos = await this.GetAll(false);

        var transporter = mailer.createTransport({
            host:'smtp.mailtrap.io',
            port:'25',
            auth:{
                user:'ec1bdcb3c49c82',
                pass:'3a81d31579a304'
            }

        })

        appos.forEach(async app=>{
            var date = app.start.getTime();
            var hour = 1000 *60 *60;
            var gap = date - Date.now();
            if(gap <= hour){
                if(!app.notified){
                    await Appo.findByIdAndUpdate(app.id,{notified:true});
                    transporter.sendMail({
                        from:"Antonio marcos <antoniomarcos.amrrds@gmail.com>",
                        to:app.email,
                        subject:"Sua consulta vai Acontecer em breve !",
                        text:"Conteúdo qualquer !!! sua Consulta vai acontecer em  1 hora"
                    })
                    .then(_=>{
                    
            
                    })
                    .catch(err=>{
                        console.log(err);
                    })
                }
             
            }
        })

    }

    
    
}
module.exports = new AppointmentService();

