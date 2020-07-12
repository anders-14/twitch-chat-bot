module.exports = {
  cmd: 'so',
  async: false,
  exec: (args, tags) => {
    if (args.length > 0) {
      soChannel = args[0][0] === '@' ? args[0].slice(1) : args[0];
      return `Hey, go check out @${soChannel} at twitch.tv/${soChannel.toLowerCase()}`;
    }
  }
}