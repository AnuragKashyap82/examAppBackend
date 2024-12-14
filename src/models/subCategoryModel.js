const mongoose = require("mongoose");

const subCategoriesSchema = mongoose.Schema({
    _id: {
        type: String, 
        required: true
    },
    subCategoryName: {
        required: true,
        type: String,
        trim: true,
    },
});

const SubCategoriesModel = mongoose.model("SubCategories", subCategoriesSchema);
module.exports = SubCategoriesModel;