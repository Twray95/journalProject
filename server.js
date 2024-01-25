const express = require("express");
const path = require("path");
const journalData = require("./db/post.json");
const PORT = 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//Get/Post/Put/Delete requests here

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/journals", (req, res) => {
  res.json(journalData);
});

app.listen(PORT, () => {
  console.log(`App listening on http://localhost:${PORT}`);
});
