const productController = require("../controllers/addProduct");


const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const express = require("express");
const multer = require("multer");
const router = express.Router();

// Configure Cloudinary
cloudinary.config({
  cloud_name: "dpi4fpxqm",
  api_key: "277238879239755",
  api_secret: "KYq35pYaCe3e-5U0e_kG-0Z78uM",
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "menEcom",
    allowed_formats: ['jpg','png','webp']
  
  },
});

const parser = multer({ storage: storage });

router.post(
  "/addproduct",
  parser.single("pimage"),
  productController.addProduct
);

router.get("/getproduct",productController.getProduct)

module.exports = router;
