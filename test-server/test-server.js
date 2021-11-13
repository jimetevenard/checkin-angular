const http = require('http');
const fs = require("fs");

// Fichier de test
const TEST_FILE = "/liste-test.json";

const CORS = {'Access-Control-Allow-Origin': '*'};

fs.readFile(__dirname + TEST_FILE, (error, data) => {
    if (error) throw error;

    const jsonData = data.toString();

    let testServer = http.createServer((req, res) => {
        switch (req.url) {

            case '/list':
                res.writeHead(200, { ...CORS, 'Content-Type': 'application/json' });
                res.end(jsonData);
                break;

            case '/':
                res.writeHead(200, { ...CORS, 'Content-Type': 'text/html' });
                res.end('<h1>Backoffice</h1><p>Page Backoffice</p>');
                break;

            default:
                res.writeHead(404, CORS );
                res.end('');
        }


    });

    // Start the server on port 3000
    testServer.listen(3000, '127.0.0.1');
    console.log('Test server running on port 3000');
});

