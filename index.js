const Discord = require('discord.js');
const { Client, Intents,MessageEmbed } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_BANS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS, Intents.FLAGS.GUILD_INTEGRATIONS, Intents.FLAGS.GUILD_WEBHOOKS, Intents.FLAGS.GUILD_INVITES, Intents.FLAGS.GUILD_VOICE_STATES, Intents.FLAGS.GUILD_PRESENCES, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS, Intents.FLAGS.GUILD_MESSAGE_TYPING, Intents.FLAGS.DIRECT_MESSAGES, Intents.FLAGS.DIRECT_MESSAGE_REACTIONS, Intents.FLAGS.DIRECT_MESSAGE_TYPING] });

client.on("ready", () => {
  console.log(`✅ | Logged as ${client.user.tag}`);
})
//////////////////////////////////////

//كود بنق البوت | ping bot code
client.on('messageCreate', message => {
  if(message.content.startsWith("ping")) {
    
      
    let embed = new Discord.MessageEmbed()
    .setColor("RED")
    .setTitle(`البنج حقي هو : 👇`)
   .setDescription(`${client.ws.ping}`)
   
    .setThumbnail(message.guild.iconURL({dynamic : true}))
    .setFooter(`الي طلب بنجي :  ${message.author.tag}` , message.author.avatarURL({dynamic:true}))
    
   message.channel.send({embeds:[embed]})
    message.react('📈')
    
  } 


   

 if (message.content.startsWith("tax")) { 
    let args2 = parseInt(args)
    let tax = Math.floor(args2 * (20) / (19) + (1))
    let errorembed3 = new Discord.MessageEmbed()
    .setTitle(`**:information_source: Error**`)
    .setColor("#f04747")
    .setDescription(`**It Must be a number**`)
    .setFooter(`${client.user.username}`);
    if (!args2) return message.channel.send(errorembed3);
    let errorembed2 = new Discord.MessageEmbed()
    .setTitle(`**:information_source: Error**`)
    .setColor("#f04747")
    .setDescription(`**Must Be A Number**`)
    .setFooter(`${client.user.username}`);
    if (isNaN(args2)) return message.channel.send(errorembed2);
    let errorembed = new Discord.MessageEmbed()
    .setTitle(`**:information_source: Error**`)
    .setColor("#f04747")
    .setDescription(`**Must The Number Larger 1**`)
    .setFooter(`${client.user.username}`);
    if (args2 < 1) return message.channel.send(errorembed);
    let embed3 = new Discord.MessageEmbed()
    .setTitle(`**:notes: The Final Cost Is :**`)
    .setColor("#43b581")
    .setDescription(`1`)
    .setFooter(`${client.user.username}`);
    if (args2 == 1) return message.channel.send(embed3);
    let embed = new Discord.MessageEmbed()
    .setTitle(`**:notes: The Final Cost Is :**`)
    .setColor("#43b581")
    .setDescription(`${tax}`)
    .setFooter(`${client.user.username}`);
    message.channel.send(embed);
  })

///
client.login(process.env.token)

