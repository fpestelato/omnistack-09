const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb://flavio:flavio@cluster0-shard-00-00-b0yuw.mongodb.net:27017,cluster0-shard-00-01-b0yuw.mongodb.net:27017,cluster0-shard-00-02-b0yuw.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use(routes);
app.listen(3333);