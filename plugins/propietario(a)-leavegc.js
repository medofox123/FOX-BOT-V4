let handler = async (m, { conn, text, command }) => {
let id = text ? text : m.chat  
let chat = global.db.data.chats[m.chat]
chat.welcome = false
await conn.reply(id, `*انا اسف ان كنت ازعجتكم , وداعا للجميع احبكم!\n  ســــلام*`) 
await conn.groupLeave(id)
try {  
chat.welcome = true
} catch (e) {
await m.reply(`${fg}`) 
return console.log(e)
}}
handler.command = /^(salir|غادر_الجروب|salirdelgrupo|leave)$/i
handler.group = true
handler.rowner = true
export default handler