//----------------------------------------------------------CONST REQUIRE
const Discord = require('discord.js');
const ms = require('ms');
const mongodb = require('./commands/system/mongo')()
const PrefixSchema = require('./commands/schema/PrefixSchema')
const AFKS = require('./commands/schema/afk-schema')
const db = require('./commands/system/command')
const config = require('./config.json')
const { DiscordTogether } = require('discord-together');
const { GiveawaysManager } = require('discord-giveaways');
const { token } = require('./config.json');
const { readdirSync, read } = require('fs');
const { join } = require('path');
const { MessageButton, MessageActionRow } = require('discord-buttons');
const { TIMEOUT } = require('dns');

const bot = new Discord.Client();

//----------------------------------------------------------COLLECTION
bot.commands = new Discord.Collection();
const commandFolders = readdirSync('./commands');
bot.snipes = new Discord.Collection();
const Timeout = new Discord.Collection();
bot.discordTogether = new DiscordTogether(bot);

//----------------------------------------------------------GIVEAWAY
bot.config = config;
bot.giveawaysManager = new GiveawaysManager(bot, {
    storage: "./giveaway.json",
    updateCountdownEvery: 5000,
    default: {
        botsCanWin: false,
        exemptPermissions: [],
        embedColor: "#7FFFEC",
        reaction: "🎉"
    }
});

//----------------------------------------------------------FOLDER HANDLER
const commandFiles = readdirSync(join(__dirname, "commands")).filter(file => file.endsWith(".js"));

for (const folder of commandFolders) {
    const commandFiles = readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
    for (const file of commandFiles) {
        const command = require(`./commands/${folder}/${file}`);
        bot.commands.set(command.name, command);
    }
}

bot.on("error", console.error);

//----------------------------------------------------------BOT STATUS
bot.on('ready', () => {
    console.log('AstroPedia is Online!');
    bot.user.setActivity('Rocket | ,help', { type: "WATCHING" }).catch(console.error)
});

//----------------------------------------------------------REQUIRE
require('discord-buttons')(bot);
require('discord-reply');

//----------------------------------------------------------SNIPE
bot.on('messageDelete', (message) => {
    let snipes = bot.snipes.get(message.channel.id) || [];
    if (snipes.length > 50) snipes = snipes.slice(0, 4);

    snipes.unshift({
        msg: message,
        image: message.attachments.first()?.proxyURL || null,
        time: Date.now(),
    });

    bot.snipes.set(message.channel.id, snipes);
})

//----------------------------------------------------------DATA(PREFIX)
bot.on("message", async (message) => {

    if (message.author.bot) return;

    if (message.content.includes("@here") || message.content.includes("@everyone") || message.type == "REPLY") return false;

    if (message.mentions.has(bot.user)) {
        message.channel.send('here is my prefix `,`')
    };

    let prefix;
    let data = await PrefixSchema.findOne({
        _id: message.guild.id
    })
    if (data === null) {
        prefix = ","
    } else {
        prefix = data.newPrefix
    }

//----------------------------------------------------------DATA(AFK)
    let data2;
    try {
        data2 = await AFKS.findOne({
            userId: message.author.id,
            guildId: message.guild.id
        })
        if (!data2) {
            data2 = await AFKS.create({
                userId: message.author.id,
                guildId: message.guild.id
            })
        }
    } catch (error) {
        console.log(error)
    }

    if (data2.AFK === true) {
        data2.AFK_Reason = null
        data2.AFK = false
        message.lineReplyNoMention("Welcome back! Now i removed your <:afk:883112715252555906>")
        if(message.guild.roles.highest.name > message.guild.members.resolve(bot.user).roles.highest.name) message.member.setNickname("")
        await data2.save()
    }

    if (message.mentions.members.first()) {
        let data3;
        try {
            data3 = await AFKS.findOne({
                userId: message.mentions.members.first().id,
                guildId: message.guild.id
            })
            if (!data3) {
                data3 = await AFKS.create({
                    userId: message.mentions.members.first().id,
                    guildId: message.guild.id
                })
            }
        } catch (error) {
            console.log(error)
        }

        if (data3.AFK == true) {
            message.channel.send(`\`${message.mentions.members.first().user.tag}\` is <:afk:883112715252555906>: ${data3.AFK_Reason || "AFK"}`)
        }

    }

//----------------------------------------------------------HANDLER
    if (message.content.toLowerCase().startsWith(prefix)) {
        const args = message.content.slice(prefix.length).trim().split(/ +/);

        const commandName = args.shift().toLowerCase();

        const command = bot.commands.get(commandName) || bot.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
        if (!command) return;

        if (command) {
            if (command.cooldown) {
                if (Timeout.has(`${command.name}${message.author.id}`)) return message.lineReplyNoMention(`Please Wait \`${ms(Timeout.get(`${command.name}${message.author.id}`) - Date.now(), { long: true })}\` Before using this command again!`).then(m => {
                    m.delete({ timeout: 10000 });
                });
                command.run(bot, message, args)
                Timeout.set(`${command.name}${message.author.id}`, Date.now() + command.cooldown)
                setTimeout(() => {
                    Timeout.delete(`${command.name}${message.author.id}`)
                }, command.cooldown)
            } else {
                const check = await db.findOne({ Guild: message.guild.id })
                if (check) {
                    if (check.Cmds.includes(command.name)) return message.channel.send('This command has been disabled!')
                    command.run(bot, message, args)
                }
            }
        }
    }
})

bot.login(token);

//----------------------------https://github.com/Aussando/AstroPedia
