import { IUser } from '@/stores/interfaces/user.interface'

export default class LocalStorage {
  public static create(key: string, value: object | string) {
    localStorage.setItem(key, JSON.stringify(value))
  }

  public static get(key: string) {
    const response = localStorage.getItem(key)

    if (response !== null || response !== undefined) {
      return JSON.parse(response as string)
    }
  }

  public static getUser() {
    const response = localStorage.getItem('user')

    if (response !== null || response !== undefined) {
      return JSON.parse(response as string) as IUser
    }
  }
}
