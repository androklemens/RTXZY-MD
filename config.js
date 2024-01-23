global.owner = ['6281283307615']  
global.mods = ['6281283307615'] 
global.prems = ['6281283307615']
global.nameowner = 'ᴀ ɴ ᴅ ʀ ᴏ ᴋ ʟ ᴇ ᴍ ᴇ ɴ s'
global.numberowner = '6281283307615' 
global.mail = 'ambonpunya69@gmail.com'  
global.gc = 'https://chat.whatsapp.com/CWrSXGAVbzbBbUlYayRyua'
global.instagram = 'https://instagram.com/androklemens'
global.wm = '©  𝘼𝙣𝙙𝙧𝙤𝙆𝙡𝙚𝙢𝙚𝙣𝙨🜸'
global.wait = '_*Tunggu sedang di proses...*_'
global.eror = '_*Server Error*_'
global.stiker_wait = '*⫹⫺ Stiker sedang dibuat...*'
global.packname = 'Made With'
global.author = 'Bot WhatsApp'
global.maxwarn = '2' // Peringatan maksimum

//INI WAJIB DI ISI!//
global.btc = 'JQTqoYrF' 
//Daftar terlebih dahulu https://api.botcahx.eu.org

//INI OPTIONAL BOLEH DI ISI BOLEH JUGA ENGGA//
global.lann = ''
//Daftar https://api.betabotz.eu.org 

global.APIs = {   
  btc: 'https://api.botcahx.eu.org'
}
global.APIKeys = { 
  'https://api.botcahx.eu.org': 'APIKEY' 
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
