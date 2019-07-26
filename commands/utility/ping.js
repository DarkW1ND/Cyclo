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
    const m = await message.channel.send("Pong?");
    m.edit({
      embed: {
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        description: `Command Latency: **${m.createdTimestamp -
          message.createdTimestamp}ms**\nAPI Latency: **${Math.round(
          client.ping
        )}ms**`,
        timestamp: new Date(),
        color: vars.green
      }
    });
  }
};
