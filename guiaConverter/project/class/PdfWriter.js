const pdf = require('html-pdf')
class PdfWriter{
    static writer(filename,html){
        pdf.create(html,{}).toFile(filename,(err)=> {
           if(err) console.log(`Houve um eRRo :  ${err}`)
        })
    }
}

module.exports = PdfWriter