const CLIENT =  require('../../main.js').CLIENT;
const channels = require('../../channels.json');

module.exports = {
    name: "guildMemberRemove",
    once: false,
    execute(member) {
        const airport = CLIENT.channels.cache.get(channels.airport);
        airport.send(member.displayName + " est parti ! Au revoir :c");
    }
}