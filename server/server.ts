import fastify from 'fastify'
import SteamUser from 'steam-user'
import GlobalOffensive from 'globaloffensive'

const user = new SteamUser()
const csgo = new GlobalOffensive(user)

const app = fastify()

// Conta e Password serão dos bots que o Bruno criou,
// ou qualquer outro bot/conta. Tanto faz.
user.logOn({
  accountName: 'rentskins',
  password: 'rent@123',
})

// STEAM ID DO DONO DA ARMA
const steamid = '76561198195920183' // Valor de Exemplo

// ASSET ID CONTIDO NO INVENTÁRIO, É O ID DA ARMA
const assetsid = ['24996228323'] // Valor de Exemplo

// QUALQUER INSPECT LINK DA ARMA, CONTIDO NO INVENTÁRIO
// Obs: É necessário apenas para pegar o id que vem depois do 'assetid%D',
// contido no final da url
const inspectLinks = [
  'steam://rungame/730/76561202255233023/+csgo_econ_action_preview%20S%owner_steamid%A%assetid%D12278191656445975463',
] // Valor de Exemplo

user.on('loggedOn', () => {
  user.gamesPlayed(730)

  csgo.on('connectedToGC', () => {
    if (csgo.haveGCSession) {
      inspectLinks.map((item, index) => {
        const filteredID = item.slice(item.indexOf('%D') + 2, item.length)

        return csgo.inspectItem(
          steamid,
          assetsid[index],
          filteredID,
          ({ paintwear }) => console.log(paintwear), // paintwear === float / Só precisamos dessa informação de cada arma,
          // Também dá pra puxar os Stickers, o nosso site vai utilizar também, caso queira já adicionar.
        )
      })
    } else {
      // ERRO NO LOGIN/CONEXÃO COM A GAME CONNECTION
      console.error('Error')
    }
  })
})

app.listen({ port: 3001 })
