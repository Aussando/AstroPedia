const Discord = require('discord.js')

module.exports = {
    name: "relativityspace",
    cooldown: 1000 * 10,
    description: "Relativity Space command",

    async run (bot, message, args) {
        const exampleEmbed = {
            color: '#7FFFEC',
            title: 'information about Relativity Space',
            description: 'Relativity Space is an American aerospace manufacturing company headquartered in Los Angeles, California. It was founded in 2015 by Tim Ellis and Jordan Noone. Relativity Space is developing manufacturing technologies, launch vehicles and rocket engines for commercial orbital launch services. \nSource: Wikipedia',
            thumbnail: {
                url: 'https://relativityspace.com/s/relativity-logo-square.png',
            },
            fields: [
                {
                    name: 'General Information',
                    value: 'Country: United States \nFormed: 2015; 6 years ago \nCEO: Tim Ellis \nCo-founder, Executive Advisor: Jordan Noone',
                },
                {
                    name: 'Rocket',
                    value: 'Terran 1 \nTerran R',
                },
            ],


            timestamp: new Date(),
        };
        
        message.channel.send({ embed: exampleEmbed });
    }
}