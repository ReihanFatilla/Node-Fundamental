/**
 * Header HTTP
 * 
 * Menerima autentifikasi, beberapa username dan password
 */

// Import module: HTTP

const http = require("http")
const { buffer } = require("stream/consumers")

const server = http.createServer((req, res) =>{
    // Inisialisasi Variable

    let dataHeader,//menamung object dari header request
    dataAuthorization, //menampung property authorization dari object dataHeader
    splitData, //Pemisah value authorization
    dataUser, //Menampung balue yang berisi kode base64 to string dari dataUSer
    userPass, // akan menampung hasil dari decode base64
    dataResponse // Menampung data yang akan di kirim ke response

    // Set Header
    res.setHeader("Content-Type", "application/json")

    //get Header dari Request
    dataHeader = req.headers
    console.log(dataHeader)

    //mendapatkan authorization
    dataAuthorization = dataHeader.authorization

    if(!dataAuthorization){
        dataResponse = {
            data: "Undifined Authorization"
        }
        return res.end(JSON.stringify(dataResponse))
    }


    /**
     *  Untuk Menampilkan format data, authoriazation, (token), (kode base64)
     */

    //Split yang menjadi array dengan batasan spasi
    splitData = dataAuthorization.split(" ")


    //generate kode base64, dia di index
    dataUser = splitData[1]

    // convert data usernya jadi base64
    userPass = Buffer.from(dataUser, "base64").toString()

    // buat data respons berisi token dan userPass
    dataResponse = {
        token: dataHeader.authorization,
        userPass,
    };

    // Kirim data berupa Json
  return res.end(JSON.stringify(dataResponse));
})

// set port server
server.listen(5000);