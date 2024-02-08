const router = require("express").Router();
const journals = require("./journalRoutes");

router.use("/books", journals);

module.exports = router;
