module.exports = {
  name: 'ticketinfo',
  description: "ticketinfo command!",
  execute(message,args, Discord){
    message.delete();
    const newEmbed = new Discord.MessageEmbed()
    .setTitle('Leaderboard | !ticket')
    .setDescription('Do `!ticket` In <#849069540378017794> To Open a Ticket To Subbmit Your Racing Cars World Record!')
    .setColor('#8b0000')
    .setTimestamp()
    .setFooter(message.id)
    if(message.member.roles.cache.has('822597645742768138')) {
    message.channel.send(newEmbed);

  } else {
    const Embed = new Discord.MessageEmbed()
  .setTitle('You Dont Have The Permission To Use That Command!')
  .setColor('#8b0000')
    message.channel.send(Embed);
  }
  }
}