import fastify from 'fastify'
import SteamAuth from 'node-steam-openid'

const app = fastify()
const port = 3333
const steam = new SteamAuth({
  // Crie uma nova chave utilizando o domínio que está sendo utilizado (localhost
  // para produção / domínio para produto).
  // Link para o registro do site: https://steamcommunity.com/dev/registerkey.

  realm: 'http://localhost:3333', // Site name displayed to users on logon
  returnUrl: 'http://localhost:3333/auth/steam/authenticate', // Your return route
  apiKey: '84FA1FDB6AF8E8F49B0E689C819B3A43', // Steam API key
})

app.get('/auth/steam', async (req, res) => {
  const redirectUrl = await steam.getRedirectUrl()
  return res.redirect(redirectUrl)
})

app.get('/auth/steam/authenticate', async (req, res) => {
  try {
    const user = await steam.authenticate(req)

    return user
  } catch (error) {
    console.error(error)
  }
})

app
  .listen({
    port,
  })
  .then(() => {
    console.log(`Server running on localhost:${port}`)
  })
