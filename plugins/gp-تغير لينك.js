
let handler = async (m, { conn }) => {
  let res = await conn.groupRevokeInvite(m.chat)
  m.reply('*تــم الـتـغيـير بــنجـاح !*')
}
handler.help = ['resetlink']
handler.tags = ['group']
handler.command = ['revoke', 'resetlink', 'تغيير_اللينك'] 
handler.group = true
handler.admin = true
handler.botAdmin = true

export default handler