const discord = require('discord.js')

module.exports = {
    name: 'astronaut',
    aliases: ['astro'],
    cooldown: 1000 * 10,
    description: 'information about astronaut',

    async run (bot, message, args) {
        const exampleEmbed = {
            color: '7FFFEC',
            author: {
                name: 'Astronaut'
            },
            thumbnail: {
                url: 'https://www.airforcemag.com/app/uploads/2020/10/jsc2017e005228-scaled.jpg'
            },
            description: 'An astronaut is a person trained, equipped, and deployed by a human spaceflight program to serve as a commander or crew member aboard a spacecraft. Although generally reserved for professional space travelers, the terms are sometimes applied to anyone who travels into space, including scientists, politicians, journalists and tourists. \nSource: Wikipedia',
            image: {
                url: 'https://cdn.mos.cms.futurecdn.net/Jwd8eBg9emAyQ8brvMYPdU.jpg'
            },
            timestamp: new Date(),

        };

        message.channel.send({ embed: exampleEmbed });
    }
}