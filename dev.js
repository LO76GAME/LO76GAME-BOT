const Discord = require('discord.js')
const client = new Discord.Client();

client.login("")

var prefix = (".");

client.on("message", (message) => {

    if(message.content === prefix + "ping") {
        message.channel.send("pong :heart: ")
    }

    if(message.content === prefix + "help"){
        message.channel.send("Prefix set on . *impossible de changer le prefix* ping = pong // update = v+numéro de version // bnv = message de bienvenue =)//help= toutes les commandes disponibles  ")
    }

    if(message.content === prefix + "update"){
        message.channel.send("version 0.8.1")
    }

    if(message.content === prefix + "about-bot-beta"){
        message.channel.send("Ce bot a été développé par LO76GAME#7520 et n'est malheuresment pas encore disponible pour le grand public. Il est en cours de développement pour la version v1.0 qui comportera quelques fonctionalités comme: help *pour connaître TOUTES les cmd* update *pour connaître la version* ")
    }

    if(message.content === prefix + "off"){
        message.channel.send("Maintenance en cours **LE BOT VA SE DECONNECTER**")
    }

    if(message.content === prefix + "bnv"){
        message.channel.send("**BIENVENUE :heart:**")
    }

    if(message.content === prefix + "fin"){
        message.channel.send("fin de la maintenance")
    }

    if(message.content === prefix + "h-out"){
        message.channel.send("Fermeture du bot. Horaires de présence 7h-20h __environ__ *7am-8pm*")
    }

    if(message.content === prefix + "vac"){
        message.channel.send("Fermeture du bot du 24/06/2019 au 25/06/2019 *inclus*")
    }

    if(message.content === prefix + "link"){
        message.channel.send("invite mon bot: https://discordapp.com/oauth2/authorize?client_id=590880240654352405&scope=bot&permissions=805314622 ")
    }
});
