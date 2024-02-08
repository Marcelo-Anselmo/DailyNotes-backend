const express = require('express');
const routes = require('./routes');
const connection = require('./database/dbConfig');
const cors = require('cors');


const app = express();
connection();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3000 || 3001);