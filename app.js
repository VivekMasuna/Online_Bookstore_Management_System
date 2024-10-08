require('dotenv').config()

const express = require("express");
const app = express();
const path = require("path");
const port = 8080;
const mongoose = require('mongoose');
const methodOverride = require("method-override");
const bodyParser = require('body-parser');
const cors = require('cors');
const ejsMate = require("ejs-mate");
const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require("connect-flash");
const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require("./models/user.js");
const Admin = require("./models/admin.js");

const homeRouter = require('./routes/home.js');
const userRouter = require('./routes/user.js');
const forgotRouter = require('./routes/forgot.js');
const adminRouter = require('./routes/admin.js');

const MONGO_URL = process.env.DATABASE;

main()
    .then((res) => {
        console.log("Connected to DB");
    })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect(MONGO_URL);
}

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "/public/css")));
app.use(express.static(path.join(__dirname, "/public/js")));
app.use(express.static(path.join(__dirname, "/public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));
app.engine('ejs', ejsMate);

const store = MongoStore.create({
    mongoUrl: MONGO_URL,
    crypto: {
        secret: process.env.SECRET,
    },
    touchAfter: 24 * 3600,
});

store.on("error", () => {
    console.log("ERROR in MONGO SESSION STORE", err);
});

const sessionOptions = {
    store,
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: false, //
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
    }
};

app.use(session(sessionOptions));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.use('admin-local', new LocalStrategy(Admin.authenticate()));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    try {
        let user = await User.findById(id);
        if (!user) {
            user = await Admin.findById(id);
        }
        done(null, user);
    } catch (err) {
        done(err);
    }
});

app.use((req, res, next) => {
    if (req.isAuthenticated() && req.user instanceof Admin) {
        req.admin = req.user;
    }
    next();
});

app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currUser = req.user;
    res.locals.currAdmin = req.admin;
    next();
});

app.use('/', homeRouter);
app.use('/', userRouter);
app.use('/', forgotRouter);
app.use('/admin', adminRouter);

app.use((err, req, res, next) => {
    let {statusCode=500, message="Something went wrong!"} = err;
    req.flash('error', message);
    res.status(statusCode).redirect(req.get('referer') || '/');
});

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});
