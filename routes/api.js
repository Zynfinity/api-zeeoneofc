__path = process.cwd()

var express = require('express');
var db = require(__path + '/database/db');
const skrep = require("../lib/skrep");
const imgbb = require('imgbb-uploader')
const { exec, spawn } = require('child_process');
const axios = require('axios')
const fs = require('fs')
const qs = require('qs')
const ptl = JSON.parse(fs.readFileSync('./lib/ptl.json'))
const hit = JSON.parse(fs.readFileSync('./database/hit.json'))
try {
var zahirr = db.get("zahirr");
} catch (e) {
  console.log('')
}

var creatorList = ['@zahirrr','@zhirrrgans','@zhirr_ajalah','@zahiranjay', '@zahirganssss','@zhirrganteng','@zahirrgantengg'];
var creator = creatorList[Math.floor(Math.random() * creatorList.length)];
var apii = 'noapi'

//var ytdl = require('ytdl-core');
var yts = require('yt-search')
var { yta, ytv} = require('../lib/ytdl')
var ytpl = require('ytpl');
var secure = require('ssl-express-www');
var cors = require('cors');
var scrapeYt = require("scrape-yt");
var fetch = require('node-fetch');
var cheerio = require('cheerio');
var request = require('request');
var TikTokScraper = require('tiktok-scraper');
const canvac = require('canvacord')
const dcanvas = require('discord-canvas')


var router  = express.Router();

var { color, bgcolor } = require(__path + '/lib/color.js');
var { fetchJson } = require(__path + '/lib/fetcher.js')
var options = require(__path + '/lib/options.js');
var {
  Vokal,
  Base,
  Searchnabi,
    Gempa
} = require('./../lib');
var cookie = "HSID=A7EDzLn3kae2B1Njb;SSID=AheuwUjMojTWvA5GN;APISID=cgfXh13rQbb4zbLP/AlvlPJ2xBJBsykmS_;SAPISID=m82rJG4AC9nxQ5uG/A1FotfA_gi9pvo91C;__Secure-3PAPISID=m82rJG4AC9nxQ5uG/A1FotfA_gi9pvo91C;VISITOR_INFO1_LIVE=RgZLnZtCoPU;LOGIN_INFO=AFmmF2swRQIhAOXIXsKVou2azuz-kTsCKpbM9szRExAMUD-OwHYiuB6eAiAyPm4Ag3O9rbma7umBK-AG1zoGqyJinh4ia03csp5Nkw:QUQ3MjNmeXJ0UHFRS3dzaTNGRmlWR2FfMDRxa2NRYTFiN3lfTEdOVTc4QUlwbUI4S2dlVngxSG10N3ZqcHZwTHBKano5SkN2dDlPSkhRMUtReE42TkhYeUVWS3kyUE1jY2I1QzA1MDZBaktwd1llWU9lOWE4NWhoZV92aDkxeE9vMTNlcG1uMU9rYjhOaDZWdno2ZzN3TXl5TVNhSjNBRnJaMExrQXpoa2xzRVUteFNWZDI5S0Fn;PREF=app=desktop&f4=4000000&al=id;SID=2wezCMTUkWN3YS1VmS_DXaEU84J0pZIQdemM8Zry-uzWm8y1njBpLTOpxSfN-EaYCRSiDg.;YSC=HCowA1fmvzo;__Secure-3PSID=2wezCMTUkWN3YS1VmS_DXaEU84J0pZIQdemM8Zry-uzWm8y1dajgWzlBh9TgKapGOwuXfA.;SIDCC=AJi4QfFK0ri9fSfMjMQ4tOJNp6vOb9emETXB_nf2S05mvr2jBlmeEvlSsQSzPMuJl_V0wcbL1r8;__Secure-3PSIDCC=AJi4QfGeWHx-c4uTpU1rXCciO1p0s2fJWU07KrkZhWyD1Tqi8LyR-kHuBwHY9mViVYu1fRh2PA";

const isUrl = (url) => {
      return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
}
const misparam = (param) => {
  return {
    message: `Masukkan parameter ${param}!`
  }
}
const mess = {
  noimg: 'Masukkan Parameter url gambar!',
  error: {
    status: 'error',
    message: 'Sesuatu yang anda cari tidak ditemukan/error!'
  },
  url: 'Url Tidak Valid'
}
const getRandom = (ext) => {
  return `${Math.floor(Math.random() * 10000)}${ext}`
}
loghandler = {
    notparam: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter apikey',
        getApikey: 'gak punya apikey? chat gw aja yaaa di wa.me/6287798005230 , key nya gratis kok gan, jadi santuyy ajaa'
    },
    notkey: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter key'
    },
    noturl: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter url'
    },
    notkata: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter kata'
    },
    nottext: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter text'
    },
    nottext2: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter text2'
    },
    notnabi: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter nabi'
    },
    nottext3: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter text3'
    },
    nottheme: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter theme'
    },
    notusername: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter username'
    },
    notvalue: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter value'
    },
    notheme: {
      status: false,
        creator: `${creator}`,
        code: 406,
        message: 'theme tidak tersedia silahkan masukkan texmaker/list atau baca documentasi'
     },
    invalidKey: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'apikey invalid, gak punya apikey? chat gw aja yaaa di wa.me/6287798005230 , key nya gratis kok gan, jadi santuyy ajaa'
    },
    invalidlink: {
        status: false,
        creator: `${creator}`,
        message: 'error, mungkin link anda tidak valid.'
    },
    invalidkata: {
        status: false,
        creator: `${creator}`,
        message: 'error, mungkin kata tidak ada dalam api.'
    },
    notAddApiKey: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter status, apikey, email, nomorhp, name, age, country, exp'
    },
    error: {
        status: false,
        creator: `${creator}`,
        message: 'mungkin sedang dilakukan perbaikan'
    }
}

var len = 15
        var arr = '123456789abcdefghijklmnopqrstuvwxyz'
        var random = '';

        for (var i = len; i > 0; i--) {
            random += arr[Math.floor(Math.random() * arr.length)];
        }

        var lenn = 5
        var randomlagi = '';

        for (var i = lenn; i > 0; i--) {
            randomlagi += arr[Math.floor(Math.random() * arr.length)];
        }

        var randomTextNumber = random+randomlagi+'---------ZahirGanteng'+'ZHIRRR--GANS';
        
 
 async function cekApiKey(api) {
  ap = await zahirr.findOne({apikey:api})
 return ap;
 }
 hit.push(router.get)
router.get('/find', async (req, res, next) => {
    var apikey = req.query.apikey
    if (!apikey) return res.json(loghandler.notparam)
    if (apikey != apii) return res.json(loghandler.invalidKey)

    try {
        zahirr.find()
            .then(result => {
                res.json({
                    status: true,
                    creator: `${creator}`,
                    result
                })
        })
    } catch (e) {
        console.log(e)
        res.json(loghandler.error)
    }
})

router.get('/cekapikey', async (req, res, next) => {
  const apikey = req.query.apikey
  if(!apikey) return res.json(loghandler.notparam)
  a = await cekApiKey(apikey)
  if (a) {
  json = JSON.stringify({
    status: true,
    creator: creator,
    result: {
            status:a.status,
      id: a._id,
      apikey: a.apikey,
      more_info: {
        email: a.email,
        nomor_hp: a.nomor_hp,
        name: a.name,
        age: a.age,
        country: a.country,
        exp:a.exp,
      },
    },
    message: `jangan lupa follow ${creator}`
  })
} else {
  json = JSON.stringify({
    status: false
  })
}
res.send(JSON.parse(json))
})

