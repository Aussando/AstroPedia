const Discord = require('discord.js')

module.exports = {
    name: "rocketlab",
    cooldown: 1000 * 10,
    description: "rocket lab command",

    async run (bot, message, args) {
        const exampleEmbed = {
            color: '#7FFFEC',
            title: 'information about Rocket Lab',
            description: 'Rocket Lab is a private American aerospace manufacturer and small satellite launch service provider with a wholly owned New Zealand subsidiary. It developed a sub-orbital sounding rocket named Ātea and currently operates a lightweight orbital rocket known as Electron, which provides dedicated launches for smallsats and CubeSats. It is developing a new medium-lift launch vehicle named Neutron. The company was founded in New Zealand in 2006 by engineer Peter Beck and established headquarters in California in the United States in 2013. On 1 March 2021, Rocket lab announced that they will be going public via a SPAC which is expected to finish during Q2 2021. \nSource: Wikipedia',
            thumbnail: {
                url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Rocket_Lab_logo.svg/1024px-Rocket_Lab_logo.svg.png',
            },
            fields: [
                {
                    name: 'General Information',
                    value: 'Country: New Zealand \nFormed:	June 2006; 15 years ago \nFounder: 	Peter Beck',
                },
                {
                    name: 'Rocket',
                    value: 'Ātea-1 \nĀtea-2 \nElectron \nNeutron',
                },
            ],


            timestamp: new Date(),
        };
        
        message.channel.send({ embed: exampleEmbed });
    }
}