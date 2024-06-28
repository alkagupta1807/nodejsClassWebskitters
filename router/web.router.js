const express =require('express')
const WebController = require('../app/controller/WebController')

const Router=express.Router()


Router.get('/',WebController.home)





module.exports=Router