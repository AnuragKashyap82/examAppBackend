const mongoose = require("mongoose");

const categoriesSchema = mongoose.Schema({
    _id: {
        type: String, 
        required: true
    },
    categoryName: {
        required: true,
        type: String,
        trim: true,
    },
});

const CategoriesModel = mongoose.model("Categories", categoriesSchema);
module.exports = CategoriesModel;