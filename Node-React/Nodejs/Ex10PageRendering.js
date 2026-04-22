import http from 'http';//for creating web server.
import fs from 'fs';//for file handing of HTML Pages. 
import path from 'path'; //For handling file paths.

const root = path.dirname(process.argv[1]);//Getting the current working directory of the application. It will be used to construct the file path for the HTML files.

//custom function to handle the page rendering. It takes the page name and response object as parameters. It reads the HTML file from the file system and sends it as response to the client. If there is an error while reading the file, then it sends an error message as response to the client.
function renderPage(page, res){
    const filePath = path.join(root,`${page}.html`);//Constructing the file path for the HTML file. It is assumed that the HTML files The file name is constructed using the page name and .html extension.
    fs.createReadStream(filePath).pipe(res);//createReadStream() method is used to read the file in a stream. It takes the file path as parameter and returns a readable stream. pipe() method is used to pipe the readable stream to the response object. It will send the content of the file as response to the client.
}

function processRequest(req, res){
    if(req.url === "/favicon.ico"){
        return;//dont handle favicon request.
    }
    switch(req.url)
    {
        case "/":
            renderPage("home", res);
            break;
        case "/employees":
            renderPage("employees", res);
            break;
        default:
            renderPage("error", res);
            break;
    }
}

//Server creation and processing...
http.createServer((req, res) => {
    processRequest(req, res);
}).listen(3000, () => {
    console.log("Server is running on port 3000");
})