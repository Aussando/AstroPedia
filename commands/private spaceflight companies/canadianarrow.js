const Discord = require('discord.js')

module.exports = {
    name: "canadianarrow",
    cooldown: 1000 * 10,
    description: "information about canadian arrow",

    async run (bot, message, args) {
        const exampleEmbed = {
            color: '#7FFFEC',
            title: 'Canadian Arrow',
            description: 'Canadian Arrow was a privately funded, early-2000s rocket and space tourism project concept founded by London, Ontario, Canada entrepreneurs Geoff Sheerin, Dan McKibbon and Chris Corke. The project\'s objective was to take the first civilians into space, on a vertical sub-orbital spaceflight reaching an altitude of 112 km. \nSource: Wikipedia',
            fields: [
                {
                    name: 'General Information',
                    value: 'Country: Canada \nFormed: 1999; 22 years ago',
                },
                {
                    name: 'Rocket',
                    value: 'Canadian Arrow',
                },
            ],


            timestamp: new Date(),
        };
        
        message.channel.send({ embed: exampleEmbed });
    }
}