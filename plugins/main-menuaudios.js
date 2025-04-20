import fetch from 'node-fetch';

const handler = async (m, { conn, usedPrefix, isPrems }) => {
  try {
    await m.react('🔊');

    let img = 'https://files.catbox.moe/2xuz8m.jpg';
    let insta = 'https://instagram.com/dev.criss_vx';

    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];

    const text = `
︵᷼   MENÚ AUDIOS࣭
✿ *Hᴏʟᴀ ${taguser}*\n${saludo}

> ꒰꛱Este menú sigue siendo desarrollado por *Cristian Escobar*

↷✦; \`Audios\` ❞ ☕︵᷼ 
`.trim();

    conn.sendMessage(m.chat, {
      text: text,
      contextInfo: {
        mentionedJid: conn.parseMention(text),
        isForwarded: true,
        forwardingScore: 999,
        externalAdReply: {
          title: `${await conn.getName(m.sender)}, Thank for using Morchiyara, you can follow me on Instagram by clicking here`,
          body: 'Im Dev Criss',
          thumbnail: await (await fetch(img)).buffer(),
          sourceUrl: insta,
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    }, { quoted: fkontak });

  } catch (e) {
    conn.reply(m.chat, '❎ Error en el comando. Inténtalo más tarde.', m);
  }
};

handler.command = /^(tesmenu)$/i;
handler.fail = null;

export default handler;

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}