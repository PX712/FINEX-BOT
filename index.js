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


client.on('message', message => {
   if (message.content.startsWith("-id")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');

               var mentionned = message.mentions.users.first();
    var mentionavatar;
      if(mentionned){
          var mentionavatar = mentionned;
      } else {
          var mentionavatar = message.author;
          
      }
   let embed = new Discord.RichEmbed()
  .setColor("RANDOM")
   .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("🏅 Name:",`<@` + `${mentionavatar.id}` + `>`, true)
  .addField('🎤 Discrim:',"#" +  `${mentionavatar.discriminator}`, true)
   .addField("🆔 ID:", "**[" + `${mentionavatar.id}` + "]**", true)
  .addField("📅 Create At:", "**[" + `${mentionavatar.createdAt}` + "]**", true)
     
     
  message.channel.sendEmbed(embed);
  console.log('[id] Send By: ' + message.author.username)
    }
});
///////////////////////////////////////////////

client.on('message', message => {
if (message.author.bot) return;
if (!message.content.startsWith(prefix)) return;

let command = message.content.split(" ")[0];
command = command.slice(prefix.length);

let args = message.content.split(" ").slice(1);

if (command == "say") {
if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.reply("*لا تملك الصلاحيات المطلوبه**");

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







 client.on('message', message => { // Leaked by [ @Fr3on Gamer#9338 ]
        var  user = message.mentions.users.first() || message.author;
    if (message.content.startsWith(prefix + "avatar")) {
message.channel.send(`This avatar For ${user} link : ${user.avatarURL}`);
}
});










client.on("message", message => {
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "clear")) {
 if (!args[1]) {
                                let x5bz1 = new Discord.RichEmbed()
                                .setDescription("-clear <number>")
                                .setColor("#0000FF")
                                message.channel.sendEmbed(x5bz1);
                            } else {
                            let messagecount = parseInt(args[1]);
                            message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
                                                          message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
                            message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
                            let x5bz2 = new Discord.RichEmbed()
                                                            .setColor("#008000")
                                .setDescription(":white_check_mark: | Delete " + args[1] + " Message!")
                                                                                        message.delete("..");
                                message.channel.sendEmbed(x5bz2);
                            }
                          }
});


////////////////////////////////////////////////////////

 client.on('message', message => {
    let args = message.content.split(' ').slice(1);
    if(message.content.startsWith(prefix + 'role')) {
        let member = message.mentions.users.first();
        let role = args.join(' ').replace(member, '').replace(args[0], '').replace(' ', '');
        console.log(role);
        if(member) {
              if(role.startsWith('-')) {
                let roleRe = args.join(' ').replace(member, '').replace(args[0], '').replace('-', '').replace(' ', '');
                console.log(roleRe);
                let role1 = message.guild.roles.find('name', roleRe);
                console.log(`hi`);
                if(!role1) return message.reply(`الرتبة غير موجودة بالسيرفر تأكد من الاسم`);
                message.guild.member(member).removeRole(role1.id);
            } else if(!role.startsWith('-')) {
                let roleRe = args.join(' ').replace(member, '').replace(args[0], '').replace('-', '').replace(' ', '');
                let role1 = message.guild.roles.find('name', roleRe);
                if(!role1) return message.reply(`الرتبة غير موجودة بالسيرفر تأكد من الاسم`);
                message.guild.member(member).addRole(role1);
            } else {
                message.reply(`يجب عليك كتابة اسم الرتبة`);
            } 
        }
 else if(args[0] == 'all') {
    if(role) {
    let role1 = message.guild.roles.find('name', role);
    if(!role1) return message.reply(`الرتبة غير موجودة بالسيرفر تأكد من الاسم`);
    message.channel.send(`الرجاء الانتظار حتى يتم الانتهاء من الامر`).then(msg => {
        message.guild.members.forEach(m => {
            message.guild.member(m).addRole(role1);
        });
        msg.edit(`تم الانتهاء من الامر ${message.guild.members.size}`);
    });
}
} else if(args[0] == 'humans') {
    if(role) {
        let role1 = message.guild.roles.find('name', role);
        if(!role1) return message.reply(`الرتبة غير موجودة بالسيرفر تأكد من الاسم`);
        message.channel.send(`الرجاء الانتظار حتى يتم الانتهاء من الامر`).then(msg => {
            message.guild.members.filter(m =>m.user.bot == false).forEach(m => {
                message.guild.member(m).addRole(role1);
            });
            msg.edit(`تم الانتهاء من الامر ${message.guild.members.size}`);
        });
    }
} else if(args[0] == 'bots') {
    if(role) {
        let role1 = message.guild.roles.find('name', role);
        if(!role1) return message.reply(`الرتبة غير موجودة بالسيرفر تأكد من الاسم`);
        message.channel.send(`الرجاء الانتظار حتى يتم الانتهاء من الامر`).then(msg => {
            message.guild.members.filter(m =>m.user.bot == true).forEach(m => {
                message.guild.member(m).addRole(role1);
            });
msg.edit(`تم الانتهاء من الامر ${message.guild.members.size}`);
});
}
}
}
});









client.login(process.env.BOT_TOKEN);
