const mongoose = require("mongoose");

const pdfSchema = mongoose.Schema({
    _id: {
        type: String, 
        required: true
    },
    pdfUrl: {
        required: true,
        type: String,
        trim: true,
    },
    pdfName: {
        required: true,
        type: String,
        trim: true,
    },
    category: {
        required: true,
        type: String,
        trim: true,
    },
    subCategory: {
        required: true,
        type: String,
        trim: true,
    },
    minorCategory: {
        required: true,
        type: String,
        trim: true,
    },
});

const PdfModel = mongoose.model("Pdf", pdfSchema);
module.exports = PdfModel;