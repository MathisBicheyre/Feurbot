// Run dotenv
require('dotenv').config();

// fs and readline for file reading
const fs = require('fs');
const readline = require('readline');

// Discord client
const Discord = require('discord.js');
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })

// Ready to listen to commands
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

// Token
client.login(process.env.DISCORD_TOKEN);

// Read line interface
const rl = readline.createInterface({
    input: fs.createReadStream('data/words.txt'),
    output: process.stdout,
    terminal: false
});

// List of words and responses
var pairings = [];

// Read each line and store them in memory
rl.on('line', (line) => {
    const split = line.split('-');
    var pairing = [];
    split.forEach(word => {
        pairing.push(word);
    });
    pairings.push(pairing);
});

// Process message
client.on('messageCreate', message  => {
	var string = message.content.replace(/[^\w\s]/gi, '');
	string.toLowerCase();
	pairings.every(pairing => {
    if(string.endsWith(pairing[0])){
      message.channel.send(pairing[1]);
      return false;
    }
    return true;
  });
});
