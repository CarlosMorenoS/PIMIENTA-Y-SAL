var express = require('express');
var router = express.Router();

var platos = [
  {
    id:1,
    nombre:"Risotto de berenjena",
    descripcion:"Risotto de berenjena y queso de cabra",
    foto:"Risotto-berenjena-queso-cabra.jpg",
    precio:"U$S 47.00"
  },
  {
    id:2,
    nombre:"Mousse de arroz",
    descripcion:"Mousse de arroz con leche y aroma de azahar",
    foto:"Mousse-de-arroz-con-leche.jpg",
    precio:"U$S 27.50"
  },
  {
    id:3,
    nombre:"Espárragos blancos",
    descripcion:"Espárragos blancos con vinagreta de verduras y jamón ibérico",
    foto:"esparragos.png",
    precio:"U$S 37.50"
  },
  {
    id:4,
    nombre:"Carpaccio fresco",
    descripcion:"Entrada Carpaccio de salmón con cítricos",
    foto:"Carpaccio-de-salmon.jpg",
    precio:"U$S 65.50"
  },
  {
    id:5,
    nombre:"Plato de prueba sin descripcion",
    descripcion:"",
    foto:"principal.jpg",
    precio:"FREE"
  }
]

let about = {
  titulo:"Pimienta & Sal",
  lorem1:"Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute iruredolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.We only use", 
  lorem2:" Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
}

/* GET home page. */
  router.get('/', function(req, res, next) {
    res.render('index', { platos, about });
  });

  router.get('/detalle/1', function(req,res,next) {
    res.render('detalleMenu', {plato:platos[0]})
  })

  router.get('/detalle/2', function(req,res,next) {
    res.render('detalleMenu', {plato:platos[1]})
  })
  
  router.get('/detalle/3', function(req,res,next) {
    res.render('detalleMenu', {plato:platos[2]})
  })
  
  router.get('/detalle/4', function(req,res,next) {
    res.render('detalleMenu', {plato:platos[3]})
  })

  router.get('/detalle/5', function(req,res,next) {
    res.render('detalleMenu', {plato:platos[4]})
  })

module.exports = router;
