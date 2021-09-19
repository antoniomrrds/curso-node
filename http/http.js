const  http =  require("http")

http.createServer(function(requisao,resposta){
    resposta.end("<h1>Seja bem vindo</h1><br><h4>Antonio o genio</h4>");
}).listen(8080);

console.log("Meu Servidor está rodando!")
