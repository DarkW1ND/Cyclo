const Discord = require("discord.js");
const fs = require("fs");
const config = require("../../config.json");
const vars = require("../../variables.json");

module.exports = {
  config: {
    name: "ping",
    description: "PONG! Displays the api & bot latency",
    usage: "c!ping",
    category: "miscellaneous",
    accessableby: "Members"
  },
  run: async (client, message, args) => {
    let response = new Discord.RichEmbed()
    .setAuthor(client.user.username, client.user.avatarURL)
    .setDescription(`Command Latency: **${m.createdTimestamp -
      message.createdTimestamp}ms**\nAPI Latency: **${Math.round(
      client.ping
    )}ms**`)
    .setTimestamp()
    .setColor(vars.green)
    message.channel.send(response)
  }
};
