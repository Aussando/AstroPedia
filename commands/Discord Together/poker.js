const discord = require('discord.js')

module.exports = {
    name: 'poker',
    description: 'play poket with your friends in Discord voice!',
    cooldown: 1000 * 10,

    async run (bot, message, args) {
        let voiceChannel = message.member.voice.channel;

        if (!voiceChannel) return message.channel.send('Please join a voice channel first')

        bot.discordTogether.createTogetherCode(message.member.voice.channel.id, 'poker').then(async invite => {
            return message.channel.send(`_Note: you have to click on the BLUE LINK, not the 'Play' button, in order to start the activity!_ \n\nLink: ${invite.code}`);
        });
    }
}