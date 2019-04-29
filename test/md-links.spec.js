const mdLinks = require('../md-links');


describe('mdLinks', () => {

  it('deberia retornar 2 links que se encuentran en md-linkspage.md ', ()=> {
      expect(mdLinks.readAFile('md-linkspage.md','utf-8')).resolves.toEqual(['https://help.github.com/en/articles/creating-an-issue',
      'https://www.npmjs.com/package/package' ])
  });
    it('deberia retornar error si no es links en md-links.js',()=>{
      expect(mdLinks.readAFile('md-linkspage.md','utf-8')).resolves.toEqual(['error.message']);
    });

});

