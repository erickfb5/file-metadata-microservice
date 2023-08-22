require("dotenv").config();
const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const app = express();
const { uploadFile } = require("./uploadFile.js");

app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = path.join(__dirname, "uploads");
    if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => cb(null, file.originalname),
});

const upload = multer({ storage });

app.get("^/$|/index(.html)?", (req, res) => res.sendFile(path.join(__dirname, "views", "index.html"))
);
app.post("/api/fileanalyse", upload.single("upfile"), uploadFile);

app.all('*', (req, res) => {
  res.status(404);
  if (req.accepts('html')) {
      res.sendFile(path.join(__dirname, 'views', '404.html'));
  } else if (req.accepts('json')) {
      res.json({ "error": "404 Not Found" });
  } else {
      res.type('txt').send("404 Not Found");
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Your app is listening on port ${PORT}`));