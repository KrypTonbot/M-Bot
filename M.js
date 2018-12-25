const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('NTI2NjgwNzYyMDcwODU5Nzkx.DwLYzA.zR5eb8f9MT0tBhgSNCcoj0VmrPE');
