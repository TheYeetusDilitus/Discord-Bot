module.exports = {
  name: 'suggest',
  description: 'creates a suggestion',
  execute(message, args, discord){
    const channel = message.guild.channels.cache.find(c => c.name === 'suggestions');
    if(!channel) return message.channel.send('**Suggestions Channel Doesnt Exist!**');

    let messageArgs = args.join(' ');
    const embed = new discord.MessageEmbed()
    .setColor('#8b0000')
    .setTitle('Racing Cars Suggestion')
    .addFields (
      {name: 'Suggestion:', value: messageArgs },
      {name: 'Suggested By:', value: message.author},
    )
    .setTimestamp()
    .setFooter(message.author.id)

    channel.send(embed).then((msg) =>{
      msg.react('👍');
      msg.react('👎');
      message.delete();
    }).catch((err) =>{
      throw err;
    });
    }
  }
