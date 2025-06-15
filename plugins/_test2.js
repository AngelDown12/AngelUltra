/*const handler = async (m, { conn, text }) => {
  if (!text) throw '*[❗] Ingresa el mensaje a enviar con la ubicación*';

  const mensaje = '[❗𝐋𝐈𝐕𝐄 𝐓𝐄𝐒𝐓❗]\n\n' + text + '\n\nEste es un test de liveLocationMessage';

  await conn.relayMessage(m.chat, {
    liveLocationMessage: {
      degreesLatitude: 35.685506276233525,
      degreesLongitude: 139.75270667105852,
      accuracyInMeters: 0,
      degreesClockwiseFromMagneticNorth: 2,
      caption: mensaje,
      sequenceNumber: 2,
      timeOffset: 3,
    },
  }, {}).catch(e => m.reply('*[⚠️] Error al enviar liveLocationMessage:* ' + e));

  m.reply('*[✅] Mensaje de ubicación en vivo enviado exitosamente.*');
};

handler.help = ['testlive <mensaje>'];
handler.tags = ['test'];
handler.command = /^testlive$/i;
handler.owner = true;

export default handler;

import moment from 'moment-timezone';
import PhoneNumber from 'awesome-phonenumber';
import fetch from 'node-fetch';

let handler = async (m, { conn, args }) => {
    let userId;
    if (m.quoted && m.quoted.sender) {
        userId = m.quoted.sender;
    } else {
        userId = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.sender;
    }

    let user = global.db.data.users[userId];

    let name = conn.getName(userId);
    let cumpleanos = user.birth || 'No especificado';
    let genero = user.genre || 'No especificado';
    let pareja = user.marry || 'Nadie';
    let description = user.description || 'Sin Descripción';
    let exp = user.exp || 0;
    let nivel = user.level || 0;
    let role = user.role || 'Sin Rango';
    let diamond = user.diamantes || 0;
    let bankDiamond = user.bank || 0;

    let perfil = await conn.profilePictureUrl(userId, 'image').catch(_ => 'https://raw.githubusercontent.com/The-King-Destroy/Adiciones/main/Contenido/1745522645448.jpeg');

    let profileText = `

=͟͟͞͞ ✿  *𝖯𝖾𝗋𝖿𝗂𝗅 𝖽𝖾𝗅 𝖴𝗌𝗎𝖺𝗋𝗂𝗈  ←╮*
╰ ࣪ ˖ ∿ @${userId.split('@')[0]}

> ${description}

∘🌿.• *Edad:* ${user.age || 'Desconocida'}
∘🌺.• *Cumpleaños:* ${cumpleanos}
∘🌾.• *Casado/a con:* ${pareja}

❀ *Experiencia:* ${exp.toLocaleString()}
🜲 *Nivel:* ${nivel}
Ꮺ *Rango:* ${role}

⛁ *Coins Cartera* » ${diamond.toLocaleString()} ${moneda}
⛃ *Coins Banco* » ${bankDiamond.toLocaleString()} ${moneda}
❁ *Premium* » ${user.premium ? '✅' : '❌'}
  `.trim();

    await conn.sendMessage(m.chat, { 
        text: profileText,
        contextInfo: {
            mentionedJid: [userId],
            externalAdReply: {
                title: '✧ Perfil de Usuario ✧',
                body: club,
                thumbnailUrl: perfil,
                mediaType: 1,
                showAdAttribution: true,
                renderLargerThumbnail: true
            }
        }
    }, { quoted: fkontak });
};

handler.help = ['profile'];
handler.tags = ['rg'];
handler.command = ['profile2', 'perfil2'];

export default handler;*/


import fs from 'fs'
import PhoneNumber from 'awesome-phonenumber'
import fetch from 'node-fetch'

const fkontak2 = {
  key: { participant: '0@s.whatsapp.net' },
  message: {
    contactMessage: { displayName: 'Shadow Ultra', vcard: '' }
  }
}

const loadMarriages = () => {
  const path = './src/database/marry.json'
  global.db.data.marriages = fs.existsSync(path)
    ? JSON.parse(fs.readFileSync(path, 'utf-8'))
    : {}
}

const handler = async (m, { conn }) => {
  loadMarriages()

  const userId = m.quoted?.sender || m.mentionedJid?.[0] || m.sender
  const user = global.db.data.users[userId] || {}

  const name = await conn.getName(userId)
  const perfilUrl = await conn.profilePictureUrl(userId, 'image')
    .catch(() => 'https://raw.githubusercontent.com/The-King-Destroy/Adiciones/main/Contenido/1745522645448.jpeg')

  const cumpleanos = user.birth || 'No especificado'
  const genero = user.genre || 'No especificado'
  const description = user.description || 'Sin Descripción'
  const exp = user.exp || 0
  const nivel = user.level || 0
  const role = user.role || 'Sin Rango'
  const diamond = user.diamantes || 0
  const bankDiamond = user.bank || 0
  const premium = user.premium || false
  const age = user.age || 'No especificada'

  const isMarried = userId in global.db.data.marriages
  const partner = isMarried ? global.db.data.marriages[userId] : null
  const partnerName = partner ? await conn.getName(partner) : 'Nadie'

  const profileText = `
=͟͟͞͞ ✿  *𝖯𝖾𝗋𝖿𝗂𝗅 𝖽𝖾𝗅 𝖴𝗌𝗎𝖺𝗋𝗂𝗈  ←╮*
╰ ࣪ ˖ ∿ @${userId.split('@')[0]}

> ${description}

∘🌿.• *Edad:* ${age}
∘🌺.• *Cumpleaños:* ${cumpleanos}
∘💍.• *Casado/a con:* ${partnerName}

❀ *Experiencia:* ${exp.toLocaleString()}
🜲 *Nivel:* ${nivel}
Ꮺ *Rango:* ${role}

⛁ *Coins Cartera* » ${diamond.toLocaleString()} ${moneda}
⛃ *Coins Banco* » ${bankDiamond.toLocaleString()} ${moneda}
❁ *Premium* » ${premium ? '✅' : '❌'}
`.trim()

  await conn.sendMessage(m.chat, {
    text: profileText,
    contextInfo: {
      mentionedJid: [userId],
      externalAdReply: {
        title: 'Shadow Ultra - MD',
        body: club,
        thumbnailUrl: perfilUrl,
        mediaType: 1,
        showAdAttribution: true,
        renderLargerThumbnail: true
      }
    }
  }, { quoted: fkontak2 })
}

handler.help = ['profile2']
handler.tags = ['rg']
handler.command = ['profile2', 'perfil2']

export default handler