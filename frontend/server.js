// server.js
const express = require("express");
const multer = require("multer");
const data_product = require("./src/Components/Assets/data");

const app = express();
const port = 5000;

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads"); // Upload directory
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname); // Save with original filename
  },
});
const upload = multer({ storage });

// Upload endpoint
app.post("/upload", upload.single("image"), (req, res) => {
  const uploadedFile = req.file;
  if (!uploadedFile) {
    return res.status(400).json({ error: "No file uploaded" });
  }

  console.log("Uploaded file:", uploadedFile.originalname);

  // Check if the uploaded image matches a product in data_product
  const product = data_product.find(
    (item) => item.image === uploadedFile.originalname
  );

  if (product) {
    res.json({ message: "Product found", product });
  } else {
    res.json({ message: "No matching product found" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
