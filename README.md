# Twitch Chat Bot

The best Twitch chat bot ever... maybe? (no, it's not)

## Commands 

- `!dice` -> rolles a dice
- `!joke` -> tells a random dad joke [from the icanhazdadjoke api](https://icanhazdadjoke.com/)
- `!lurk` -> tells the streamer that you are afk
- `!ping` -> says pong
- `!rps <rock|paper|scissors>` plays rps against you
- `!so <twitch-username>` gives a shoutout to the person you want
- more to come...

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
