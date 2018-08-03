const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const { SOLDIER, RANK, POINTS } = require('./data.json');


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













var recawake = schedule.scheduleJob('45 4 * * '+ config.recday +'', function(){
  const channelawake = client.channels.get('460001047495049229');
  channelawake.send('I am awake, sir!');
  console.log('I am awake, sir!');
});

var rec = schedule.scheduleJob('0 5 * * '+ config.recday +'', function(){
  const channelrec = client.channels.get('391219156391034890');
  channelrec.send('Today is recruitment day @everyone Wake up fellas!');
});


var recmondayawake = schedule.scheduleJob('45 4 * * 1', function(){
  const channelawake = client.channels.get('460001047495049229');
  channelawake.send('I am awake, sir!');
  console.log('I am awake, sir!');
});

var recmonday = schedule.scheduleJob('0 5 * * 1', function(){
  const channelrec = client.channels.get('391219156391034890');
  channelrec.send('Today is recruitment day @everyone Wake up fellas!');
});














var weeklyevent = schedule.scheduleJob('21 10 * * 5', function(){


var XLSX = require('xlsx');
var workbook = XLSX.readFile('Week10.xlsx');
var sheet_name_list = workbook.SheetNames;
sheet_name_list.forEach(function(y) {
    var worksheet = workbook.Sheets[y];
    var headers = {};
    var data = [];
    for(z in worksheet) {
        if(z[0] === '!') continue;
        //parse out the column, row, and value
        var tt = 0;
        for (var i = 0; i < z.length; i++) {
            if (!isNaN(z[i])) {
                tt = i;
                break;
            }
        };
        var col = z.substring(0,tt);
        var row = parseInt(z.substring(tt));
        var value = worksheet[z].v;

        //store header names
        if(row == 1 && value) {
            headers[col] = value;
            continue;
        }

        if(!data[row]) data[row]={};
        data[row][headers[col]] = value;
    }
    //drop those first two rows which are empty
    data.shift();
    data.shift();
    
    var max=0;

 //   console.log(data);

for(var i = 1; i <= data.length -1;i++) {
     console.log(data[i].SOLDIER);
    console.log(data[i].RANK);
    console.log("POINTS: " + data[i].POINTS);
    console.log("----------------");

    if (data[i].POINTS > max) {
        max = data[i].POINTS;
        var maxplayer = data[i].SOLDIER;
    }
}
    console.log("SOLDIER WITH THE MOST POINTS: "+maxplayer);
  channelawake.send("SOLDIER WITH THE MOST POINTS: "+maxplayer);

   

   


// SORUN ŞU Kİ: DATA BİR ARRAY OLDUGU İÇİN BAŞINDA VE SONUNDAKİ [] İŞARETLERİ JSON'U OKUMAMIZI ENGELLİYOR.


    var jsonfile = require('jsonfile');
 
var file = 'data.json';
var obj = data;
 
jsonfile.writeFile(file, obj, function (err) {
 // console.error(err)
});


});








client.login(process.env.BOT_TOKEN);
