const http= require('http')

http.createServer((req,resp)=>{
  if(req.url === '/perfil'){

     resp.end('Este es tu perfil de usuario') }
     // aca con resp.end podemos devolverle un mensaje a un usuario, solo strings.
}).listen(3000,'localhost',console.log("running!"));  // para poder chekear que esto este bien ponemos, localhost, mas el numero que estamos mirando, en este caso 3000 = localhost:3000.


