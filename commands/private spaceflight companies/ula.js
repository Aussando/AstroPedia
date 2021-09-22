const Discord = require('discord.js')

module.exports = {
    name: "ula",
    cooldown: 1000 * 10,
    description: "information about united launch alience",

    async run (bot, message, args) {
        const exampleEmbed = {
            color: '#7FFFEC',
            title: 'ULA',
            author: {
                name: 'United Launch Alliance',
            },
            description: 'ULA is an American spacecraft launch service provider that manufactures and operates a number of rocket vehicles that are capable of launching spacecraft into orbits around Earth and to other bodies in the Solar System. The company, which is a joint venture between Lockheed Martin Space and Boeing Defense, Space & Security, was formed in December 2006. Launch customers of the United States government include the Department of Defense (DoD), NASA, and other organizations. \nSource: Wikipedia',
            thumbnail: {
                url: 'https://upload.wikimedia.org/wikipedia/en/d/d5/ULA_Logo.png',
            },
            fields: [
                {
                    name: 'General Information',
                    value: 'Country: United States \nFormed: December 1, 2006; 14 years ago \nCEO: 	Tory Bruno',
                },
                {
                    name: 'Rocket',
                    value: 'Atlas V \nDelta II 6000 \nDelta II 7000 \nDelta II 7000H \nDelta IV \nDelta IV Heavy \nVulcan',
                },
            ],


            timestamp: new Date(),
        };
        
        message.channel.send({ embed: exampleEmbed });
    }
}