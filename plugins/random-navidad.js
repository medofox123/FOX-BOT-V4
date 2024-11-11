import axios from 'axios'
let handler = async(m, { conn, args, usedPrefix, command }) => {
let res = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/navidad.json`)).data  
let mystic = await res[Math.floor(res.length * Math.random())]
conn.sendButton(m.chat, `_شــــكــࢪا 🧑‍🎄_`, author, mystic, [['اضـــــغــــط للمـــــزيد', `${usedPrefix + command}`]], null, null, m)}
handler.help = ['navidad']
handler.tags = ['internet']
handler.command = /^(عيد)$/i
export default handler
