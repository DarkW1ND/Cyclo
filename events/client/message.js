const { prefix } = require("../../config.json");
const vars = require("../../variables.json");
const Discord = require("discord.js");
const db = require(`megadb`);
const errorHandler = require("./error")
const defaultSettings = require("../../defaultSettings")

module.exports = async (client, message) => {
  if (message.author.bot || message.channel.type === "dm") return;

  client.settings.ensure(message.guild.id, defaultSettings)

  const guildConf = client.settings.get(message.guild.id)

  client.guildConf = guildConf

  let args = message.content
    .slice(client.guildConf.prefix.length)
    .trim()
    .split(/ +/g);
  let cmd = args.shift().toLowerCase();

  let words = ["cyclo", "prefix", "Cyclo", "cyclo's", "Cyclo's"]

  if(message.content.includes(words)) {
    const strike = client.emojis.get("556565989479809035");

    let answer = new Discord.RichEmbed()
    .setTitle(`${strike} Need help?`)
    .setDescription(`Hi! Im **Cyclo!** My system detected you are looking fr my **prefix**, arent you?
    Well, my **prefix** actually is \`${client.guildConf.prefix}\` and you can see all my **commands** with \`${client.guildConf.prefix}help\`
    Hope you are having **fun** here!`)
    .setColor(vars.good)
    message.channel.send(answer);
    }

  if (!message.content.startsWith(client.guildConf.prefix)) return;
  let commandfile =
    client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd));
  if (commandfile)
    commandfile.run(client, message, args).catch(error => {
      errorHandler(client, error.stack)
    });
};
