const router = require("express").Router();
const { User, Journal } = require("../models/index");

router.get("/", async (req, res) => {
  res.render("homepage");
  return;
});

router.get("/user", async (req, res) => {
  res.render("user");
  return;
});

router.get("/compose", async (req, res) => {
  res.render("compose");
  return;
});

module.exports = router;
