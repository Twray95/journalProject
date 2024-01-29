const express = require("express");
const mysql = require("mysql2");
const path = require("path");
const PORT = 3001;
const api = require("./routes/index");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const db = mysql.createConnection(
  {
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "books_db",
  },
  console.log(`Connected to the movie_reviews_db database.`)
);

app.use("/api", api);

app.use(express.static("public"));

app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`App listening on http://localhost:${PORT}`);
});
