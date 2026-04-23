//This app shall handle requests in the form registration and records document. 
const http = require('http');//for creating server
const fs = require('fs');//for handling file reading and writing. 
const path = require('path');//For combining file paths with folder paths.
const querystring = require('querystring'); //For handling requests with data.

const PORT = 1234;
const dataFile = path.join(__dirname, 'employees.csv');

if(!fs.existsSync(dataFile)){
    fs.writeFileSync(dataFile, "Name, Address, Salary\n")
}

const server = http.createServer((req, res)=>{
   //------------GET to Serve Reg form------------------
    if(req.method == 'GET' && req.url == '/'){
        fs.createReadStream('./pages/Registration.html').pipe(res);
    }
    //------------POST when data is sent to the server-------------
    else if(req.method == "POST" && req.url == '/submit'){
        let body =''
        req.on('data', chunk =>{ //data is a built in event that is handled to extract the data sent to the user.
             body +=chunk.toString();
             console.log(body);
        });

        req.on('end', ()=>{
            const formData = querystring.parse(body);
            const csvRow = `${formData.name}, ${formData.address}, ${formData.salary}\n`;
            fs.appendFile(dataFile, csvRow, err => {
                if(!err){
                    res.writeHead(202, {'Location': '/records'});
                    res.end();//close the response after sent...
                }else{
                    res.end("Something went wrong!!", err);
                }
            })
        })
    }
    else if(req.method =="GET" && req.url == '/records'){
        let tableRows = '';
        fs.readFile(dataFile, 'utf-8', (err, csvData)=>{
            const rows = csvData.split('\n').slice(1);//skip first line. 
            for(const row of rows){
                const cols = row.split(',');//split each line into words.
                tableRows += `<tr>
                    <td>${cols[0]}</td>
                    <td>${cols[1]}</td>
                    <td>${cols[2]}</td>
                </tr>`;
            }
        })
        console.log(tableRows)
        fs.readFile('./pages/Records.html', 'utf-8', (err, content)=>{
            const finalHtml = content.replace('{{TABLE_ROWS}}', tableRows);
            res.writeHead(200, {'Content-type' : 'text/html'});
            res.end(finalHtml)
        })
    }


}).listen(PORT, ()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
})