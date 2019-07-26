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
        .setTitle(`Test`)
        .setDescription(`Test`)
        .addField(`Test`)
    message.channel.send(response);
}
}
