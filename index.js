const Slimbot = require('slimbot')
const axios = require('axios')
const slimbot = new Slimbot('1574487194:AAF5T42sktBawteGG-Y1V1DjJuh2YqVfntM')

//setInterval(function(){

let imageData = ""
let lnk = ""
let imageURL = ""
axios.get('http://ny-rss.herokuapp.com/?action=display&bridge=Facebook&context=User&u=halalhumour&media_type=novideo&skip_reviews=on&limit=1&format=Json')
.then(msg => {
    // console.log(msg.data.items[0].content_html)
    imageData = msg.data.items[0].content_html
    lnk = imageData.match(/<img src="(.*?)"/g)[1]
    imageURL = lnk.match(/"(.*?)"/)[0]
    console.log(imageURL)
    slimbot.sendPhoto('@halalhumour', imageURL, '@HalalHumour')
})
.catch(err => console.log("error"))

// imageURL= "https://scontent-atl3-2.xx.fbcdn.net/v/t1.0-0/p480x480/129724195_1540379542827781_2211717799651021545_o.png?_nc_cat=106&ccb=2&_nc_sid=8024bb&_nc_ohc=EvO4Gh1CRQYAX-FhTNm&_nc_ht=scontent-atl3-2.xx&_nc_tp=30&oh=d7c3ccf45321220264307acc318546b5&oe=60195CBB"
// imageData = `<a href=\"https://www.facebook.com/halalhumour/\"><img src=\"https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-1/cp0/p50x50/44068012_931454127053662_4273383594983948288_n.jpg?_nc_cat=1&ccb=2&_nc_sid=dbb9e7&_nc_ohc=uNm8djhw6VgAX_g3wc1&_nc_ht=scontent-iad3-1.xx&tp=27&oh=e4fb031eaf83a43322d7406d05bbcc1d&oe=601A4F7A\" alt=\"\" /></a><a href=\"https://www.facebook.com/halalhumour/\">Halal Humour</a><a href=\"https://www.facebook.com/halalhumour/photos/a.639513036247774/1540379539494448/\"></a><i></i><a href=\"https://www.facebook.com/halalhumour/photos/a.639513036247774/1540379539494448/\"><img src=\"https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-0/p480x480/129724195_1540379542827781_2211717799651021545_o.png?_nc_cat=106&ccb=2&_nc_sid=8024bb&_nc_ohc=EvO4Gh1CRQYAX-5JWp0&_nc_ht=scontent-iad3-1.xx&_nc_tp=30&oh=108d8e1e86a99d339cc6dade5eb8ff06&oe=60195CBB\" alt=\"Image may contain: text that says 'Me: why does my back hurt all the time? also me sleeping every night:'\" width=\"500\" height=\"461\" caption=\"Image may contain: text that says 'Me: why does my back hurt all the time? also me sleeping every night:'\" /></a>`

// slimbot.on('channel_post', message => {
//     slimbot.sendPhoto(message.chat.id, imageURL)
//     .then(msg => console.log(msg))
//     .catch(err => console.log(err))
// })



    slimbot.startPolling()

    console.log('polling...');

    setTimeout(() => {
    slimbot.stopPolling();
    console.log('test')
    }, 5000);

//}, 86400000); // Every 24 hours
