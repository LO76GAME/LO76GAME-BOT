bot.on('guildCreate', guild => {
  guild.createChannel("INFOS", 'text').then(channelc => {
    channelc.setTopic("HELLO !")
    
channelc.send("thanks for adding me ! type `;help` to see my commands !\n type `;setup` to turn on moderation topic !")
  })
});
