const Discord  = require('discord.js');
const client = new Discord.Client();

const prefix = '$'

client.once('ready', () => {
    console.log('typoBot is online!');

});

client.on('ready', () =>{
    client.user.setPresence({
        status: "online",  // You can show online, idle... Do not disturb is dnd
        game: {
            name: "!help",  // The message shown
            type: "PLAYING" // PLAYING, WATCHING, LISTENING, STREAMING,
        }
    });
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === "ping"){
        message.channel.send("pong!");
    }else if(command === "youtube") {
        message.channel.send("https://www.youtube.com");
    }
    //else if(command === "rank"){
        // check the user's rank and output it
        // other commands: 
        // $add [word] (adds to the dictionary)
        // $remove [word] (removes word from dictioanry)
    //}
});

client.login('NzY3MjAzMTI5MTM3MDM3MzIy.X4uflw.B7uuxm8jg4NJS8amAVdd4CHMCTM');
