module.exports = {
  cmd: 'ping',
  async: false,
  exec: (args, tags) => {
    return `Pong, @${tags.username}`;
  }
}
