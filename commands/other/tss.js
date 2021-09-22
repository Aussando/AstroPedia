const Discord = require('discord.js')

module.exports = {
    name: "tss",
    cooldown: 1000 * 10,
    description: "information about Tiangong Space Station",

    async run (bot, message, args) {
        const exampleEmbed = {
            color: '#7FFFEC',
            title: 'TSS',
            author: {
                name: 'Tiangong Space Station',
            },
            description: 'Tiangong is a space station being constructed by China in low Earth orbit between 340 and 450 km above the surface. Being China\'s first long-term space station, it is the goal of the "Third Step" of the China Manned Space Program. Once completed, the Tiangong Space Station will have a mass between 80 and 100 t, roughly one-fifth the mass of the International Space Station and about the size of the decommissioned Russian Mir space station but with more advanced technologies. \nSource: Wikipedia',
            thumbnail: {
                url: 'https://www.popsci.com/uploads/2019/03/18/VA262YQ2TEBR4F5IHDZSOM5RZ4-1024x671.jpg',
            },
            fields: [
                {
                    name: 'Human in TSS',
                    value: '1. Nie Haisheng \n2. Liu Boming \n3. Tang Hongbo',
                },
            ],


            timestamp: new Date(),
        };
        
        message.channel.send({ embed: exampleEmbed });
    }
}