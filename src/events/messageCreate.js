const INFO = require('../../info.json');
const { EmbedBuilder } = require('discord.js');

const AUTODELETEMSG = 3000;

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
        
        // CLEAR MESSAGES
        } else if (message.content.startsWith(INFO.prefix + "clear")) {
            if (message.member.permissions.has("MANAGE_MESSAGES")) {
              let args = message.content.split(" ");
              if (args[1]) {
                let nbMessages = parseInt(args[1]) + 1;
                if (nbMessages) {
                  if (nbMessages > 0 && nbMessages < 101) {
                    message.channel.bulkDelete(nbMessages);
                    message.channel.send("J'ai supprimé " + args[1] + " messages!");
                  } else {
                    message.channel
                      .send("Erreur : Le nombre doit être inférieur à 100.")
                      .then((msg) => {
                        setTimeout(() => {
                          msg.delete();
                        }, AUTODELETEMSG);
                      });
                  }
                } else {
                  message.channel
                    .send("Erreur : L'argument 1 doit être un nombre.")
                    .then((msg) => {
                      setTimeout(() => {
                        msg.delete();
                      }, AUTODELETEMSG);
                    });
                }
              } else {
                message.channel
                  .send(
                    "Erreur : Entrez le nombre de messages à supprimer en argument 1."
                  )
                  .then((msg) => {
                    setTimeout(() => {
                      msg.delete();
                    }, AUTODELETEMSG);
                  });
              }
            }
        }
    }
}