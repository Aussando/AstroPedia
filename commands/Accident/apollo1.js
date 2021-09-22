const discord = require('discord.js')

module.exports = {
    name: 'apollo1',
    description: 'Apollo 1 disaster',
    cooldown: 1000 * 10,

    async run (bot, message, args) {
        const modar = new discord.MessageEmbed()
        .setColor('7FFFEC')
        .setTitle('Apollo 1')
        .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Apollo_1_patch.png/800px-Apollo_1_patch.png')
        .setDescription("Apollo 1, initially designated AS-204, was the first crewed mission of the United States Apollo program, the undertaking to land the first man on the Moon. It was planned to launch on February 21, 1967, as the first low Earth orbital test of the Apollo command and service module. The mission never flew; a cabin fire during a launch rehearsal test at Cape Kennedy Air Force Station Launch Complex 34 on January 27 killed all three crew members—Command Pilot Gus Grissom, Senior Pilot Ed White, and Pilot Roger B. Chaffee—and destroyed the command module (CM). The name Apollo 1, chosen by the crew, was made official by NASA in their honor after the fire.")
        .addField('Incident', 'Fire during spacecraft test')
        .addField('Launch Date', 'February 21, 1967 (planned)')
        .addField('Destroyed', 'January 27, 1967; 54 years ago')
        .addField('Time', '23:31:19 UTC')
        .addField('Crew Members', '🇺🇸[Gus Grissom](https://en.wikipedia.org/wiki/Gus_Grissom), Command Pilot \n🇺🇸[Edward H. White II](https://en.wikipedia.org/wiki/Ed_White_(astronaut\)), Senior Pilot \n🇺🇸[Roger B. Chaffee](https://en.wikipedia.org/wiki/Roger_B._Chaffee), Pilot')
        .setImage('https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Apollo_1_fire.jpg/1024px-Apollo_1_fire.jpg')
        .setTimestamp()

        message.channel.send(modar)
    }
}