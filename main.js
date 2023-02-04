const { Client, GatewayIntentBits } = require('discord.js');
const fs = require('fs');
const INFO = require('./info.json');

// SECRET TOKEN (ignored file)
const LOGIN_TOKEN = require('./token.json');

const CLIENT = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

// EVENT HANDLER
const eventFiles = fs.readdirSync('./src/events').filter(file => file.endsWith('.js'));

for(const file of eventFiles) {
    const event = require('./src/events/' + file);
    if(event.once) {
        CLIENT.once(event.name, (...args) => event.execute(...args))
    } else {
        CLIENT.on(event.name, (...args) => event.execute(...args));
    }
}

CLIENT.login(LOGIN_TOKEN.token);
