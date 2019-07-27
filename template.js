const Discord = require("discord.js");
const fs = require("fs");
const config = require("../../config.json");
const vars = require("../../variables.json");

module.exports = {
  config: {
    name: "name",
    description: "desc",
    usage: "c!command",
    category: "category",
    accessableby: "by"
  },
  run: async (client, message, args) => {
    const errorm = client.emojis.get("554031332498604052");
    const okm = client.emojis.get("554031332301471761");
    const strike = client.emojis.get("556565989479809035");
  }
}
