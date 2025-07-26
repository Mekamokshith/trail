const http=require('http');
const server=http.createServer((req,res)=>{
    if(req.method ==='POST')
    {
        let body='';
        req.on('data',chunk =>{
            body+=chunk.toString();
        });

        req.on('end',()=>{
            console.log("received data",body);
            res.writeHead(200,{'content-type':'text/plain'});
                res.end("data received succesfully");
            
        });
    }else{
        res.writeHead(200,{'content-type':'text/html'});

        res.end(`
            <h1> data transfer dem</h1>
            <form method="POST">
            <input type="text" name="message" placeholder="enter message">
            <button type="submit">send</button>
            </form>`
        );
    }})
    const PORT= 9000;
    server.listen(PORT,()=>{
    console.log('SERVER IS RUNNING AT ');
});