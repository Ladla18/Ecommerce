const Product = require("../models/product")


module.exports.addProduct = async(req,res)=>{
    console.log("Addproduct Called");

    try {
        const { pname, pdescription, quantity, pprice } = req.body; ; 
        const pimage = req.file.path ; 
        const product = new Product({
          pname,
          pprice,
          quantity,
          pdescription,
          pimage,
        });
          const savedProduct =  await product.save()
        res.status(201).json({message:"Product Added Successfully"})
    } catch (error) {
        console.error("addProduct.js", " :: Error ❌ : ", error);
    }

}

module.exports.getProduct = async(req,res)=>{
  console.log("getProduct Called");
  try {
        const productDetail  = await Product.find();
        res.status(200).json(productDetail)
  } catch (error) {
      console.error("addProduct.js", " :: Error ❌ : ", error);
  }

}