import fetch from 'node-fetch';

const handler = async (m, { conn, usedPrefix, isPrems }) => {
  try {
    await m.react('👑');

    const pp = 'https://files.catbox.moe/9d4ria.jpg';
    const img = await (await fetch(pp)).buffer()
    const shadow = '𝖬𝖾𝗇𝗎́ 𝖮𝗐𝗇𝖾𝗋';
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const txt = `${await conn.getName(m.sender)}, Welcome to my developer menu, follow me on Instagram, thank you very much.`;

    const text = `
 ꡴ㅤ   ︵ᤢ⏜   ᷃ᩚ   ☕᪶     ᷃ᩚ ⏜ᤢ︵    ㅤ᪬
‎ ‎꒲꒲  *Hola*  ׅ ෫ׄ᷼͝${taguser}  ಒ
 ‎ ‎ ‎ ‎ ‎ ‎ ‎౨ৎ  ‎ ‎ ‎ ‎*Bienvenido* ‎ ‎  ‎ ‎✿̮    ׅ  al   ୂ  
 ⿻    *𝖬𝖾𝗇𝗎*    ෨    *𝖮𝗐𝗇𝖾𝗋*    𑇙ᰍ

🌴 ⪧ *BotName:* Shadow Ultra
🖥️ ⪧ *Platform:* Linux
🚀 ⪧ *Type:* NodeJs
📚 ⪧ *Librería:* Baileys

෨   \`Comandos\`    𓈒𓏸    ☁︎ 
𑂯 ׁ${xowner} ${usedPrefix}update
𑂯 ׁ${xowner} ${usedPrefix}leavegc
𑂯 ׁ${xowner} ${usedPrefix}blocklist
𑂯 ׁ${xowner} ${usedPrefix}grouplist
𑂯 ׁ${xowner} ${usedPrefix}restart
𑂯 ׁ${xowner} ${usedPrefix}join
𑂯 ׁ${xowner} ${usedPrefix}chetar
𑂯 ׁ${xowner} ${usedPrefix}banchat 
𑂯 ׁ${xowner} ${usedPrefix}unbanchat
𑂯 ׁ${xowner} ${usedPrefix}banuser
𑂯 ׁ${xowner} ${usedPrefix}unbanuser
𑂯 ׁ${xowner} ${usedPrefix}dsowner
𑂯 ׁ${xowner} ${usedPrefix}autoadmin 
`.trim();
/*
    conn.sendMessage(m.chat, {
      text: text,
      contextInfo: {
        mentionedJid: conn.parseMention(text),
        isForwarded: true,
        forwardingScore: 999,
        externalAdReply: {
          title: `${await conn.getName(m.sender)}, Welcome to my developer menu, follow me on Instagram, thank you very much.`,
          body: dev,
          thumbnail: await (await fetch(img)).buffer(),
          sourceUrl: insta,
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    }, { quoted: fkontak });*/

  await conn.sendLuffy(m.chat, txt, shadow, text, img, img, ig, fkontak)

  } catch (e) {
    conn.reply(m.chat, '✖️ Error en el comando. Inténtalo más tarde.', m);
  }
};

handler.command = /^(menuowner)$/i;
handler.fail = null;

export default handler;

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
