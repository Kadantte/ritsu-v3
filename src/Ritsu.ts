import { config } from 'dotenv'
import { readFileSync } from 'fs'
import RitsuClient from './structures/RitsuClient'

config()
const client = new RitsuClient(process.env.DISCORD_TOKEN)

client.start().then(() => {
  console.log(readFileSync('title.txt', 'utf8').toString())
  console.log('[Client] Connected to the wonderland.')
  console.log(
    `[Client] Loaded ${client.commandManager.commands.size} commands.`
  )
})