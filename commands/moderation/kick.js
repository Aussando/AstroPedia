const discord = require('discord.js');

module.exports = {
    name: 'kick',
    description: 'Kick an user from server',
    cooldown: 1000 * 10,
    usage: "[@user] [reason]",

    async run(bot, message, args) {

        const premis = new discord.MessageEmbed()
            .setColor('FF0000')
            .setDescription('Missing permission! \n\nyou need `Kick Members` permission to use this command')

        const usage = new discord.MessageEmbed()
            .setColor('FF0000')
            .setDescription("Invalid usage! \n\ntry: `,kick [@user] [optional reason]` \nexample: `,kick @Aussando#7447 spam`")

        const gakkick = new discord.MessageEmbed()
            .setColor('FF0000')
            .setDescription('Invalid usage! \n\nI can\'t kick this user, sorry')

        const kickdiri = new discord.MessageEmbed()
            .setColor('FF0000')
            .setDescription("Invalid usage! \n\nI can't kick you lmao")



        if (!message.member.hasPermission('KICK_MEMBERS')) {

            return message.lineReplyNoMention(premis).then(m => {
                m.delete({ timeout: 10000 });
            });

        }

        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(u => u.user.tag === args[0]);

        if (!user) {

            return message.lineReplyNoMention(usage).then(m => {
                m.delete({ timeout: 10000 });
            })
        }

        if (!user.kickable) {

            return message.lineReplyNoMention(gakkick).then(m => {
                m.delete({ timeout: 10000 });
            });

        }

        if (user.id === message.author.id) {

            return message.lineReplyNoMention(kickdiri).then(m => {
                m.delete({ timeout: 10000 });
            });

        }

        let reason = args.slice(1).join(' ');

        if (!reason) {
            reason = 'No reason'
        }

        let embed = new discord.MessageEmbed()
            .setColor('#7FFFEC')
            .setAuthor('Member sucessfully kicked!', user.user.displayAvatarURL())
            .addField('Reason:', reason, true)
            .addField('Moderator:', message.author.tag, true)
            .setTimestamp();

        let userEmbed = new discord.MessageEmbed()
            .setColor('#7FFFEC')
            .setAuthor(`You have been kicked from ${message.guild.name}!`)
            .addField('Reason', reason, true)
            .addField('Moderator', message.author.tag, true);

        let errEmbed = new discord.MessageEmbed()
            .setColor('#7FFFEC')
            .setAuthor('Something Wrong');

        user.send(userEmbed).catch(e => console.log(e));
        let msg = await message.channel.send(embed);

        user.kick(`By: ${message.author.tag} | Reason: ${reason}`).catch(e => { msg.edit('', errEmbed.setDescription(`Error: ${e}`)) });

    }
}