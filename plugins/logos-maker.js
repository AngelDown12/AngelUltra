/*import {Maker} from 'imagemaker.js';
const handler = async (m, {conn, args, command, usedPrefix}) => {
  const response = args.join(' ').split('|');
  if (!args[0]) throw '*[❗] 𝙄𝙉𝙂𝙍𝙀𝙎𝙀 𝙐𝙉 𝙏𝙀𝙓𝙏𝙊*';
  if (command == 'logocorazon') {
    try {
      await conn.reply(m.chat, '*[❗] 𝙀𝙇𝘼𝘽𝙊𝙍𝘼𝙉𝘿𝙊 𝙇𝙊𝙂𝙊, 𝘼𝙂𝙐𝘼𝙍𝘿𝙀 𝙐𝙉 𝙋𝙊𝘾𝙊...*', m);
      const res = await new Maker().Ephoto360('https://en.ephoto360.com/text-heart-flashlight-188.html', [response[0]]);
      await conn.sendFile(m.chat, res.imageUrl, 'error.jpg', null, m);
    } catch {
      await conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙀𝙍𝙍𝙊𝙍. 𝙋𝙊𝙍 𝙁𝘼𝙑𝙊𝙍, 𝙑𝙐𝙀𝙇𝙑𝘼 𝘼 𝙄𝙉𝙏𝙀𝙉𝙏𝘼𝙍𝙇𝙊*', m);
    }
  }
  if (command == 'logochristmas') {
    try {
      await conn.reply(m.chat, '*[❗] 𝙀𝙇𝘼𝘽𝙊𝙍𝘼𝙉𝘿𝙊 𝙇𝙊𝙂𝙊, 𝘼𝙂𝙐𝘼𝙍𝘿𝙀 𝙐𝙉 𝙋𝙊𝘾𝙊...*', m);
      const res2 = await new Maker().Ephoto360('https://en.ephoto360.com/christmas-effect-by-name-376.html', [response[0]]);
      await conn.sendFile(m.chat, res2.imageUrl, 'error.jpg', null, m);
    } catch {
      await conn.reply(m.chat, '*[❗] 𝙀𝙍𝙍𝙊𝙍. 𝙋𝙊𝙍 𝙁𝘼𝙑𝙊𝙍, 𝙑𝙐𝙀𝙇𝙑𝘼 𝘼 𝙄𝙉𝙏𝙀𝙉𝙏𝘼𝙍𝙇𝙊*', m);
    }
  }
  if (command == 'logopareja') {
    try {
      await conn.reply(m.chat, '*[❗] 𝙀𝙇𝘼𝘽𝙊𝙍𝘼𝙉𝘿𝙊 𝙇𝙊𝙂𝙊, 𝘼𝙂𝙐𝘼𝙍𝘿𝙀 𝙐𝙉 𝙋𝙊𝘾𝙊...*', m);
      const res = await new Maker().Ephoto360('https://en.ephoto360.com/sunlight-shadow-text-204.html', [response[0]]);
      await conn.sendFile(m.chat, res.imageUrl, 'error.jpg', null, m);
    } catch {
      await conn.reply(m.chat, '*[❗] 𝙀𝙍𝙍𝙊𝙍. 𝙋𝙊𝙍 𝙁𝘼𝙑𝙊𝙍, 𝙑𝙐𝙀𝙇𝙑𝘼 𝘼 𝙄𝙉𝙏𝙀𝙉𝙏𝘼𝙍𝙇𝙊*', m);
    }
  }
  if (command == 'logoglitch') {
    try {
      await conn.reply(m.chat, '*[❗] 𝙀𝙇𝘼𝘽𝙊𝙍𝘼𝙉𝘿𝙊 𝙇𝙊𝙂𝙊, 𝘼𝙂𝙐𝘼𝙍𝘿𝙀 𝙐𝙉 𝙋𝙊𝘾𝙊...*', m);
      const res = await new Maker().Ephoto360('https://en.ephoto360.com/create-digital-glitch-text-effects-online-767.html', [response[0]]);
      await conn.sendFile(m.chat, res.imageUrl, 'error.jpg', null, m);
    } catch {
      await conn.reply(m.chat, '*[❗] 𝙀𝙍𝙍𝙊𝙍. 𝙋𝙊𝙍 𝙁𝘼𝙑𝙊𝙍, 𝙑𝙐𝙀𝙇𝙑𝘼 𝘼 𝙄𝙉𝙏𝙀𝙉𝙏𝘼𝙍𝙇𝙊*', m);
    }
  }
  if (command == 'logosad') {
    try {
      await conn.reply(m.chat, '*[❗] 𝙀𝙇𝘼𝘽𝙊𝙍𝘼𝙉𝘿𝙊 𝙇𝙊𝙂𝙊, 𝘼𝙂𝙐𝘼𝙍𝘿𝙀 𝙐𝙉 𝙋𝙊𝘾𝙊...*', m);
      const res = await new Maker().Ephoto360('https://en.ephoto360.com/write-text-on-wet-glass-online-589.html', [response[0]]);
      await conn.sendFile(m.chat, res.imageUrl, 'error.jpg', null, m);
    } catch {
      await conn.reply(m.chat, '*[❗] 𝙀𝙍𝙍𝙊𝙍. 𝙋𝙊𝙍 𝙁𝘼𝙑𝙊𝙍, 𝙑𝙐𝙀𝙇𝙑𝘼 𝘼 𝙄𝙉𝙏𝙀𝙉𝙏𝘼𝙍𝙇𝙊*', m);
    }
  }
if (command == 'logogaming') {
  try {
    await conn.reply(m.chat, '*[❗] 𝙀𝙇𝘼𝘽𝙊𝙍𝘼𝙉𝘿𝙊 𝙇𝙊𝙂𝙊, 𝘼𝙂𝙐𝘼𝙍𝘿𝙀 𝙐𝙉 𝙋𝙊𝘾𝙊...*', m);
    const res = await new Maker().Ephoto360('https://en.ephoto360.com/make-team-logo-online-free-432.html', [response[0]]);
    await conn.sendFile(m.chat, res.imageUrl, 'error.jpg', null, m);
  } catch {
    await conn.reply(m.chat, '*[❗] 𝙀𝙍𝙍𝙊𝙍. 𝙋𝙊𝙍 𝙁𝘼𝙑𝙊𝙍, 𝙑𝙐𝙀𝙇𝙑𝘼 𝘼 𝙄𝙉𝙏𝙀𝙉𝙏𝘼𝙍𝙇𝙊*', m);
  }
}
if (command == 'logosolitario') {
  try {
    await conn.reply(m.chat, '*[❗] 𝙀𝙇𝘼𝘽𝙊𝙍𝘼𝙉𝘿𝙊 𝙇𝙊𝙂𝙊, 𝘼𝙂𝙐𝘼𝙍𝘿𝙀 𝙐𝙉 𝙋𝙊𝘾𝙊...*', m);
    const res = await new Maker().Ephoto360('https://en.ephoto360.com/create-typography-text-effect-on-pavement-online-774.html', [response[0]]);
    await conn.sendFile(m.chat, res.imageUrl, 'error.jpg', null, m);
  } catch {
    await conn.reply(m.chat, '*[❗] 𝙀𝙍𝙍𝙊𝙍. 𝙋𝙊𝙍 𝙁𝘼𝙑𝙊𝙍, 𝙑𝙐𝙀𝙇𝙑𝘼 𝘼 𝙄𝙉𝙏𝙀𝙉𝙏𝘼𝙍𝙇𝙊*', m);
  }
}
if (command == 'logodragonball') {
  try {
    await conn.reply(m.chat, '*[❗] 𝙀𝙇𝘼𝘽𝙊𝙍𝘼𝙉𝘿𝙊 𝙇𝙊𝙂𝙊, 𝘼𝙂𝙐𝘼𝙍𝘿𝙀 𝙐𝙉 𝙋𝙊𝘾𝙊...*', m);
    const res = await new Maker().Ephoto360('https://en.ephoto360.com/create-dragon-ball-style-text-effects-online-809.html', [response[0]]);
    await conn.sendFile(m.chat, res.imageUrl, 'error.jpg', null, m);
  } catch {
    await conn.reply(m.chat, '*[❗] 𝙀𝙍𝙍𝙊𝙍. 𝙋𝙊𝙍 𝙁𝘼𝙑𝙊𝙍, 𝙑𝙐𝙀𝙇𝙑𝘼 𝘼 𝙄𝙉𝙏𝙀𝙉𝙏𝘼𝙍𝙇𝙊*', m);
  }
}
if (command == 'logoneon') {
  try {
    await conn.reply(m.chat, '*[❗] 𝙀𝙇𝘼𝘽𝙊𝙍𝘼𝙉𝘿𝙊 𝙇𝙊𝙂𝙊, 𝘼𝙂𝙐𝘼𝙍𝘿𝙀 𝙐𝙉 𝙋𝙊𝘾𝙊...*', m);
    const res = await new Maker().Ephoto360('https://en.ephoto360.com/create-impressive-neon-glitch-text-effects-online-768.html', [response[0]]);
    await conn.sendFile(m.chat, res.imageUrl, 'error.jpg', null, m);
  } catch {
    await conn.reply(m.chat, '*[❗] 𝙀𝙍𝙍𝙊𝙍. 𝙋𝙊𝙍 𝙁𝘼𝙑𝙊𝙍, 𝙑𝙐𝙀𝙇𝙑𝘼 𝘼 𝙄𝙉𝙏𝙀𝙉𝙏𝘼𝙍𝙇𝙊*', m);
  }
}
if (command == 'logogatito') {
  try {
    await conn.reply(m.chat, '*[❗] 𝙀𝙇𝘼𝘽𝙊𝙍𝘼𝙉𝘿𝙊 𝙇𝙊𝙂𝙊, 𝘼𝙂𝙐𝘼𝙍𝘿𝙀 𝙐𝙉 𝙋𝙊𝘾𝙊...*', m);
    const res = await new Maker().Ephoto360('https://en.ephoto360.com/handwritten-text-on-foggy-glass-online-680.html', [response[0]]);
    await conn.sendFile(m.chat, res.imageUrl, 'error.jpg', null, m);
  } catch {
    await conn.reply(m.chat, '*[❗] 𝙀𝙍𝙍𝙊𝙍. 𝙋𝙊𝙍 𝙁𝘼𝙑𝙊𝙍, 𝙑𝙐𝙀𝙇𝙑𝘼 𝘼 𝙄𝙉𝙏𝙀𝙉𝙏𝘼𝙍𝙇𝙊*', m);
  }
}
if (command == 'logochicagamer') {
  try {
    await conn.reply(m.chat, '*[❗] 𝙀𝙇𝘼𝘽𝙊𝙍𝘼𝙉𝘿𝙊 𝙇𝙊𝙂𝙊, 𝘼𝙂𝙐𝘼𝙍𝘿𝙀 𝙐𝙉 𝙋𝙊𝘾𝙊...*', m);
    const res = await new Maker().Ephoto360('https://en.ephoto360.com/create-cute-girl-gamer-mascot-logo-online-687.html', [response[0]]);
    await conn.sendFile(m.chat, res.imageUrl, 'error.jpg', null, m);
  } catch {
    await conn.reply(m.chat, '*[❗] 𝙀𝙍𝙍𝙊𝙍. 𝙋𝙊𝙍 𝙁𝘼𝙑𝙊𝙍, 𝙑𝙐𝙀𝙇𝙑𝘼 𝘼 𝙄𝙉𝙏𝙀𝙉𝙏𝘼𝙍𝙇𝙊*', m);
  }
}
if (command == 'logonaruto') {
  try {
    await conn.reply(m.chat, '*[❗] 𝙀𝙇𝘼𝘽𝙊𝙍𝘼𝙉𝘿𝙊 𝙇𝙊𝙂𝙊, 𝘼𝙂𝙐𝘼𝙍𝘿𝙀 𝙐𝙉 𝙋𝙊𝘾𝙊...*', m);
    const res = await new Maker().Ephoto360('https://en.ephoto360.com/naruto-shippuden-logo-style-text-effect-online-808.html', [response[0]]);
    await conn.sendFile(m.chat, res.imageUrl, 'error.jpg', null, m);
  } catch {
    await conn.reply(m.chat, '*[❗] 𝙀𝙍𝙍𝙊𝙍. 𝙋𝙊𝙍 𝙁𝘼𝙑𝙊𝙍, 𝙑𝙐𝙀𝙇𝙑𝘼 𝘼 𝙄𝙉𝙏𝙀𝙉𝙏𝘼𝙍𝙇𝙊*', m);
  }
}
if (command == 'logofuturista') {
  try {
    await conn.reply(m.chat, '*[❗] 𝙀𝙇𝘼𝘽𝙊𝙍𝘼𝙉𝘿𝙊 𝙇𝙊𝙂𝙊, 𝘼𝙂𝙐𝘼𝙍𝘿𝙀 𝙐𝙉 𝙋𝙊𝘾𝙊...*', m);
    const res = await new Maker().Ephoto360('https://en.ephoto360.com/light-text-effect-futuristic-technology-style-648.html', [response[0]]);
    await conn.sendFile(m.chat, res.imageUrl, 'error.jpg', null, m);
  } catch {
    await conn.reply(m.chat, '*[❗] 𝙀𝙍𝙍𝙊𝙍. 𝙋𝙊𝙍 𝙁𝘼𝙑𝙊𝙍, 𝙑𝙐𝙀𝙇𝙑𝘼 𝘼 𝙄𝙉𝙏𝙀𝙉𝙏𝘼𝙍𝙇𝙊*', m);
  }
}
if (command == 'logonube') {
  try {
    await conn.reply(m.chat, '*[❗] 𝙀𝙇𝘼𝘽𝙊𝙍𝘼𝙉𝘿𝙊 𝙇𝙊𝙂𝙊, 𝘼𝙂𝙐𝘼𝙍𝘿𝙀 𝙐𝙉 𝙋𝙊𝘾𝙊...*', m);
    const res = await new Maker().Ephoto360('https://en.ephoto360.com/cloud-text-effect-139.html', [response[0]]);
    await conn.sendFile(m.chat, res.imageUrl, 'error.jpg', null, m);
  } catch {
    await conn.reply(m.chat, '*[❗] 𝙀𝙍𝙍𝙊𝙍. 𝙋𝙊𝙍 𝙁𝘼𝙑𝙊𝙍, 𝙑𝙐𝙀𝙇𝙑𝘼 𝘼 𝙄𝙉𝙏𝙀𝙉𝙏𝘼𝙍𝙇𝙊*', m);
  }
}
if (command == 'logoangel') {
  try {
    await conn.reply(m.chat, '*[❗] 𝙀𝙇𝘼𝘽𝙊𝙍𝘼𝙉𝘿𝙊 𝙇𝙊𝙂𝙊, 𝘼𝙂𝙐𝘼𝙍𝘿𝙀 𝙐𝙉 𝙋𝙊𝘾𝙊...*', m);
    const res = await new Maker().Ephoto360('https://en.ephoto360.com/angel-wing-effect-329.html', [response[0]]);
    await conn.sendFile(m.chat, res.imageUrl, 'error.jpg', null, m);
  } catch {
    await conn.reply(m.chat, '*[❗] 𝙀𝙍𝙍𝙊𝙍. 𝙋𝙊𝙍 𝙁𝘼𝙑𝙊𝙍, 𝙑𝙐𝙀𝙇𝙑𝘼 𝘼 𝙄𝙉𝙏𝙀𝙉𝙏𝘼𝙍𝙇𝙊*', m);
  }
}
if (command == 'logocielo') {
  try {
    await conn.reply(m.chat, '*[❗] 𝙀𝙇𝘼𝘽𝙊𝙍𝘼𝙉𝘿𝙊 𝙇𝙊𝙂𝙊, 𝘼𝙂𝙐𝘼𝙍𝘿𝙀 𝙐𝙉 𝙋𝙊𝘾𝙊...*', m);
    const res = await new Maker().Ephoto360('https://en.ephoto360.com/create-a-cloud-text-effect-in-the-sky-618.html', [response[0]]);
    await conn.sendFile(m.chat, res.imageUrl, 'error.jpg', null, m);
  } catch {
    await conn.reply(m.chat, '*[❗] 𝙀𝙍𝙍𝙊𝙍. 𝙋𝙊𝙍 𝙁𝘼𝙑𝙊𝙍, 𝙑𝙐𝙀𝙇𝙑𝘼 𝘼 𝙄𝙉𝙏𝙀𝙉𝙏𝘼𝙍𝙇𝙊*', m);
  }
}
if (command == 'logograffiti3d') {
  try {
    await conn.reply(m.chat, '*[❗] 𝙀𝙇𝘼𝘽𝙊𝙍𝘼𝙉𝘿𝙊 𝙇𝙊𝙂𝙊, 𝘼𝙂𝙐𝘼𝙍𝘿𝙀 𝙐𝙉 𝙋𝙊𝘾𝙊...*', m);
    const res = await new Maker().Ephoto360('https://en.ephoto360.com/text-graffiti-3d-208.html', [response[0]]);
    await conn.sendFile(m.chat, res.imageUrl, 'error.jpg', null, m);
  } catch {
    await conn.reply(m.chat, '*[❗] 𝙀𝙍𝙍𝙊𝙍. 𝙋𝙊𝙍 𝙁𝘼𝙑𝙊𝙍, 𝙑𝙐𝙀𝙇𝙑𝘼 𝘼 𝙄𝙉𝙏𝙀𝙉𝙏𝘼𝙍𝙇𝙊*', m);
  }
}
if (command == 'logomatrix') {
  try {
    await conn.reply(m.chat, '*[❗] 𝙀𝙇𝘼𝘽𝙊𝙍𝘼𝙉𝘿𝙊 𝙇𝙊𝙂𝙊, 𝘼𝙂𝙐𝘼𝙍𝘿𝙀 𝙐𝙉 𝙋𝙊𝘾𝙊...*', m);
    const res = await new Maker().Ephoto360('https://en.ephoto360.com/matrix-text-effect-154.html', [response[0]]);
    await conn.sendFile(m.chat, res.imageUrl, 'error.jpg', null, m);
  } catch {
    await conn.reply(m.chat, '*[❗] 𝙀𝙍𝙍𝙊𝙍. 𝙋𝙊𝙍 𝙁𝘼𝙑𝙊𝙍, 𝙑𝙐𝙀𝙇𝙑𝘼 𝘼 𝙄𝙉𝙏𝙀𝙉𝙏𝘼𝙍𝙇𝙊*', m);
  }
}
if (command == 'logohorror') {
  try {
    await conn.reply(m.chat, '*[❗] 𝙀𝙇𝘼𝘽𝙊𝙍𝘼𝙉𝘿𝙊 𝙇𝙊𝙂𝙊, 𝘼𝙂𝙐𝘼𝙍𝘿𝙀 𝙐𝙉 𝙋𝙊𝘾𝙊...*', m);
    const res = await new Maker().Ephoto360('https://en.ephoto360.com/blood-writing-text-online-77.html', [response[0]]);
    await conn.sendFile(m.chat, res.imageUrl, 'error.jpg', null, m);
  } catch {
    await conn.reply(m.chat, '*[❗] 𝙀𝙍𝙍𝙊𝙍. 𝙋𝙊𝙍 𝙁𝘼𝙑𝙊𝙍, 𝙑𝙐𝙀𝙇𝙑𝘼 𝘼 𝙄𝙉𝙏𝙀𝙉𝙏𝘼𝙍𝙇𝙊*', m);
  }
}
if (command == 'logoalas') {
  try {
    await conn.reply(m.chat, '*[❗] 𝙀𝙇𝘼𝘽𝙊𝙍𝘼𝙉𝘿𝙊 𝙇𝙊𝙂𝙊, 𝘼𝙂𝙐𝘼𝙍𝘿𝙀 𝙐𝙉 𝙋𝙊𝘾𝙊...*', m);
    const res = await new Maker().Ephoto360('https://en.ephoto360.com/the-effect-of-galaxy-angel-wings-289.html', [response[0]]);
    await conn.sendFile(m.chat, res.imageUrl, 'error.jpg', null, m);
  } catch {
    await conn.reply(m.chat, '*[❗] 𝙀𝙍𝙍𝙊𝙍. 𝙋𝙊𝙍 𝙁𝘼𝙑𝙊𝙍, 𝙑𝙐𝙀𝙇𝙑𝘼 𝘼 𝙄𝙉𝙏𝙀𝙉𝙏𝘼𝙍𝙇𝙊*', m);
  }
}
if (command == 'logoarmy') {
  try {
    await conn.reply(m.chat, '*[❗] 𝙀𝙇𝘼𝘽𝙊𝙍𝘼𝙉𝘿𝙊 𝙇𝙊𝙂𝙊, 𝘼𝙂𝙐𝘼𝙍𝘿𝙀 𝙐𝙉 𝙋𝙊𝘾𝙊...*', m);
    const res = await new Maker().Ephoto360('https://en.ephoto360.com/free-gaming-logo-maker-for-fps-game-team-546.html', [response[0]]);
    await conn.sendFile(m.chat, res.imageUrl, 'error.jpg', null, m);
  } catch {
    await conn.reply(m.chat, '*[❗] 𝙀𝙍𝙍𝙊𝙍. 𝙋𝙊𝙍 𝙁𝘼𝙑𝙊𝙍, 𝙑𝙐𝙀𝙇𝙑𝘼 𝘼 𝙄𝙉𝙏𝙀𝙉𝙏𝘼𝙍𝙇𝙊*', m);
  }
}

if (command == 'logopubg') {
 try {
  await conn.reply(m.chat, '*[❗] 𝙀𝙇𝘼𝘽𝙊𝙍𝘼𝙉𝘿𝙊 𝙇𝙊𝙂𝙊, 𝘼𝙂𝙐𝘼𝙍𝘿𝙀 𝙐𝙉 𝙋𝙊𝘾𝙊...*', m);
  const res = await new Maker().Ephoto360('https://en.ephoto360.com/pubg-logo-maker-cute-character-online-617.html', [response[0]]);
  await conn.sendFile(m.chat, res.imageUrl, 'error.jpg', null, m);
  } catch {
  await conn.reply(m.chat, '*[❗] 𝙀𝙍𝙍𝙊𝙍. 𝙋𝙊𝙍 𝙁𝘼𝙑𝙊𝙍, 𝙑𝙐𝙀𝙇𝙑𝘼 𝘼 𝙄𝙉𝙏𝙀𝙉𝙏𝘼𝙍𝙇𝙊*', m);
  }
}

if (command == 'logopubgfem') {
  try {
   await conn.reply(m.chat, '*[❗] 𝙀𝙇𝘼𝘽𝙊𝙍𝘼𝙉𝘿𝙊 𝙇𝙊𝙂𝙊, 𝘼𝙂𝙐𝘼𝙍𝘿𝙀 𝙐𝙉 𝙋𝙊𝘾𝙊...*', m);
   const res = await new Maker().Ephoto360('https://en.ephoto360.com/pubg-mascot-logo-maker-for-an-esports-team-612.html', [response[0]]);
   await conn.sendFile(m.chat, res.imageUrl, 'error.jpg', null, m);
   } catch {
   await conn.reply(m.chat, '*[❗] 𝙀𝙍𝙍𝙊𝙍. 𝙋𝙊𝙍 𝙁𝘼𝙑𝙊𝙍, 𝙑𝙐𝙀𝙇𝙑𝘼 𝘼 𝙄𝙉𝙏𝙀𝙉𝙏𝘼𝙍𝙇𝙊*', m);
   }
 }

 if (command == 'logolol') {
  try {
   await conn.reply(m.chat, '*[❗] 𝙀𝙇𝘼𝘽𝙊𝙍𝘼𝙉𝘿𝙊 𝙇𝙊𝙂𝙊, 𝘼𝙂𝙐𝘼𝙍𝘿𝙀 𝙐𝙉 𝙋𝙊𝘾𝙊...*', m);
   const res = await new Maker().Ephoto360('https://en.ephoto360.com/make-your-own-league-of-legends-wallpaper-full-hd-442.html', [response[0]]);
   await conn.sendFile(m.chat, res.imageUrl, 'error.jpg', null, m);
   } catch {
   await conn.reply(m.chat, '*[❗] 𝙀𝙍𝙍𝙊𝙍. 𝙋𝙊𝙍 𝙁𝘼𝙑𝙊𝙍, 𝙑𝙐𝙀𝙇𝙑𝘼 𝘼 𝙄𝙉𝙏𝙀𝙉𝙏𝘼𝙍𝙇𝙊*', m);
   }
 }

 if (command == 'logoamongus') {
  try {
   await conn.reply(m.chat, '*[❗] 𝙀𝙇𝘼𝘽𝙊𝙍𝘼𝙉𝘿𝙊 𝙇𝙊𝙂𝙊, 𝘼𝙂𝙐𝘼𝙍𝘿𝙀 𝙐𝙉 𝙋𝙊𝘾𝙊...*', m);
   const res = await new Maker().Ephoto360('https://en.ephoto360.com/create-a-cover-image-for-the-game-among-us-online-762.html', [response[0]]);
   await conn.sendFile(m.chat, res.imageUrl, 'error.jpg', null, m);
   } catch {
   await conn.reply(m.chat, '*[❗] 𝙀𝙍𝙍𝙊𝙍. 𝙋𝙊𝙍 𝙁𝘼𝙑𝙊𝙍, 𝙑𝙐𝙀𝙇𝙑𝘼 𝘼 𝙄𝙉𝙏𝙀𝙉𝙏𝘼𝙍𝙇𝙊*', m);
   }
 }

 if (command == 'logovideopubg') {
  try {
   await conn.reply(m.chat, '*[❗] 𝙀𝙇𝘼𝘽𝙊𝙍𝘼𝙉𝘿𝙊 𝙇𝙊𝙂𝙊, 𝘼𝙂𝙐𝘼𝙍𝘿𝙀 𝙐𝙉 𝙋𝙊𝘾𝙊...*', m);
   const res = await new Maker().Ephoto360('https://en.ephoto360.com/lightning-pubg-video-logo-maker-online-615.html', [response[0]]);
   await conn.sendFile(m.chat, res.imageUrl, 'error.jpg', null, m);
   } catch {
   await conn.reply(m.chat, '*[❗] 𝙀𝙍𝙍𝙊𝙍. 𝙋𝙊𝙍 𝙁𝘼𝙑𝙊𝙍, 𝙑𝙐𝙀𝙇𝙑𝘼 𝘼 𝙄𝙉𝙏𝙀𝙉𝙏𝘼𝙍𝙇𝙊*', m);
   }
 }

 if (command == 'logovideotiger') {
  try {
   await conn.reply(m.chat, '*[❗] 𝙀𝙇𝘼𝘽𝙊𝙍𝘼𝙉𝘿𝙊 𝙇𝙊𝙂𝙊, 𝘼𝙂𝙐𝘼𝙍𝘿𝙀 𝙐𝙉 𝙋𝙊𝘾𝙊...*', m);
   const res = await new Maker().Ephoto360('https://en.ephoto360.com/create-digital-tiger-logo-video-effect-723.html', [response[0]]);
   await conn.sendFile(m.chat, res.imageUrl, 'error.jpg', null, m);
   } catch {
   await conn.reply(m.chat, '*[❗] 𝙀𝙍𝙍𝙊𝙍. 𝙋𝙊𝙍 𝙁𝘼𝙑𝙊𝙍, 𝙑𝙐𝙀𝙇𝙑𝘼 𝘼 𝙄𝙉𝙏𝙀𝙉𝙏𝘼𝙍𝙇𝙊*', m);
   }
 }

 if (command == 'logovideointro') {
  try {
   await conn.reply(m.chat, '*[❗] 𝙀𝙇𝘼𝘽𝙊𝙍𝘼𝙉𝘿𝙊 𝙇𝙊𝙂𝙊, 𝘼𝙂𝙐𝘼𝙍𝘿𝙀 𝙐𝙉 𝙋𝙊𝘾𝙊...*', m);
   const res = await new Maker().Ephoto360('https://en.ephoto360.com/free-logo-intro-video-maker-online-558.html', [response[0]]);
   await conn.sendFile(m.chat, res.imageUrl, 'error.jpg', null, m);
   } catch {
   await conn.reply(m.chat, '*[❗] 𝙀𝙍𝙍𝙊𝙍. 𝙋𝙊𝙍 𝙁𝘼𝙑𝙊𝙍, 𝙑𝙐𝙀𝙇𝙑𝘼 𝘼 𝙄𝙉𝙏𝙀𝙉𝙏𝘼𝙍𝙇𝙊*', m);
   }
 }

 if (command == 'logovideogaming') {
  try {
   await conn.reply(m.chat, '*[❗] 𝙀𝙇𝘼𝘽𝙊𝙍𝘼𝙉𝘿𝙊 𝙇𝙊𝙂𝙊, 𝘼𝙂𝙐𝘼𝙍𝘿𝙀 𝙐𝙉 𝙋𝙊𝘾𝙊...*', m);
   const res = await new Maker().Ephoto360('https://en.ephoto360.com/create-elegant-rotation-logo-online-586.html', [response[0]]);
   await conn.sendFile(m.chat, res.imageUrl, 'error.jpg', null, m);
   } catch {
   await conn.reply(m.chat, '*[❗] 𝙀𝙍𝙍𝙊𝙍. 𝙋𝙊𝙍 𝙁𝘼𝙑𝙊𝙍, 𝙑𝙐𝙀𝙇𝙑𝘼 𝘼 𝙄𝙉𝙏𝙀𝙉𝙏𝘼𝙍𝙇𝙊*', m);
   }
 }

 if (command == 'logoguerrero') {
  try {
   await conn.reply(m.chat, '*[❗] 𝙀𝙇𝘼𝘽𝙊𝙍𝘼𝙉𝘿𝙊 𝙇𝙊𝙂𝙊, 𝘼𝙂𝙐𝘼𝙍𝘿𝙀 𝙐𝙉 𝙋𝙊𝘾𝙊...*', m);
   const res = await new Maker().Ephoto360('https://en.ephoto360.com/create-project-yasuo-logo-384.html', [response[0]]);
   await conn.sendFile(m.chat, res.imageUrl, 'error.jpg', null, m);
   } catch {
   await conn.reply(m.chat, '*[❗] 𝙀𝙍𝙍𝙊𝙍. 𝙋𝙊𝙍 𝙁𝘼𝙑𝙊𝙍, 𝙑𝙐𝙀𝙇𝙑𝘼 𝘼 𝙄𝙉𝙏𝙀𝙉𝙏𝘼𝙍𝙇𝙊*', m);
   }
 }

 if (command == 'logoportadaplayer') {
  try {
   await conn.reply(m.chat, '*[❗] 𝙀𝙇𝘼𝘽𝙊𝙍𝘼𝙉𝘿𝙊 𝙇𝙊𝙂𝙊, 𝘼𝙂𝙐𝘼𝙍𝘿𝙀 𝙐𝙉 𝙋𝙊𝘾𝙊...*', m);
   const res = await new Maker().Ephoto360('https://en.ephoto360.com/create-the-cover-game-playerunknown-s-battlegrounds-401.html', [response[0]]);
   await conn.sendFile(m.chat, res.imageUrl, 'error.jpg', null, m);
   } catch {
   await conn.reply(m.chat, '*[❗] 𝙀𝙍𝙍𝙊𝙍. 𝙋𝙊𝙍 𝙁𝘼𝙑𝙊𝙍, 𝙑𝙐𝙀𝙇𝙑𝘼 𝘼 𝙄𝙉𝙏𝙀𝙉𝙏𝘼𝙍𝙇𝙊*', m);
   }
 }

 if (command == 'logoportadaplayer') {
  try {
   await conn.reply(m.chat, '*[❗] 𝙀𝙇𝘼𝘽𝙊𝙍𝘼𝙉𝘿𝙊 𝙇𝙊𝙂𝙊, 𝘼𝙂𝙐𝘼𝙍𝘿𝙀 𝙐𝙉 𝙋𝙊𝘾𝙊...*', m);
   const res = await new Maker().Ephoto360('https://en.ephoto360.com/create-the-cover-game-playerunknown-s-battlegrounds-401.html', [response[0]]);
   await conn.sendFile(m.chat, res.imageUrl, 'error.jpg', null, m);
   } catch {
   await conn.reply(m.chat, '*[❗] 𝙀𝙍𝙍𝙊𝙍. 𝙋𝙊𝙍 𝙁𝘼𝙑𝙊𝙍, 𝙑𝙐𝙀𝙇𝙑𝘼 𝘼 𝙄𝙉𝙏𝙀𝙉𝙏𝘼𝙍𝙇𝙊*', m);
   }
 }


 if (command == 'logoportadaff') {
  try {
   await conn.reply(m.chat, '*[❗] 𝙀𝙇𝘼𝘽𝙊𝙍𝘼𝙉𝘿𝙊 𝙇𝙊𝙂𝙊, 𝘼𝙂𝙐𝘼𝙍𝘿𝙀 𝙐𝙉 𝙋𝙊𝘾𝙊...*', m);
   const res = await new Maker().Ephoto360('https://en.ephoto360.com/create-free-fire-facebook-cover-online-567.html', [response[0]]);
   await conn.sendFile(m.chat, res.imageUrl, 'error.jpg', null, m);
   } catch {
   await conn.reply(m.chat, '*[❗] 𝙀𝙍𝙍𝙊𝙍. 𝙋𝙊𝙍 𝙁𝘼𝙑𝙊𝙍, 𝙑𝙐𝙀𝙇𝙑𝘼 𝘼 𝙄𝙉𝙏𝙀𝙉𝙏𝘼𝙍𝙇𝙊*', m);
   }
 }

 if (command == 'logoportadapubg') {
  try {
   await conn.reply(m.chat, '*[❗] 𝙀𝙇𝘼𝘽𝙊𝙍𝘼𝙉𝘿𝙊 𝙇𝙊𝙂𝙊, 𝘼𝙂𝙐𝘼𝙍𝘿𝙀 𝙐𝙉 𝙋𝙊𝘾𝙊...*', m);
   const res = await new Maker().Ephoto360('https://en.ephoto360.com/create-facebook-game-pubg-cover-photo-407.html', [response[0]]);
   await conn.sendFile(m.chat, res.imageUrl, 'error.jpg', null, m);
   } catch {
   await conn.reply(m.chat, '*[❗] 𝙀𝙍𝙍𝙊𝙍. 𝙋𝙊𝙍 𝙁𝘼𝙑𝙊𝙍, 𝙑𝙐𝙀𝙇𝙑𝘼 𝘼 𝙄𝙉𝙏𝙀𝙉𝙏𝘼𝙍𝙇𝙊*', m);
   }
 }

 if (command == 'logoportadacounter') {
  try {
   await conn.reply(m.chat, '*[❗] 𝙀𝙇𝘼𝘽𝙊𝙍𝘼𝙉𝘿𝙊 𝙇𝙊𝙂𝙊, 𝘼𝙂𝙐𝘼𝙍𝘿𝙀 𝙐𝙉 𝙋𝙊𝘾𝙊...*', m);
   const res = await new Maker().Ephoto360('https://en.ephoto360.com/create-youtube-banner-game-cs-go-online-403.html', [response[0]]);
   await conn.sendFile(m.chat, res.imageUrl, 'error.jpg', null, m);
   } catch {
   await conn.reply(m.chat, '*[❗] 𝙀𝙍𝙍𝙊𝙍. 𝙋𝙊𝙍 𝙁𝘼𝙑𝙊𝙍, 𝙑𝙐𝙀𝙇𝙑𝘼 𝘼 𝙄𝙉𝙏𝙀𝙉𝙏𝘼𝙍𝙇𝙊*', m);
   }
 }

}
handler.help = ['logocorazon', 'logochristmas', 'logopareja', 'logoglitch', 'logosad', 'logogaming', 'logosolitario', 'logodragonball', 'logoneon', 'logogatito', 'logochicagamer', 'logonaruto', 'logofuturista', 'logonube', 'logoangel', 'logomurcielago', 'logocielo', 'logograffiti3d', 'logomatrix', 'logohorror', 'logoalas', 'logoarmy', 'logopubg', 'logopubgfem', 'logolol', 'logoamongus', 'logovideopubg', 'logovideotiger', 'logovideointro', 'logovideogaming', 'logoguerrero', 'logoportadaplayer', 'logoportadaff', 'logoportadapubg', 'logoportadacounter']
handler.tags = ['fun']
handler.command = /^logocorazon|logochristmas|logopareja|logoglitch|logosad|logogaming|logosolitario|logodragonball|logoneon|logogatito|logochicagamer|logonaruto|logofuturista|logonube|logoangel|logomurcielago|logocielo|logograffiti3d|logomatrix|logohorror|logoalas|logoarmy|logopubg|logopubgfem|logolol|logoamongus|logovideopubg|logovideotiger|logovideointro|logovideogaming|logoguerrero|logoportadaplayer|logoportadaff|logoportadapubg|logoportadacounter/i;
export default handler;*/

