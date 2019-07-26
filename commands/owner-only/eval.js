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
  run: async (client, message, args) => {
    if (message.author.id !== "475673195706449933")
      return message.channel.send("You need to be the bot owner to use this!");
    const code = args.join(" ");

    try {
      let evaled = eval(code);

      if (typeof evaled !== "string") evaled = require("util").inspect(evaled);

      message.channel.send(clean(evaled), { code: "xl" });
    } catch (err) {
      message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
  }
};

exports.conf = {
  category: `Owner Only`,
  aliases: [""]
};
