const discord = require('discord.js')

module.exports = {
    name: 'servericon',
    aliases: ['si'],
    cooldown: 1000 * 10,
    description: 'Shows server icon',

    async run (bot, message, args) {
        const { guild } = message
        const { name } = guild
        const icon = guild.iconURL()

        const embed = new discord.MessageEmbed()
        .setColor('7FFFEC')
        .setTitle(`${name} Icon`)
        .setDescription(icon)
        .setImage(icon)

        message.channel.send(embed)
    }
}