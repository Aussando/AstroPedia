const discord = require('discord.js')

module.exports = {
    name: 'taikonaut',
    cooldown: 1000 * 10,
    aliases: ['china'],
    description: 'information about Taikonaut',

    async run (bot, message, args) {
        const exampleEmbed = {
            color: '7FFFEC',
            author: {
                name: 'Taikonaut'
            },
            thumbnail: {
                url: 'https://i.pinimg.com/originals/0b/6a/9a/0b6a9ab12a9fa797dfdca3c35c2de4b6.jpg'
            },
            description: 'In Chinese, the term Yǔ háng yuán (宇航员, "Space-universe navigating personnel") is used for astronauts and cosmonauts in general, while hángtiān yuán (航天员, "navigating outer space personnel") is used for Chinese astronauts. Here, hángtiān (航天, literally "heaven-navigating", or spaceflight) is strictly defined as the navigation of outer space within the local star system, i.e. solar system. The phrase tàikōng rén (太空人, "spaceman") is often used in Hong Kong and Taiwan. \nSource: Wikipedia',
            image: {
                url: 'https://video.cgtn.com/news/2021-06-22/What-does-it-take-to-be-a-taikonaut--11hwXVttCww/video/732bc1ac96b449a5929c5ad604dcb05a/732bc1ac96b449a5929c5ad604dcb05a.jpeg'
            },
            timestamp: new Date(),

        };

        message.channel.send({ embed: exampleEmbed });
    }
}