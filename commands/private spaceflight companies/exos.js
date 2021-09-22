const Discord = require('discord.js')

module.exports = {
    name: "exos",
    cooldown: 1000 * 10,
    description: "information about exos",

    async run (bot, message, args) {
        const exampleEmbed = {
            color: '#7FFFEC',
            title: 'Exos Aerospace',
            author: {
                name: 'EXOS Aerospace Systems & Technologies, Inc',
            },
            description: 'Exos Aerospace Systems & Technologies is an aerospace manufacturer and developer of reusable launch systems intended to support unmanned orbital spaceflight launches, and is based in Caddo Mills, Texas. \nSource: Wikipedia',
            thumbnail: {
                url: 'https://exosaero.com/wp-content/uploads/2016/03/ExosAST_logo_black.png',
            },
            fields: [
                {
                    name: 'General Information',
                    value: 'Country: United States \nFormed: 2014; 7 years ago \nPresident: David Mitchell \nCEO: John Quinn',
                },
                {
                    name: 'Rocket',
                    value: 'SARGE',
                },
            ],


            timestamp: new Date(),
        };
        
        message.channel.send({ embed: exampleEmbed });
    }
}