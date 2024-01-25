const express = require("express");
const path = require("path");
const postData = require("./data/post.json");
const PORT = 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//Get/Post/Put/Delete requests here

app.listen(PORT, () => {
  console.log(`App listening on http://localhost:${PORT}`);
});
