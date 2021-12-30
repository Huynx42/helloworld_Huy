//TU KHOA:require , dotenv: thu vien su dung
require('dotenv').config();
//tu khoa require, http: thu vien, co the dat abc= http/xyz...
const abc = require('http');
const student = require('./student');
// console.log(process.env.PORT);
const server = abc.createServer((req, res) => {
    if(req.url == '/'){
    res.writeHead(200,{'Content-Type': 'text/html'});
    res.end('<h1>This is Home Page Test Nodemon</h1>');
    }
    if(req.url == '/student'){
    res.writeHead(200,{'Content-Type': 'text/plain'});
    res.end(`<h1>This is student you ask for ${student.getStudentName()}</h1>`);
    }
});

//server, menthod listen, 
server.listen(process.env.PORT || 3456, () => {
    console.log(`Server is running at ${process.env.PORT || 3456}`);
});
