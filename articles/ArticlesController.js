const express = require('express');
const router = express.Router()
const Category = require("../categories/Category")

router.get("/artigos", (req, res) => {
    res.send("Rota de artigos");
})

router.get("/admin/artigo/new", (req, res) => {
    Category.findAll().then(categories => {
        res.render("admin/articles/new",{categories: categories});
    })
})

module.exports = router;