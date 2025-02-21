const http=require('http')
const server=http.createServer(async(req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'
        });
    });