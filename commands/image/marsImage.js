const discord = require('discord.js')

module.exports = {
    name: 'marsimage',
    description: 'Shows mars image',
    aliases: ['marsi'],
    cooldown: 1000 * 10,

    async run(bot, message, args) {
        const messages = ["https://media.discordapp.net/attachments/872855960388001832/889513336629231637/ZEIrixYAAAAASUVORK5CYII.png?width=421&height=300", "https://media.discordapp.net/attachments/872855960388001832/889513336629231637/ZEIrixYAAAAASUVORK5CYII.png?width=421&height=300", "https://images-ext-1.discordapp.net/external/UN3o-J_zKSQAtoX-sKE9i9ebNo4IUihWx76tLGU2810/%3Fwidth%3D768%26height%3D432/https/images-ext-2.discordapp.net/external/gOdlOTDbmQpguhDwvVkTFeaS3FPp6RNWWVpAf85aP0Y/https/mars.nasa.gov/system/resources/detail_files/25790_First_selfie-1200.gif?width=576&height=324", "https://images-ext-2.discordapp.net/external/KjI7NtytS-bMZbV2HJT2hEKhgBMqQk7vBCB6pCh2jXY/%3Fwidth%3D421%26height%3D300/https/media.discordapp.net/attachments/825917983934251109/889501825068314624/AdfSZX7bIUniAAAAAElFTkSuQmCC.png?width=316&height=225", "https://mars.nasa.gov/system/resources/detail_files/25964_PIA24600_web.jpg", "https://mars.nasa.gov/system/resources/detail_files/25904_1-PIA24546-1200.jpg", "https://mars.nasa.gov/system/resources/detail_files/25862_PIA24625-Ingenuity-Spots-Perseverance-While-in-the-Air_a-web.jpg", "https://mars.nasa.gov/system/resources/detail_files/25702_PIA24488_NLF_0014_0668192052_178CPG_N0030110NCAM03014_0A0195J01-stretched-web.jpg", "https://mars.nasa.gov/mars2020-raw-images/pub/ods/surface/sol/00204/ids/edr/browse/zcam/ZL0_0204_0685052630_206ECM_N0071716ZCAM08228_110085J01_1200.jpg", "https://mars.nasa.gov/mars2020-raw-images/pub/ods/surface/sol/00194/ids/edr/browse/zcam/ZR0_0194_0684157883_988EBY_N0070000ZCAM03218_1100LMJ01_1200.jpg", "https://mars.nasa.gov/mars2020-raw-images/pub/ods/surface/sol/00168/ids/edr/browse/zcam/ZR0_0168_0681868155_149ECM_N0060170ZCAM08180_048085J01_1200.jpg", "https://mars.nasa.gov/mars2020-raw-images/pub/ods/surface/sol/00143/ids/edr/browse/ncam/NLF_0143_0679646131_681ECM_N0051812NCAM00209_01_295J01_1200.jpg", "https://mars.nasa.gov/mars2020-raw-images/pub/ods/surface/sol/00134/ids/edr/browse/zcam/ZL0_0134_0678851430_285EBY_N0050894ZCAM08136_0340LMJ02_1200.jpg", "https://mars.nasa.gov/mars2020-raw-images/pub/ods/surface/sol/00099/ids/edr/browse/zcam/ZL0_0099_0675742205_223ECM_N0040218ZCAM08060_079085J02_1200.jpg", "https://mars.nasa.gov/system/resources/detail_files/26227_PIA24839_Main_stretched-web.jpg", "https://mars.nasa.gov/internal_resources/1131", "https://mars.nasa.gov/system/resources/detail_files/26050_PIA24741-2560x1920.jpg", "https://mars.nasa.gov/system/resources/detail_files/26044_E3-PIA24725-web.jpg", "https://mars.nasa.gov/system/resources/detail_files/25609_1-PIA24428-1200.jpg"]

        const randomMessage = messages[Math.floor(Math.random() * messages.length)];

        const embed = new discord.MessageEmbed()
        .setColor('7FFFEC')
        .setTitle('Mars Image')
        .setURL(randomMessage)
        .setImage(randomMessage)
        .setFooter('Image by Perseverance rover and Ingenuity helicopter')
        .setTimestamp()

        message.channel.send(embed)
    }
}