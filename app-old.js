const http = require("http");

http
  .createServer((req, res) => {
    // res.setHeader("Content-Disposition", "attachment; filename=lista.csv");
    // res.writeHead(201, { "Content-Type": "application/csv" });

    res.write("Hola Mundo");

    // res.write('"id","nombre"\n');
    // res.write('"1","Fernando"\n');
    // res.write('"2","Abraham"\n');
    // res.write('"3","Gerardo"\n');
    // res.write('"4","Luis"\n');
    // res.write('"5","Cesar"\n');
    res.end();
  })
  .listen(8080);

console.log("Escuchando en el puerto", 8080);
