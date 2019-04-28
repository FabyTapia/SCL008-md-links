#!/usr/bin/env node
"use strict"

// fetch package
const fetch = require("fetch");
const fetchUrl = fetch.fetchUrl;
// file system package
const fs = require('fs');


// Promesa resuelta
let myPromise = Promise.resolve('Hola mundo');

myPromise.then(res => {
  console.log(res);
})



// El 'return' de la Promesa
let myOtherPromise = new Promise( (resolve, reject) => {
  setTimeout(() => resolve(5), 2000);
});

myOtherPromise.then(res => {
  res += 5;
  console.log(res);
});



// fetchUrl a un sitio y retornar estado como Promesa
const getData = (url) => {
  return new Promise((resolve, reject) => {
    fetchUrl(url, (error, meta, body) => {
      if(meta){
        if(meta.status == 200) {
          resolve(meta.status.toString());
        }
      } else {
        reject(error);
      }
    });
  });
}

let url = "https://www.google.com";
getData(url)
  .then(res => {
    console.log("El estado de", url, "es:", res);
  })
  .catch(error => {
    console.log(error);
  });



// readFile como una Promesa
const readAFile = (fileName, type) => {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, type, (error, content) => {

      if (error) {
        reject(error);
      } else {
        resolve(content);
      }

      // mas elegenatemente:
      // err ? reject(error) : resolve(content);

    });
  });
}

readAFile("./README.md", "utf-8")
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log(err);
  });