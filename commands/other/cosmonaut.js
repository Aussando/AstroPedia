const discord = require('discord.js')

module.exports = {
    name: 'cosmonaut',
    aliases: ['cosmo'],
    cooldown: 1000 * 10,
    description: 'information about cosmonaut',

    async run (bot, message, args) {
        const exampleEmbed = {
            color: '7FFFEC',
            author: {
                name: 'Cosmonaut'
            },
            thumbnail: {
                url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Sergey_Ryzhikov_at_the_Gagarin_Cosmonaut_Training_Center_in_Star_City.jpg/808px-Sergey_Ryzhikov_at_the_Gagarin_Cosmonaut_Training_Center_in_Star_City.jpg'
            },
            description: 'an astronaut employed by the Russian Federal Space Agency (or its Soviet predecessor) is called a cosmonaut in English texts. The word is an Anglicization of kosmonavt (Russian: космонавт) Other countries of the former Eastern Bloc use variations of the Russian kosmonavt, such as the Polish: kosmonauta (although Polish also uses astronauta, and the two words are considered synonyms). \nSource: Wikipedia',
            image: {
                url: 'https://cdn.cnn.com/cnnnext/dam/assets/210407170007-01-expedition-65-crew-0320-large-169.jpeg'
            },
            timestamp: new Date(),

        };

        message.channel.send({ embed: exampleEmbed });
    }
}