const discord = require('discord.js')
const { Wikipedia } = require("ultrax")

module.exports = {
    name: "wikipedia",
    cooldown: 1000 * 5,
    aliases: ['wiki'],
    description: "Search anything in Wikipedia",
    usage: "[query]",

    async run (bot, message, args) {

    let query = args.join(" ")
    if(!query) return message.lineReplyNoMention("Please include a query")

    const res = new Wikipedia({ 
        message: message, 
        color: "7FFFEC", 
        query: query
    })

    res.fetch()
   }
}