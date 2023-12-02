const express = require('express');
const router = require('./router');
const cors = require('cors');
const app = express();
const session = require('express-session');

app.use(session({
  secret: 'kjdsflkjsjposjd',
  resave: false,
  saveUninitialized: true,
}));
app.use(cors());
app.use(express.json());
app.use(router);

module.exports = app;