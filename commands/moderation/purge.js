const discord = require('discord.js')

module.exports = {
    name: 'purge',
    description: 'Delete the message',
    cooldown: 1000 * 10,
    aliases: ['clear'],
    usage: "[count]",

    async run(bot, message, args) {
        const premis = new discord.MessageEmbed()
            .setColor('FF0000')
            .setDescription('Missing permission! \n\nyou need `Manage Messages` permission to use this command')

        const usage = new discord.MessageEmbed()
            .setColor('FF0000')
            .setDescription('Invalid usage! \n\ntry: `,purge [count]` \nexample: `,purge 10')

        if (!message.member.hasPermission('MANAGE_MESSAGES')) {

            return message.lineReplyNoMention(premis).then(m => {
                m.delete({ timeout: 10000 });
            });

        }

        let amount = args[0];
        if (isNaN(amount)) return message.lineReplyNoMention(usage).then(m => {
            m.delete({ timeout: 10000 });
        })

        if (amount < 1) return;
        if (amount > 99) amount = 99;

        try {
            await message.channel.bulkDelete(parseInt(amount) + 1, true).then(m => {
                message.channel.send(`\`${parseInt(m.size) - 1} messages\` deleted!`).then(m => {
                    m.delete({ timeout: 10000 });
                })
            })
        } catch {
            return message.lineReplyNoMention('There was an error. Please try again!')
        }
    }
}