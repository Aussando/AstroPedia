const { MessageEmbed } = require("discord.js");
const pagination = require('discord.js-pagination');
const { readdirSync } = require("fs");

module.exports = {
  name: "help",
  aliases: ['h'],
  description: "Shows all AstroPedia Commands",
  cooldown: 1000 * 10,
  usage: `[commands]`,

  async run(bot, message, args) {


    if (!args[0]) {
      let categories = [];

      readdirSync("./commands/").forEach((dir) => {
        const commands = readdirSync(`./commands/${dir}/`).filter((file) =>
          file.endsWith(".js")
        );

        const cmds = commands.map((command) => {
          let file = require(`../../commands/${dir}/${command}`);

          if (!file.name) return "No command name.";

          let name = file.name.replace(".js", "");

          return `\`${name}\``;
        });

        let data = new Object();

        data = {
          name: dir.toUpperCase(),
          value: cmds.length === 0 ? "In progress." : cmds.join(" "),
        };

        categories.push(data);
      });

      const embed1 = new MessageEmbed()
        .setColor("7FFFEC")
        .setTitle("AstroPedia List Command")
        .setDescription(`Use \`,help\` followed by a command name to get more additional information on a command \n \u200B \n`)
        .setThumbnail("https://media.discordapp.net/attachments/825917983934251109/883105599229939753/20210903_044506.jpg?width=498&height=498")
        .addField("<:ys_NASA:852709564054503484> Space Agency", "`nasa` `roscosmos` `lapan` `jaxa` `isro` `gistda` `cnsa` `csa` `esa`")
        .addField("🚀 Private Spaceflight Companies", "`agnikulcosmos` `arcaspace` `asri` `astraspace` `bellatrixaerospace` `blueorigin` `blushift` `borneosuborbitals` `canadianarrow` `exos` `firefly` `lockheadmartin` `northropgrumman` `relativityspace` `rocketlab` `spacex` `ula` `virginorbit`")
        .addField("🌏 Planet", "`mercury` `venus` `earth` `mars` `jupiter` `saturn` `uranus` `neptune`")
        .addField("🛰️ Other", "`launchupdate` `astronaut` `cosmonaut` `taikonaut` `parastronaut` `iss` `tss` `marsrovers` `hubble` `voyager` `cassini`")
        .addField("<:rocket_engine:888738262938697740> Rocket Engine", "coming soon")
        .addField("💥 Accident", "`soyuz1` `soyuz11` `apollo1` `challenger` `columbia`")
        .addField("📷 Image", "`marsimage`")
        .setTimestamp()

      const embed2 = new MessageEmbed()
        .setColor("7FFFEC")
        .setTitle("AstroPedia List Command")
        .setDescription(`Use \`,help\` followed by a command name to get more additional information on a command \n \u200B \n`)
        .setThumbnail("https://media.discordapp.net/attachments/825917983934251109/883105599229939753/20210903_044506.jpg?width=498&height=498")
        .addField("🎉 Giveaway", "`gstart` `greroll` `gend`")
        .addField("🔭 Discord Together", "`youtube` `poker` `fishing` `chest` `betrayal`")
        .addField("🎶 Music", "coming soon")
        .addField("<:ys_awok:845283895732600882> Meme", "`meme` `rick` `amogus` `emojify`")
        .addField("⚙️ Moderation", "`snipe` `kick` `ban` `purge` `lock` `unlock`")
        .addField("<a:ys_discord:852738803700596747> Utility", "`suggestion` `afk` `wikipedia` `translate` `calculator` `avatar` `servericon` `member` `language` `invite` `support`")
        .addField("🔧 Config", "`setprefix`")
        .setTimestamp()

      const page = [
        embed1,
        embed2
      ]

      const emoji = ["⬅️", "➡️"]

      const timeout = '99900'

      return pagination(message, page, emoji, timeout)
      
    } else {
      const command =
        bot.commands.get(args[0].toLowerCase()) ||
        bot.commands.find(
          (c) => c.aliases && c.aliases.includes(args[0].toLowerCase())
        );

      if (!command) {
        const embed = new MessageEmbed()
          .setDescription(`Invalid command! Use \`,help\` for all of my commands!`)
          .setColor("7FFFEC");
        return message.lineReplyNoMention(embed).then(m => {
          m.delete({ timeout: 10000 });
        });
      }

      const embed = new MessageEmbed()
        .setTitle(`${command.name} command details`)
        .addField(
          "Aliases",
          command.aliases
            ? `\`${command.aliases.join("` `")}\``
            : "No aliases for this command"
        )
        .addField(
          "Description",
          command.description
            ? command.description
            : "No description for this command."
        )
        .addField(
          "Usage",
          command.usage
            ? `\`,${command.name} ${command.usage}\``
            : `\`,${command.name}\``
        )
        .setColor("7FFFEC");
      return message.channel.send(embed);
    }
  },
};