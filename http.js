/**
 * Module : HTTP
 * 
 * cara membuat server sederhana
 */

//Import Modul HTTP dengan Require
const http = require("http")

// buat server dengan method createServer
const server = http.createServer((req, res) =>{
    let data;

    console.log(req)

    /**
    *  object req terdiri dari banyak data, namun yang paling sering dipakai ada 3
    *  Yaitu url, method, header
    */
    // buat object data berisi url, method, dan header
    data ={
        url: req.url,
        method: req.method,
        headers: req.headers,
    }

    //Set Header menjadi Respon
    res.setHeader("Content-Type", "application/json")

    // console.log(data)

    res.end(JSON.stringify(data))
});

server.listen(3000)