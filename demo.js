var express = require('express');
var app = express();
var port = 5825;

app.use(express.static('demo'));
app.use('/dist', express.static('dist'));
app.listen(port);
console.log('Mansion Demo up on '+port);
