module.exports = {
  name: 'testplace',
  description: "this is the 3rd command!",
  execute(message,args, Discord){
    const newEmbed = new Discord.MessageEmbed()
    .setTitle('Test Place Game Link:')
    .setDescription('https://www.roblox.com/games/6545340869/Racing-Cars-Public-Test')
    .setColor('#8b0000')
    .setTimestamp()
    .setFooter(message.id)
    message.channel.send(newEmbed);

}
}