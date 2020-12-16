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

const getRandomMove = () => possibleMoves[Math.floor(Math.random() * 3)]

module.exports = {
  cmd: 'rps',
  async: false,
  exec: (args, tags) => {
    if (args.length > 0) {
      const chatterMove = args[0].toLowerCase();
      if (chatterMove === 'rock' || chatterMove === 'paper' || chatterMove === 'scissors') {
        // A little chat for myself
        const isAnders = tags.username === 'anders14_';

        let botMove;
        if (isAnders) {
          botMove = Math.random() < 0.8 ? rules[chatterMove]['win'] : getRandomMove();
        } else {
          botMove = getRandomMove();
        }

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
