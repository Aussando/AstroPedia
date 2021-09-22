const Discord = require('discord.js')

module.exports = {
    name: "iss",
    cooldown: 1000 * 10,
    description: "information about International Space Station",

    async run (bot, message, args) {
        const exampleEmbed = {
            color: '#7FFFEC',
            title: 'ISS',
            author: {
                name: 'International Space Station',
            },
            description: 'The International Space Station (ISS) is a modular space station in low Earth orbit. It is a multinational collaborative project involving five participating space agencies: NASA, Roscosmos (Russia), JAXA (Japan), ESA (Europe), and CSA (Canada). The ownership and use of the space station is established by intergovernmental treaties and agreements. The station serves as a microgravity and space environment research laboratory in which scientific research is conducted in astrobiology, astronomy, meteorology, physics, and other fields. The ISS is suited for testing the spacecraft systems and equipment required for possible future long-duration missions to the Moon and Mars \nSource: Wikipedia',
            thumbnail: {
                url: 'https://images-ext-1.discordapp.net/external/ygmAa7Hq-n-h2PtcPQotmDjeuKoY2kpHKJSgp830eC8/https/upload.wikimedia.org/wikipedia/commons/thumb/0/04/International_Space_Station_after_undocking_of_STS-132.jpg/320px-International_Space_Station_after_undocking_of_STS-132.jpg?width=240&height=153',
            },
            fields: [
                {
                    name: 'Human in ISS',
                    value: '1. Mark Vande Hei \n2. Oleg Novitskiy \n3. Pyotr Dubrov \n4. Thomas Pesquet \n5. Megan McArthur \n6. Shane Kimbrough \n7. Akihiko Hoshide',
                },
            ],


            timestamp: new Date(),
        };
        
        message.channel.send({ embed: exampleEmbed });
    }
}