router.get('/addapikey', (req, res, next) => {
    var apikey = req.query.apikey,
        status = req.query.status,
        apikey  = req.query.apikey,
        email = req.query.email,
        nomorhp = req.query.nomorhp
        name = req.query.name,
        age = req.query.age,
        country = req.query.country;
        exp = req.query.exp;

    if (!apikey) return res.json(loghandler.notparam)
    if (!(status && apikey && email && nomorhp && name && age && country && exp)) return res.json(loghandler.notAddApiKey)
    if (apikey != apii) return res.json(loghandler.invalidKey)

    try {
        zahirr.insert({
          status: status,
            apikey: apikey,
            email: email,
            nomor_hp: nomorhp,
            name: name,
            age: age,
            country: country,
            exp: exp
        })
        .then(() => {
              res.json({
                  status: true,
                  creator: `${creator}`,
                  result: 'berhasil menambah data, status : ' + status + ', apikey : ' + apikey + ', email : ' + email + ', nomor_hp : ' + nomorhp + ', name :  ' + name + ', age : ' + age + ', country : ' + country + ', exp : ' + exp
              })
        })
    } catch (e) {
        console.log(e)
        res.json(loghandler.error)
    }
})

router.get('/remove', (req, res, next) => {
    var apikey = req.query.apikey,
        status = req.query.status,
        apikey  = req.query.apikey,
        email = req.query.email,
        nomorhp = req.query.nomorhp
        name = req.query.name,
        age = req.query.age,
        country = req.query.country;
        exp = req.query.exp;

    if (!apikey) return res.json(loghandler.notparam)
    if (!(status && apikey && email && nomorhp && name && age && country && exp)) return res.json(loghandler.notAddApiKey)
    if (apikey != apii) return res.json(loghandler.invalidKey)

    try {
        zahirr.remove({
            status: status,
            apikey: apikey,
            email: email,
            nomor_hp: nomorhp,
            name: name,
            age: age,
            country: country,
            exp: exp
        })
        .then(() => {
             res.json({
                  status: true,
                  creator: `${creator}`,
                  result: 'berhasil menghapus data, status : ' + status + ', apikey : ' + apikey + ', email : ' + email + ', nomor_hp : ' + nomorhp + ', name :  ' + name + ', age : ' + age + ', country : ' + country + ', exp : ' + exp
              })
        })
    } catch (e) {
        console.log(e)
        res.json(loghandler.error)
    }
})

router.get('/tiktod', async (req, res, next) => {
    const apikey = req.query.apikey,
        url = req.query.url


  if(!apikey) return res.json(loghandler.notparam)
  if(apikey != apii) return res.json(loghandler.invalidKey)
     if (!url) return res.json(loghandler.noturl)

     TikTokScraper.getVideoMeta(url, options)
         .then(vid => {
             console.log(vid)
             res.json({
                 status: true,
                 creator: `${creator}`,
                 videoNoWm: vid
             })
         })
         .catch(e => {
             res.json(loghandler.invalidlink)
         })
})

router.get('/tiktod/stalk', async (req, res, next) => {
    const apikey = req.query.apikey,
        username = req.query.username

  if(!apikey) return res.json(loghandler.notparam)
  if(apikey != apii) return res.json(loghandler.invalidKey)
    if (!username) return res.json(loghandler.notusername)


    TikTokScraper.getUserProfileInfo(username)
        .then(user => {
            res.json({
                status : true,
                creator : `${creator}`,
                result : user
            })
        })
        .catch(e => {
             res.json({
                 status : false,
                 creator : `${creator}`,
                 message : "error, mungkin username anda tidak valid"
             })
         })
})

router.get('/randomquote', async (req, res, next) => {
        const apikey = req.query.apikey
            
  if(!apikey) return res.json(loghandler.notparam)
  if(apikey != apii) return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://python-api-zhirrr.herokuapp.com/api/random/quotes`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
          res.json(loghandler.error)
})
})


router.get('/infonpm', async (req, res, next) => {
        const apikey = req.query.apikey,
            query = req.query.query
            
  if(!apikey) return res.json(loghandler.notparam)
  if(apikey != apii) return res.json(loghandler.invalidKey)
    if (!query) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter query"})

       fetch(encodeURI(`https://registry.npmjs.org/${query}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result,
                 message : `jangan lupa follow ${creator}`
             })
         })
         .catch(e => {
          res.json(loghandler.error)
})
})


router.get('/short/tiny', async (req, res, next) => {
    const apikey = req.query.apikey,
        url = req.query.url

  if(!apikey) return res.json(loghandler.notparam)
  if(apikey != apii) return res.json(loghandler.invalidKey)
     if (!url) return res.json(loghandler.noturl)

     request(`https://tinyurl.com/api-create.php?url=${url}`, function (error, response, body) {
         try {
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result : {
                     link : `${body}`,
                 },
                 message : `jangan lupa follow ${creator}`
             })
         } catch (e) {
             console.log('Error :', color(e,'red'))
             res.json(loghandler.invalidlink)
         }
     })
})

router.get('/base', async (req, res, next) => {
  var type = req.query.type,
    encode = req.query.encode,
    decode = req.query.decode,
    apikey = req.query.apikey;
    if (!apikey) return res.json(loghandler.notparam)
    if (apikey != apii) return res.json(loghandler.invalidKey)
    if (!type) return res.json({status: false, creator, code: 404, message: 'masukan parameter type, type yang tersedia : base64 , base32'})
    if (type == 'base64' && encode){
        Base("b64enc", encode)
        .then(result => {
          res.json({
            status:true,
            creator: `${creator}`,
            result
          })
        })
      } else if (type == 'base64' && decode){
        Base("b64dec", decode)
        .then(result => {
          res.json({
            status: true,
            creator: `${creator}`,
            result
          })
        })
      } else if (type == 'base32' && encode){
        Base('b32enc', encode)
        .then(result => {
          res.json({
            status:true,
            creator: `${creator}`,
            result
          })
        })
      } else if (type == 'base32' && decode){
        Base('b32dec', decode)
        .then(result => {
          res.json({
            status:true,
            creator: `${creator}`,
            result
          })
        })
      } else if(!(encode || decode)){
        res.json({
          status:false,
          creator: `${creator}`,
          message: "tambahkan parameter encode/decode"
        })
      } else {
        res.json(loghandler.error)
      }
})

router.get('/nulis', async (req, res, next) => {
  var text = req.query.text,
     apikey = req.query.apikey;
  if(!apikey) return res.json(loghandler.notparam)
     if(apikey != apii) return res.json(loghandler.invalidKey)
   if(!text) return res.json(loghandler.nottext)
    Nulis(text)
     .then(hasil => {
      fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${hasil}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
            })
           .catch(err => {
      res.json(loghandler.error)
       })
})

