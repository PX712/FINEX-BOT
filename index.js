const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!'



client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});
client.on('ready', () => {
  console.log('╔[══════════════════════════════════]╗');
  console.log('')
  console.log('            ╔[════════════]╗')
  console.log('              Bot Is Online')
  console.log('            ╚[════════════]╝')
  console.log('')
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log('')
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log('')
  console.log('╚[════════════════════════════════════]╝')
});

client.on('ready', function(){
    var ms = 10000 ;
    var setGame = [' !invite ','FINEX SERVER | FX ','BY : بايثور ','FINEX BOT','(= Hi'];
    var i = -1;
    var j = 0;
    setInterval(function (){
        if( i == -1 ){
            j = 1;
        }
        if( i == (setGame.length)-1 ){
            j = -1;
        }
        i = i+j;
        client.user.setGame(setGame[i],`https://www.twitch.tv/pythorxxx`);
    }, ms);

})

client.on('message', message => {// ميوت للروم يا باث.


if (message.content === prefix + "cmute") {
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false

           }).then(() => {
               message.reply("Channel Muted ✅ ")
           });
}
  if (message.content === prefix + "ucmute") {
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: true

           }).then(() => {
               message.reply("Channel UnMuted ✅ ")
           });
}


});




 client.on('message', message => {
	    var prefix = "!";
              if(!message.channel.guild) return;
    if(message.content.startsWith(prefix + 'bc')) {
    if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
  if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
    let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
    let copy = "CJ Bot";
    let request = `Requested By ${message.author.username}`;
    if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟ \nمحتوى البرودكاست:** \` ${args}\``).then(msg => {
    msg.react('✅')
    .then(() => msg.react('❌'))
    .then(() =>msg.react('✅'))
    
    let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
    let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
    
    let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
    let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
 reaction1.on("collect", r => {
    message.channel.send(`**☑ | Done ... The Broadcast Message Has Been Sent For __${message.guild.members.size}__ Members**`).then(m => m.delete(5000));
    message.guild.members.forEach(m => {
  
  var bc = new
       Discord.RichEmbed()
       .setColor('RANDOM')
       .setTitle('Broadcast')
       .addField('سيرفر', message.guild.name)
       .addField('المرسل', message.author.username)
       .addField('الرسالة', args)
       .setThumbnail(message.author.avatarURL)
       .setFooter(copy, client.user.avatarURL);
    m.send({ embed: bc })
    msg.delete();
    })
    })
    reaction2.on("collect", r => {
    message.channel.send(`**Broadcast Canceled.**`).then(m => m.delete(5000));
    msg.delete();
    })
    })
    }
    });




var ss = 0;
 
client.on('voiceStateUpdate', (o,n) => {// فويس اون لاين يا باث
    if (o.voiceChannel && !n.voiceChannel) {
        ss-=1
        n.guild.channels.get("423857340173910020").edit({
            name : "FINEX VOICE : " + ss+ ""
        })
    };
    if (n.voiceChannel && !o.voiceChannel) {
        ss+=1
        n.guild.channels.get("423857340173910020").edit({
            name : "FINEX VOICE : " + ss+ ""
        })
    }
})
client.on("ready", () => {
    client.guilds.get("423857340173910017").members.forEach(m => {
        if (m.voiceChannel) {
            ss+=1
        };
        client.channels.get("423857340173910020").edit({
            name : "FINEX VOICE : " + ss+ ""
        })
    });
});



var botid = ["487620890373128192"];
   client.on('message', message => {
       if(message.content.startsWith(`${prefix}invite`)){
           if(!message.channel.guild) return message.channel.send("This Command is Just For Servers!")
           var embed = new Discord.RichEmbed()
           .setTitle("Invite Me !.")
           .setURL(`https://discordapp.com/oauth2/authorize/?permissions=8&scope=bot&client_id=${botid}`)
           .setTimestamp()
           .setColor("RANDOM")
           message.channel.send({embed})
       }
   });

   




client.on('message', message => {
     if (message.author.bot) return;
    if (message.content.startsWith("!رابط")) {
        message.channel.createInvite({
        thing: true,
        maxUses: 100,
        maxAge: 10800,
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
          .setDescription(" تم أرسال الرابط برسالة خاصة ")
           .setAuthor(client.user.username, client.user.avatarURL)
                 .setAuthor(client.user.username, client.user.avatarURL)
                .setFooter('طلب بواسطة: ' + message.author.tag)

      message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
              const Embed11 = new Discord.RichEmbed()
        .setColor("RANDOM")

    .setDescription(" مدة الرابط : 3 ساعات  عدد استخدامات الرابط : 100 ")
      message.author.sendEmbed(Embed11)
    }
});



client.on('guildMemberAdd', member => {
  member.guild.fetchInvites().then(guildInvites => {
    const ei = invites[member.guild.id];
    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
    const inviter = client.users.get(invite.inviter.id);
    const stewart = member.guild.channels.find("name", "welcome");
     stewart.send(`<@${member.user.id}> تمت الدعوه من <@${inviter.id}>`);
   //  stewart.send(`<@${member.user.id}> joined using invite code ${invite.code} from <@${inviter.id}>. Invite was used ${invite.uses} times since its creation.`);
  }); 
});

client.on('message', async function (message)  {
if(message.content.startsWith(prefix+"server")) {
const vlevel = ['None', 'Low (Must have verified email)', 'Medium (Must be register for 5 mineuts)', 'High (Need to wait 10 minutes)', 'Very High (Need verified phone on account)']
const members = await message.guild.members.filter(m=> m.presence.status === 'online').size + message.guild.members.filter(m=> m.presence.status === 'idle').size + message.guild.members.filter(m=> m.presence.status === 'dnd').size  
message.channel.send(new discord.RichEmbed() 
.setAuthor(`${message.guild.name} [Server Icon URL]`, message.guild.iconURL)
.setURL(message.guild.iconURL)
.addField('🆔 ايدي السيرفر', message.guild.id, true)
.addField('👑 اونر السيرفر', message.guild.owner, true)
.addField('🗺 منطقة', message.guild.region, true)
.addField(`👥 الاعضاء [${message.guild.memberCount}]`, `${members} online` ,true)
.addField(`💬 القنوات`, `**${message.guild.channels.filter(c => c.type === 'category').size}** الاقسام | **${message.guild.channels.filter(c=> c.type === 'text').size}**روم كتابي | **${message.guild.channels.filter(c=> c.type === 'voice').size}** روم صوتي` ,true)
.addField(`💠 مستوى التحقق`, vlevel[message.guild.verificationLevel] ,true)
.addField(`👔 الرتب`, message.guild.roles.size ,true)
.addField(`📆 تم انشأوها`, message.guild.createdAt ,true)
)
}
})



client.login(process.env.BOT_TOKEN);
