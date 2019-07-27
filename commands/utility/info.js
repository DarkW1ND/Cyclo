const Discord = require("discord.js");
const fs = require("fs");
const config = require("../../config.json");
const vars = require("../../variables.json");

module.exports = {
    config: {
        name: "info",
        description: "some info about the bot",
        usage: "c!info",
        category: "utility",
        accessableby: "Members"
    },
    run: async (client, message, args) => {
        const errorm = client.emojis.get("554031332498604052");
        const okm = client.emojis.get("554031332301471761");
        const strike = client.emojis.get("556565989479809035");

        let embed = new Discord.RichEmbed()
            .setAuthor(client.user.username, client.user.avatarURL)
            .setTitle(`${okm} Here's my info`)
            .addField(`:1234: Version`, config.version, true)
            .addField(`:regional_indicator_n: Node version`, `12.7.0`, true)
            .addField(`:regional_indicator_d: Discord.js version`, `11.5.1`, true)
            .addField(`:briefcase: Owner`, `xItsDanger`, true)
            .addField(`:handshake: Collaborators`, `AlanTheGreat`, true)
            .addField(`:birthday: Birthday`, `26 jul 2019`, true)
            .addField(`:dark_sunglasses: Partners`, `DrastDev`, true)
            .addField(`:file_folder: Guilds`, client.guilds.size, true)
            .addField(`:speech_balloon: Channels`, client.channels.size, true)
            .addField(`:bust_in_silhouette: Users`, client.users.size, true)
            .setColor(vars.good)
            .setTimestamp()

        message.channel.send(embed);


    }
};