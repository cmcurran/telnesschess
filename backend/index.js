const axios = require("axios");
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync("db.json");
const db = low(adapter);

// db.set("wtf", []).write();
// db.set("lol", "no idea").write();

for (let i = 1; i < 401; i++) {
  db.set(i, []).write();
}

// const config = {
//   Authorization: "Bearer 1/1172738419949136:1a2bb6f425e50a41da484bd6a6c1367b",
// };

// axios
//   .get("https://app.asana.com/api/1.0/tasks/1177038805107289/subtasks", config)
//   .then((data) => console.log(data))
//   .catch((e) => console.log("FAIL", e));
