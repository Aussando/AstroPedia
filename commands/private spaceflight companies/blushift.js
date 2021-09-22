const Discord = require('discord.js')

module.exports = {
    name: "blushift",
    cooldown: 1000 * 10,
    description: "information about blushift",

    async run (bot, message, args) {
        const exampleEmbed = {
            color: '#7FFFEC',
            title: 'bluShift Aerospace',
            description: 'Blushift Aerospace (stylized as bluShift Aerospace) is an employee-owned American aerospace firm based in Brunswick, Maine. Targeting the growing small sat and cube sat launch markets, bluShift is developing suborbital sounding rockets and small-lift orbital rockets which will be launched from a proposed new spaceport in Maine. The company has received primary funding from NASA\'s SBIR grant program, Maine Technology Institute, and the Maine Space Grant Consortium. The company has active operations at the former Brunswick Naval Air Station and Loring Air Force Base. \nSource: Wikipedia',
            thumbnail: {
                url: 'https://images.squarespace-cdn.com/content/v1/5ec701ff368e7e3e0d4e0177/ee624437-2c01-44e3-b954-7972156dfa0d/BluShift+-+Logo+Final.png',
            },
            fields: [
                {
                    name: 'General Information',
                    value: 'Country: United States \nFormed: March 2014; 7 years ago \nFounder: Sascha Deri',
                },
                {
                    name: 'Rocket',
                    value: 'Stardust \nStarless Rogue \nRed Dwarf',
                },
            ],


            timestamp: new Date(),
        };
        
        message.channel.send({ embed: exampleEmbed });
    }
}