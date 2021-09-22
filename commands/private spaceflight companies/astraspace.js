const Discord = require('discord.js')

module.exports = {
    name: "astraspace",
    cooldown: 1000 * 10,
    description: "information about Astraspace",

    async run (bot, message, args) {
        const exampleEmbed = {
            color: '#7FFFEC',
            title: 'Astra Space',
            description: 'Astra is an American launch vehicle company based in Alameda, California. Astra was incorporated in October 2016 by Chris Kemp and Adam London. Formerly known in media as "Stealth Space Company", the company formally came out as Astra Space, Inc. in a Bloomberg L.P. article by Ashlee Vance. Investors include BlackRock, Advance, ACME, Airbus Ventures, Innovation Endeavors, Salesforce co-founder Marc Benioff, former Disney CEO Michael Eisner and more \nSource: Wikipedia',
            thumbnail: {
                url: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Astra%2C_Inc._logo_black.png',
            },
            fields: [
                {
                    name: 'General Information',
                    value: 'Country: United States \nFormed: October 2016; 5 years ago \nFounder:  Chris Kemp and Adam London',
                },
                {
                    name: 'Rocket',
                    value: 'Astra Rocket 1 \nAstra Rocket 2 \nAstra Rocket 3 \nSALVO',
                },
            ],


            timestamp: new Date(),
        };
        
        message.channel.send({ embed: exampleEmbed });
    }
}