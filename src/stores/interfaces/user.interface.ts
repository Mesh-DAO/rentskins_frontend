export interface IUser {
  steamid: string | number
  username: string
  picture: string
}

export interface IStates {
  userLogged: boolean
  setUserLogged: (bool: boolean) => void

  user: IUser
  setUser: (user: IUser) => void
}
