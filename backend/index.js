const axios = require("axios");
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const express = require("express");

const adapter = new FileSync("db.json");
const db = low(adapter);
const app = express();
const port = 3000;

const gameBoardTemplate = [
  [
    { position: [0, 0], move: null },
    { position: [0, 1], move: null },
    { position: [0, 2], move: null },
    { position: [0, 3], move: null },
    { position: [0, 4], move: null },
    { position: [0, 5], move: null },
    { position: [0, 6], move: null },
    { position: [0, 7], move: null },
    { position: [0, 8], move: null },
    { position: [0, 9], move: null },
  ],
  [
    { position: [1, 0], move: null },
    { position: [1, 1], move: null },
    { position: [1, 2], move: null },
    { position: [1, 3], move: null },
    { position: [1, 4], move: null },
    { position: [1, 5], move: null },
    { position: [1, 6], move: null },
    { position: [1, 7], move: null },
    { position: [1, 8], move: null },
    { position: [1, 9], move: null },
  ],
  [
    { position: [2, 0], move: null },
    { position: [2, 1], move: null },
    { position: [2, 2], move: null },
    { position: [2, 3], move: null },
    { position: [2, 4], move: null },
    { position: [2, 5], move: null },
    { position: [2, 6], move: null },
    { position: [2, 7], move: null },
    { position: [2, 8], move: null },
    { position: [2, 9], move: null },
  ],
  [
    { position: [3, 0], move: null },
    { position: [3, 1], move: null },
    { position: [3, 2], move: null },
    { position: [3, 3], move: null },
    { position: [3, 4], move: null },
    { position: [3, 5], move: null },
    { position: [3, 6], move: null },
    { position: [3, 7], move: null },
    { position: [3, 8], move: null },
    { position: [3, 9], move: null },
  ],
  [
    { position: [4, 0], move: null },
    { position: [4, 1], move: null },
    { position: [4, 2], move: null },
    { position: [4, 3], move: null },
    { position: [4, 4], move: null },
    { position: [4, 5], move: null },
    { position: [4, 6], move: null },
    { position: [4, 7], move: null },
    { position: [4, 8], move: null },
    { position: [4, 9], move: null },
  ],
  [
    { position: [5, 0], move: null },
    { position: [5, 1], move: null },
    { position: [5, 2], move: null },
    { position: [5, 3], move: null },
    { position: [5, 4], move: null },
    { position: [5, 5], move: null },
    { position: [5, 6], move: null },
    { position: [5, 7], move: null },
    { position: [5, 8], move: null },
    { position: [5, 9], move: null },
  ],
  [
    { position: [6, 0], move: null },
    { position: [6, 1], move: null },
    { position: [6, 2], move: null },
    { position: [6, 3], move: null },
    { position: [6, 4], move: null },
    { position: [6, 5], move: null },
    { position: [6, 6], move: null },
    { position: [6, 7], move: null },
    { position: [6, 8], move: null },
    { position: [6, 9], move: null },
  ],
  [
    { position: [7, 0], move: null },
    { position: [7, 1], move: null },
    { position: [7, 2], move: null },
    { position: [7, 3], move: null },
    { position: [7, 4], move: null },
    { position: [7, 5], move: null },
    { position: [7, 6], move: null },
    { position: [7, 7], move: null },
    { position: [7, 8], move: null },
    { position: [7, 9], move: null },
  ],
  [
    { position: [8, 0], move: null },
    { position: [8, 1], move: null },
    { position: [8, 2], move: null },
    { position: [8, 3], move: null },
    { position: [8, 4], move: null },
    { position: [8, 5], move: null },
    { position: [8, 6], move: null },
    { position: [8, 7], move: null },
    { position: [8, 8], move: null },
    { position: [8, 9], move: null },
  ],
  [
    { position: [9, 0], move: null },
    { position: [9, 1], move: null },
    { position: [9, 2], move: null },
    { position: [9, 3], move: null },
    { position: [9, 4], move: null },
    { position: [9, 5], move: null },
    { position: [9, 6], move: null },
    { position: [9, 7], move: null },
    { position: [9, 8], move: null },
    { position: [9, 9], move: null },
  ],
];

app.get("/", (req, res) => {
  res.send("hi friend :)");
});

app.get("/startgame", (req, res) => {
  res.send(gameBoardTemplate);
});

app.get("/checkdb", (req, res) => {
  res.send(db.read());
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
