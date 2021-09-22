const Discord = require('discord.js')

module.exports = {
    name: "northropgrumman",
    cooldown: 1000 * 10, 
    description: "northrop grumman command",

    async run (bot, message, args) {
        const exampleEmbed = {
            color: '#7FFFEC',
            title: 'information about Northrop Grumman',
            author: {
                name: 'Northrop Grumman Corporation',
            },
            description: 'Northrop Grumman Corporation is an American multinational aerospace and defense technology company. With 90,000 employees and an annual revenue in excess of $30 billion, it is one of the world\'s largest weapons manufacturers and military technology providers. The firm ranks No. 96 on the 2020 Fortune 500 list of America\'s largest corporations. \nSource: Wikipedia',
            thumbnail: {
                url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Northrop_Grumman_logo_blue-on-clear_2020.svg/1024px-Northrop_Grumman_logo_blue-on-clear_2020.svg.png',
            },
            fields: [
                {
                    name: 'General Information',
                    value: 'Country: United States \nFormed: 1994; 27 years ago \n President and CEO: Kathy J. Warden',
                },
                {
                    name: 'Rocket',
                    value: 'Antares \nMinotaur-C, formerly Taurus \nPegasus \nOmega',
                },
            ],


            timestamp: new Date(),
        };
        
        message.channel.send({ embed: exampleEmbed });
    }
}