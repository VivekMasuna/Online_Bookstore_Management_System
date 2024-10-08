const express = require('express');
const router = express.Router();
const Book = require('../models/book');

router.get("/", async (req, res) => {
    const featuredBooks = await Book.find({ is_featured: true }).limit(5);
    res.render('index.ejs', { featuredBooks });
});

module.exports = router;
