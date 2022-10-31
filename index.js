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


const prefix = "+"// bot prefix
client.login(process.env.token)


client.on("ready", async () => {
    console.log(`"${client.user.username}" is ready`)//runing bot username

})
