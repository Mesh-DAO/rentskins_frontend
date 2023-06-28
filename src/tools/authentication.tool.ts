import { IUser } from '@/stores/interfaces/user.interface'
import JsonWebToken from './jsonwebtoken.tool'
import LocalStorage from './localstorage.tool'

export default class Authentication {
  public static login(params: any, setUser: any) {
    const tokenOnURL = params.get('token')

    const createUserInStore = (verification: IUser) => {
      setUser({
        username: verification.username,
        picture: verification.picture,
        steamid: verification.steamid,
      })
    }

    if (tokenOnURL) {
      const verification = JsonWebToken.verify(tokenOnURL) as IUser

      if (
        verification !== null &&
        verification !== undefined &&
        verification.steamid
      ) {
        LocalStorage.create('token', tokenOnURL)
        createUserInStore(verification)
        console.log('User first login')
      }
    } else {
      const storage = LocalStorage.get('token')

      if (storage !== null && storage !== undefined) {
        const verification = JsonWebToken.verify(storage) as IUser

        if (
          verification !== null &&
          verification !== undefined &&
          verification.steamid
        ) {
          createUserInStore(verification)
          console.log('User returning login')
        } else {
          console.log('User not logged in.')
        }
      } else {
        console.log('User not logged in')
      }
    }
  }
}
