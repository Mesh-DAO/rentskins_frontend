import create from 'zustand'
import { IStates } from './interfaces/nextjs.interface'

const useNextjsStore = create<IStates>((set) => ({
  customMetadata: {
    title: 'Rent Skins',
    description: 'O maior site de compra e alugueis de skins.',
  },
  setCustomMetadata: (customMetadata) => set(() => ({ customMetadata })),
}))

export default useNextjsStore
