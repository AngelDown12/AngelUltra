/*
import { WAMessageStubType } from '@whiskeysockets/baileys'
import fetch from 'node-fetch'

export async function before(m, { conn, participants, groupMetadata }) {
  if (!m.messageStubType || !m.isGroup) return true

  let who = m.messageStubParameters[0]
  let taguser = `@${who.split('@')[0]}`
  let chat = global.db.data.chats[m.chat]
  let defaultImage = 'https://files.catbox.moe/xr2m6u.jpg'

  if (chat.welcome) {
    let img
    try {
      let pp = await conn.profilePictureUrl(who, 'image')
      img = await (await fetch(pp)).buffer()
    } catch {
      img = await (await fetch(defaultImage)).buffer()
    }

    const groupName = groupMetadata.subject
    const groupDesc = groupMetadata.desc || 'sin descripción'

    if (m.messageStubType === WAMessageStubType.GROUP_PARTICIPANT_ADD) {
      let text = chat.sWelcome
        ? chat.sWelcome
            .replace(/@user/g, taguser)
            .replace(/@group/g, groupName)
            .replace(/@desc/g, groupDesc)
        : `𓆩°»｡˚ ∾･⁙･ ღ ➵ ⁘ ➵ ღ ･⁙･∾ ˚ ｡«°𓆪
❍⌇─➭ *Wᴇʟᴄᴏᴍᴇ ᴛᴏ Gʀᴏᴜᴘ ::*
๑ ˚ ͙۪۪̥${taguser} 👋🏻꒱

┌ *\`ɢʀᴏᴜᴘ::\`*
  ☕ ᩙᩞ✑ ${groupName}
└┬ *ɴᴇᴡ ᴍᴇᴍʙᴇʀ*
    ︱·˚🌿 Disfruta del grupo.
    └╾ׅ╴ׂꨪ╌╼᪶╾᪶ ۪〫┄ׅ⃯፝֟╌╼᪶֘╾᪶╌ׅꨪ╶۪╼┘

> ${dev}`

      await conn.sendMessage(m.chat, { image: img, caption: text, mentions: [who] }, { quoted: fkontak })
    } else if (
      m.messageStubType === WAMessageStubType.GROUP_PARTICIPANT_REMOVE ||
      m.messageStubType === WAMessageStubType.GROUP_PARTICIPANT_LEAVE
    ) {
      let text = chat.sBye
        ? chat.sBye
            .replace(/@user/g, taguser)
            .replace(/@group/g, groupName)
            .replace(/@desc/g, groupDesc)
        : `𓆩°»｡˚ ∾･⁙･ ღ ➵ ⁘ ➵ ღ ･⁙･∾ ˚ ｡«°𓆪
❍⌇─➭ *Sᴇᴇ ʏᴏᴜ Lᴀᴛᴇʀ ::*
๑ ˚ ͙۪۪̥${taguser} 🖕🏻꒱

┌ *\`ᴘᴜᴛᴀ ᴇʟɪᴍɪɴᴀᴅᴀ\`*
└┬ *ᴇx ᴍᴇᴍʙᴇʀ*
    ︱·˚🤍 Ojalá y lo violen los ngros.
    └╾ׅ╴ׂꨪ╌╼᪶╾᪶ ۪〫┄ׅ⃯፝֟╌╼᪶֘╾᪶╌ׅꨪ╶۪╼┘

> ${dev}`

      await conn.sendMessage(m.chat, { image: img, caption: text, mentions: [who] }, { quoted: fkontak })
    }
  }

  return true
}*/
//⭐⭐⭐⭐⭐⭐⭐⭐⭐
/*
import { WAMessageStubType } from '@whiskeysockets/baileys'
import fetch from 'node-fetch'

export async function before(m, { conn, participants, groupMetadata }) {
  if (!m.messageStubType || !m.isGroup) return true

  let who = m.messageStubParameters[0]
  let taguser = `@${who.split('@')[0]}`
  let chat = global.db.data.chats[m.chat]
  let defaultImage = 'https://files.catbox.moe/xr2m6u.jpg'
  let insta = 'https://instagram.com/dev.criss_vx'

  if (chat.welcome) {
    let img
    try {
      let pp = await conn.profilePictureUrl(who, 'image')
      img = await (await fetch(pp)).buffer()
    } catch {
      img = await (await fetch(defaultImage)).buffer()
    }

    const groupName = groupMetadata.subject
    const groupDesc = groupMetadata.desc || 'sin descripción'

    if (m.messageStubType === WAMessageStubType.GROUP_PARTICIPANT_ADD) {
      let text = chat.sWelcome
        ? chat.sWelcome
            .replace(/@user/g, taguser)
            .replace(/@group/g, groupName)
            .replace(/@desc/g, groupDesc)
        : `𓆩°»｡˚ ∾･⁙･ ღ ➵ ⁘ ➵ ღ ･⁙･∾ ˚ ｡«°𓆪
❍⌇─➭ *Wᴇʟᴄᴏᴍᴇ ᴛᴏ Gʀᴏᴜᴘ ::*
๑ ˚ ͙۪۪̥${taguser} 👋🏻꒱

┌ *\`ɢʀᴏᴜᴘ::\`*
  ☕ ᩙᩞ✑ ${groupName}
└┬ *ɴᴇᴡ ᴍᴇᴍʙᴇʀ*
    ︱·˚🌿 Disfruta del grupo.
    └╾ׅ╴ׂꨪ╌╼᪶╾᪶ ۪〫┄ׅ⃯፝֟╌╼᪶֘╾᪶╌ׅꨪ╶۪╼┘

> ${dev}`

      await conn.sendMessage(m.chat, {
        text,
        contextInfo: {
          mentionedJid: [who],
          isForwarded: true,
          forwardingScore: 999,
          externalAdReply: {
            title: `${await conn.getName(who)}, bienvenido a ${groupName}`,
            body: 'By Dev Criss',
            thumbnail: img,
            sourceUrl: insta,
            mediaType: 1,
            renderLargerThumbnail: true
          }
        }
      }, { quoted: fkontak })
    }

    if (
      m.messageStubType === WAMessageStubType.GROUP_PARTICIPANT_REMOVE ||
      m.messageStubType === WAMessageStubType.GROUP_PARTICIPANT_LEAVE
    ) {
      let text = chat.sBye
        ? chat.sBye
            .replace(/@user/g, taguser)
            .replace(/@group/g, groupName)
            .replace(/@desc/g, groupDesc)
        : `𓆩°»｡˚ ∾･⁙･ ღ ➵ ⁘ ➵ ღ ･⁙･∾ ˚ ｡«°𓆪
❍⌇─➭ *Sᴇᴇ ʏᴏᴜ Lᴀᴛᴇʀ ::*
๑ ˚ ͙۪۪̥${taguser} 🖕🏻꒱

┌ *\`ᴇx ᴍᴇᴍʙᴇʀ\`*
└┬ *Eɴ Fɪɴ...*
    ︱·˚🤍 Ojalá y lo violen los ngros.
    └╾ׅ╴ׂꨪ╌╼᪶╾᪶ ۪〫┄ׅ⃯፝֟╌╼᪶֘╾᪶╌ׅꨪ╶۪╼┘

> ${dev}`

      await conn.sendMessage(m.chat, {
        text,
        contextInfo: {
          mentionedJid: [who],
          isForwarded: true,
          forwardingScore: 999,
          externalAdReply: {
            title: `${await conn.getName(who)} ha salido de ${groupName}`,
            body: 'By Dev Criss',
            thumbnail: img,
            sourceUrl: insta,
            mediaType: 1,
            renderLargerThumbnail: true
          }
        }
      }, { quoted: fkontak })
    }
  }

  return true
}*/
//☕☕☕☕☕☕
import { WAMessageStubType } from '@whiskeysockets/baileys';
import fetch from 'node-fetch';
import canvafy from 'canvafy';

