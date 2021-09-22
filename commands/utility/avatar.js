const discord = require('discord.js')

module.exports = {
    name: 'avatar',
    description: 'Show you avatar or another user avatar',
    cooldown: 1000 * 10,
    usage: '[@user]',

    async run (bot, message, args) {
        let user = message.mentions.users.first() 
         || message.guild.members.cache.get(args[0])?.user
         || message.author;
        let avatar = user.displayAvatarURL({size: 1024, dynamic: true})
        
        let embed = new discord.MessageEmbed()
        .setTitle(`${user.username} Avatar`)
        .setImage(avatar)
        .setColor('7FFFEC')
        message.channel.send(embed)
    }
}