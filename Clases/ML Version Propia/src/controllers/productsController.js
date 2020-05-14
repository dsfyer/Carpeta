const express = require('express');
const router = express.Router();

const fs = require('fs')
const path = require('path')
const rutaJSON=path.join(__dirname,"../data/productsDataBase.json") 
let dbJson=fs.readFileSync(rutaJSON,'utf-8')|| '[]';
let dbjs=JSON.parse(dbJson);
// const productsJSON = JSON.parse(fs.readFileSync(path.join(__dirname,'../data/productsDataBase.json')), 'utf-8');
let productsInSale = dbjs.filter(function(product){
    return product.category == 'in-sale'});
let productsBySeen = dbjs.filter(function(product){
    return product.category == 'visited'}); 

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");





        

const productsController={

    productos: function(req,res){
        
        
        
        res.render('products',{
            products:dbjs,
            ofertas:productsInSale,
            ultimosvistos:productsBySeen,
            toThousand,

            
    }
    
    )},

    detalle: function(req,res){
        var id = req.params.id;
        var category=req.params.category;
        let product=dbjs.find(product=> product.id==id)
        
        res.render('detalle',
        {products:dbjs,
        ofertas:productsInSale,
        ultimosvistos:productsBySeen,
        product:product,
        category:category,
        toThousand,
        })},
        
        recibir: function(req,res){
            let id = req.params.id;
            let product = dbjs.find(product=> product.id==id)

            res.render('edit',{id:id,product:product,})
            },
    //BOTONES DE EDICION DELETE EDIT CREATE!
    // VA POR DELETE
    delete: function(req,res){
            let deleteid = req.params.id
            let newDataBase=dbjs.filter(product=>product.id!=deleteid)
            let newdataBaseJS=JSON.stringify(newDataBase, null, '')
            fs.writeFileSync(rutaJSON,newdataBaseJS);
            res.redirect('/products')
        },

    
    create: function(req,res){
    
        // console.log(productsJSON.length+1) // ACA IMPORTANTE EL .LENGTH
        //  PARA DARLE UN ID AL PRODUCTO
        
                res.render('create');
    },
    
    //VA POR PUT
        editar: function(req,res){
        let id = req.params.id;
        dbjs.forEach(product =>{ if(product.id == id) {
                product.name = req.body.name
                product.description = req.body.description
                product.price = req.body.price
                product.discount = req.body.discount
                product.image = "default-image.png"
                product.category = req.body.category
                }})
                let actProduct=JSON.stringify(dbjs);
                fs.writeFileSync(rutaJSON,actProduct, null," ")
            res.redirect('/')
    },
    dataCreado: function(req,res){
        let Body=req.body;
        let DbID=(dbjs.length+1)
        
        let nuevoProducto = {
            id:(DbID),
            name: Body.name,
            description:Body.description,
            price:Body.price,
            discount: Body.discount, 
            image: "default-image.png",
            category: Body.category 
        }
        let dBact=JSON.stringify([...dbjs, nuevoProducto])
      
        // fs.writeFileSync(rutapruebas, JSON.stringify(nuevoProducto))
        fs.writeFileSync(rutaJSON,dBact, null," ")
        res.redirect('/');
    },   
}

    // hago una ruta /Products/Create(get)
    //



// fs.appendFileSync(rutaJSON,JSON.stringify(newProdu))
        // // fs.writeFileSync(rutaJSON,(JSON.stringify(newProduct, null,' ')))
        // res.redirect('/products');

        
        // poner el user JSON en la base de datos Json


            
        
    
    

module.exports= (productsController)