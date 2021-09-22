const discord = require('discord.js')

module.exports = {
    name: "sus",
    cooldown: 1000 * 10,
    description: "SUS SUS AMOGUS",

    async run (bot, message, args) {
        message.lineReplyNoMention("https://www.youtube.com/channel/UCc1lGoEVffJmXTrtd6GCn_A")
    }
}