const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command, usedPrefix}) => {

  if (usedPrefix == 'a' || usedPrefix == 'A') return;

  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
  }
  const pesan = args.join` `;
const oi = `*\`AVISO:\`* ${pesan}`;
  let teks = `𝗗𝗘𝗦𝗣𝗜𝗘𝗥𝗧𝗘𝗡 𝗣𝗟𝗔𝗡𝗧𝗔𝗦 🌱\n> \`𝖨𝗇𝗍𝖾𝗀𝗋𝖺𝗇𝗍𝖾𝗌:\` *${participants.length}*\n\n ${channel}\n\n ${oi}\n\n  ━━ *_ETIQUETAS_*\n${readMore}`;
  for (const mem of participants) {
    teks += `യ ׄ🥞˚ @${mem.id.split('@')[0]}\n`;
  }
  teks += `> ${club}`;
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['todos *<txt>*'];
handler.tags = ['gc'];
handler.command = /^(tagall|t|invocar|marcar|todos|invocación)$/i;
handler.admin = true;
handler.group = true;

export default handler;

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)