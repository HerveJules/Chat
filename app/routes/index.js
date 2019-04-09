'use strict';

// const util = require('../utilities');
const router = require('express').Router();

module.exports = () => {
    let routes ={
        'get':{
            '/':(req,res,next) => {
                res.render('login');
            },
            '/rooms':(req,res,next) => {
                res.render('rooms');
            },
            '/chatroom':(req,res,next) => {
                res.render('chatroom');
            }
        },
        // 'post':{

        // },
        // 'NA':(req,res,next) => {
        //     res.status(404).sendFile(process.cwd()+ '/views/404.htm')
        // }
    }
    let registerRoutes = (routes) => {
    //     for (const key in routes) {
    //         if (routes[key] === 'object' && routes[key] !== null && !(routes[key] instanceof Array)) {
    //               registerRoutes(routes[key],key);       
    //         }
    //             if (method === 'get') {
    //                 router.get(key,routes[key]);
    //                 console.log(key,routes[key])
    //             } else if (method === 'post') {
    //                 router.post(key,routes[key]);
    //             }else{
    //                 router.get(routes[key])   
    //             }
            
    //     }
        router.get(key,routes[key]);
        console.log(key,routes[key]);
    } 
    return router
}
let _routes ={
    'get':{
        '/':(req,res,next) => {
            res.render('login');
        },
        '/rooms':(req,res,next) => {
            res.render('rooms');
        },
        '/chatroom':(req,res,next) => {
            res.render('chatroom');
        }
    }}
let test = (routes)=>{
    for (let key in routes['get']){
       
        
            router.get(key);
        
        
    }
    
}
test(_routes)