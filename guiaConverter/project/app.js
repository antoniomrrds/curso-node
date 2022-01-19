const HtmlParser = require('./class/HtmlParser')
const Reader = require('./class/Reader')
const Writer =  require('./class/Writer')
const Processor = require('./class/Processor')
const Table = require('./class/Table')
const PdfWriter = require('./class/PdfWriter')
const Read = new Reader()

const Write =  new Writer()

async function main() {
    try {
        const data = await Read.ReadFile('guiaConverter/project/Users.csv')
        const dataProcessor = Processor.Process(data)
        const tableData = new Table(dataProcessor)
        const html = await HtmlParser.Parse(tableData)
        Write.Write(Date.now()+".html",html )
        PdfWriter.writer(Date.now()+'.pdf',html)
    
    } catch (error) {
        console.log(error)
    }

}
main()