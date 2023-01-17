const express = require('express')
const router = express.Router()

const authController = require('../controllers/authController')

//Rutas para las vistas
router.get('/index2',(req,res)=>{
    res.render('index2', {alert:false})
})
//Abajo va estp ,authController.isAuthenticated, y index 1 no dos
router.get('/',(req,res)=>{
    res.render('reparacion',{user:req.user})
 })
 router.get('/login',(req,res)=>{
    res.render('login', {alert:false})
})
router.get('/register',(req,res)=>{
    res.render('register', {alert:false})
})
router.get('/recibos',authController.isAuthenticated,(req,res)=>{
    res.render('recibos',{user:req.user})
})

// router.get('/reparacion',authController.isAuthenticated,(req,res)=>{
//     res.render('reparacion',{user:req.user})
// })
//rutas para los metodos controller
router.post('/register',authController.register)
 module.exports = router

 router.post('/login',authController.login)
 module.exports = router

 router.get('/logout',authController.logout)
 module.exports = router

 