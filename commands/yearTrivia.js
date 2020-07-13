const fetch = require('node-fetch');

module.exports = {
  cmd: 'year-trivia',
  async: true,
  exec: (args, tags) => {
    if (args.length > 0) {
      const year = /^\-*[0-9]+/.test(args[0]) ? args[0] : undefined;
      if (year) {
        return fetch(`http://numbersapi.com/${year}/year/`)
          .then(res => res.text());
      }
    }

    return fetch('http://numbersapi.com/random/year')
      .then(res => res.text());
  }
}