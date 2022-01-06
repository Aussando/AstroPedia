const discord = require('discord.js')

module.exports = {
    name: 'venusimage',
    description: 'shows venus image',
    aliases: ['venusi', 'vi'],
    cooldown: 1000 * 10,

    async run (bot, message, args) {
        const messages = [
            "https://planetary.s3.amazonaws.com/web/assets/pictures/venus-surface-venera-9.jpg",
            "https://planetary.s3.amazonaws.com/web/assets/pictures/venus-surface-venera-10.jpg",
            "https://planetary.s3.amazonaws.com/web/assets/pictures/venus-surface-venera-13-a.jpg",
            "https://planetary.s3.amazonaws.com/web/assets/pictures/venus-surface-venera-13-b.jpg",
            "https://planetary.s3.amazonaws.com/web/assets/pictures/venus-surface-venera-14-camera-1.jpg",
            "https://planetary.s3.amazonaws.com/web/assets/pictures/venus-surface-venera-14-camera-2.jpg"
        ]
    
            const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    
            const embed = new discord.MessageEmbed()
            .setColor('7FFFEC')
            .setTitle('Venus Image')
            .setURL(randomMessage)
            .setImage(randomMessage)
            .setFooter('Image by Venera 9,10,13,14 probe')
            .setTimestamp()
    
            message.channel.send(embed)
    }
}