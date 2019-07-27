//Ale! Eval command. DrastDev 2019 https://drastdev.com/
const Discord = require("discord.js");
const steam = require('../supportteam.json');

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars

  const error = client.emojis.get("554031332498604052");
  const checkmark = client.emojis.get("554031332301471761");

  function clean(text) {
    if (typeof text === "string")
      return text
        .replace(/`/g, "`" + String.fromCharCode(8203))
        .replace(/@/g, "@" + String.fromCharCode(8203));
    else return text;
  }

  const code = args.join(" ");
    
  const forbidden = new Discord.RichEmbed()
  .setColor("b722e5")
  .setDescription(`${error} ERROR\n\`\`\`Forbidden output\`\`\``)

  if (
    code.includes("token") ||
    code.includes("destroy") ||
    code.includes("config") ||
    code.includes("exit")
  )
    return message.channel.send(forbidden);

  const poa = new Discord.RichEmbed()
  .setColor(0xb722e5)
  .setDescription(`${error} This command is owner only!`)

  if(!steam[message.author.id]){
    return message.channel.send(poa)
};
  try {
    const code = args.join(" ");
    let evaled = eval(code);

    if (typeof evaled !== "string") evaled = require("util").inspect(evaled);

    const result = new Discord.RichEmbed()
    .setColor("b722e5")
    .setDescription(`${checkmark} Result\n\`\`\`\n${clean(evaled)}\`\`\``)

    message.channel.send(result);
  } catch (err) {
    const resulterr = new Discord.RichEmbed()
    .setColor("b722e5")
    .setDescription(`${error} ERROR\n\`\`\`\n${clean(err)}\`\`\``)
    message.channel.send(resulterr);
  }
  };
