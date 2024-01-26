const express = require("express");
const journalRouter = require("./journal");

const app = express();

app.use("/journal", journalRouter);

module.exports = app;
