const Discord = require('discord.js')

module.exports = {
    name: "cassini",
    cooldown: 1000 * 10,
    description: "information about cassini satelite",

    async run (bot, message, args) {
        const exampleEmbed = {
            color: '#7FFFEC',
            author: {
                name: 'Cassini–Huygens',
            },
            description: 'The Cassini–Huygens space-research mission, commonly called Cassini, involved a collaboration among NASA, the European Space Agency (ESA), and the Italian Space Agency (ASI) to send a space probe to study the planet Saturn and its system, including its rings and natural satellites. The Flagship-class robotic spacecraft comprised both NASA\'s Cassini space probe and ESA\'s Huygens lander, which landed on Saturn\'s largest moon, Titan. Cassini was the fourth space probe to visit Saturn and the first to enter its orbit. The two craft took their names from the astronomers Giovanni Cassini and Christiaan Huygens. \nSource: Wikipedia',
            thumbnail: {
                url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Cassini_Saturn_Orbit_Insertion.jpg/1024px-Cassini_Saturn_Orbit_Insertion.jpg',
            },
            fields: [
                {
                    name: 'General Information',
                    value: 'Manufacturer: Cassini: Jet Propulsion Laboratory, Huygens: Thales Alenia Space \nLaunch mass: 5,712 kg (12,593 lb) \nLaunch date: October 15, 1997, 08:43:00 UTC \nRocket: Titan IV(401)B B-33 \nPrice: $3.26 billion',
                },
            ],


            timestamp: new Date(),
        };
        
        message.channel.send({ embed: exampleEmbed });
    }
}