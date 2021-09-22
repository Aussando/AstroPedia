const Discord = require('discord.js')

module.exports = {
    name: "esa",
    cooldown: 1000 * 10,
    description: "information about esa",

    async run (bot, message, args) {
        const exampleEmbed = {
            color: '#7FFFEC',
            title: 'ESA',
            author: {
                name: 'European Space Agency',
            },
            description: 'ESA is an intergovernmental organisation of 22 member states dedicated to the exploration of space. Established in 1975 and headquartered in Paris, ESA has a worldwide staff of about 2,200 in 2018 and an annual budget of about €6.5 billion in 2021. \nSource: Wikipedia',
            thumbnail: {
                url: 'https://media.discordapp.net/attachments/840357501874733057/865614566599557150/ESA_emblem_seal.png?width=150&height=148',
            },
            fields: [
                {
                    name: 'General Information',
                    value: 'Country: European \nFormed: 30 May 1975; 46 years ago \nAdministrator: Josef Aschbacher',
                },
                {
                    name: 'Member State',
                    value: 'Austria \nBelgium \nCzech Republic \nDenmark \nEstonia \nFinland \nFrance \nGermany \nGreece \nHungary \nIreland \nItaly \nLuxembourg \nNetherlands \nNorway \nPoland \nPortugal \nRomania \nSpain \nSweden \nSweden \nUnited Kingdom',
                },
                {
                    name: 'Non-full Members',
                    value: 'Canada \nLithuania \nLatvia \nSlovenia',
                },
                {
                    name: 'Launch vehicle fleet',
                    value: 'Ariane 5 \nSoyuz \nVega',
                },
            ],


            timestamp: new Date(),
        };
        
        message.channel.send({ embed: exampleEmbed });
    }
}