//llamo a los link+status

const fs = require('fs');
const fetch = require('node-fetch');
const command = process.argv[2]//se ingresa comando en la terminal me toma desde la posicion 2
const markdownLinkExtractor = require('markdown-link-extractor');
const mdLinks = require('./md-links');
const pathIsAbsolute = require('path-is-absolute');
//const markdown = fs.readFileSync(command).toString();//convierte en string

//const FileHound = require('filehound');

const readAFile = (file, type) =>{
    return new Promise((resolve,reject)=>{
        fs.readFile(file,type,(error,content)=>{
            error ? reject(error) : resolve(content);
        });

    });
}



readAFile(command, "utf-8")
.then(res =>{
const links = markdownLinkExtractor(res);



links.forEach(function (links) {
    fetch(links)
    .then((res)=>{
        let result = {}
        result.link = res.url
        result.status = res.status
        result.statusText = res.statusText
        console.log(result)

       // console.log(res.url + " " + res.status+ " " + res.statusText);
    })
    
        .catch(error =>{
            console.log(error.message)
        })
    });
})

module.exports.readAFile = readAFile;

/*
const files = FileHound.create()
 .paths('C:\\Users\\Desktop\\laboratoria")// ruta donde quiero que busque los archivos
 .ext('md')// tipo de archivo que quiero que busque
 .find();

files.then(console.log);*/

  // readFile como una Promesa