router.get('/textmaker', async (req, res, next) => {
        var theme = req.query.theme,
             text = req.query.text,
             text2 = req.query.text2,
             text3 = req.query.text3,
             apikey = req.query.apikey;
        
  if(!apikey) return res.json(loghandler.notparam)
  if(apikey != apii) return res.json(loghandler.invalidKey)
        if (!theme) return res.json(loghandler.nottheme)
        if (theme != 'glitch' && theme != 'google-suggestion') return res.json(loghandler.notheme)
        if (!text) return res.json(loghandler.nottext)

        if (theme == 'glitch') {
          if (!text2) return res.json(loghandler.nottext2)
            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/make-tik-tok-text-effect-375.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&text_2=${text2}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=93f5c8966cfaf3ca19051ee9f85c14f3&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                  console.log(e);
                res.json(loghandler.error)
                }
        } else if (theme == 'google-suggestion') {
          if (!text2) return res.json(loghandler.nottext2)
        if (!text3) return res.json(loghandler.nottext3)
            request.post({
                url: "https://photooxy.com/other-design/make-google-suggestion-photos-238.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&text_2=${text2}&text_3=${text3}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                }) 
        } else {
            res.json(loghandler.error)
        }
})

router.get('/textmaker/game', async (req, res, next) => {
        var theme = req.query.theme,
             text = req.query.text,
             text2 = req.query.text2,
             text3 = req.query.text3,
             apikey = req.query.apikey;
        
  if(!apikey) return res.json(loghandler.notparam)
  if(apikey != apii) return res.json(loghandler.invalidKey)
        if (!theme) return res.json(loghandler.nottheme)
        if (theme != 'pubg' && theme != 'battlefield') return res.json(loghandler.notheme)
        if (!text) return res.json(loghandler.nottext)

        if (theme == 'pubg') {
          if (!text2) return res.json(loghandler.nottext2)
            try {
            request.post({
                url: "https://photooxy.com/battlegrounds/make-wallpaper-battlegrounds-logo-text-146.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&text_2=${text2}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                  console.log(e);
                res.json(loghandler.error)
                }
        } else if (theme == 'battlefield') {
          if (!text2) return res.json(loghandler.nottext2)
            request.post({
                url: "https://photooxy.com/fps-game-effect/create-battlefield-4-rising-effect-152.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&text_2=${text2}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                }) 
        } else {
            res.json(loghandler.error)
        }
})

router.get('/textmaker/senja', async (req, res, next) => {
        var theme = req.query.theme,
             text = req.query.text,
             text2 = req.query.text2,
             text3 = req.query.text3,
             apikey = req.query.apikey;
        
  if(!apikey) return res.json(loghandler.notparam)
  if(apikey != apii) return res.json(loghandler.invalidKey)
        if (!theme) return res.json(loghandler.nottheme)
        if (theme != 'coffee-cup' && theme != 'coffee-cup2') return res.json(loghandler.notheme)
        if (!text) return res.json(loghandler.nottext)

        if (theme == 'coffee-cup') {
            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/put-any-text-in-to-coffee-cup-371.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                  console.log(e);
                res.json(loghandler.error)
                }
        } else if (theme == 'coffee-cup2') {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/put-your-text-on-a-coffee-cup--174.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                }) 
        } else {
            res.json(loghandler.error)
        }
})

router.get('/kisahnabi', async (req, res, next) => {
  var nabi = req.query.nabi,
    apikey = req.query.apikey;

    if (!apikey) return res.json(loghandler.notparam)
    if (apikey != apii) return res.json(loghandler.invalidKey)
    Searchnabi(nabi)
    .then(result => {
      res.json({
        creator: creator,
        result
      })
    })
    .catch(e => {
      console.log('Error :', color(e, 'red'))
      res.json(loghandler.error)
    })
})
router.get('/hadits', async (req, res, next) => {
        const apikey = req.query.apikey,
            kitab = req.query.kitab,
            nomor = req.query.nomor
            
  if(!apikey) return res.json(loghandler.notparam)
  if(apikey != apii) return res.json(loghandler.invalidKey)
    if (!kitab) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kitab"})
    if (!nomor) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter nomor"})

       fetch(encodeURI(`https://hadits-api-zhirrr.vercel.app/books/${kitab}/${nomor}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
          res.json(loghandler.error)
})
})


router.get('/quran', async (req, res, next) => {
        const apikey = req.query.apikey,
            surah = req.query.surah,
            ayat = req.query.ayat
            
  if(!apikey) return res.json(loghandler.notparam)
  if(apikey != apii) return res.json(loghandler.invalidKey)
    if (!surah) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter surah"})
    if (!ayat) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter ayat"})

       fetch(encodeURI(`https://alquran-apiii.vercel.app/surah/${surah}/${ayat}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
          res.json(loghandler.error)
})
})


router.get('/fbdown', async (req, res, next) => {
        const apikey = req.query.apikey,
            url = req.query.url
            
  if(!apikey) return res.json(loghandler.notparam)
  if(apikey != apii) return res.json(loghandler.invalidKey)
    if (!url) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter url"})

       fetch(encodeURI(`https://fb-api-zhirrr.vercel.app/?url=${url}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
          res.json(loghandler.error)
})
})


router.get('/textmaker/metallic', async (req, res, next) => {
        var theme = req.query.theme,
             text = req.query.text,
             text2 = req.query.text2,
             text3 = req.query.text3,
             apikey = req.query.apikey;
        
  if(!apikey) return res.json(loghandler.notparam)
  if(apikey != apii) return res.json(loghandler.invalidKey)
        if (!theme) return res.json(loghandler.nottheme)
        if (theme != 'neon' && theme != 'glow') return res.json(loghandler.notheme)
        if (!text) return res.json(loghandler.nottext)

        if (theme == 'neon') {
            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                  console.log(e);
                res.json(loghandler.error)
                }
        } else if (theme == 'glow') {
            request.post({
                url: "https://photooxy.com/other-design/create-metallic-text-glow-online-188.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                }) 
        } else {
            res.json(loghandler.error)
        }
})

router.get('/textmaker/alam', async (req, res, next) => {
        var theme = req.query.theme,
             text = req.query.text,
             text2 = req.query.text2,
             text3 = req.query.text3,
             apikey = req.query.apikey;
        
  if(!apikey) return res.json(loghandler.notparam)
  if(apikey != apii) return res.json(loghandler.invalidKey)
        if (!theme) return res.json(loghandler.nottheme)
        if (theme != 'summer' && theme != 'flower') return res.json(loghandler.notheme)
        if (!text) return res.json(loghandler.nottext)

        if (theme == 'summer') {
            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/3d-summer-text-effect-367.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                  console.log(e);
                res.json(loghandler.error)
                }
        } else if (theme == 'flower') {
            request.post({
                url: "https://photooxy.com/art-effects/flower-typography-text-effect-164.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                }) 
        } else {
            res.json(loghandler.error)
        }
})

router.get('/muslim/tahlil', async (req, res, next) => {
        const apikey = req.query.apikey
            
  if(!apikey) return res.json(loghandler.notparam)
  if(apikey != apii) return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataTahlil.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
          res.json(loghandler.error)
})
})


router.get('/muslim/wirid', async (req, res, next) => {
        const apikey = req.query.apikey
            
  if(!apikey) return res.json(loghandler.notparam)
  if(apikey != apii) return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataWirid.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
          res.json(loghandler.error)
})
})


router.get('/muslim/ayatkursi', async (req, res, next) => {
        const apikey = req.query.apikey
            
  if(!apikey) return res.json(loghandler.notparam)
  if(apikey != apii) return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataAyatKursi.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
          res.json(loghandler.error)
})
})


router.get('/muslim/doaharian', async (req, res, next) => {
        const apikey = req.query.apikey
            
  if(!apikey) return res.json(loghandler.notparam)
  if(apikey != apii) return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataDoaHarian.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
          res.json(loghandler.error)
})
})


router.get('/muslim/bacaanshalat', async (req, res, next) => {
        const apikey = req.query.apikey
            
  if(!apikey) return res.json(loghandler.notparam)
  if(apikey != apii) return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataBacaanShalat.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
          res.json(loghandler.error)
})
})


router.get('/muslim/niatshalat', async (req, res, next) => {
        const apikey = req.query.apikey
            
  if(!apikey) return res.json(loghandler.notparam)
  if(apikey != apii) return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataNiatShalat.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
          res.json(loghandler.error)
})
})


router.get('/muslim/kisahnabi', async (req, res, next) => {
        const apikey = req.query.apikey
            
  if(!apikey) return res.json(loghandler.notparam)
  if(apikey != apii) return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataKisahNabi.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
          res.json(loghandler.error)
})
})


router.get('/muslim/asmaulhusna', async (req, res, next) => {
        const apikey = req.query.apikey
            
  if(!apikey) return res.json(loghandler.notparam)
  if(apikey != apii) return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataAsmaulHusna.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
          res.json(loghandler.error)
})
})


router.get('/muslim/niatshubuh', async (req, res, next) => {
        const apikey = req.query.apikey
            
  if(!apikey) return res.json(loghandler.notparam)
  if(apikey != apii) return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/NiatShubuh.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
          res.json(loghandler.error)
})
})


router.get('/muslim/niatdzuhur', async (req, res, next) => {
        const apikey = req.query.apikey
            
  if(!apikey) return res.json(loghandler.notparam)
  if(apikey != apii) return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/NiatDzuhur.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
          res.json(loghandler.error)
})
})


router.get('/muslim/niatmaghrib', async (req, res, next) => {
        const apikey = req.query.apikey
            
  if(!apikey) return res.json(loghandler.notparam)
  if(apikey != apii) return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/NiatMaghrib.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
          res.json(loghandler.error)
})
})


router.get('/muslim/niatisya', async (req, res, next) => {
        const apikey = req.query.apikey
            
  if(!apikey) return res.json(loghandler.notparam)
  if(apikey != apii) return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/NiatIsya.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
          res.json(loghandler.error)
})
})


router.get('/muslim/niatashar', async (req, res, next) => {
        const apikey = req.query.apikey
            
  if(!apikey) return res.json(loghandler.notparam)
  if(apikey != apii) return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/NiatAshar.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
          res.json(loghandler.error)
})
})


router.get('/wallpaper/cyberspace', async (req, res, next) => {
        const apikey = req.query.apikey
            
  if(!apikey) return res.json(loghandler.notparam)
  if(apikey != apii) return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/CyberSpace.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
          res.json(loghandler.error)
})
})


router.get('/wallpaper/teknologi', async (req, res, next) => {
        const apikey = req.query.apikey
            
  if(!apikey) return res.json(loghandler.notparam)
  if(apikey != apii) return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/Technology.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
          res.json(loghandler.error)
})
})


router.get('/wallpaper/muslim', async (req, res, next) => {
        const apikey = req.query.apikey
            
  if(!apikey) return res.json(loghandler.notparam)
  if(apikey != apii) return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/Islamic.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
          res.json(loghandler.error)
})
})


router.get('/wallpaper/programming', async (req, res, next) => {
        const apikey = req.query.apikey
            
  if(!apikey) return res.json(loghandler.notparam)
  if(apikey != apii) return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/Programming.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
          res.json(loghandler.error)
})
})


router.get('/wallpaper/pegunungan', async (req, res, next) => {
        const apikey = req.query.apikey
            
  if(!apikey) return res.json(loghandler.notparam)
  if(apikey != apii) return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/Mountain.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
          res.json(loghandler.error)
})
})


router.get('/wikipedia', async (req, res, next) => {
        const apikey = req.query.apikey,
            search = req.query.search
            
  if(!apikey) return res.json(loghandler.notparam)
  if(apikey != apii) return res.json(loghandler.invalidKey)
        if(!search) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter search"})

       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/wiki?keyword=${search}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
          res.json(loghandler.error)
})
})

router.get('/randomquote/muslim', async (req, res, next) => {
        const apikey = req.query.apikey
            
  if(!apikey) return res.json(loghandler.notparam)
  if(apikey != apii) return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/quote?type=agamis`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
          res.json(loghandler.error)
})
})


router.get('/drakorasia', async (req, res, next) => {
        const apikey = req.query.apikey,
            search = req.query.search
            
  if(!apikey) return res.json(loghandler.notparam)
  if(apikey != apii) return res.json(loghandler.invalidKey)
        if(!search) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter search"})

       fetch(encodeURI(`http://docs-api-zahirrr.herokuapp.com/api/drakorasia?search=${search}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
          res.json(loghandler.error)
})
})


router.get('/jadwalshalat', async (req, res, next) => {
        const apikey = req.query.apikey,
            kota = req.query.kota
            
  if(!apikey) return res.json(loghandler.notparam)
  if(apikey != apii) return res.json(loghandler.invalidKey)
        if(!kota) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kota"})

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/Zhirrr-Database/main/adzan/${kota}/2021/03.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
          res.json(loghandler.error)
})
})


router.get('/fakedata', async (req, res, next) => {
        const apikey = req.query.apikey,
            country = req.query.country
            
  if(!apikey) return res.json(loghandler.notparam)
  if(apikey != apii) return res.json(loghandler.invalidKey)
        if(!country) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter country"})

       fetch(encodeURI(`https://fakename-api-zhirrr.vercel.app/api/fakename?country=${country}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
          res.json(loghandler.error)
})
})


router.get('/hilih', async (req, res, next) => {
        const apikey = req.query.apikey,
            kata = req.query.kata
            
  if(!apikey) return res.json(loghandler.notparam)
  if(apikey != apii) return res.json(loghandler.invalidKey)
        if(!kata) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kata"})

       fetch(encodeURI(`https://hilih-api-zhirrr.vercel.app/api/hilih?kata=${kata}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
          res.json(loghandler.error)
})
})


router.get('/liriklagu', async (req, res, next) => {
        const apikey = req.query.apikey,
            lagu = req.query.lagu
            
  if(!apikey) return res.json(loghandler.notparam)
  if(apikey != apii) return res.json(loghandler.invalidKey)
        if(!lagu) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kata"})

       fetch(encodeURI(`https://python-api-zhirrr.herokuapp.com/api/lirik?search=${lagu}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
          res.json(loghandler.error)
})
})


router.get('/chordlagu', async (req, res, next) => {
        const apikey = req.query.apikey,
            lagu = req.query.lagu
            
  if(!apikey) return res.json(loghandler.notparam)
  if(apikey != apii) return res.json(loghandler.invalidKey)
        if(!lagu) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kata"})

       fetch(encodeURI(`https://python-api-zhirrr.herokuapp.com/api/chord?q=${lagu}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
          res.json(loghandler.error)
})
})


router.get('/random/asmaulhusna', async (req, res, next) => {
        const apikey = req.query.apikey
            
  if(!apikey) return res.json(loghandler.notparam)
  if(apikey != apii) return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://python-api-zhirrr.herokuapp.com/api/random/asmaulhusna`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
          res.json(loghandler.error)
})
})


router.get('/kbbi', async (req, res, next) => {
        const apikey = req.query.apikey,
            kata = req.query.kata
            
  if(!apikey) return res.json(loghandler.notparam)
  if(apikey != apii) return res.json(loghandler.invalidKey)
        if(!kata) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kata"})

       fetch(encodeURI(`https://kbbi-api-zhirrr.vercel.app/api/kbbi?text=${kata}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
          res.json(loghandler.error)
})
})


router.get('/covidindo', async (req, res, next) => {
        const apikey = req.query.apikey
            
  if(!apikey) return res.json(loghandler.notparam)
  if(apikey != apii) return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://covid19-api-zhirrr.vercel.app/api/covid-indonesia`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
          res.json(loghandler.error)
})
})


router.get('/covidworld', async (req, res, next) => {
        const apikey = req.query.apikey
            
  if(!apikey) return res.json(loghandler.notparam)
  if(apikey != apii) return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://covid19-api-zhirrr.vercel.app/api/world`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
          res.json(loghandler.error)
})
})


