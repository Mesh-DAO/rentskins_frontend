import 'dotenv/config'
import JsonWebToken from '@/tools/jsonwebtoken.tool'
import fastify from 'fastify'
import SteamAuth from 'node-steam-openid'

const app = fastify()

const steam = new SteamAuth({
  // Crie uma nova chave utilizando o domínio que está sendo utilizado (localhost
  // para produção / domínio para produto).
  // Link para o registro do site: https://steamcommunity.com/dev/registerkey.

  realm: `${process.env.NEXT_PUBLIC_URL}`, // Site name displayed to users on logon
  returnUrl: `${process.env.NEXT_PUBLIC_URL}/auth/steam/authenticate/callback`, // Your return route
  apiKey: 'CBED4D515E26D768D330CDDC83AB1AB2', // Steam API key
})

app.get('/auth/steam/authenticate', async (req, res) => {
  const redirectUrl = await steam.getRedirectUrl()
  return res.redirect(redirectUrl)
})

app.get('/auth/steam/authenticate/callback', async (req, res) => {
  try {
    const user = await steam.authenticate(req)

    const data = {
      username: user.username,
      picture: user.avatar.large,
      steamid: user.steamid,
    }

    const token = JsonWebToken.create(data)

    return res.redirect(`${process.env.NEXT_PUBLIC_URL}/?token=${token}`)
  } catch (error) {
    console.error(error)
  }
})

app.listen(3001).then(() => {
  console.log(`Server running on ${process.env.NEXT_PUBLIC_URL}`)
})
