const axios = require('axios');
const schedule = require('node-schedule');

// change this for eventid and event date
var data = '{"eventId":"99f9efdb-b95b-4c35-a637-a565f3a67645","eventDate":"2021-09-21","memberId":"cdeea972-6346-4c5f-b8c0-3e5f2c023580","action":"book"}';

var config = {
  method: 'post',
  url: 'https://api.evolvegenius.com/booking/book-class',
  headers: { 
    'authority': 'api.evolvegenius.com', 
    'pragma': 'no-cache', 
    'cache-control': 'no-cache', 
    'sec-ch-ua': '"Chromium";v="88", "Google Chrome";v="88", ";Not A Brand";v="99"', 
    'accept': 'application/json, text/plain, */*', 
    // change authorization  
    'authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZW1iZXJJZCI6ImNkZWVhOTcyLTYzNDYtNGM1Zi1iOGMwLTNlNWYyYzAyMzU4MCIsImlhdCI6MTYzMjA2MjQ3NywiZXhwIjoxNjMyMTQ4ODc3fQ.XDTbkCV0FyRFRxTkmdPREN2R2RyzwtoETQWjsZBc3X9efj5v2QXC-v_ntP0noLXj2eqM-tHGWusmdY4U0Kl9OmAMX6JLXEfuZik23l562sOmHgC4_bZr2umZSKmPJmtktw5wX8VD3Gj-LCv0dTEGag_jRMmJN_yHB4AJ9q0AyNHSbsfz6XOH0INrW-xBl_FfwzS0N6j7BzLpp4I-ybRbXr3r5OeXDpO7b2aA6bbRcih0KgoqdNEJnJJIOdC3DB2i7nT17z_EuVXX1xti7byMrMLwRN4ed70Bo134CmCM90wJYXqnJAObyIuMjhKPuXsj4X7DdfQ9Wq_2vuXQvC-jaA',
    'sec-ch-ua-mobile': '?0', 
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36', 
    'content-type': 'application/json;charset=UTF-8', 
    'origin': 'https://book.evolve-mma.com', 
    'sec-fetch-site': 'cross-site', 
    'sec-fetch-mode': 'cors', 
    'sec-fetch-dest': 'empty', 
    'referer': 'https://book.evolve-mma.com/', 
    'accept-language': 'en-US,en;q=0.9'
  },
  data : data
};
console.log('\x1b[36m%s\x1b[0m','\nRunning Evolve booking script\n');

// (ss mm hh dd mm yy)
// change schedule to run script
const job = schedule.scheduleJob('00 15 22 * * *', function(){
  console.log('\x1b[36m%s\x1b[0m','\nThe answer to life, the universe, and everything!\n');

  axios(config)
    .then(function (response) {
    console.log(JSON.stringify(response.data));
    process.exit(0)
    })
    .catch(function (error) {
    console.log(error);
    });
});