router.get('/kodepos', async (req, res, next) => {
        const apikey = req.query.apikey,
      kota = req.query.kota
            
  if(!apikey) return res.json(loghandler.notparam)
  if(apikey != apii) return res.json(loghandler.invalidKey)
  if(!kota) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kota"})

       fetch(encodeURI(`https://kodepos-api-zhirrr.vercel.app/?q=${kota}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
          res.json(loghandler.error)
})
})


router.get('/cuaca', async (req, res, next) => {
        const apikey = req.query.apikey,
      kabupaten = req.query.kabupaten
            
  if(!apikey) return res.json(loghandler.notparam)
  if(apikey != apii) return res.json(loghandler.invalidKey)
  if(!kabupaten) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kabupaten"})
       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/cuaca?kabupaten=${kabupaten}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
          res.json(loghandler.error)
})
})


router.get('/random/meme', async (req, res, next) => {
        const apikey = req.query.apikey
            
  if(!apikey) return res.json(loghandler.notparam)
  if(apikey != apii) return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/meme`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
          res.json(loghandler.error)
})
})


router.get('/quotes/kanye', async (req, res, next) => {
        const apikey = req.query.apikey
            
  if(!apikey) return res.json(loghandler.notparam)
  if(apikey != apii) return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/quote?type=kanye`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
          res.json(loghandler.error)
})
})


router.get('/translate', async (req, res, next) => {
        const apikey = req.query.apikey,
      kata = req.query.kata
            
  if(!apikey) return res.json(loghandler.notparam)
  if(apikey != apii) return res.json(loghandler.invalidKey)
  if(!kata) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kata"})
       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/translate?text=${kata}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
          res.json(loghandler.error)
})
})


router.get('/anime/kusonime', async (req, res, next) => {
        const apikey = req.query.apikey,
      search = req.query.search
            
  if(!apikey) return res.json(loghandler.notparam)
  if(apikey != apii) return res.json(loghandler.invalidKey)
  if(!search) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter search"})
       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/kusonime?search=${search}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
          res.json(loghandler.error)
})
})


router.get('/gabut', async (req, res, next) => {
        const apikey = req.query.apikey
            
  if(!apikey) return res.json(loghandler.notparam)
  if(apikey != apii) return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/bosan`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
          res.json(loghandler.error)
})
})


