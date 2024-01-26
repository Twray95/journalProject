//Backend journal js goes here
const journals = require("express").Router();
const journalData = require("../db/post.json");

journals.get("/", (req, res) => {
  res.json(journalData);
});

module.exports = journals;
