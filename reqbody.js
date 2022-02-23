
const http = require("http")
const querystring = require("querystring")
const server = http.createServer((req, res) => {
    let urlReq, methodReq, dataRequest

    const chunkArr = [];
    const dataResponse = {};

    res.setHeader("Content-Type", "application/json");

    urlReq = req.url

    methodReq = req.method ?? "get";
    
    if (urlReq.toLowerCase() === "/login") {
        if (methodReq.toLowerCase() === "get") {
        dataResponse.data = "ini adalah halaman login";
        res.end(JSON.stringify(dataResponse))
        } else if (methodReq.toLowerCase() === "post") {

        req.on("data", (chunk) => {
            chunkArr.push(chunk);
        });

        req.on("end", () => {

            if (chunkArr.length !== 0) {
              dataRequest = Buffer.concat(chunkArr).toString();
        
              console.log(dataRequest);
        
              let requestObj = querystring.parse(dataRequest);
        
              dataResponse.data = requestObj;
              
            }
            res.end(JSON.stringify(dataResponse))
            
        }
    )
        } else {
        dataResponse.data = "Hanya menerima method GET dan POST";
        res.end(JSON.stringify(dataResponse))
        }
    } else {

        dataResponse.data = "Gunakan endpoint /login";
        res.end(JSON.stringify(dataResponse))
    }

    
;})

server.listen(5000)






/**
 * 
 * Request Body
 * 
 * Learn parsing data body dari request
 * 
 */

/**
 *  Ada 2 bentuk transaksi data antara klien dan server:
 *      1. Upload: merupakan pengiriman data dari klien ke server
 *      2. Download: merupakan pengiriman data dari server ke klien
 *
 *  Stream adalah seluruh kegiatan transaksi data dari awal sampai selesai, yakni:
 *      1. Mulai dari inisiasi data pada tujuan
 *      2. Pemisahan data yang akan dikirim menjadi bagian kecil (chunks)
 *      3. Pengiriman data chunks ke tujuan disebut dengan Buffering
 *      4. Setelah data selesai dibuffer semua, proses data agar menjadi utuh kembali
 *
 *  Chunks memiliki tipe data Buffer
 *  Chunks dikumpulkan pada sebuah array
 *
 *  Seiring kemajuan teknologi, pada stream video seperti di Youtube,
 *  kita bisa menonton video yang sedang distreaming, selama tidak buffer aja videonya
 *
 *  Pada data request dengan ukuran data sangat kecil seperti data formulir maka proses stream ini tidak terasa.
 *  Namun pada data request dengan ukurannya besar seperti video yang diupload ke youtube,
 *  maka data tersebut diupload secara bertahap, yang ditandai dengan adanya progress bar atau status upload
 */