router.get('/manga', async (req, res, next) => {
        const apikey = req.query.apikey,
      search = req.query.search
            
  if(!apikey) return res.json(loghandler.notparam)
  if(apikey != apii) return res.json(loghandler.invalidKey)
  if(!search) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter search"})
       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/manga?keyword=${search}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
          res.json(loghandler.error)
})
})


router.get('/random/wallpaper', async (req, res, next) => {
        const apikey = req.query.apikey
            
  if(!apikey) return res.json(loghandler.notparam)
  if(apikey != apii) return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/random/wallpaper?genre=acak`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
          res.json(loghandler.error)
})
})


router.get('/kuis/caklontong', async (req, res, next) => {
        const apikey = req.query.apikey
            
  if(!apikey) return res.json(loghandler.notparam)
  if(apikey != apii) return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/quote?type=caklontong`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
          res.json(loghandler.error)
})
})


router.get('/kuis/tebakgambar', async (req, res, next) => {
        const apikey = req.query.apikey
            
  if(!apikey) return res.json(loghandler.notparam)
  if(apikey != apii) return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/quote?type=tebakgambar`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
          res.json(loghandler.error)
})
})
const getBuffer = async (url, options) => {
    try {
        options ? options : {}
        const res = await axios({
            method: "get",
            url,
            headers: {
                'DNT': 1,
                'Upgrade-Insecure-Request': 1
            },
            ...options,
            responseType: 'arraybuffer'
        })
        return res.data
    } catch (e) {
        console.log(`Error : ${e}`)
    }
}
router.get('/ptl', async(req, res) => {
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
        if(!apikey) return res.json(loghandler.notparam)
    if(apikey != apii) return res.json(loghandler.invalidKey)
        rand = ptl[Math.floor(Math.random() * ptl.length)]
        getBuffer(rand).then(data => {
        fs.writeFileSync('./media/ptl.mp4', data)
        res.sendFile('/app/media/ptl.mp4')
    }).catch(error => {
        console.log(error);
        res.status(500).send({status: 500, message: 'Sesuatu yang anda cari tidak ditemukan/error!'});
    });
})
router.get('/infohoax', async(req, res) => {
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
        if(!apikey) return res.json(loghandler.notparam)
    if(apikey != apii) return res.json(loghandler.invalidKey)
    skrep.infohoax().then(result => {
        res.send({
          creator: 'Fajar Ihsana',
          result: result
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({status: 500, message: 'Sesuatu yang anda cari tidak ditemukan/error!'});
    });
})
router.get('/bukukiri', async(req, res) => {
    const query = req.query.teks;
    const apikey = req.query.apikey;
    if (query === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter teks & apikey`
    });
        if(!apikey) return res.json(loghandler.notparam)
    if(apikey != apii) return res.json(loghandler.invalidKey)
