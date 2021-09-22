const Discord = require('discord.js')

module.exports = {
    name: "firefly",
    cooldown: 1000 * 10,
    description: "information about firefly",

    async run (bot, message, args) {
        const exampleEmbed = {
            color: '#7FFFEC',
            title: 'Firefly Aerospace',
            description: 'Firefly Aerospace is an American private aerospace firm based in Austin, Texas, that develops small and medium-sized launch vehicles for commercial launches to orbit. They are proponents of NewSpace: a movement in the aerospace industry whose objective is to increase access to space through innovative technical advances resulting in a reduction of launch cost and the lessening of regulations and logistical restrictions associated with dependence on national space institutions. \nSource: Wikipedia',
            thumbnail: {
                url: 'https://upload.wikimedia.org/wikipedia/en/8/83/Firefly_Aerospace_Logo.jpg',
            },
            fields: [
                {
                    name: 'General Information',
                    value: 'Country: United States \nFormed: January 2014; 7 years ago \nFounders: 	Max Polyakov and Tom Markusic',
                },
                {
                    name: 'Rocket',
                    value: 'Firefly Alpha \nFirefly Beta',
                },
            ],


            timestamp: new Date(),
        };
        
        message.channel.send({ embed: exampleEmbed });
    }
}