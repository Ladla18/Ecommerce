const Product = require("../models/product");

module.exports.addProduct = async (req, res) => {
  console.log("Addproduct Called");

  try {
    const { pname, pdescription, quantity, pprice } = req.body;
    const pimage = req.file.path;
    const product = new Product({
      pname,
      pprice,
      quantity,
      pdescription,
      pimage,
    });
    const savedProduct = await product.save();
    res.status(201).json({ message: "Product Added Successfully" });
  } catch (error) {
    console.error("addProduct.js", " :: Error ❌ : ", error);
  }
};

module.exports.getProduct = async (req, res) => {
  try {
    const productDetail = await Product.find();
    res.status(200).json(productDetail);
  } catch (error) {
    console.error("addProduct.js", " :: Error ❌ : ", error);
  }
};

module.exports.deleteProduct = async (req, res) => {
  console.log("deleteProduct Called");

  try {
    const pid = req.params.pid;
    const deleteProduct = await Product.findByIdAndDelete(pid);
    console.log("deleted");
    res.status(200).json({ message: "Product Deleted Successfully" });
  } catch (error) {
    console.error("addProduct.js", " :: Error ❌ : ", error);
  }
};

module.exports.getproductbyid = async (req, res) => {
  console.log("getproductbyid Called");

  try {
    const pid = req.params.pid;

    const productByEl = await Product.findOne({ _id: pid });
    console.log(productByEl);
    res.status(200).json(productByEl);
  } catch (error) {
    console.error("addProduct.js", " :: Error ❌ : ", error);
  }
};
module.exports.updateProduct = async (req, res) => {
  console.log("updateProduct Called");

  try {
    const pid = req.params.pid;
    const { pname, pdescription, quantity, pprice } = req.body;
    const pimage = req.file.path;
    console.log(pname, pdescription, quantity, pprice, pimage,pid);

    const updateProduct = await Product.findByIdAndUpdate(pid, {
     pname : pname , 
     pdescription : pdescription ,
     quantity : quantity ,
     pprice : pprice ,
     pimage : pimage ,
     

    });
    res.json(updateProduct)
  } catch (error) {
    console.error("addProduct.js", " :: Error ❌ : ", error);
  }
};
