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
///////////////////////////////////////////////////////////////////////////////////////
var ss = 0;
 
client.on('voiceStateUpdate', (o,n) => {// فويس اون لاين يا باث
	if (o.voiceChannel && !n.voiceChannel) {
		ss-=1
		n.guild.channels.get("423931376367304755").edit({
			name : "FINEX VOICE : " + ss+ ""
		})
	};
	if (n.voiceChannel && !o.voiceChannel) {
		ss+=1
		n.guild.channels.get("423931376367304755").edit({
			name : "FINEX VOICE : " + ss+ ""
		})
	}
})
client.on("ready", () => {
	client.guilds.get("423857340173910017").members.forEach(m => {
		if (m.voiceChannel) {
			ss+=1
		};
		client.channels.get("423931376367304755").edit({
			name : "FINEX VOICE : " + ss+ ""
		})
	});
});



/////////////////////////////////////////////////////////////////////////////////////////////
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

/////////////////////////////////////////////////////////////////////////////////////////////////////
client.on('message', message => {
	if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'bc')) {
if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
let BcList = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.setAuthor(`محتوى الرساله ${args}`)
.setDescription(`برودكاست بـ امبد 📝\nبرودكاست بدون امبد✏ \nلديك دقيقه للأختيار قبل الغاء البرودكاست`)
if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(BcList).then(msg => {
msg.react('📝')
.then(() => msg.react('✏'))
.then(() =>msg.react('📝'))

let EmbedBcFilter = (reaction, user) => reaction.emoji.name === '📝' && user.id === message.author.id;
let NormalBcFilter = (reaction, user) => reaction.emoji.name === '✏' && user.id === message.author.id;

let EmbedBc = msg.createReactionCollector(EmbedBcFilter, { time: 60000 });
let NormalBc = msg.createReactionCollector(NormalBcFilter, { time: 60000 });

EmbedBc.on("collect", r => {
message.channel.send(`:ballot_box_with_check: تم ارسال الرساله بنجاح`).then(m => m.delete(5000));
message.guild.members.forEach(m => {
var bc = new
Discord.RichEmbed()
.setColor('RANDOM')
 .setTitle('`-Broadcast-`')
.setAuthor(`Server : ${message.guild.name}`)
.setFooter(`Sender : ${message.author.username}`)
.setDescription(`Message : ${args}`)
.setThumbnail(message.author.avatarURL)
m.send({ embed: bc })
msg.delete();
})
})
NormalBc.on("collect", r => {
 message.channel.send(`:ballot_box_with_check: تم ارسال الرساله بنجاح`).then(m => m.delete(5000));
message.guild.members.forEach(m => {
m.send(args);
msg.delete();
})
})
})
}
});
///////////////////////////////////////////////////////////////////////////

const shorten = require('isgd');
client.on('message', message => {

if (message.content.startsWith(prefix + 'short')) {
	let args = message.content.split(" ").slice(1);
if (!args[0]) return message.channel.send('**Usage**: '+ prefix +'short <رابط>')
if (!args[1]) { 
	shorten.shorten(args[0], function(res) {
		if (res.startsWith('Error:')) return message.channel.send('**Usage**: '+ prefix +'short <link>');
		message.channel.send(`اختصار الرابط:**<${res}>**`); 
	})
} else { 
	shorten.custom(args[0], args[1], function(res) { 
		if (res.startsWith('Error:')) return message.channel.send(`اختصار الرابط:**${res}**`); 
		message.channel.send(`اختصار الرابط:**<${res}>**`); 
})}}});




/////////////////////////////


