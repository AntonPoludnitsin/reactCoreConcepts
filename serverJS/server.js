const express = require('express');

const app = express();

app.get('/about', (req, res) => {
    res.send('This is new API')
})

app.listen(3012, () => {
    console.log('API started')
})