const discord = require('discord.js')

module.exports = {
    name: 'moonimage',
    description: 'Shows moon image',
    aliases: ['mooni', 'moi'],
    cooldown: 1000 * 10,

    async run (bot, message, args) {
        const messages = [
            "https://history.nasa.gov/ap11ann/kippsphotos/6550.jpg",
            "https://history.nasa.gov/ap11ann/kippsphotos/6611.jpg",
            "https://history.nasa.gov/ap11ann/kippsphotos/5454.jpg",
            "https://history.nasa.gov/ap11ann/kippsphotos/5869.jpg",
            "https://history.nasa.gov/ap11ann/kippsphotos/5872.jpg",
            "https://history.nasa.gov/ap11ann/kippsphotos/5873.jpg",
            "https://history.nasa.gov/alsj/a11/AS11-40-5886.jpg",
            "https://history.nasa.gov/ap11ann/kippsphotos/5954.jpg",
            "https://history.nasa.gov/ap11ann/kippsphotos/5961.jpg",
            "https://history.nasa.gov/ap11ann/kippsphotos/6642.jpg",
            "https://history.nasa.gov/ap11ann/kippsphotos/6667.jpg",
            "https://www.hq.nasa.gov/alsj/a12/AS12-51-7501.jpg",
            "https://www.hq.nasa.gov/alsj/a12/AS12-52-7597.jpg",
            "https://www.hq.nasa.gov/alsj/a12/AS12-52-7739.jpg",
            "https://www.hq.nasa.gov/alsj/a12/AS12-52-7745.jpg",
            "https://www.hq.nasa.gov/alsj/a12/AS12-46-6715.jpg",
            "https://www.hq.nasa.gov/alsj/a12/AS12-46-6725.jpg",
            "https://www.hq.nasa.gov/alsj/a12/AS12-46-6730.jpg",
            "https://www.hq.nasa.gov/alsj/a12/AS12-46-6731.jpg",
            "https://www.hq.nasa.gov/alsj/a12/AS12-46-6733.jpg",
            "https://www.hq.nasa.gov/alsj/a12/AS12-46-6735.jpg",
            "https://www.hq.nasa.gov/alsj/a12/AS12-46-6734.jpg",
            "https://www.hq.nasa.gov/alsj/a12/AS12-46-6736.jpg",
            "https://www.hq.nasa.gov/alsj/a12/AS12-46-6748.jpg",
            "https://www.hq.nasa.gov/alsj/a12/AS12-46-6749.jpg",
            "https://www.hq.nasa.gov/alsj/a12/AS12-46-6750.jpg",
            "https://www.hq.nasa.gov/alsj/a12/AS12-46-6751.jpg",
            "https://www.hq.nasa.gov/alsj/a12/AS12-46-6753.jpg",
            "https://www.hq.nasa.gov/alsj/a12/AS12-46-6754.jpg",
            "https://www.hq.nasa.gov/alsj/a12/AS12-46-6755.jpg",
            "https://www.hq.nasa.gov/alsj/a12/AS12-46-6756.jpg",
            "https://www.hq.nasa.gov/alsj/a12/AS12-46-6760.jpg",
            "https://www.hq.nasa.gov/alsj/a12/AS12-46-6780.jpg",
            "https://www.hq.nasa.gov/alsj/a12/AS12-46-6812.jpg",
            "https://www.hq.nasa.gov/alsj/a12/AS12-46-6818.jpg"
        ]
    
            const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    
            const embed = new discord.MessageEmbed()
            .setColor('7FFFEC')
            .setTitle('Moon Image')
            .setURL(randomMessage)
            .setImage(randomMessage)
            .setFooter('Image by Apollo 11 and Apollo 12 Astronaut')
            .setTimestamp()
    
            message.channel.send(embed)
    }
}