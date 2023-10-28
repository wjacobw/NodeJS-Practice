const fs = require("fs");
const http = require("http");
const url = require("url")

fs.readFile("./txt/startHAHA.txt", "utf-8", (er, data1) => {
  if (er) return console.log("BOOM!");
  console.log(data1);
  fs.readFile(`./txt/${data1}.txt`, "utf-8", (er, data2) => {
    console.log(data2);
    fs.readFile("./txt/append.txt", "utf-8", (err, data3) => {
      fs.writeFile("./txt/final.txt", `${data2}\n${data3}`, "utf-8", (err) => {
        console.log("files has been written...");
      });
    });
  });
});

const server = http.createServer((req, res) => {
    res.end('Hello from the other side');
})

server.listen(8000, '127.0.0.1', () => {
    console.log('listening to the request on port 8000')
})