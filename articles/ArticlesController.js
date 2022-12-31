const express = require('express');
const router = express.Router()

router.get("/artigos", (req, res) => {
    res.send("Rota de artigos")
})

router.get("/admin/artigo/new", (req, res) => {
    res.send("Rota para criar um novo artigo!")
})

module.exports = router;