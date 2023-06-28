export interface IUser {
  steamid: string | number
  username: string
  picture: string
}

export interface IWalletUser {
  data?: {
    id?: string
    owner_name?: string
    owner_id?: string
    value?: string
    createdAt?: string
    updatedAt?: string | null
    deletedAt?: string | null
  }
}

export interface IStates {
  user: IUser
  setUser: (user: IUser) => void

  wallet: IWalletUser
  setWallet: (wallet: IWalletUser) => void
}
