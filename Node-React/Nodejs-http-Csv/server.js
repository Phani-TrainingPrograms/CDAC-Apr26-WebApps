const http = require('http');
const fs = require('fs');
const path = require('path');
const querystring = require('querystring');

const PORT = 1234;
const dataFile = path.join(__dirname, 'data.csv');

// Create CSV file if not exists
if (!fs.existsSync(dataFile)) {
    fs.writeFileSync(dataFile, "Name,City,Department\n");
}

const server = http.createServer((req, res) => {

    // ===============================
    // GET : Serve Form Page
    // ===============================
    if (req.method === 'GET' && req.url === '/') {

        fs.readFile('./pages/form.html', (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
    }

    // ===============================
    // POST : Handle Form Submission
    // ===============================
    else if (req.method === 'POST' && req.url === '/submit') {

        let body = '';

        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {

            const formData = querystring.parse(body);

            const csvRow = `${formData.name},${formData.city},${formData.department}\n`;

            // Append to CSV file
            fs.appendFile(dataFile, csvRow, err => {

                res.writeHead(302, { 'Location': '/records' });
                res.end();
            });
        });
    }

    // ===============================
    // GET : Display Records
    // ===============================
    else if (req.method === 'GET' && req.url === '/records') {

        fs.readFile(dataFile, 'utf8', (err, csvData) => {

            const rows = csvData.split('\n').slice(1); // Skip header

            let tableRows = '';

            rows.forEach(row => {
                if (row.trim() !== '') {
                    const cols = row.split(',');

                    tableRows += `
                        <tr>
                            <td>${cols[0]}</td>
                            <td>${cols[1]}</td>
                            <td>${cols[2]}</td>
                        </tr>
                    `;
                }
            });

            fs.readFile('./pages/records.html', 'utf8', (err, html) => {

                const finalHtml = html.replace('{{TABLE_ROWS}}', tableRows);

                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(finalHtml);
            });
        });
    }

    // ===============================
    // 404
    // ===============================
    else {
        res.writeHead(404);
        res.end("Page Not Found");
    }

});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
