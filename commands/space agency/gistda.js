const Discord = require('discord.js')

module.exports = {
    name: "gistda",
    cooldown: 1000 * 10,
    description: "information about gistda",

    async run (bot, message, args) {
        const exampleEmbed = {
            color: '#7FFFEC',
            title: 'Geo-Informatics and Space Technology Development Agency',
            author: {
                name: 'GITSDA',
            },
            description: 'GITSDA is a Thai space agency and space research organisation. It is responsible for remote sensing and technology development satellites.It has its offices in Chaeng Watthana Government Complex, Bangkok. \nSource: Wikipedia',
            thumbnail: {
                url: 'https://media.discordapp.net/attachments/840357501874733057/865571909047681064/1024px-GISTDA_LOGO.png?width=768&height=437',
            },
            fields: [
                {
                    name: 'General Information',
                    value: 'Country: Thailand \nFormed: 3 November 2000; 21 years ago \nExecutive Director: Mr. Pakorn Apaphant \nDeputy Executive Director: Mr. Phee Choosri, Mr. Tatiya Chuentragun, Mrs. Kandasri Limpakom, Mr. Damrongrit Niammuad', 
                },
                {
                    name: 'Rocket',
                    value: 'don\'t have a rocket',
                },
            ],


            timestamp: new Date(),
        };
        
        message.channel.send({ embed: exampleEmbed });
    }
}