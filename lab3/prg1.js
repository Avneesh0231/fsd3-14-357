import { log } from "console";
import http from "http";

const server = http.createServer((req,res) => {
    console.log('Welcomme to Node JS');
    console.log(req.url);
    res.end("hello ji");
    
});




const PORT = 3690;
server.listen(PORT,()=>{
    console.log("Hi the server is running");
    
})