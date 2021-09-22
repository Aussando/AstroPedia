const Discord = require('discord.js')

module.exports = {
    name: "arcaspace",
    cooldown: 1000 * 10,
    description: "information about ARCAspace",

    async run (bot, message, args) {
        const exampleEmbed = {
            color: '#7FFFEC',
            title: 'ARCAspace',
            author: {
                name: 'Asociația Română pentru Cosmonautică și Aeronautică',
            },
            description: 'ARCAspace is an aerospace company based in Râmnicu Vâlcea, Romania. It builds rockets, high-altitude balloons, and unmanned aerial vehicles. It was founded in 1999 as a non-governmental organization in Romania by the Romanian engineer Dumitru Popescu and other rocket and aeronautics enthusiasts. Since then, ARCA has launched two stratospheric rockets, four large scale stratospheric balloons including a cluster balloon and was awarded two governmental contracts with the Romanian government and one contract with the European Space Agency. ARCASpace is currently developing a three-stage, semi-reusable steam-powered rocket called EcoRocket. \nSource: Wikipedia',
            thumbnail: {
                url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/ARCA_Space_logo.svg/1024px-ARCA_Space_logo.svg.png',
            },
            fields: [
                {
                    name: 'General Information',
                    value: 'Country: Romania \nFormed: 1999; 22 years ago \nFounder: Dumitru Popescu',
                },
                {
                    name: 'Rocket',
                    value: 'Haas 2B \nHaas 2C \nHaas 2CA \nIAR-111 rocket plane \nEcoRocket',
                },
            ],


            timestamp: new Date(),
        };
        
        message.channel.send({ embed: exampleEmbed });
    }
}