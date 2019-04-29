const mdLinks = require('../md-links');


describe('mdLinks', () => {

  it('deberia retornar 2 links que se encuentran en md-linkspage.md ', ()=> {
      expect(mdLinks.readAFile('md-linkspage.md')).resolves.toEqual(['https://help.github.com/en/articles/creating-an-issue',
      'https://www.npmjs.com/package/package' ])
  });

});
