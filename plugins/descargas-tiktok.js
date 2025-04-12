import fetch from 'node-fetch'

var handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) {
        return m.reply(`*🥞 Por favor, ingresa un link de TikTok.*`);
    }

    if (!args[0].match(/(https?:\/\/)?(www\.)?(vm\.|vt\.)?tiktok\.com\//)) {
        return m.reply(`*⚠️ El link ingresado no es válido. Asegúrese de que sea un link de TikTok.*`);
    }

    try {
        await m.react('⌛');  // Reacción de espera

        const tiktokData = await tiktokdl(args[0]);

        if (!tiktokData) {
            await m.react('❌');  // Reacción de error
            return m.reply("*❌ Error de la API*");
        }

        const videoURL = tiktokData.data.play;
        const videoURLWatermark = tiktokData.data.wmplay;
        const infonya_gan = `*📖 Descripción:*\n> ${tiktokData.data.title}`;

        if (videoURL || videoURLWatermark) {
            await conn.sendFile(m.chat, videoURL, "tiktok.mp4", "\`\`\`◜TikTok - Download◞\`\`\`" + `\n\n${infonya_gan}`, m);
            await m.react('✅');  // Reacción de éxito
        } else {
            await m.react('❌');  // Reacción de error
            return m.reply("*❌ No se pudo descargar.*");
        }
    } catch (error1) {
        await m.react('❌');  // Reacción de error
        return conn.reply(m.chat, `Error: ${error1}`, m);
    }
};

handler.help = ['tiktok']
handler.tags = ['descargas']
handler.command = /^(tt|tiktok)$/i;

export default handler

async function tiktokdl(url) {
    let tikwm = `https://www.tikwm.com/api/?url=${url}?hd=1`
    let response = await (await fetch(tikwm)).json()
    return response
}