///////////////////////////////////////
client.on('message', function(msg) {
if(msg.content.startsWith ('!server')) {
	if(!msg.channel.guild) return msg.reply('**:x: اسف لكن هذا الامر للسيرفرات فقط **');         
	let embed = new Discord.RichEmbed()
	.setColor('RANDOM')
	.setThumbnail(msg.guild.iconURL)
	.addField(':globe_with_meridians: **اسم السيرفر : **' , `**[ ${msg.guild.name} ]**`,true)
	.addField(':earth_africa: ** موقع السيرفر :**',`**[ ${msg.guild.region} ]**`,true)
	.addField(':military_medal:** الرتب :**',`**[ ${msg.guild.roles.size} ]**`,true)
	.addField(':bust_in_silhouette:** عدد الاعضاء :**',`**[ ${msg.guild.memberCount} ]**`,true)
	.addField(':white_check_mark:** عدد الاعضاء الاونلاين :**',`**[ ${msg.guild.members.filter(m=>m.presence.status == 'online').size} ]**`,true)
	.addField(':pencil:** الرومات الكتابية :**',`**[ ${msg.guild.channels.filter(m => m.type === 'text').size} ]**`,true)
	.addField(':loud_sound:** رومات الصوت :**',`**[ ${msg.guild.channels.filter(m => m.type === 'voice').size} ]**`,true)
	.addField(':crown:** صاحب السيرفر :**',`**[ ${msg.guild.owner} ]**`,true)
	.addField(':id:** ايدي السيرفر :**',`**[ ${msg.guild.id} ]**`,true)
	.addField(':date:** تم عمل السيرفر في : **',msg.guild.createdAt.toLocaleString())
	msg.channel.send({embed:embed});
}
});
//////////////////////////////////////////////////////////

const moment = require('moment');
client.on('message', message => { 
var prefix ="!";
			 if (message.content.startsWith(prefix + "user")) {
 var args = message.content.split(" ").slice(1);
 let user = message.mentions.users.first();
 var men = message.mentions.users.first();
		var heg;
		if(men) {
				heg = men
		} else {
				heg = message.author
		}
	var mentionned = message.mentions.members.first();
		 var h;
		if(mentionned) {
				h = mentionned
		} else {
				h = message.member
		}
					 moment.locale('ar-TN');
	var id = new  Discord.RichEmbed()
	.setAuthor(message.author.username, message.author.avatarURL) 
.setColor("#707070")
.addField(': تاريخ دخولك للدسكورد', `${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} **\n** \`${moment(heg.createdTimestamp).fromNow()}\`` ,true) 
.addField(': تاريخ دخولك لسيرفرنا  ', `${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')} \n \`${moment(h.joinedAt).fromNow()}\``, true)               
.setFooter(`FX BOT`, 'https://is.gd/yPGeUe')                                 
.setThumbnail(heg.avatarURL);
message.channel.send(id)
}       });
///////////////////////////////////////////////

client.on('message', message => {
if (message.author.bot) return;
if (!message.content.startsWith(prefix)) return;

let command = message.content.split(" ")[0];
command = command.slice(prefix.length);

let args = message.content.split(" ").slice(1);

if (command == "say") {
if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.reply("*لا تملك الصلاحيات المطلوبه**");

message.channel.send(args.join("  "))
	message.delete();
}



});








var dat = JSON.parse("{}");
function forEachObject(obj, func) {
	Object.keys(obj).forEach(function (key) { func(key, obj[key]) })
}
client.on("ready", () => {
	var guild;
	while (!guild)
			guild = client.guilds.find("name", "『FINEX』")
	guild.fetchInvites().then((data) => {
			data.forEach((Invite, key, map) => {
					var Inv = Invite.code;
					dat[Inv] = Invite.uses;
			})
	})
})
client.on("guildMemberAdd", (member) => {
	let channel = member.guild.channels.find('name', 'finex');
	if (!channel) {
			console.log("!channel fails");
			return;
	}
	if (member.id == client.user.id) {
			return;
	}
	console.log('made it till here!');
	var guild;
	while (!guild)
			guild = client.guilds.find("name", "『FINEX』")
	guild.fetchInvites().then((data) => {
			data.forEach((Invite, key, map) => {
					var Inv = Invite.code;
					if (dat[Inv])
							if (dat[Inv] < Invite.uses) {
									console.log(3);
									console.log(`${member} joined over ${Invite.inviter}'s invite ${Invite.code}`)
channel.send(`invited by : ${Invite.inviter}  `)            
}
					dat[Inv] = Invite.uses;
			})
	})
});






