const Discord = require('discord.js');
const { Client, Intents,MessageEmbed } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_BANS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS, Intents.FLAGS.GUILD_INTEGRATIONS, Intents.FLAGS.GUILD_WEBHOOKS, Intents.FLAGS.GUILD_INVITES, Intents.FLAGS.GUILD_VOICE_STATES, Intents.FLAGS.GUILD_PRESENCES, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS, Intents.FLAGS.GUILD_MESSAGE_TYPING, Intents.FLAGS.DIRECT_MESSAGES, Intents.FLAGS.DIRECT_MESSAGE_REACTIONS, Intents.FLAGS.DIRECT_MESSAGE_TYPING] });

client.on("ready", () => {
  console.log(`✅ | Logged as ${client.user.tag}`);
})
//////////////////////////////////////

client.on("message",message=>{
    const request = require("request");
    const cheerio = require('cheerio');

    if(message.content.startsWith ("banner")){
        var sp = message.content.split(" ")
      request(`http://f15.xp3.biz/banner.php?id=${sp[1]}`, function (error, response, html) {
          if (!error && response.statusCode == 200) {
            var $ = cheerio.load(html);
            if($.text() == "Not found"){
              message.channel.send("لايمكنك سحب بنر هاذا الشخص") // هنا اذا كان الي يبي يجيب من البنر ماعنده بنر
            }
            if($.text() == "Enter id"){
              message.channel.send("فارغ") // هنا اذا مادخل اليوزر الي يبي جيب البنر حقه
            }

            if($.text() !== "Not found"){

              if($.text() !== "Enter id"){

                message.channel.send(" البنر : "+$.text()) // هنا لما يرسل البنر 
                return;
              }

            }

          }

      });
      }
      
});

///
client.login(process.env.token)

