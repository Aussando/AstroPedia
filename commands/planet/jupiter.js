const discord = require ('discord.js')
const pagination = require('discord.js-pagination')

module.exports = {
    name:'jupiter',
    cooldown: 1000 * 10,
    description: 'information about Jupiter',

    async run (bot, message, args) {
        const page1 = new discord.MessageEmbed()
    .setTitle('Jupiter')
    .setColor('#7FFFEC')
    .setDescription('Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass more than two and a half times that of all the other planets in the Solar System combined, but slightly less than one-thousandth the mass of the Sun. Jupiter is the third-brightest natural object in the Earth\'s night sky after the Moon and Venus. It has been observed since pre-historic times and is named after the Roman god Jupiter, the king of the gods, because of its observed size. \nSource: Wikipedia')
    .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Jupiter_and_its_shrunken_Great_Red_Spot.jpg/800px-Jupiter_and_its_shrunken_Great_Red_Spot.jpg')
    .addFields(
        { name: 'General Information', value: 'Satellites: 79 \nDiameter: 139.820 km \nSurface gravity: 2.528 g' },
        { name: '\u200B', value: 'Page 1 | Jupiter'},
    )

    .setTimestamp()

    //sekat kimak

    const page2 = new discord.MessageEmbed()
    .setTitle('Galilean Moons')
    .setColor('#7FFFEC')
    .setDescription('The moons discovered by Galileo—Io, Europa, Ganymede, and Callisto—are among the largest in the Solar System. The orbits of three of them (Io, Europa, and Ganymede) form a pattern known as a Laplace resonance; for every four orbits that Io makes around Jupiter, Europa makes exactly two orbits and Ganymede makes exactly one. This resonance causes the gravitational effects of the three large moons to distort their orbits into elliptical shapes, because each moon receives an extra tug from its neighbors at the same point in every orbit it makes. The tidal force from Jupiter, on the other hand, works to circularise their orbits. \nSource: Wikipedia')
    .addFields(
        { name: 'General Information', value: 'Satellite of: Jupiter \nMoons: Io, Europa, Ganymede, Callisto' },
        { name: '\u200B', value: 'Page 2 | Galilean Moons' },
    )
    .setImage('https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/The_Galilean_satellites_%28the_four_largest_moons_of_Jupiter%29.tif/lossy-page1-1024px-The_Galilean_satellites_%28the_four_largest_moons_of_Jupiter%29.tif.jpg')

    .setTimestamp()

    const page = [
        page1,
        page2
    ]
    
    const emoji = ["⬅️", "➡️"]
    
    const timeout = '99900'
    
    pagination(message, page, emoji, timeout)

    }
}