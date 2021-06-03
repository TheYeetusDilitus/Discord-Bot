module.exports = {
  name: 'staffcommands',
  description: "this are secret staff command!",
  execute(message,args, Discord){
    message.delete();
    const newEmbed = new Discord.MessageEmbed()
    .setTitle('This Are Secret Staff Commands')
    .setTimestamp()
    .addFields(
      {name: '!ticketinfo', value: 'Dont Use This Command!' },
      {name: '!leaderboard', value: 'Dont Use This Command!' }
    )
    .setColor('#8b0000')
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