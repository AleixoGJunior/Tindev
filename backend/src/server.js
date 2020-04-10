const express = require("express");
const mongoose = require("mongoose");

const routes = require("./routes");

const server = express();

mongoose.connect(
  "mongodb://tindev:tindev@cluster0-shard-00-00-hvcvu.mongodb.net:27017,cluster0-shard-00-01-hvcvu.mongodb.net:27017,cluster0-shard-00-02-hvcvu.mongodb.net:27017/tindev?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

server.use(express.json());
server.use(routes);

server.listen(3333);
