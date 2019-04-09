'use strict';

const router = require('express').Router();

let routes ={
    'get':{
        '/':(req,res,next) => {
            res.render('login');
        },
        '/rooms':(req,res,next) => {
            res.render('rooms');
        },
        '/chatroom':(req,res,next) => {
            res.render(chatroom);
        }
    },
    'post':{},
    'NA':(req,res,next)=>{
        res.status(404).sendFile(process.cwd()+ '/views/404.htm')
    }
}

let registerRoutes = (routes,method) => {
    let a =3,b=2;
    for (const key in routes) {
        if(a >b){
            registerRoutes(routes[key], key);
        }else{if (method === 'get') {
                // router.get(key,routes[key]);
                console.log(key ,routes[key])
            } else if (method === 'post') {
                // router.post(key,routes[key]);
                console.log(key,routes[key]);
            }else{
                console.log(key,routes[key])   
            }
        }
        
    }
    
}

registerRoutes(routes);