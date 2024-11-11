// server.js
// const express = require("express");
import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 3000;

// Directory path setup to work with ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the "public" directory
app.use(express.static("public"));

// Route to get the list of image files
app.get("/images", (req, res) => {
  const imagesDir = path.join(__dirname, "public/images");
  fs.readdir(imagesDir, (err, files) => {
    if (err) {
      return res.status(500).send("Unable to read images");
    }
    // Filter for image files only
    const imageFiles = files.filter((file) =>
      /\.(jpg|jpeg|png|gif)$/.test(file)
    );
    res.json(imageFiles);
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
