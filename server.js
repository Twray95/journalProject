const express = require("express");
const path = require("path");
const journalData = require("./db/post.json");
const PORT = 3001;
const api = require("./routes/index");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api", api);

app.use(express.static("public"));

//Get/Post/Put/Delete requests here

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "index.html"));
// });

app.listen(PORT, () => {
  console.log(`App listening on http://localhost:${PORT}`);
});
