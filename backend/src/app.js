const express = require('express');
const router = require('./router');
const cors = require('cors');
const app = express();
const methodOverride = require('method-override');
app.use(methodOverride('_method'));

app.use(cors());
app.use(express.json());
app.use(router);

module.exports = app;