const Discord = require('discord.js');
const { Client, Intents,MessageEmbed } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_BANS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS, Intents.FLAGS.GUILD_INTEGRATIONS, Intents.FLAGS.GUILD_WEBHOOKS, Intents.FLAGS.GUILD_INVITES, Intents.FLAGS.GUILD_VOICE_STATES, Intents.FLAGS.GUILD_PRESENCES, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS, Intents.FLAGS.GUILD_MESSAGE_TYPING, Intents.FLAGS.DIRECT_MESSAGES, Intents.FLAGS.DIRECT_MESSAGE_REACTIONS, Intents.FLAGS.DIRECT_MESSAGE_TYPING] });

client.on("ready", () => {
  console.log(`✅ | Logged as ${client.user.tag}`);
})
//////////////////////////////////////
const DIG = require("discord-image-generation");
client.on("message", async message => {
  if (message.content.startsWith("circle")) {
      let user = message.mentions.users.first() || client.users.cache.get(message.content.split(" ")[2]) || client.users.cache.get(message.content.split(" ")[1]);
      if(!user) return message.channel.send("user ?!?!")
      const avatar2 = user.displayAvatarURL({ dynamic: true , format: 'gif'});
      let ef = await new DIG.Circle().getImage(avatar2)
      let attach = new Discord.MessageAttachment(ef , "Circle.png");
     await message.channel.send(attach)
  }
})
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
})

///
client.login(process.env.token)

