const express = require('express');
const routes = require('./routes');
const connection = require('./database/dbConfig');


const app = express();
connection();

app.use(express.json());
app.use(routes);

app.listen(3000 || 3001);