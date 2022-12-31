const express = require("express");
const app = express();
const bodyParser = require("body-parser")
const connection = require("./database/database")

const categoriesController = require("./categories/CategoriesController")
const articlesController = require("./articles/ArticlesController")
const Articles = require("./articles/Article");
const Categories = require("./categories/Category");

// View engine
app.set('view engine', 'ejs');

//Body-parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Static
app.use(express.static('public'));

connection
    .authenticate()
    .then(() => {
        console.log("Conexão bem sucessida")
    })
    .catch((error) => {
        console.log(error)
    })

app.use("/", categoriesController)
app.use("/", articlesController)

app.get("/", (req, res) => {
    res.render("index")
});

app.listen(8080, () => {
    console.log("server started")
});