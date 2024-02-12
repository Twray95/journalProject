const router = require("express").Router();
const journalRoutes = require("./journalRoutes");
const userRoutes = require("./userRoutes");

router.use("/journals", journalRoutes);
router.use("/users", userRoutes);

module.exports = router;
