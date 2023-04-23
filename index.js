const express = require('express');
const app = express();
const router = require('./routes/routes');
const database = require('./database/db');
// const cors = require('cors');
// const whitelist = ['https://localhost:3000'];
require('dotenv').config()

const port = parseInt(process.env.PORT);

app.use(express.json())
app.use('/', router);
// app.use(cors({ origin: whitelist, credentials: true }));

const start = async () => {
    await database(app);
    app.listen(port, () => console.log(`Server is listening on port ${port}`));
};
start();