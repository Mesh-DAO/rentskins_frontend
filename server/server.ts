import fastify, { FastifyRequest } from 'fastify'
import SteamAuth from 'node-steam-openid'
import SteamUser from 'steam-user'
import GlobalOffensive from 'globaloffensive'
import SteamCommunity from 'steamcommunity'
import { z } from 'zod'
import console from 'console'

const app = fastify()
const port = 3001
const appid = 730
const steamid = '76561198195920183'
const apiKey = 'B8079E42FFC7D0C84CDA7D0A167544F8'

const client = new SteamUser()
const csgo = new GlobalOffensive(client)

const steam = new SteamAuth({
  // Crie uma nova chave utilizando o domínio que está sendo utilizado (localhost
  // para produção / domínio para produto).
  // Link para o registro do site: https://steamcommunity.com/dev/registerkey.

  realm: `http://localhost:${port}`, // Site name displayed to users on logon
  returnUrl: `http://localhost:${port}/auth/steam/authenticate/callback`, // Your return route
  apiKey, // Steam API key
})

app.get('/auth/steam/authenticate', async (req, res) => {
  const redirectUrl = await steam.getRedirectUrl()
  return res.redirect(redirectUrl)
})

app.get('/auth/steam/authenticate/callback', async (req, res) => {
  try {
    const user = await steam.authenticate(req)

    return res.redirect(
      `http://localhost:3000/?steamid=${user.steamid}&picture=${user.avatar.large}&username=${user.username}`,
    )
  } catch (error) {
    console.error(error)
  }
})

app.get('/api/retrieveInventory', (req, res) => {
  const community = new SteamCommunity()

  return community.getUserInventoryContents(
    '76561199205585878',
    730,
    2,
    false,
    'english',
    (error, response) => {
      if (error) {
        return res.send({
          message: 'Error',
          error,
        })
      } else {
        return res.send(response)
      }
    },
  )
})

app.post('/api/retrieveFloat', (req, res) => {
  const bodySchema = z.object({
    steamid: z.string(),
    assetid: z.string(),
    inspectlink: z.string(),
  })

  const { steamid, assetid, inspectlink } = bodySchema.parse(req.body)

  const filteredInspectLink = inspectlink.slice(
    inspectlink.indexOf('%D') + 2,
    inspectlink.length,
  )

  console.log('Entered')

  // CONTA BOT: ADICIONAR INFORMAÇÕES DE LOGIN NAS ENVIRONMENT VARIABLES
  client.logOn({ accountName: 'RentSkinsBot', password: '6Ilqt2Tv97@g' })
  // ___________________________________________________________________

  client.on('loggedOn', (details) => {
    console.log('Logged on: ' + client.steamID)
    client.gamesPlayed(730, true)

    csgo.on('connectedToGC', () => {
      if (csgo.haveGCSession) {
        console.log('Has GC Connection')
        csgo.inspectItem(steamid, assetid, filteredInspectLink, (callback) => {
          res.send(callback)
        })
      }
    })
  })
})

app
  .listen({
    port,
  })
  .then(() => {
    console.log(`Server running on localhost:${port}`)
  })
