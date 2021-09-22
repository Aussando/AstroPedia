const Discord = require('discord.js')

module.exports = {
    name: "bellatrixaerospace",
    cooldown: 1000 * 10,
    description: "information about bellatrixaerospace",

    async run (bot, message, args) {
        const exampleEmbed = {
            color: '#7FFFEC',
            title: 'Bellatrix Aerospace',
            description: 'Bellatrix Aerospace is an Indian private aerospace manufacturer and small satellite company, headquartered in Bangalore, India. The company was established in 2015. It plans to launch its own rocket named Chetak in 2023. The two-stage Chetak rocket is powered by a number of their own Aeon engines. The Chetak rocket will use liquid methane as fuel. In 2019 it announced plans to use water as propellant for an electric propulsion system. On 8th February 2021 they announced that they partnered with Skyroot Aerospace. \nSource: Wikipedia',
            thumbnail: {
                url: 'https://media-exp1.licdn.com/dms/image/C4E0BAQGW3Q_595d4mg/company-logo_200_200/0/1542689474279?e=2159024400&v=beta&t=pYVWO3WYQSQut-kUieApO7Q_vlv_tC4YYxfeLWVGq9Y',
            },
            fields: [
                {
                    name: 'General Information',
                    value: 'Country: India \nFormed: 2015; 6 years ago \nFounder: Rohan M Ganapathy and Yashas Karanam',
                },
                {
                    name: 'Rocket',
                    value: 'Chetak',
                },
            ],


            timestamp: new Date(),
        };
        
        message.channel.send({ embed: exampleEmbed });
    }
}