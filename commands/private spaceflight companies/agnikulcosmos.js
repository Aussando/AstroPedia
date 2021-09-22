const Discord = require('discord.js')

module.exports = {
    name: "agnikulcosmos",
    aliases: ['ag'],
    cooldown: 1000 * 10,
    description: "information about agnikulcosmos",

    async run (bot, message, args) {
        const exampleEmbed = {
            color: '#7FFFEC',
            title: 'AgniKul Cosmos',
            author: {
                name: 'AgniKul Cosmos Private Limited',
            },
            description: 'AgniKul Cosmos is an Indian aerospace manufacturer based in National Center for Combustion R&D (NCRD) of IIT Madras, Chennai. The start up aims to develop and launch its own small-lift launch vehicle namely Agnibaan, capable of placing 100 kg (220 lb) payload into a 700 km (430 mi) orbit. First commercial launch is expected in 2022. \nSource: Wikipedia',
            thumbnail: {
                url: 'https://media.discordapp.net/attachments/840357501874733057/865636182518923305/1941783_original.png?width=368&height=478',
            },
            fields: [
                {
                    name: 'General Information',
                    value: 'Country: India \nFormed: 2017; 4 years ago \nFounder: Srinath Ravichandran, Moin SPM, Satyanaryan Chakravarthy, Janardhana Raju',
                },
                {
                    name: 'Rocket',
                    value: 'Agnibaan',
                },
            ],


            timestamp: new Date(),
        };
        
        message.channel.send({ embed: exampleEmbed });
    }
}