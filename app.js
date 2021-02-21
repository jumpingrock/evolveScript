const axios = require('axios');
const schedule = require('node-schedule');
var data = '{"eventId":"53c4eb62-5014-4d74-986a-7f888d28d0ca","eventDate":"2021-02-23","memberId":"76a8bc96-8f14-41c2-bd2e-7e8ded5a67a9","action":"book"}';

var config = {
  method: 'post',
  url: 'https://api.evolvegenius.com/booking/book-class',
  headers: { 
    'authority': 'api.evolvegenius.com', 
    'pragma': 'no-cache', 
    'cache-control': 'no-cache', 
    'sec-ch-ua': '"Chromium";v="88", "Google Chrome";v="88", ";Not A Brand";v="99"', 
    'accept': 'application/json, text/plain, */*', 
    'authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZW1iZXJJZCI6Ijc2YThiYzk2LThmMTQtNDFjMi1iZDJlLTdlOGRlZDVhNjdhOSIsImlhdCI6MTYxMzkyMTIyOSwiZXhwIjoxNjEzOTg2MDI5fQ.cvlHbUn2FccVHOTEyzpdbKRSHNc9ugF74jYcofhjcpVHZJP-ztu8ZZk49hDvgl9iWT_xOLz0jVO45-6wgd9L53h7vgkNJu9LCfN4y-3sW07EuTcZrgTDtGsfXs-Npx8mBFFRp-Cspo24vaWdxF8_xEVR7jtm7Vf6iAKfQxK9AVkzQ4HEmsLHdXza5MLhHQv_7oysEG6K4mstxh_uS_VAgPUj-8kJdMCnEM_gYyEks5CmJwgNainRvvm0dgl6amvLPB94xX_S55RnwIzvlYOoXpum58LIhFha2C9Q8_kJE4H75-elTi0eHDugl4BLccK77Tm7Z4TvmhLsip0D7HHJdA', 
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

// (ss mm hh dd mm yy)
const job = schedule.scheduleJob('00 15 22 * * *', function(){
  console.log('The answer to life, the universe, and everything!\n');

  axios(config)
    .then(function (response) {
    console.log(JSON.stringify(response.data));
    process.exit(0)
    })
    .catch(function (error) {
    console.log(error);
    });
});
