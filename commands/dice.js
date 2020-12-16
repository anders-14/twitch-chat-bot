module.exports = {
  cmd: 'dice',
  async: false,
  exec: (args, tags) => {
    const roll = Math.floor(Math.random() * 6) + 1;
    return `@${tags.username}, you rolled a ${roll}`;
  }
}
