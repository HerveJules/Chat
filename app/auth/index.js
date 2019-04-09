'use strict';

const passport =require('passport');
const config = require('../config');
const FacebookStrategy = require('passport-facebook').Strategy;
const h = require('../index.js');

module.exports =() => {
    passport.serializeUser((user,done) => {
        done(null,user.id);
    })
    passport.deserializeUser(id,done => {
        h.findById(id)
            .then(user => done(null,user))
            .catch(error => {
                console.error(error);
            })
    })
}

module.exports = () => {
    let authprecessor = (accessToken, RefreshToken,profile,done) => {
         
    }
    passport.use(new FacebookStrategy(config.fb,authprecessor))
}