client.on("message", message => {
 if (message.content === "!help") {
  const embed = new Discord.RichEmbed()  
      .setColor("#000000") 
      .setDescription(`
      
                    FINEX-BOT Commands
Please Choose:
             

${prefix}bc ⇏ خاصية البرودكاست
${prefix}bans ⇏  لمعرفة عدد المبندين في سيرفر
${prefix}mute ⇏ لاعطاء شخص ميوت
${prefix}ping ⇏ لمعرفة بنق البوت
${prefix}bot ⇏ لمعرفة معلومات البوت
${prefix}info ⇏ لمعرفة معلومات البوت
${prefix}server ⇏ لمعرفة معلومات السيرفر
${prefix}server roles ⇏ لعرض كل رتب السيرفر
${prefix}invite ⇏ لدعوة البوت لسيرفرك
${prefix}id ⇏ لمعرفة ايدي حقك
${prefix}invites ⇏ check your invites
${prefix}user ⇏ informations about you account
${prefix}sug ⇏ to add suggest !
${prefix}giveaway ⇏ to create a giveaway



`)
   message.channel.sendEmbed(embed)
    
   }
   }); 

  client.on('message', message => {
    if(message.content == '!bans'){
        message.guild.fetchBans().then(bans => {
            bans.forEach(user => {
               message.channel.send('\`#\` <@'+ user.id + '>');
            });
        });
    }
});


client.on('voiceStateUpdate', (oldM, newM) => {
  let rebel1 = oldM.serverMute;
  let rebel2 = newM.serverMute;
  let codes1 = oldM.serverDeaf;
  let codes2 = newM.serverDeaf;
  let ch = oldM.guild.channels.find('name', 'log-changes')
  if(!ch) return;//ReBeL & Codes
    oldM.guild.fetchAuditLogs()
    .then(logs => {
      let user = logs.entries.first().executor.username
    if(rebel1 === false && rebel2 === true) {
       let embed = new Discord.RichEmbed()
       .setAuthor(`${newM.user.tag}`, newM.user.avatarURL)
       .setDescription(`${newM} تم إعطآئه ميوت صوتي`)
       .setFooter(`بوآسطهه : ${user}`)
        .setColor('#36393e')
       ch.send(embed)
    }
    if(rebel1 === true && rebel2 === false) {
       let embed = new Discord.RichEmbed()
       .setAuthor(`${newM.user.tag}`, newM.user.avatarURL)
       .setDescription(`${newM} تم فك الميوت الصوتي `)
       .setFooter(`بواسطه : ${user}`)
        .setColor('#36393e')
       .setTimestamp()
       ch.send(embed)
    }//ReBeL & Codes
    if(codes1 === false && codes2 === true) {
       let embed = new Discord.RichEmbed()
       .setAuthor(`${newM.user.tag}`, newM.user.avatarURL)
       .setDescription(`${newM} تم إعطآئه ديفن أو سمآعهه`)
       .setFooter(`بوآسطه : ${user}`)
        .setColor('#36393e')
       .setTimestamp()
       ch.send(embed)
    }//ReBeL & Codes
    if(codes1 === true && codes2 === false) {
       let embed = new Discord.RichEmbed()
       .setAuthor(`${newM.user.tag}`, newM.user.avatarURL)
       .setDescription(`${newM} تم فك عنهه الديفن أو السمآعهه`)
       .setFooter(`بوآسطه : ${user}`)
        .setColor('#36393e')
       .setTimestamp()
       ch.send(embed)
    }
  })
});


var secreT = [
  "**الحياة بكل ما فيها تقف دائمًا على حد الوسطية بين اتزان المعنى وضده من حب وكره وحق وباطل وعدل وظلم**.",
  "**كى تعيش عليك ان تتقن فن التجاهل باحتراف**.",
  "**لا تحزن على من اشعرك بان طيبتك غباء امام وقاحته**.",
  "**هناك من يحلم بالنجاح وهناك من يستيقظ باكرا لتحقيقه**.",
  "**ان تعالج ألمك بنفسك تلك هى القوة**.", 
  "**الجميع يسمع ما تقول والاصدقاء ينصتون لما تقول وافضل الاصدقاء ينصتون لما اخفاه سكوتك**.", 
  "**انتهى زمن الفروسية ، لم تنقرض الخيول بل انقرض الفرسان**.", 
  "**ان تكون اخرسا عاقلا خير من ان تكون نطوقا جهولا**.", 
  "**المناقشات العقيمة لا تنجب افكارا**.", 
  "**نحن نكتب ما لا نستطيع ان نقول وما نريد ان يكون**.", 
];




 client.on('message', message => {
   if (message.content.startsWith("!خواطر")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')
   .setThumbnail(message.author.avatarURL) 
 .addField('Snow' ,
  `${secreT[Math.floor(Math.random() * secreT.length)]}`)
  message.channel.sendEmbed(embed);
  console.log('[id] Send By: ' + message.author.username)
    }
});

