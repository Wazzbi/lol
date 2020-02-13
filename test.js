const express = require("express");
const port = 4200;

const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "https://developer.riotgames.com");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", (req, res) => {
  res.send({ text: "text from server" });
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
