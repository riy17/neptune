const Discord = require('discord.js');
const { Client, Intents,MessageEmbed } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_BANS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS, Intents.FLAGS.GUILD_INTEGRATIONS, Intents.FLAGS.GUILD_WEBHOOKS, Intents.FLAGS.GUILD_INVITES, Intents.FLAGS.GUILD_VOICE_STATES, Intents.FLAGS.GUILD_PRESENCES, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS, Intents.FLAGS.GUILD_MESSAGE_TYPING, Intents.FLAGS.DIRECT_MESSAGES, Intents.FLAGS.DIRECT_MESSAGE_REACTIONS, Intents.FLAGS.DIRECT_MESSAGE_TYPING] });

client.on("ready", () => {
  console.log(`✅ | Logged as ${client.user.tag}`);
})
//////////////////////////////////////
client.on("message", async bader => {
    let args = bader.content
        .split(" ")
        .slice(1)
        .join(" ");
    if (bader.author.bot) return;
    if (!bader.guild) return;
    if (!bader.content.startsWith(prefix)) return;
    if (bader.content.toLowerCase().startsWith(prefix + "tax".toLowerCase())) {
        let args2 = parseInt(args)
        let tax = Math.floor(args2 * (20) / (19) + (1))
        let tax2 = Math.floor(args2 * (20) / (19) + (1) - (args2))
        let tax3 = Math.floor(tax2 * (20) / (19) + (1))
        let tax4 = Math.floor(tax2 + tax3 + args2)
        let embed1 = new Discord.MessageEmbed()
            .setTitle(`**❌**`)
            .setColor("#f04747")
            .setDescription(`رقم :؟`)
            .setFooter(`${client.user.username}`);
        if (!args2) return bader.channel.send(embed1);
        let embed2 = new Discord.MessageEmbed()
            .setTitle(`**❌**`)
            .setColor("#f04747")
            .setDescription(`رقم :؟`)
            .setFooter(`${client.user.username}`);
        if (isNaN(args2)) return bader.channel.send(embed2);
        if (args2 < 1) return bader.channel.send(3);
        let embed4 = new Discord.MessageEmbed()
            .setTitle(`التكلفة النهائية هي:`)
            .setColor("#43b581")
            .setDescription(`1`)
            .setFooter(`${client.user.username}`);
        if (args2 == 1) return bader.channel.send(embed4);
        let taxbader = new Discord.MessageEmbed()
            .setTitle(`الضريبه`)
            .setColor("#43b581")
            .setDescription(`الكريدت مع الضريبه غير شامل الوسيط : ${tax}\n  الكريدت شامل الوسيط : ${tax4}`)
        bader.channel.send(taxbader);
    }
});


///
client.login(process.env.token)

