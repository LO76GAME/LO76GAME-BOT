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
}
