const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded());

app.use('/build', express.static(path.join(__dirname, '../build')));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'));
});



app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});

module.exports = app;