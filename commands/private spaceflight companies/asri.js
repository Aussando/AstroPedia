const Discord = require('discord.js')

module.exports = {
    name: "asri",
    cooldown: 1000 * 10,
    description: "information about asri",

    async run (bot, message, args) {
        const exampleEmbed = {
            color: '#7FFFEC',
            title: 'ASRI',
            author: {
                name: 'Australian Space Research Institute',
            },
            description: 'ASRI was formed 1991 with the merger of the AUSROC Launch Vehicle Development Group at Monash University, Melbourne and the Australian Space Engineering Research Association (ASERA).The institute is a non-profit organisation run entirely by volunteers. Most of the work at ASRI is done in collaboration with Australian universities such as the Royal Melbourne Institute of Technology, Queensland University of Technology and the University of Technology, Sydney. As of 2006, ASRI is developing a vision for the future of Australia\'s space community, including industry. ASRI does not receive any direct government funding. The ASRI was created to provide opportunities for space-related industry and technology development for the Australian technical community. \nSource: Wikipedia',
            thumbnail: {
                url: 'https://upload.wikimedia.org/wikipedia/en/9/97/ASRI_logo.jpg',
            },
            fields: [
                {
                    name: 'General Information',
                    value: 'Country: Australia \nFormed: 17 June 1991; 30 years ago in \nFounder: Monash University',
                },
                {
                    name: 'Rocket',
                    value: 'AUSROC Nano',
                },
            ],


            timestamp: new Date(),
        };
        
        message.channel.send({ embed: exampleEmbed });
    }
}