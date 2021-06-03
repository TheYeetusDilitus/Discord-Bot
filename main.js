const Discord = require('discord.js');

require('dotenv').config();

const client = new Discord.Client();

const prefix = '!';

const fs = require('fs');

client.commands = new Discord.Collection();
client.events = new Discord.Collection();
['command_handler', 'event_handler'].forEach(handler => {
  require(`./handlers/${handler}`)(client, Discord);
});

client.once('ready', () => {
  console.log('Racing Cars Bot is online!');
  client.user.setPresence({ activity: { name: "Racing Cars | !commands" } });
});

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for(const file of commandFiles){

    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.on('guildMemberAdd', guildMember => {
  guildMember.guild.channels.cache.get('831641356606242818').send(`**Welcome <@${guildMember.user.id}> To The Racing Cars Discord Server**, Make Sure To Check Out <#848230214394708008> and <#848230327914725376> To Keep Up With The Game Development!`)
});

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'commands') {
      client.commands.get('commands').execute(message, args, Discord);

    } else if(command == 'discord') {
    client.commands.get('discord').execute(message, args, Discord);

    } else if (command == 'racingcars') {
    client.commands.get('racingcars').execute(message, args, Discord);

    } else if (command == 'testplace') {
      client.commands.get('testplace').execute(message, args, Discord);

    } else if (command == 'invite') {
      client.commands.get('invite').execute(message, args, Discord);

    } else if (command == 'suggest'){
    client.commands.get('suggest').execute(message, args, Discord);

    } else if (command == 'ticket') {
    client.commands.get('ticket').execute(message, args, Discord);

    } else if (command == 'staffcommands') {
    client.commands.get('staffcommands').execute(message, args, Discord);

    } else if (command == 'ticketinfo') {
    client.commands.get('ticketinfo').execute(message, args, Discord);

    } else if (command == 'leaderboard') {
    client.commands.get('leaderboard').execute(message, args, Discord);

    } else if (command == 'hi') 
    client.commands.get('hi').execute(message, args, Discord);

});

client.login('ODQ2NjY5OTYwMDg3NzMyMjY0.YKy42A.AkFXXSiKo82vJyHUCtC4LrxT2To');
