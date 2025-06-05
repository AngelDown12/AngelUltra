import { join, dirname } from 'path'
import { createRequire } from 'module'
import { fileURLToPath } from 'url'
import { setupMaster, fork } from 'cluster'
import { watchFile, unwatchFile } from 'fs'
import cfonts from 'cfonts'

console.log('\n💻ㅤIniciando Sistema')

const __dirname = dirname(fileURLToPath(import.meta.url))
const require = createRequire(__dirname)

cfonts.say('Shadow Ultra', {
  font: 'chrome',
  align: 'center',
  gradient: ['red', 'magenta']
})

cfonts.say(`Developed By Shadow's Club 🌹`, {
  font: 'console',
  align: 'center',
  gradient: ['red', 'magenta']
})

let isRunning = false

async function start(files) {
  if (isRunning) return
  isRunning = true

  for (const file of files) {
    const args = [join(__dirname, file), ...process.argv.slice(2)]

    setupMaster({
      exec: args[0],
      args: args.slice(1),
    })

    let p = fork()

    p.on('exit', (code) => {
      isRunning = false
      start(files)

      if (code === 0) return
      watchFile(args[0], () => {
        unwatchFile(args[0])
        start(files)
      })
    })
  }
}

start(['main.js'])