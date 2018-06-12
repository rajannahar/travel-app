const express = require("express");
// const cors = require('cors');

const app = express();
const port = 5000;

const data = require('./data/hotels.json');

// app.use(cors());
app.get('/api/travel', (reqeust, response) => {
    response.json(data);
})

app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});