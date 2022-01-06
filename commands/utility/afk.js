const discord = require('discord.js')
const schema = require('../schema/afk-schema')

module.exports = {
    name: 'afk',
    description: 'set you to afk',
    cooldown: 1000 * 10,
    usage: '[message]',

    async run (bot, message, args) {
        let data;
    try {
        data = await schema.findOne({
            userId: message.author.id,
            guildId: message.guild.id,
        })
        if(!data) {
            data = await schema.create({
                userId: message.author.id,
                guildId: message.guild.id,
            })
        }
    } catch(e) {
        console.log(e)
    }

    const reason = args.join(" ")
    
    message.lineReplyNoMention(`Your <:afk:883112715252555906> is now set to: ${reason || "AFK"}`)

    if(message.guild.roles.highest.name > message.guild.members.resolve(bot.user).roles.highest.name) message.member.setNickname(`[AFK] ${message.author.username}`)

    data.AFK = true
    data.AFK_Reason = args.join(" ")
    await data.save()

    }
} 
