const http = require("http")

const server = http.createServer((req, res) => {
    let url, method, dataResponse;

    res.setHeader("Content-Type", "application/json");

    url = req.url

    method = req.method ?? "get";

    if (url === "/") {
        dataResponse = {
          data: "Ini adalah Homepage",
        };
      } else if (url.toLowerCase() === "post") {
          if(method.toLowerCase() == "login"){
              dataResponse = {data : "anda login dengan method Post"}
          }
          } else {
              dataResponse = {data : "Ubah Method ke Post dlu"}
          }
    return res.end(JSON.stringify(dataResponse));
    
})
server.listen(5000)