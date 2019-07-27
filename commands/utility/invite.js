const Discord = require("discord.js");
const fs = require("fs");
const config = require("../../config.json");
const vars = require("../../variables.json");

module.exports = {
  config: {
    name: "invite",
    description: "Sends and invite link for bot and support server",
    usage: "c!invite",
    category: "utility",
    accessableby: "Members"
  },
  run: async (client, message, args) => {
      const strike = client.emojis.get("556565989479809035");

      let response = new Discord.RichEmbed()
      .setTitle(`${strike} Time to set me up, huh?`)
      .setDescription(`Its so simple, click [here](https://discordapp.com/api/oauth2/authorize?client_id=604233606495207424&permissions=8&scope=bot) to **invite Cyclo to your server**
      and click [here](https://discord.gg/HkKfWGv) **for joining the support server**!
      Thank you a lot for trusting me!`)
      .setColor(vars.good)
      message.channel.send(response);
  }
}