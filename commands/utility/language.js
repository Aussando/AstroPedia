const discord = require('discord.js')
const pagination = require('discord.js-pagination')

module.exports = {
    name: "language",
    aliases: ['iso'],
    cooldown: 1000 * 10,
    description: "show ISO language for `,translate`",

    async run (bot, message, args) {

    const page1 = new discord.MessageEmbed()
    .setThumbnail('https://media.discordapp.net/attachments/825917983934251109/883109118875938816/20210903_050001.jpg?width=498&height=498')
    .setTitle('Language Code List')
    .setColor('#7FFFEC')
    .addFields(
        {name: 'A', value: '`af`-Afrikaans, `sq`-Albanian, `ar`-Arabic, `hy`-Armenian, `az`-Azerbaijani'},
        {name: 'B', value: '`eu`-Basque, `be`-Belarusian, `bn`-Bengali, `bs`-Bosnian, `bg`-Bulgarian'},
        {name: 'C', value: '`ca`-Catalan, `ceb`-Cebuano, `ny`-Chichewa, `zh-cn`-Chinese Simplified, `zh-tw`-Chinese Traditional, `co`-Corsican, `hr`-Croatian, `cs`-Czech'},
        {name: 'D', value: '`da`-Danish, `nl`-Dutch'},
        {name: 'E', value: '`en`-English, `eo`-Esperanto, `et`-Estonian'},
    )
    .setTimestamp()

//----------------------------------------------------SEKAT------------------------
 
    const page2 = new discord.MessageEmbed()
    .setThumbnail('https://media.discordapp.net/attachments/825917983934251109/883109118875938816/20210903_050001.jpg?width=498&height=498')
    .setTitle('Language Code List')
    .setColor('#7FFFEC')
    .addFields(
        {name: 'F', value: '`tl`-Filipino, `fi`-Finnish, `fr`-French, `fy`-Frisian'},
        {name: 'G', value: '`gl`-Galician, `ka`-Georgian, `de`-German, `el`-Greek, `gu`-Gujarati'},
        {name: 'H', value: '`ht`-Haitian Creole, `ha`-Hausa, `haw`-Hawaiian, `iw`-Hebrew, `hi`-Hindi, `hmn`-Hmong, `hu`-Hungarian'},
        {name: 'I', value: '`i`s-Icelandic, `ig`-Igbo, `id`-Indonesian, `ga`-Irish, `it`-Italian'},
        {name: 'J', value: '`ja`-Japanese, `jw`-Javanese'},
    )
    .setTimestamp()

//----------------------------------------------------SEKAT----------------------------------

const page3 = new discord.MessageEmbed()
.setThumbnail('https://media.discordapp.net/attachments/825917983934251109/883109118875938816/20210903_050001.jpg?width=498&height=498')
    .setTitle('Language Code List')
    .setColor('#7FFFEC')
    .addFields(
        {name: 'K', value: '`kn`-Kannada, `kk`-Kazakh, `km`-Khmer, `ko`-Korean, `ku`-Kurdish (Kurmanji), `ky`-Kyrgyz'},
        {name: 'L', value: '`lo`-Lao, `la`-Latin, `lv`-Latvian, `lt`-Lithuanian, `lb`-Luxembourgish'},
        {name: 'M', value: '`mk`-Macedonian, `mg`-Malagasy, `ms`-Malay, `ml`-Malayalam, `mt`-Maltese, `mi`-Maori, `mr`-Marathi, `mn`-Mongolian, `my`-Myanmar (Burmese)'},
        {name: 'N', value: '`ne`-Nepali, `no`-Norwegian'},
        {name: 'P', value: '`ps`-Pashto, `fa`-Persian, `pl`-Polish, `pt`-Portuguese, `ma`-Punjabi'},
    )
    .setTimestamp()

//----------------------------------------------------SEKAT----------------------------------

const page4 = new discord.MessageEmbed()
.setThumbnail('https://media.discordapp.net/attachments/825917983934251109/883109118875938816/20210903_050001.jpg?width=498&height=498')
    .setTitle('Language Code List')
    .setColor('#7FFFEC')
    .addFields(
        {name: 'R', value: '`ro`-Romanian, `ru`-Russian'},
        {name: 'S', value: '`sm`-Samoan, `gd`-Scots Gaelic, `sr`-Serbian, `st`-Sesotho, `sn`-Shona, `sd`-Sindhi, `si`-Sinhala, `sk`-Slovak, `sl`-Slovenian, `so`-Somali, `es`-Spanish, `su`-Sudanese, `sw`-Swahili, `sv`-Swedish'},
        {name: 'T', value: '`tg`-Tajik, `ta`-Tamil, `te`-Telugu, `th`-Thai, `tr`-Turkish'},
        {name: 'U', value: '`uk`-Ukrainian, `ur`-Urdu, `uz`-Uzbek'},
        {name: 'V', value: '`vi`-Vietnamese'},
    )
    .setTimestamp()

//----------------------------------------------------SEKAT----------------------------------

const page5 = new discord.MessageEmbed()
.setThumbnail('https://media.discordapp.net/attachments/825917983934251109/883109118875938816/20210903_050001.jpg?width=498&height=498')
    .setTitle('Language Code List')
    .setColor('#7FFFEC')
    .addFields(
        {name: 'W', value: '`cy`-Welsh'},
        {name: 'X', value: '`xh`-Xhosa'},
        {name: 'Y', value: '`yi`-Yiddish, `yo`-Yoruba'},
    )
    .setTimestamp()


    const page = [
        page1,
        page2,
        page3,
        page4,
        page5
    ]

    const emoji = ["⬅️", "➡️"]

    const timeout = '99900'

    pagination(message, page, emoji, timeout)
   }


    }
