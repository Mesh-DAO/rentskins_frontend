import { Api } from '@/providers'
import { IWalletUser } from './interfaces/wallet.interface'

export default class WalletService {
  public static getAllUsers() {
    return Api.get<IWalletUser[]>('/v1/wallet')
  }

  public static async getUserByID(steamid: string) {
    return Api.get<IWalletUser | boolean>(`/v1/wallet/user/${steamid}`)
      .then((response) => response)
      .catch((e) => e)
  }

  public static async createEmptyWallet(username: string, steamid: string) {
    const user = await this.getUserByID(steamid)

    console.log(user)

    if (!user.data) {
      return Api.post('/v1/wallet', {
        owner_name: username,
        owner_id: steamid,
        value: '0',
      })
        .then(() => this.getUserByID(steamid))
        .catch((e) => e)
    } else {
      return { message: 'User wallet already exists' }
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
