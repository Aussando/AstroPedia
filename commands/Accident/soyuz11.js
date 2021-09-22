const discord = require('discord.js')

module.exports = {
    name: 'soyuz11',
    description: 'Soyuz 11 disaster',
    cooldown: 1000 * 10,

    async run (bot, message, args) {
        const modar = new discord.MessageEmbed()
        .setColor('7FFFEC')
        .setTitle('Soyuz 11')
        .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/The_Soviet_Union_1971_CPA_4060_stamp_%28Cosmonauts_Georgy_Dobrovolsky%2C_Vladislav_Volkov_and_Viktor_Patsayev%29.png/1024px-The_Soviet_Union_1971_CPA_4060_stamp_%28Cosmonauts_Georgy_Dobrovolsky%2C_Vladislav_Volkov_and_Viktor_Patsayev%29.png')
        .setDescription("Soyuz 11 was the only crewed mission to board the world's first space station Salyut 1. The crew, Georgy Dobrovolsky, Vladislav Volkov, and Viktor Patsayev, arrived at the space station on 7 June 1971 and departed on 29 June 1971. The mission ended in disaster when the crew capsule depressurised during preparations for reentry, killing the three-man crew. The three crew members of Soyuz 11 are the only humans to have died in space.")
        .addField('Incident', 'Decompression in space')
        .addField('Date', '	6 June 1971; 43 years ago')
        .addField('Time', '04:55:09 GMT')
        .addField('Crew Members', '<:ussr:888359138336313385>[Georgy Dobrovolsky](https://en.wikipedia.org/wiki/Georgy_Dobrovolsky), Commander \n<:ussr:888359138336313385>[Vladislav Volkov](https://en.wikipedia.org/wiki/Vladislav_Volkov), Flight engineer \n<:ussr:888359138336313385>[Viktor Patsayev](https://en.wikipedia.org/wiki/Viktor_Patsayev), Research engineer')
        .setImage('https://img-mm.manoramaonline.com/content/dam/mm/mo/technology/science/images/2021/4/24/soyuz-11.jpg')
        .setTimestamp()

        message.channel.send(modar)
    }
}