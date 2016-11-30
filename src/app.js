const express = require('express');

const app = express();
app.get('/', (req, res) => {
    res.send('hello');
});
app.listen(8080, () => {
    console.log('Example app listening on port 3000!')
});
