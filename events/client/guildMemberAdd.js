const config = require("../../config.json");
const vars = require("../../variables.json");
const Discord = require("discord.js");

module.exports = async (client, message, member, guild) => {

    let user = member.user.username;
    let server = member.guild.name;
    let users = member.guild.memberCount;

    let welcomemsg = new Discord.RichEmbed()
        .setTitle(`Hello! :wave:`)
        .setDescription(`Welcome ${user} to ${server} official server!
        Dont forget to read the rules and to look around!
        We recommend you to get to meet the other members and chat
        With you, now this server have ${users}`)

    client.channels.find("name", "welcome").send(welcomemsg)
};