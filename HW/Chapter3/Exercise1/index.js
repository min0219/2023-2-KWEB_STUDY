const express = require('express');
const router = require('./router');

const app = express(); 
const port = 3000; 

app.use(express.urlencoded({ extended: true }));
app.use('/', router); // '/'에 router을 실행

app.listen(port, () => console.log(`Server listening on port ${port}!`));
