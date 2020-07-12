# Twitch Chat Bot

The best twitch bot ever... maybe? (no, it's not)

## Commands 

- `!dice` -> rolles a dice
- `!joke` -> tells a random dad joke
- `!ping` -> says pong
- `!rps <rock|paper|scissors>` plays rps against you
- `!so <twitch-username>` gives a shoutout to the person you want

## Running the bot yourself

Start of by cloning the repo

Create an `.env` file and add your bots details to the file like shown in the `.env.sample`

You can generate an oauth-token for your bot at https://twitchapps.com/tmi/

Add the channel(s) you want to run the bot in to the `config.json`

You can also add the prefix you want to use to the `config.json`

- `npm start` -> start the bot
- `npm run dev` -> run the bot in developer mode with auto reload