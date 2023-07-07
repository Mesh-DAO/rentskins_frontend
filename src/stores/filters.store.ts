import create from 'zustand'
import { IStates } from './interfaces/filters.interface'

const useFilterStore = create<IStates>((set) => ({
  notificationFilter: 'Tudo',
  setNotificationFilter: (notificationFilter: string) => {
    set(() => ({ notificationFilter }))
  },

  inventoryFilter: [],
  setInventoryFilter: (inventoryFilter: string[]) => {
    set(() => ({ inventoryFilter }))
  },

  inventoryMainFilter: undefined,
  setInventoryMainFilter: (inventoryMainFilter) => {
    set(() => ({ inventoryMainFilter }))
  },
}))

export default useFilterStore
