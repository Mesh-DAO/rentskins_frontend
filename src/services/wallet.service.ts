import { Api } from '@/providers'

export default class WalletService {
  public static getUserWallet(steamid: string) {
    return Api.get(`/v1/wallet/user/${steamid}`)
  }

  public static createEmptyWallet(username: string, steamid: string) {
    return Api.post('/v1/wallet', {
      owner_name: username,
      owner_id: steamid,
      value: '0',
    })
  }
}
