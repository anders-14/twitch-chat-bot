module.exports = {
  cmd: 'lurk',
  async: false,
  exec: (args, tags) => {
    return `@${tags.username} is now lurking in the shadows`;
  }
}