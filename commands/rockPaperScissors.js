const possibleMoves = [
  'rock',
  'paper',
  'scissors'
];

const rules = {
  rock: {
    win: 'scissors',
    lose: 'paper'
  },
  paper: {
    win: 'rock',
    lose: 'scissors'
  },
  scissors: {
    win: 'paper',
    lose: 'rock'
  }
}

module.exports = {
  cmd: 'rps',
  async: false,
  exec: (args, tags) => {
    if (args.length > 0) {
      const chatterMove = args[0].toLowerCase();
      if (chatterMove === 'rock' || chatterMove === 'paper' || chatterMove === 'scissors') {
        const botMove = possibleMoves[Math.floor(Math.random() * 3)];

        if (chatterMove === botMove) {
          return `I pick ${botMove}, it's a tie @${tags.username}`;
        }
        if (chatterMove === rules[botMove]['win']) {
          return `I pick ${botMove}, you lose @${tags.username}`;
        }
        if (chatterMove === rules[botMove]['lose']) {
          return `I pick ${botMove}, you win @${tags.username}`;
        }
      }
    }
    return '';
  }
}