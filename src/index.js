const express  = require("express");
const mongoose  = require("mongoose");
const categoriesRouter = require("./routes/categories");
const subCategoriesRouter = require("./routes/subCategory");
const pdfRouter = require("./routes/pdf");
const minorCategoryRouter = require("./routes/minorCategories");

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(categoriesRouter);
app.use(subCategoriesRouter);
app.use(minorCategoryRouter);
app.use(pdfRouter);


const DB = "mongodb+srv://akashyap815353:4YdYtXKtzatPURzg@cluster.efxvy.mongodb.net/examAppDataBase";
// const DB = "mongodb+srv://akashyap815353:4YdYtXKtzatPURzg@cluster.efxvy.mongodb.net/examAppDataBase?retryWrites=true&w=majority&appName=Cluster";

app.get("/", function(req, res){
  const response = { statuscode: res.statusCode, message: "API Works!!!"};
  res.json(response);
});

mongoose.connect(DB).then(() => {
    console.log("MongoDB Connection Successfull");
}).catch((err) => {
    console.log(err);
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`connected at port ${PORT}`);

});

