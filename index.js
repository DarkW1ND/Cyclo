const Discord = require("discord.js");
const fs = require("fs");

const client = new Discord.Client();
const config = require("./config.json");
const vars = require("./variables.json");

// We also need to make sure we're attaching the config to the CLIENT so it's accessible everywhere!
client.config = config;

["aliases", "commands"].forEach(x => client[x] = new Discord.Collection());
["console", "command", "event"].forEach(x => require(`./handlers/${x}`)(client));

setInterval(function() {
  client.user.setPresence( {
          game: {
              name: `Under Development`,
              type: "PLAYING"
          }
  })
          }, 10000)

client.login(config.token);