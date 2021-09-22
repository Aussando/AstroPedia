const discord = require('discord.js');

module.exports = {
    name: 'ban',
    description: 'ban an user from server',
    cooldown: 1000 * 10,
    usage: "[@user] [reason]",

    async run(bot, message, args) {

        const premis = new discord.MessageEmbed()
            .setColor('FF0000')
            .setDescription('Missing permission! \n\nyou need `Ban Members` permission to use this command')

        const usage = new discord.MessageEmbed()
            .setColor('FF0000')
            .setDescription("Invalid usage! \n\ntry: `,ban [@user] [optional reason]` \nexample: `,ban @Aussando#7447 spam`")

        const gakban = new discord.MessageEmbed()
            .setColor('FF0000')
            .setDescription('Invalid usage! \n\nI can\'t ban this user, sorry')

        const bandiri = new discord.MessageEmbed()
            .setColor('FF0000')
            .setDescription("Invalid usage! \n\nI can't ban you lmao")

        if (!message.member.hasPermission('BAN_MEMBERS')) {

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

        if (!user.bannable) {

            return message.lineReplyNoMention(gakban).then(m => {
                m.delete({ timeout: 10000 });
            });

        }

        if (user.id === message.author.id) {

            return message.lineReplyNoMention(bandiri).then(m => {
                m.delete({ timeout: 10000 });
            });

        }

        let reason = args.slice(1).join(' ');

        if (!reason) {
            reason = 'No reason'
        }

        let embed = new discord.MessageEmbed()
            .setColor('#7FFFEC')
            .setAuthor(`${user.user.tag} sucessfully banned!`, user.user.displayAvatarURL())
            .addField('Reason:', reason, true)
            .addField('Moderator:', message.author.tag, true)
            .setTimestamp();

        let userEmbed = new discord.MessageEmbed()
            .setColor('#7FFFEC')
            .setAuthor(`You have been banned from **${message.guild.name}**!`)
            .addField('Reason', reason, true)
            .addField('Moderator', message.author.tag, true);

        let errEmbed = new discord.MessageEmbed()
            .setColor('#7FFFEC')
            .setAuthor('Something Wrong');

        user.send(userEmbed).catch(e => console.log(e));
        let msg = await message.channel.send(embed);

        await user.ban({ reason: reason }).catch(e => console.log(e));

    }
}