let express = require('express');
let app  = express();

app.get('/', (req,res) => {
    console.log('hello');
    // res.send('Hello world');
    res.sendFile(__dirname + '/index.html');
});

app.get('/crash' ,(req,res) => {
    console.log('Crash!!');
    res.send('Crash!!');
    process.exit(1);

});

app.get('/api', (req,res) => {
    console.log('hello api');
    res.send('Hello world api');
});

app.listen(process.env.PORT ,() => {
    console.log('Server Start port :',process.env.PORT);
});