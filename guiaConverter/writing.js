const fs = require('fs')

const text =`Não é sobre o que é, é sobre o que pode se tornar.
                                                        Dr. Seuss`

fs.writeFile('guiaConverter/exemplo.txt',text,(err)=>{
    if(err)console.log(`Erro durante o salvamento de Arquivo !!!`)
})

