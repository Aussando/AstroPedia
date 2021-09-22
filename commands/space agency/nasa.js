const Discord = require('discord.js')

module.exports = {
    name: "nasa",
    cooldown: 1000 * 10,
    description: "information about nasa",

    async run (bot, message, args) {
        const exampleEmbed = {
            color: '#7FFFEC',
            title: 'NASA',
            author: {
                name: 'National Aeronautics and Space Administration',
            },
            description: 'NASA is an independent agency of the United States Federal Government that deals with space exploration and aeronautics, the operating and designing of planes. NASA has had many successful missions, for example the ISS, and Apollo 11, which put the first man on the Moon in 1969. NASA was started on July 29, 1958. NASA\'s motto is: "For the Benefit of All". \nSource: Wikipedia',
            thumbnail: {
                url: 'https://media.discordapp.net/attachments/840357501874733057/865185576163213352/2449px-NASA_logo.png?width=595&height=498',
            },
            fields: [
                {
                    name: 'General Information',
                    value: 'Country: United States \nFormed: July 29, 1958; 62 years ago \nAdministrator: Bill Nelson \ndeputy administrator: Pamela Melroy',
                },
                {
                    name: 'Rocket',
                    value: 'Saturn 5 \n Space Shuttle \nSLS (Space Launch System)',
                },
            ],


            timestamp: new Date(),
        };
        
        message.channel.send({ embed: exampleEmbed });
    }
}