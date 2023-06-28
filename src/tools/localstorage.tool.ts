export interface IUser {
  steamid: string
  picture: string
  username: string
}

export default class LocalStorage {
  public static setUser({ steamid, picture, username }: IUser) {
    const user = { steamid, picture, username }
    localStorage.setItem('user', JSON.stringify(user))
  }

  public static getUser() {
    const response = localStorage.getItem('user')

    if (response !== null || response !== undefined) {
      return JSON.parse(response as string) as IUser
    }
  }
}
