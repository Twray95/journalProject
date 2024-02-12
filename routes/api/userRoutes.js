const router = require("express").Router();
const bcrypt = require("bcrypt");
const { User, Journal } = require("../../models/index");

//get all users
router.get("/", async (req, res) => {
  const userData = await User.findAll();

  return res.json(userData);
});

//get a single user
router.get("/", async (req, res) => {
  try {
    //find single user using id from url param and primary key from the model
    const userData = await User.findByPk(req.body.id, {
      include: [{ model: Journal }],
    });

    if (!userData) {
      res.status(404).json({ message: "no user found" });
      return;
    }

    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//CREATE new user
router.post("/", async (req, res) => {
  try {
    //create newUser using the req.body
    const newUser = req.body;
    //set the password on newUser to hashed password
    newUser.password = await bcrypt.hash(req.body.password, 10);
    //create new user with newUser
    const userData = await User.create(newUser);
    res.status(200).json(userData);
  } catch (err) {
    res.status(400).json(err);
  }
});

//Attempt login
router.post("/login", async (req, res) => {
  try {
    //search userData to find a user with matching email.
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(404)
        .json({ message: "Username, Email, or Password is incorrect" });
      return;
    }
    //compare password provided on req.body with password from the found userData
    const validPassword = await bcrypt.compare(
      req.body.password,
      userData.password
    );
    //if the password is invalid then return error and out of function
    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Username, Email, or Password is incorrect" });
      return;
    }
    //if password matches then return status 200 and handle logged in status on front end.
    res.status(200).json({ message: "You are now logged in!" });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
});

module.exports = router;
