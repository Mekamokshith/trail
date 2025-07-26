const http=require('http');
const server=http.createServer((req,res)=>{
    res.writeHead(200,{'content-Type':'text/html'});
    res.end(`
        <h1>welcome to node.js server</h1>
        <p>this is a basic web server created using node.js http module.</p>
        <p>current time:${new Date().toLocaleString()}</p>
    `);
});

const PORT= 3000;
server.listen(PORT,()=>{
    console.log('SERVER IS RUNNING AT ');
});