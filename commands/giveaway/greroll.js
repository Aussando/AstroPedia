const discord = require('discord.js')

module.exports = {
    name: 'greroll',
    cooldown: 1000 * 5,
    description: 'roll the winner',

    async run(bot, message, args) {
//--------------------------------------------------------------------EMBED
        const pakai = new discord.MessageEmbed()
            .setColor('FF0000')
            .setDescription('Invalid Usage! \n\ntry: `,greroll [message ID]` \nexample: `,greroll 885069988300464138`')

        const permis = new discord.MessageEmbed()
            .setColor('FF0000')
            .setDescription("Missing permission! \n\nyou need `Manage Messages` permission to use this command")

//--------------------------------------------------------------------COMMAND
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.lineReplyNoMention(permis).then(m => {
            m.delete({ timeout: 10000 });
        })

        const messageID = args[0];
        if (!messageID) return message.lineReplyNoMention(pakai).then(m => {
            m.delete({ timeout: 10000 });
        })

        bot.giveawaysManager.reroll(messageID).catch((err) => {
            message.channel.send("No giveaway found for " + messageID + ", please check and try again");
        });
    }
}