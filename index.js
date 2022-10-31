const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello Express app!')
});

app.listen(3000, () => {
    console.log('server started');
});
const Discord = require("discord.js");
const client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES
    ]
});


//Say Embed | ساي امبيد
client.on('messageCreate', async message => {
 if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();
  if (command === "say-embed") {
    if (!args[0]) return await message.channel.send({content: `${prefix}say-embed <message>`});
    let embed = new MessageEmbed()
    .setDescription(`${args.join(" ")}`)
    await message.channel.send({embeds: [embed]});
  }
})
//https://ra3dstudio.com CopyRight Codes



const prefix = "+"// bot prefix
client.login(process.env.token)


client.on("ready", async () => {
    console.log(`"${client.user.username}" is ready`)//runing bot username

})
