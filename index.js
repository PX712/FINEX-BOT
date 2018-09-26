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
/////////////////////الأكواد///////////////////////////
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
/////
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
////////
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
/////////الرابط يا باث////////////////
//
client.on('message', message => {
    if (message.content.startsWith("رابط")) {
        if (message.author.bot) return
        message.channel.createInvite({
        thing: true,
        maxUses: 5,
        maxAge: 1,
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
          .setDescription(" تم ارسال الرابط في الخاص :link: ")
           .setAuthor(client.user.username, client.user.avatarURL)
                 .setAuthor(client.user.username, client.user.avatarURL)
                .setFooter('طلب بواسطة: ' + message.author.tag)
 
      message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
              const Embed11 = new Discord.RichEmbed()
        .setColor("RANDOM")
 
    .setDescription(" مدة الرابط :  24 ساعه فقط  عدد استخدامات الرابط : 5 ")
      message.author.sendEmbed(Embed11)
    }
});
client.on('message', message => {
    if (message.content.startsWith("الرابط")) {
        if (message.author.bot) return
        message.channel.createInvite({
        thing: true,
        maxUses: 5,
        maxAge: 1,
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
          .setDescription(" تم ارسال الرابط في الخاص :link: ")
           .setAuthor(client.user.username, client.user.avatarURL)
                 .setAuthor(client.user.username, client.user.avatarURL)
                .setFooter('طلب بواسطة: ' + message.author.tag)
 
      message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
              const Embed11 = new Discord.RichEmbed()
        .setColor("RANDOM")
 
    .setDescription(" مدة الرابط :  24 ساعه فقط  عدد استخدامات الرابط : 5 ")
      message.author.sendEmbed(Embed11)
    }
});
client.on('message', message => {
    if (message.content.startsWith("رابط السيرفر")) {
        if (message.author.bot) return
        message.channel.createInvite({
        thing: true,
        maxUses: 5,
        maxAge: 1,
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
          .setDescription(" تم ارسال الرابط في الخاص :link: ")
           .setAuthor(client.user.username, client.user.avatarURL)
                 .setAuthor(client.user.username, client.user.avatarURL)
                .setFooter('طلب بواسطة: ' + message.author.tag)
 
      message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
              const Embed11 = new Discord.RichEmbed()
        .setColor("RANDOM")
 
    .setDescription(" مدة الرابط :  24 ساعه فقط  عدد استخدامات الرابط : 5 ")
      message.author.sendEmbed(Embed11)
    }
});
client.on('message', message => {
    if (message.content.startsWith("link")) {
        if (message.author.bot) return
        message.channel.createInvite({
        thing: true,
        maxUses: 5,
        maxAge: 1,
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
          .setDescription(" تم ارسال الرابط في الخاص :link: ")
           .setAuthor(client.user.username, client.user.avatarURL)
                 .setAuthor(client.user.username, client.user.avatarURL)
                .setFooter('طلب بواسطة: ' + message.author.tag)
 
      message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
              const Embed11 = new Discord.RichEmbed()
        .setColor("RANDOM")
 
    .setDescription(" مدة الرابط :  24 ساعه فقط  عدد استخدامات الرابط : 5 ")
      message.author.sendEmbed(Embed11)
    }
});
//////////////////////////////////////



client.login(process.env.BOT_TOKEN);
