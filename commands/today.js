const fetch = require('node-fetch');

module.exports = {
  cmd: 'today',
  async: true,
  exec: (args, tags) => {
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1;
    return fetch(`http://numbersapi.com/${month}/${day}/date/`)
      .then(res => res.text());
  }
}