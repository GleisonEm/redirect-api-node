const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 5001;

const app = express()
  .use(express.static(path.join(__dirname, "public")))
  .set("views", path.join(__dirname, "views"))
  .set("view engine", "ejs");

app.get("/redirect/:fileId", (req, res) => {
  const fileId = req.params.fileId;

  if (!fileId) {
    res.status(422).send({ message: "File ID is required" });
  }

  return res.redirect("http://145.14.134.34:3021/api/users/download/" + fileId);
});

app.get("/", (req, res) => res.render("pages/index"));

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
