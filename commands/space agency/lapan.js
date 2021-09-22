const Discord = require('discord.js')

module.exports = {
    name: "lapan",
    cooldown: 1000 * 10,
    description: "information about lapan",

    async run (bot, message, args) {
        const exampleEmbed = {
            color: '#7FFFEC',
            title: 'LAPAN',
            author: {
                name: 'National Institute of Aeronautics and Space \n (Lembaga Penerbangan dan Antariksa Nasional)',
            },
            description: 'LAPAN is the Indonesian government space agency. It was established on November 27, 1963, by former Indonesian president Sukarno after one year\'s existence of an informal space agency organization. LAPAN is responsible for long-term civilian and military aerospace research. \nSource: Wikipedia',
            thumbnail: {
                url: 'https://media.discordapp.net/attachments/840357501874733057/865558544057106442/1024px-LAPAN_logo_2015.png?width=692&height=498',
            },
            fields: [
                {
                    name: 'General Information',
                    value: 'Country: Indonesia \nFormed: November 27, 1963; 57 years ago \nAdministrator: Thomas Djamaluddin',
                },
                {
                    name: 'Rocket',
                    value: 'RPS-420 \nRPS-420/520 \nRX-550',
                },
            ],


            timestamp: new Date(),
        };
        
        message.channel.send({ embed: exampleEmbed });
    }
}