module.exports = {
  cmd: 'ping',
  exec: (args, tags) => {
    return `Pong, @${tags.username}`;
  }
}
