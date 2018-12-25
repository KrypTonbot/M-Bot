const Discord = require('discord.js');
const client = new Discord.Client();



// playing
client.on('ready', () => {                           
client.user.setGame(`ℕova Codes♥`,'https://www.twitch.tv/ℕ o v a Codes♥');
  });
client.on('message', message => {
  let anything = [
    "وعليكم السلام",
    "ياهلا والله",
    "وعليكم السلام ورحمة الله وبركاته",
    "مرحبا بك في السيرفر"
    
    
  ]
  if(message.content === 'السلام عليكم'){
    message.reply(`${anything[Math.floor(Math.random() * anything.length)]}`)
    
    return;
  }
});

client.login('NTI3MDY4MDkyNjE1MDk4Mzk4.DwOhOw.ViiX9IuBga1q-AgJto8VHm705cM');
