const Discord = require("discord.js");
const fs = require("fs");
const config = require("../../config.json");
const vars = require("../../variables.json");

module.exports = {
  config: {
    name: "help",
    description: "desc",
    usage: "c!command",
    category: "category",
    accessableby: "by"
  },
  run: async (client, message, args) => {
    const strike = client.emojis.get("556565989479809035");
    const errorm = client.emojis.get("554031332498604052");
    const okm = client.emojis.get("554031332301471761");

    let errora = new Discord.RichEmbed()
    .setTitle(`${errorm} Error!`)
    .setDescription(`I have detected you are **not accepting**
    direct messages, so i cant send you the list of commands`)
    .setColor(vars.error)

    try {

    let sended = new Discord.RichEmbed()
    .setTitle(`${okm} Sent!`)
    .setDescription(`A **message** should have be sent into your **DM's**!`)
    .setColor(vars.good)

    let response = new Discord.RichEmbed()
    .setTitle(`${strike} Here is some starting help!`)
    .addField(`Looking for support?`, `Join my [support server](https://discord.gg/HkKfWGv)`)
    .addField("**Utility**", "`c!help` `c!ping` `c!invite`")
    .setColor(vars.good)
    message.author.send(response)
    message.channel.send(sended)
    } catch (err) {
        if (err) return message.channel.send(errora)
    }
  }
}