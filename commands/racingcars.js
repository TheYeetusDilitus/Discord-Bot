module.exports = {
  name: 'racingcars',
  description: "this is the 2nd command!",
  execute(message,args, Discord){
    const newEmbed = new Discord.MessageEmbed()
    .setTitle('Game Link:')
    .setDescription('https://www.roblox.com/games/3520465234/Racing-Cars-BETA')
    .setColor('#8b0000')
    .setTimestamp()
    .setFooter(message.id)
    message.channel.send(newEmbed);

}
}