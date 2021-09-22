const discord = require ('discord.js')
const pagination = require('discord.js-pagination')

module.exports = {
    name:'voyager',
    cooldown: 1000 * 10,
    description: 'information about Voyager satellite',

    async run (bot, message, args) {
        const page1 = new discord.MessageEmbed()
    .setTitle('Voyager 1')
    .setColor('#7FFFEC')
    .setDescription('Voyager 1 is a space probe launched by NASA on September 5, 1977, as part of the Voyager program to study the outer Solar System and interstellar space beyond the Sun\'s heliosphere. Launched 16 days after its twin, Voyager 2, Voyager 1 has operated for 43 years, 10 months and 28 days as of August 2, 2021 UTC [refresh] and still communicates with the Deep Space Network to receive routine commands and to transmit data to Earth. Real-time distance and velocity data is provided by NASA and JPL. At a distance of 152.2 AU from Earth as of May 31, 2021, it is the most distant man-made object from Earth. \nSource: Wikipedia')
    .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Voyager.jpg/220px-Voyager.jpg')
    .addFields(
        { name: 'General Information', value: 'Mission duration: 43 years, 10 months, 28 days elapsed \nManufacturer: Jet Propulsion Laboratory \nLaunch mass: 825.5 kg (1,820 lb) \nLaunch date: September 5, 1977, 12:56:00 UTC \nRocket: Titan IIIE' },
        { name: '\u200B', value: 'Page 1 | Voyager 1'},
    )

    .setFooter('Earth 1/2 ')
    .setTimestamp()

    //sekat----------------------------------------------------------------------------------------------------------

    const page2 = new discord.MessageEmbed()
    .setTitle('Voyager 2')
    .setColor('#7FFFEC')
    .setDescription('Voyager 2 is a space probe launched by NASA on August 20, 1977, to study the outer planets and interstellar space beyond the Sun\'s heliosphere. A part of the Voyager program, it was launched 16 days before its twin, Voyager 1, on a trajectory that took longer to reach Jupiter and Saturn but enabled further encounters with Uranus and Neptune. It is the only spacecraft to have visited either of these two ice giant planets. Voyager 2 was the fourth of five spacecraft to achieve the Solar escape velocity, which allowed it to leave the Solar System. \nSource: Wikipedia')
    .setThumbnail('https://steemitimages.com/DQmRsCadsBQgaqypemguZSFa9nj8svfedMTNdxfQfvfjssv/icon_voyager.png')
    .addFields(
        { name: 'General Information', value: 'Mission duration: 43 years, 11 months, 13 days elapsed \nManufacturer: Jet Propulsion Laboratory \nLaunch mass: 825.5 kilograms (1,820 lb) \nLaunch date: August 20, 1977, 14:29:00 UTC \nRocket: Titan IIIE' },
        { name: '\u200B', value: 'Page 2 | Voyager 2' },
    )

    .setFooter('Moon 2/2 Moon')
    .setTimestamp()

    //batas akhir---------------------------------------------------------------

    const page = [
        page1,
        page2
    ]

    const emoji = ["⬅️", "➡️"]

    const timeout = '99900'

    pagination(message, page, emoji, timeout)
   }
} 