const splitText = query.replace(/(\S+\s*){1,9}/g, '$&\n')
const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
spawn('convert', [
    './media/nulis/sebelumkiri.jpg',
    '-font',
    './media/nulis/Indie-Flower.ttf',
    '-size',
    '960x1280',
    '-pointsize',
    '22',
    '-interline-spacing',
    '2',
    '-annotate',
    '+140+153',
    fixHeight,
    './media/nulis/setelahkiri.jpg'
])
.on('Maaf Terjadi Kesalahan', () => res.status(404).send({status: 'error'}))
.on('exit', () => {
    res.sendFile('/app/media/nulis/setelahkiri.jpg')
})
})
router.get('/bukukanan', async(req, res) => {
    const query = req.query.teks;
    const apikey = req.query.apikey;
    if (query === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter teks & apikey`
    });
        if(!apikey) return res.json(loghandler.notparam)
    if(apikey != apii) return res.json(loghandler.invalidKey)
const splitText = query.replace(/(\S+\s*){1,9}/g, '$&\n')
const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
spawn('convert', [
    './media/nulis/sebelumkanan.jpg',
    '-font',
    './media/nulis/Indie-Flower.ttf',
    '-size',
    '960x1280',
    '-pointsize',
    '23',
    '-interline-spacing',
    '2',
    '-annotate',
    '+128+129',
    fixHeight,
    './media/nulis/setelahkanan.jpg'
])
.on('Maaf Terjadi Kesalahan', () => res.status(404).send({status: 'error'}))
.on('exit', () => {
    res.sendFile('/app/media/nulis/setelahkanan.jpg')
})
})

router.get('/foliokanan', async(req, res) => {
    const query = req.query.teks;
    const apikey = req.query.apikey;
    if (query === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter teks & apikey`
    });
        if(!apikey) return res.json(loghandler.notparam)
    if(apikey != apii) return res.json(loghandler.invalidKey)
const splitText = query.replace(/(\S+\s*){1,13}/g, '$&\n')
const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
spawn('convert', [
    './media/nulis/foliokanan.jpg',
    '-font',
    './media/nulis/font/Indie-Flower.ttf',
    '-size',
    '960x1280',
    '-pointsize',
    '23',
    '-interline-spacing',
    '3',
    '-annotate',
    '+89+190',
    fixHeight,
    './media/nulis/sfoliokanan.jpg'
])
.on('Maaf Terjadi Kesalahan', () => res.status(404).send({status: 'error'}))
.on('exit', () => {
    res.sendFile('/app/media/nulis/sfoliokanan.jpg')
})
})
router.get('/foliokiri', async(req, res) => {
    const query = req.query.teks;
    const apikey = req.query.apikey;
    if (query === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter teks & apikey`
    });
        if(!apikey) return res.json(loghandler.notparam)
    if(apikey != apii) return res.json(loghandler.invalidKey)
const splitText = query.replace(/(\S+\s*){1,13}/g, '$&\n')
const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
spawn('convert', [
    './media/nulis/foliokiri.jpg',
    '-font',
    './media/nulis/Indie-Flower.ttf',
    '-size',
    '1720x1280',
    '-pointsize',
    '23',
    '-interline-spacing',
    '4',
    '-annotate',
    '+48+185',
    fixHeight,
    './media/nulis/sfoliokiri.jpg'
])
.on('Maaf Terjadi Kesalahan', () => res.status(404).send({status: 'error'}))
.on('exit', () => {
    res.sendFile('/app/media/nulis/sfoliokiri.jpg')
})
})
router.get('/asupan', async(req, res) => {
    const query = req.query.query;
    const apikey = req.query.apikey;
    if (query === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Masukkan parameter dengan lengkap!`
    });
        if(!apikey) return res.json(loghandler.notparam)
    if(apikey != apii) return res.json(loghandler.invalidKey)
    skrep.asupantiktok(query).then(resu => {
        res.status(200).send({status: 200, creator: 'Fajar Ihsana', username: resu.username, data: { caption: resu.media.caption, likes: resu.media.likes, comments: resu.media.comments, share: resu.media.share, videourl: resu.media.videourl}});
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Sesuatu yang anda cari tidak ditemukan/error!'
        })
    });
})
router.get('/searchgore', async(req, res) => {
    const query = req.query.query;
    const apikey = req.query.apikey;
    if (query === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Masukkan parameter dengan lengkap!`
    });
        if(!apikey) return res.json(loghandler.notparam)
    if(apikey != apii) return res.json(loghandler.invalidKey)
    skrep.searchgore(query).then(resu => {
        res.status(200).send({status: 200, creator: 'Fajar Ihsana', data: resu.data});
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Sesuatu yang anda cari tidak ditemukan/error!'
        })
    });
})
router.get('/grups', async(req, res) => {
    const query = req.query.query;
    const apikey = req.query.apikey;
    if (query === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Masukkan parameter dengan lengkap!`
    });
        if(!apikey) return res.json(loghandler.notparam)
    if(apikey != apii) return res.json(loghandler.invalidKey)
    skrep.carigc(query).then(resu => {
        res.status(200).send({status: 200, creator: 'Fajar Ihsana', data: resu});
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Sesuatu yang anda cari tidak ditemukan/error!'
        })
    });
})
router.get('/sfiles', async(req, res) => {
    const query = req.query.query;
    const apikey = req.query.apikey;
    if (query === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Masukkan parameter dengan lengkap!`
    });
        if(!apikey) return res.json(loghandler.notparam)
    if(apikey != apii) return res.json(loghandler.invalidKey)
    skrep.sfilesearch(query).then(resu => {
        res.status(200).send({
            status: 200, 
            creator: 'Fajar Ihsana', 
            data: resu
        });
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Sesuatu yang anda cari tidak ditemukan/error!'
        })
    });
})
router.get('/sfiledown', async(req, res) => {
    const query = req.query.url;
    const apikey = req.query.apikey;
    if (query === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Masukkan parameter dengan lengkap!`
    });
        if(!apikey) return res.json(loghandler.notparam)
    if(apikey != apii) return res.json(loghandler.invalidKey)
    skrep.sfiledown(query).then(resu => {
        hdata = resu.data
        res.status(200).send({
            status: 200, 
            creator: 'Fajar Ihsana', 
            data: {
                judul: hdata.judul,
                size: hdata.size,
                type: hdata.type,
                desc: hdata.desc,
                uploader: hdata.uploader,
                uploaded: hdata.uploaded,
                download_count : hdata.download_count,
                link: hdata.link
            }
        });
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Sesuatu yang anda cari tidak ditemukan/error!'
        })
    });
})
router.get('/zippy', async(req, res) => {
    const query = req.query.url;
    const apikey = req.query.apikey;
    if (query === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter url & apikey`
    });
        if(!apikey) return res.json(loghandler.notparam)
    if(apikey != apii) return res.json(loghandler.invalidKey)
    skrep.zippydl(query).then(resu => {
        hdata = resu.data
        res.status(200).send({
            status: 200, 
            creator: 'Fajar Ihsana', 
            data: {
                nama: hdata.judul,
                size: hdata.size,
                uploaded: hdata.uploaded,
                linkdl: hdata.link
            }
        });
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Sesuatu yang anda cari tidak ditemukan/error!'
        })
    });
})
router.get('/happymod', async(req, res) => {
    const query = req.query.query;
    const apikey = req.query.apikey;
    if (query === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Masukkan parameter dengan lengkap!`
    });
        if(!apikey) return res.json(loghandler.notparam)
    if(apikey != apii) return res.json(loghandler.invalidKey)
    skrep.happymod(query).then(resu => {
        res.status(200).send({
            status: 200, 
            creator: 'Fajar Ihsana', 
            data: resu.data
        });
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Sesuatu yang anda cari tidak ditemukan/error!'
        })
    });
})
router.get('/apkmody', async(req, res) => {
    const query = req.query.query;
    const apikey = req.query.apikey;
    if (query === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Masukkan parameter dengan lengkap!`
    });
        if(!apikey) return res.json(loghandler.notparam)
    if(apikey != apii) return res.json(loghandler.invalidKey)
    skrep.apkmody(query).then(resu => {
        res.status(200).send({
            status: 200, 
            creator: 'Fajar Ihsana', 
            data: resu.data
        });
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Sesuatu yang anda cari tidak ditemukan/error!'
        })
    });
})
router.get('/happymod', async(req, res) => {
    const query = req.query.query;
    const apikey = req.query.apikey;
    if (query === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Masukkan parameter dengan lengkap!`
    });
        if(!apikey) return res.json(loghandler.notparam)
    if(apikey != apii) return res.json(loghandler.invalidKey)
    skrep.happymod(query).then(resu => {
        res.status(200).send({
            status: 200, 
            creator: 'Fajar Ihsana', 
            data: resu.data
        });
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Sesuatu yang anda cari tidak ditemukan/error!'
        })
    });
})
router.get('/androidone', async(req, res) => {
    const query = req.query.query;
    const apikey = req.query.apikey;
    if (query === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Masukkan parameter dengan lengkap!`
    });
        if(!apikey) return res.json(loghandler.notparam)
    if(apikey != apii) return res.json(loghandler.invalidKey)
    skrep.android1(query).then(resu => {
        res.status(200).send({
            status: 200, 
            creator: 'Fajar Ihsana', 
            data: resu.data
        });
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Sesuatu yang anda cari tidak ditemukan/error!'
        })
    });
})
router.get('/usergh', async(req, res) => {
    const query = req.query.username;
    const apikey = req.query.apikey;
    if (query === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Masukkan parameter dengan lengkap!`
    });
        if(!apikey) return res.json(loghandler.notparam)
    if(apikey != apii) return res.json(loghandler.invalidKey)
    skrep.ghuser(query).then(resu => {
        res.status(200).send({
            status: 200,
            creator: 'Fajar Ihsana',
            data: resu
        });
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Sesuatu yang anda cari tidak ditemukan/error!'
        })
    });
})
router.get('/kiryu', async(req, res) => {
    const query = req.query.query;
    const apikey = req.query.apikey;
    if (query === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Masukkan parameter dengan lengkap!`
    });
        if(!apikey) return res.json(loghandler.notparam)
    if(apikey != apii) return res.json(loghandler.invalidKey)
    skrep.kiryu(query).then(resu => {
        res.status(200).send({
            status: 200,
            creator: 'Fajar Ihsana',
            data: resu
        });
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Sesuatu yang anda cari tidak ditemukan/error!'
        })
    });
})
router.get('/dewabatch', async(req, res) => {
    const query = req.query.query;
    const apikey = req.query.apikey;
    if (query === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Masukkan parameter dengan lengkap!`
    });
        if(!apikey) return res.json(loghandler.notparam)
    if(apikey != apii) return res.json(loghandler.invalidKey)
    skrep.dewabatch(query).then(resu => {
        res.status(200).send({
            status: 200,
            creator: 'Fajar Ihsana',
            data: resu
        });
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Sesuatu yang anda cari tidak ditemukan/error!'
        })
    });
})
router.get('/wattpad', async(req, res) => {
    const query = req.query.query;
    const apikey = req.query.apikey;
    if (query === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Masukkan parameter dengan lengkap!`
    });
        if(!apikey) return res.json(loghandler.notparam)
    if(apikey != apii) return res.json(loghandler.invalidKey)
    skrep.wattpad(query).then(resu => {
        res.status(200).send({
            status: 200,
            creator: 'Fajar Ihsana',
            data: resu
        });
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Sesuatu yang anda cari tidak ditemukan/error!'
        })
    });
})
router.get('/drakor', async(req, res) => {
    const query = req.query.query;
    const apikey = req.query.apikey;
    if (query === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Masukkan parameter dengan lengkap!`
    });
        if(!apikey) return res.json(loghandler.notparam)
    if(apikey != apii) return res.json(loghandler.invalidKey)
    skrep.drakor(query).then(resu => {
        res.status(200).send({
            status: 200,
            creator: 'Fajar Ihsana',
            data: resu
        });
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Sesuatu yang anda cari tidak ditemukan/error!'
        })
    });
})
router.get('/wallpaperhd', async(req, res) => {
    const query = req.query.query;
    const apikey = req.query.apikey;
    if (query === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Masukkan parameter dengan lengkap!`
    });
        if(!apikey) return res.json(loghandler.notparam)
    if(apikey != apii) return res.json(loghandler.invalidKey)
    skrep.wallpaperhd(query).then(resu => {
    rand = resu[Math.floor(Math.random() * resu.length)]
        getBuffer(rand).then(data => {
        fs.writeFileSync('./media/wall.png', data)
        res.sendFile('/app/media/wall.png')
    })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Sesuatu yang anda cari tidak ditemukan/error!'
        })
    });
})
router.get('/konachan', async(req, res) => {
    const query = req.query.query;
    const apikey = req.query.apikey;
    if (query === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Masukkan parameter dengan lengkap!`
    });
        if(!apikey) return res.json(loghandler.notparam)
    if(apikey != apii) return res.json(loghandler.invalidKey)
    skrep.konachan(query).then(resu => {
      rand = resu[Math.floor(Math.random() * resu.length)]
        getBuffer(rand).then(data => {
        fs.writeFileSync('./media/konachan.png', data)
        res.sendFile('/app/media/konachan.png')
    })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Sesuatu yang anda cari tidak ditemukan/error!'
        })
    });
})
router.get('/wiki', async(req, res) => {
    const query = req.query.query;
    const apikey = req.query.apikey;
    if (query === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Masukkan parameter dengan lengkap!`
    });
        if(!apikey) return res.json(loghandler.notparam)
    if(apikey != apii) return res.json(loghandler.invalidKey)
    skrep.wikisearch(query).then(resu => {
        res.status(200).send({
            status: 200,
            creator: 'Fajar Ihsana',
            data: resu
        });
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Sesuatu yang anda cari tidak ditemukan/error!'
        })
    });
})
router.get('/resepmasakan', async(req, res) => {
    const query = req.query.query;
    const apikey = req.query.apikey;
    if (query === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Masukkan parameter dengan lengkap!`
    });
        if(!apikey) return res.json(loghandler.notparam)
    if(apikey != apii) return res.json(loghandler.invalidKey)
    skrep.cariresep(query).then(resu => {
        skrep.bacaresep(resu.data[0].link).then(hsil => {
            hdata = hsil.data
            res.status(200).send({
                status: 200, 
                creator: 'Fajar Ihsana',
                data: {
                    judul: hdata.judul,
                    waktu_masak: hdata.waktu_masak,
                    hasil: hdata.hasil,
                    tingkat_kesulitan: hdata.tingkat_kesulitan,
                    thumbnail: hdata.thumb,
                    bahan: hdata.bahan,
                    langkah: hdata.langkah_langkah
                }
            });
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Sesuatu yang anda cari tidak ditemukan/error!'
        })
    });
})
router.get('/randomgore', async(req, res) => {
    const query = req.query.query;
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
        if(!apikey) return res.json(loghandler.notparam)
    if(apikey != apii) return res.json(loghandler.invalidKey)
    skrep.randomgore().then(resu => {
        res.status(200).send({status: 200, creator: 'Fajar Ihsana', data: { 
            judul: resu.data.judul, 
            views: resu.data.views, 
            comments: resu.data.comment, 
            thumbnail: resu.data.thumb, 
            videourl: resu.data.link
        }});
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Sesuatu yang anda cari tidak ditemukan/error!'
        })
    });
})
router.get('/infogempa', async(req, res) => {
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
        if(!apikey) return res.json(loghandler.notparam)
    if(apikey != apii) return res.json(loghandler.invalidKey)
    skrep.gempa().then(resu => {
        hdata = resu.data
        res.status(200).send({status: 200, creator: 'Fajar Ihsana', data: { 
            map: hdata.imagemap, 
            magnitude: hdata.magnitude, 
            kedalaman: hdata.kedalaman, 
            wilayah: hdata.wilayah, 
            waktu: hdata.waktu,
            lintang_bujur: hdata.lintang_bujur,
            dirasakan: hdata.dirasakan
        }});
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Sesuatu yang anda cari tidak ditemukan/error!'
        })
    });
})
router.get('/ytplayaudio', async(req, res) => {
    const query = req.query.query
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
        if(!apikey) return res.json(loghandler.notparam)
    if(apikey != apii) return res.json(loghandler.invalidKey)
    yts(query).then(resu => {
        yta(resu.all[0].url).then(data => {
          res.send(data)
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Sesuatu yang anda cari tidak ditemukan/error!'
        })
    });
})
router.get('/ytmp3', async(req, res) => {
    const url = req.query.url
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
        if(!apikey) return res.json(loghandler.notparam)
    if(apikey != apii) return res.json(loghandler.invalidKey)
    yta(url).then(data => {
      res.send(data)
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Sesuatu yang anda cari tidak ditemukan/error!'
        })
    });
})
router.get('/ytmp4', async(req, res) => {
    const url = req.query.url
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
        if(!apikey) return res.json(loghandler.notparam)
    if(apikey != apii) return res.json(loghandler.invalidKey)
    ytv(url).then(data => {
      res.send(data)
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Sesuatu yang anda cari tidak ditemukan/error!'
        })
    });
})
router.get('/tiktok', async(req, res) => {
    const url = req.query.url
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
        if(!apikey) return res.json(loghandler.notparam)
    if(apikey != apii) return res.json(loghandler.invalidKey)
    skrep.ttdl(url).then(data => {
      res.send(data)
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Sesuatu yang anda cari tidak ditemukan/error!'
        })
    });
})
router.get('/igdl', async(req, res) => {
    const url = req.query.url
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
        if(!apikey) return res.json(loghandler.notparam)
    if(apikey != apii) return res.json(loghandler.invalidKey)
    skrep.igdown(url).then(data => {
      res.send(data)
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Sesuatu yang anda cari tidak ditemukan/error!'
        })
    });
})
router.get('/twitter', async(req, res) => {
    const query = req.query.url
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
        if(!apikey) return res.json(loghandler.notparam)
    if(apikey != apii) return res.json(loghandler.invalidKey)
    skrep.twitter(url).then(data => {
      res.send(data)
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Sesuatu yang anda cari tidak ditemukan/error!'
        })
    });
})
router.get('/igstalk', async(req, res) => {
    const query = req.query.username
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
        if(!apikey) return res.json(loghandler.notparam)
    if(apikey != apii) return res.json(loghandler.invalidKey)
    skrep.igstalk(query).then(data => {
      res.send(data)
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Sesuatu yang anda cari tidak ditemukan/error!'
        })
    });
})

