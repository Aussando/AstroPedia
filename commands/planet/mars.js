const discord = require ('discord.js')
const pagination = require('discord.js-pagination')

module.exports = {
    name:'mars',
    cooldown: 1000 * 10,
    description: 'information about Mars',

    async run (bot, message, args) {
        const page1 = new discord.MessageEmbed()
    .setTitle('Mars')
    .setColor('#7FFFEC')
    .setDescription('Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the "Red Planet". The latter refers to the effect of the iron oxide prevalent on Mars\'s surface, which gives it a reddish appearance distinctive among the astronomical bodies visible to the naked eye. Mars is a terrestrial planet with a thin atmosphere, with surface features reminiscent of the impact craters of the Moon and the valleys, deserts and polar ice caps of Earth. \nSource: Wikipedia')
    .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/OSIRIS_Mars_true_color.jpg/800px-OSIRIS_Mars_true_color.jpg')
    .addFields(
        { name: 'General Information', value: 'Satellites: 2 \nDiameter: 6.779 km \nSurface gravity: 0.3794 g' },
        { name: '\u200B', value: 'Page 1 | Mars'},
    )

    .setTimestamp()

    //sekat----------------------------------------------------------------------------------------------------------

    const page2 = new discord.MessageEmbed()
    .setTitle('Phobos')
    .setColor('#7FFFEC')
    .setDescription('Phobos is the innermost and larger of the two natural satellites of Mars, the other being Deimos. Both moons were discovered in 1877 by American astronomer Asaph Hall. Phobos is named after the Greek god Phobos, a son of Ares (Mars) and Aphrodite (Venus) and twin brother of Deimos. Phobos was the god and personification of fear and panic (cf. phobia). \nSource: Wikipedia')
    .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Phobos_colour_2008.jpg/800px-Phobos_colour_2008.jpg')
    .addFields(
        { name: 'General Information', value: 'Satellite of: Mars \nDiameter: 22,533 km \nSurface gravity: 581.4 µ g' },
        { name: '\u200B', value: 'Page 2 | Phobos' },
    )

    .setTimestamp()

    //sekat---------------------------------------------------------------------------------------------------------

    const page3 = new discord.MessageEmbed()
    .setTitle('Deimos')
    .setColor('#7FFFEC')
    .setDescription('Deimos is the smaller and outermost of the two natural satellites of Mars, the other being Phobos. Deimos has a mean radius of 6.2 km (3.9 mi) and takes 30.3 hours to orbit Mars. Deimos is 23,460 km (14,580 mi) from Mars, much further than Mars\'s other moon, Phobos. It is named after Deimos, the Ancient Greek god and personification of dread and terror, and who is also a son of Ares and Aphrodite and the twin brother of Phobos. \nSource: Wikipedia')
    .setThumbnail('')
    .addFields(
        { name: 'General Information', value: 'Satellite of: Mars \nDiameter: 22,533 km \nSurface gravity: 581.4 µ g' },
        { name: '\u200B', value: 'Page 2 | Deimos' },
    )

    .setTimestamp()

    //batas akhir---------------------------------------------------------------

    const page = [
        page1,
        page2,
        page3
    ]

    const emoji = ["⬅️", "➡️"]

    const timeout = '99900'

    pagination(message, page, emoji, timeout)
   }
} 