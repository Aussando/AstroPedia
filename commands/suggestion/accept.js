const discord = require('discord.js')

module.exports = {
    name: 'accept',
    cooldown: 1000 * 1,
    description: 'accept a suggestion',

async run (bot, message, args) {
        if(!message.member.hasPermission('MANAGE_MESSAGE')) return message.lineReplyNoMention("You can\'t use this command!")
        const salah = new discord.MessageEmbed()
        .setColor("FF0000")
        .setDescription("Invalid usage! \n\ntry: `,accept [message ID] [message]` \nexample: `,accept 12345678910 mantep bwang`")

        const messageID = args[0]
        if(!messageID) return message.lineReplyNoMention(salah)
        const acceptQuery = args.slice(1).join(" ")
        if(!acceptQuery) return message.lineReplyNoMention(salah)
        try {
            const suggestionChannel = message.guild.channels.cache.get('868532390719533086')
            const SuggestedEmbed = await suggestionChannel.messages.fetch(messageID)
            const data = SuggestedEmbed.embeds[0]
            const acceptEmbed = new discord.MessageEmbed()
            .setAuthor(data.author.name, data.author.iconURL)
            .setDescription(data.description)
            .setColor('#00FF00')
            .addField(`Reply from ${message.author.tag}`, acceptQuery)
            .setFooter('Accepted')
            .setTimestamp()

            SuggestedEmbed.edit(acceptEmbed)
            message.channel.send(`Accepted **${data.author.name}** suggestion!`)

            const user = await bot.users.cache.find(
                (u) => u.tag === data.author.name)
            user.send(`Your suggestion has been accepted by ${message.author.tag}!`)
            
        } catch(err) {
            console.log(err)
            message.channel.send('That suggestion does not exist')
        }
    }
}