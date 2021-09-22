const discord = require('discord.js')
const PrefixSchema = require('../schema/PrefixSchema')

module.exports = {
    name: 'setprefix',
    aliases: ['sp'],
    description: 'Change AstroPedia prefix',
    cooldown: 1000 * 10,
    usage: '[new prefix]',

    async run (bot, message, args) {
        const permision = new discord.MessageEmbed()
        .setColor('FF0000')
        .setDescription('<:error:879556245017722952> | You can\'t use this command')

        const baru = new discord.MessageEmbed()
        .setColor('FF0000')
        .setDescription('<:error:879556245017722952> | Please provide a new Prefix')

        const max = new discord.MessageEmbed()
        .setColor('FF0000')
        .setDescription('<:error:879556245017722952> | This prefix is too long, you have max 3 caracters')


        if(!message.member.hasPermission('ADMINISTRATOR')) {
            return message.channel.send(permision).then(m => {
            m.delete({ timeout: 10000 });
        })
        }

        const newprefix = args[0]
        if(!newprefix) return message.channel.send(baru).then(m => {
            m.delete({ timeout: 10000 });
        })

        if(newprefix.length > 3) return message.channel.send(max)

        let data;
        try{
            data = await PrefixSchema.findOne({
                _id: message.guild.id
            })
            if(!data) {
                let newdata = await PrefixSchema.create({
                    _id: message.guild.id,
                    newPrefix: newprefix
                })
                newdata.save()
            } else {
                await PrefixSchema.findOneAndUpdate({
                    _id: message.guild.id,
                    newPrefix: newprefix,
                })
            }
            message.lineReplyNoMention(`The prefix has been set to \`${newprefix}\``)
        } catch (err) {
            console.log(err)
        }
    }   
}