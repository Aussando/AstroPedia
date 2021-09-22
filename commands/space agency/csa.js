const Discord = require('discord.js')

module.exports = {
    name: "csa",
    cooldown: 1000 * 10,
    description: "information about csa",

    async run (bot, message, args) {
        const exampleEmbed = {
            color: '#7FFFEC',
            title: 'CSA',
            author: {
                name: 'Canadian Space Agency',
            },
            description: 'CSA is the national space agency of Canada, established in 1990 by the Canadian Space Agency Act. The agency is responsible to the minister of innovation, science, and economic development. The president is Lisa Campbell, who took the position on September 3, 2020. The CSA\'s headquarters are located at the John H. Chapman Space Centre in Longueuil, Quebec. The agency also has offices in Ottawa, Ontario, and small liaison offices in Houston; Washington, D.C.; and Paris. \nSource: Wikipedia',
            thumbnail: {
                url: 'https://media.discordapp.net/attachments/840357501874733057/865609591538581504/800px-Canadian_Space_Agency_logo.png?width=498&height=498',
            },
            fields: [
                {
                    name: 'General Information',
                    value: 'Country: Canada \nFormed: March 1, 1989; 32 years ago \nminister: François-Philippe',
                },
                {
                    name: 'Rocket',
                    value: 'Black Brant XII (sounding rockets)',
                },
            ],


            timestamp: new Date(),
        };
        
        message.channel.send({ embed: exampleEmbed });
    }
}