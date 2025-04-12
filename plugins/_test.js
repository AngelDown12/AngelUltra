import fetch from 'node-fetch';

let handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) {
    return conn.reply(
      m.chat,
      `🧇 Por favor, ingresa un enlace o texto para buscar en Spotify.\n> *\`Ejemplo:\`* ${usedPrefix + command} https://open.spotify.com/track/35ttE4t8lQZA2vuCYDg4G7\n> *\`Ejemplo:\`* ${usedPrefix + command} Gata Only`,
      m
    );
  }

  await m.react('🕓');

  try {
    let url = text;

    // Si no es un link de Spotify, buscar
    if (!text.includes('spotify.com/track')) {
      const searchRes = await fetch(`https://delirius-apiofc.vercel.app/search/spotify?q=${encodeURIComponent(text)}`);
      const searchJson = await searchRes.json();
      url = searchJson?.data?.[0]?.url;

      if (!url) {
        await m.react('❌');
        return conn.reply(m.chat, '*❌ No se encontraron resultados para esa búsqueda.*', m);
      }
    }

    // Descargar desde la API
    const response = await fetch(`https://dark-core-api.vercel.app/api/download/spotify?key=api&url=${encodeURIComponent(url)}`);
    const result = await response.json();

    if (result.success) {
      const { title, thumbnail, downloadLink } = result;
      const mensaje = `🌴 *\`Título:\`* ${title}`;

      await conn.sendFile(m.chat, thumbnail, 'cover.jpg', mensaje, m);
      await conn.sendMessage(m.chat, { audio: { url: downloadLink }, mimetype: 'audio/mpeg' }, { quoted: m });
      await m.react('✅');
    } else {
      await m.react('❌');
      conn.reply(m.chat, '*⚠️ No se pudo obtener la música para este enlace o búsqueda.*', m);
    }
  } catch (error) {
    console.error(error);
    await m.react('❌');
    conn.reply(m.chat, '❌ Ocurrió un error al procesar tu solicitud.', m);
  }
};

handler.help = ['spotify <url o texto>'];
handler.tags = ['descargas'];
handler.command = /^(spo)$/i;

export default handler;