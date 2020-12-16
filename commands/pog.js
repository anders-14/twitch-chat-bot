module.exports = {
  cmd: 'pog',
  async: false,
  exec: (args, tags) => {
    return `Hey @${tags.username}, PogChamp`;
  }
}
