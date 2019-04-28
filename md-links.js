//llamo a los link+status
"use strict";
/*
const fs = require('fs');
const fetch = require ('node-fetch');
const command = process.argv[2]//se ingresa comando en la terminal me toma desde la posicion 2
const markdownLinkExtractor = require('markdown-link-extractor');
const markdown = fs.readFileSync(command).toString();
const links = markdownLinkExtractor(markdown);


*/

///////////////////////////////////////////////////////////

 const fs = require('fs');
 const fetch = requiere('node-fetch');
 const command = process.argv[2];
 const markdownLinkExtractor = requiere('markdown-link-extractor');
 const path = requiere('path');

 /*creando promesa*/
const readAFile = (fileName, type) => {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, type, (error, content) => {
         err ? reject(error) : resolve(content);


     });
  });
}
/*
readAFile(command,'utf-8')
  .then(res => {
    links.forEach(function (element) {
     fetch(element)
        .then((res)=>{
            console.log(res.url+ " "+ res.status+ " " + res.statusText);
        })
  
  })
  .catch(err => {
    console.log(err);
  });
   
});
exports.links = links;
*/