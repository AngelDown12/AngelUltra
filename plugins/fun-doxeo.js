
import fetch from 'node-fetch';
import PhoneNumber from 'awesome-phonenumber';
import { performance } from 'perf_hooks';

const handler = async (m, { conn, text }) => {
  if (!text) return m.reply(`*${xfun} Por favor, menciona a la persona que deseas doxear.*`);

  const mentionedJid = m.mentionedJid && m.mentionedJid[0];
  if (!mentionedJid) return m.reply('*⚠️ Debes etiquetar a alguien.*');

  const user = mentionedJid.split('@')[0]; // solo el número
  const pn = new PhoneNumber('+' + user);
  const regionCode = pn.getRegionCode();

  const countryNames = {
    US: 'Estados Unidos 🇺🇸',
    MX: 'México 🇲🇽',
    AR: 'Argentina 🇦🇷',
    PE: 'Perú 🇵🇪',
    CO: 'Colombia 🇨🇴',
    BR: 'Brasil 🇧🇷',
    CL: 'Chile 🇨🇱',
    VE: 'Venezuela 🇻🇪',
    EC: 'Ecuador 🇪🇨',
    BO: 'Bolivia 🇧🇴',
    PY: 'Paraguay 🇵🇾',
    UY: 'Uruguay 🇺🇾',
    GT: 'Guatemala 🇬🇹',
    HN: 'Honduras 🇭🇳',
    NI: 'Nicaragua 🇳🇮',
    SV: 'El Salvador 🇸🇻',
    CR: 'Costa Rica 🇨🇷',
    PA: 'Panamá 🇵🇦',
    DO: 'República Dominicana 🇩🇴',
    CU: 'Cuba 🇨🇺',
    ES: 'España 🇪🇸',
    FR: 'Francia 🇫🇷',
    IT: 'Italia 🇮🇹',
    DE: 'Alemania 🇩🇪',
    GB: 'Reino Unido 🇬🇧',
  };

  const pais = countryNames[regionCode] || 'Desconocido';

  const sleep = (ms) => new Promise(res => setTimeout(res, ms));
  const randomIP = () => `${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}`;
  const randomIPv6 = () => Array(8).fill().map(() => Math.floor(Math.random() * 65536).toString(16)).join(':');
  const randomMAC = () => Array(6).fill().map(() => Math.floor(Math.random() * 256).toString(16).padStart(2, '0')).join(':');
  const randomSSN = () => `${Math.floor(100 + Math.random() * 900)}-${Math.floor(10 + Math.random() * 90)}-${Math.floor(1000 + Math.random() * 9000)}`;

  const boosts = [
    '*☠ ¡¡Iniciando Doxeo!! ☠*',
    '*25% completado...*',
    '*47% completado...*',
    '*62% completado...*',
    '*97% completado...*'
  ];

  let sent = await conn.sendMessage(m.chat, { text: boosts[0] }, { quoted: m });
  for (let i = 1; i < boosts.length; i++) {
    await sleep(800);
    await conn.sendMessage(m.chat, { text: boosts[i], edit: sent.key });
  }

  const start = performance.now();
  await sleep(500 + Math.floor(Math.random() * 500));
  const end = performance.now();
  const speed = ((end - start) / 1000).toFixed(4);

  const doxeo = `*\`👨🏻‍💻DOXEO REALIZADO EXITOSAMENTE\`*
> *Realizado en* \`${speed} segundos\`

*RESULTADOS OBTENIDOS - V5*

*Nombre:* ${text}
*País:* ${pais}
*IP Pública:* ${randomIP()}
*IP Privada:* 192.168.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}
*IPv6:* ${randomIPv6()}
*MAC:* ${randomMAC()}
*SSN:* ${randomSSN()}
*ISP:* MoviNet Corp
*DNS:* 8.8.8.8
*ALT DNS:* 1.1.1.1
*GATEWAY:* 192.168.0.1
*TCP PUERTOS ABIERTOS:* 80, 443, 22
*UDP PUERTOS ABIERTOS:* 53, 67
*Vendedor del router:* TP-Link Technologies Co., Ltd.
*Buil ID:* RP3A.210720.052
*Technology:* Li-ion
*Dispositivo:* Android 12 - SMA-G998B
*Conexión:* Datos Móviles
*HOSTNAME:* host-${Math.floor(Math.random() * 255)}-${Math.floor(Math.random() * 255)}.net.local

*SHADOW ULTRA:* FREE VS`;

  await sleep(1000);
  await conn.sendMessage(m.chat, { text: doxeo, edit: sent.key, mentions: conn.parseMention(doxeo) });
};

handler.help = ['doxear'];
handler.tags = ['fun'];
handler.command = /^doxxeo|doxxear|doxeo|doxear|doxxing|doxing|dox$/i;
handler.group = true;

export default handler;