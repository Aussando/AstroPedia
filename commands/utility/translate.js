const Discord = require('discord.js')
const translate = require('@iamtraction/google-translate')

module.exports = {
    name: "translate",
    cooldown: 1000 * 10,
    aliases: ['tl', 't'],
    description: "translate any language",
    usage: "[language code] [text]",

    async run (bot, message, args) {

const code = new Discord.MessageEmbed()
.setColor('FF0000')
.setDescription('<:error:879556245017722952> | Invalid usage or invalid language code! try: \n`,translate [language code] [text]`')
.setFooter('tips: type ,language to see the language code!')

const pakai = new Discord.MessageEmbed()
.setColor('FF0000')
.setDescription('<:error:879556245017722952> | Invalid usage! try: \n`,translate [language code] [text]`')
.setFooter('tips: type ,language to see the language code!')

        const txt = args.slice(1).join(" ")
        const lang = args[0]
        if(!lang) return message.lineReplyNoMention(code).then(m => {
            m.delete({ timeout: 10000 });
        })

        if(!txt) return message.lineReplyNoMention(pakai).then(m => {
                    m.delete({ timeout: 10000 });
                })

        translate(txt, {to: lang}).then(res => {
            const embed = new Discord.MessageEmbed()
            .setDescription(res.text)
            .setColor("7FFFEC")
            .setTimestamp()
            message.channel.send(embed);
        }).catch(err => {
            message.lineReplyNoMention(pakai).then(m => {
                m.delete({ timeout: 10000 });
            })
        })
    }

}