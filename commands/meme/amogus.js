const discord = require('discord.js')

module.exports = {
    name: 'amogus',
    description: 'Show amogus picture',
    cooldown: 1000 * 10,
    aliases: ['mogus'],
    
    async run (bot, message, args) {
        message.channel.send('https://pbs.twimg.com/profile_images/1364920241265012743/Y__158zv_400x400.png')
    }
}