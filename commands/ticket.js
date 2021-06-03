const { client, MessageEmbed, TextChannel } = require('discord.js')
module.exports = {
  name: "ticket",
  description: "open a ticket!",
  async execute(message, args, cmd, client, discord) {
    const channel = await message.guild.channels.create(`${message.author.tag}`);
    message.delete();
    channel.setParent("826550932904214528");

    channel.updateOverwrite(message.guild.id, {
      SEND_MESSAGE: false,
      VIEW_CHANNEL: false,
    });
    channel.updateOverwrite(message.author, {
      SEND_MESSAGE: true,
      VIEW_CHANNEL: true,
    });
    const newEmbed = new MessageEmbed()
    .setTitle('Thank You For Contacting Support!')
    .setDescription('A Staff Member Is Going To Be With You Shortly!')
    .setColor('#8b0000')
    .setTimestamp()
    const reactionMessage = await channel.send(newEmbed);

    try {
      await reactionMessage.react("🔒");
      await reactionMessage.react("🔓");
      await reactionMessage.react("⛔");
    } catch (err) {
      channel.send("Error sending emojis!");
      throw err;
    }

    const collector = reactionMessage.createReactionCollector(
      (reaction, user) => message.guild.members.cache.find((member) => member.id === user.id).hasPermission("MANAGE_CHANNELS"),
      { dispose: true }
    );

    collector.on("collect", (reaction, user) => {
      switch (reaction.emoji.name) {
        case "🔒":
          const AEmbed = new MessageEmbed()
    .setTitle('This Channel Has Been Locked Till Further Notice!')
    .setColor('#8b0000')
    
          channel.send(AEmbed);
          channel.updateOverwrite(message.author, { SEND_MESSAGES: false });
          break;

          case "🔓":
            channel.updateOverwrite(message.author, { SEND_MESSAGES: true});
            const BEmbed = new MessageEmbed()
    .setTitle('This Channel Has Been Unlocked')
    .setColor('#8b0000')
    
          channel.send(BEmbed)
            break;

        case "⛔":
          const Embed = new MessageEmbed()
    .setTitle('Deleting This Channel In 5 Seconds!')
    .setColor('#8b0000')
    
          channel.send(Embed);
          setTimeout(() => channel.delete(), 5000);
          break;
      }
    });
  },
};