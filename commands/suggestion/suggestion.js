const discord = require('discord.js')

module.exports = {
    name: 'suggestion',
    aliases: ['suggest'],
    description: 'suggest everything!',
    cooldown: 1000 * 120,

    async run (bot, message, args) {
        if (message.guild.id !== "868525750184214578") return message.channel.send("This command only applies to the support server! \ntype `,support` to join AstroPedia support server")
        
        const suggesttionQuery = args.join(" ") 
        if(!suggesttionQuery) return message.lineReplyNoMention("Please specify a suggestion!");

        const embed = new discord.MessageEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL({dynamic: true}))
        .setDescription(suggesttionQuery)
        .setColor('FFFF00')
        .setTimestamp()
        .setFooter('Pending/waiting for reply')

        message.channel.send('Your suggestion has been submitted! check <#868532390719533086> ')
        message.guild.channels.cache.get('868532390719533086').send(embed).then(message => {
            message.react('👍').then(() => {
                message.react('👎')
            })
        })
    }
}