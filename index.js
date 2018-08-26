const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const { SOLDIER, RANK, POINTS, NAME } = require('./data.json');


client.on('ready', () => {
	console.log('I am ready for duty, sir!');
	
	
	
	var mysql = require('mysql');

var con = mysql.createConnection({
  host: process.env.dbhost,
  user: process.env.dbuser,
  password: process.env.dbpass,
  database: process.env.db
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM main", function (err, result, fields) {
    if (err) throw err;
    client.user.setActivity('with ' + result[0].winner);
	//  global.recgun = result[0].recday;
	//  console.log(global.recgun);
	  con.end();
  });
});
	
	

	
});

var schedule = require('node-schedule');

var wzmwakeup = schedule.scheduleJob('30 5 * * */2', function(){
  const channelawake = client.channels.get('460001047495049229');
  channelawake.send('I am awake, sir!');
  console.log('I am awake, sir!');
	
});

var wzm = schedule.scheduleJob('45 5 * * */2', function(){
  const channel = client.channels.get('331375646729306119');
channel.send('Wake up and prepare your weapons, It\'s WZ time @everyone!');
});





var wzewakeup = schedule.scheduleJob('30 17 * * */2', function(){
  const channelawake = client.channels.get('460001047495049229');
  channelawake.send('I am awake, sir!');
  console.log('I am awake, sir!');
});

var wze = schedule.scheduleJob('45 17 * * */2', function(){
  const channel = client.channels.get('331375646729306119');
channel.send('Wake up and prepare your weapons, It\'s WZ time @everyone!');
});





























/*	
	
	var rectest = schedule.scheduleJob('19 20 * * '+ global.recgun +'', function(){
  console.log('It is working!');
});

*/	
	
	
	

var recawake = schedule.scheduleJob('0 22 * * '+ config.recday +'', function(){
  const channelawake = client.channels.get('460001047495049229');
  channelawake.send('I am awake, sir!');
  console.log('I am awake, sir!');
});

var rec = schedule.scheduleJob('10 22 * * '+ config.recday +'', function(){
  const channelrec = client.channels.get('391219156391034890');
  channelrec.send('Today is recruitment day @everyone Wake up fellas!');
});


var recmondayawake = schedule.scheduleJob('0 22 * * 7', function(){
  const channelawake = client.channels.get('460001047495049229');
  channelawake.send('I am awake, sir!');
  console.log('I am awake, sir!');
});

var recmonday = schedule.scheduleJob('10 22 * * 7', function(){
  const channelrec = client.channels.get('391219156391034890');
  channelrec.send('Today is recruitment day @everyone Wake up fellas!');
});














var weeklyevent = schedule.scheduleJob('5 10 * * 7', function(){ 


var XLSX = require('xlsx');
var workbook = XLSX.readFile('evals.xlsx');
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
        if(row == 86 && value) {
            headers[col] = value;
            continue;
        }

        if(!data[row]) data[row]={};
        data[row][headers[col]] = value;
    }
    //drop those first two rows which are empty
for (var b = 0; b < 87; b++) {
    data.shift();
}
    

  

    
   

   console.log(data);








    var jsonfile = require('jsonfile');
 
var file = 'data.json';
var obj = data;
 
jsonfile.writeFile(file, obj, function (err) {
 // console.error(err)
});














var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

if(dd<10) {
    dd = '0'+dd
} 

if(mm<10) {
    mm = '0'+mm
} 

today = mm + '/' + dd + '/' + yyyy;
  console.log("THE DATE IS: " + today);





var firstDay = new Date(today);
var nextWeek = new Date(firstDay.getTime() + 7 * 24 * 60 * 60 * 1000); 
var nextWeekString = JSON.stringify(nextWeek);
var res = nextWeekString.slice(1, -15);

console.log("NEXT WEEKS DATE IS: " + res);









 


    var first = 0;
    var second = 0;
    var third = 0;
    var firstpl, secondpl, thirdpl;

        for (var j = 0; j < data.length ; j++)
        {
            /* If current element is smaller than
            first */
            if (data[j].POINTS >= first)
            {
                third = second;
                thirdpl = secondpl;

                second = first;
                secondpl = firstpl;
                
                first = data[j].POINTS;
                firstpl = data[j].NAME;

            }
       
            /* If arr[j] is in between first and
            second then update second  */
            else if (data[j].POINTS >= second)
            {
                third = second;
                thirdpl = secondpl;

                second = data[j].POINTS;
                secondpl = data[j].NAME;

            }
       
            else if (data[j].POINTS >= third)
            {
                third = data[j].POINTS;
                thirdpl = data[j].NAME;

            }

        }
    const channelwe = client.channels.get('472709686051995651');
       
        console.log("THIS WEEK'S WINNERS ARE: " + firstpl + " " + secondpl + " " + thirdpl);

	client.user.setActivity('with ' + firstpl);
	
	
       channelwe.send("Hey soldiers, we are proud to announce the winners of this week!\nCongratulations to; \n**" + firstpl + "\n" + secondpl + "\n" + thirdpl + "**");

       channelwe.send("The next date of choosing the 3 soldiers with best overall previous week activity is: \n**" + res + "** \nNicknames will be displayed down below.");
      

	
var mysql = require('mysql');

var con = mysql.createConnection({
  host: process.env.dbhost,
  user: process.env.dbuser,
  password: process.env.dbpass,
  database: process.env.db
});

con.connect(function(err) {
  if (err) throw err;
  var sql = "UPDATE main SET winner = '" + firstpl + "' WHERE recday = '6' OR recday = '7'";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows + " record(s) updated");
  });
	
	con.end();
});
});

 });



client.login(process.env.BOT_TOKEN);
