const express = require('express');
const route = require('./routes/route');
const path = require('path');



const port = process.env.PORT || 3001;

const app = express();
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(route);



app.listen(port,()=>{
    console.log('server started');
});