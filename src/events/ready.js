const INFO = require('../../info.json');

module.exports = {
    name: "ready",
    once: true,
    execute() {
        console.log(INFO.bot_name + ' is ready !');
    }
}
