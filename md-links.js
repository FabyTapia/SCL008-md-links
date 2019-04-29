//llamo a los link+status
//process arg 2 que es lo que va a leer 
const fs = require('fs');
const fetch = require('node-fetch');
const command = process.argv[2]//se ingresa comando en la terminal me toma desde la posicion 2
const markdownLinkExtractor = require('markdown-link-extractor');
const markdown = fs.readFileSync(command).toString();//convierte en string
const links = markdownLinkExtractor(markdown);
const FileHound = require('filehound');

links.forEach(function (element) {
    fetch(element).then((res)=>{
            console.log(res.url + " " + res.status+ " " + res.statusText);
    })
        .catch(error =>{
            console.log(error.message)
    });
});
exports.links = links;

/*
const files = FileHound.create()
 .paths('C:')// ruta donde quiero que busque los archivos
 .ext('md')// tipo de archivo que quiero que busque
 .find();

files.then(console.log);*/