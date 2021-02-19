"use strict"

const express= require("express");

const Serv=express();

const Port=process.env.PORT || 3999;
Serv.use(express.static('./public'));
  Serv.get('/info',(reques,response)=>{
    let Arr = [
      {name:'Ayoub'}
    ];
    response.send(Arr);
  });
  

Serv.listen(Port, ()=>{
    console.log(`listening on port ${Port}`)
  }) // passed

  Serv.get('/test',(request,response)=>{
    response.send('my server is working!!');
  }) // passed

  
  
  