import fetch from 'node-fetch'
import { ephoto } from '../lib/ephoto.js'

let handler = async (m, { text, command, conn }) => {
  if (!text) return m.reply(`✳️ Ingresa un texto para crear el logo\n\n*Ejemplo:* ${command} Shadow Bot`)
  try {
    let url
    switch (command) {
      case 'logocorazon':
        url = await ephoto('https://en.ephoto360.com/text-heart-flashlight-188.html', text)
        break
      case 'logochristmas':
        url = await ephoto('https://en.ephoto360.com/christmas-effect-by-name-376.html', text)
        break
      case 'logopareja':
        url = await ephoto('https://en.ephoto360.com/sunlight-shadow-text-204.html', text)
        break
      case 'logoglitch':
        url = await ephoto('https://en.ephoto360.com/create-digital-glitch-text-effects-online-767.html', text)
        break
      case 'logosad':
        url = await ephoto('https://en.ephoto360.com/write-text-on-wet-glass-online-589.html', text)
        break
      case 'logogaming':
        url = await ephoto('https://en.ephoto360.com/make-team-logo-online-free-432.html', text)
        break
      case 'logosolitario':
        url = await ephoto('https://en.ephoto360.com/create-typography-text-effect-on-pavement-online-774.html', text)
        break
      case 'logodragonball':
        url = await ephoto('https://en.ephoto360.com/create-dragon-ball-style-text-effects-online-809.html', text)
        break
      case 'logoneon':
        url = await ephoto('https://en.ephoto360.com/create-impressive-neon-glitch-text-effects-online-768.html', text)
        break
      case 'logogatito':
        url = await ephoto('https://en.ephoto360.com/handwritten-text-on-foggy-glass-online-680.html', text)
        break
      case 'logopokemon':
        url = await ephoto('https://en.ephoto360.com/create-a-pokemon-logo-style-online-free-184.html', text)
        break
      case 'logoff':
        url = await ephoto('https://en.ephoto360.com/create-realistic-fire-text-effect-online-903.html', text)
        break
      case 'logometal':
        url = await ephoto('https://en.ephoto360.com/create-metallic-text-effect-online-824.html', text)
        break
      case 'logohalloween':
        url = await ephoto('https://en.ephoto360.com/create-halloween-text-effects-online-741.html', text)
        break
      case 'logoblood':
        url = await ephoto('https://en.ephoto360.com/create-horror-blood-text-effect-online-843.html', text)
        break
      case 'logolove2':
        url = await ephoto('https://en.ephoto360.com/create-love-neon-light-text-effect-online-803.html', text)
        break
      case 'logochocolate':
        url = await ephoto('https://en.ephoto360.com/create-chocolate-text-effect-online-800.html', text)
        break
      default:
        return m.reply('❌ Comando no reconocido.')
    }

    await conn.sendMessage(m.chat, {
      image: { url },
      caption: `✅ *Logo generado con éxito*\n*🖋 Texto:* ${text}\n*🔗 Efecto:* ${command}`
    }, { quoted: m })

  } catch (e) {
    console.error(e)
    m.reply('❌ Hubo un error al generar el logo. Intenta de nuevo más tarde.')
  }
}

handler.command = [
  'logocorazon', 'logochristmas', 'logopareja', 'logoglitch',
  'logosad', 'logogaming', 'logosolitario', 'logodragonball',
  'logoneon', 'logogatito', 'logopokemon', 'logoff', 'logometal',
  'logohalloween', 'logoblood', 'logolove2', 'logochocolate'
]

export default handler

