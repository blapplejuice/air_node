var http = require("http");

function process_request(request, response)
{
	console.log("web.js is running");
	var body = "You have contacted the NODE server coded by martin\n";
	var content_length = body.length;
	response.writeHead(200, {'Content-Length': content_length, 'Content_type': 'text/plain'});
	response.end(body);
}

var s = http.createServer(process_request);
s.listen(8080);
