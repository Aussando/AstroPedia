const discord = require('discord.js')

module.exports = {
    name: 'columbia',
    description: 'columbia disaster',
    cooldown: 1000 * 10,

    async run (bot, message, args) {
        const modar = new discord.MessageEmbed()
        .setColor('7FFFEC')
        .setTitle('Space Shuttle Columbia disaster (STS-107)')
        .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/STS-107_Flight_Insignia.svg/800px-STS-107_Flight_Insignia.svg.png')
        .setDescription('The Space Shuttle Columbia disaster was a fatal incident in the United States space program that occurred on February 1, 2003, when the Space Shuttle Columbia (OV-102) disintegrated as it reentered the atmosphere, killing all seven crew members. The disaster was the second fatal accident in the Space Shuttle program, after the 1986 breakup of Challenger soon after liftoff.')
        .addField('Incident', 'Vehicle disintegration on re-entry')
        .addField('Date', 'February 1, 2003; 18 years ago')
        .addField('Time', '08:59 EST (13:59 UTC)')
        .addField('Crew Members', '🇺🇸 [Rick Husband](https://en.wikipedia.org/wiki/Rick_Husband), Commander \n🇺🇸 [William C. McCool](https://en.wikipedia.org/wiki/William_C._McCool), Pilot \n🇺🇸 [Michael P. Anderson](https://en.wikipedia.org/wiki/Michael_P._Anderson), Mission specialist \n🇺🇸🇮🇳 [Kalpana Chawla](https://en.wikipedia.org/wiki/Kalpana_Chawla), Mission specialist \n🇺🇸 [David M. Brown](https://en.wikipedia.org/wiki/David_M._Brown), Mission specialist \n🇺🇸 [Laurel Clark](https://en.wikipedia.org/wiki/Laurel_Clark), Mission specialist \n🇮🇱 [Ilan Ramon](https://en.wikipedia.org/wiki/Ilan_Ramon), Payload specialist')
        .setImage('https://www.gannett-cdn.com/media/USATODAY/USATODAY/2013/01/31/a01-shuttle-31-16_9.jpg?width=660&height=374&fit=crop&format=pjpg&auto=webp')
        .setTimestamp()

        message.channel.send(modar)
    }
}