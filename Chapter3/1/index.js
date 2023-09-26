const express = require('express');
const router = require('./router');
const app = express(); //앱 객체 생성
const port = 3000; 

//app.get('/', (req, res) => res.send('Hello World!'));
app.use('/', router); // '/'에 router을 실행
app.listen(port, () => console.log(`Server listening on port ${port}!`));
