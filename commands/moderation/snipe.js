const discord = require('discord.js')
const moment = require('moment')

module.exports = {
    name: "snipe",
    cooldown: 1000 * 10,
    description: "snipe message",

    async run (bot, message, args) {

const nope = new discord.MessageEmbed()
.setColor('FF0000')
.setDescription('<:error:879556245017722952> | There is no messages deleted in this channel')

        const snipes = bot.snipes.get(message.channel.id);
        if(!snipes) return message.lineReplyNoMention(nope).then(m => {
            m.delete({ timeout: 10000 });
        });

        const snipe = +args[0] - 1 || 0;
        const target = snipes[snipe];
        const only = new discord.MessageEmbed()
         .setColor('FF0000')
         .setDescription(`<:error:879556245017722952> | There is only ${snipes.length} messages`)
        if(!target) return message.lineReplyNoMention(only).then(m => {
            m.delete({ timeout: 10000 });
        })

        const { msg, time, image } = target;
        message.channel.send(
            new discord.MessageEmbed()
            .setAuthor(msg.author.tag, msg.author.displayAvatarURL())
            .setImage(image)
            .setDescription(msg.content)
            .setFooter(`${moment(time).fromNow()}`)
            .setColor("7FFFEC")
        )
    }
}