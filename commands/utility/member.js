const discord = require('discord.js')

module.exports = {
    name: 'member',
    description: 'Show total member in server',
    cooldown: 1000 * 10,
    
    async run (bot, message, args) {
        const { guild } = message
        const { memberCount } = guild
        
        const embed = new discord.MessageEmbed()
        .setColor('7FFFEC')
        .addFields(
            {name: 'Members',value: memberCount}
        )
        .setTimestamp()
        
        message.channel.send(embed)
    }
}