//llamo a los link+status
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