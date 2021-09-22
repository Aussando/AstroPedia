const Discord = require('discord.js')

module.exports = {
    name: "lockheadmartin",
    cooldown: 1000 * 10,
    description: "information about Lockheed Martin",

    async run (bot, message, args) {
        const exampleEmbed = {
            color: '#7FFFEC',
            title: 'Lockheed Martin',
            author: {
                name: 'Lockheed Martin Corporation',
            },
            description: 'Lockheed Martin Corporation is an American aerospace, defense, information security, and technology company with worldwide interests. It was formed by the merger of Lockheed Corporation with Martin Marietta in March 1995. It is headquartered in North Bethesda, Maryland, in the Washington, D.C., area. Lockheed Martin employs approximately 110,000 people worldwide as of January 2020. \nSource: Wikipedia',
            thumbnail: {
                url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Lockheed_Martin_logo.svg/1024px-Lockheed_Martin_logo.svg.png',
            },
            fields: [
                {
                    name: 'General Information',
                    value: 'Country: United States \nFormed: March 15, 1995; 26 years ago \nExecutive Chairman: Marillyn Hewson \nPresident and CEO: James Taiclet',
                },
                {
                    name: 'Rocket',
                    value: 'VentureStar \nAthena',
                },
            ],


            timestamp: new Date(),
        };
        
        message.channel.send({ embed: exampleEmbed });
    }
}