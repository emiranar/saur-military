const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready for duty, sir!');
	client.user.setActivity('with Aerion');
});
var schedule = require('node-schedule');

var stayawake = schedule.scheduleJob('*/5 * * * *', function(){
  console.log('I am awake, sir!');
});



var ss = schedule.scheduleJob('45 5 * * 2', function(){
  const channel = client.channels.get('460001047495049229');
channel.send('Wake up and prepare your weapons, It\'s WZ time @everyone!');
});

var sa = schedule.scheduleJob('45 17 * * 2', function(){
  const channel = client.channels.get('460001047495049229');
channel.send('Wake up and prepare your weapons, It\'s WZ time @everyone!');
});

var ps = schedule.scheduleJob('45 5 * * 4', function(){
  const channel = client.channels.get('460001047495049229');
channel.send('Wake up and prepare your weapons, It\'s WZ time @everyone!');
});

var pa = schedule.scheduleJob('45 17 * * 4', function(){
  const channel = client.channels.get('460001047495049229');
channel.send('Wake up and prepare your weapons, It\'s WZ time @everyone!');
});


var cs = schedule.scheduleJob('45 5 * * 6', function(){
  const channel = client.channels.get('460001047495049229');
channel.send('Wake up and prepare your weapons, It\'s WZ time @everyone!');
});

var ca = schedule.scheduleJob('45 17 * * 6', function(){
  const channel = client.channels.get('460001047495049229');
channel.send('Wake up and prepare your weapons, It\'s WZ time @everyone!');
});


var pazs = schedule.scheduleJob('45 5 * * 7', function(){
  const channel = client.channels.get('460001047495049229');
channel.send('Wake up and prepare your weapons, It\'s WZ time @everyone!');
});

var paza = schedule.scheduleJob('45 17 * * 7', function(){
  const channel = client.channels.get('460001047495049229');
channel.send('Wake up and prepare your weapons, It\'s WZ time @everyone!');
});




var arrests = schedule.scheduleJob('0 9 * * 7', function(){
  const channelarr = client.channels.get('460001047495049229');
channelarr.send('Please update the screenshots of your arrests @everyone!');
});



client.login(process.env.BOT_TOKEN);
