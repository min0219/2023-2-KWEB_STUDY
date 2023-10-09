const express = require('express');

const app = express();
const port = 3000;

const factorial = number=>{
    return (number != 1) ? number *factorial(number-1) : 1;
};

app.get('/factorial', (req,res)=>{
    const {number} = req.query;
    res.redirect(`/factorial/${number}`);
});
app.get('/factorial/:number', (req,res)=>{
    const number = req.params.number;
    res.send(String(factorial(Number(number))));
});

app.listen(port, () => console.log(`Server listening on port ${port}!`));