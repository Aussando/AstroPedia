const Discord = require('discord.js')

module.exports = {
    name: "cnsa",
    cooldown: 1000 * 10,
    description: "information about cnsa",

    async run (bot, message, args) {
        const exampleEmbed = {
            color: '#7FFFEC',
            title: 'CNSA',
            author: {
                name: 'China National Space Administration',
            },
            description: 'CNSA is the national space agency of China responsible for the national space program and for planning and development of space activities. CNSA and China Aerospace Science and Technology Corporation (CASC) assumed the authority over space development efforts previously held by the Ministry of Aerospace Industry. It is a subordinate agency of the State Administration for Science, Technology and Industry for National Defence (SASTIND), itself a subordinate agency of the Ministry of Industry and Information Technology (MIIT). The headquarter is in Haidian District, Beijing. \nSource: Wikipedia',
            thumbnail: {
                url: 'https://media.discordapp.net/attachments/840357501874733057/865578728590147614/China_National_Space_Administration_logo.png?width=237&height=237',
            },
            fields: [
                {
                    name: 'General Information',
                    value: 'Country: China \nFormed: 22 April 1993; 28 years ago \nAdministrator: Zhang Kejian',
                },
                {
                    name: 'Rocket',
                    value: 'Long March 1 \nLong March 1D \nLong March 2A \nLong March 2C \nLong March 2D \nLong March 2E \nLong March 2F \nLong March 3 \nLong March 3A \nLong March 3B \nLong March 3B/E \nLong March 3C \nLong March 4A \nLong March 4B \nLong March 4C \nLong March 5 \nLong March 5B \nLong March 6 \nLong March 6A \nLong March 7 \nLong March 7A \nLong March 8 \nLong March 9 \nLong March 11',
                },
            ],


            timestamp: new Date(),
        };
        
        message.channel.send({ embed: exampleEmbed });
    }
}