//canvas
router.get('/canvas/wasted', async(req, res) => {
  const apikey = req.query.apikey
  const img = req.query.img
  const asu = await getRandom()
  const asi = asu.replace('undefined','')
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
        if(!apikey) return res.json(loghandler.notparam)
    if(apikey != apii) return res.json(loghandler.invalidKey)
  if(!img) return res.json(mess.noimg)
  if(!isUrl(img)) return res.json(mess.url)
  canvac.Canvas.wasted(img).then(async data => {
    await canvac.write(data, `./media/wasted_${asi}.png`)
    await res.sendFile(`/app/media/wasted_${asi}.png`)
fs.unlinkSync(`./media/wasted_${asi}.png`)
  })
  .catch(error => {
    res.json(mess.error)
  })
})
router.get('/canvas/triggered', async(req, res) => {
  const apikey = req.query.apikey
  const img = req.query.url
  const {MemeCanvas} = require('canvacord')
  const memegen = new MemeCanvas();
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
        if(!apikey) return res.json(loghandler.notparam)
    if(apikey != apii) return res.json(loghandler.invalidKey)
  if(!img) return res.json(misparam(url))
  if(!isUrl(img)) return res.json(mess.url)
  memegen.trigger(img).then(async data => {
    await fs.writeFileSync(`./media/trigger_${asi}.gif`)
    await res.sendFile(`/app/media/trigger_${asi}.gif`)
  fs.unlinkSync(`./media/trigger_${asi}.gif`)
  })
  .catch(error => {
    res.json(mess.error)
  })
})

