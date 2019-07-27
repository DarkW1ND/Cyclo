const vars = require("../../variables.json");
const Discord = require("discord.js");

function clean(text) {
  if (typeof text === "string")
    return text
      .replace(/`/g, "`" + String.fromCharCode(8203))
      .replace(/@/g, "@" + String.fromCharCode(8203));
  else return text;
}

module.exports = {
  config: {
    name: "eval",
    description: "Run javascript commands from within Discord",
    usage: "c!eval",
    category: "owner-only",
    accessableby: "Owners Only"
  },
  run: async (client, message, args, guild, member) => {
    const errorm = client.emojis.get("554031332498604052");
    const okm = client.emojis.get("554031332301471761");
    if (!message.author.id === "475673195706449933") {
      let response = new Discord.RichEmbed()
        .setTitle(`${errorm} Oops!`)
        .setDescription(`You must be the bot owner to use this!`)
        .setColor(vars.error);

      return message.channel.send(response);
    }
    if(!message.author.id === "575865352186101761") {
      let response1 = new Discord.RichEmbed()
      .setTitle(`${errorm} Oops!`)
      .setDescription(`You must be the bot owner to use this!`)
      .setColor(vars.error);

    return message.channel.send(response1);
    }
    const code = args.join(" ");

    let fo = new Discord.RichEmbed()
    .setTitle(`${errorm} Error!`)
    .setDescription(`**ERROR:** \n\`\`\`xl\nForbidden output\n\`\`\``)
    .setColor(vars.error)

    let be = new Discord.RichEmbed()
    .setTitle(`${errorm} Error!`)
    .setDescription(`**ERROR:** \n\`\`\`xl\nBlacklisted output\n\`\`\``)
    .setColor(vars.error)

    if(message.content.toLowerCase().includes('token'||'TOKEN')) return message.channel.send(fo)
    if(message.content.toLowerCase().includes("setInterval(function(){message.channel.send")) return message.channel.send(be)

    try {
      let evaled = eval(code);

      if (typeof evaled !== "string") evaled = require("util").inspect(evaled);


      let codemsg = new Discord.RichEmbed()
      .setTitle(`${okm} Evaled!`)
      .setDescription(`**Result:** \n\`\`\`xl\n${clean(evaled)}\n\`\`\``)
      .setColor(vars.good) 
      message.channel.send(codemsg);
    } catch (err) {
      let error = new Discord.RichEmbed()
      .setTitle(`${errorm} Error!`)
      .setDescription(`**ERROR:** \n\`\`\`xl\n${clean(err)}\n\`\`\``)
      .setColor(vars.error)
      message.channel.send(error);
    }
  }
};

exports.conf = {
  category: `Owner Only`,
  aliases: [""]
};
