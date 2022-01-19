class Processor {
    static Process(data) {
        let arrayRows = data.split('\r\n')
        let rows = [];
        arrayRows.forEach(row => {
            let arrRow = row.split(',');
            rows.push(arrRow)
        })
        return rows
    }
}

module.exports = Processor