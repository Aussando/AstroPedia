const Discord = require('discord.js')

module.exports = {
    name: "lock",
    cooldown: 1000 * 10,
    description: "Lock the room",

    async run(bot, message, args) {
        const premis = new discord.MessageEmbed()
            .setColor('FF0000')
            .setDescription('Missing permission! \n\nyou need `Manage Channels` permission to use this command')

        const loading = new Discord.MessageEmbed()
            .setColor('A9A9A9')
            .setDescription('<a:loading:880528094249771058> | Loading...')

        const lock = new Discord.MessageEmbed()
            .setColor('#3CFA00')
            .setDescription('<:check:880526429262057623> | Successfully Locked the channel!')

        if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.lineReplyNoMention(premis).then(m => {
            m.delete({ timeout: 10000 });
        })

        let msg = await message.channel.send(loading)

        try {
            message.channel.updateOverwrite(message.guild.roles.cache.find(e => e.name.toLowerCase().trim() == "@everyone"), {
                SEND_MESSAGES: false
            })
            msg.edit(lock)
        } catch (e) {
            console.log(e)
        }
    }
}