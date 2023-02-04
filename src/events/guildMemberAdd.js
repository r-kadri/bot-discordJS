const CLIENT =  require('../../main.js').CLIENT;
const roles = require('../../roles.json');
const channels = require('../../channels.json');

module.exports = {
    name: "guildMemberAdd",
    once: false,
    execute(member) {
        const airport = CLIENT.channels.cache.get(channels.airport);
        // member.displayName
        airport.send("<@" + member.id + "> a bien atterri ! Salut ^_^");

        member.roles.add(roles.member);
    }
}