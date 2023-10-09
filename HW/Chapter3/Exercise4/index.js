const express = require('express');
const path = require('path')

const port = 3000;
const app = express();


app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'views', 'login.html'));
});
app.post('/login', (req,res)=>{
    const body = req.body;
    console.log(body);
    res.send(`username: ${body.username} password: ${body.password}`);
});

app.listen(port, () => console.log(`Server listening on port ${port}!`));