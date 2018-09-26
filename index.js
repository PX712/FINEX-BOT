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
  


  
client.on('message', message => {
     if (message.author.bot) return;
    if (message.content.startsWith("رابط")) {
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




client.on('message', MEGA => { 
  var sender = MEGA.author
  if(!MEGA.guild) return
  if(!sw[MEGA.guild.id]) sw[MEGA.guild.id] = {
  onoff: 'Off',
  ch:    'Welcome',
  msk:   'Welcome'
}
        if(MEGA.content.startsWith(prefix + `set-wlc`)) {        
        let perms = MEGA.member.hasPermission(`MANAGE_CHANNELS`)
        if(!perms) return MEGA.channel.send('**You need `Manage Channels` permission**')
        let args = MEGA.content.split(" ").slice(1)
        if(!args.join(" ")) return MEGA.reply(`
  ** ${prefix}set-wlc toggle **
  ** ${prefix}set-wlc set [Channel Name] **
  ** ${prefix}set-wlc msg [Welcome MEGA] **`) // ->set-wlc toggle - ->set-wlc set - ->set-wlc msg
        let state = args[0]
        if(!state.trim().toLowerCase() == 'toggle' || !state.trim().toLowerCase() == 'set' || !state.trim().toLowerCase() == 'msg' ) return MEGA.reply(`
 ** ${prefix}set-wlc toggle **
 ** ${prefix}set-wlc set [Channel Name] **
 ** ${prefix}set-wlc msg [Welcome MEGA] **`) // ->set-wlc toggle - ->set-wlc set - ->set-wlc msg
        if(state.trim().toLowerCase() == 'toggle') { 
        if(sw[MEGA.guild.id].onoff === 'Off') return [MEGA.channel.send(`**Welcome MEGA Is **on** !**`), sw[MEGA.guild.id].onoff = 'On']
        if(sw[MEGA.guild.id].onoff === 'On')  return [MEGA.channel.send(`**Welcome MEGA Is **off** !**`), sw[MEGA.guild.id].onoff = 'Off']
}
        if(state.trim().toLowerCase() == 'set') {
        let newch = MEGA.content.split(" ").slice(2).join(" ")
        if(!newch) return MEGA.reply(`${prefix}set-wlc set [Channel name]`)
        if(!MEGA.guild.channels.find(`name`,newch)) return MEGA.reply(`**I Cant Find This Channel.**`)
            sw[MEGA.guild.id].ch = newch
            MEGA.channel.send(`**Welcome channel Has Been Changed to ${newch}.**`)
} 
        if(state.trim().toLowerCase() == 'msg') {
        let newmsg = MEGA.content.split(" ").slice(2).join(" ")
        if(!newmsg) return MEGA.reply(`${prefix}set-wlc msg [New MEGA]`)
            sw[MEGA.guild.id].msk = newmsg
            MEGA.channel.send(`**Welcome MEGA Has Been Changed to ${newmsg}.**`)
} 
}
        if(MEGA.content === prefix + 'set-wlc info') {
        let perms = MEGA.member.hasPermission(`MANAGE_GUILD`) 
        if(!perms) return MEGA.reply(`You don't have permissions.`)
        var embed = new Discord.RichEmbed()
        .addField(`Welcome MEGA  `, `
On/Off  : __${sw[MEGA.guild.id].onoff}__
Channel : __${sw[MEGA.guild.id].ch}__
MEGA : __${sw[MEGA.guild.id].msk}__`)
        .setColor(`BLUE`)
            MEGA.channel.send({embed})
}
        fs.writeFile("./setwlc.json", JSON.stringify(sw), (err) => {
        if (err) console.error(err)
});
})



client.login(process.env.BOT_TOKEN);
