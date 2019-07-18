var http = require('http');
var d = require('./test');

http.createServer(function(req,res)
{
    res.writeHead(200,{'content-Type': 'text/html'});
    res.write("The date and time are" + d.mydatetime());
    res.write("Suparat is INW ")
    res.end();
    
}).listen(8080);