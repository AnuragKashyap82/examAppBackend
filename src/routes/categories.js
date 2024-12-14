const express = require('express');
const CategoriesModel = require('../models/categoryModel');
const categoriesRouter = express.Router();

//Add Books In Library
categoriesRouter.post("/api/addCategory", async function(req, res) {
    try {
        const {  categoryName } = req.body;

        // Check if a book with the same bookNo already exists
        const existingBook = await CategoriesModel.findOne({ categoryName: categoryName });
        if (existingBook) {
            return res.status(400).json({ "status": false, msg: "Category with the same Category already exists." });
        }
        
        const category = Date.now();

        let categoriesModel = new CategoriesModel({
            _id: category,
            categoryName,
        });

        categoriesModel = await categoriesModel.save();
        res.json({ "status": true, categoriesModel });
    } catch (error) {
        res.status(500).json({ "status": false, msg: error.message });
    }
});

 categoriesRouter.get('/api/getAllCategory', async (req, res)=> {
    try {
        const categories = await CategoriesModel.find();
        res.json({"status": true, categories});
    } catch (error) {
        res.status(500).json({"status": false,error: error.message});
    }
});
 

 module.exports = categoriesRouter;