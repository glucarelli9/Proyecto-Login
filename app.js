const express = require('express')
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')
const favicon = require('express-favicon')

const app = express()

//Seteamos el motor de plantilla
app.set('view engine','ejs')

//seteamos la carpeta public para archivos estaticos
app.use(express.static('public'))

// Para procesar datos enviados desde froms
app.use(express.urlencoded({extended:true}))
app.use(express.json())


//Iniciamos Favicon
app.use(favicon(__dirname + 'public/img/favicon.ico'));



//Seteamos las variables de entorno
dotenv.config({path: './env/.env'})

//para poder trabajar con las cookies
app.use(cookieParser())


//Eliminar cache
app.use(function(req,res,next){
    if(!req.user)
    res.header('Cache-Control','private, no-cache, no-store, must-revalidate',);
    next();
});

//Llamar al router

app.use('/',require('./routes/router'))


app.listen(3000, ()=>{
console.log('Server UP running in http://localhost:3000')

})