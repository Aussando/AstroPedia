  
const got = require('got')
const { MessageEmbed } = require('discord.js')

module.exports = {
    name : 'meme',
    cooldown: 1000 * 10,
    description: 'Show meme',
    
    async run (bot, message, args) {
        const embed = new MessageEmbed();
        got('https://www.reddit.com/r/meme/random/.json')
            .then(response => {
                const [list] = JSON.parse(response.body);
                const [post] = list.data.children;
    
                const permalink = post.data.permalink;
                const memeUrl = `https://reddit.com${permalink}`;
                const memeImage = post.data.url;
                const memeTitle = post.data.title;
                const memeUpvotes = post.data.ups;
                const memeNumComments = post.data.num_comments;
    
                embed.setTitle(`${memeTitle}`);
                embed.setURL(`${memeUrl}`);
                embed.setColor('7FFFEC');
                embed.setImage(memeImage);
                embed.setFooter(`👍 ${memeUpvotes} 💬 ${memeNumComments}`);
    
                message.channel.send(embed);
            })
            .catch(console.error);
    }
}