const discord = require('discord.js')

module.exports = {
    name: 'parastronaut',
    aliases: ['paras'],
    cooldown: 1000 * 10,
    description: 'information about parastronaut',

    async run (bot, message, args) {
        const exampleEmbed = {
            color: '7FFFEC',
            author: {
                name: 'Parastronaut'
            },
            thumbnail: {
                url: 'https://rmkcdn.successfactors.com/fbc42cc4/35339891-00be-4270-8908-6.png'
            },
            description: 'For its 2022 Astronaut Group, ESA envisions to recruit an astronaut with a physical disability, a category they called "parastronauts", with the intention but not guarantee of spaceflight. The categories of disability considered for the program were individuals with lower limb deficiency (either through amputation or congenital), leg length difference, or a short stature (less than 130 centimetres or 4 feet 3 inches). \nSource: Wikipedia',
            image: {
                url: 'https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2021/02/astronaut_selection_parastronaut_feasibility_project/23151855-2-eng-GB/Astronaut_selection_parastronaut_feasibility_project_pillars.png'
            },
            timestamp: new Date(),

        };

        message.channel.send({ embed: exampleEmbed });
    }
}