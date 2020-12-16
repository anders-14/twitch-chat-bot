const tmi = require('tmi.js');
const fs = require('fs');
require('dotenv').config();
const config = require('./config.json');

const client = new tmi.Client({
  options: { debug: true },
  connection: {
    secure: true,
    reconnect: true,
  },
  identity: {
    username: process.env.BOT_USERNAME,
    password: process.env.BOT_PASSWORD,
  },
  channels: config.channels,
});

const prefix = config.prefix;
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
const commands = {};

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  commands[command.cmd] = command;
}

client.connect();

client.on('message', (channel, tags, message, self) => {
  // Ignore echoed messages or no prefix.
  if (self || message[0] !== prefix) return;

  // Get the command and all the arguments from the message
  let [cmd, ...args] = message.slice(1).split(' ');

  cmd = cmd.toLowerCase();

  // If the command exists in the commands execute it
  if (commands[cmd]) {
    if (commands[cmd].async) {
      commands[cmd].exec(args, tags)
        .then(res => client.say(channel, res));
    } else {
      const msg = commands[cmd].exec(args, tags);
      client.say(channel, msg);
    }
  }
});

