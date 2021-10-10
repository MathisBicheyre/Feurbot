// Run dotenv
require('dotenv').config();

// Discord client
const Discord = require('discord.js');
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })

// Ready to listen to commands
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

// Token
client.login(process.env.DISCORD_TOKEN);

// Process message
client.on('message', message  => {
  console.log(message.content);
	var string = message.content.replace(/[^\w\s]/gi, '');
	string.toLowerCase();
  console.log(string);
	if(string.endsWith("quoi"))
		message.channel.send("feur");
	else if(string.endsWith("oui"))
		message.channel.send("stiti");
});
