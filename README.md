# Twitch Chat Bot

The best Twitch chat bot ever... maybe? (no, it's not)

## Commands 

- `!dice` -> rolles a dice
- `!joke` -> tells a random dad joke 
- `!lurk` -> tells the streamer that you are afk
- `!num-trivia <num>` -> returns a trivia about the entered number, or a random number if empty or invalid
- `!ping` -> responds with pong
- `!rps <rock|paper|scissors>` -> plays rps against you
- `!so <twitch-username>` -> gives a shoutout to the person you want
- `!today` -> responds with trivia about the current day
- `!year-trivia <year>` returns a trivia about the given year, or a random year if empty or invalid
- more to come...

## Apis used

Dad jokes from https://icanhazdadjoke.com/

Number trivia from http://numbersapi.com/

## Running the bot yourself

Start of by cloning the repo

Create an `.env` file and add your bots details to the file, like shown in the `.env.sample`

You can generate an oauth-token for your bot at https://twitchapps.com/tmi/

Add the channel(s) you want to run the bot in, to the `config.json`

You can also add the prefix you want to use to the `config.json`

### Scripts to run the bot locally

Installs dependencies:

```
npm install 
```

Start the bot:

```
npm start
```

Run the bot in development mode with hot-reloading:

```
npm run dev
```
