const express = require("express");
const app = express();
const bodyParser = require("body-parser")

// View engine
app.set('view engine', 'ejs');

//Body-parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Static
app.use(express.static('public'));

app.get("/", (req, res) => {
    res.render("index")
});

app.listen(8080, () => {
    console.log("server started")
});