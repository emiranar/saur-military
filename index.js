const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready for duty, sir!');
	client.user.setActivity('with Aerion');
});
var schedule = require('node-schedule');

var ss = schedule.scheduleJob('45 8 * * 2', function(){
  const channel = client.channels.get('460001047495049229');
channel.send('Wake up and prepare your weapons, It\'s WZ time @everyone!');
});

var sa = schedule.scheduleJob('45 20 * * 2', function(){
  const channel = client.channels.get('460001047495049229');
channel.send('Wake up and prepare your weapons, It\'s WZ time @everyone!');
});

var ps = schedule.scheduleJob('25 9 * * 4', function(){
  const channel = client.channels.get('460001047495049229');
channel.send('Wake up and prepare your weapons, It\'s WZ time @everyone!');
});

var pa = schedule.scheduleJob('45 20 * * 4', function(){
  const channel = client.channels.get('460001047495049229');
channel.send('Wake up and prepare your weapons, It\'s WZ time @everyone!');
});


var cs = schedule.scheduleJob('45 8 * * 6', function(){
  const channel = client.channels.get('460001047495049229');
channel.send('Wake up and prepare your weapons, It\'s WZ time @everyone!');
});

var ca = schedule.scheduleJob('45 20 * * 6', function(){
  const channel = client.channels.get('460001047495049229');
channel.send('Wake up and prepare your weapons, It\'s WZ time @everyone!');
});


var pazs = schedule.scheduleJob('45 8 * * 7', function(){
  const channel = client.channels.get('460001047495049229');
channel.send('Wake up and prepare your weapons, It\'s WZ time @everyone!');
});

var paza = schedule.scheduleJob('45 20 * * 7', function(){
  const channel = client.channels.get('460001047495049229');
channel.send('Wake up and prepare your weapons, It\'s WZ time @everyone!');
});
client.login(process.env.BOT_TOKEN);
