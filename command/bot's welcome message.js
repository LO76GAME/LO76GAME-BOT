bot.on('guildCreate', guild => {
  guild.createChannel("INFOS", 'text').then(channelc => {
    channelc.setTopic("HELLO !")
    
channelc.send("thanks for adding me ! Écrit `;help` pour voir mes commandes !\n type `;setup` to turn on moderation topic (FR&EN u.s.) !\n**NEW**I'm availabe in english u.s. by typing `;;` + command, more with ;;help.")
  })
});
