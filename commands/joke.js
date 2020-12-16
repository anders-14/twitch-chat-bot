const fetch = require('node-fetch');

module.exports = {
  cmd: 'joke',
  async: true,
  exec: (args, tags) => {
    return fetch('https://icanhazdadjoke.com/', { headers: { 'Accept': 'application/json' } })
      .then(res => res.json())
      .then(data => data.joke);
  }
}
