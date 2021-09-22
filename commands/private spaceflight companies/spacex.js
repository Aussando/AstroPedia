const Discord = require('discord.js')

module.exports = {
    name: "spacex",
    cooldown: 1000 * 10,
    description: "information about spacex",

    async run (bot, message, args) {
        const exampleEmbed = {
            color: '#7FFFEC',
            title: 'SpaceX',
            author: {
                name: 'Space Exploration Technologies Corp.',
            },
            description: 'SpaceX is an American aerospace manufacturer, space transportation services and communications company headquartered in Hawthorne, California. SpaceX was founded in 2002 by Elon Musk with the goal of reducing space transportation costs to enable the colonization of Mars. SpaceX manufactures the Falcon 9 and Falcon Heavy launch vehicles, several rocket engines, Dragon cargo, crew spacecraft and Starlink communications satellites. \nSource: Wikipedia',
            thumbnail: {
                url: 'https://www.spacex.com/static/images/share.jpg',
            },
            fields: [
                {
                    name: 'General Information',
                    value: 'Country: United States \nFormed: 6 May 2002; 19 years ago \nFounder: Elon Musk',
                },
                {
                    name: 'Rocket',
                    value: 'Falcon 1 \nFalcon 1e \nFalcon 5 \nFalcon 9 v1.0 \nFalcon 9 v1.1 \nFalcon 9 Full Thrust Block 1-4 \nFalcon 9 Block 5 \nFalcon Heavy \nStarship Super-Heavy',
                },
            ],


            timestamp: new Date(),
        };
        
        message.channel.send({ embed: exampleEmbed });
    }
}