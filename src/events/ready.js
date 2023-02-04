const CLIENT =  require('../../main.js').CLIENT;
const INFO = require('../../info.json');

module.exports = {
    name: "ready",
    once: true,
    execute() {
        CLIENT.user.setActivity('Gummy Star Song', {type: 'LISTENING'});
        console.log(INFO.bot_name + ' is ready !');
    }
}
