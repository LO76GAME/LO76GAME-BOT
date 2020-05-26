//setup   
  
  if(message.content.startsWith(prefix+"leave")){
      if (message.author.id !== ownerID) return;
      var splited_message = message.content.slice(prefix.length).split(" ");
                var command = splited_message[0];
                var parameters = splited_message.slice(1)
      var toRepeat = parameters.join(" ");
      client.guilds.find('id',`${toRepeat}`).leave().catch(console.error);
          message.channel.send(`__**Serveur quitté.**__`).catch(console.error);
          
    }
