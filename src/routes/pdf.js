const express = require('express');
const PdfModel = require('../models/pdfModel');
const pdfRouter = express.Router();

//Add Books In Library
pdfRouter.post("/api/addPdf", async function(req, res) {
    try {
        const {  pdfUrl } = req.body;

        // Check if a book with the same bookNo already exists
        const existingBook = await PdfModel.findOne({ pdfUrl: pdfUrl });
        if (existingBook) {
            return res.status(400).json({ "status": false, msg: "Pdf with the same Url already exists." });
        }
        
        const pdfId = Date.now();

        let pdfModel = new PdfModel({
            _id: pdfId,
            pdfUrl,
        });

        pdfModel = await pdfModel.save();
        res.json({ "status": true, pdfModel });
    } catch (error) {
        res.status(500).json({ "status": false, msg: error.message });
    }
});

pdfRouter.get('/api/getAllPdf', async (req, res)=> {
    try {
        const pdf = await PdfModel.find();
        res.json({"status": true, pdf});
    } catch (error) {
        res.status(500).json({"status": false,error: error.message});
    }
});
 

 module.exports = pdfRouter;