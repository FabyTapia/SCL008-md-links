//llamo a los link+status
"use strict";
const fs = require('fs');
const fetch = require ('node-fetch');
const command = process.argv[2]//se ingresa comando en la terminal me toma desde la posicion 2
const markdownLinkExtractor = require('markdown-link-extractor');
const markdown = fs.readFileSync(command).toString();
const links = markdownLinkExtractor(markdown);

links.forEach(function (element) {
    fetch(element).then((res)=>{
        console.log(res.url+ " "+ res.status+ " " + res.statusText);
    })
    .catch(error =>{
        console.log(error.message)
    });

});
exports.links = links;
///////////////////////////////////////////////////////////
/*
 const fs = require('fs');
 const fetch = require('node-fetch');
 const command = process.argv[2];
 const markdownLinkExtractor = require('markdown-link-extractor');
 const path = require('path');

//creando promesa



readAFile(command,'utf-8')
  .then(res => {

  const readAFile = (fileName, type) => {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, type, (error, content) => {
         err ? reject(error) : resolve(content);

  })
  .catch(err => {
    console.log(err);
  })
});
*/
