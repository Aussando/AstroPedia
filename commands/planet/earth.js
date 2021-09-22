const discord = require ('discord.js')
const pagination = require('discord.js-pagination')

module.exports = {
    name:'earth',
    cooldown: 1000 * 10,
    description: 'information about Earth',

    async run (bot, message, args) {
        const page1 = new discord.MessageEmbed()
    .setTitle('Earth')
    .setColor('#7FFFEC')
    .setDescription('Earth is the third planet from the Sun and the only astronomical object known to harbor and support life. About 29.2% of Earth\'s surface is land consisting of continents and islands. The remaining 70.8% is covered with water, mostly by oceans, seas, gulfs, and other salt-water bodies, but also by lakes, rivers, and other freshwater, which together constitute the hydrosphere. Much of Eart\'s polar regions are covered in ice. Earth\'s outer layer is divided into several rigid tectonic plates that migrate across the surface over many millions of years, while its interior remains active with a solid iron inner core, a liquid outer core that generates Earth\'s magnetic field, and a convective mantle that drives plate tectonics. \nSource: Wikipedia')
    .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/The_Earth_seen_from_Apollo_17.jpg/800px-The_Earth_seen_from_Apollo_17.jpg')
    .addFields(
        { name: 'General Information', value: 'Satellites: 1 \nDiameter: 12.742 km \nSurface gravity: 1 g' },
        { name: '\u200B', value: 'Page 1 | Earth'},
    )

    .setFooter('Earth 1/2 ')
    .setTimestamp()

    //sekat----------------------------------------------------------------------------------------------------------

    const page2 = new discord.MessageEmbed()
    .setTitle('Moon')
    .setColor('#7FFFEC')
    .setDescription('The Moon is Earth\'s only natural satellite. At about one-quarter the diameter of Earth (comparable to the width of Australia), it is the largest natural satellite in the Solar System relative to the size of its planet, the fifth largest satellite in the Solar System overall, and is larger than any known dwarf planet. Orbiting Earth at an average distance of 384,400 km (238,900 mi), or about 30 times Earth\'s diameter, its gravitational influence slightly lengthens Earth\'s day and is the main driver of Earth\'s tides. The Moon is classified as a planetary-mass object and a differentiated rocky body, and lacks any significant atmosphere, hydrosphere, or magnetic field. Its surface gravity is about one-sixth of Earth\'s (0.1654 g); Jupiter\'s moon Io is the only satellite in the Solar System known to have a higher surface gravity and density. \nSource: Wikipedia')
    .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/FullMoon2010.jpg/800px-FullMoon2010.jpg')
    .addFields(
        { name: 'General Information', value: 'Satellite of: Earth \nDiameter: 3.474,2 km \nSurface gravity: 0.1654 g' },
        { name: '\u200B', value: 'Page 2 | Moon' },
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