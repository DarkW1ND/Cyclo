const Discord = require("discord.js");
const fs = require("fs");
const config = require("../../config.json");
const vars = require("../../variables.json");
const db = require(`megadb`);

module.exports = {
    config: {
        name: "setprefix",
        description: "change the prefix",
        usage: "c!setprefix",
        category: "utility",
        accessableby: "Server owner"
    },
    run: async (client, message, args) => {
        const errorm = client.emojis.get("554031332498604052");
        const okm = client.emojis.get("554031332301471761");
        const strike = client.emojis.get("556565989479809035");

        let noperms = new Discord.RichEmbed()
            .setTitle(`${errorm} Oops!`)
            .setDescription(`You **dont have permission** to change my **prefix**!
            Contact a **server admin**`)
            .setColor(vars.error);

        let nopr = new Discord.RichEmbed()
            .setTitle(`${errorm} Oops!`)
            .setDescription(`You **didnt write** a **valid prefix** or you left the **input blank!**`)
            .setColor(vars.error);

        let done = new Discord.RichEmbed()
            .setTitle(`${okm} Done!`)
            .setDescription(`The **prefix** has been **changed**!
            Now, **I will work with** \`${args[0]}\` and the **old prefix wont work**`)
            .setColor(vars.good);

        if (!message.member.hasPermission(`ADMINISTRATOR`)) return message.channel.send(noperms)
        if (!args[0]) return message.channel.send(nopr);
        client.settings.set(message.guild.id, args[0], "prefix")
        return message.channel.send(done);
    }
};