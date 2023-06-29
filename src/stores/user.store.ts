import create from 'zustand'
import { IStates } from './interfaces/user.interface'

const useUserStore = create<IStates>((set) => ({
  user: { username: '', steamid: '', picture: '' },
  setUser: (user) => {
    set(() => ({ user }))
  },

  wallet: { data: {} },
  setWallet: (wallet) => {
    const newWallet = {
      data: {
        ...wallet.data,
        value: new Intl.NumberFormat('pt-BR').format(
          Number(wallet.data?.value),
        ),
      },
    }
    set(() => ({ wallet: newWallet }))
  },
  logout: false,
  setLogout: (logout) => {
    set(() => ({ logout }))
  },
}))

export default useUserStore
