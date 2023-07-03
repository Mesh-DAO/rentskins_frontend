import { NextResponse } from 'next/server'
import SteamUser from 'steam-user'
import GlobalOffensive from 'globaloffensive'

export async function GET() {
  const client = new SteamUser()
  const csgo = new GlobalOffensive(client)
  client.logOn({ accountName: 'z3ik3n', password: 'Zeiken@12' })
  client.on('loggedOn', (details) => {
    console.log('Logado no: ' + client.steamID)
    client.gamesPlayed(730, true)

    csgo.on('connectedToGC', () => {
      if (csgo.haveGCSession) {
        console.log('Connected')
      } else {
        console.log('Not connected')
      }
    })
  })
  return NextResponse.json({ message: 'ok' })
}
