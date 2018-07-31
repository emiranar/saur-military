const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');

client.on('ready', () => {
	console.log('I am ready for duty, sir!');
	client.user.setActivity('with Aerion');
});
var schedule = require('node-schedule');

var sswakeup = schedule.scheduleJob('30 5 * * 2', function(){
  const channelawake = client.channels.get('460001047495049229');
  channelawake.send('I am awake, sir!');
  console.log('I am awake, sir!');
	
});

var ss = schedule.scheduleJob('45 5 * * 2', function(){
  const channel = client.channels.get('331375646729306119');
channel.send('Wake up and prepare your weapons, It\'s WZ time @everyone!');
});





var sawakeup = schedule.scheduleJob('30 17 * * 2', function(){
  const channelawake = client.channels.get('460001047495049229');
  channelawake.send('I am awake, sir!');
  console.log('I am awake, sir!');
});

var sa = schedule.scheduleJob('45 17 * * 2', function(){
  const channel = client.channels.get('331375646729306119');
channel.send('Wake up and prepare your weapons, It\'s WZ time @everyone!');
});





var pswakeup = schedule.scheduleJob('30 5 * * 4', function(){
    const channelawake = client.channels.get('460001047495049229');
  channelawake.send('I am awake, sir!');
  console.log('I am awake, sir!');
});

var ps = schedule.scheduleJob('45 5 * * 4', function(){
  const channel = client.channels.get('331375646729306119');
channel.send('Wake up and prepare your weapons, It\'s WZ time @everyone!');
});



var pawakeup = schedule.scheduleJob('30 17 * * 4', function(){
  const channelawake = client.channels.get('460001047495049229');
  channelawake.send('I am awake, sir!');
  console.log('I am awake, sir!');
});

var pa = schedule.scheduleJob('45 17 * * 4', function(){
  const channel = client.channels.get('331375646729306119');
channel.send('Wake up and prepare your weapons, It\'s WZ time @everyone!');
});




var cswakeup = schedule.scheduleJob('30 5 * * 6', function(){
  const channelawake = client.channels.get('460001047495049229');
  channelawake.send('I am awake, sir!');
  console.log('I am awake, sir!');
});

var cs = schedule.scheduleJob('45 5 * * 6', function(){
  const channel = client.channels.get('331375646729306119');
channel.send('Wake up and prepare your weapons, It\'s WZ time @everyone!');
});




var cawakeup = schedule.scheduleJob('30 17 * * 6', function(){
  const channelawake = client.channels.get('460001047495049229');
  channelawake.send('I am awake, sir!');
  console.log('I am awake, sir!');
});

var ca = schedule.scheduleJob('45 17 * * 6', function(){
  const channel = client.channels.get('331375646729306119');
channel.send('Wake up and prepare your weapons, It\'s WZ time @everyone!');
});





var pazswakeup = schedule.scheduleJob('30 5 * * 7', function(){
  const channelawake = client.channels.get('460001047495049229');
  channelawake.send('I am awake, sir!');
  console.log('I am awake, sir!');
});

var pazs = schedule.scheduleJob('45 5 * * 7', function(){
  const channel = client.channels.get('331375646729306119');
channel.send('Wake up and prepare your weapons, It\'s WZ time @everyone!');
});




var pazawakeup = schedule.scheduleJob('30 17 * * 7', function(){
  const channelawake = client.channels.get('460001047495049229');
  channelawake.send('I am awake, sir!');
  console.log('I am awake, sir!');
});

var paza = schedule.scheduleJob('45 17 * * 7', function(){
  const channel = client.channels.get('331375646729306119');
channel.send('Wake up and prepare your weapons, It\'s WZ time @everyone!');
});






var arrestswakeup = schedule.scheduleJob('45 8 * * 7', function(){
  const channelawake = client.channels.get('460001047495049229');
  channelawake.send('I am awake, sir!');
  console.log('I am awake, sir!');
});

var arrests = schedule.scheduleJob('0 9 * * 7', function(){
  const channelarr = client.channels.get('454180113974689813');
  channelarr.send('Please update the screenshots of your arrests @everyone!');
});






var recawake = schedule.scheduleJob('45 8 * * '+ config.recday +'', function(){
  const channelawake = client.channels.get('460001047495049229');
  channelawake.send('I am awake, sir!');
  console.log('I am awake, sir!');
});

var rec = schedule.scheduleJob('9 10 * * '+ config.recday +'', function(){
  const channelrec = client.channels.get('391219156391034890');
  channelrec.send('It\'s the recruitment day @everyone! *-testing-*');
});





client.login(process.env.BOT_TOKEN);
