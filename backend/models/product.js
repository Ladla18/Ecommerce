const mongoose = require("mongoose")
const {Schema} = require("mongoose")


const ProductSchema = new Schema({
    pname : {
        type : String
    },
    pprice : {
        type : String
    },
    quantity : {
        type : String
    },
    pimage : {
        type : String
    },
    pdescription : {
        type : String,

    }
    
})

const Product = mongoose.model("Product",ProductSchema);

module.exports = Product