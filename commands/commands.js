module.exports = {
    name: 'commands',
    description: "this is a info command!",
    execute(message,args, Discord){

      const newEmbed = new Discord.MessageEmbed()
      .setTitle('Racing Cars Bot Commands')
      .setColor('#8b0000')
      .setTimestamp()
      .addFields(
        {name: 'Info | !commands', value: 'Use `!commands` to see this list'},
        {name: 'Info | !discord', value: 'Use `!discord` to get official Racing Cars Discord Invite'},
        {name: 'Info | !racingcars', value: 'Use `!racingcars` to get the game link for Racing Cars'},
        {name: 'Info | !testplace', value: 'Use `!testplace` to get the game link for The Test Place'},
        {name: 'Info | !invite', value: 'Use `!invite` to invite The Racing Cars Bot to your server!'},
        {name: 'ifno | !ticket', value: 'Use `!ticket` To Subbmit a World Record!'},
        {name: 'ifno | !suggest', value: 'Use `!suggest` To Suggest Something!'}
  )
  .setFooter(message.id)
    message.channel.send(newEmbed);

  }
}