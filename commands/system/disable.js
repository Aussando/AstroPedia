const discord = require('discord.js')
const schema = require('./command')

module.exports = {
    name: 'disable',
    description: 'disable command',
    cooldown: 1000 * 10,

    async run (bot, message, args) {

        const permision = new discord.MessageEmbed()
         .setColor('FF0000')
         .setDescription(':x: | Missing Permission! \n\nYou need **Manage Server** permission to use this command!')
        if(!message.member.hasPermission('MANAGE_SERVER')) return message.channel.send(permision)
        
        const cmd = args[0];
        if(!cmd) return message.channel.send('Please specify a command')
        if(!!bot.commands.get(cmd) === false) return message.channel.send('This command does not exist');
        schema.findOne({ Guild: message.guild.id }, async(err, data) => {
            if(err) throw err;
            if(data) {
                if(data.Cmds.includes(cmd)) return message.channel.send('This command has already been disabled.');
                data.Cmds.push(cmd)
            } else {
                data = new schema({
                    Guild: message.guild.id,
                    Cmds: cmd
                })
            }
            await data.save();
            message.channel.send(`Command ${cmd} has been disabled`)
        })
    }
}