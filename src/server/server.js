const express = require('express');
const app = express();
const cors = require('cors');

app.options('*',cors());

 // I need a pic here that actually works, need to look that up, stringis a placeholder
 
let arrAddBk = [
    {
    image: "",
    firstName: "Test",
    lastName: "McTest",
    email: "sample@a.com",
    phone: "555-555-5555"
    },
    {
        image: "",
        firstName: "Also",
        lastName: "McTest",
        email: "sample2@a.com",
        phone: "222-555-5555"
        },
];

app.get('/',(req, res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    const arrAddBkOutput = [];

    for(const contact of arrAddBk)
    {
        arrAddBkOutput.push(contact);
    }

    res.end(JSON.stringify(arrAddBkOutput));
});


app.listen(8888); 

console.log('Web server at port 8888 is running.')