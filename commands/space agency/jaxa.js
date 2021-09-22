const Discord = require('discord.js')

module.exports = {
    name: "jaxa",
    cooldown: 1000 * 10,
    description: "information about jaxa",

    async run (bot, message, args) {
        const exampleEmbed = {
            color: '#7FFFEC',
            title: 'JAXA',
            author: {
                name: 'Japan Aerospace Exploration Agency',
            },
            description: 'JAXA is the Japanese national aerospace and space agency. Through the merger of three previously independent organizations, JAXA was formed on 1 October 2003. JAXA is responsible for research, technology development and launch of satellites into orbit, and is involved in many more advanced missions such as asteroid exploration and possible human exploration of the Moon. Its motto is One JAXA and its corporate slogan is Explore to Realize (formerly Reaching for the skies, exploring space). \nSource: Wikipedia',
            thumbnail: {
                url: 'https://media.discordapp.net/attachments/840357501874733057/865567486794530857/1024px-Jaxa_logo.png?width=768&height=478',
            },
            fields: [
                {
                    name: 'General Information',
                    value: 'Country: Japan \nFormed: 1 October 2003; 17 years ago \nAdministrator: Hiroshi Yamakawa',
                },
                {
                    name: 'Rocket',
                    value: 'Epsilon Launch Vehicle \nH-IIB Launch Vehicle \nH-IIA Launch Vehicle \nS-310/S-520/SS-520 (Sounding Rockets)',
                },
            ],


            timestamp: new Date(),
        };
        
        message.channel.send({ embed: exampleEmbed });
    }
}