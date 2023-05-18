const express = require("express");
const app = express();
const bodyParser = require("body-parser")
const connection = require("./database/database")

const categoriesController = require("./categories/CategoriesController")
const articlesController = require("./articles/ArticlesController")
const Articles = require("./articles/Article");
const Categories = require("./categories/Category");
const Article = require("./articles/Article");

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
    Articles.findAll().then(articles => {
        res.render("index", {articles: articles})
    })
});

app.get("/:slug", (req, res) => {
    let slug = req.params.slug
    Article.findOne({
        where: {
            slug: slug
        }
    }).then(article => {
        if(article != undefined){
            res.render("article", {article: article})
        }else{
            res.redirect("/")
        }
    }).catch(err => {
        res.redirect("/")
    })
})

app.listen(8080, () => {
    console.log("server started")
});