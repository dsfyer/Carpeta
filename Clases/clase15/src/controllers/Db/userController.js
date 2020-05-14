const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const dBUsers=path.join(__dirname,'Db/dbUsers.json')
let dBUsersJSON=fs.readFileSync(dBUsers,'utf-8')||'[]'
const dbUsersJS=JSON.parse(dBUsersJson)



userController={
    index:function(req, res, next) {
        res.send('respond with a resource');
      },
    register:function(req,res){
    res.render('register')
    console.log(dBUsersJSON);
    },
    infoUser:function(req,res){
      let body=req.body;
      let newUser={
        name:req.body.name,
        lastname:req.body.lastname,
        email:req.body.email,
        password:req.body.password,
        password2:req.body.password2,
        image:req.body.image,
      }
      // console.log(dBUsersJSON);
      
      console.log(req.body)
      console.log(newUser)
      res.redirect('/users/loguin')
    }
}





module.exports=(userController)