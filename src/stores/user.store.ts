import create from 'zustand'
import { IStates } from './interfaces/user.interface'

const useUserStore = create<IStates>((set) => ({
  user: { username: '', steamid: '', picture: '' },
  setUser: (user) => {
    set(() => ({ user }))
  },
}))

export default useUserStore
