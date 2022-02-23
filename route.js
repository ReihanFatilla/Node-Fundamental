/**
 * Basic Routing
 */

const http = require("http")

const server = http.createServer((req, res) => {
    let url,
    dataResponse

    res.setHeader("Content-Type", "application/json")

    url = req.url

    /**
     * Membuat Routing yang di butuhjan sesuai client
     * homepage, login, 404 not found
     */

    if(url === "/"){
        dataResponse = {
            data : "ini adalah halaman HomePage"
        }
    } else if(url.toLowerCase() === "/register"){
        dataResponse = {
            data : "ini adalah halaman Register"
        }
    } else if(url.toLowerCase() === "/login"){
        dataResponse = {
            data : "ini adalah halaman Login"
        }
    } else {
        dataResponse = {
            data : "404, maaf halaman yang anda cari tidak di temukan"
        }
    }
    // Kirim data berupa Json
  return res.end(JSON.stringify(dataResponse));

  /**
   *
   * Setelah menjalankan server ini,
   * silahkan kunjungi url berikut
   *
   * localhost:3000
   * localhost:3000/login
   * localhost:3000/LOGIN
   *
   */
})

server.listen(3000)