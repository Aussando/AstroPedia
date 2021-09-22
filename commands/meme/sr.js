const discord = require('discord.js')

const Discord = require('discord.js')

module.exports = {
    name: "rick",
    cooldown: 1000 * 10,
    description: "Never gonna give you up!",

    async run (bot, message, args) {
        message.channel.send('https://tenor.com/view/dance-moves-dancing-singer-groovy-gif-17029825')
    }
}