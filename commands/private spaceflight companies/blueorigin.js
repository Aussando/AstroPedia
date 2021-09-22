const Discord = require('discord.js')

module.exports = {
    name: "blueorigin",
    cooldown: 1000 * 10,
    description: "information about Blue Origin",

    async run (bot, message, args) {
        const exampleEmbed = {
            color: '#7FFFEC',
            title: 'Blue Origin',
            description: 'Blue Origin, LLC is an American privately funded aerospace manufacturer and sub-orbital spaceflight services company headquartered in Kent, Washington. Founded in 2000 by Jeff Bezos, the founder and executive chairman of Amazon, the company is led by CEO Bob Smith and aims to make access to space cheaper and more reliable through reusable launch vehicles. Rob Meyerson led Blue Origin from 2003 to 2017 and served as its first president. Blue Origin is employing an incremental approach from suborbital to orbital flight,[citation needed] with each developmental step building on its prior work. The company\'s name refers to the blue planet, Earth, as the point of origin. \nSource: Wikipedia',
            thumbnail: {
                url: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b1/Blue_Origin_Feather.svg/1024px-Blue_Origin_Feather.svg.png',
            },
            fields: [
                {
                    name: 'General Information',
                    value: 'Country: United States \nFormed: September 8, 2000; 21 years ago \nFounder: Jeff Bezos',
                },
                {
                    name: 'Rocket',
                    value: 'New Shepard \nNew Glenn \nNew Armstrong',
                },
            ],


            timestamp: new Date(),
        };
        
        message.channel.send({ embed: exampleEmbed });
    }
}