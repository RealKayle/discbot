const Commando = require('discord.js-commando');
const bot = new Commando.Client({ commandPrefix: '?', owner: '204523814216925184', });
const TOKEN = 'NTM5NzIyNzQxNTExNjE4NTgw.DzGrLg.J7khGQ4dlTFrJ85Hyjv17IVFIf4';
const discord = require('discord.js');
bot.login(TOKEN);

bot.registry.registerGroup('simple', 'Simple');
bot.registry.registerGroup('music', 'Music');
bot.registry.registerGroup('pokemon', 'Pokemon');
bot.registry.registerGroup('team', 'Team');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');

global.currentTeamMembers1 = [];
global.currentTeamMembers2 = [];
global.team1Captain = [0];
global.team2Captain = [0];
global.team1Name = [0];
global.team2Name = [0];

bot.on("guildMemberAdd", function(member)
{
    message.member.send("Welcome to the server!")
    message.member.send("For commands type: !help") 

    let memberRole = member.guild.roles.find("name", "Member");
    member.addRole(memberRole);
});


global.servers = {};
bot.on('message', function(message){
    if(message.content ==+ 'Hello')
    {
        message.channel.sendMessage('Hallo '+ message.author + ', Hoe gaat het?')

    }
    else if(message.content == "welk team hebben we")
    {
        message.channel.sendMessage('Hallo '+ message.author + ', Hoe gaat het? om te kijken in welk team je zit of er een aan te maken doe ?createteam of ?teams')
    }
else if(message.content == 'Join')
    {
        message.member.send("Welcome to the server!");
        message.member.send("For commands type: ?help") ;

        let memberRole = message.member.guild.roles.find("name", "Member");
        message.member.addRole(memberRole);
    }

});

bot.on('ready', function(){
    console.log("Ready");
    bot.user.setActivity('Music, which GAP-BOT isnt capable of doing', {type: 'PLAYING'})
    .then(presence => console.log(`Activity set to ${presence.game ? presence.game.name : 'none'}`))
    bot.user.setPresence(status = 'idle' )
})