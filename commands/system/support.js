const discord = require('discord.js');

module.exports = {
    name: "support",
    aliases: ['server'],
    cooldown: 1000 * 10,
    description: "AstroPedia server link",

    async run (bot, message, args) {

const disbut = require("discord-buttons");

const embed = new discord.MessageEmbed()
.setColor("7FFFEC")
.setThumbnail("https://media.discordapp.net/attachments/825917983934251109/883106743192784967/20210903_045036.jpg?width=498&height=498")
.setTitle('Click the button below to join AstroPedia server!')

let button = new disbut.MessageButton()
  .setLabel("Support")
  .setStyle("url")
  .setURL("https://discord.gg/zmM5hVpzQs")

  message.channel.send(embed, button);
    }
}