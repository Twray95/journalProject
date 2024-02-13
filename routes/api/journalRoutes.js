//Backend journal js goes here
//Doesn't work right this second because implementing sql.
const router = require("express").Router();
const { User, Journal } = require("../../models/index");

router.get("/", async (req, res) => {
  try {
    const journalData = await Journal.findAll();

    res.status(200).json(journalData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const newJournal = req.body;
    const journalData = await Journal.create(newJournal);
    res.status(200).json(journalData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
