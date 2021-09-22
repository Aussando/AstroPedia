const discord = require('discord.js');

module.exports = {
    name: "emojify",
    cooldown: 1000 * 10,
    description: "Turn you message to emoji",
    usage: "[text]",

    async run (bot, message, args) {
        if(!args.length) return message.lineReplyNoMention('Please specify a text to translate.').then(m => {
            m.delete({ timeout: 5000 });
        })
        const specialCodes = {
            '0': ':zero:',
            '1': ':one:',
            '2': ':two:',
            '3': ':three:',
            '4': ':four:',
            '5': ':five:',
            '6': ':six:',
            '7': ':seven:',
            '8': ':eight:',
            '9': ':nine:',
            '#': ':hash:',
            '*': ':asterisk:',
            '?': ':grey_question:',
            '!': ':grey_exclamation:',
            ' ': '   '
          }
        const text = args.join(" ").toLowerCase().split('').map(letter => {
            if(/[a-z]/g.test(letter)) {
                return `:regional_indicator_${letter}:`
            } else if (specialCodes[letter]) {
                return `${specialCodes[letter]}`
            }
            return letter;
        }).join('');

        message.channel.send(text)
    }
}