module.exports = {
  cmd: 'dice',
  exec: (args, tags) => {
    const roll = Math.floor(Math.random() * 6) + 1;
    return `@${tags.username}, you rolled a ${roll}`;
  }
}