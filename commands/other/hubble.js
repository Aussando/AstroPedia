const Discord = require('discord.js')

module.exports = {
    name: "hubble",
    cooldown: 1000 * 10,
    description: "information about hubble telescope",

    async run (bot, message, args) {
        const exampleEmbed = {
            color: '#7FFFEC',
            author: {
                name: 'Hubble Space Telescope',
            },
            description: 'The Hubble Space Telescope is a space telescope that was launched into low Earth orbit in 1990 and remains in operation. It was not the first space telescope, but it is one of the largest and most versatile, renowned both as a vital research tool and as a public relations boon for astronomy. The Hubble telescope is named after astronomer Edwin Hubble and is one of NASA\'s Great Observatories, along with the Compton Gamma Ray Observatory (1991–2000), the Chandra X-ray Observatory, and the Spitzer Space Telescope (2003–2020). The Space Telescope Science Institute (STScI) selects Hubble\'s targets and processes the resulting data, while the Goddard Space Flight Center (GSFC) controls the spacecraft. \nSource: Wikipedia',
            thumbnail: {
                url: 'https://www.nasa.gov/sites/default/files/thumbnails/image/hst-sm4.jpg',
            },
            fields: [
                {
                    name: 'General Information',
                    value: 'Manufacturer: Lockheed Martin (spacecraft) and Perkin-Elmer (optics) \nLaunch mass: 11,110 kg (24,490 lb) \nDimensions: 13.2 m × 4.2 m (43 ft × 14 ft) \nLaunch date: 24 April 1990, 12:33:51 UTC \nRocket: Space Shuttle Discovery (STS-31) \nContractor: Rockwell International \nPrice: US$4.7 billion',
                },
            ],


            timestamp: new Date(),
        };
        
        message.channel.send({ embed: exampleEmbed });
    }
}