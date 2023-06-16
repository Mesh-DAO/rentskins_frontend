import fastify from 'fastify'
import SteamAuth from 'node-steam-openid'
import SteamUser from 'steam-user'
import GlobalOffensive from 'globaloffensive'
import SteamCommunity from 'steamcommunity'

const app = fastify()
const user = new SteamUser()
const csgo = new GlobalOffensive(user)
const port = 3001
const appid = 730
const steamid = '76561198195920183'
const apiKey = 'B8079E42FFC7D0C84CDA7D0A167544F8'

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

app.get('/teste', async (req, res) => {
  const community = new SteamCommunity()

  return community.getSteamUser('z3ik3n', (error, user) => {
    if (error) {
      console.log(error)
    } else {
      console.log(user.steamID)
      user.getInventoryContents(730, 2, false, 'english', (error, response) => {
        if (error) {
          console.log(error)
        } else {
          const data = response.map((item) => {
            if (!item.name.includes('Case')) {
              return item
            }
            return null
          })

          console.log(data)
        }
      })
    }
  })
})

app
  .listen({
    port,
  })
  .then(() => {
    console.log(`Server running on localhost:${port}`)
  })
