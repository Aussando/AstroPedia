const Discord = require('discord.js')

module.exports = {
    name: "saturn",
    cooldown: 1000 * 10,
    description: "information about Saturn",

    async run (bot, message, args) {
        const exampleEmbed = {
            color: '#7FFFEC',
            title: 'Saturn',
            description: 'Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth; however, with its larger volume, Saturn is over 95 times more massive. Saturn is named after the Roman god of wealth and agriculture; its astronomical symbol (♄) represents the god\'s sickle. The Romans named the seventh day of the week Saturday, Sāturni diēs ("Saturn\'s Day") no later than the 2nd century for the planet Saturn. \nSource: Wikipedia',
            thumbnail: {
                url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Saturn_during_Equinox.jpg/1024px-Saturn_during_Equinox.jpg',
            },
            fields: [
                {
                    name: 'General Information',
                    value: 'Satellites: 82 \nDiameter: 116.460 km \nSurface gravity: 1.065 g',
                },
            ],


            timestamp: new Date(),
        };
        
        message.channel.send({ embed: exampleEmbed });
    }
}