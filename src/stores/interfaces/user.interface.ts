export interface IUser {
  steamid: string | number
  username: string
  picture: string
}

export interface IStates {
  user: IUser
  setUser: (user: IUser) => void
  logout: boolean
  setLogout: (logout: boolean) => void
}
