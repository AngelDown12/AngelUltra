import fs from 'fs'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
import { promises } from 'fs'
import { join } from 'path'

let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, command }) => {
    try {
    let { exp, diamantes, level, role } = global.db.data.users[m.sender]
    let { min, xp, max } = xpRange(level, global.multiplier)
    let name = await conn.getName(m.sender)
    exp = exp || 'Desconocida';
    role = role || 'Aldeano';

        const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);

    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length

        await m.react('☁️')
        let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
        let perfil = await conn.profilePictureUrl(who, 'image').catch(_ => 'https://files.catbox.moe/pk3xxk.jpg')

const vid = ['https://files.catbox.moe/39rx3n.mp4', 'https://files.catbox.moe/5fbi9s.mp4', 'https://files.catbox.moe/biggyj.mp4']

        let menu = `
ㅤㅤㅤ⩁꯭ ͡  ͡ᩚ꯭ ꯭⩁ㅤㅤ𑁯🤍ᰍㅤㅤ⩁꯭ ͡  ͡ᩚ꯭ ꯭⩁
೯ ׅ 👤 ¡Hᴏʟᴀ! ¿Cᴏᴍᴏ Esᴛᴀ́s? ׄ ᦡᦡ
ㅤ꒰͜͡${taguser}
ㅤㅤ♡𑂳ᩙㅤ ּ ${saludo} ׄ ㅤタス

*🧇 Activo:* ${uptime}
*👥 Usuarios:* ${totalreg}
*🆙 Versión:* 3.0.0

*💎 Gemas:* ${diamantes}
*🍸 Exp:* ${exp}
*🫖 Nivel:* ${level}
*🍢 Rango:* ${role}
${readMore}
ㅤ ㅤ   乂 *ʟɪsᴛᴀ ᴅᴇ ᴄᴏᴍᴀɴᴅᴏs* 乂

𓂂𓏸  𐅹੭੭   *\`Mᧉ𝗇𝗎𝗌\`*  ${xmenus} ᩚ꤬ᰨᰍ
ര ׄ ${xmenus}˚ ${usedPrefix}menunsfw
ര ׄ ${xmenus}˚ ${usedPrefix}menuaudios
ര ׄ ${xmenus}˚ ${usedPrefix}menuff
ര ׄ ${xmenus}˚ ${usedPrefix}menuowner
ര ׄ ${xmenus}˚ ${usedPrefix}menulogos

𓂂𓏸  𐅹੭੭   *\`𝖨𝗇ẜᨣ\`*  ${xinfo} ᩚ꤬ᰨᰍ
ര ׄ ${xinfo}˚ ${usedPrefix}totalf
ര ׄ ${xinfo}˚ ${usedPrefix}grupos
ര ׄ ${xinfo}˚ ${usedPrefix}sugerir
ര ׄ ${xinfo}˚ ${usedPrefix}report
ര ׄ ${xinfo}˚ ${usedPrefix}owner
ര ׄ ${xinfo}˚ ${usedPrefix}ping
ര ׄ ${xinfo}˚ ${usedPrefix}uptime
ര ׄ ${xinfo}˚ ${usedPrefix}horario
ര ׄ ${xinfo}˚ ${usedPrefix}precios

𓂂𓏸  𐅹੭੭   *\`𝖮𝗇-𝖮ẜẜ\`*  ${xnable} ᩚ꤬ᰨᰍ
ര ׄ ${xnable}˚ ${usedPrefix}enable *opción*
ര ׄ ${xnable}˚ ${usedPrefix}disable *opción*
ര ׄ ${xnable}˚ ${usedPrefix}on *opción*
ര ׄ ${xnable}˚ ${usedPrefix}off *opción*
ര ׄ ${xnable}˚ ${usedPrefix}manual

𓂂𓏸  𐅹੭੭   *\`𝖣ᨣ𝗐𝗇𝗅ᨣ𝖺𝖽\`* ${xdownload} ᩚ꤬ᰨᰍ
ര ׄ ${xdownload}˚ ${usedPrefix}play *texto*
ര ׄ ${xdownload}˚ ${usedPrefix}aplay *texto*
ര ׄ ${xdownload}˚ ${usedPrefix}aplay2 *texto*
ര ׄ ${xdownload}˚ ${usedPrefix}splay *texto*
ര ׄ ${xdownload}˚ ${usedPrefix}ytmp4doc *texto*
ര ׄ ${xdownload}˚ ${usedPrefix}ytmp3doc *texto*
ര ׄ ${xdownload}˚ ${usedPrefix}apk *texto*
ര ׄ ${xdownload}˚ ${usedPrefix}aptoide *texto*
ര ׄ ${xdownload}˚ ${usedPrefix}modapk *texto*
ര ׄ ${xdownload}˚ ${usedPrefix}pinterest *texto*
ര ׄ ${xdownload}˚ ${usedPrefix}capcut *url*
ര ׄ ${xdownload}˚ ${usedPrefix}pindl *url*
ര ׄ ${xdownload}˚ ${usedPrefix}pinvid *url*
ര ׄ ${xdownload}˚ ${usedPrefix}ytmp4 *url*
ര ׄ ${xdownload}˚ ${usedPrefix}ytmp3 *url*
ര ׄ ${xdownload}˚ ${usedPrefix}tiktok *url*
ര ׄ ${xdownload}˚ ${usedPrefix}tiktok2 *url*
ര ׄ ${xdownload}˚ ${usedPrefix}instagram *url*
ര ׄ ${xdownload}˚ ${usedPrefix}facebook *url*
ര ׄ ${xdownload}˚ ${usedPrefix}mediafire *url*
ര ׄ ${xdownload}˚ ${usedPrefix}mega *url*
ര ׄ ${xdownload}˚ ${usedPrefix}playstore *url*
ര ׄ ${xdownload}˚ ${usedPrefix}xnxxdl *url*
ര ׄ ${xdownload}˚ ${usedPrefix}xvideosdl *url*
ര ׄ ${xdownload}˚ ${usedPrefix}pornhubdl *url*

𓂂𓏸  𐅹੭੭   *\`𝖲ᧉ𝖺ꭇ𝖼𝗁\`*  ${xsearch} ᩚ꤬ᰨᰍ
ര ׄ ${xsearch}˚ ${usedPrefix}scsearch *texto*
ര ׄ ${xsearch}˚ ${usedPrefix}aplaysearch *texto*
ര ׄ ${xsearch}˚ ${usedPrefix}ttsearch *texto*
ര ׄ ${xsearch}˚ ${usedPrefix}ttsearch2 *texto*
ര ׄ ${xsearch}˚ ${usedPrefix}ytsearch *texto*
ര ׄ ${xsearch}˚ ${usedPrefix}hpmsearch *texto*
ര ׄ ${xsearch}˚ ${usedPrefix}spotifysearch *texto*
ര ׄ ${xsearch}˚ ${usedPrefix}githubsearch *texto*
ര ׄ ${xsearch}˚ ${usedPrefix}playstoresearch *texto*
ര ׄ ${xsearch}˚ ${usedPrefix}xnxxsearch *texto*
ര ׄ ${xsearch}˚ ${usedPrefix}xvsearch *texto*
ര ׄ ${xsearch}˚ ${usedPrefix}pornhubsearch *texto*
ര ׄ ${xsearch}˚ ${usedPrefix}gnula *texto*
ര ׄ ${xsearch}˚ ${usedPrefix}mercadolibre *texto*
ര ׄ ${xsearch}˚ ${usedPrefix}ffstalk *id*
ര ׄ ${xsearch}˚ ${usedPrefix}ttstalk *username*
ര ׄ ${xsearch}˚ ${usedPrefix}igstalk *username*

𓂂𓏸  𐅹੭੭   *\`𝖨𝗇ƚᧉ𝖨ı𝗀ᧉ𝗇𝖼ı𝖺𝗌\`*  ${xia} ᩚ꤬ᰨᰍ
ര ׄ ${xia}˚ ${usedPrefix}luminai *texto*
ര ׄ ${xia}˚ ${usedPrefix}chatgpt *texto*
ര ׄ ${xia}˚ ${usedPrefix}flux *texto*
ര ׄ ${xia}˚ ${usedPrefix}toreal *texto*
ര ׄ ${xia}˚ ${usedPrefix}toanime *texto*

𓂂𓏸  𐅹੭੭   *\`𝖫ı𝗌ƚ𝖺𝗌\`*  ${xlist} ᩚ꤬ᰨᰍ
ര ׄ ${xlist}˚ ${usedPrefix}infem4 *hr + p*
ര ׄ ${xlist}˚ ${usedPrefix}inmasc4 *hr + p*
ര ׄ ${xlist}˚ ${usedPrefix}inmixto4 *hr + p*
ര ׄ ${xlist}˚ ${usedPrefix}infem6 *hr + p*
ര ׄ ${xlist}˚ ${usedPrefix}inmasc6 *hr + p*
ര ׄ ${xlist}˚ ${usedPrefix}inmixto6 *hr + p*
ര ׄ ${xlist}˚ ${usedPrefix}v4fem *hr + p*
ര ׄ ${xlist}˚ ${usedPrefix}v4masc *hr + p*
ര ׄ ${xlist}˚ ${usedPrefix}v4mixto *hr + p*
ര ׄ ${xlist}˚ ${usedPrefix}v6fem *hr + p*
ര ׄ ${xlist}˚ ${usedPrefix}v6masc *hr + p*
ര ׄ ${xlist}˚ ${usedPrefix}v6mixto *hr + p*

𓂂𓏸  𐅹੭੭   *\`𝖥𝗋𝖺𝗌ᧉ𝗌\`* ${xfrases} ᩚ꤬ᰨᰍ
ര ׄ ${xfrases}˚ ${usedPrefix}piropo
ര ׄ ${xfrases}˚ ${usedPrefix}consejo
ര ׄ ${xfrases}˚ ${usedPrefix}fraseromantica

𓂂𓏸  𐅹੭੭   *\`𝖢ᨣ𝗇𝗏ᧉ𝗋ƚᧉ𝗋𝗌\`*  ${xconverter} ᩚ꤬ᰨᰍ
ര ׄ ${xconverter}˚ ${usedPrefix}tourl *img*
ര ׄ ${xconverter}˚ ${usedPrefix}tourl *aud*
ര ׄ ${xconverter}˚ ${usedPrefix}toptt *aud*
ര ׄ ${xconverter}˚ ${usedPrefix}toptt *vid*
ര ׄ ${xconverter}˚ ${usedPrefix}tourl *vid*
ര ׄ ${xconverter}˚ ${usedPrefix}tomp3 *vid*
ര ׄ ${xconverter}˚ ${usedPrefix}tovid *sticker*
ര ׄ ${xconverter}˚ ${usedPrefix}toimg *sticker*

𓂂𓏸  𐅹੭੭   *\`𝖳ᨣᨣ𝗅𝗌\`*  ${xtools} ᩚ꤬ᰨᰍ
ര ׄ ${xtools}˚ ${usedPrefix}clima *texto*
ര ׄ ${xtools}˚ ${usedPrefix}readmore *texto*
ര ׄ ${xtools}˚ ${usedPrefix}read *texto*
ര ׄ ${xtools}˚ ${usedPrefix}fake *texto + user + texto*
ര ׄ ${xtools}˚ ${usedPrefix}traducir *idioma + texto*
ര ׄ ${xtools}˚ ${usedPrefix}hd *img*
ര ׄ ${xtools}˚ ${usedPrefix}remini *img*
ര ׄ ${xtools}˚ ${usedPrefix}background *img*
ര ׄ ${xtools}˚ ${usedPrefix}whatmusic *aud*
ര ׄ ${xtools}˚ ${usedPrefix}whatmusic *vid*
ര ׄ ${xtools}˚ ${usedPrefix}flag *país*
ര ׄ ${xtools}˚ ${usedPrefix}inspect *link*
ര ׄ ${xtools}˚ ${usedPrefix}inspeccionar *link*
ര ׄ ${xtools}˚ ${usedPrefix}nuevafotochannel
ര ׄ ${xtools}˚ ${usedPrefix}nosilenciarcanal
ര ׄ ${xtools}˚ ${usedPrefix}silenciarcanal
ര ׄ ${xtools}˚ ${usedPrefix}seguircanal
ര ׄ ${xtools}˚ ${usedPrefix}avisoschannel
ര ׄ ${xtools}˚ ${usedPrefix}resiviravisos
ര ׄ ${xtools}˚ ${usedPrefix}eliminarfotochannel
ര ׄ ${xtools}˚ ${usedPrefix}reactioneschannel
ര ׄ ${xtools}˚ ${usedPrefix}reaccioneschannel
ര ׄ ${xtools}˚ ${usedPrefix}nuevonombrecanal
ര ׄ ${xtools}˚ ${usedPrefix}nuevadescchannel

𓂂𓏸  𐅹੭੭   *\`𝖦ꭇ𝗎𝗉ᨣ𝗌\`*  ${xgc} ᩚ꤬ᰨᰍ
ര ׄ ${xgc}˚ ${usedPrefix}add *número*
ര ׄ ${xgc}˚ ${usedPrefix}grupo *abrir / cerrar*
ര ׄ ${xgc}˚ ${usedPrefix}grouptime *tiempo*
ര ׄ ${xgc}˚ ${usedPrefix}notify *texto*
ര ׄ ${xgc}˚ Aviso *texto*
ര ׄ ${xgc}˚ Admins *texto*
ര ׄ ${xgc}˚ ${usedPrefix}todos *texto*
ര ׄ ${xgc}˚ ${usedPrefix}setwelcome *texto*
ര ׄ ${xgc}˚ ${usedPrefix}setremove *texto*
ര ׄ ${xgc}˚ ${usedPrefix}setbye *texto*
ര ׄ ${xgc}˚ ${usedPrefix}groupdesc *texto*
ര ׄ ${xgc}˚ ${usedPrefix}promote *@tag*
ര ׄ ${xgc}˚ ${usedPrefix}demote *@tag*
ര ׄ ${xgc}˚ ${usedPrefix}kick *@tag*
ര ׄ ${xgc}˚ ${usedPrefix}mute *@tag*
ര ׄ ${xgc}˚ ${usedPrefix}inactivos *opción*
ര ׄ ${xgc}˚ ${usedPrefix}tagnum *prefix*
ര ׄ ${xgc}˚ ${usedPrefix}link
ര ׄ ${xgc}˚ ${usedPrefix}fantasmas

𓂂𓏸  𐅹੭੭   *\`𝖤ẜᧉ𝖼ƚ𝗌\`*   🪻ᩚ꤬ᰨᰍ
ര ׄ 🪻˚ ${usedPrefix}bass *vid*
ര ׄ 🪻˚ ${usedPrefix}blown *vid*
ര ׄ 🪻˚ ${usedPrefix}deep *vid*
ര ׄ 🪻˚ ${usedPrefix}earrape *vid*
ര ׄ 🪻˚ ${usedPrefix}fast *vid*
ര ׄ 🪻˚ ${usedPrefix}smooth *vid*
ര ׄ 🪻˚ ${usedPrefix}tupai *vid*
ര ׄ 🪻˚ ${usedPrefix}nightcore *vid*
ര ׄ 🪻˚ ${usedPrefix}reverse *vid*
ര ׄ 🪻˚ ${usedPrefix}robot *vid*
ര ׄ 🪻˚ ${usedPrefix}slow *vid*
ര ׄ 🪻˚ ${usedPrefix}squirrel *vid*
ര ׄ 🪻˚ ${usedPrefix}chipmunk *vid*
ര ׄ 🪻˚ ${usedPrefix}reverb *vid*
ര ׄ 🪻˚ ${usedPrefix}chorus *vid*
ര ׄ 🪻˚ ${usedPrefix}flanger *vid*
ര ׄ 🪻˚ ${usedPrefix}distortion *vid*
ര ׄ 🪻˚ ${usedPrefix}pitch *vid*
ര ׄ 🪻˚ ${usedPrefix}highpass *vid*
ര ׄ 🪻˚ ${usedPrefix}lowpass *vid*
ര ׄ 🪻˚ ${usedPrefix}underwater *vid*

𓂂𓏸  𐅹੭੭   *\`𝖥𝗎𝗇\`*   🥯ᩚ꤬ᰨᰍ
ര ׄ 🥯˚ ${usedPrefix}gay *@tag*
ര ׄ 🥯˚ ${usedPrefix}lesbiana *@tag*
ര ׄ 🥯˚ ${usedPrefix}pajero *@tag*
ര ׄ 🥯˚ ${usedPrefix}pajera *@tag*
ര ׄ 🥯˚ ${usedPrefix}puto *@tag*
ര ׄ 🥯˚ ${usedPrefix}puta *@tag*
ര ׄ 🥯˚ ${usedPrefix}manco *@tag*
ര ׄ 🥯˚ ${usedPrefix}manca *@tag*
ര ׄ 🥯˚ ${usedPrefix}rata *@tag*
ര ׄ 🥯˚ ${usedPrefix}prostituto *@tag*
ര ׄ 🥯˚ ${usedPrefix}prostituta *@tag*
ര ׄ 🥯˚ ${usedPrefix}doxear *@tag*
ര ׄ 🥯˚ ${usedPrefix}jalamela *@tag*
ര ׄ 🥯˚ ${usedPrefix}simi *texto*
ര ׄ 🥯˚ ${usedPrefix}pregunta *texto*
ര ׄ 🥯˚ ${usedPrefix}genio *texto*
ര ׄ 🥯˚ ${usedPrefix}top
ര ׄ 🥯˚ ${usedPrefix}sorteo
ര ׄ 🥯˚ ${usedPrefix}piropo
ര ׄ 🥯˚ ${usedPrefix}chiste
ര ׄ 🥯˚ ${usedPrefix}facto
ര ׄ 🥯˚ ${usedPrefix}verdad
ര ׄ 🥯˚ ${usedPrefix}pareja
ര ׄ 🥯˚ ${usedPrefix}parejas
ര ׄ 🥯˚ ${usedPrefix}love
ര ׄ 🥯˚ ${usedPrefix}personalidad

𓂂𓏸  𐅹੭੭   *\`𝖩𝗎ᧉ𝗀ᨣ𝗌\`*   🐚ᩚ꤬ᰨᰍ
ര ׄ 🐚˚ ${usedPrefix}pregunta *texto*
ര ׄ 🐚˚ ${usedPrefix}ttt *texto*
ര ׄ 🐚˚ ${usedPrefix}ptt *opción*
ര ׄ 🐚˚ ${usedPrefix}delttt
ര ׄ 🐚˚ ${usedPrefix}acertijo
ര ׄ 🐚˚ ${usedPrefix}trivia

𓂂𓏸  𐅹੭੭   *\`𝖠𝗇ı𝗆ᧉ\`*  ${xanime} ᩚ꤬ᰨᰍ
ര ׄ ${xanime}˚ ${usedPrefix}messi
ര ׄ ${xanime}˚ ${usedPrefix}cr7

𓂂𓏸  𐅹੭੭   *\`𝖦ıẜ𝗌-𝖭𝗌ẜɯ\`*  ${xnsfw} ᩚ꤬ᰨᰍ
ര ׄ ${xnsfw}˚ ${usedPrefix}violar *@tag*
ര ׄ ${xnsfw}˚ ${usedPrefix}follar *@tag*
ര ׄ ${xnsfw}˚ ${usedPrefix}anal *@tag*
ര ׄ ${xnsfw}˚ ${usedPrefix}coger *@tag*
ര ׄ ${xnsfw}˚ ${usedPrefix}coger2 *@tag*
ര ׄ ${xnsfw}˚ ${usedPrefix}penetrar *@tag*
ര ׄ ${xnsfw}˚ ${usedPrefix}sexo *@tag*
ര ׄ ${xnsfw}˚ ${usedPrefix}rusa *@tag*
ര ׄ ${xnsfw}˚ ${usedPrefix}sixnine *@tag*
ര ׄ ${xnsfw}˚ ${usedPrefix}pies *@tag*
ര ׄ ${xnsfw}˚ ${usedPrefix}mamada *@tag*
ര ׄ ${xnsfw}˚ ${usedPrefix}lickpussy *@tag*
ര ׄ ${xnsfw}˚ ${usedPrefix}grabboobs *@tag*
ര ׄ ${xnsfw}˚ ${usedPrefix}suckboobs *@tag*
ര ׄ ${xnsfw}˚ ${usedPrefix}cum *@tag*
ര ׄ ${xnsfw}˚ ${usedPrefix}fap *@tag*
ര ׄ ${xnsfw}˚ ${usedPrefix}manosear *@tag*
ര ׄ ${xnsfw}˚ ${usedPrefix}lesbianas *@tag*

𓂂𓏸  𐅹੭੭   *\`𝖲ƚ𝗂𝖼𝗄ᧉꭇ\`*  ${xsticker} ᩚ꤬ᰨᰍ
ര ׄ ${xsticker}˚ ${usedPrefix}sticker *img*
ര ׄ ${xsticker}˚ ${usedPrefix}sticker *vid*
ര ׄ ${xsticker}˚ ${usedPrefix}brat *texto*
ര ׄ ${xsticker}˚ ${usedPrefix}bratv *texto*
ര ׄ ${xsticker}˚ ${usedPrefix}qc *texto*
ര ׄ ${xsticker}˚ ${usedPrefix}dado
ര ׄ ${xsticker}˚ ${usedPrefix}reloj

𓂂𓏸  𐅹੭੭   *\`𝖱𝗉𝗀\`*  ${xrpg} ᩚ꤬ᰨᰍ
ര ׄ ${xrpg}˚ ${usedPrefix}minar
ര ׄ ${xrpg}˚ ${usedPrefix}cofre
ര ׄ ${xrpg}˚ ${usedPrefix}slut
ര ׄ ${xrpg}˚ ${usedPrefix}nivel
ര ׄ ${xrpg}˚ ${usedPrefix}ruleta

𓂂𓏸  𐅹੭੭   *\`𝖱ᧉ𝗀ı𝗌𝗍𝗋ᨣ\`*   🎣ᩚ꤬ᰨᰍ
ര ׄ 🎣˚ ${usedPrefix}perfil
ര ׄ 🎣˚ ${usedPrefix}reg
ര ׄ 🎣˚ ${usedPrefix}unreg

𓂂𓏸  𐅹੭੭   *\`𝖮ɯ𝗇ᧉꭇ\`*  ${xowner} ᩚ꤬ᰨᰍ
ര ׄ ${xowner}˚ ${usedPrefix}salir
ര ׄ ${xowner}˚ ${usedPrefix}update
ര ׄ ${xowner}˚ ${usedPrefix}blocklist
ര ׄ ${xowner}˚ ${usedPrefix}grouplist
ര ׄ ${xowner}˚ ${usedPrefix}restart
ര ׄ ${xowner}˚ ${usedPrefix}join
ര ׄ ${xowner}˚ ${usedPrefix}chetar
ര ׄ ${xowner}˚ ${usedPrefix}unbanuser
`.trim()

        await conn.sendMessage(m.chat, {
            video: { url: vid.getRandom() }, // Vid
            caption: menu,
            contextInfo: {
                mentionedJid: [m.sender],
                isForwarded: true,
                forwardingScore: 999,
                externalAdReply: {
                    title: '⏤͟͞ू⃪ ፝͜⁞Sʜᴀᴅᴏᴡ✰⃔࿐\nNᴜᴇᴠᴀ Vᴇʀsɪᴏɴ Uʟᴛʀᴀ 💫',
                    thumbnailUrl: perfil,
                    mediaType: 1,
                    renderLargerThumbnail: false,
                },
            },
            gifPlayback: true,
            gifAttribution: 0
        }, { quoted: null })
    } catch (e) {
        await m.reply(`*☕ Ocurrió un error al enviar el menú.*\n\n${e}`)
    }
}

handler.help = ['menuff'];
handler.tags = ['main'];
handler.command = /^(menu|menú|memu|memú|help|info|comandos|2help|menu1.2|ayuda|commands|commandos|cmd)$/i;
handler.fail = null;

export default handler;

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}