client.on('message', message =>{
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    let prefix = '!';

if(cmd === `${prefix}sug`) {
    var suggestMessage = message.content.substring(8)
    let suggestEMBED = new Discord.RichEmbed()
    .setColor(3447003)
    .setTitle("New suggest just added!!")
    .setDescription(`**${suggestMessage}**`)
    .setFooter(`Suggested By : ${message.author.tag}`);
    message.delete().catch(O_o=>{}) 
    let suggests = message.guild.channels.find(`name`, "admins");
    suggests.send(suggestEMBED);
}

});










   
   client.on('message', message => {
            if (message.content.startsWith(prefix + "bot")) {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField(' السيرفرات🌐',`[${client.guilds.size}]  `)
.addField(' الاعضاء👥 ',` [${client.users.size}] `)
.addField('الرومات📚 ',`[${client.channels.size}]`) 
.addField(' البنق🚀 ',`[${Date.now() - message.createdTimestamp}]`) 
.addField('مصمم  + صاحب البوت ',`! FX | بايثور `)
.setColor('#7d2dbe')
  message.channel.sendEmbed(embed);
    }
});

client.on('message', message => {
    if (message.content === '!server roles') {
        var roles = message.guild.roles.map(roles => `${roles.name}, `).join(' ')
        const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField('الرتب:',`**[${roles}]**`)
        message.channel.sendEmbed(embed);
    }
});


client.on('message', message => {
            if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('!allcb')){
 if (message.author.id !== '326099411853901824') return message.reply('** هذا الأمر قفط لصاحب البوت و شكراًً **')
 if(!message.author.id === '326099411853901824') return;
message.channel.sendMessage('جار ارسال الرسالة |:white_check_mark:')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});

	client.on('message', message => {
                                if(!message.channel.guild) return;
                        if (message.content.startsWith('!ping')) {
                            if(!message.channel.guild) return;
                            var msg = `${Date.now() - message.createdTimestamp}`
                            var api = `${Math.round(client.ping)}`
                            if (message.author.bot) return;
                        let embed = new Discord.RichEmbed()
                        .setAuthor(message.author.username,message.author.avatarURL)
                        .setColor('RANDOM')
                        .addField('**Time Taken:**',msg + " ms :signal_strength: ")
                        .addField('**WebSocket:**',api + " ms :signal_strength: ")
         message.channel.send({embed:embed});
                        }
                    });
					
client.on('message', msg => {
     if(msg.content === 'NoN') {
         msg.guild.members.forEach(g => {
                g.setNickname(' FINEX')
        })
    }
})


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
         client.on('message', message => {
            if (message.content === 'hi') {
              message.channel.send('Hello :heart: ');

               

            }
}); 





var servers = {};
client.on('message' , async (message) => {
       if(message.content.startsWith(prefix + "play")) {
              let args = message.content.split(" ").slice(1);
    //play
    if (!args[0]) {
         message.channel.send("Please specify a link");
         return
    }
    if(!message.member.voiceChannel) {
        message.channel.sned("I think it may work better if you are in a voice channel!");
    }
    if(!servers[message.guild.id]) servers[message.guild.id] = {
        queue: []
    }
    var server = servers[message.guild.id];
    server.queue.push(args[0]);
    message.channel.send("Your song of choice is on the queue.` ")
    if(!message.member.voiceConnection) message.member.voiceChannel.join().then(function(connection) {
        play(connection, message);
    })
}

});






