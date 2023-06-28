import { Api } from '@/providers'
import { IWalletUser } from './interfaces/wallet.interface'

export default class WalletService {
  public static getAllUsers(): Promise<IWalletUser[]> {
    return Api.get('/v1/wallet')
  }

  public static async getUserByID(steamid: string): Promise<IWalletUser> {
    return Api.get(`/v1/wallet/user/${steamid}`)
      .then((response) => response)
      .catch((e) => e)
  }

  public static async createEmptyWallet(username: string, steamid: string) {
    const user = await this.getUserByID(steamid)

    if (!user.data) {
      return Api.post('/v1/wallet', {
        owner_name: username,
        owner_id: steamid,
        value: '0',
      })
        .then((response) => response)
        .catch((e) => e)
    }
  }

  public static async updateWallet(
    username: string,
    steamid: string,
    value: string | number,
  ) {
    const user = await this.getUserByID(steamid)

    if (user) {
      return Api.patch(`/v1/wallet/${user.data.id}`, {
        owner_name: username,
        owner_id: steamid,
        value,
      })
    }
  }

  public static async deleteWallet(steamid: string) {
    const user = await this.getUserByID(steamid)

    if (user) {
      return Api.delete(`/v1/wallet/${user.data.id}`)
    }
  }
}
