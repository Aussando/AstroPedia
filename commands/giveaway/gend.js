const discord = require('discord.js')

module.exports = {
    name: 'gend',
    cooldown: 1000 * 5,
    description: 'end a giveaway',

    async run(bot, message, args) {
//--------------------------------------------------------------------EMBED
        const pakai = new discord.MessageEmbed()
            .setColor('ff0000')
            .setDescription("Invalid usage! \n\ntry: `,gend [message ID]` \nexample: `,gend 1234567890123456789`")

        const permis = new discord.MessageEmbed()
            .setColor('FF0000')
            .setDescription("Missing permission! \n\nyou need `Manage Messages` permission to use this command")

//--------------------------------------------------------------------COMMAND
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.lineReplyNoMention(permis).then(m => {
            m.delete({ timeout: 10000 });
        })

        let messageID = args[0];

        if (!messageID) return message.lineReplyNoMention(pakai).then(m => {
            m.delete({ timeout: 10000 });
        })

        bot.giveawaysManager.edit(messageID, {
            setEndTimestamp: Date.now(),
            giveawayEnd: ":tada::tada: **GIVEAWAY ENDED** :tada::tada:"
        }).catch(err => {
            console.log(err)
            message.channel.send(err)
        })
    }
}