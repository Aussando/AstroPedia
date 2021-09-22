const discord = require('discord.js')

module.exports = {
    name: 'challenger',
    description: 'challenger disaster',
    cooldown: 1000 * 10,

    async run (bot, message, args) {
        const meledak = new discord.MessageEmbed()
        .setColor('7FFFEC')
        .setThumbnail('https://media.discordapp.net/attachments/825917983934251109/884260334557343804/STS-51-L-patch-small.png?width=543&height=497')
        .setTitle("Space Shuttle Challenger disaster (STS-51-L)")
        .setDescription("The Space Shuttle Challenger disaster was a fatal accident in the United States' space program that occurred on January 28, 1986, when the Space Shuttle Challenger (OV-099) broke apart 73 seconds into its flight, killing all seven crew members aboard. The crew consisted of five NASA astronauts and two payload specialists. The mission carried the designation STS-51-L and was the tenth flight for the Challenger orbiter.")
        .addField('Incident', 'Launch booster failure, vehicle disintegration during launch')
        .addField('Date', 'January 28, 1986; 35 years ago')
        .addField('Time', '11:39:13 EST (16:39:13 UTC)')
        .addField('Crew Members', '🇺🇸 [Francis R. Scobee](https://en.wikipedia.org/wiki/Dick_Scobee), Commander \n🇺🇸 [Michael J. Smith](https://en.wikipedia.org/wiki/Michael_J._Smith_(astronaut\)), Pilot \n🇺🇸 [Ronald McNair](https://en.wikipedia.org/wiki/Ronald_McNair), Mission Specialist \n🇺🇸 [Ellison Onizuka](https://en.wikipedia.org/wiki/Ellison_Onizuka), Mission Specialist \n🇺🇸 [Judith Resnik](https://en.wikipedia.org/wiki/Judith_Resnik), Mission Specialist \n🇺🇸 [Gregory Jarvis](https://en.wikipedia.org/wiki/Gregory_Jarvis), Payload Specialist \n🇺🇸 [Christa McAuliffe](https://en.wikipedia.org/wiki/Christa_McAuliffe), Payload Specialist and Teacher')
        .setImage('https://media.discordapp.net/attachments/825917983934251109/884252783719632926/BurningBlue-HG-070221-ph12.png?width=595&height=400')
        .setTimestamp()
        
        message.channel.send(meledak)
    }
}