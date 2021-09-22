const discord = require('discord.js')

module.exports = {
    name: 'soyuz1',
    description: 'Soyuz 1 disaster',
    cooldown: 1000 * 10,

    async run (bot, message, args) {
        const modar = new discord.MessageEmbed()
        .setColor('7FFFEC')
        .setTitle('Soyuz 1')
        .setThumbnail('https://lh3.googleusercontent.com/proxy/y1gqf6OZnt6zisfxhEJKT0WRSbS2fRbqDlvG3fniB3ijQrdjxsZlhZFNEibntb8aDN_ujAoiacrqaaLXL0Kknc0OntrLTfQFVnhsQw')
        .setDescription('Soyuz 1 was a crewed spaceflight of the Soviet space program. Launched into orbit on 23 April 1967 carrying cosmonaut colonel Vladimir Komarov, Soyuz 1 was the first crewed flight of the Soyuz spacecraft. The flight was plagued with technical issues, and Komarov was killed when the descent module crashed into the ground due to a parachute failure. This was the first in-flight fatality in the history of spaceflight.')
        .addField('Incident', 'Parachute failure')
        .addField('Date', '23 April 1967; 54 years ago')
        .addField('Time', '00:35:00 GMT')
        .addField('Crew Members', '<:ussr:888359138336313385>[Vladimir Komarov](https://en.wikipedia.org/wiki/Vladimir_Komarov), Pilot')
        .setImage('https://upload.wikimedia.org/wikipedia/id/5/57/Soy1crs3.jpg')
        .setTimestamp()

        message.channel.send(modar)
    }
}