client.on('message', message => { // Leaked by [ @M3a4x ]
   if(message.content.startsWith(prefix + "invites")) {
    message.guild.fetchInvites().then(invs => {
      var user = message.mentions.users.first() || message.author
      var personalInvites = invs.filter(i => i.inviter.id === user.id);
      var inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
              var mmmmEmbed = new Discord.RichEmbed()
                         .setAuthor(client.user.username)
                         .setThumbnail(message.author.avatarURL)
 .addField(` لقد قمت بدعوة :`, ` ${inviteCount} `)
           .setFooter(`- Requested By: ${message.author.tag}`);
           message.channel.send(mmmmEmbed)
});
  }
});













const moment = require('moment');

client.on("guildMemberAdd", member => {
let welcomer = member.guild.channels.find("name","finex");
      if(!welcomer) return;
      if(welcomer) {
         moment.locale('ar-ly');
         var h = member.user;
        let norelden = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(h.avatarURL)
        .setAuthor(h.username,h.avatarURL)
        .addField(': تاريخ دخولك الدسكورد',`${moment(member.user.createdAt).format('D/M/YYYY h:mm a')} **\n** \`${moment(member.user.createdAt).fromNow()}\``,true)            
         .addField(': تاريخ دخولك السيرفر',`${moment(member.joinedAt).format('D/M/YYYY h:mm a ')} \n\`\`${moment(member.joinedAt).startOf(' ').fromNow()}\`\``, true)      
         .setFooter(`${h.tag}`,"https://cdn.discordapp.com/attachments/423929742337638410/497718782337220609/FINEX-P-2.png")
     welcomer.send({embed:norelden});          
               
 
      }
      });




      

client.on('message', function(message) {
	const myID = "326099411853901824";
    let args = message.content.split(" ").slice(1).join(" ");
    if(message.content.startsWith(prefix + "setname")) {
		        if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الحالة اللي تريدها.');
        client.user.setUsername(args);
        message.channel.send(':white_check_mark: Done!').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "stream")) {
		        if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الحالة اللي تريدها.');
        client.user.setGame(args , 'https://www.twitch.tv/pythorxxx');
        message.channel.send(':white_check_mark: Done!').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "playing")) {
				        if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الحالة اللي تريدها.');
        client.user.setGame(args);
        message.channel.send(':white_check_mark: Done!').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "listen")) {
				        if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الحالة اللي تريدها.');
        client.user.setActivity(args, {type:'LISTENING'});
        message.channel.send(':white_check_mark: Done!').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "watch")) {
				        if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الحالة اللي تريدها.');
        client.user.setActivity(args, {type:'WATCHING'});
        message.channel.send(':white_check_mark: Done!').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "setavatar")) {
				        if(message.author.id !== myID) return;
        client.user.setAvatar(args);
        message.channel.send(':white_check_mark: Done!').then(msg => {
                if(!args) return message.reply('اكتب الحالة اللي تريدها.');
           msg.delete(5000);
          message.delete(5000);
        });
    }
});


client.on('message', (message)=>{
        if (message.content.startsWith(`!embed`)) {
                var embed = new Discord.RichEmbed()
                .setAuthor(client.user.username,client.user.avatarURL)
                .setTitle("Message By " + message.author.tag)
                .setDescription(message.content.split(" ").join(" ").slice(7))
                .setColor("RANDOM")
                .setThumbnail(message.author.avatarURL)
                message.channel.send(embed);
        } else if (message.content.startsWith(`!say`)) {
                message.channel.send(message.content.split(" ").join(" ").slice(5));
        };
})





	   
	   


   client.on("message", msg => {
  if(msg.content.startsWith (prefix + "id")) {
    if(!msg.channel.guild) return msg.reply('**:x: اسف لكن هذا الامر للسيرفرات فقط **');         
      const embed = new Discord.RichEmbed();
  embed.addField(":cloud_tornado:  الاسم", `**[ ${msg.author.username}#${msg.author.discriminator} ]**`, true)
          .addField(":id:  الايدي", `**[ ${msg.author.id} ]**`, true)
          .setColor("RANDOM")
          .setFooter(msg.author.username , msg.author.avatarURL)
          .setThumbnail(`${msg.author.avatarURL}`)
          .setTimestamp()
          .setURL(`${msg.author.avatarURL}`)
          .addField(':spy:  الحالة', `**[ ${msg.author.presence.status.toUpperCase()} ]**`, true)
          .addField(':satellite_orbital:   يلعب', `**[ ${msg.author.presence.game === null ? "No Game" : msg.author.presence.game.name} ]**`, true)
          .addField(':military_medal:  الرتب', `**[ ${msg.member.roles.filter(r => r.name).size} ]**`, true)
          .addField(':robot:  هل هو بوت', `**[ ${msg.author.bot.toString().toUpperCase()} ]**`, true);
      msg.channel.send({embed: embed})
  }
});













