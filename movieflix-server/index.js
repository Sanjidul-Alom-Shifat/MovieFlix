const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));






// for testing the server
app.get('/', (req, res) => {
    res.send('Movieflix is running now in this server...');
})

app.listen(port, () => {
    console.log(`MovieFlix running on ${port} port.`)
})

