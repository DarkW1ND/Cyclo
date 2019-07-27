const config = require("../../config.json");
const vars = require("../../variables.json");
const Discord = require("discord.js");

module.exports = async (client, e) => {
    console.error(e);
    const errorm = client.emojis.get("554031332498604052");
    const errorEmbed = new Discord.RichEmbed()
        .setTitle(`${errorm} Error`)
        .setDescription(`\`\`\`${e}\`\`\``)
        .setColor(vars.error);
    client.channels.get("604728983224844290").send(errorEmbed);
};