const mongoose = require("mongoose");

const minorCategoriesSchema = mongoose.Schema({
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

const MinorCategoriesModel = mongoose.model("MinorCategories", minorCategoriesSchema);
module.exports = MinorCategoriesModel;