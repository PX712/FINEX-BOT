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
 
	client.on('message', message => {
    if (message.content === "!inv") {
      if(!message.channel.guild) return message.reply('Sorry, i Can Not Inv My Link In Your DM ;(')
        if(!message.channel.guild) return;
    let embed = new Discord.RichEmbed()
    .setAuthor(` ${message.author.username} `, message.author.avatarURL)
    .setTitle(`:small_orange_diamond:click here `)
    .setURL(`https://discordapp.com/api/oauth2/authorize?client_id=487620890373128192&permissions=2146958839&scope=bot`)
    .setThumbnail("https://is.gd/yPGeUe")
    .addField('🔹By', "<@" + message.author.id + ">")
 message.channel.sendEmbed(embed);
   }
});
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
                    console.log(${member} joined over ${Invite.inviter}'s invite ${Invite.code})
 channel.send(invited by : ${Invite.inviter} )            
 }
            dat[Inv] = Invite.uses;
        })
    })
});














client.login(process.env.BOT_TOKEN);
