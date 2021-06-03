module.exports = {
  name: 'invite',
  description: "this is the 4th command!",
  execute(message,args, Discord){
    const newEmbed = new Discord.MessageEmbed()
    .setTitle('You Can Invite The Racing Cars Bot To Your Server Through This Link:')
    .setDescription('https://discord.com/api/oauth2/authorize?client_id=846669960087732264&permissions=8&scope=bot')
    .setTimestamp()
    .addFields(
      {name: 'Note That Some Features Might Not Work!', value: '🛠'}
    )
    .setColor('#8b0000')
    .setFooter(message.id)
    message.channel.send(newEmbed);

}
}