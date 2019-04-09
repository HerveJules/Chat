'use strict';
const router = require('express').Router();

let _registerRoutes = (routes,method) => {
    for (const key in routes) {
        if (routes[key] === 'object' && routes[key] !== null && !(routes[key] instanceof Array)) {
              _registerRoutes(routes[key],key);       
        }
            if (method === 'get') {
                router.get(key,routes[key]);
                console.log(key,routes[key])
            } else if (method === 'post') {
                router.post(key,routes[key]);
            }else{
                router.get(routes[key])   
            }
        
    }

}
let route = routes => {
    _registerRoutes(routes);
    return router;
}
module.exports = {
    route
}