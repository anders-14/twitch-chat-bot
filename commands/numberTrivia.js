const fetch = require('node-fetch');

module.exports = {
  cmd: 'num-trivia',
  async: true,
  exec: (args, tags) => {
    if (args.length > 0) {
      const num = /^\-*[0-9]+$/.test(args[0]) ? args[0] : undefined;
      console.log(num);
      if (num) {
        return fetch(`http://numbersapi.com/${num}?default=No+trivia+for+${num}`)
          .then(res => res.text());
      }
    }  
    return fetch('http://numbersapi.com/random/')
      .then(res => res.text());
  }
}