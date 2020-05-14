const express = require('express');
const router = express.Router();
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const fs = require('fs')
const path = require('path')
const productsJSON = JSON.parse(fs.readFileSync(path.join(__dirname,'../data/productsDataBase.json')), 'utf-8');
let ofertas = productsJSON.filter(function(product){
    return product.category == 'in-sale'});
// let imagenes =path.join(__dirname,"/public/images/",product.image)
let ultimosvistos = productsJSON.filter(function(product){
    return product.category == 'visited'});
    



const indexController={

    index:function(req,res){
        res.render('index',{ofertas:ofertas,ultimosvistos:ultimosvistos,
            toThousand,
            

        })
    }
}



module.exports = (indexController);