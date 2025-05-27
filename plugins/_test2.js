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

export default handler;*/
import { randomBytes } from "crypto"
import axios from "axios"

let handler = async (m, { conn, text }) => {
    if (!text) throw `${emoji} ¿Cómo puedo ayudarte hoy?`;
    try {
        conn.reply(m.chat, m);
        let data = await chatGpt(text);
        await conn.sendMessage(m.chat, { 
            text: '*Demo:* ' + data
        }, { quoted: m });

    } catch (err) {
        m.reply('error cik:/ ' + err);
    }
}

handler.help = ['demo *<texto>*'];
handler.command = ['demo', 'openai'];
handler.tags = ['ai'];
handler.group = true;

export default handler;

async function chatGpt(query) {
    try {
        const { id_ } = (await axios.post("https://chat.chatgptdemo.net/new_chat", { user_id: "crqryjoto2h3nlzsg" }, { headers: { "Content-Type": "application/json" } })).data;

        const json = { "question": query, "chat_id": id_, "timestamp": new Date().getTime() };

        const { data } = await axios.post("https://chat.chatgptdemo.net/chat_api_stream", json, { headers: { "Content-Type": "application/json" } });
        const cek = data.split("data: ");

        let res = [];

        for (let i = 1; i < cek.length; i++) {
            if (cek[i].trim().length > 0) {
                res.push(JSON.parse(cek[i].trim()));
            }
        }

        return res.map((a) => a.choices[0].delta.content).join("");

    } catch (error) {
        console.error("Error parsing JSON:", error);
        return 404;
    }
}