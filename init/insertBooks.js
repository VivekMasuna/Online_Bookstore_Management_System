const mongoose = require('mongoose');
const Book = require('../models/book');
require('dotenv').config();

const MONGO_URL = "mongodb://127.0.0.1:27017/OBMS";

main()
    .then((res) => {
        console.log("Connected to DB");
    })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect(MONGO_URL);
}

const booksData = [
    {
        title: "Atomic Habits",
        author: "James Clear",
        description: "An Easy & Proven Way to Build Good Habits & Break Bad Ones.",
        isbn: "9780735211292",
        category: "Self-Help",
        price: 999,
        stock_quantity: 100,
        rating: 4.8,
        publication_date: new Date("2018-10-16"),
        publisher: "Penguin",
        language: "English",
        page_count: 320,
        tags: ["habits", "self-improvement", "psychology"],
        is_featured: true,
        cover_image: {
            url: "https://res.cloudinary.com/dtxyhfoyt/image/upload/v1728402370/book_covers/atomic-habits-png-500x500_o3seu1.png",
            public_id: "book_covers/atomic-habits-png-500x500_o3seu1"
        }
    },
    {
        title: "Sapiens: A Brief History of Humankind",
        author: "Yuval Noah Harari",
        description: "Exploring the history of humanity, from the Stone Age to modern times.",
        isbn: "9780062316097",
        category: "History",
        price: 899,
        stock_quantity: 75,
        rating: 4.7,
        publication_date: new Date("2015-02-10"),
        publisher: "Harper Perennial",
        language: "English",
        page_count: 498,
        tags: ["history", "anthropology", "philosophy"],
        is_featured: true,
        cover_image: {
            url: "https://res.cloudinary.com/dtxyhfoyt/image/upload/v1728402369/book_covers/453-4539920_a-brief-history-sapiens-book-hardcover-sapiens-a_zovbwa.png",
            public_id: "book_covers/453-4539920_a-brief-history-sapiens-book-hardcover-sapiens-a_zovbwa"
        }
    },
    {
        title: "The Midnight Library",
        author: "Matt Haig",
        description: "A novel about all the lives you could live and what happens between life and death.",
        isbn: "9780525559474",
        category: "Fiction",
        price: 599,
        stock_quantity: 120,
        rating: 4.2,
        publication_date: new Date("2020-09-29"),
        publisher: "Viking",
        language: "English",
        page_count: 304,
        tags: ["fiction", "fantasy", "mental-health"],
        is_featured: true,
        cover_image: {
            url: "https://res.cloudinary.com/dtxyhfoyt/image/upload/v1728402373/book_covers/The-Midnight-Library_small_dxueey.png",
            public_id: "book_covers/The-Midnight-Library_small_dxueey"
        }
    },
    {
        title: "Becoming",
        author: "Michelle Obama",
        description: "A memoir by the former First Lady of the United States.",
        isbn: "9781524763138",
        category: "Biography",
        price: 799,
        stock_quantity: 85,
        rating: 4.9,
        publication_date: new Date("2018-11-13"),
        publisher: "Crown Publishing Group",
        language: "English",
        page_count: 448,
        tags: ["biography", "memoir", "politics"],
        cover_image: {
            url: "https://res.cloudinary.com/dtxyhfoyt/image/upload/v1728402362/book_covers/becoming-cover_uxskna.png",
            public_id: "book_covers/becoming-cover_uxskna"
        }
    },
    {
        title: "Educated: A Memoir",
        author: "Tara Westover",
        description: "A memoir about growing up in a strict and abusive household in rural Idaho but eventually escaping through education.",
        isbn: "9780399590504",
        category: "Memoir",
        price: 699,
        stock_quantity: 60,
        rating: 4.7,
        publication_date: new Date("2018-02-20"),
        publisher: "Random House",
        language: "English",
        page_count: 352,
        tags: ["memoir", "inspiration", "non-fiction"],
        cover_image: {
            url: "https://res.cloudinary.com/dtxyhfoyt/image/upload/v1728402374/book_covers/educated2-768x768_sb0c8g.png",
            public_id: "book_covers/educated2-768x768_sb0c8g"
        }
    },
    {
        title: "Where the Crawdads Sing",
        author: "Delia Owens",
        description: "A coming-of-age mystery set in the 1950s and 1960s in the rural South.",
        isbn: "9780735219106",
        category: "Fiction",
        price: 599,
        stock_quantity: 90,
        rating: 4.5,
        publication_date: new Date("2018-08-14"),
        publisher: "G.P. Putnam's Sons",
        language: "English",
        page_count: 368,
        tags: ["fiction", "mystery", "southern-gothic"],
        cover_image: {
            url: "https://res.cloudinary.com/dtxyhfoyt/image/upload/v1728402381/book_covers/Where-The-crawdads-Sing_ufwwoi.png",
            public_id: "book_covers/Where-The-crawdads-Sing_ufwwoi"
        }
    },
    {
        title: "The Silent Patient",
        author: "Alex Michaelides",
        description: "A psychological thriller about a woman who shoots her husband and never speaks again.",
        isbn: "9781250301697",
        category: "Thriller",
        price: 499,
        stock_quantity: 95,
        rating: 4.1,
        publication_date: new Date("2019-02-05"),
        publisher: "Celadon Books",
        language: "English",
        page_count: 336,
        tags: ["thriller", "psychological", "suspense"],
        cover_image: {
            url: "https://res.cloudinary.com/dtxyhfoyt/image/upload/v1728402376/book_covers/the-silent-patient-cover_tjtffp.png",
            public_id: "book_covers/the-silent-patient-cover_tjtffp"
        }
    },
    {
        title: "The Four Winds",
        author: "Kristin Hannah",
        description: "A historical fiction novel set during the Great Depression.",
        isbn: "9781250178602",
        category: "Historical Fiction",
        price: 899,
        stock_quantity: 70,
        rating: 4.6,
        publication_date: new Date("2021-02-02"),
        publisher: "St. Martin's Press",
        language: "English",
        page_count: 464,
        tags: ["historical-fiction", "depression-era", "family"],
        cover_image: {
            url: "https://res.cloudinary.com/dtxyhfoyt/image/upload/v1728402379/book_covers/the-four-winds-by-kristin-hannah_olvlll.png",
            public_id: "book_covers/the-four-winds-by-kristin-hannah_olvlll"
        }
    },
    {
        title: "The Alchemist",
        author: "Paulo Coelho",
        description: "A philosophical novel about following your dreams.",
        isbn: "9780062315007",
        category: "Fiction",
        price: 399,
        stock_quantity: 150,
        rating: 4.7,
        publication_date: new Date("1988-04-15"),
        publisher: "HarperOne",
        language: "English",
        page_count: 208,
        tags: ["philosophy", "fiction", "spirituality"],
        cover_image: {
            url: "https://res.cloudinary.com/dtxyhfoyt/image/upload/v1728402378/book_covers/5087_520_640_ulq7wk.png",
            public_id: "book_covers/5087_520_640_ulq7wk"
        }
    },
    {
        title: "1984",
        author: "George Orwell",
        description: "A dystopian social science fiction novel and cautionary tale about the future.",
        isbn: "9780451524935",
        category: "Dystopian",
        price: 299,
        stock_quantity: 200,
        rating: 4.9,
        publication_date: new Date("1949-06-08"),
        publisher: "Signet Classics",
        language: "English",
        page_count: 328,
        tags: ["dystopian", "politics", "philosophy"],
        cover_image: {
            url: "https://res.cloudinary.com/dtxyhfoyt/image/upload/v1728402378/book_covers/george-orwell-1984-14663-950x950_ramsgy.png",
            public_id: "book_covers/george-orwell-1984-14663-950x950_ramsgy"
        }
    },
    {
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        description: "A novel about teenage rebellion and alienation.",
        isbn: "9780316769488",
        category: "Fiction",
        price: 399,
        stock_quantity: 130,
        rating: 4.3,
        publication_date: new Date("1951-07-16"),
        publisher: "Little, Brown and Company",
        language: "English",
        page_count: 277,
        tags: ["fiction", "classic", "young-adult"],
        cover_image: {
            url: "https://res.cloudinary.com/dtxyhfoyt/image/upload/v1728402372/book_covers/download_yalhuz.png",
            public_id: "book_covers/download_yalhuz"
        }
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        description: "A novel about racial injustice in the Deep South.",
        isbn: "9780061120084",
        category: "Fiction",
        price: 499,
        stock_quantity: 100,
        rating: 4.8,
        publication_date: new Date("1960-07-11"),
        publisher: "J.B. Lippincott & Co.",
        language: "English",
        page_count: 336,
        tags: ["fiction", "classic", "social-issues"],
        cover_image: {
            url: "https://res.cloudinary.com/dtxyhfoyt/image/upload/v1728402377/book_covers/mockingbird_furtim.png",
            public_id: "book_covers/mockingbird_furtim"
        }
    },
    {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        description: "A romantic novel of manners.",
        isbn: "9780141040349",
        category: "Romance",
        price: 350,
        stock_quantity: 80,
        rating: 4.6,
        publication_date: new Date("1813-01-28"),
        publisher: "T. Egerton",
        language: "English",
        page_count: 432,
        tags: ["romance", "classic", "society"],
        is_featured: true,
        cover_image: {
            url: "https://res.cloudinary.com/dtxyhfoyt/image/upload/v1728402377/book_covers/prideandprejudice_print_exlarge_PNG-400x400_aoiswx.png",
            public_id: "book_covers/prideandprejudice_print_exlarge_PNG-400x400_aoiswx"
        }
    },
    {
        title: "The Subtle Art of Not Giving a F*ck",
        author: "Mark Manson",
        description: "A counterintuitive approach to living a good life.",
        isbn: "9780062457714",
        category: "Self-Help",
        price: 699,
        stock_quantity: 120,
        rating: 4.2,
        publication_date: new Date("2016-09-13"),
        publisher: "HarperOne",
        language: "English",
        page_count: 224,
        tags: ["self-help", "psychology", "personal-development"],
        is_featured: true,
        cover_image: {
            url: "https://res.cloudinary.com/dtxyhfoyt/image/upload/v1728402379/book_covers/the-subtle-art-of-not-giving-a-fck-a-counterintuitive-approach-to-living-a-good-life-10023591-550x550h_qwlvfh.png",
            public_id: "book_covers/the-subtle-art-of-not-giving-a-fck-a-counterintuitive-approach-to-living-a-good-life-10023591-550x550h_qwlvfh"
        }
    },
    {
        title: "The Power of Now",
        author: "Eckhart Tolle",
        description: "A guide to spiritual enlightenment.",
        isbn: "9781577314806",
        category: "Spirituality",
        price: 499,
        stock_quantity: 90,
        rating: 4.7,
        publication_date: new Date("1997-10-06"),
        publisher: "New World Library",
        language: "English",
        page_count: 236,
        tags: ["spirituality", "self-help", "mindfulness"],
        is_featured: true,
        cover_image: {
            url: "https://res.cloudinary.com/dtxyhfoyt/image/upload/v1728402373/book_covers/the-power-of-now-by-eckhart-tolle_oe1h6z.png",
            public_id: "book_covers/the-power-of-now-by-eckhart-tolle_oe1h6z"
        }
    },
    {
        title: "The Road",
        author: "Cormac McCarthy",
        description: "A post-apocalyptic novel about a father and son’s journey through a desolate world.",
        isbn: "9780307387899",
        category: "Dystopian",
        price: 399,
        stock_quantity: 110,
        rating: 4.4,
        publication_date: new Date("2006-09-26"),
        publisher: "Knopf",
        language: "English",
        page_count: 287,
        tags: ["dystopian", "fiction", "post-apocalyptic"],
        cover_image: {
            url: "https://res.cloudinary.com/dtxyhfoyt/image/upload/v1728402377/book_covers/The-Road_qglhvx.png",
            public_id: "book_covers/The-Road_qglhvx"
        }
    },
    {
        title: "The Giver",
        author: "Lois Lowry",
        description: "A dystopian novel about a boy's discovery of the dark secrets of his society.",
        isbn: "9780544336261",
        category: "Dystopian",
        price: 450,
        stock_quantity: 125,
        rating: 4.5,
        publication_date: new Date("1993-04-26"),
        publisher: "Houghton Mifflin",
        language: "English",
        page_count: 240,
        tags: ["dystopian", "fiction", "society"],
        cover_image: {
            url: "https://res.cloudinary.com/dtxyhfoyt/image/upload/v1728402379/book_covers/The-Giver_dv5kvv.png",
            public_id: "book_covers/The-Giver_dv5kvv"
        }
    },
    {
        title: "The Book Thief",
        author: "Markus Zusak",
        description: "A historical novel set in Nazi Germany, narrated by Death.",
        isbn: "9780375842207",
        category: "Historical Fiction",
        price: 650,
        stock_quantity: 130,
        rating: 4.6,
        publication_date: new Date("2005-03-14"),
        publisher: "Knopf",
        language: "English",
        page_count: 552,
        tags: ["historical-fiction", "war", "nazi-germany"],
        cover_image: {
            url: "https://res.cloudinary.com/dtxyhfoyt/image/upload/v1728402380/book_covers/the-book-thief-by-markus-zusak_z5nuki.png",
            public_id: "book_covers/the-book-thief-by-markus-zusak_z5nuki"
        }
    }
];

async function insertBooks() {
    for (let book of booksData) {
        try {
            const newBook = new Book(book);
            await newBook.save();
            console.log(`${book.title} added successfully!`);
        } catch (error) {
            console.error(`Error adding ${book.title}:`, error);
        }
    }

    mongoose.connection.close();
}

insertBooks();
