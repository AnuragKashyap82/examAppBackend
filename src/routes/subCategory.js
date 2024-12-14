const express = require('express');
const SubCategoriesModel = require('../models/subCategoryModel');
const subCategoriesRouter = express.Router();

//Add Books In Library
subCategoriesRouter.post("/api/addSubCategory", async function(req, res) {
    try {
        const {  subCategoryName } = req.body;

        // Check if a book with the same bookNo already exists
        const existingBook = await SubCategoriesModel.findOne({ subCategoryName: subCategoryName });
        if (existingBook) {
            return res.status(400).json({ "status": false, msg: "Category with the same Category already exists." });
        }
        
        const category = Date.now();

        let subCategoriesModel = new SubCategoriesModel({
            _id: category,
            subCategoryName,
        });

        subCategoriesModel = await subCategoriesModel.save();
        res.json({ "status": true, subCategoriesModel });
    } catch (error) {
        res.status(500).json({ "status": false, msg: error.message });
    }
});

subCategoriesRouter.get('/api/getAllSubCategory', async (req, res)=> {
    try {
        const categories = await SubCategoriesModel.find();
        res.json({"status": true, categories});
    } catch (error) {
        res.status(500).json({"status": false,error: error.message});
    }
});
 

 module.exports = subCategoriesRouter;