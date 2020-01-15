//in progress

const Discord = require('discord.js')
//var command = require('discord.js-commando')
const ms = require('ms')
var bot = new Discord.Client();
const fs = require ("fs");
//var warns = JSON.parse(fs.readFileSync("./warns.json", "utf8"));
var token = " -- -- -- "
bot.login(token) 

var prefix = (";");
var us_prefix = (";;");
var client = (bot);
var version = "Version 0.9.9"
var botColor = ("#2cb5cc"); //blue :#2cb5cc --- red:#ff0000 --- //rouge noël #bd2a2a

bot.on("message", (message) => {
    var dmDenied = new Discord.RichEmbed()
    .addField(":x:","The bot cannot work in private messages.")
    .setColor(botColor)
  
      {
        if(message.content.startsWith( us_prefix + "report")){
          console.log(message.content.slice(7) + " sent by "+ message.author.username + "#" + message.author.discriminator)
          message.channel.send("thanks, you're message has been delivered ")
          message.react("✅")
  
        }
         
          if(message.content === us_prefix + "edt"){
            if(message.author.id !== ownerID)return 
            var edt_embed = new Discord.RichEmbed()
            .setTitle("TIME TABLE 2nd2")
            .addField("Mon","SNT, 10h00\nSES -507- 11h35\n/midi 12h30/\nEspagnole -210- 13h30\nEPS 15h40\nCIAV 17h35")
            .addField("Tue","Espagnole -212- 09h25\nFrançais -418.420- 10h35\nMATH -203- 11h35\n/midi 12h30/\n MATH [ap] -111- 13h30\nANGLAIS -213- 14h25\n{B}EMC -421- 16h35\nFrançais -413.415- 17h35")
            .addField("Wed","CIAV 09h25\nANGLAIS -210- 10h35\nPhysique 11h35\n{B} physique 12h30")
            .addField("Thu","HIS-GEO -203- 09h25\nMATH -110- (10h35)->11h35\n/midi 12h30/\nFrançais -413.415- (13h30)->14h30\nSVT -> Physique 17h35")
            .addField("Fri","Vie de classe ~110~ 10h35\nANGLAIS -211- 11h35\n/midi 12h30/\nHIS GEO -203- 13h30\nESPAGNOLE -106- 14h30\nMaths -110- 15h40\n{B}SES -509- 17h35")
            message.channel.send(edt_embed)
        }
   
          if(message.content.startsWith( us_prefix + "create")){
            if(!message.guild) return message.channel.send(dmDenied)
            
            if(!message.member.hasPermission("BAN_MEMBERS"))return message.reply(":x: you need  `BAN_MEMBERS` to use this command ")
            var chanName = message.content.slice(7)
            message.guild.createChannel(chanName, 'text')
            
            message.channel.send(chanName + "\nhas been created! ✅")
          }
         
  
          if(message.content.startsWith( us_prefix + "setup")){
            if(!message.guild) return message.channel.send(dmDenied)
            
            if(!message.member.hasPermission("BAN_MEMBERS"))return message.reply(":x: you need  `BAN_MEMBERS` to use this command ")
           
            message.guild.createChannel("lo76bot-log", 'text').then(channel => {
              channel.setTopic("LOG LO76BOT ")
              channel.overwritePermissions(message.guild.member(), {VIEW_CHANNEL : false})
            })
                          
            
            message.channel.send("`lo76bot-log` has been created! ✅")
          }
  
          if(message.content === us_prefix + "del"){
            if(!message.member.hasPermission("BAN_MEMBERS"))return message.reply(":x: you need  `BAN_MEMBERS` to use this command ")
            if(!message.guild) return message.channel.send(dmDenied)
            message.react('✅').then(() => message.react('❌'));
   
  const filter = (reaction, user) => {
      return ['✅', '❌'].includes(reaction.emoji.name) && user.id === message.author.id;
  };
  
  message.awaitReactions(filter, { max: 1, time: 6000, errors: ['time'] })
      .then(collected => {
          const reaction = collected.first();
  
          if (reaction.emoji.name === '✅') {
        message.reply('✅✅✅✅✅✅✅-----DELETED-----✅✅✅✅✅✅✅✅✅');
        message.channel.delete();
          } else {
              message.reply('canceled');
          }
      })
      .catch(collected => {
          message.reply('Expirated delay ');
      });
          }
  
          if(message.content === us_prefix + "about-serv") {
            var server_embed = new Discord.RichEmbed()
            .setColor("#40A497")
            .setTitle("About this server discord ^^")
            .addField("Server name :", `${message.guild.name}`)
            .addField("Created at :", `${message.guild.createdAt}`)
            .addField("Joined at :", `${message.member.joinedAt}`)
            .addField("Members count:", `${message.guild.memberCount}`)
            .addField("Category and chanels count :", `${message.guild.channels.size}`)
            .setFooter("About server")
            message.channel.send(server_embed)
            console.log("about server command")
            message.react('🆗')
          }
  
          if(message.content === us_prefix + "console"){
            console.dir()
          }
            
  //sond
          if (message.content.startsWith(us_prefix + "sond")) {
            message.delete();
  
            if(!message.member.hasPermission("BAN_MEMBERS"))return message.reply(":x: you must have `BAN_MEMBERS`")
  
           // if(message.guild)return message.channel.send(dmDenied)
            
            var args = message.content.split(' ').join(' ').slice(5);
          
            if(!args) return message.channel.send("You need to ask something to the others!")
          
            var sond_embed = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setTitle("Sondage, veuillez ne répondre qu'une seule fois !")
            .setDescription(`Sondage de : ${message.author.username}`)
            .addField("** **",`${args}`)
            //.setThumbnail("https://cdn.discordapp.com/attachments/482179956743602197/486860823055302657/Sondage4.png")
            .setTimestamp()
            message.channel.send(sond_embed).then(function(message){
              message.react("✅")
                message.react("❌")
                console.log("one adminstrator wants members view")
            })
          }

  
  
          if (message.content === "XD"){
            message.channel.send(":joy:")
          
          if(message.content.startsWith(us_prefix + "update")){
              if (!message.guild) return message.channel.send(dmDenied);
              var update_embed = new Discord.RichEmbed()
              .setTitle("UPDATE")
              .addfield("ERROR","currently unavailable in ENGLISH U.S., use `;update`.")
              .setColor(botColor)
              message.channel.send(update_embed);
  
          }
  
          if(message.content.startsWith(us_prefix + "say")){
              if (!message.guild) return message.channel.send(dmDenied);
              if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("❌ You cannot use this command  `ADMIN`")
  
              var say = message.content.slice (4) //1 minimum
  
              if(!say) return message.reply("you need to input some text")
  
              var sayembed = new Discord.RichEmbed()
              .addField("TEXT", say)
              //.addField("Auteur de l'annonce", `${message.author}`)
              .setThumbnail()
              .setColor()
              message.channel.send(sayembed);
              message.delete()
  
              //message.channel.send("Vous pouvez mettre la couleur que vous voulez en écrivant :\n ;say `#000000` <message> ")
          }
  
          if(message.content === us_prefix +"color-help"){
              if (!message.guild) return message.channel.send(dmDenied);
              var colorEmbed = new Discord.RichEmbed()
              .setTitle("HELP COLOR")
              .addField("RED", "#ff0000")
              .addField("GREEN", "#00ff0d")
              .addField("BLUE", "#2cb5cc" )
              .addField("ORANGE", "#db9812")
              .addField("RANDOM", "RANDOM")
              .setColor(botColor)
              message.reply(colorEmbed);
              
              
          }
  
      
  
          if(message.content.startsWith(us_prefix + "clear")){
              if (!message.guild) return message.channel.send(dmDenied);
              var lBanchannel = message.guild.channels.find(`name`, "lo76bot-log");
              
              if(!lBanchannel) return message.reply(";-; `lo76bot-log`'s require to use this clear command, use ;setup to turn on moderation topic...")
              var args = message.content.split(" ").slice(1);
       
              if(!args[0]) return message.channel.send("__please input a number between 1 and 99__ ❌ `Clear <Number>`")      
  
              if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply("❌ you cannot use this command `BAN_MEMBERS`")
              //if(TypeError)return message.channel.send("ERROR, __console error :__\n`Type` error\nThe messages must be an Array, Collection, or number\n   at TextChannel.bulkDelete\n <number> must be between `1 and 100`");           
              
             
              message.channel.bulkDelete(args[0]).then(() => {
  
                var clearEmbed = new Discord.RichEmbed()
                .addField("CLEAR", `> ${args[0]} message(s) messages has been deleted`)
                .setColor(botColor)
                message.channel.send(clearEmbed).then(m => m.delete(1500));
                });
              //message.guild.member(victime).ban(LeMessage  +"ban par " + `${message.author.username}`) 
              //message.guild.delete().then("request by" + message.author.username)
          }
          if(message.content === prefix + "clear 0") {
              if (!message.guild) return message.channel.send(dmDenied);
              message.reply("cannot delete 0 messages, I dunno how to do :p ")
          }
  
  
  
  
          if(message.content.startsWith( us_prefix + "ban")){
              if (!message.guild) return message.channel.send(dmDenied);
              if(victime=== message.author) return message.reply("❌ You can't ban yourself bryan ;-;")
              message.delete();
              var Banchannel = message.guild.channels.find(`name`, "lo76bot-log");
  
              var victime = message.guild.member(message.mentions.users.first())
              var LeMessage = message.content.slice (4) //1 minimum
              //if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.channel.send(`${message.author}`+ "tu ne peux pas effectuer cette commande. Perimmission `BAN_MEMBERS` requis.❌ ");
              if (!victime) return message.reply(" :no_entry:\nje ne trouve pas ce membre. ")
             
              
              if (victime.hasPermission("BAN_MEMBERS")) return message.reply("❌ **:no_entry: je ne peux pas le bannir.** " + `${message.author}`);
              if(!lBanchannel) return message.reply(";-; `lo76bot-log`'s require to use this clear command, use ;setup to turn on moderation topic...")
           
              var BanEmbed = new Discord.RichEmbed()
              .setTitle("BAN")
              .setThumbnail(victime.user.displayAvatarURL)
              .addBlankField(true)
              .addField("Ban by  ", `${message.author}`)
              .addField("Reason", LeMessage)
              .addField("Banned in", `<#${message.channel.id}>`)
              .setFooter(message.author.username, message.author.avatarURL)
              .setColor("#fd0000")
              .setTimestamp()
              Banchannel.send(BanEmbed);
  
              
              //message.victime.createDM().then(channelb => {
              //   channelb.send("Vous avez été banni par "+ `${message.author}` + "pour le motif suivant" + LeMessage)
             // });
  
             message.mentions.users.first().send(`:warning: **BAN |** IN **${message.guild.name}** BANNED BY **${message.author.username}**\n\n**Reason:** ` + LeMessage)
  
              message.guild.member(victime).ban(LeMessage  +"ban by " + `${message.author.username}` ) 
  
            var banChannelRepport = new Discord.RichEmbed()
            .setTitle("BAN")
            .addField("User",victime)
            .addField("Reason",LeMessage)
            .setTimestamp()
            message.channel.send(banChannelRepport)
  
          }
  
            if(message.content === us_prefix + "check"){
              if (!message.guild) return message.channel.send(dmDenied);
              var modchannel = message.guild.channels.find(`name`, "lo76bot-log");
  
              var modchannelMissing = new Discord.RichEmbed()
              .setTitle("Moderation settings ")
              .addField("`MODERATION CHANNEL`", ":x: No `lo76bot-log`channel has been found ;-; ... ")
              .setTimestamp()
              .setColor("#ff0000")
  
              var adminperMissing = new Discord.RichEmbed()
              .setTitle("Check Catégorie Modération ")
              .addField("`SALON MODÉRATION`", "✅`lo76bot-log` ")
              .addField("BOT PERMISSIONS", ":x: this bot don't have any admin perm !")
              .setTimestamp()
              .setColor("#ff0000")
  
              var msgepermauthorMissing = new Discord.RichEmbed()
              .setTitle("Check Catégorie Modération ")
              .addField("`SALON MODÉRATION`", " ✅Salon `lo76bot-log` est bien paramétré ")
              .addField("BOT PERMISSIONS", "✅this bot have a admin perm !")
              .addField("BECARFUL", "you don't have moderation permissions ")
              .setTimestamp()
              .setColor("#00ff0d")
  
  
              if(!modchannel) return message.reply(modchannelMissing)
              if(!message.guild.member(bot.user).hasPermission("ADMINISTRATOR")) return message.reply(adminperMissing)
              if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply(msgepermauthorMissing)           
  
              message.channel.send(`${message.author}`)
              var checkEmbed = new Discord.RichEmbed()
              .setTitle("Check Catégorie Modération ")
              .addField("`BOT SETTINGS`", "✅all is alright ")
              .setTimestamp()
              .setColor("#00ff0d")
              message.channel.send(checkEmbed);
  
              
          }
  
          if(message.content.startsWith(prefix + "kick")){
              if (!message.guild) return message.channel.send(dmDenied);
              message.delete();
              var Banchannel = message.guild.channels.find(`name`, "lo76bot-log");
  
              var victimek = message.guild.member(message.mentions.users.first())
              var LeMessagek = message.content.slice (5) //1 minimum
              if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.channel.send(`${message.author}`+ "tu ne peux pas effectuer cette commande. Perimmission `BAN_MEMBERS` requis.❌ ");
              if (!victimek) return message.reply(" :no_entry:\nje ne trouve pas ce membre. ")
              
              if(victimek === message.author) return message.reply("❌Tu ne peux pas t'auto bannir ;-;")
              if (victimek.hasPermission("BAN_MEMBERS")) return message.reply("❌ **:no_entry: je ne peux pas le bannir.** " + `${message.author}`);
              if(!Banchannel) return message.reply(";-; Il manque le salon `lo76bot-log`. Je ne peux pas utiliser les fonctions `MODÉRATIONS`...")
           
              var KickEmbed = new Discord.RichEmbed()
              .setTitle("KICK")
              .setThumbnail(victimek.user.displayAvatarURL)
              .addBlankField(true)
              .addField("Kick par ", `${message.author}`)
              .addField("Raison de l'expulsion", LeMessagek)
              .addField("Kick dans le channel suivant", `<#${message.channel.id}>`)
              .setFooter(message.author.username, message.author.avatarURL)
              .setColor("#db9812")
              .setTimestamp()
              Banchannel.send(KickEmbed);
  
              message.channel.send("✅Kick demandé ! . . . ").then(m => m.delete(500));
  
              //victimek.createDM().then(channelk => {
              //    channelk.send("Vous avez été banni par "+ `${message.author}` + "pour le motif suivant" + LeMessagek)
              //});
  
              message.mentions.users.first().send(`:warning: **KICK |** depuis **${message.guild.name}** donné par **${message.author.username}**\n\n**Raison:** ` + LeMessagek)
  
              message.guild.member(victimek).kick(LeMessagek + "kick par " + `${message.author.username}`)
            
              var kickChannelRepport = new Discord.RichEmbed()
              .setTitle("KICK")
              .addField("User",victimek)
              .addField("Reason",LeMessagek)
              .setTimestamp()
              message.channel.send(kickChannelRepport)
              //<GuildMember>.ban(reason)
  
             
          
          }
  
          if(message.content === prefix){
  
              if (!message.guild) return message.channel.send(dmDenied);
              message.channel.send("❌ Merci de préciser une commande")
          }
  
          if(message.content === prefix + "invit"){
              //if (!message.guild) return message.channel.send(dmDenied);
              message.channel.send("> `inviter le bot/contact:`https://lo76game-yt-84.webself.net/bot-discord-v1  ")
              message.react('❤')
          }
  
          if(message.content === prefix + "bvn"){
  
              if (!message.guild) return message.channel.send(dmDenied);
              message.channel.send("> **BIENVENUE :heart:**")
          }
      
          if(message.content === prefix + "bug"){
  
              if (!message.guild) return message.channel.send(dmDenied);
              var bugEmbed = new Discord.RichEmbed()
              .setTitle("BUG")
              .addField("Dernier Bug enregistrer", "main server was disconected due to a security issue into it.")
              .addField("Date"," 09/01/2020")
              .addField("Contexte","SYSTEM ERROR (01)")
              .setTimestamp()
              .setColor(botColor)
              message.channel.send(bugEmbed);
          }
      
          if(message.content === prefix +"help"){
  
            var dateuh = new Date().toUTCString();
  
              if (!message.guild) return message.channel.send(dmDenied);
              message.channel.send(`${message.author}`).then(m => m.delete(2500));
  
              var helpembedconfirm = new Discord.RichEmbed()
              .setTitle("HELP COMMAND")
              .addField(";help", "Enovoyé en messages privés !")
              .setColor(botColor)
              message.channel.send(helpembedconfirm).then(function(message){
                message.react("✅").then(message.delete(5000))
             });
  
              //message.channel.send("> `Les différents status :` **EN LIGNE** = Aide disponible ✅ / **ABSENT** = Bot dispo mais Aide indisponible ❎ / **NE PAS DÉRANGER** = Bot indisponnible ❌ ").then(m => m.delete(15000));
              message.delete();
              console.log(';help✅Envoyer' + `${message.author}` + 'username=' + message.author.username +"when? =" + dateuh )
          }
  
          msg = message.content.toLowerCase();
  
          if (message.author.bot) return;
  
          mention = message.mentions.users.first();
  
          //warn cmd
  
          if (msg.startsWith (prefix + "warn")) {
  
              if (!message.guild) return message.channel.send(dmDenied);
              var warnMpLogChannel = message.guild.channels.find(`name`, "lo76bot-log");
              mentionMessage = message.content.slice (5);
              if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.channel.send(`${message.author}`+ "❌ Tu n'as pas la permission d'utiliser cette commande! Vérifie que tu as la perm `BAN_MEMBERS`.");
             
              var wUser = message.guild.member(message.mentions.users.first()) 
              if (!wUser) return message.reply("> :no_entry:\nje ne trouve pas ce membre. ")
              if (wUser.hasPermission("ADMINISTRATOR")) return message.reply("❌ **:no_entry: Tu ne peux pas warn un admin.** *héhé, on me la faits pas a l'envers celle là!*");
              if (wUser.hasPermission("BAN_MEMBERS")) return message.reply("❌ **:no_entry: Tu ne peux pas warn un modo^^** *WUT ? du calme par ici :p*");
  
              //if(!mentionMessage) return message.channel.send("❗ Precise à qui ")
  
              if (!warnMpLogChannel) return message.channel.send("> ❌Je ne trouve pas le salon `#lo76bot-log` et ne peut donc pas warn la personne.")
  
  
              if (mention == null) { return;}
              message.delete();
              var mpwarn = new Discord.RichEmbed()
              .setTitle("Warn ⚠")
              .setDescription("Détails de l'Avertissment : ")
              .setThumbnail(wUser.user.displayAvatarURL)
              .addBlankField(true)
              .addField("Personne warn ⚠", wUser)
              .addField("Motif", mentionMessage)
              .addField("__Envoyé par__ :", `${message.author}` + "dans "+ "<#" + message.channel.id + ">")
              .setFooter(bot.user.username, bot.user.avatarURL)
              .setTimestamp()
              .setColor("#db9812")
              message.delete()
  
              var replywarnembed = new Discord.RichEmbed()
              .addField("USER", wUser )
              .addField("MOTIF",mentionMessage )
             // mention.sendMessage (mpwarn);
              warnMpLogChannel.send(mpwarn);
  
              message.channel.send (replywarnembed);
  
              //message.channel.send("> __averti par__ " + `${message.author}`)
  
              message.channel.send("> **WARNED!**" + "✅" + "enregistrer dans #lo76bot-log").then(m => m.delete(5000));
             
  
          }
           
  
          if(message.content.startsWith(prefix + "badwarn")){
  
              if (!message.guild) return message.channel.send(dmDenied);
              lemots = message.content.slice (8);
              message.delete();
              message.channel.send("ce mot est blacklister❌").then(m => m.delete(5000));
  
              var WarnEmbed1 = new Discord.RichEmbed()
              .setTitle("BAD WORD")
              .setThumbnail(message.guild.member(message.mentions.users.first()).displayAvatarURL)
              .addField("Bad Word Usage !", lemots)
              .addField("Auteur :", message.guild.member(message.mentions.users.first()))
              .setFooter(bot.user.username, bot.user.avatarURL)
              .setTimestamp()
              .setColor("#fd0000")
              message.channel.send(WarnEmbed1);
          }  
          
       
  
  
      //stop warn
  
          if(message.content.startsWith(prefix + "mppp-all")) {
  
              if (!message.guild) return message.channel.send(dmDenied);
       
              var args = message.content.split(" ").slice(1);
              var msge = args.join(' ');
      
              if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send("❌ Tu n'as pas la permission d'utiliser cette commande!");
              if(!msge) return message.channel.send("❗ Precise un message")
      
              var mpall = new Discord.RichEmbed()
              .setTitle("⚠")
              .setDescription("`⚠`")
              .setThumbnail(bot.user.avatarURL)
              .addBlankField(true)
              .addField("MESSAGE IMPORTANT ⚠", msge)
              .addField("Envoyé par :", `${message.author}`)
              //.addField()
              .setFooter(bot.user.username, bot.user.avatarURL)
              .setTimestamp()
              .setColor(botColor)
              message.delete()
              message.guild.members.map(m => m.send(mpall))
              
              message.channel.send("✅message envoyé !").then(m => m.delete(5000));
          }
      //stop Mpall
          if(message.content.startsWith(prefix + "help")) {
  
              if (!message.guild) return message.channel.send(dmDenied);
      
              message.author.createDM().then(channel => {
              var helpembed = new Discord.RichEmbed()
              .setTitle("Voici les commands du bot " + bot.user.username)
              .setDescription("`Le préfix est ;`"+ version)
              .setThumbnail(bot.user.avatarURL)
              .addBlankField(true)
              .addField("`Commandes Pratiques`  ", "`ping`, `bvn`, `check`,`report` permet de signaler un bug/proposer une idée, `color-help`, `setup` Pour paramétrer automatiquement le bot,`infos-serv`")
              .addBlankField(true)
              .addField("`Modération` *demande la perm Ban_Members!* + Un salon `lo76bot-log`:", "`warn`,`seewarn`,`kick`, `ban`,`localmute`,`unmute`, `clear <Nombre de messages>`,`say`, `create` <channel name>,`del` pour suprimmer le channel actuelle,`sond` pour faire un sondage !  ")
              .addBlankField(true)
              .addField("`Concernant le bot:`", "`update`, `bug`, `bot-info` Le bot DOIT avoir la perm `ADMINISTRATOR` pour bien fonctionner")
              .addBlankField(true)
              .addField("`inviter le bot/contact:`","https://lo76game-yt-84.webself.net/bot-discord-v1")
              .addField("`INFOS` ","Créer par LO76GAME -LO76BOT- 2019")
              .setFooter(bot.user.username, bot.user.avatarURL)
              .setTimestamp()
              .setColor(botColor)
              channel.send(helpembed)
              //channel.send(servinfo)
              });
              
          }
  
          if(message.content === prefix + "bot-info"){
  
              if (!message.guild) return message.channel.send(dmDenied);
  
              var botinfo = new Discord.RichEmbed()
              .setTitle("Infos sur le Bot", bot.user.avatarURL)
              .setThumbnail(bot.user.avatarURL)
              .addField("Créateur", "<@317762957993967618>")
              .addField("Version", version + "\nNode.js : 12.11.0\n Visual Studio Code : 1.41.0\n Dicord.js : v11.5")
              .addField(`Nombre de serveur où je suis :`, `${client.guilds.size}`)
              .addField("Nombre de membres à ma charge", `${client.users.size}`)
              .addField("Depuis le", "01 Juin 2019")
              .addBlankField(true)
              .addField("Aide", "https://lo76game-yt-84.webself.net/bot-discord-v1")
              .setFooter(bot.user.username, bot.user.avatarURL)
              .setColor(botColor)
              .setTimestamp();
              message.channel.send(botinfo)
              //message.channel.send(servinfo)
  
          }
  
      //-------------------------------------------------------------------------AU DESSUS LES COMMANDES-----EN DESSOUS LES POSSIBILITES DE FAUTES-----------------------------------------------------------------------------------
          if(message.content === prefix +"bnv"){
              message.channel.send("**BIENVENUE :heart:**")
          }
  
          //mute
    if(message.content.startsWith(prefix + "localmute")) {
  
      if (!message.guild) return message.channel.send(dmDenied);
      message.delete();
      if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.channel.send("Vous n'avez pas la permission `BAN_MEMBERS` !");
  
      if(message.mentions.users.size === 0) {
          return message.channel.send('Vous devez mentionner un utilisateur !');
      }
  
      var mute = message.guild.member(message.mentions.users.first());
      if(!mute) {
          return message.channel.send("Je n'ai pas trouvé l'utilisateur ou il l'existe pas !");
      }
  
      if(!message.guild.member(client.user).hasPermission("ADMINISTRATOR")) return message.channel.send("Je n'ai pas la permission !");
      message.channel.overwritePermissions(mute, { SEND_MESSAGES: false}).then(member => {
        var mute_embed = new Discord.RichEmbed()
        .setColor("#40A497")
        .setTitle("LOCAL Mute :")
        .addField('Membre muté :', `${message.mentions.users.first().username}`)
        .addField('Raison :',`${message.content.split(" ").slice(2).join(" ")}`)
        .addField("ID :", `${mute.user.id}`)
        .addField("Modérateur :", `${message.author.username}`)
        message.channel.send(mute_embed)
        console.log("Un utilisateur a été mute !" + `${message.mentions.users.first().username}`)
    });
  }
  //unmute
    if(message.content.startsWith(prefix + "unmute")) {
  
      if (!message.guild) return message.channel.send(dmDenied);
      message.delete();
      if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.channel.send("Vous n'avez pas la permission `BAN_MEMBERS` !");
  
        if(message.mentions.users.size === 0) {
            return message.channel.send('Vous devez mentionner un utilisateur !');
        }
  
        var mute = message.guild.member(message.mentions.users.first());
        if(!mute) {
            return message.channel.send("Je n'ai pas trouvé l'utilisateur ou il l'existe pas !");
        }
  
        if(!message.guild.member(client.user).hasPermission("ADMINISTRATOR")) return message.channel.send("Je n'ai pas la permission !");
        message.channel.overwritePermissions(mute, { SEND_MESSAGES: true}).then(member => {
            message.channel.send(`${mute.user.username} n'est plus mute !`)
            console.log("Utilisateur unmute ! " +`${mute.user.username}`);
        });
    }
  //warn
    var fs = require('fs');
  
    let warns = JSON.parse(fs.readFileSync("./warns.json", "utf8"));
     
    if (message.content.startsWith(prefix + "warn")){
  
      if (!message.guild) return message.channel.send(dmDenied);
     
    if (message.channel.type === "dm") return;
     
    var mentionned = message.mentions.users.first();
     
    if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**:x: Vous n'avez pas la permission `BAN_MEMBERS` dans ce serveur**").catch(console.error);
     
    if(message.mentions.users.size === 0) {
     
      return message.channel.send("**Vous n'avez mentionné aucun utilisateur**");
     
    }else{
     
        const args = message.content.split(' ').slice(1);
     
        const mentioned = message.mentions.users.first();
     
        if (message.member.hasPermission('BAN_MEMBERS')){
     
          if (message.mentions.users.size != 0) {
     
            if (args[0] === "<@!"+mentioned.id+">"||args[0] === "<@"+mentioned.id+">") {
     
              if (args.slice(1).length != 0) {
     
                const date = new Date().toUTCString();
     
                if (warns[message.guild.id] === undefined)
     
                  warns[message.guild.id] = {};
     
                if (warns[message.guild.id][mentioned.id] === undefined)
     
                  warns[message.guild.id][mentioned.id] = {};
     
                const warnumber = Object.keys(warns[message.guild.id][mentioned.id]).length;
     
                if (warns[message.guild.id][mentioned.id][warnumber] === undefined){
     
                  warns[message.guild.id][mentioned.id]["1"] = {"raison": args.slice(1).join(' '), time: date, user: message.author.id,username: mentioned.username };
     
                } else {
     
                  warns[message.guild.id][mentioned.id][warnumber+1] = {"raison": args.slice(1).join(' '),
     
                    time: date,
     
                    user: message.author.id
                  
                    ,username: mentioned.username};
     
                }
     
                fs.writeFile("./warns.json", JSON.stringify(warns), (err) => {if (err) console.error(err);});
     
    message.delete();
     
                message.channel.send(':warning: | **'+mentionned.tag+' à été averti**\n le warn est sauvegarder par -LO76BOT- ✅');
     
    message.mentions.users.first().send(`:warning: **Warn |** depuis **${message.guild.name}** donné par **${message.author.username}**\n\n**Raison:** ` + args.slice(1).join(' '))
     
              } else {
     
                  message.channel.send(":x:hmmm ça c'est mal passé ;-;\nErreur mauvais usage: "+prefix+"warn <user> <raison> le warn n'a pas été sauvegardé dans le serveur -LO76BOT- *;seewarn*\n "+ mentioned.tag + " a été averti en local dans `#lo76bot-log`");
              }
     
            } else {
     
              message.channel.send(":x:Erreur mauvais usage: "+prefix+"warn <user> <raison> le warn n'a pas été sauvegardé dans le serveur -LO76BOT- *;seewarn*\n "+ mentioned.tag + " a été averti en local dans `#lo76bot-log`");
     
            }
     
          } else {
     
              message.channel.send(":x:Erreur mauvais usage: "+prefix+"warn <user> <raison> le warn n'a pas été sauvegardé dans le serveur -LO76BOT- *;seewarn*\n "+ mentioned.tag + " a été averti en local dans `#lo76bot-log`");
     
          }
     
        } else {
     
          message.channel.send("**:x: Vous n'avez pas la permission `BAN_MEMBERS` dans ce serveur**");
     
        }
     
      }
     
    }
  //seewarn
    if (message.content.startsWith(prefix + "get(./warns.json)")) {
      
      if(message.author.id !== ownerID)return message.channel.send(Error)
      //if(Error)return message.channel.send(Error)
      message.channel.send(fs.readFileSync("./warns.json","utf-8")).then(m => m.react("✅"));
      
    } 
    if (message.content.startsWith(prefix+"seewarn")||message.content===prefix+"seewarn") {
  
      if (!message.guild) return message.channel.send(dmDenied);
     
      if (message.channel.type === "dm") return;
       
      if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**:x: Vous n'avez pas la permission `BAN_MEMBERS` dans ce serveur**").catch(console.error);
       
          const mentioned = message.mentions.users.first();
       
          const args = message.content.split(' ').slice(1);
       
          if (message.member.hasPermission('BAN_MEMBERS')){
       
            if (message.mentions.users.size !== 0) {
       
              if (args[0] === "<@!"+mentioned.id+">"||args[0] === "<@"+mentioned.id+">") {
       
                try {
       
                  if (warns[message.guild.id][mentioned.id] === undefined||Object.keys(warns[message.guild.id][mentioned.id]).length === 0) {
       
                    message.channel.send("**"+mentioned.tag+"** n'a aucun warn :eyes:");
       
                    return;
       
                  }
       
                } catch (err) {
       
                  message.channel.send("**"+mentioned.tag+"** n'a aucun warn :eyes:");
       
                  return;
       
                }
       
                let arr = [];
       
                arr.push(`**${mentioned.tag}** a **`+Object.keys(warns[message.guild.id][mentioned.id]).length+"** warns :eyes:");
       
                for (var warn in warns[message.guild.id][mentioned.id]) {
       
                  arr.push(`**${warn}** - **"`+warns[message.guild.id][mentioned.id][warn].raison+
       
                  "**\" warn donné par **"+message.guild.members.find("id", warns[message.guild.id][mentioned.id][warn].user).user.tag+"** a/le **"+warns[message.guild.id][mentioned.id][warn].time+"**");
       
                }
       
                message.channel.send(arr.join('\n'));
       
              } else {
       
                message.channel.send("Erreur mauvais usage: "+prefix+"seewarn <user> <raison> *mettez un espace entre `;seewarn` et @user*");
       
                console.log(args);
       
              }
       
            } else {
       
              message.channel.send("Erreur mauvais usage: "+prefix+"seewarn <user> <raison>");
       
            }
       
          } else {
       
            message.channel.send("**:x: Vous n'avez pas la permission `BAN_MEMBERS` dans ce serveur**");
       
          }
       
        }
        
      }
      var réponse1 = JSON.parse(fs.readFileSync('./eightball.json', "utf8"));
  
      if (message.content.startsWith(prefix + "rdm")) {
    
        var args = message.content.split(' ').join(' ').slice(5);
      
        if(!args) return message.channel.send("Tu dois me poser une question !")
      
        var rdm_embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField('Question :',`${args}`)
        .addField('Réponse :', réponse1[Math.round(Math.random() * réponse1.length)])
        message.channel.send(rdm_embed);
        fs.writeFile("./eightball.json", JSON.stringify(réponse1), (err) => {if (err) console.error(err);});
      }
    
        réponse = JSON.parse(fs.readFileSync('./twoball.json', "utf8"));
      
      if (message.content.startsWith(prefix + "rdon")) {
      
        var args = message.content.split(' ').join(' ').slice(5);
      
        if(!args) return message.channel.send("Tu dois me poser une question !")
      
        var rdm_embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField('Question :',`${args}`)
        .addField('Réponse :', réponse[Math.round(Math.random() * réponse.length)])
        message.channel.send(rdm_embed);
      }
  
      if(message.content.startsWith(prefix + "annce")){
        if(message.author.id !== ownerID)return;
       var annce = bot.channels.find(`name`,"lo76bot-log")
      }
  
  }); 
  //if(message.content === prefix + "@"){
  //    message.channel.send("@everyone").then(m => m.delete(20))
   //   message.delete();
  //}
  
  // STATUS
  bot.on('ready', () => {
  
    var now = new Date();
  var hour = now.getHours();
  var minute = now.getMinutes();
  var second = now.getSeconds();
  var times = (`[${hour}:${minute}:${second}]/`);
  console.log(times + `\x1b[33m%s\x1b[0m`, '[WARN]', '\x1b[0m', 'Connexion en cours...');
  console.log(times + `\x1b[33m%s\x1b[0m`, '[WARN]', '\x1b[0m', 'Connexion à l\'API Discord.js en cours...');
  console.log(times + `\x1b[32m%s\x1b[0m`, '[OK]', '\x1b[0m', 'Connexion à l\'API Discord.js effectuée');
  console.log(times + `\x1b[36m%s\x1b[0m`, '[INFO]', '\x1b[0m', 'Connecté sur ' + client.user.username + '#' + client.user.discriminator);
  console.log(times + `\x1b[32m%s\x1b[0m`, '[OK]', '\x1b[0m', 'Chargement terminé');
  console.log(times + `\x1b[32m%s\x1b[0m`, '[OK]', '\x1b[0m', 'Prêt et connecté');
  console.log(bot.pings);    
  console.log(`${client.users.size}` + "users")
  console.log(`${client.guilds.size}` + "guilds")
  
      bot.user.setStatus('online')
  
      bot.user.setUsername('-LO76BOT-')
  
      //bot.user.setActivity("MISE A JOUR" , {type: "PLAYING"}) //PLAYING - WATCHING - STREAMING - LISTENING   //  //bot.user.setGame('.help|M.A.J.') //, url:"https://twitch.tv/011540340111"
      var activNum =0;
      setInterval(function(){
          if (activNum === 0){
              bot.user.setActivity(";help|"+version , {type: "PLAYING"})
              activNum=1;
          } else if (activNum === 1) {
              bot.user.setActivity(`${client.guilds.size}` + "-"+ "serveurs" , {type: "WATCHING"})
              activNum = 0;
    //-----------------------------------------------------------------------------------------------------
       //   } else if (activNum === 2){
              //bot.user.setActivity("BUG BOT --> ORAGES", {type: "STREAMING" , url:"https://twitch.tv/011540340111"})//happy halloween
              //activNum = 0;
  
          }
      
  
          }, 4 * 1000 ) //Evry 4 secondes . Convertissement des MS en S avec *1000
  
  });
  
  
  bot.on('ready', () => {
      var mchannel4 = bot.channels.find(channel => channel.id === '629656258571534336')// serv rob1
  //messages
      //mchannel4.send('Le bot va se déconnecter, bonne nuit !')
  
      
  });
  
  
  
  //partie ping 
  const { Client, RichEmbed } = require("discord.js");
  const { config } = require("dotenv");
  config({
      path: __dirname + "/.env"
  })
  
  bot.on("message", async message => {
  
      // If the author's a bot, return
      // If the message was not sent in a server, return
      // If the message doesn't start with the prefix, return
      if (message.author.bot) return ;
      if (!message.guild) return;
      if (!message.content.startsWith(prefix)) return;
  
      // Arguments and command variable
      // cmd is the first word in the message, aka the command
      // args is an array of words after the command
      // !say hello I am a bot
      // cmd == say (because the prefix is sliced off)
      // args == ["hello", "I", "am", "a", "bot"]
      const args = message.content.slice(prefix.length).trim().split(/ +/g);
      const cmd = args.shift().toLowerCase();
  
      if (cmd === "ping") {
          // Send a message
          const msg = await message.channel.send(`🏓 Pinging....`);
  
          // Edit the message
          msg.edit(`🏓 Pong!\nLatency is ${Math.floor(msg.createdTimestap - message.createdTimestap)}ms\nAPI Latency is ${Math.round(bot.ping)}ms`)
          
      }
  });
  
  bot.login(process.env.TOKEN);