//welcome left canvas
router.get('/canvas/welcome', async(req, res) => {
  const nama = req.query.username
  const mem = req.query.memcount
  const avatar = req.query.ppurl
  const gname = req.query.groupname
  const bg = req.query.bgurl
  const apikey = req.query.apikey
  const asu = await getRandom()
  const asi = asu.replace('undefined','')
  if(!nama) return res.json(misparam('username'))
  if(!mem) return res.json(misparam('memcount'))
  if(!avatar) return res.json(misparam('ppurl'))
  if(!gname) return res.json(misparam('groupname'))
  if(!bg) return res.json(misparam('bgurl'))
  if(!apikey) return res.json(loghandler.notparam)
  if(apikey != apii) return res.json(loghandler.invalidKey)
  try{
  const image = await new dcanvas.Welcome()
    .setUsername(nama)
    .setDiscriminator(asi)
    .setMemberCount(mem)
    .setGuildName(gname)
    .setAvatar(avatar)
    .setColor("border", "#8015EA")
    .setColor("username-box", "#8015EA")
    .setColor("discriminator-box", "#8015EA")
    .setColor("message-box", "#8015EA")
    .setColor("title", "#8015EA")
    .setColor("avatar", "#8015EA")
    .setBackground(bg)
    .toAttachment();
    await fs.writeFileSync(`./media/welcome_${asi}.png`,image.toBuffer())
    await res.sendFile(`/app/media/welcome_${asi}.png`)
    //fs.unlinkSync(`./media/welcome_${asi}.png`)
  }catch{
    return res.json(mess.error)
  }
})
router.get('/canvas/goodbye', async(req, res) => {
  const nama = req.query.username
  const mem = req.query.memcount
  const avatar = req.query.ppurl
  const gname = req.query.groupname
  const bg = req.query.bgurl
  const apikey = req.query.apikey
  const asu = await getRandom()
  const asi = asu.replace('undefined','')
  if(!nama) return res.json(misparam('username'))
  if(!mem) return res.json(misparam('memcount'))
  if(!avatar) return res.json(misparam('ppurl'))
  if(!gname) return res.json(misparam('groupname'))
  if(!bg) return res.json(misparam('bgurl'))
  if(!apikey) return res.json(loghandler.notparam)
  if(apikey != apii) return res.json(loghandler.invalidKey)
  try{
  const image = await new dcanvas.Goodbye()
    .setUsername(nama)
    .setDiscriminator(asi)
    .setMemberCount(mem)
    .setGuildName(gname)
    .setAvatar(avatar)
    .setColor("border", "#8015EA")
    .setColor("username-box", "#8015EA")
    .setColor("discriminator-box", "#8015EA")
    .setColor("message-box", "#8015EA")
    .setColor("title", "#8015EA")
    .setColor("avatar", "#8015EA")
    .setBackground(bg)
    .toAttachment();
    await fs.writeFileSync(`./media/goodbye_${asi}.png`,image.toBuffer())
  await res.sendFile(`/app/media/goodbye_${asi}.png`)
    fs.unlinkSync(`./media/goodbye_${asi}.png`)
  }catch{
    return res.json(mess.error)
  }
})

module.exports = router
