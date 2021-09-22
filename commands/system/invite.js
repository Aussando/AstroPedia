const discord = require('discord.js');

module.exports = {
  name: "invite",
  aliases: ['inv'],
  cooldown: 1000 * 10,
  description: "invite link",

  async run(bot, message, args) {

    const disbut = require("discord-buttons");

    const embed = new discord.MessageEmbed()
      .setColor("7FFFEC")
      .setThumbnail("https://media.discordapp.net/attachments/825917983934251109/883105599548698684/20210903_044600.jpg?width=498&height=498")
      .setTitle('Click the button below to invite me to your server!')

    let button = new disbut.MessageButton()
      .setLabel("Invite Me!")
      .setStyle("url")
      .setURL("https://discord.com/oauth2/authorize?client_id=864920950549643355&scope=bot&permissions=37080590")

    message.channel.send(embed, button);
  }
}