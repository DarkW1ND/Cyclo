const Discord = require("discord.js");
const fs = require("fs");
const Enmap = require("enmap")
const client = new Discord.Client();
const config = require("./config.json");
const vars = require("./variables.json");

// We also need to make sure we're attacing the config to the CLIENT so it's accessible everywhere!
client.config = config;

client.settings = new Enmap({
  name: "settings",
  fetchAll: false,
  autoFetch: true,
  cloneLevel: "deep"
})
  
const array1 = ["aliases", "commands"]

array1.forEach(x => (client[x] = new Discord.Collection()));
["console", "command", "event"].forEach(x =>
  require(`./handlers/${x}`)(client)
);

setInterval(function() {
  client.user.setPresence({
    game: {
      name: `Under Development`,
      type: "PLAYING"
    }
  });
}, 10000);

client.login(process.env.TOKEN);
