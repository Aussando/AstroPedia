const discord = require ('discord.js')
const pagination = require('discord.js-pagination')

module.exports = {
    name:'marsrovers',
    cooldown: 1000 * 10,
    aliases: ['rovers'],
    description: 'information about Rovers in mars',

    async run (bot, message, args) {
        const page1 = new discord.MessageEmbed()
    .setTitle('Sojourner')
    .setColor('#7FFFEC')
    .setDescription('Sojourner is a robotic Mars rover that landed on July 4, 1997, in the Ares Vallis region. Sojourner was operational on Mars for 92 sols. The rover was the first wheeled vehicle to rove another planet, and was part of the Mars Pathfinder mission. It had front and rear cameras and hardware to conduct several scientific experiments. Designed for a mission lasting 7 sols, with possible extension to 30 sols, it was ultimately active for 83 sols. The rover communicated with Earth through the Pathfinder base station, which had its last successful communication session with Earth at 3:23 a.m. PDT on September 27, 1997. The last signal received from the rover was on the morning of October 7, 1997. The Sojourner mission formally ended four months later on March 10, 1998, after exhausting all further options. Sojourner traveled a distance of just over 100 meters (330 ft) by the time communication was lost. Its final confirmed command was to stay stationary until October 5, 1997, and then drive around the lander, though there is no indication that it was able to do so. \nSource: Wikipedia')
    .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Sojourner_on_Mars_PIA01122.jpg/800px-Sojourner_on_Mars_PIA01122.jpg')
    .addFields(
        { name: 'General Information', value: 'Operator: NASA \nMission duration: 83 sols (85 days) \nLaunch date: 4 December 1996, 06:58:07 UTC \nRocket: Delta II 7925 D240' },
        { name: '\u200B', value: 'Page 1 | Sojourner'},
    )

    .setTimestamp()

    //sekat----------------------------------------------------------------------------------------------------------

    const page2 = new discord.MessageEmbed()
    .setTitle('Spirit')
    .setColor('#7FFFEC')
    .setDescription('Spirit, also known as MER-A or MER-2, is a robotic rover on Mars, active from 2004 to 2010. Spirit was operational on Mars for 2208 sols. It was one of two rovers of NASA\'s Mars Exploration Rover Mission managed by the Jet Propulsion Laboratory (JPL). Spirit landed successfully within the impact crater Gusev on Mars at 04:35 Ground UTC on January 4, 2004, three weeks before its twin, Opportunity (MER-B), which landed on the other side of the planet. Its name was chosen through a NASA-sponsored student essay competition. The rover became stuck in a "sand trap" in late 2009 at an angle that hampered recharging of its batteries; its last communication with Earth was sent on March 22, 2010. \nSource: Wikipedia')
    .setThumbnail('https://images-ext-2.discordapp.net/external/xpiwmzUWDcDuyp-dGOeByncAo64_rjKkL5R-LPLW1yo/https/upload.wikimedia.org/wikipedia/commons/thumb/f/f8/KSC-03PD-0786.jpg/320px-KSC-03PD-0786.jpg?width=240&height=157')
    .addFields(
        { name: 'General Information', value: 'Operator: NASA \nMission duration: 2280 sols (2269 days) \nLaunch date: 10 June 2003, 1:58:47 p.m. EDT \nRocket: Delta II 7925-9.5' },
        { name: '\u200B', value: 'Page 2 | Spirit'},
    )

    .setTimestamp()

    //sekat-------------------------------------------------------------------------

    const page3 = new discord.MessageEmbed()
    .setTitle('Opportunity')
    .setColor('#7FFFEC')
    .setDescription('Opportunity, also known as MER-B or MER-1, and nicknamed "Oppy," is a robotic rover that was active on Mars from 2004 until mid-2018. Opportunity was operational on Mars for 5110 sols. Launched on July 7, 2003, as part of NASA\'s Mars Exploration Rover program, it landed in Meridiani Planum on January 25, 2004, three weeks after its twin Spirit (MER-A) touched down on the other side of the planet. With a planned 90-sol duration of activity, Spirit functioned until it got stuck in 2009 and ceased communications in 2010, while Opportunity was able to stay operational for 5111 sols after landing, maintaining its power and key systems through continual recharging of its batteries using solar power, and hibernating during events such as dust storms to save power. This careful operation allowed Opportunity to operate for 57 times its designed lifespan, exceeding the initial plan by 14 years, 46 days. By June 10, 2018, when it last contacted NASA, the rover had traveled a distance of 45.16 kilometers. \nSource: Wikipedia')
    .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/NASA_Mars_Rover.jpg/800px-NASA_Mars_Rover.jpg')
    .addFields(
        { name: 'General Information', value: 'Operator: NASA \nMission duration: 5,498 days (15 Earth years) \nLaunch date: 7 July 2003, 03:18 UTC \nRocket: Delta II 7925H-9.5' },
        { name: '\u200B', value: 'Page 3 | Opportunity'},
    )

    .setTimestamp()

    //sekat---------------------------------------------------------------------

    const page4 = new discord.MessageEmbed()
    .setTitle('Curiosity')
    .setColor('#7FFFEC')
    .setDescription('Curiosity is a car-sized Mars rover designed to explore the Gale crater on Mars as part of NASA\'s Mars Science Laboratory (MSL) mission. Curiosity was launched from Cape Canaveral (CCAFS) on 26 November 2011, at 15:02:00 UTC and landed on Aeolis Palus inside Gale crater on Mars on 6 August 2012, 05:17:57 UTC. The Bradbury Landing site was less than 2.4 km (1.5 mi) from the center of the rover\'s touchdown target after a 560 million km (350 million mi) journey. \nSource: Wikipedia')
    .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Curiosity_Self-Portrait_at_%27Big_Sky%27_Drilling_Site.jpg/800px-Curiosity_Self-Portrait_at_%27Big_Sky%27_Drilling_Site.jpg')
    .addFields(
        { name: 'General Information', value: 'Operator: NASA \nMission duration: Still active; 3195 sols (3283 total days; 8 years, 361 days) since its landing \nLaunch date: 26 November 2011, 15:02:00 UTC \nRocket: Atlas V' },
        { name: '\u200B', value: 'Page 4 | Curiosity'},
    )

    .setTimestamp()

    //sekat------------------------------------------------------------------------

    const page5 = new discord.MessageEmbed()
    .setTitle('Perseverance')
    .setColor('#7FFFEC')
    .setDescription('Perseverance, nicknamed Percy, is a car-sized Mars rover designed to explore the crater Jezero on Mars as part of NASA\'s Mars 2020 mission. It was manufactured by the Jet Propulsion Laboratory and launched on 30 July 2020, at 11:50 UTC. Confirmation that the rover successfully landed on Mars was received on 18 February 2021, at 20:55 UTC. As of 30 July 2021, Perseverance has been active on Mars for 158 sols since its landing. Following the rover\'s arrival, NASA named the landing site Octavia E. Butler Landing. \nSource: Wikipedia')
    .setThumbnail('http://cdn.mos.cms.futurecdn.net/tcJMzYq7PVjyQacEZW5FLH.jpg')
    .addFields(
        { name: 'General Information', value: 'Operator: NASA \nMission duration: Still active; 144 sols (148 Earth days) since its landing \nLaunch date: 	30 July 2020, 11:50:00 UTC \nRocket: Atlas V' },
        { name: '\u200B', value: 'Page 5 | Perseverance'},
    )

    .setTimestamp()

    //sekat-----------------------------------

    const page6 = new discord.MessageEmbed()
    .setTitle('Tianwen-1')
    .setColor('#7FFFEC')
    .setDescription('Tianwen-1 is an interplanetary mission by the China National Space Administration (CNSA) to send a robotic spacecraft to Mars, consisting of 5 parts: an orbiter, deployable camera, lander, drop camera, and the Zhurong rover. The spacecraft, with a total mass of nearly five tons, is one of the heaviest probes launched to Mars and carries 13 scientific instruments. It is the first in a series of planned missions undertaken by CNSA as part of its Planetary Exploration of China program. \nSource: Wikipedia')
    .setThumbnail('https://upload.wikimedia.org/wikipedia/en/9/99/Mars_Global_Remote_Sensing_Orbiter_and_Small_Rover_%282020%29.png')
    .addFields(
        { name: 'General Information', value: 'Operator: CNSA \nMission duration: Still active; 376 days, 21 hours, 38 minutes since launch \nLaunch date: 	23 July 2020, 04:41:15 UTC \nRocket: Long March 5' },
        { name: '\u200B', value: 'Page 6 | Tianwen-1'},
    )

    .setTimestamp()

    //batas akhir---------------------------------------------------------------

    const page = [
        page1,
        page2,
        page3,
        page4,
        page5,
        page6
    ]

    const emoji = ["⬅️", "➡️"]

    const timeout = '99900'

    pagination(message, page, emoji, timeout)
   }
} 