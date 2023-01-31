const { Client, GatewayIntentBits } = require('discord.js');
const BOT_NAME = 'Gummy Bee';

// SECRET TOKEN (ignored file)
const LOGIN_TOKEN = require('./token.json');

const CLIENT = new Client({
    intents: [
        GatewayIntentBits.Guilds
    ]
});

CLIENT.on('ready', () => {
    console.log(BOT_NAME + ' is ready !');
});

CLIENT.login(LOGIN_TOKEN.token);