const discord = require('discord.js')
const ms = require('ms')

module.exports = {
    name: 'gstart',
    cooldown: 1000 * 5,
    description: 'start a giveaway!',

    async run(bot, message, args) {
//--------------------------------------------------------------------EMBED
        const pakai = new discord.MessageEmbed()
            .setColor('FF0000')
            .setDescription("Invalid usage! \n\ntry: `,gstart [duration] [winner] [prize]` \nexample: `,gstart 1h 1 Discord Nitro`")

        const permis = new discord.MessageEmbed()
            .setColor('FF0000')
            .setDescription("Missing permission! \n\nyou need `Manage Messages` permission to use this command")

//--------------------------------------------------------------------COMMAND
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.lineReplyNoMention(permis).then(m => {
            m.delete({ timeout: 10000 });
        })

        let giveawayDuration = args[0];

        if (!giveawayDuration || isNaN(ms(giveawayDuration))) return message.lineReplyNoMention(pakai).then(m => {
            m.delete({ timeout: 10000 });
        })

        let giveawayWinners = args[1]

        if (isNaN(giveawayWinners) || (parseInt(giveawayWinners) <= 0)) return message.lineReplyNoMention(pakai).then(m => {
            m.delete({ timeout: 10000 });
        })

        let giveawayPrize = args.slice(2).join(" ")

        if (!giveawayPrize) return message.lineReplyNoMention(pakai)

        bot.giveawaysManager.start(message.channel, {
            time: ms(giveawayDuration),
            prize: giveawayPrize,
            winnerCount: giveawayWinners,
            hostedBy: bot.config.hostedBy ? message.author : null,

            messages: {
                giveaway: ":tada::tada: **GIVEAWAY** :tada::tada:",
                giveawayEnded: ":tada::tada: **GIVEAWAY ENDED** :tada::tada:",
                timeRemaining: "Time Remaining **{duration}**",
                inviteToParticipate: "React with 🎉 to join the giveaway!",
                winMessage: "Congrats {winners}!, you win **{prize}**",
                embedFooter: "Giveaway Time!",
                noWinner: "Could not determine a winner",
                hostedBy: 'Hosted by {user}',
                winners: "winners",
                endedAt: 'Ends at',
                units: {
                    seconds: "seconds",
                    minutes: "minutes",
                    hours: 'hours',
                    days: 'days',
                    pluralS: false
                }
            }
        }).then(message.delete())
    }
}
