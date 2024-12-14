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
});

const PdfModel = mongoose.model("Pdf", pdfSchema);
module.exports = PdfModel;