export async function before(m, { conn, participants, groupMetadata }) {
  if (!m.messageStubType || !m.isGroup) return true;

  let who = m.messageStubParameters[0];
  let taguser = `@${who.split('@')[0]}`;
  let chat = global.db.data.chats[m.chat];
  let defaultImage = 'https://files.catbox.moe/xr2m6u.jpg';
  let backgroundImage = 'https://files.catbox.moe/z4s6vg.jpg';
  let insta = 'https://instagram.com/dev.criss_vx';
  let dev = 'By Dev Criss';

  const groupName = groupMetadata.subject;
  const groupDesc = groupMetadata.desc || 'sin descripción';

  const getUserAvatar = async () => {
    try {
      return await conn.profilePictureUrl(who, 'image');
    } catch {
      return defaultImage;
    }
  };

  const generateImage = async (title, description) => {
    const avatar = await getUserAvatar();
    return await new canvafy.WelcomeLeave()
      .setAvatar(avatar)
      .setBackground('image', backgroundImage)
      .setTitle(title)
      .setDescription(description)
      .setBorder('#2a2e35')
      .setAvatarBorder('#2a2e35')
      .setOverlayOpacity(0.1)
      .build();
  };

  if (chat.welcome) {
    if (m.messageStubType === WAMessageStubType.GROUP_PARTICIPANT_ADD) {
      let text = chat.sWelcome
        ? chat.sWelcome
            .replace(/@user/g, taguser)
            .replace(/@group/g, groupName)
            .replace(/@desc/g, groupDesc)
        : `𓆩°»｡˚ ∾･⁙･ ღ ➵ ⁘ ➵ ღ ･⁙･∾ ˚ ｡«°𓆪
❍⌇─➭ *Wᴇʟᴄᴏᴍᴇ ᴛᴏ Gʀᴏᴜᴘ ::*
๑ ˚ ͙۪۪̥${taguser} 👋🏻꒱

┌ *\`ɢʀᴏᴜᴘ::\`*
  ☕ ᩙᩞ✑ ${groupName}
└┬ *ɴᴇᴡ ᴍᴇᴍʙᴇʀ*
    ︱·˚🌿 Disfruta del grupo.
    └╾ׅ╴ׂꨪ╌╼᪶╾᪶ ۪〫┄ׅ⃯፝֟╌╼᪶֘╾᪶╌ׅꨪ╶۪╼┘

> ${dev}`;

      let img = await generateImage('¡BIENVENIDO/A!', `Ahora somos ${participants.length + 1} miembros.`);

      await conn.sendMessage(m.chat, {
        image: img,
        caption: text,
        mentions: [who],
        contextInfo: {
          mentionedJid: [who],
          isForwarded: true,
          forwardingScore: 999,
          externalAdReply: {
            title: `${await conn.getName(who)}, bienvenido a ${groupName}`,
            body: dev,
            thumbnail: img,
            sourceUrl: insta,
            mediaType: 1,
            renderLargerThumbnail: true
          }
        }
      }, { quoted: fkontak });
    }

    if (
      m.messageStubType === WAMessageStubType.GROUP_PARTICIPANT_REMOVE ||
      m.messageStubType === WAMessageStubType.GROUP_PARTICIPANT_LEAVE
    ) {
      let text = chat.sBye
        ? chat.sBye
            .replace(/@user/g, taguser)
            .replace(/@group/g, groupName)
            .replace(/@desc/g, groupDesc)
        : `𓆩°»｡˚ ∾･⁙･ ღ ➵ ⁘ ➵ ღ ･⁙･∾ ˚ ｡«°𓆪
❍⌇─➭ *Sᴇᴇ ʏᴏᴜ Lᴀᴛᴇʀ ::*
๑ ˚ ͙۪۪̥${taguser} 🖕🏻꒱

┌ *\`ᴇx ᴍᴇᴍʙᴇʀ\`*
└┬ *Eɴ Fɪɴ...*
    ︱·˚🤍 Ojalá y lo violen los ngros.
    └╾ׅ╴ׂꨪ╌╼᪶╾᪶ ۪〫┄ׅ⃯፝֟╌╼᪶֘╾᪶╌ׅꨪ╶۪╼┘

> ${dev}`;

      let img = await generateImage('¡HASTA LUEGO!', `Ahora somos ${participants.length - 1} miembros.`);

      await conn.sendMessage(m.chat, {
        image: img,
        caption: text,
        mentions: [who],
        contextInfo: {
          mentionedJid: [who],
          isForwarded: true,
          forwardingScore: 999,
          externalAdReply: {
            title: `${await conn.getName(who)} ha salido de ${groupName}`,
            body: dev,
            thumbnail: img,
            sourceUrl: insta,
            mediaType: 1,
            renderLargerThumbnail: true
          }
        }
      }, { quoted: fkontak });
    }
  }

  return true;
}