const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;

app.use(express.static(__dirname));

app.get("/", (req, res) => {
  //   res.json({
  //     message: "Hello, world!",
  //   });
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
