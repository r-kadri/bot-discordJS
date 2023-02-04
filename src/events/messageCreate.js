const INFO = require('../../info.json');
const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: "messageCreate",
    once: false,
    execute(message) {
        if(message.author.bot) return;

        if(message.content === INFO.prefix + "help") {
            const embed = new EmbedBuilder()
                .setTitle("Moi ?")
                .setDescription("Je suis un robot crée pour vous aider dans votre recherche de joueurs !" )
                .setThumbnail("https://media.tenor.com/Fe_JEWLd9lYAAAAC/gummy-bee-bss.gif")
            message.reply({embeds: [embed]});
            
        } else if(message.content.toLowerCase() === "salut") {
            message.reply("Salut !");
        }
    }
}