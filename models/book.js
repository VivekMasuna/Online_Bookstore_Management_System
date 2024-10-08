const mongoose = require('mongoose');
const { Schema } = mongoose;

const bookSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    author: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    isbn: {
        type: String,
        unique: true,
        required: true
    },
    category: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    stock_quantity: {
        type: Number,
        required: true,
        min: 0
    },
    rating: {
        type: Number,
        min: 0,
        max: 5,
        default: 0
    },
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review"
        }
    ],
    publication_date: {
        type: Date,
        default: Date.now
    },
    publisher: {
        type: String,
        trim: true
    },
    language: {
        type: String,
        trim: true
    },
    page_count: {
        type: Number,
        min: 0
    },
    cover_image: {
        url: {
            type: String,
            required: true
        },
        public_id: {
            type: String,
            required: true
        }
    },
    is_featured: {
        type: Boolean,
        default: false
    },
    tags: {
        type: [String],
        default: []
    }
}, { timestamps: true });

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
