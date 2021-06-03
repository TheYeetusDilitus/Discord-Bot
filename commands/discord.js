module.exports = {
  name: 'discord',
  description: "this is the 1st command!",
  execute(message,args, Discord){
    const newEmbed = new Discord.MessageEmbed()
    .setTitle('Official Racing Cars Discord Server Invite:')
    .setDescription('https://discord.gg/UQuSfgZ')
    .setColor('#8b0000')
    .setTimestamp()
    .setFooter(message.id)
    message.channel.send(newEmbed);

}
}