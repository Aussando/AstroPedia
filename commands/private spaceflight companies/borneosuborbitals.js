const Discord = require('discord.js')

module.exports = {
    name: "borneosuborbitals",
    cooldown: 1000 * 10,
    description: "information about borneosuborbitals",

    async run (bot, message, args) {
        const exampleEmbed = {
            color: '#7FFFEC',
            title: 'Borneo SubOrbitals',
            description: 'Borneo SubOrbitals is a public-private spaceflight venture. Created in 2019, it is involving several tertiary institutions and a local social enterprise, which comprises Universiti Malaysia Sarawak (UNIMAS), University of Malaya (UM) and Universiti Teknologi Petronas (UTP), with collaboration of The Learning Curve, The Hills Lifestyle Community Lifestyle Hub and Strand Aerospace Malaysia. \nSource: Wikipedia',
            thumbnail: {
                url: 'https://upload.wikimedia.org/wikipedia/commons/3/30/Borneo_SubOrbitals_logo.jpg',
            },
            fields: [
                {
                    name: 'General Information',
                    value: 'Country: Malaysia \nFormed: 2019; 2 years ago \nAmbasador: 	Fahmi Fadzil',
                },
                {
                    name: 'Rocket',
                    value: 'TBA',
                },
            ],


            timestamp: new Date(),
        };
        
        message.channel.send({ embed: exampleEmbed });
    }
}