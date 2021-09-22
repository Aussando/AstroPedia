const Discord = require('discord.js')

module.exports = {
    name: "launchupdate",
    aliases: ['lu'],
    cooldown: 1000 * 10,
    description: "Launch Update",

    async run (bot, message, args) {
        const exampleEmbed = {
            color: '#7FFFEC',
            author: {
                name: 'Launch Update',
            },
            thumbnail: {
                url: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Orbital_Flight_Test-2_mission_patch.png',
            },
            fields: [
                {
                    name: 'Orbital Flight Test-2 (OFT-2)',
                    value: '**Launch:** Starliner won\'t launch this month due to "multiple problems" \n**Rocket:** Atlas V N22 \n**Payload:** Boeing Starliner \n**Operator:** Boeing '
                },
            ],

            timestamp: new Date(),

        };
        message.channel.send('https://twitter.com/BoeingSpace/status/1426218670779420678', {embed: exampleEmbed})
    }
}