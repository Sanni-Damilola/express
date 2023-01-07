const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json([{ name: "Dami" }, { name: "sanni" }]);
});

app.listen(1003, () => {
  console.log("done");
});


