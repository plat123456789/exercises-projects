const express = require('express');
const bodyParser = require('body-parser');

const path = require('path');
const app = express();

app.post('/',(req,res)=>{
	console.log(req.body);
});

app.listen(3000)

