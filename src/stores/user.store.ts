import create from 'zustand'
import { IStates } from './interfaces/user.interface'

const useUserStore = create<IStates>((set) => ({
  userLogged: false,
  setUserLogged: (bool) => {
    set(() => ({ userLogged: bool }))
  },

  user: { username: '', steamid: '', picture: '' },
  setUser: (user) => {
    set(() => ({ user }))
  },
}))

export default useUserStore
