//Backend journal js goes here
//Doesn't work right this second because implementing sql.
const router = require("express").Router();
const { User, Journal } = require("../../models/index");

router.get("/", async (req, res) => {
  const journalData = await Journal.findAll();

  return res.json(journalData);
});

module.exports = router;
