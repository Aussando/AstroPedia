const Discord = require('discord.js')

module.exports = {
    name: "isro",
    cooldown: 1000 * 10,
    description: "information about isro",

    async run (bot, message, args) {
        const exampleEmbed = {
            color: '#7FFFEC',
            title: 'ISRO',
            author: {
                name: 'Indian Space Research Organisation',
            },
            description: 'ISRO is the national space agency of India, headquartered in Bengaluru. It operates under Department of Space (DOS) which is directly overseen by the Prime Minister of India, while Chairman of ISRO acts as executive of DOS as well. ISRO is the primary agency in India to perform tasks related to space based applications, space exploration and development of related technologies.[6] It is one of six government space agencies in the world which possess full launch capabilities, deploy cryogenic engines, launch extraterrestrial missions and operate large fleets of artificial satellites. \nSource: Wikipedia',
            thumbnail: {
                url: 'https://media.discordapp.net/attachments/840357501874733057/865548995794173972/1059px-Indian_Space_Research_Organisation_Logo.png?width=515&height=498',
            },
            fields: [
                {
                    name: 'General Information',
                    value: 'Country: India \nFormed: 15 August 1969; 51 years ago \nAdministrator: K. Sivan',
                },
                {
                    name: 'Rocket',
                    value: 'PSLV \nGSLV \nGSLV Mk III \nSounding Rockets',
                },
            ],


            timestamp: new Date(),
        };
        
        message.channel.send({ embed: exampleEmbed });
    }
}