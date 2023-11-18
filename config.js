import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import fetch from 'node-fetch'
import axios from 'axios'


global.owner = [
  ['263713255223', 'Wayne M', true],
  ['263713255223', 'Wayne M', true], 
  [''] 
] //Number of owners

//global.pairingNumber = "" //put your bot number here

global.mods = ['917605902011','32460248586'] 
global.prems = ['917605902011', '32460248586', '919398758484']
global.allowed = ['917605902011', '32460248586', '19152999993']
global.keysZens = ['c2459db922', '37CC845916', '6fb0eff124']
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63']
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]
global.lolkeysapi = ['GataDios']

global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  dzx: 'https://api.dhamzxploit.my.id',
  lol: 'https://api.lolhuman.xyz',
  violetics: 'https://violetics.pw',
  neoxr: 'https://api.neoxr.my.id',
  zenzapis: 'https://zenzapis.xyz',
  akuari: 'https://api.akuari.my.id',
  akuari2: 'https://apimu.my.id',
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://api.lolhuman.xyz': '85faf717d0545d14074659ad',
  'https://api.neoxr.my.id': `${keysneoxr}`,	
  'https://violetics.pw': 'beta',
  'https://zenzapis.xyz': `${keysxxx}`, 
  'https://api-fgmods.ddns.net': 'fg-dylux'
}

// Sticker WM
global.botname = 'ᴛʜᴇ ɢᴜʀᴜ-ʙᴏᴛ'
global.premium = 'true'
global.packname = 'GURU┃ᴮᴼᵀ' 
global.author = '@Asliguru' 
global.menuvid = 'https://telegra.ph/file/085c4b1068f0f4f8db970.mp4'
global.igfg = '▢ Follow on Instagram\nhttps://www.instagram.com/asli_guru69\n' 
global.dygp = 'https://chat.whatsapp.com/BibVE6tUICp3qOm2a1Ur8f'
global.fgsc = 'https://github.com/Guru322/GURU-BOT' 
global.fgyt = 'https://youtube.com/@Asliguru'
global.fgpyp = 'https://youtube.com/@Asliguru'
global.fglog = 'https://raw.githubusercontent.com/Guru322/api/Guru/guru.jpg' 
global.thumb = fs.readFileSync('./Assets/Gurulogo.jpg')


global.wait = '*⌛ _Charging..._*\n*▰▰▰▱▱▱▱▱*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '3' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
SESSION_ID ='eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY01KZHo3aUFqQUdXYy84L0lKTElmeERQSlZMeFRaZkNON0dyTk1HVFFsMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWDhOSHNLYVJ0bFpNNldPRUVRUllNTjZhWWIydGJZL29sMURYTG94cmt3ND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQ0JudURnbDkvalN4SE1SWitaaHIxRnFvSjZ1cGxEWG8vM3pQREhSbGxjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPckFGbklPQlJoT0ZmNFA1L0d3Q2RCSlpZWnRjUWFYdGxQU3hiRzc3ZGo0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVBTks4aldSKytUaDc4ZjFwKys1emlQRFNtOEtjLzFYOFoxS3o4RzliRU09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZvWkhVYksxSm4wNGFQYzAyWTRmWUgyTFZ5VSsreDYxbUw4YThnOTBhajQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0xZNHNwanF6WFJRTUxtWktDRnlTZ2V0NjZzZFhUY1NHZzVwTmxsZ29sST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaHF4bEN6SW1uZXZpRGd4UzNscTBqUzNCdEVPdHFXZFNPUlFCV20xd0NTOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkpQQmdLdGRxb0RGMXdsaHVQc3dHYVpHZ3RCNjNEOXByOUU0bWRZUlJWR01UTk0vMDR3eGZOOEdodXB5TXNJRGRhbnkwS3hYVVk2TnMyZTJiZERTbERnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTAyLCJhZHZTZWNyZXRLZXkiOiJ3cDBFWnhyVEc5Z05teHJkRG1DZi9kblNBVEswcTNPNDhXMVlqWkVYWExBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJwSUw3VmIzX1RGYTBYbmRmSlRueHpRIiwicGhvbmVJZCI6ImVlYjI1YzY1LTBkZGMtNDZmNC1hZmFhLWI3ZWNmYmQwMzFlOSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXN0pMclh4NkNjbUZGSmlEMHcvdlkrMmpndVU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWmg4aUFTQTVrTHY5ejdObGFXUDBmZFFiLzk4PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkwxODRFMTlLIiwibWUiOnsiaWQiOiIyNjM3MTMyNTUyMjM6MTBAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiU3BhcnRhbiBXYXJyaW9yIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMQ08yWm9FRU5UNTRLb0dHQUU9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlYwZDVPWTBZRzc2Ujl1UENUWUFJVytOMUJuWXdpbU42a2xySnpJSEl0aW89IiwiYWNjb3VudFNpZ25hdHVyZSI6IjBFcWFvZHJkdmNOMW0zbGVjdG1QcUttaHhlcDdLbkhablNvQ2ZNMS92Mm40RkdNWlN6M1Ezb2pKMG52MU9jNWxJZEFUb1F0VFIyb0UzRUZkMjdZOENBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJac2VIZWlaODd6Z1FVUkVxQTBvZ0xDTTN2N3ViMXQ4MXhQV2p1ZnN5RGRvK3RoUXV2cXZtL1JIa0h6aEtMM1FDNDUwVjhjSUlZQ2FMVHQ0bTdxMEpDZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI2MzcxMzI1NTIyMzoxMEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJWZEhlVG1OR0J1K2tmYmp3azJBQ0Z2amRRWjJNSXBqZXBKYXljeUJ5TFlxIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzAwMjgxNTYwLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUE1VyJ9'
DATABASE_URL = 'mongodb+srv://DARKSHAN:3000@cluster0.t1wsjlv.mongodb.net/'
PREFIX = .
