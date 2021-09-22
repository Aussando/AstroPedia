const Discord = require('discord.js')

module.exports = {
    name: "roscosmos",
    cooldown: 1000 * 10,
    description: "information about roscosmos",

    async run (bot, message, args) {
        const exampleEmbed = {
            color: '#7FFFEC',
            title: 'Roscosmos',
            author: {
                name: 'Roscosmos State Corporation for Space Activities',
            },
            description: 'Roscosmos/Роскосмос, is a state corporation of the Russian Federation responsible for space flights, cosmonautics programs, and aerospace research. Originating from the Soviet space program founded in the 1950s, Roscosmos emerged following the dissolution of the Soviet Union in 1991. It initially began as the Russian Space Agency, which was established on February 25, 1992 and restructured in 1999 and 2004, as the Russian Aviation and Space Agency and the Federal Space Agency (Roscosmos), respectively. In 2015, the Federal Space Agency (Roscosmos) was merged with the United Rocket and Space Corporation, a government corporation, to re-nationalize the Russian space industry, leading to Roscosmos in its current form. \nSource: Wikipedia',
            thumbnail: {
                url: 'https://media.discordapp.net/attachments/840357501874733057/865249816333254666/1024px-Roscosmos_logo_ru.png?width=768&height=489',
            },
            fields: [
                {
                    name: 'General Information',
                    value: 'Country: Russia \nFormed: 25 February 1992; 29 years ago \nAdministrator: Dmitry Rogozin',
                },
                {
                    name: 'Rocket',
                    value: 'Angara 1.2 \nAngara A5 \nProton-M \nSoyuz-2.1a \nSoyuz-2.1b \nSoyuz-2.1v',
                },
            ],


            timestamp: new Date(),
        };
        
        message.channel.send({ embed: exampleEmbed });
    }
}