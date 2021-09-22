const Discord = require('discord.js')

module.exports = {
    name: "virginorbit",
    cooldown: 1000 * 10,
    description: "information about Virgin Orbit",

    async run (bot, message, args) {
        const exampleEmbed = {
            color: '#7FFFEC',
            title: 'Virgin Orbit',
            description: 'Virgin Orbit is a company within the Virgin Group which provides launch services for small satellites. On January 17, 2021, their LauncherOne successfully reached orbit, and successfully deployed 10 cubesats. \nSource: Wikipedia',
            thumbnail: {
                url: 'https://upload.wikimedia.org/wikipedia/en/7/71/Virgin_Orbin_company_logo_2017.png',
            },
            fields: [
                {
                    name: 'General Information',
                    value: 'Country: United States \nFormed: March 2, 2017; 4 years ago \nPresident and CEO: Dan Hart',
                },
                {
                    name: 'Rocket',
                    value: 'LauncherOne',
                },
            ],


            timestamp: new Date(),
        };
        
        message.channel.send({ embed: exampleEmbed });
    }
}