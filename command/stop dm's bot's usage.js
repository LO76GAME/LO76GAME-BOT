//create a reponse embed

  var dm_embed = new Discord.RichEmbed()
  .addField(":x:","LE BOT NE MARCHE PAS EN MESSAGES PRIVÉS !!")
  .setColor(RANDOM)

//then use this code bellow into your command to stop dm's usage and bug 

if(!message.guild) return message.channel.send(dm_embed)
