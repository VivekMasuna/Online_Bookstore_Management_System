const express = require('express');
const router = express.Router();
const User = require("../models/user.js");
const { saveRedirectUrl } = require('../middleware.js');
const passport = require('passport');
const wrapAsync = require('../utils/wrapAsync.js');

router.get('/signup', (req, res) => {
    res.render("users/signup.ejs");
});

router.post('/signup', wrapAsync(async (req, res, next) => {
    const { username, email, password, first_name, last_name, dob, mobile } = req.body;

    try {
        const newUser = new User({
            email: email,
            username: username,
            firstName: first_name,
            lastName: last_name,
            dob: dob,
            mobile: mobile,
        });

        let registeredUser = await User.register(newUser, password);

        req.logIn(registeredUser, (err) => {
            if (err) return next(err);
            req.flash('success', 'User registered successfully!');
            res.redirect('/');
        });
    } catch (e) {
        req.flash('error', e.message + "\nPlease try again!");
        res.redirect('/signup');
    }
}));

router.get('/login', (req, res) => {
    res.render("users/login.ejs");
});

router.post('/login', saveRedirectUrl, wrapAsync(async (req, res, next) => {
    passport.authenticate("local", async (err, user, info) => {
        if (err) {
            return next(err);
        }
        if (!user) {
            req.flash('error', 'Invalid username or password.');
            return res.redirect('/login');
        }

        req.logIn(user, (err) => {
            if (err) {
                return next(err);
            }
            req.flash("success", "Welcome to VR Bookstore!");
            let redirectUrl = res.locals.redirectUrl || "/";
            res.redirect(redirectUrl);
        });
    })(req, res, next);
}));

router.get("/logout", (req, res, next) => {
    req.logout((err) => {
        if (err) {
            next(err);
        }
        req.flash("success", "You are logged out!");
        res.redirect("/");
    });
});

module.exports = router;
