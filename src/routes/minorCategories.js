const express = require('express');
const MinorCategoriesModel = require('../models/minorCategoriesModel');
const categoriesRouter = express.Router();

//Add Books In Library
categoriesRouter.post("/api/addMinorCategory", async function(req, res) {
    try {
        const {  categoryName } = req.body;

        // Check if a book with the same bookNo already exists
        const existingBook = await MinorCategoriesModel.findOne({ categoryName: categoryName });
        if (existingBook) {
            return res.status(400).json({ "status": false, msg: "Minor Category with the same Category already exists." });
        }
        
        const category = Date.now();

        let minorCategoriesModel = new MinorCategoriesModel({
            _id: category,
            categoryName,
        });

        minorCategoriesModel = await minorCategoriesModel.save();
        res.json({ "status": true, minorCategoriesModel });
    } catch (error) {
        res.status(500).json({ "status": false, msg: error.message });
    }
});

 categoriesRouter.get('/api/getAllMinorCategory', async (req, res)=> {
    try {
        const categories = await MinorCategoriesModel.find();
        res.json({"status": true, categories});
    } catch (error) {
        res.status(500).json({"status": false,error: error.message});
    }
});
 

 module.exports = categoriesRouter;