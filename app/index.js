'use strict';

const router = require('express').Router();
const db = require('./db');
const passport = require ('passport');
require ('./auth')();

router.get('/',(req,res,next) =>{
    res.render('login');
})
router.get('/rooms',(req,res,next) => {
    res.render('rooms');
})
router.get('/chat',(req,res,next) => {
    res.render('chatroom');
})
router.get('/auth/facebook', passport.authenticate('facebook'));
router.get('/auth/facebook/callback',passport.authenticate('facebook', {
    successRedirect:'/rooms',
    failureRedirect:'/'
}))



let findOne = profileID => {
    db.userModel.findOne({
        'profileId':profileID
    })
}

let createNewUser = profile => {
    return new Promise((resolve,reject) => {
        let newChatUser = db.userModel({
            profileId:profile.id,
            fullName:profile.displayName,
            profilePic:profile.photos[0].value || ''
        })
        newChatUser.save(error => {
            if (error) {
                console.error('create new user',error);
                reject(error);
            }else{
                resolve(newChatUser)
            }
        });
        
    })
}

let findById = id => {
    return new Promise((resolve,reject) => {
        db.userModel.findById(id, (error,user) => {
            if (error) {
                reject(error);
            }else{
                resolve(user);
            }
        })
    })
}

module.exports ={
    router,
    session:require('./session'),
    findOne,
    createNewUser,
    findById
}