client.on("message", message => { // Leaked by [ @M3a4x ]
	var args = message.content.split(' ').slice(1);
	var msg = message.content.toLowerCase();
	if( !message.guild ) return;
	if( !msg.startsWith( prefix + 'role' ) ) return;
	if( msg.toLowerCase().startsWith( prefix + 'rerole ;' ) ){
		if( !args[0] ) return message.reply( '**:x: يرجى وضع الشخص المراد سحب منه الرتبة**' );
		if( !args[1] ) return message.reply( '**:x: يرجى وضع الرتبة المراد سحبها من الشخص**' );
		var role = msg.split(' ').slice(2).join(" ").toLowerCase();
		var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first();
		if( !role1 ) return message.reply( '**:x: يرجى وضع الرتبة المراد سحبها من الشخص**' );if( message.mentions.members.first() ){
			message.mentions.members.first().removeRole( role1 );
			return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم سحب من **');
		}
		if( args[0].toLowerCase() == "all" ){
			message.guild.members.forEach(m=>m.removeRole( role1 ))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من الكل رتبة**');
		} else if( args[0].toLowerCase() == "bots" ){
			message.guild.members.filter(m=>m.user.bot).forEach(m=>m.removeRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من البوتات رتبة**');
		} else if( args[0].toLowerCase() == "humans" ){
			message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.removeRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من البشريين رتبة**');
		}
	} else {
		if( !args[0] ) return message.reply( '**:x: يرجى وضع الشخص المراد اعطائها الرتبة**' );
		if( !args[1] ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );
		var role = msg.split(' ').slice(2).join(" ").toLowerCase();
		var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first();
		if( !role1 ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );if( message.mentions.members.first() ){
			message.mentions.members.first().addRole( role1 );
			return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم اعطاء **');
		}
		if( args[0].toLowerCase() == "all" ){
			message.guild.members.forEach(m=>m.addRole( role1 ))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء الكل رتبة**');
		} else if( args[0].toLowerCase() == "bots" ){
			message.guild.members.filter(m=>m.user.bot).forEach(m=>m.addRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء البوتات رتبة**');
		} else if( args[0].toLowerCase() == "humans" ){
			message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.addRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء البشريين رتبة**');
		}
	}
});







	client.on('message', async message =>{
  if (message.author.boss) return;
	var prefix = "!";

if (!message.content.startsWith(prefix)) return;
	let command = message.content.split(" ")[0];
	 command = command.slice(prefix.length);
	let args = message.content.split(" ").slice(1);
	if (command == "mute") {
		if (!message.channel.guild) return;
		if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.reply("انت لا تملك صلاحيات !! ").then(msg => msg.delete(5000));
		if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("البوت لايملك صلاحيات ").then(msg => msg.delete(5000));;
		let user = message.mentions.users.first();
		let muteRole = message.guild.roles.find("name", "Muted");
		if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **").then(msg => {msg.delete(5000)});
		if (message.mentions.users.size < 1) return message.reply('** يجب عليك المنشن اولاً **').then(msg => {msg.delete(5000)});
		let reason = message.content.split(" ").slice(2).join(" ");
		message.guild.member(user).addRole(muteRole);
		const muteembed = new Discord.RichEmbed()
		.setColor("RANDOM")
		.setAuthor(`Muted!`, user.displayAvatarURL)
		.setThumbnail(user.displayAvatarURL)
		.addField("**:busts_in_silhouette:  المستخدم**",  '**[ ' + `${user.tag}` + ' ]**',true)
		.addField("**:hammer:  تم بواسطة **", '**[ ' + `${message.author.tag}` + ' ]**',true)
		.addField("**:book:  السبب**", '**[ ' + `${reason}` + ' ]**',true)
		.addField("User", user, true)
		message.channel.send({embed : muteembed});
		var muteembeddm = new Discord.RichEmbed()
		.setAuthor(`Muted!`, user.displayAvatarURL)
		.setDescription(`      
${user} انت معاقب بميوت كتابي بسبب مخالفة القوانين
${message.author.tag} تمت معاقبتك بواسطة
[ ${reason} ] : السبب
اذا كانت العقوبة عن طريق الخطأ تكلم مع المسؤلين
`)
		.setFooter(`في سيرفر : ${message.guild.name}`)
		.setColor("RANDOM")
	user.send( muteembeddm);
  }
if(command === `unmute`) {
  if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.sendMessage("**ليس لديك صلاحية لفك عن الشخص ميوت**:x: ").then(m => m.delete(5000));
if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("**I Don't Have `MANAGE_ROLES` Permission**").then(msg => msg.delete(6000))

  let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!toMute) return message.channel.sendMessage("**عليك المنشن أولاّ**:x: ");

  let role = message.guild.roles.find (r => r.name === "Muted");
  
  if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage("**لم يتم اعطاء هذه شخص ميوت من الأساس**:x:")

  await toMute.removeRole(role)
  message.channel.sendMessage("**لقد تم فك الميوت عن شخص بنجاح**:white_check_mark:");

  return;

  }

});

client.on('message', message => {
	                  if(!message.channel.guild) return;
    if(message.content.startsWith(prefix + 'bbc')) {
    if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
  if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
    let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
    let copy = "Snow Bot";
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
	
	
	client.on('message', function(msg) {
if(msg.content.startsWith ('!server')) {
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`Showing Details Of  **${msg.guild.name}*`)
      .addField(':globe_with_meridians:** نوع السيرفر**',`[** __${msg.guild.region}__ **]`,true)
      .addField(':medal:** __الرتب__**',`[** __${msg.guild.roles.size}__ **]`,true)
      .addField(':red_circle:**__ عدد الاعضاء__**',`[** __${msg.guild.memberCount}__ **]`,true)
      .addField(':large_blue_circle:**__ عدد الاعضاء الاونلاين__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
      .addField(':pencil:**__ الرومات الكتابية__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
      .addField(':microphone:**__ رومات الصوت__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
      .addField(':crown:**__ الأونـر__**',`**${msg.guild.owner}**`,true)
      .addField(':id:**__ ايدي السيرفر__**',`**${msg.guild.id}**`,true)
      .addField(':date:**__ تم عمل السيرفر في__**',msg.guild.createdAt.toLocaleString())
      msg.channel.send({embed:embed});
    }
  });



client.on('message', message => {
        if (message.content === "!invite") {
            if(!message.channel.guild) return;
        let embed = new Discord.RichEmbed()
        .setAuthor(` ${message.author.username} `, message.author.avatarURL)      
        .setTitle(`:small_orange_diamond: Click `)
        .setURL(`https://discordapp.com/api/oauth2/authorize?client_id=487620890373128192&permissions=2146958839&scope=bot`)
        .setThumbnail("https://cdn.discordapp.com/attachments/423929742337638410/497723737035112487/FINEX-P-2.png")        
     message.channel.sendEmbed(embed);
       }
   });







	client.on('message', message => {
    if(message.content === "!info") {
        const embed = new Discord.RichEmbed()
        .setColor("#00FFFF")
  .addField('**الذاكرة المستخدمة 💾**', `${(process.memoryUsage().rss / 1000000).toFixed()}MB`, true)
         .addField('**سرعة الاتصال📡**' , `${Date.now() - message.createdTimestamp}` + ' ms')
        .addField('**استخدام المعالج💿**', `${(process.cpuUsage().rss / 10000).toFixed()}%`, true)
        .addField('**:globe_with_meridians: عدد السيرفرات**' , `${client.guilds.size}`, true)
        .addField('**عدد المستخدمين 👥 **' , `${client.users.size}`, true)
               message.channel.sendEmbed(embed);
           }
});





client.login(process.env.BOT_TOKEN);
