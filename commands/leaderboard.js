module.exports = {
  name: 'leaderboard',
  description: "leaderboard command!",
  execute(message,args, Discord){
    message.delete();
    const newEmbed = new Discord.MessageEmbed()
    .setTitle('Leaderboard:')
    .addFields(
      {name: '1st.', value: '/' },
      {name: '2nd.', value: '/' },
      {name: '3rd.', value: '/' },
      {name: '4th.', value: '/' },
      {name: '5th.', value: '/' },
      {name: '6th.', value: '/' },
      {name: '7th.', value: '/' },
      {name: '8th.', value: '/' },
      {name: '9th.', value: '/' },
      {name: '10th.', value: '/' },
    )
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