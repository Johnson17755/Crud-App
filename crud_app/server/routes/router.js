const express = require('express');
const route = express.Router()

const services = require('../services/render')

//  * @description Root Router
//  * @Method GET

route.get('/', services.homeRoutes);

route.get('/add-user',services.add_user) 

route.get('/update-user',services.update_user) 

module.exports = route