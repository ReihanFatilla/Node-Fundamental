const http = require("http")

const url = require("url")
const querystring = require("querystring")

const server = http.createServer((req, res) => {
    /**
   * Inisiasi variabel yang akan dipakai
   *
   * urlRequest berisi path url di request
   * urlObj berisi url yang telah diproses
   * urlQuery berisi object dari query
   * dataResponse berisi object dari query yang telah diparsing
   *
   * */

    let urlRequest,
        urlObj,
        urlQuery,
        dataResponse 

    res.setHeader("Content-Type", "application/json")

    urlRequest = req.url

    // jadikan string urlRequest menjadi object URL
    urlObj = url.parse(urlRequest)
    console.log(urlObj)

    // ambil property query dari object URL
    urlQuery = urlObj.query

    if(!urlQuery){
        dataResponse = {
            data : "Query tidak di temukan"
        }
        return res.end(JSON.stringify(dataResponse))
    }

    dataResponse = querystring.parse(urlQuery)
    return res.end(JSON.stringify(dataResponse))
})

server.listen(5000)