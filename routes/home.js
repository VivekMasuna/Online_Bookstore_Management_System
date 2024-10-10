const express = require('express');
const multer = require('multer');
const router = express.Router();
const Book = require('../models/book');
const { isLoggedIn } = require('../middleware');
const { storage, cloudinary } = require('../cloudConfig');
const upload = multer({ storage: storage });

router.get("/", async (req, res) => {
    const featuredBooks = await Book.find({ is_featured: true }).limit(5);
    res.render('index.ejs', { featuredBooks });
});

router.get("/cart", isLoggedIn, async (req, res) => {
    res.send("This is your Cart");
});

router.get('/shop', async (req, res) => {
    try {
        const { category, priceMin, priceMax, author, ratings } = req.query;

        let filters = {};
        if (category) {
            filters.category = category;
        }
        if (priceMin || priceMax) {
            filters.price = {};
            if (priceMin) filters.price.$gte = Number(priceMin); // Minimum price
            if (priceMax) filters.price.$lte = Number(priceMax); // Maximum price
        }
        if (author) {
            filters.author = { $regex: new RegExp(author, 'i') }; // Case-insensitive regex search
        }
        if (ratings) {
            filters.rating = { $gte: Number(ratings) }; // Minimum rating
        }

        const books = await Book.find(filters);

        res.render('shop.ejs', { books });
    } catch (err) {
        req.flash('error', `Error fetching books: ${err}`);
        res.redirect('/');
    }
});

router.get("/shop/new", isLoggedIn, (req, res) => {
    res.render('admin/new.ejs');
});

router.post('/shop/new', upload.single('cover_image'), async (req, res) => {
    try {
        const {
            title,
            author,
            description,
            isbn,
            category,
            price,
            stock_quantity,
            publisher,
            language,
            page_count
        } = req.body;

        const newBook = new Book({
            title,
            author,
            description,
            isbn,
            category,
            price,
            stock_quantity,
            publisher,
            language,
            page_count,
            cover_image: { url: req.file.path, public_id: req.file.filename }
        });

        await newBook.save();
        req.flash('success', `The Book ${title} is inserted successfully!`);
        res.redirect('/shop');
    } catch (error) {
        req.flash('error', `Error adding the book: ${error}`);
        res.redirect('/shop/new');
    }
});

module.exports = router;
